(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/ssr/fc95d_OneDrive_Desktop_Next-Level-Technology_Assingment_Assingment6_client_960c79._.js", {

"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/server/web/globals.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "ensureInstrumentationRegistered": ()=>ensureInstrumentationRegistered
});
async function registerInstrumentation() {
    const register = "_ENTRIES" in globalThis && _ENTRIES.middleware_instrumentation && (await _ENTRIES.middleware_instrumentation).register;
    if (register) {
        try {
            await register();
        } catch (err) {
            err.message = `An error occurred while loading instrumentation hook: ${err.message}`;
            throw err;
        }
    }
}
let registerInstrumentationPromise = null;
function ensureInstrumentationRegistered() {
    if ("TURBOPACK compile-time truthy", 1) {
        registerInstrumentationPromise = registerInstrumentation();
    }
    return registerInstrumentationPromise;
}
function getUnsupportedModuleErrorMessage(module) {
    // warning: if you change these messages, you must adjust how react-dev-overlay's middleware detects modules not found
    return `The edge runtime does not support Node.js '${module}' module.
Learn More: https://nextjs.org/docs/messages/node-module-in-edge-runtime`;
}
function __import_unsupported(moduleName) {
    const proxy = new Proxy(function() {}, {
        get (_obj, prop) {
            if (prop === "then") {
                return {};
            }
            throw new Error(getUnsupportedModuleErrorMessage(moduleName));
        },
        construct () {
            throw new Error(getUnsupportedModuleErrorMessage(moduleName));
        },
        apply (_target, _this, args) {
            if (typeof args[0] === "function") {
                return args[0](proxy);
            }
            throw new Error(getUnsupportedModuleErrorMessage(moduleName));
        }
    });
    return new Proxy({}, {
        get: ()=>proxy
    });
}
function enhanceGlobals() {
    // The condition is true when the "process" module is provided
    if (process !== global.process) {
        // prefer local process but global.process has correct "env"
        process.env = global.process.env;
        global.process = process;
    }
    // to allow building code that import but does not use node.js modules,
    // webpack will expect this function to exist in global scope
    Object.defineProperty(globalThis, "__import_unsupported", {
        value: __import_unsupported,
        enumerable: false,
        configurable: false
    });
    // Eagerly fire instrumentation hook to make the startup faster.
    void ensureInstrumentationRegistered();
}
enhanceGlobals(); //# sourceMappingURL=globals.js.map

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/server/web/error.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "PageSignatureError": ()=>PageSignatureError,
    "RemovedPageError": ()=>RemovedPageError,
    "RemovedUAError": ()=>RemovedUAError
});
class PageSignatureError extends Error {
    constructor({ page }){
        super(`The middleware "${page}" accepts an async API directly with the form:
  
  export function middleware(request, event) {
    return NextResponse.redirect('/new-location')
  }
  
  Read more: https://nextjs.org/docs/messages/middleware-new-signature
  `);
    }
}
class RemovedPageError extends Error {
    constructor(){
        super(`The request.page has been deprecated in favour of \`URLPattern\`.
  Read more: https://nextjs.org/docs/messages/middleware-request-page
  `);
    }
}
class RemovedUAError extends Error {
    constructor(){
        super(`The request.ua has been removed in favour of \`userAgent\` function.
  Read more: https://nextjs.org/docs/messages/middleware-parse-user-agent
  `);
    }
} //# sourceMappingURL=error.js.map

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/server/web/utils.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

/**
 * Converts a Node.js IncomingHttpHeaders object to a Headers object. Any
 * headers with multiple values will be joined with a comma and space. Any
 * headers that have an undefined value will be ignored and others will be
 * coerced to strings.
 *
 * @param nodeHeaders the headers object to convert
 * @returns the converted headers object
 */ __turbopack_esm__({
    "fromNodeOutgoingHttpHeaders": ()=>fromNodeOutgoingHttpHeaders,
    "splitCookiesString": ()=>splitCookiesString,
    "toNodeOutgoingHttpHeaders": ()=>toNodeOutgoingHttpHeaders,
    "validateURL": ()=>validateURL
});
function fromNodeOutgoingHttpHeaders(nodeHeaders) {
    const headers = new Headers();
    for (let [key, value] of Object.entries(nodeHeaders)){
        const values = Array.isArray(value) ? value : [
            value
        ];
        for (let v of values){
            if (typeof v === "undefined") continue;
            if (typeof v === "number") {
                v = v.toString();
            }
            headers.append(key, v);
        }
    }
    return headers;
}
function splitCookiesString(cookiesString) {
    var cookiesStrings = [];
    var pos = 0;
    var start;
    var ch;
    var lastComma;
    var nextStart;
    var cookiesSeparatorFound;
    function skipWhitespace() {
        while(pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))){
            pos += 1;
        }
        return pos < cookiesString.length;
    }
    function notSpecialChar() {
        ch = cookiesString.charAt(pos);
        return ch !== "=" && ch !== ";" && ch !== ",";
    }
    while(pos < cookiesString.length){
        start = pos;
        cookiesSeparatorFound = false;
        while(skipWhitespace()){
            ch = cookiesString.charAt(pos);
            if (ch === ",") {
                // ',' is a cookie separator if we have later first '=', not ';' or ','
                lastComma = pos;
                pos += 1;
                skipWhitespace();
                nextStart = pos;
                while(pos < cookiesString.length && notSpecialChar()){
                    pos += 1;
                }
                // currently special character
                if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
                    // we found cookies separator
                    cookiesSeparatorFound = true;
                    // pos is inside the next cookie, so back up and return it.
                    pos = nextStart;
                    cookiesStrings.push(cookiesString.substring(start, lastComma));
                    start = pos;
                } else {
                    // in param ',' or param separator ';',
                    // we continue from that comma
                    pos = lastComma + 1;
                }
            } else {
                pos += 1;
            }
        }
        if (!cookiesSeparatorFound || pos >= cookiesString.length) {
            cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
        }
    }
    return cookiesStrings;
}
function toNodeOutgoingHttpHeaders(headers) {
    const nodeHeaders = {};
    const cookies = [];
    if (headers) {
        for (const [key, value] of headers.entries()){
            if (key.toLowerCase() === "set-cookie") {
                // We may have gotten a comma joined string of cookies, or multiple
                // set-cookie headers. We need to merge them into one header array
                // to represent all the cookies.
                cookies.push(...splitCookiesString(value));
                nodeHeaders[key] = cookies.length === 1 ? cookies[0] : cookies;
            } else {
                nodeHeaders[key] = value;
            }
        }
    }
    return nodeHeaders;
}
function validateURL(url) {
    try {
        return String(new URL(String(url)));
    } catch (error) {
        throw new Error(`URL is malformed "${String(url)}". Please use only absolute URLs - https://nextjs.org/docs/messages/middleware-relative-urls`, {
            cause: error
        });
    }
} //# sourceMappingURL=utils.js.map

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/server/web/spec-extension/fetch-event.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "NextFetchEvent": ()=>NextFetchEvent,
    "waitUntilSymbol": ()=>waitUntilSymbol
});
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$error$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/server/web/error.js [middleware] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const responseSymbol = Symbol("response");
const passThroughSymbol = Symbol("passThrough");
const waitUntilSymbol = Symbol("waitUntil");
class FetchEvent {
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(_request){
        this[waitUntilSymbol] = [];
        this[passThroughSymbol] = false;
    }
    respondWith(response) {
        if (!this[responseSymbol]) {
            this[responseSymbol] = Promise.resolve(response);
        }
    }
    passThroughOnException() {
        this[passThroughSymbol] = true;
    }
    waitUntil(promise) {
        this[waitUntilSymbol].push(promise);
    }
}
class NextFetchEvent extends FetchEvent {
    constructor(params){
        super(params.request);
        this.sourcePage = params.page;
    }
    /**
   * @deprecated The `request` is now the first parameter and the API is now async.
   *
   * Read more: https://nextjs.org/docs/messages/middleware-new-signature
   */ get request() {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$error$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["PageSignatureError"]({
            page: this.sourcePage
        });
    }
    /**
   * @deprecated Using `respondWith` is no longer needed.
   *
   * Read more: https://nextjs.org/docs/messages/middleware-new-signature
   */ respondWith() {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$error$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["PageSignatureError"]({
            page: this.sourcePage
        });
    }
} //# sourceMappingURL=fetch-event.js.map

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/shared/lib/i18n/detect-domain-locale.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "detectDomainLocale": ()=>detectDomainLocale
});
function detectDomainLocale(domainItems, hostname, detectedLocale) {
    if (!domainItems) return;
    if (detectedLocale) {
        detectedLocale = detectedLocale.toLowerCase();
    }
    for (const item of domainItems){
        var _item_domain, _item_locales;
        // remove port if present
        const domainHostname = (_item_domain = item.domain) == null ? void 0 : _item_domain.split(":", 1)[0].toLowerCase();
        if (hostname === domainHostname || detectedLocale === item.defaultLocale.toLowerCase() || ((_item_locales = item.locales) == null ? void 0 : _item_locales.some((locale)=>locale.toLowerCase() === detectedLocale))) {
            return item;
        }
    }
} //# sourceMappingURL=detect-domain-locale.js.map

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/shared/lib/router/utils/remove-trailing-slash.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

/**
 * Removes the trailing slash for a given route or page path. Preserves the
 * root page. Examples:
 *   - `/foo/bar/` -> `/foo/bar`
 *   - `/foo/bar` -> `/foo/bar`
 *   - `/` -> `/`
 */ __turbopack_esm__({
    "removeTrailingSlash": ()=>removeTrailingSlash
});
function removeTrailingSlash(route) {
    return route.replace(/\/$/, "") || "/";
} //# sourceMappingURL=remove-trailing-slash.js.map

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/shared/lib/router/utils/parse-path.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

/**
 * Given a path this function will find the pathname, query and hash and return
 * them. This is useful to parse full paths on the client side.
 * @param path A path to parse e.g. /foo/bar?id=1#hash
 */ __turbopack_esm__({
    "parsePath": ()=>parsePath
});
function parsePath(path) {
    const hashIndex = path.indexOf("#");
    const queryIndex = path.indexOf("?");
    const hasQuery = queryIndex > -1 && (hashIndex < 0 || queryIndex < hashIndex);
    if (hasQuery || hashIndex > -1) {
        return {
            pathname: path.substring(0, hasQuery ? queryIndex : hashIndex),
            query: hasQuery ? path.substring(queryIndex, hashIndex > -1 ? hashIndex : undefined) : "",
            hash: hashIndex > -1 ? path.slice(hashIndex) : ""
        };
    }
    return {
        pathname: path,
        query: "",
        hash: ""
    };
} //# sourceMappingURL=parse-path.js.map

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/shared/lib/router/utils/add-path-prefix.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "addPathPrefix": ()=>addPathPrefix
});
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$parse$2d$path$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/shared/lib/router/utils/parse-path.js [middleware] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
function addPathPrefix(path, prefix) {
    if (!path.startsWith("/") || !prefix) {
        return path;
    }
    const { pathname, query, hash } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$parse$2d$path$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["parsePath"])(path);
    return "" + prefix + pathname + query + hash;
} //# sourceMappingURL=add-path-prefix.js.map

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/shared/lib/router/utils/add-path-suffix.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "addPathSuffix": ()=>addPathSuffix
});
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$parse$2d$path$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/shared/lib/router/utils/parse-path.js [middleware] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
function addPathSuffix(path, suffix) {
    if (!path.startsWith("/") || !suffix) {
        return path;
    }
    const { pathname, query, hash } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$parse$2d$path$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["parsePath"])(path);
    return "" + pathname + suffix + query + hash;
} //# sourceMappingURL=add-path-suffix.js.map

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/shared/lib/router/utils/path-has-prefix.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "pathHasPrefix": ()=>pathHasPrefix
});
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$parse$2d$path$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/shared/lib/router/utils/parse-path.js [middleware] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
function pathHasPrefix(path, prefix) {
    if (typeof path !== "string") {
        return false;
    }
    const { pathname } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$parse$2d$path$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["parsePath"])(path);
    return pathname === prefix || pathname.startsWith(prefix + "/");
} //# sourceMappingURL=path-has-prefix.js.map

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/shared/lib/router/utils/add-locale.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "addLocale": ()=>addLocale
});
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$add$2d$path$2d$prefix$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/shared/lib/router/utils/add-path-prefix.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$path$2d$has$2d$prefix$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/shared/lib/router/utils/path-has-prefix.js [middleware] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
function addLocale(path, locale, defaultLocale, ignorePrefix) {
    // If no locale was given or the locale is the default locale, we don't need
    // to prefix the path.
    if (!locale || locale === defaultLocale) return path;
    const lower = path.toLowerCase();
    // If the path is an API path or the path already has the locale prefix, we
    // don't need to prefix the path.
    if (!ignorePrefix) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$path$2d$has$2d$prefix$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["pathHasPrefix"])(lower, "/api")) return path;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$path$2d$has$2d$prefix$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["pathHasPrefix"])(lower, "/" + locale.toLowerCase())) return path;
    }
    // Add the locale prefix to the path.
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$add$2d$path$2d$prefix$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["addPathPrefix"])(path, "/" + locale);
} //# sourceMappingURL=add-locale.js.map

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/shared/lib/router/utils/format-next-pathname-info.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "formatNextPathnameInfo": ()=>formatNextPathnameInfo
});
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$remove$2d$trailing$2d$slash$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/shared/lib/router/utils/remove-trailing-slash.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$add$2d$path$2d$prefix$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/shared/lib/router/utils/add-path-prefix.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$add$2d$path$2d$suffix$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/shared/lib/router/utils/add-path-suffix.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$add$2d$locale$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/shared/lib/router/utils/add-locale.js [middleware] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
function formatNextPathnameInfo(info) {
    let pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$add$2d$locale$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["addLocale"])(info.pathname, info.locale, info.buildId ? undefined : info.defaultLocale, info.ignorePrefix);
    if (info.buildId || !info.trailingSlash) {
        pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$remove$2d$trailing$2d$slash$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["removeTrailingSlash"])(pathname);
    }
    if (info.buildId) {
        pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$add$2d$path$2d$suffix$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["addPathSuffix"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$add$2d$path$2d$prefix$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["addPathPrefix"])(pathname, "/_next/data/" + info.buildId), info.pathname === "/" ? "index.json" : ".json");
    }
    pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$add$2d$path$2d$prefix$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["addPathPrefix"])(pathname, info.basePath);
    return !info.buildId && info.trailingSlash ? !pathname.endsWith("/") ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$add$2d$path$2d$suffix$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["addPathSuffix"])(pathname, "/") : pathname : (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$remove$2d$trailing$2d$slash$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["removeTrailingSlash"])(pathname);
} //# sourceMappingURL=format-next-pathname-info.js.map

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/shared/lib/get-hostname.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

/**
 * Takes an object with a hostname property (like a parsed URL) and some
 * headers that may contain Host and returns the preferred hostname.
 * @param parsed An object containing a hostname property.
 * @param headers A dictionary with headers containing a `host`.
 */ __turbopack_esm__({
    "getHostname": ()=>getHostname
});
function getHostname(parsed, headers) {
    // Get the hostname from the headers if it exists, otherwise use the parsed
    // hostname.
    let hostname;
    if ((headers == null ? void 0 : headers.host) && !Array.isArray(headers.host)) {
        hostname = headers.host.toString().split(":", 1)[0];
    } else if (parsed.hostname) {
        hostname = parsed.hostname;
    } else return;
    return hostname.toLowerCase();
} //# sourceMappingURL=get-hostname.js.map

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/shared/lib/i18n/normalize-locale-path.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

/**
 * For a pathname that may include a locale from a list of locales, it
 * removes the locale from the pathname returning it alongside with the
 * detected locale.
 *
 * @param pathname A pathname that may include a locale.
 * @param locales A list of locales.
 * @returns The detected locale and pathname without locale
 */ __turbopack_esm__({
    "normalizeLocalePath": ()=>normalizeLocalePath
});
function normalizeLocalePath(pathname, locales) {
    let detectedLocale;
    // first item will be empty string from splitting at first char
    const pathnameParts = pathname.split("/");
    (locales || []).some((locale)=>{
        if (pathnameParts[1] && pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
            detectedLocale = locale;
            pathnameParts.splice(1, 1);
            pathname = pathnameParts.join("/") || "/";
            return true;
        }
        return false;
    });
    return {
        pathname,
        detectedLocale
    };
} //# sourceMappingURL=normalize-locale-path.js.map

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/shared/lib/router/utils/remove-path-prefix.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "removePathPrefix": ()=>removePathPrefix
});
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$path$2d$has$2d$prefix$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/shared/lib/router/utils/path-has-prefix.js [middleware] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
function removePathPrefix(path, prefix) {
    // If the path doesn't start with the prefix we can return it as is. This
    // protects us from situations where the prefix is a substring of the path
    // prefix such as:
    //
    // For prefix: /blog
    //
    //   /blog -> true
    //   /blog/ -> true
    //   /blog/1 -> true
    //   /blogging -> false
    //   /blogging/ -> false
    //   /blogging/1 -> false
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$path$2d$has$2d$prefix$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["pathHasPrefix"])(path, prefix)) {
        return path;
    }
    // Remove the prefix from the path via slicing.
    const withoutPrefix = path.slice(prefix.length);
    // If the path without the prefix starts with a `/` we can return it as is.
    if (withoutPrefix.startsWith("/")) {
        return withoutPrefix;
    }
    // If the path without the prefix doesn't start with a `/` we need to add it
    // back to the path to make sure it's a valid path.
    return "/" + withoutPrefix;
} //# sourceMappingURL=remove-path-prefix.js.map

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/shared/lib/router/utils/get-next-pathname-info.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "getNextPathnameInfo": ()=>getNextPathnameInfo
});
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$i18n$2f$normalize$2d$locale$2d$path$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/shared/lib/i18n/normalize-locale-path.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$remove$2d$path$2d$prefix$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/shared/lib/router/utils/remove-path-prefix.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$path$2d$has$2d$prefix$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/shared/lib/router/utils/path-has-prefix.js [middleware] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
function getNextPathnameInfo(pathname, options) {
    var _options_nextConfig;
    const { basePath, i18n, trailingSlash } = (_options_nextConfig = options.nextConfig) != null ? _options_nextConfig : {};
    const info = {
        pathname,
        trailingSlash: pathname !== "/" ? pathname.endsWith("/") : trailingSlash
    };
    if (basePath && (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$path$2d$has$2d$prefix$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["pathHasPrefix"])(info.pathname, basePath)) {
        info.pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$remove$2d$path$2d$prefix$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["removePathPrefix"])(info.pathname, basePath);
        info.basePath = basePath;
    }
    let pathnameNoDataPrefix = info.pathname;
    if (info.pathname.startsWith("/_next/data/") && info.pathname.endsWith(".json")) {
        const paths = info.pathname.replace(/^\/_next\/data\//, "").replace(/\.json$/, "").split("/");
        const buildId = paths[0];
        info.buildId = buildId;
        pathnameNoDataPrefix = paths[1] !== "index" ? "/" + paths.slice(1).join("/") : "/";
        // update pathname with normalized if enabled although
        // we use normalized to populate locale info still
        if (options.parseData === true) {
            info.pathname = pathnameNoDataPrefix;
        }
    }
    // If provided, use the locale route normalizer to detect the locale instead
    // of the function below.
    if (i18n) {
        let result = options.i18nProvider ? options.i18nProvider.analyze(info.pathname) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$i18n$2f$normalize$2d$locale$2d$path$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["normalizeLocalePath"])(info.pathname, i18n.locales);
        info.locale = result.detectedLocale;
        var _result_pathname;
        info.pathname = (_result_pathname = result.pathname) != null ? _result_pathname : info.pathname;
        if (!result.detectedLocale && info.buildId) {
            result = options.i18nProvider ? options.i18nProvider.analyze(pathnameNoDataPrefix) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$i18n$2f$normalize$2d$locale$2d$path$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["normalizeLocalePath"])(pathnameNoDataPrefix, i18n.locales);
            if (result.detectedLocale) {
                info.locale = result.detectedLocale;
            }
        }
    }
    return info;
} //# sourceMappingURL=get-next-pathname-info.js.map

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/server/web/next-url.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "NextURL": ()=>NextURL
});
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$i18n$2f$detect$2d$domain$2d$locale$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/shared/lib/i18n/detect-domain-locale.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$format$2d$next$2d$pathname$2d$info$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/shared/lib/router/utils/format-next-pathname-info.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$get$2d$hostname$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/shared/lib/get-hostname.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$get$2d$next$2d$pathname$2d$info$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/shared/lib/router/utils/get-next-pathname-info.js [middleware] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
const REGEX_LOCALHOST_HOSTNAME = /(?!^https?:\/\/)(127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}|\[::1\]|localhost)/;
function parseURL(url, base) {
    return new URL(String(url).replace(REGEX_LOCALHOST_HOSTNAME, "localhost"), base && String(base).replace(REGEX_LOCALHOST_HOSTNAME, "localhost"));
}
const Internal = Symbol("NextURLInternal");
class NextURL {
    constructor(input, baseOrOpts, opts){
        let base;
        let options;
        if (typeof baseOrOpts === "object" && "pathname" in baseOrOpts || typeof baseOrOpts === "string") {
            base = baseOrOpts;
            options = opts || {};
        } else {
            options = opts || baseOrOpts || {};
        }
        this[Internal] = {
            url: parseURL(input, base ?? options.base),
            options: options,
            basePath: ""
        };
        this.analyze();
    }
    analyze() {
        var _this_Internal_options_nextConfig_i18n, _this_Internal_options_nextConfig, _this_Internal_domainLocale, _this_Internal_options_nextConfig_i18n1, _this_Internal_options_nextConfig1;
        const info = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$get$2d$next$2d$pathname$2d$info$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["getNextPathnameInfo"])(this[Internal].url.pathname, {
            nextConfig: this[Internal].options.nextConfig,
            parseData: !process.env.__NEXT_NO_MIDDLEWARE_URL_NORMALIZE,
            i18nProvider: this[Internal].options.i18nProvider
        });
        const hostname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$get$2d$hostname$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["getHostname"])(this[Internal].url, this[Internal].options.headers);
        this[Internal].domainLocale = this[Internal].options.i18nProvider ? this[Internal].options.i18nProvider.detectDomainLocale(hostname) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$i18n$2f$detect$2d$domain$2d$locale$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["detectDomainLocale"])((_this_Internal_options_nextConfig = this[Internal].options.nextConfig) == null ? void 0 : (_this_Internal_options_nextConfig_i18n = _this_Internal_options_nextConfig.i18n) == null ? void 0 : _this_Internal_options_nextConfig_i18n.domains, hostname);
        const defaultLocale = ((_this_Internal_domainLocale = this[Internal].domainLocale) == null ? void 0 : _this_Internal_domainLocale.defaultLocale) || ((_this_Internal_options_nextConfig1 = this[Internal].options.nextConfig) == null ? void 0 : (_this_Internal_options_nextConfig_i18n1 = _this_Internal_options_nextConfig1.i18n) == null ? void 0 : _this_Internal_options_nextConfig_i18n1.defaultLocale);
        this[Internal].url.pathname = info.pathname;
        this[Internal].defaultLocale = defaultLocale;
        this[Internal].basePath = info.basePath ?? "";
        this[Internal].buildId = info.buildId;
        this[Internal].locale = info.locale ?? defaultLocale;
        this[Internal].trailingSlash = info.trailingSlash;
    }
    formatPathname() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$format$2d$next$2d$pathname$2d$info$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["formatNextPathnameInfo"])({
            basePath: this[Internal].basePath,
            buildId: this[Internal].buildId,
            defaultLocale: !this[Internal].options.forceLocale ? this[Internal].defaultLocale : undefined,
            locale: this[Internal].locale,
            pathname: this[Internal].url.pathname,
            trailingSlash: this[Internal].trailingSlash
        });
    }
    formatSearch() {
        return this[Internal].url.search;
    }
    get buildId() {
        return this[Internal].buildId;
    }
    set buildId(buildId) {
        this[Internal].buildId = buildId;
    }
    get locale() {
        return this[Internal].locale ?? "";
    }
    set locale(locale) {
        var _this_Internal_options_nextConfig_i18n, _this_Internal_options_nextConfig;
        if (!this[Internal].locale || !((_this_Internal_options_nextConfig = this[Internal].options.nextConfig) == null ? void 0 : (_this_Internal_options_nextConfig_i18n = _this_Internal_options_nextConfig.i18n) == null ? void 0 : _this_Internal_options_nextConfig_i18n.locales.includes(locale))) {
            throw new TypeError(`The NextURL configuration includes no locale "${locale}"`);
        }
        this[Internal].locale = locale;
    }
    get defaultLocale() {
        return this[Internal].defaultLocale;
    }
    get domainLocale() {
        return this[Internal].domainLocale;
    }
    get searchParams() {
        return this[Internal].url.searchParams;
    }
    get host() {
        return this[Internal].url.host;
    }
    set host(value) {
        this[Internal].url.host = value;
    }
    get hostname() {
        return this[Internal].url.hostname;
    }
    set hostname(value) {
        this[Internal].url.hostname = value;
    }
    get port() {
        return this[Internal].url.port;
    }
    set port(value) {
        this[Internal].url.port = value;
    }
    get protocol() {
        return this[Internal].url.protocol;
    }
    set protocol(value) {
        this[Internal].url.protocol = value;
    }
    get href() {
        const pathname = this.formatPathname();
        const search = this.formatSearch();
        return `${this.protocol}//${this.host}${pathname}${search}${this.hash}`;
    }
    set href(url) {
        this[Internal].url = parseURL(url);
        this.analyze();
    }
    get origin() {
        return this[Internal].url.origin;
    }
    get pathname() {
        return this[Internal].url.pathname;
    }
    set pathname(value) {
        this[Internal].url.pathname = value;
    }
    get hash() {
        return this[Internal].url.hash;
    }
    set hash(value) {
        this[Internal].url.hash = value;
    }
    get search() {
        return this[Internal].url.search;
    }
    set search(value) {
        this[Internal].url.search = value;
    }
    get password() {
        return this[Internal].url.password;
    }
    set password(value) {
        this[Internal].url.password = value;
    }
    get username() {
        return this[Internal].url.username;
    }
    set username(value) {
        this[Internal].url.username = value;
    }
    get basePath() {
        return this[Internal].basePath;
    }
    set basePath(value) {
        this[Internal].basePath = value.startsWith("/") ? value : `/${value}`;
    }
    toString() {
        return this.href;
    }
    toJSON() {
        return this.href;
    }
    [Symbol.for("edge-runtime.inspect.custom")]() {
        return {
            href: this.href,
            origin: this.origin,
            protocol: this.protocol,
            username: this.username,
            password: this.password,
            host: this.host,
            hostname: this.hostname,
            port: this.port,
            pathname: this.pathname,
            search: this.search,
            searchParams: this.searchParams,
            hash: this.hash
        };
    }
    clone() {
        return new NextURL(String(this), this[Internal].options);
    }
} //# sourceMappingURL=next-url.js.map

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/compiled/@edge-runtime/cookies/index.js [middleware] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all)=>{
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = (to, from, except, desc)=>{
    if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
            get: ()=>from[key],
            enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
    }
    return to;
};
var __toCommonJS = (mod)=>__copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
// src/index.ts
var src_exports = {};
__export(src_exports, {
    RequestCookies: ()=>RequestCookies,
    ResponseCookies: ()=>ResponseCookies,
    parseCookie: ()=>parseCookie,
    parseSetCookie: ()=>parseSetCookie,
    stringifyCookie: ()=>stringifyCookie
});
module.exports = __toCommonJS(src_exports);
// src/serialize.ts
function stringifyCookie(c) {
    var _a;
    const attrs = [
        "path" in c && c.path && `Path=${c.path}`,
        "expires" in c && (c.expires || c.expires === 0) && `Expires=${(typeof c.expires === "number" ? new Date(c.expires) : c.expires).toUTCString()}`,
        "maxAge" in c && typeof c.maxAge === "number" && `Max-Age=${c.maxAge}`,
        "domain" in c && c.domain && `Domain=${c.domain}`,
        "secure" in c && c.secure && "Secure",
        "httpOnly" in c && c.httpOnly && "HttpOnly",
        "sameSite" in c && c.sameSite && `SameSite=${c.sameSite}`,
        "partitioned" in c && c.partitioned && "Partitioned",
        "priority" in c && c.priority && `Priority=${c.priority}`
    ].filter(Boolean);
    const stringified = `${c.name}=${encodeURIComponent((_a = c.value) != null ? _a : "")}`;
    return attrs.length === 0 ? stringified : `${stringified}; ${attrs.join("; ")}`;
}
function parseCookie(cookie) {
    const map = /* @__PURE__ */ new Map();
    for (const pair of cookie.split(/; */)){
        if (!pair) continue;
        const splitAt = pair.indexOf("=");
        if (splitAt === -1) {
            map.set(pair, "true");
            continue;
        }
        const [key, value] = [
            pair.slice(0, splitAt),
            pair.slice(splitAt + 1)
        ];
        try {
            map.set(key, decodeURIComponent(value != null ? value : "true"));
        } catch  {}
    }
    return map;
}
function parseSetCookie(setCookie) {
    if (!setCookie) {
        return void 0;
    }
    const [[name, value], ...attributes] = parseCookie(setCookie);
    const { domain, expires, httponly, maxage, path, samesite, secure, partitioned, priority } = Object.fromEntries(attributes.map(([key, value2])=>[
            key.toLowerCase(),
            value2
        ]));
    const cookie = {
        name,
        value: decodeURIComponent(value),
        domain,
        ...expires && {
            expires: new Date(expires)
        },
        ...httponly && {
            httpOnly: true
        },
        ...typeof maxage === "string" && {
            maxAge: Number(maxage)
        },
        path,
        ...samesite && {
            sameSite: parseSameSite(samesite)
        },
        ...secure && {
            secure: true
        },
        ...priority && {
            priority: parsePriority(priority)
        },
        ...partitioned && {
            partitioned: true
        }
    };
    return compact(cookie);
}
function compact(t) {
    const newT = {};
    for(const key in t){
        if (t[key]) {
            newT[key] = t[key];
        }
    }
    return newT;
}
var SAME_SITE = [
    "strict",
    "lax",
    "none"
];
function parseSameSite(string) {
    string = string.toLowerCase();
    return SAME_SITE.includes(string) ? string : void 0;
}
var PRIORITY = [
    "low",
    "medium",
    "high"
];
function parsePriority(string) {
    string = string.toLowerCase();
    return PRIORITY.includes(string) ? string : void 0;
}
function splitCookiesString(cookiesString) {
    if (!cookiesString) return [];
    var cookiesStrings = [];
    var pos = 0;
    var start;
    var ch;
    var lastComma;
    var nextStart;
    var cookiesSeparatorFound;
    function skipWhitespace() {
        while(pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))){
            pos += 1;
        }
        return pos < cookiesString.length;
    }
    function notSpecialChar() {
        ch = cookiesString.charAt(pos);
        return ch !== "=" && ch !== ";" && ch !== ",";
    }
    while(pos < cookiesString.length){
        start = pos;
        cookiesSeparatorFound = false;
        while(skipWhitespace()){
            ch = cookiesString.charAt(pos);
            if (ch === ",") {
                lastComma = pos;
                pos += 1;
                skipWhitespace();
                nextStart = pos;
                while(pos < cookiesString.length && notSpecialChar()){
                    pos += 1;
                }
                if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
                    cookiesSeparatorFound = true;
                    pos = nextStart;
                    cookiesStrings.push(cookiesString.substring(start, lastComma));
                    start = pos;
                } else {
                    pos = lastComma + 1;
                }
            } else {
                pos += 1;
            }
        }
        if (!cookiesSeparatorFound || pos >= cookiesString.length) {
            cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
        }
    }
    return cookiesStrings;
}
// src/request-cookies.ts
var RequestCookies = class {
    constructor(requestHeaders){
        /** @internal */ this._parsed = /* @__PURE__ */ new Map();
        this._headers = requestHeaders;
        const header = requestHeaders.get("cookie");
        if (header) {
            const parsed = parseCookie(header);
            for (const [name, value] of parsed){
                this._parsed.set(name, {
                    name,
                    value
                });
            }
        }
    }
    [Symbol.iterator]() {
        return this._parsed[Symbol.iterator]();
    }
    /**
   * The amount of cookies received from the client
   */ get size() {
        return this._parsed.size;
    }
    get(...args) {
        const name = typeof args[0] === "string" ? args[0] : args[0].name;
        return this._parsed.get(name);
    }
    getAll(...args) {
        var _a;
        const all = Array.from(this._parsed);
        if (!args.length) {
            return all.map(([_, value])=>value);
        }
        const name = typeof args[0] === "string" ? args[0] : (_a = args[0]) == null ? void 0 : _a.name;
        return all.filter(([n])=>n === name).map(([_, value])=>value);
    }
    has(name) {
        return this._parsed.has(name);
    }
    set(...args) {
        const [name, value] = args.length === 1 ? [
            args[0].name,
            args[0].value
        ] : args;
        const map = this._parsed;
        map.set(name, {
            name,
            value
        });
        this._headers.set("cookie", Array.from(map).map(([_, value2])=>stringifyCookie(value2)).join("; "));
        return this;
    }
    /**
   * Delete the cookies matching the passed name or names in the request.
   */ delete(names) {
        const map = this._parsed;
        const result = !Array.isArray(names) ? map.delete(names) : names.map((name)=>map.delete(name));
        this._headers.set("cookie", Array.from(map).map(([_, value])=>stringifyCookie(value)).join("; "));
        return result;
    }
    /**
   * Delete all the cookies in the cookies in the request.
   */ clear() {
        this.delete(Array.from(this._parsed.keys()));
        return this;
    }
    /**
   * Format the cookies in the request as a string for logging
   */ [Symbol.for("edge-runtime.inspect.custom")]() {
        return `RequestCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`;
    }
    toString() {
        return [
            ...this._parsed.values()
        ].map((v)=>`${v.name}=${encodeURIComponent(v.value)}`).join("; ");
    }
};
// src/response-cookies.ts
var ResponseCookies = class {
    constructor(responseHeaders){
        /** @internal */ this._parsed = /* @__PURE__ */ new Map();
        var _a, _b, _c;
        this._headers = responseHeaders;
        const setCookie = (_c = (_b = (_a = responseHeaders.getSetCookie) == null ? void 0 : _a.call(responseHeaders)) != null ? _b : responseHeaders.get("set-cookie")) != null ? _c : [];
        const cookieStrings = Array.isArray(setCookie) ? setCookie : splitCookiesString(setCookie);
        for (const cookieString of cookieStrings){
            const parsed = parseSetCookie(cookieString);
            if (parsed) this._parsed.set(parsed.name, parsed);
        }
    }
    /**
   * {@link https://wicg.github.io/cookie-store/#CookieStore-get CookieStore#get} without the Promise.
   */ get(...args) {
        const key = typeof args[0] === "string" ? args[0] : args[0].name;
        return this._parsed.get(key);
    }
    /**
   * {@link https://wicg.github.io/cookie-store/#CookieStore-getAll CookieStore#getAll} without the Promise.
   */ getAll(...args) {
        var _a;
        const all = Array.from(this._parsed.values());
        if (!args.length) {
            return all;
        }
        const key = typeof args[0] === "string" ? args[0] : (_a = args[0]) == null ? void 0 : _a.name;
        return all.filter((c)=>c.name === key);
    }
    has(name) {
        return this._parsed.has(name);
    }
    /**
   * {@link https://wicg.github.io/cookie-store/#CookieStore-set CookieStore#set} without the Promise.
   */ set(...args) {
        const [name, value, cookie] = args.length === 1 ? [
            args[0].name,
            args[0].value,
            args[0]
        ] : args;
        const map = this._parsed;
        map.set(name, normalizeCookie({
            name,
            value,
            ...cookie
        }));
        replace(map, this._headers);
        return this;
    }
    /**
   * {@link https://wicg.github.io/cookie-store/#CookieStore-delete CookieStore#delete} without the Promise.
   */ delete(...args) {
        const [name, path, domain] = typeof args[0] === "string" ? [
            args[0]
        ] : [
            args[0].name,
            args[0].path,
            args[0].domain
        ];
        return this.set({
            name,
            path,
            domain,
            value: "",
            expires: /* @__PURE__ */ new Date(0)
        });
    }
    [Symbol.for("edge-runtime.inspect.custom")]() {
        return `ResponseCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`;
    }
    toString() {
        return [
            ...this._parsed.values()
        ].map(stringifyCookie).join("; ");
    }
};
function replace(bag, headers) {
    headers.delete("set-cookie");
    for (const [, value] of bag){
        const serialized = stringifyCookie(value);
        headers.append("set-cookie", serialized);
    }
}
function normalizeCookie(cookie = {
    name: "",
    value: ""
}) {
    if (typeof cookie.expires === "number") {
        cookie.expires = new Date(cookie.expires);
    }
    if (cookie.maxAge) {
        cookie.expires = new Date(Date.now() + cookie.maxAge * 1e3);
    }
    if (cookie.path === null || cookie.path === void 0) {
        cookie.path = "/";
    }
    return cookie;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    RequestCookies,
    ResponseCookies,
    parseCookie,
    parseSetCookie,
    stringifyCookie
});

}.call(this) }),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/server/web/spec-extension/cookies.js [middleware] (ecmascript) <locals>": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({});
;
 //# sourceMappingURL=cookies.js.map

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/server/web/spec-extension/cookies.js [middleware] (ecmascript) <module evaluation>": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f40$edge$2d$runtime$2f$cookies$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/compiled/@edge-runtime/cookies/index.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$cookies$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/server/web/spec-extension/cookies.js [middleware] (ecmascript) <locals>");
"__TURBOPACK__ecmascript__hoisting__location__";

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/server/web/spec-extension/request.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "INTERNALS": ()=>INTERNALS,
    "NextRequest": ()=>NextRequest
});
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$next$2d$url$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/server/web/next-url.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/server/web/utils.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$error$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/server/web/error.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$cookies$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/server/web/spec-extension/cookies.js [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f40$edge$2d$runtime$2f$cookies$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/compiled/@edge-runtime/cookies/index.js [middleware] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
const INTERNALS = Symbol("internal request");
class NextRequest extends Request {
    constructor(input, init = {}){
        const url = typeof input !== "string" && "url" in input ? input.url : String(input);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["validateURL"])(url);
        if (input instanceof Request) super(input, init);
        else super(url, init);
        const nextUrl = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$next$2d$url$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextURL"](url, {
            headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["toNodeOutgoingHttpHeaders"])(this.headers),
            nextConfig: init.nextConfig
        });
        this[INTERNALS] = {
            cookies: new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f40$edge$2d$runtime$2f$cookies$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["RequestCookies"](this.headers),
            geo: init.geo || {},
            ip: init.ip,
            nextUrl,
            url: process.env.__NEXT_NO_MIDDLEWARE_URL_NORMALIZE ? url : nextUrl.toString()
        };
    }
    [Symbol.for("edge-runtime.inspect.custom")]() {
        return {
            cookies: this.cookies,
            geo: this.geo,
            ip: this.ip,
            nextUrl: this.nextUrl,
            url: this.url,
            // rest of props come from Request
            bodyUsed: this.bodyUsed,
            cache: this.cache,
            credentials: this.credentials,
            destination: this.destination,
            headers: Object.fromEntries(this.headers),
            integrity: this.integrity,
            keepalive: this.keepalive,
            method: this.method,
            mode: this.mode,
            redirect: this.redirect,
            referrer: this.referrer,
            referrerPolicy: this.referrerPolicy,
            signal: this.signal
        };
    }
    get cookies() {
        return this[INTERNALS].cookies;
    }
    get geo() {
        return this[INTERNALS].geo;
    }
    get ip() {
        return this[INTERNALS].ip;
    }
    get nextUrl() {
        return this[INTERNALS].nextUrl;
    }
    /**
   * @deprecated
   * `page` has been deprecated in favour of `URLPattern`.
   * Read more: https://nextjs.org/docs/messages/middleware-request-page
   */ get page() {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$error$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["RemovedPageError"]();
    }
    /**
   * @deprecated
   * `ua` has been removed in favour of \`userAgent\` function.
   * Read more: https://nextjs.org/docs/messages/middleware-parse-user-agent
   */ get ua() {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$error$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["RemovedUAError"]();
    }
    get url() {
        return this[INTERNALS].url;
    }
} //# sourceMappingURL=request.js.map

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/server/web/spec-extension/response.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "NextResponse": ()=>NextResponse
});
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$next$2d$url$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/server/web/next-url.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/server/web/utils.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$cookies$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/server/web/spec-extension/cookies.js [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f40$edge$2d$runtime$2f$cookies$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/compiled/@edge-runtime/cookies/index.js [middleware] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
const INTERNALS = Symbol("internal response");
const REDIRECTS = new Set([
    301,
    302,
    303,
    307,
    308
]);
function handleMiddlewareField(init, headers) {
    var _init_request;
    if (init == null ? void 0 : (_init_request = init.request) == null ? void 0 : _init_request.headers) {
        if (!(init.request.headers instanceof Headers)) {
            throw new Error("request.headers must be an instance of Headers");
        }
        const keys = [];
        for (const [key, value] of init.request.headers){
            headers.set("x-middleware-request-" + key, value);
            keys.push(key);
        }
        headers.set("x-middleware-override-headers", keys.join(","));
    }
}
class NextResponse extends Response {
    constructor(body, init = {}){
        super(body, init);
        this[INTERNALS] = {
            cookies: new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f40$edge$2d$runtime$2f$cookies$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ResponseCookies"](this.headers),
            url: init.url ? new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$next$2d$url$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextURL"](init.url, {
                headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["toNodeOutgoingHttpHeaders"])(this.headers),
                nextConfig: init.nextConfig
            }) : undefined
        };
    }
    [Symbol.for("edge-runtime.inspect.custom")]() {
        return {
            cookies: this.cookies,
            url: this.url,
            // rest of props come from Response
            body: this.body,
            bodyUsed: this.bodyUsed,
            headers: Object.fromEntries(this.headers),
            ok: this.ok,
            redirected: this.redirected,
            status: this.status,
            statusText: this.statusText,
            type: this.type
        };
    }
    get cookies() {
        return this[INTERNALS].cookies;
    }
    static json(body, init) {
        const response = Response.json(body, init);
        return new NextResponse(response.body, response);
    }
    static redirect(url, init) {
        const status = typeof init === "number" ? init : (init == null ? void 0 : init.status) ?? 307;
        if (!REDIRECTS.has(status)) {
            throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');
        }
        const initObj = typeof init === "object" ? init : {};
        const headers = new Headers(initObj == null ? void 0 : initObj.headers);
        headers.set("Location", (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["validateURL"])(url));
        return new NextResponse(null, {
            ...initObj,
            headers,
            status
        });
    }
    static rewrite(destination, init) {
        const headers = new Headers(init == null ? void 0 : init.headers);
        headers.set("x-middleware-rewrite", (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["validateURL"])(destination));
        handleMiddlewareField(init, headers);
        return new NextResponse(null, {
            ...init,
            headers
        });
    }
    static next(init) {
        const headers = new Headers(init == null ? void 0 : init.headers);
        headers.set("x-middleware-next", "1");
        handleMiddlewareField(init, headers);
        return new NextResponse(null, {
            ...init,
            headers
        });
    }
} //# sourceMappingURL=response.js.map

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/shared/lib/router/utils/relativize-url.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

/**
 * Given a URL as a string and a base URL it will make the URL relative
 * if the parsed protocol and host is the same as the one in the base
 * URL. Otherwise it returns the same URL string.
 */ __turbopack_esm__({
    "relativizeURL": ()=>relativizeURL
});
function relativizeURL(url, base) {
    const baseURL = typeof base === "string" ? new URL(base) : base;
    const relative = new URL(url, base);
    const origin = baseURL.protocol + "//" + baseURL.host;
    return relative.protocol + "//" + relative.host === origin ? relative.toString().replace(origin, "") : relative.toString();
} //# sourceMappingURL=relativize-url.js.map

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/client/components/app-router-headers.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "ACTION": ()=>ACTION,
    "FLIGHT_PARAMETERS": ()=>FLIGHT_PARAMETERS,
    "NEXT_DID_POSTPONE_HEADER": ()=>NEXT_DID_POSTPONE_HEADER,
    "NEXT_ROUTER_PREFETCH_HEADER": ()=>NEXT_ROUTER_PREFETCH_HEADER,
    "NEXT_ROUTER_STATE_TREE": ()=>NEXT_ROUTER_STATE_TREE,
    "NEXT_RSC_UNION_QUERY": ()=>NEXT_RSC_UNION_QUERY,
    "NEXT_URL": ()=>NEXT_URL,
    "RSC_CONTENT_TYPE_HEADER": ()=>RSC_CONTENT_TYPE_HEADER,
    "RSC_HEADER": ()=>RSC_HEADER
});
const RSC_HEADER = "RSC";
const ACTION = "Next-Action";
const NEXT_ROUTER_STATE_TREE = "Next-Router-State-Tree";
const NEXT_ROUTER_PREFETCH_HEADER = "Next-Router-Prefetch";
const NEXT_URL = "Next-Url";
const RSC_CONTENT_TYPE_HEADER = "text/x-component";
const FLIGHT_PARAMETERS = [
    [
        RSC_HEADER
    ],
    [
        NEXT_ROUTER_STATE_TREE
    ],
    [
        NEXT_ROUTER_PREFETCH_HEADER
    ]
];
const NEXT_RSC_UNION_QUERY = "_rsc";
const NEXT_DID_POSTPONE_HEADER = "x-nextjs-postponed"; //# sourceMappingURL=app-router-headers.js.map

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/shared/lib/modern-browserslist-target.js [middleware] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

// Note: This file is JS because it's used by the taskfile-swc.js file, which is JS.
// Keep file changes in sync with the corresponding `.d.ts` files.
/**
 * These are the browser versions that support all of the following:
 * static import: https://caniuse.com/es6-module
 * dynamic import: https://caniuse.com/es6-module-dynamic-import
 * import.meta: https://caniuse.com/mdn-javascript_operators_import_meta
 */ const MODERN_BROWSERSLIST_TARGET = [
    "chrome 64",
    "edge 79",
    "firefox 67",
    "opera 51",
    "safari 12"
];
module.exports = MODERN_BROWSERSLIST_TARGET; //# sourceMappingURL=modern-browserslist-target.js.map

}.call(this) }),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/shared/lib/constants.js [middleware] (ecmascript) <locals>": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "APP_BUILD_MANIFEST": ()=>APP_BUILD_MANIFEST,
    "APP_CLIENT_INTERNALS": ()=>APP_CLIENT_INTERNALS,
    "APP_PATHS_MANIFEST": ()=>APP_PATHS_MANIFEST,
    "APP_PATH_ROUTES_MANIFEST": ()=>APP_PATH_ROUTES_MANIFEST,
    "AUTOMATIC_FONT_OPTIMIZATION_MANIFEST": ()=>AUTOMATIC_FONT_OPTIMIZATION_MANIFEST,
    "BARREL_OPTIMIZATION_PREFIX": ()=>BARREL_OPTIMIZATION_PREFIX,
    "BLOCKED_PAGES": ()=>BLOCKED_PAGES,
    "BUILD_ID_FILE": ()=>BUILD_ID_FILE,
    "BUILD_MANIFEST": ()=>BUILD_MANIFEST,
    "CLIENT_PUBLIC_FILES_PATH": ()=>CLIENT_PUBLIC_FILES_PATH,
    "CLIENT_REFERENCE_MANIFEST": ()=>CLIENT_REFERENCE_MANIFEST,
    "CLIENT_STATIC_FILES_PATH": ()=>CLIENT_STATIC_FILES_PATH,
    "CLIENT_STATIC_FILES_RUNTIME_AMP": ()=>CLIENT_STATIC_FILES_RUNTIME_AMP,
    "CLIENT_STATIC_FILES_RUNTIME_MAIN": ()=>CLIENT_STATIC_FILES_RUNTIME_MAIN,
    "CLIENT_STATIC_FILES_RUNTIME_MAIN_APP": ()=>CLIENT_STATIC_FILES_RUNTIME_MAIN_APP,
    "CLIENT_STATIC_FILES_RUNTIME_POLYFILLS": ()=>CLIENT_STATIC_FILES_RUNTIME_POLYFILLS,
    "CLIENT_STATIC_FILES_RUNTIME_POLYFILLS_SYMBOL": ()=>CLIENT_STATIC_FILES_RUNTIME_POLYFILLS_SYMBOL,
    "CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH": ()=>CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH,
    "CLIENT_STATIC_FILES_RUNTIME_WEBPACK": ()=>CLIENT_STATIC_FILES_RUNTIME_WEBPACK,
    "COMPILER_INDEXES": ()=>COMPILER_INDEXES,
    "COMPILER_NAMES": ()=>COMPILER_NAMES,
    "CONFIG_FILES": ()=>CONFIG_FILES,
    "DEFAULT_RUNTIME_WEBPACK": ()=>DEFAULT_RUNTIME_WEBPACK,
    "DEFAULT_SANS_SERIF_FONT": ()=>DEFAULT_SANS_SERIF_FONT,
    "DEFAULT_SERIF_FONT": ()=>DEFAULT_SERIF_FONT,
    "DEV_CLIENT_PAGES_MANIFEST": ()=>DEV_CLIENT_PAGES_MANIFEST,
    "DEV_MIDDLEWARE_MANIFEST": ()=>DEV_MIDDLEWARE_MANIFEST,
    "EDGE_RUNTIME_WEBPACK": ()=>EDGE_RUNTIME_WEBPACK,
    "EDGE_UNSUPPORTED_NODE_APIS": ()=>EDGE_UNSUPPORTED_NODE_APIS,
    "EXPORT_DETAIL": ()=>EXPORT_DETAIL,
    "EXPORT_MARKER": ()=>EXPORT_MARKER,
    "FUNCTIONS_CONFIG_MANIFEST": ()=>FUNCTIONS_CONFIG_MANIFEST,
    "GOOGLE_FONT_PROVIDER": ()=>GOOGLE_FONT_PROVIDER,
    "IMAGES_MANIFEST": ()=>IMAGES_MANIFEST,
    "INTERCEPTION_ROUTE_REWRITE_MANIFEST": ()=>INTERCEPTION_ROUTE_REWRITE_MANIFEST,
    "INTERNAL_HEADERS": ()=>INTERNAL_HEADERS,
    "MIDDLEWARE_BUILD_MANIFEST": ()=>MIDDLEWARE_BUILD_MANIFEST,
    "MIDDLEWARE_MANIFEST": ()=>MIDDLEWARE_MANIFEST,
    "MIDDLEWARE_REACT_LOADABLE_MANIFEST": ()=>MIDDLEWARE_REACT_LOADABLE_MANIFEST,
    "NEXT_BUILTIN_DOCUMENT": ()=>NEXT_BUILTIN_DOCUMENT,
    "NEXT_FONT_MANIFEST": ()=>NEXT_FONT_MANIFEST,
    "OPTIMIZED_FONT_PROVIDERS": ()=>OPTIMIZED_FONT_PROVIDERS,
    "PAGES_MANIFEST": ()=>PAGES_MANIFEST,
    "PHASE_DEVELOPMENT_SERVER": ()=>PHASE_DEVELOPMENT_SERVER,
    "PHASE_EXPORT": ()=>PHASE_EXPORT,
    "PHASE_INFO": ()=>PHASE_INFO,
    "PHASE_PRODUCTION_BUILD": ()=>PHASE_PRODUCTION_BUILD,
    "PHASE_PRODUCTION_SERVER": ()=>PHASE_PRODUCTION_SERVER,
    "PHASE_TEST": ()=>PHASE_TEST,
    "PRERENDER_MANIFEST": ()=>PRERENDER_MANIFEST,
    "REACT_LOADABLE_MANIFEST": ()=>REACT_LOADABLE_MANIFEST,
    "ROUTES_MANIFEST": ()=>ROUTES_MANIFEST,
    "RSC_MODULE_TYPES": ()=>RSC_MODULE_TYPES,
    "SERVER_DIRECTORY": ()=>SERVER_DIRECTORY,
    "SERVER_FILES_MANIFEST": ()=>SERVER_FILES_MANIFEST,
    "SERVER_PROPS_ID": ()=>SERVER_PROPS_ID,
    "SERVER_REFERENCE_MANIFEST": ()=>SERVER_REFERENCE_MANIFEST,
    "STATIC_PROPS_ID": ()=>STATIC_PROPS_ID,
    "STATIC_STATUS_PAGES": ()=>STATIC_STATUS_PAGES,
    "STRING_LITERAL_DROP_BUNDLE": ()=>STRING_LITERAL_DROP_BUNDLE,
    "SUBRESOURCE_INTEGRITY_MANIFEST": ()=>SUBRESOURCE_INTEGRITY_MANIFEST,
    "SYSTEM_ENTRYPOINTS": ()=>SYSTEM_ENTRYPOINTS,
    "TRACE_OUTPUT_VERSION": ()=>TRACE_OUTPUT_VERSION,
    "TURBO_TRACE_DEFAULT_MEMORY_LIMIT": ()=>TURBO_TRACE_DEFAULT_MEMORY_LIMIT,
    "UNDERSCORE_NOT_FOUND_ROUTE": ()=>UNDERSCORE_NOT_FOUND_ROUTE,
    "UNDERSCORE_NOT_FOUND_ROUTE_ENTRY": ()=>UNDERSCORE_NOT_FOUND_ROUTE_ENTRY
});
;
;
const COMPILER_NAMES = {
    client: "client",
    server: "server",
    edgeServer: "edge-server"
};
const INTERNAL_HEADERS = [
    "x-invoke-error",
    "x-invoke-output",
    "x-invoke-path",
    "x-invoke-query",
    "x-invoke-status",
    "x-middleware-invoke"
];
const COMPILER_INDEXES = {
    [COMPILER_NAMES.client]: 0,
    [COMPILER_NAMES.server]: 1,
    [COMPILER_NAMES.edgeServer]: 2
};
const UNDERSCORE_NOT_FOUND_ROUTE = "/_not-found";
const UNDERSCORE_NOT_FOUND_ROUTE_ENTRY = "" + UNDERSCORE_NOT_FOUND_ROUTE + "/page";
const PHASE_EXPORT = "phase-export";
const PHASE_PRODUCTION_BUILD = "phase-production-build";
const PHASE_PRODUCTION_SERVER = "phase-production-server";
const PHASE_DEVELOPMENT_SERVER = "phase-development-server";
const PHASE_TEST = "phase-test";
const PHASE_INFO = "phase-info";
const PAGES_MANIFEST = "pages-manifest.json";
const APP_PATHS_MANIFEST = "app-paths-manifest.json";
const APP_PATH_ROUTES_MANIFEST = "app-path-routes-manifest.json";
const BUILD_MANIFEST = "build-manifest.json";
const APP_BUILD_MANIFEST = "app-build-manifest.json";
const FUNCTIONS_CONFIG_MANIFEST = "functions-config-manifest.json";
const SUBRESOURCE_INTEGRITY_MANIFEST = "subresource-integrity-manifest";
const NEXT_FONT_MANIFEST = "next-font-manifest";
const EXPORT_MARKER = "export-marker.json";
const EXPORT_DETAIL = "export-detail.json";
const PRERENDER_MANIFEST = "prerender-manifest.json";
const ROUTES_MANIFEST = "routes-manifest.json";
const IMAGES_MANIFEST = "images-manifest.json";
const SERVER_FILES_MANIFEST = "required-server-files.json";
const DEV_CLIENT_PAGES_MANIFEST = "_devPagesManifest.json";
const MIDDLEWARE_MANIFEST = "middleware-manifest.json";
const DEV_MIDDLEWARE_MANIFEST = "_devMiddlewareManifest.json";
const REACT_LOADABLE_MANIFEST = "react-loadable-manifest.json";
const AUTOMATIC_FONT_OPTIMIZATION_MANIFEST = "font-manifest.json";
const SERVER_DIRECTORY = "server";
const CONFIG_FILES = [
    "next.config.js",
    "next.config.mjs"
];
const BUILD_ID_FILE = "BUILD_ID";
const BLOCKED_PAGES = [
    "/_document",
    "/_app",
    "/_error"
];
const CLIENT_PUBLIC_FILES_PATH = "public";
const CLIENT_STATIC_FILES_PATH = "static";
const STRING_LITERAL_DROP_BUNDLE = "__NEXT_DROP_CLIENT_FILE__";
const NEXT_BUILTIN_DOCUMENT = "__NEXT_BUILTIN_DOCUMENT__";
const BARREL_OPTIMIZATION_PREFIX = "__barrel_optimize__";
const CLIENT_REFERENCE_MANIFEST = "client-reference-manifest";
const SERVER_REFERENCE_MANIFEST = "server-reference-manifest";
const MIDDLEWARE_BUILD_MANIFEST = "middleware-build-manifest";
const MIDDLEWARE_REACT_LOADABLE_MANIFEST = "middleware-react-loadable-manifest";
const INTERCEPTION_ROUTE_REWRITE_MANIFEST = "interception-route-rewrite-manifest";
const CLIENT_STATIC_FILES_RUNTIME_MAIN = "main";
const CLIENT_STATIC_FILES_RUNTIME_MAIN_APP = "" + CLIENT_STATIC_FILES_RUNTIME_MAIN + "-app";
const APP_CLIENT_INTERNALS = "app-pages-internals";
const CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH = "react-refresh";
const CLIENT_STATIC_FILES_RUNTIME_AMP = "amp";
const CLIENT_STATIC_FILES_RUNTIME_WEBPACK = "webpack";
const CLIENT_STATIC_FILES_RUNTIME_POLYFILLS = "polyfills";
const CLIENT_STATIC_FILES_RUNTIME_POLYFILLS_SYMBOL = Symbol(CLIENT_STATIC_FILES_RUNTIME_POLYFILLS);
const DEFAULT_RUNTIME_WEBPACK = "webpack-runtime";
const EDGE_RUNTIME_WEBPACK = "edge-runtime-webpack";
const STATIC_PROPS_ID = "__N_SSG";
const SERVER_PROPS_ID = "__N_SSP";
const GOOGLE_FONT_PROVIDER = "https://fonts.googleapis.com/";
const OPTIMIZED_FONT_PROVIDERS = [
    {
        url: GOOGLE_FONT_PROVIDER,
        preconnect: "https://fonts.gstatic.com"
    },
    {
        url: "https://use.typekit.net",
        preconnect: "https://use.typekit.net"
    }
];
const DEFAULT_SERIF_FONT = {
    name: "Times New Roman",
    xAvgCharWidth: 821,
    azAvgWidth: 854.3953488372093,
    unitsPerEm: 2048
};
const DEFAULT_SANS_SERIF_FONT = {
    name: "Arial",
    xAvgCharWidth: 904,
    azAvgWidth: 934.5116279069767,
    unitsPerEm: 2048
};
const STATIC_STATUS_PAGES = [
    "/500"
];
const TRACE_OUTPUT_VERSION = 1;
const TURBO_TRACE_DEFAULT_MEMORY_LIMIT = 6000;
const RSC_MODULE_TYPES = {
    client: "client",
    server: "server"
};
const EDGE_UNSUPPORTED_NODE_APIS = [
    "clearImmediate",
    "setImmediate",
    "BroadcastChannel",
    "ByteLengthQueuingStrategy",
    "CompressionStream",
    "CountQueuingStrategy",
    "DecompressionStream",
    "DomException",
    "MessageChannel",
    "MessageEvent",
    "MessagePort",
    "ReadableByteStreamController",
    "ReadableStreamBYOBRequest",
    "ReadableStreamDefaultController",
    "TransformStreamDefaultController",
    "WritableStreamDefaultController"
];
const SYSTEM_ENTRYPOINTS = new Set([
    CLIENT_STATIC_FILES_RUNTIME_MAIN,
    CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH,
    CLIENT_STATIC_FILES_RUNTIME_AMP,
    CLIENT_STATIC_FILES_RUNTIME_MAIN_APP
]); //# sourceMappingURL=constants.js.map

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/shared/lib/constants.js [middleware] (ecmascript) <module evaluation>": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$modern$2d$browserslist$2d$target$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/shared/lib/modern-browserslist-target.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/shared/lib/constants.js [middleware] (ecmascript) <locals>");
"__TURBOPACK__ecmascript__hoisting__location__";

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/server/internal-utils.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "stripInternalHeaders": ()=>stripInternalHeaders,
    "stripInternalQueries": ()=>stripInternalQueries,
    "stripInternalSearchParams": ()=>stripInternalSearchParams
});
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/client/components/app-router-headers.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/shared/lib/constants.js [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/shared/lib/constants.js [middleware] (ecmascript) <locals>");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
const INTERNAL_QUERY_NAMES = [
    "__nextFallback",
    "__nextLocale",
    "__nextInferredLocaleFromDefault",
    "__nextDefaultLocale",
    "__nextIsNotFound",
    __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NEXT_RSC_UNION_QUERY"]
];
const EDGE_EXTENDED_INTERNAL_QUERY_NAMES = [
    "__nextDataReq"
];
function stripInternalQueries(query) {
    for (const name of INTERNAL_QUERY_NAMES){
        delete query[name];
    }
}
function stripInternalSearchParams(url, isEdge) {
    const isStringUrl = typeof url === "string";
    const instance = isStringUrl ? new URL(url) : url;
    for (const name of INTERNAL_QUERY_NAMES){
        instance.searchParams.delete(name);
    }
    if (isEdge) {
        for (const name of EDGE_EXTENDED_INTERNAL_QUERY_NAMES){
            instance.searchParams.delete(name);
        }
    }
    return isStringUrl ? instance.toString() : instance;
}
function stripInternalHeaders(headers) {
    for (const key of __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__["INTERNAL_HEADERS"]){
        delete headers[key];
    }
} //# sourceMappingURL=internal-utils.js.map

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/shared/lib/page-path/ensure-leading-slash.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

/**
 * For a given page path, this function ensures that there is a leading slash.
 * If there is not a leading slash, one is added, otherwise it is noop.
 */ __turbopack_esm__({
    "ensureLeadingSlash": ()=>ensureLeadingSlash
});
function ensureLeadingSlash(path) {
    return path.startsWith("/") ? path : "/" + path;
} //# sourceMappingURL=ensure-leading-slash.js.map

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/shared/lib/segment.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "DEFAULT_SEGMENT_KEY": ()=>DEFAULT_SEGMENT_KEY,
    "PAGE_SEGMENT_KEY": ()=>PAGE_SEGMENT_KEY,
    "isGroupSegment": ()=>isGroupSegment
});
function isGroupSegment(segment) {
    // Use array[0] for performant purpose
    return segment[0] === "(" && segment.endsWith(")");
}
const PAGE_SEGMENT_KEY = "__PAGE__";
const DEFAULT_SEGMENT_KEY = "__DEFAULT__"; //# sourceMappingURL=segment.js.map

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/shared/lib/router/utils/app-paths.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "normalizeAppPath": ()=>normalizeAppPath,
    "normalizeRscURL": ()=>normalizeRscURL
});
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$page$2d$path$2f$ensure$2d$leading$2d$slash$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/shared/lib/page-path/ensure-leading-slash.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$segment$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/shared/lib/segment.js [middleware] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
function normalizeAppPath(route) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$page$2d$path$2f$ensure$2d$leading$2d$slash$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ensureLeadingSlash"])(route.split("/").reduce((pathname, segment, index, segments)=>{
        // Empty segments are ignored.
        if (!segment) {
            return pathname;
        }
        // Groups are ignored.
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$segment$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["isGroupSegment"])(segment)) {
            return pathname;
        }
        // Parallel segments are ignored.
        if (segment[0] === "@") {
            return pathname;
        }
        // The last segment (if it's a leaf) should be ignored.
        if ((segment === "page" || segment === "route") && index === segments.length - 1) {
            return pathname;
        }
        return pathname + "/" + segment;
    }, ""));
}
function normalizeRscURL(url) {
    return url.replace(/\.rsc($|\?)/, "$1");
} //# sourceMappingURL=app-paths.js.map

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/lib/constants.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "ACTION_SUFFIX": ()=>ACTION_SUFFIX,
    "APP_DIR_ALIAS": ()=>APP_DIR_ALIAS,
    "CACHE_ONE_YEAR": ()=>CACHE_ONE_YEAR,
    "DOT_NEXT_ALIAS": ()=>DOT_NEXT_ALIAS,
    "ESLINT_DEFAULT_DIRS": ()=>ESLINT_DEFAULT_DIRS,
    "ESLINT_PROMPT_VALUES": ()=>ESLINT_PROMPT_VALUES,
    "GSP_NO_RETURNED_VALUE": ()=>GSP_NO_RETURNED_VALUE,
    "GSSP_COMPONENT_MEMBER_ERROR": ()=>GSSP_COMPONENT_MEMBER_ERROR,
    "GSSP_NO_RETURNED_VALUE": ()=>GSSP_NO_RETURNED_VALUE,
    "INSTRUMENTATION_HOOK_FILENAME": ()=>INSTRUMENTATION_HOOK_FILENAME,
    "MIDDLEWARE_FILENAME": ()=>MIDDLEWARE_FILENAME,
    "MIDDLEWARE_LOCATION_REGEXP": ()=>MIDDLEWARE_LOCATION_REGEXP,
    "NEXT_BODY_SUFFIX": ()=>NEXT_BODY_SUFFIX,
    "NEXT_CACHE_IMPLICIT_TAG_ID": ()=>NEXT_CACHE_IMPLICIT_TAG_ID,
    "NEXT_CACHE_REVALIDATED_TAGS_HEADER": ()=>NEXT_CACHE_REVALIDATED_TAGS_HEADER,
    "NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER": ()=>NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER,
    "NEXT_CACHE_SOFT_TAGS_HEADER": ()=>NEXT_CACHE_SOFT_TAGS_HEADER,
    "NEXT_CACHE_SOFT_TAG_MAX_LENGTH": ()=>NEXT_CACHE_SOFT_TAG_MAX_LENGTH,
    "NEXT_CACHE_TAGS_HEADER": ()=>NEXT_CACHE_TAGS_HEADER,
    "NEXT_CACHE_TAG_MAX_ITEMS": ()=>NEXT_CACHE_TAG_MAX_ITEMS,
    "NEXT_CACHE_TAG_MAX_LENGTH": ()=>NEXT_CACHE_TAG_MAX_LENGTH,
    "NEXT_DATA_SUFFIX": ()=>NEXT_DATA_SUFFIX,
    "NEXT_META_SUFFIX": ()=>NEXT_META_SUFFIX,
    "NEXT_QUERY_PARAM_PREFIX": ()=>NEXT_QUERY_PARAM_PREFIX,
    "NON_STANDARD_NODE_ENV": ()=>NON_STANDARD_NODE_ENV,
    "PAGES_DIR_ALIAS": ()=>PAGES_DIR_ALIAS,
    "PRERENDER_REVALIDATE_HEADER": ()=>PRERENDER_REVALIDATE_HEADER,
    "PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER": ()=>PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER,
    "PUBLIC_DIR_MIDDLEWARE_CONFLICT": ()=>PUBLIC_DIR_MIDDLEWARE_CONFLICT,
    "ROOT_DIR_ALIAS": ()=>ROOT_DIR_ALIAS,
    "RSC_ACTION_CLIENT_WRAPPER_ALIAS": ()=>RSC_ACTION_CLIENT_WRAPPER_ALIAS,
    "RSC_ACTION_ENCRYPTION_ALIAS": ()=>RSC_ACTION_ENCRYPTION_ALIAS,
    "RSC_ACTION_PROXY_ALIAS": ()=>RSC_ACTION_PROXY_ALIAS,
    "RSC_ACTION_VALIDATE_ALIAS": ()=>RSC_ACTION_VALIDATE_ALIAS,
    "RSC_MOD_REF_PROXY_ALIAS": ()=>RSC_MOD_REF_PROXY_ALIAS,
    "RSC_PREFETCH_SUFFIX": ()=>RSC_PREFETCH_SUFFIX,
    "RSC_SUFFIX": ()=>RSC_SUFFIX,
    "SERVER_PROPS_EXPORT_ERROR": ()=>SERVER_PROPS_EXPORT_ERROR,
    "SERVER_PROPS_GET_INIT_PROPS_CONFLICT": ()=>SERVER_PROPS_GET_INIT_PROPS_CONFLICT,
    "SERVER_PROPS_SSG_CONFLICT": ()=>SERVER_PROPS_SSG_CONFLICT,
    "SERVER_RUNTIME": ()=>SERVER_RUNTIME,
    "SSG_FALLBACK_EXPORT_ERROR": ()=>SSG_FALLBACK_EXPORT_ERROR,
    "SSG_GET_INITIAL_PROPS_CONFLICT": ()=>SSG_GET_INITIAL_PROPS_CONFLICT,
    "STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR": ()=>STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR,
    "UNSTABLE_REVALIDATE_RENAME_ERROR": ()=>UNSTABLE_REVALIDATE_RENAME_ERROR,
    "WEBPACK_LAYERS": ()=>WEBPACK_LAYERS,
    "WEBPACK_RESOURCE_QUERIES": ()=>WEBPACK_RESOURCE_QUERIES
});
const NEXT_QUERY_PARAM_PREFIX = "nxtP";
const PRERENDER_REVALIDATE_HEADER = "x-prerender-revalidate";
const PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER = "x-prerender-revalidate-if-generated";
const RSC_PREFETCH_SUFFIX = ".prefetch.rsc";
const RSC_SUFFIX = ".rsc";
const ACTION_SUFFIX = ".action";
const NEXT_DATA_SUFFIX = ".json";
const NEXT_META_SUFFIX = ".meta";
const NEXT_BODY_SUFFIX = ".body";
const NEXT_CACHE_TAGS_HEADER = "x-next-cache-tags";
const NEXT_CACHE_SOFT_TAGS_HEADER = "x-next-cache-soft-tags";
const NEXT_CACHE_REVALIDATED_TAGS_HEADER = "x-next-revalidated-tags";
const NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER = "x-next-revalidate-tag-token";
const NEXT_CACHE_TAG_MAX_ITEMS = 64;
const NEXT_CACHE_TAG_MAX_LENGTH = 256;
const NEXT_CACHE_SOFT_TAG_MAX_LENGTH = 1024;
const NEXT_CACHE_IMPLICIT_TAG_ID = "_N_T_";
const CACHE_ONE_YEAR = 31536000;
const MIDDLEWARE_FILENAME = "middleware";
const MIDDLEWARE_LOCATION_REGEXP = `(?:src/)?${MIDDLEWARE_FILENAME}`;
const INSTRUMENTATION_HOOK_FILENAME = "instrumentation";
const PAGES_DIR_ALIAS = "private-next-pages";
const DOT_NEXT_ALIAS = "private-dot-next";
const ROOT_DIR_ALIAS = "private-next-root-dir";
const APP_DIR_ALIAS = "private-next-app-dir";
const RSC_MOD_REF_PROXY_ALIAS = "private-next-rsc-mod-ref-proxy";
const RSC_ACTION_VALIDATE_ALIAS = "private-next-rsc-action-validate";
const RSC_ACTION_PROXY_ALIAS = "private-next-rsc-server-reference";
const RSC_ACTION_ENCRYPTION_ALIAS = "private-next-rsc-action-encryption";
const RSC_ACTION_CLIENT_WRAPPER_ALIAS = "private-next-rsc-action-client-wrapper";
const PUBLIC_DIR_MIDDLEWARE_CONFLICT = `You can not have a '_next' folder inside of your public folder. This conflicts with the internal '/_next' route. https://nextjs.org/docs/messages/public-next-folder-conflict`;
const SSG_GET_INITIAL_PROPS_CONFLICT = `You can not use getInitialProps with getStaticProps. To use SSG, please remove your getInitialProps`;
const SERVER_PROPS_GET_INIT_PROPS_CONFLICT = `You can not use getInitialProps with getServerSideProps. Please remove getInitialProps.`;
const SERVER_PROPS_SSG_CONFLICT = `You can not use getStaticProps or getStaticPaths with getServerSideProps. To use SSG, please remove getServerSideProps`;
const STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR = `can not have getInitialProps/getServerSideProps, https://nextjs.org/docs/messages/404-get-initial-props`;
const SERVER_PROPS_EXPORT_ERROR = `pages with \`getServerSideProps\` can not be exported. See more info here: https://nextjs.org/docs/messages/gssp-export`;
const GSP_NO_RETURNED_VALUE = "Your `getStaticProps` function did not return an object. Did you forget to add a `return`?";
const GSSP_NO_RETURNED_VALUE = "Your `getServerSideProps` function did not return an object. Did you forget to add a `return`?";
const UNSTABLE_REVALIDATE_RENAME_ERROR = "The `unstable_revalidate` property is available for general use.\n" + "Please use `revalidate` instead.";
const GSSP_COMPONENT_MEMBER_ERROR = `can not be attached to a page's component and must be exported from the page. See more info here: https://nextjs.org/docs/messages/gssp-component-member`;
const NON_STANDARD_NODE_ENV = `You are using a non-standard "NODE_ENV" value in your environment. This creates inconsistencies in the project and is strongly advised against. Read more: https://nextjs.org/docs/messages/non-standard-node-env`;
const SSG_FALLBACK_EXPORT_ERROR = `Pages with \`fallback\` enabled in \`getStaticPaths\` can not be exported. See more info here: https://nextjs.org/docs/messages/ssg-fallback-true-export`;
const ESLINT_DEFAULT_DIRS = [
    "app",
    "pages",
    "components",
    "lib",
    "src"
];
const ESLINT_PROMPT_VALUES = [
    {
        title: "Strict",
        recommended: true,
        config: {
            extends: "next/core-web-vitals"
        }
    },
    {
        title: "Base",
        config: {
            extends: "next"
        }
    },
    {
        title: "Cancel",
        config: null
    }
];
const SERVER_RUNTIME = {
    edge: "edge",
    experimentalEdge: "experimental-edge",
    nodejs: "nodejs"
};
/**
 * The names of the webpack layers. These layers are the primitives for the
 * webpack chunks.
 */ const WEBPACK_LAYERS_NAMES = {
    /**
   * The layer for the shared code between the client and server bundles.
   */ shared: "shared",
    /**
   * React Server Components layer (rsc).
   */ reactServerComponents: "rsc",
    /**
   * Server Side Rendering layer for app (ssr).
   */ serverSideRendering: "ssr",
    /**
   * The browser client bundle layer for actions.
   */ actionBrowser: "action-browser",
    /**
   * The layer for the API routes.
   */ api: "api",
    /**
   * The layer for the middleware code.
   */ middleware: "middleware",
    /**
   * The layer for the instrumentation hooks.
   */ instrument: "instrument",
    /**
   * The layer for assets on the edge.
   */ edgeAsset: "edge-asset",
    /**
   * The browser client bundle layer for App directory.
   */ appPagesBrowser: "app-pages-browser",
    /**
   * The server bundle layer for metadata routes.
   */ appMetadataRoute: "app-metadata-route",
    /**
   * The layer for the server bundle for App Route handlers.
   */ appRouteHandler: "app-route-handler"
};
const WEBPACK_LAYERS = {
    ...WEBPACK_LAYERS_NAMES,
    GROUP: {
        serverOnly: [
            WEBPACK_LAYERS_NAMES.reactServerComponents,
            WEBPACK_LAYERS_NAMES.actionBrowser,
            WEBPACK_LAYERS_NAMES.appMetadataRoute,
            WEBPACK_LAYERS_NAMES.appRouteHandler,
            WEBPACK_LAYERS_NAMES.instrument
        ],
        clientOnly: [
            WEBPACK_LAYERS_NAMES.serverSideRendering,
            WEBPACK_LAYERS_NAMES.appPagesBrowser
        ],
        nonClientServerTarget: [
            // middleware and pages api
            WEBPACK_LAYERS_NAMES.middleware,
            WEBPACK_LAYERS_NAMES.api
        ],
        app: [
            WEBPACK_LAYERS_NAMES.reactServerComponents,
            WEBPACK_LAYERS_NAMES.actionBrowser,
            WEBPACK_LAYERS_NAMES.appMetadataRoute,
            WEBPACK_LAYERS_NAMES.appRouteHandler,
            WEBPACK_LAYERS_NAMES.serverSideRendering,
            WEBPACK_LAYERS_NAMES.appPagesBrowser,
            WEBPACK_LAYERS_NAMES.shared,
            WEBPACK_LAYERS_NAMES.instrument
        ]
    }
};
const WEBPACK_RESOURCE_QUERIES = {
    edgeSSREntry: "__next_edge_ssr_entry__",
    metadata: "__next_metadata__",
    metadataRoute: "__next_metadata_route__",
    metadataImageMeta: "__next_metadata_image_meta__"
};
;
 //# sourceMappingURL=constants.js.map

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/server/web/spec-extension/adapters/reflect.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "ReflectAdapter": ()=>ReflectAdapter
});
class ReflectAdapter {
    static get(target, prop, receiver) {
        const value = Reflect.get(target, prop, receiver);
        if (typeof value === "function") {
            return value.bind(target);
        }
        return value;
    }
    static set(target, prop, value, receiver) {
        return Reflect.set(target, prop, value, receiver);
    }
    static has(target, prop) {
        return Reflect.has(target, prop);
    }
    static deleteProperty(target, prop) {
        return Reflect.deleteProperty(target, prop);
    }
} //# sourceMappingURL=reflect.js.map

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/server/web/spec-extension/adapters/headers.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "HeadersAdapter": ()=>HeadersAdapter,
    "ReadonlyHeadersError": ()=>ReadonlyHeadersError
});
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/server/web/spec-extension/adapters/reflect.js [middleware] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
class ReadonlyHeadersError extends Error {
    constructor(){
        super("Headers cannot be modified. Read more: https://nextjs.org/docs/app/api-reference/functions/headers");
    }
    static callable() {
        throw new ReadonlyHeadersError();
    }
}
class HeadersAdapter extends Headers {
    constructor(headers){
        // We've already overridden the methods that would be called, so we're just
        // calling the super constructor to ensure that the instanceof check works.
        super();
        this.headers = new Proxy(headers, {
            get (target, prop, receiver) {
                // Because this is just an object, we expect that all "get" operations
                // are for properties. If it's a "get" for a symbol, we'll just return
                // the symbol.
                if (typeof prop === "symbol") {
                    return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ReflectAdapter"].get(target, prop, receiver);
                }
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, return undefined.
                if (typeof original === "undefined") return;
                // If the original casing exists, return the value.
                return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ReflectAdapter"].get(target, original, receiver);
            },
            set (target, prop, value, receiver) {
                if (typeof prop === "symbol") {
                    return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ReflectAdapter"].set(target, prop, value, receiver);
                }
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, use the prop as the key.
                return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ReflectAdapter"].set(target, original ?? prop, value, receiver);
            },
            has (target, prop) {
                if (typeof prop === "symbol") return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ReflectAdapter"].has(target, prop);
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, return false.
                if (typeof original === "undefined") return false;
                // If the original casing exists, return true.
                return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ReflectAdapter"].has(target, original);
            },
            deleteProperty (target, prop) {
                if (typeof prop === "symbol") return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ReflectAdapter"].deleteProperty(target, prop);
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, return true.
                if (typeof original === "undefined") return true;
                // If the original casing exists, delete the property.
                return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ReflectAdapter"].deleteProperty(target, original);
            }
        });
    }
    /**
   * Seals a Headers instance to prevent modification by throwing an error when
   * any mutating method is called.
   */ static seal(headers) {
        return new Proxy(headers, {
            get (target, prop, receiver) {
                switch(prop){
                    case "append":
                    case "delete":
                    case "set":
                        return ReadonlyHeadersError.callable;
                    default:
                        return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ReflectAdapter"].get(target, prop, receiver);
                }
            }
        });
    }
    /**
   * Merges a header value into a string. This stores multiple values as an
   * array, so we need to merge them into a string.
   *
   * @param value a header value
   * @returns a merged header value (a string)
   */ merge(value) {
        if (Array.isArray(value)) return value.join(", ");
        return value;
    }
    /**
   * Creates a Headers instance from a plain object or a Headers instance.
   *
   * @param headers a plain object or a Headers instance
   * @returns a headers instance
   */ static from(headers) {
        if (headers instanceof Headers) return headers;
        return new HeadersAdapter(headers);
    }
    append(name, value) {
        const existing = this.headers[name];
        if (typeof existing === "string") {
            this.headers[name] = [
                existing,
                value
            ];
        } else if (Array.isArray(existing)) {
            existing.push(value);
        } else {
            this.headers[name] = value;
        }
    }
    delete(name) {
        delete this.headers[name];
    }
    get(name) {
        const value = this.headers[name];
        if (typeof value !== "undefined") return this.merge(value);
        return null;
    }
    has(name) {
        return typeof this.headers[name] !== "undefined";
    }
    set(name, value) {
        this.headers[name] = value;
    }
    forEach(callbackfn, thisArg) {
        for (const [name, value] of this.entries()){
            callbackfn.call(thisArg, value, name, this);
        }
    }
    *entries() {
        for (const key of Object.keys(this.headers)){
            const name = key.toLowerCase();
            // We assert here that this is a string because we got it from the
            // Object.keys() call above.
            const value = this.get(name);
            yield [
                name,
                value
            ];
        }
    }
    *keys() {
        for (const key of Object.keys(this.headers)){
            const name = key.toLowerCase();
            yield name;
        }
    }
    *values() {
        for (const key of Object.keys(this.headers)){
            // We assert here that this is a string because we got it from the
            // Object.keys() call above.
            const value = this.get(key);
            yield value;
        }
    }
    [Symbol.iterator]() {
        return this.entries();
    }
} //# sourceMappingURL=headers.js.map

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/client/components/async-local-storage.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "createAsyncLocalStorage": ()=>createAsyncLocalStorage
});
const sharedAsyncLocalStorageNotAvailableError = new Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available");
class FakeAsyncLocalStorage {
    disable() {
        throw sharedAsyncLocalStorageNotAvailableError;
    }
    getStore() {
        // This fake implementation of AsyncLocalStorage always returns `undefined`.
        return undefined;
    }
    run() {
        throw sharedAsyncLocalStorageNotAvailableError;
    }
    exit() {
        throw sharedAsyncLocalStorageNotAvailableError;
    }
    enterWith() {
        throw sharedAsyncLocalStorageNotAvailableError;
    }
}
const maybeGlobalAsyncLocalStorage = globalThis.AsyncLocalStorage;
function createAsyncLocalStorage() {
    if (maybeGlobalAsyncLocalStorage) {
        return new maybeGlobalAsyncLocalStorage();
    }
    return new FakeAsyncLocalStorage();
} //# sourceMappingURL=async-local-storage.js.map

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/client/components/static-generation-async-storage-instance.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "staticGenerationAsyncStorage": ()=>staticGenerationAsyncStorage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$async$2d$local$2d$storage$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/client/components/async-local-storage.js [middleware] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const staticGenerationAsyncStorage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$async$2d$local$2d$storage$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["createAsyncLocalStorage"])(); //# sourceMappingURL=static-generation-async-storage-instance.js.map

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/client/components/static-generation-async-storage.external.js [middleware] (ecmascript) <locals>": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({});
"TURBOPACK { transition: next-shared }";
;
;
 //# sourceMappingURL=static-generation-async-storage.external.js.map

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/client/components/static-generation-async-storage.external.js [middleware] (ecmascript) <module evaluation>": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$static$2d$generation$2d$async$2d$storage$2d$instance$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/client/components/static-generation-async-storage-instance.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$static$2d$generation$2d$async$2d$storage$2e$external$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/client/components/static-generation-async-storage.external.js [middleware] (ecmascript) <locals>");
"__TURBOPACK__ecmascript__hoisting__location__";

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/server/web/spec-extension/adapters/request-cookies.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "MutableRequestCookiesAdapter": ()=>MutableRequestCookiesAdapter,
    "ReadonlyRequestCookiesError": ()=>ReadonlyRequestCookiesError,
    "RequestCookiesAdapter": ()=>RequestCookiesAdapter,
    "appendMutableCookies": ()=>appendMutableCookies,
    "getModifiedCookieValues": ()=>getModifiedCookieValues
});
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$cookies$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/server/web/spec-extension/cookies.js [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f40$edge$2d$runtime$2f$cookies$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/compiled/@edge-runtime/cookies/index.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/server/web/spec-extension/adapters/reflect.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$static$2d$generation$2d$async$2d$storage$2e$external$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/client/components/static-generation-async-storage.external.js [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$static$2d$generation$2d$async$2d$storage$2d$instance$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/client/components/static-generation-async-storage-instance.js [middleware] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
class ReadonlyRequestCookiesError extends Error {
    constructor(){
        super("Cookies can only be modified in a Server Action or Route Handler. Read more: https://nextjs.org/docs/app/api-reference/functions/cookies#cookiessetname-value-options");
    }
    static callable() {
        throw new ReadonlyRequestCookiesError();
    }
}
class RequestCookiesAdapter {
    static seal(cookies) {
        return new Proxy(cookies, {
            get (target, prop, receiver) {
                switch(prop){
                    case "clear":
                    case "delete":
                    case "set":
                        return ReadonlyRequestCookiesError.callable;
                    default:
                        return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ReflectAdapter"].get(target, prop, receiver);
                }
            }
        });
    }
}
const SYMBOL_MODIFY_COOKIE_VALUES = Symbol.for("next.mutated.cookies");
function getModifiedCookieValues(cookies) {
    const modified = cookies[SYMBOL_MODIFY_COOKIE_VALUES];
    if (!modified || !Array.isArray(modified) || modified.length === 0) {
        return [];
    }
    return modified;
}
function appendMutableCookies(headers, mutableCookies) {
    const modifiedCookieValues = getModifiedCookieValues(mutableCookies);
    if (modifiedCookieValues.length === 0) {
        return false;
    }
    // Return a new response that extends the response with
    // the modified cookies as fallbacks. `res` cookies
    // will still take precedence.
    const resCookies = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f40$edge$2d$runtime$2f$cookies$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ResponseCookies"](headers);
    const returnedCookies = resCookies.getAll();
    // Set the modified cookies as fallbacks.
    for (const cookie of modifiedCookieValues){
        resCookies.set(cookie);
    }
    // Set the original cookies as the final values.
    for (const cookie of returnedCookies){
        resCookies.set(cookie);
    }
    return true;
}
class MutableRequestCookiesAdapter {
    static wrap(cookies, onUpdateCookies) {
        const responseCookies = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f40$edge$2d$runtime$2f$cookies$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ResponseCookies"](new Headers());
        for (const cookie of cookies.getAll()){
            responseCookies.set(cookie);
        }
        let modifiedValues = [];
        const modifiedCookies = new Set();
        const updateResponseCookies = ()=>{
            // TODO-APP: change method of getting staticGenerationAsyncStore
            const staticGenerationAsyncStore = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$static$2d$generation$2d$async$2d$storage$2d$instance$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["staticGenerationAsyncStorage"].getStore();
            if (staticGenerationAsyncStore) {
                staticGenerationAsyncStore.pathWasRevalidated = true;
            }
            const allCookies = responseCookies.getAll();
            modifiedValues = allCookies.filter((c)=>modifiedCookies.has(c.name));
            if (onUpdateCookies) {
                const serializedCookies = [];
                for (const cookie of modifiedValues){
                    const tempCookies = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f40$edge$2d$runtime$2f$cookies$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ResponseCookies"](new Headers());
                    tempCookies.set(cookie);
                    serializedCookies.push(tempCookies.toString());
                }
                onUpdateCookies(serializedCookies);
            }
        };
        return new Proxy(responseCookies, {
            get (target, prop, receiver) {
                switch(prop){
                    // A special symbol to get the modified cookie values
                    case SYMBOL_MODIFY_COOKIE_VALUES:
                        return modifiedValues;
                    // TODO: Throw error if trying to set a cookie after the response
                    // headers have been set.
                    case "delete":
                        return function(...args) {
                            modifiedCookies.add(typeof args[0] === "string" ? args[0] : args[0].name);
                            try {
                                target.delete(...args);
                            } finally{
                                updateResponseCookies();
                            }
                        };
                    case "set":
                        return function(...args) {
                            modifiedCookies.add(typeof args[0] === "string" ? args[0] : args[0].name);
                            try {
                                return target.set(...args);
                            } finally{
                                updateResponseCookies();
                            }
                        };
                    default:
                        return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ReflectAdapter"].get(target, prop, receiver);
                }
            }
        });
    }
} //# sourceMappingURL=request-cookies.js.map

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/server/lib/trace/constants.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

/**
 * Contains predefined constants for the trace span name in next/server.
 *
 * Currently, next/server/tracer is internal implementation only for tracking
 * next.js's implementation only with known span names defined here.
 **/ // eslint typescript has a bug with TS enums
/* eslint-disable no-shadow */ __turbopack_esm__({
    "AppRenderSpan": ()=>AppRenderSpan,
    "AppRouteRouteHandlersSpan": ()=>AppRouteRouteHandlersSpan,
    "BaseServerSpan": ()=>BaseServerSpan,
    "LoadComponentsSpan": ()=>LoadComponentsSpan,
    "LogSpanAllowList": ()=>LogSpanAllowList,
    "MiddlewareSpan": ()=>MiddlewareSpan,
    "NextNodeServerSpan": ()=>NextNodeServerSpan,
    "NextServerSpan": ()=>NextServerSpan,
    "NextVanillaSpanAllowlist": ()=>NextVanillaSpanAllowlist,
    "NodeSpan": ()=>NodeSpan,
    "RenderSpan": ()=>RenderSpan,
    "ResolveMetadataSpan": ()=>ResolveMetadataSpan,
    "RouterSpan": ()=>RouterSpan,
    "StartServerSpan": ()=>StartServerSpan
});
var BaseServerSpan;
(function(BaseServerSpan) {
    BaseServerSpan["handleRequest"] = "BaseServer.handleRequest";
    BaseServerSpan["run"] = "BaseServer.run";
    BaseServerSpan["pipe"] = "BaseServer.pipe";
    BaseServerSpan["getStaticHTML"] = "BaseServer.getStaticHTML";
    BaseServerSpan["render"] = "BaseServer.render";
    BaseServerSpan["renderToResponseWithComponents"] = "BaseServer.renderToResponseWithComponents";
    BaseServerSpan["renderToResponse"] = "BaseServer.renderToResponse";
    BaseServerSpan["renderToHTML"] = "BaseServer.renderToHTML";
    BaseServerSpan["renderError"] = "BaseServer.renderError";
    BaseServerSpan["renderErrorToResponse"] = "BaseServer.renderErrorToResponse";
    BaseServerSpan["renderErrorToHTML"] = "BaseServer.renderErrorToHTML";
    BaseServerSpan["render404"] = "BaseServer.render404";
})(BaseServerSpan || (BaseServerSpan = {}));
var LoadComponentsSpan;
(function(LoadComponentsSpan) {
    LoadComponentsSpan["loadDefaultErrorComponents"] = "LoadComponents.loadDefaultErrorComponents";
    LoadComponentsSpan["loadComponents"] = "LoadComponents.loadComponents";
})(LoadComponentsSpan || (LoadComponentsSpan = {}));
var NextServerSpan;
(function(NextServerSpan) {
    NextServerSpan["getRequestHandler"] = "NextServer.getRequestHandler";
    NextServerSpan["getServer"] = "NextServer.getServer";
    NextServerSpan["getServerRequestHandler"] = "NextServer.getServerRequestHandler";
    NextServerSpan["createServer"] = "createServer.createServer";
})(NextServerSpan || (NextServerSpan = {}));
var NextNodeServerSpan;
(function(NextNodeServerSpan) {
    NextNodeServerSpan["compression"] = "NextNodeServer.compression";
    NextNodeServerSpan["getBuildId"] = "NextNodeServer.getBuildId";
    NextNodeServerSpan["createComponentTree"] = "NextNodeServer.createComponentTree";
    NextNodeServerSpan["clientComponentLoading"] = "NextNodeServer.clientComponentLoading";
    NextNodeServerSpan["getLayoutOrPageModule"] = "NextNodeServer.getLayoutOrPageModule";
    NextNodeServerSpan["generateStaticRoutes"] = "NextNodeServer.generateStaticRoutes";
    NextNodeServerSpan["generateFsStaticRoutes"] = "NextNodeServer.generateFsStaticRoutes";
    NextNodeServerSpan["generatePublicRoutes"] = "NextNodeServer.generatePublicRoutes";
    NextNodeServerSpan["generateImageRoutes"] = "NextNodeServer.generateImageRoutes.route";
    NextNodeServerSpan["sendRenderResult"] = "NextNodeServer.sendRenderResult";
    NextNodeServerSpan["proxyRequest"] = "NextNodeServer.proxyRequest";
    NextNodeServerSpan["runApi"] = "NextNodeServer.runApi";
    NextNodeServerSpan["render"] = "NextNodeServer.render";
    NextNodeServerSpan["renderHTML"] = "NextNodeServer.renderHTML";
    NextNodeServerSpan["imageOptimizer"] = "NextNodeServer.imageOptimizer";
    NextNodeServerSpan["getPagePath"] = "NextNodeServer.getPagePath";
    NextNodeServerSpan["getRoutesManifest"] = "NextNodeServer.getRoutesManifest";
    NextNodeServerSpan["findPageComponents"] = "NextNodeServer.findPageComponents";
    NextNodeServerSpan["getFontManifest"] = "NextNodeServer.getFontManifest";
    NextNodeServerSpan["getServerComponentManifest"] = "NextNodeServer.getServerComponentManifest";
    NextNodeServerSpan["getRequestHandler"] = "NextNodeServer.getRequestHandler";
    NextNodeServerSpan["renderToHTML"] = "NextNodeServer.renderToHTML";
    NextNodeServerSpan["renderError"] = "NextNodeServer.renderError";
    NextNodeServerSpan["renderErrorToHTML"] = "NextNodeServer.renderErrorToHTML";
    NextNodeServerSpan["render404"] = "NextNodeServer.render404";
    NextNodeServerSpan["startResponse"] = "NextNodeServer.startResponse";
    // nested inner span, does not require parent scope name
    NextNodeServerSpan["route"] = "route";
    NextNodeServerSpan["onProxyReq"] = "onProxyReq";
    NextNodeServerSpan["apiResolver"] = "apiResolver";
    NextNodeServerSpan["internalFetch"] = "internalFetch";
})(NextNodeServerSpan || (NextNodeServerSpan = {}));
var StartServerSpan;
(function(StartServerSpan) {
    StartServerSpan["startServer"] = "startServer.startServer";
})(StartServerSpan || (StartServerSpan = {}));
var RenderSpan;
(function(RenderSpan) {
    RenderSpan["getServerSideProps"] = "Render.getServerSideProps";
    RenderSpan["getStaticProps"] = "Render.getStaticProps";
    RenderSpan["renderToString"] = "Render.renderToString";
    RenderSpan["renderDocument"] = "Render.renderDocument";
    RenderSpan["createBodyResult"] = "Render.createBodyResult";
})(RenderSpan || (RenderSpan = {}));
var AppRenderSpan;
(function(AppRenderSpan) {
    AppRenderSpan["renderToString"] = "AppRender.renderToString";
    AppRenderSpan["renderToReadableStream"] = "AppRender.renderToReadableStream";
    AppRenderSpan["getBodyResult"] = "AppRender.getBodyResult";
    AppRenderSpan["fetch"] = "AppRender.fetch";
})(AppRenderSpan || (AppRenderSpan = {}));
var RouterSpan;
(function(RouterSpan) {
    RouterSpan["executeRoute"] = "Router.executeRoute";
})(RouterSpan || (RouterSpan = {}));
var NodeSpan;
(function(NodeSpan) {
    NodeSpan["runHandler"] = "Node.runHandler";
})(NodeSpan || (NodeSpan = {}));
var AppRouteRouteHandlersSpan;
(function(AppRouteRouteHandlersSpan) {
    AppRouteRouteHandlersSpan["runHandler"] = "AppRouteRouteHandlers.runHandler";
})(AppRouteRouteHandlersSpan || (AppRouteRouteHandlersSpan = {}));
var ResolveMetadataSpan;
(function(ResolveMetadataSpan) {
    ResolveMetadataSpan["generateMetadata"] = "ResolveMetadata.generateMetadata";
    ResolveMetadataSpan["generateViewport"] = "ResolveMetadata.generateViewport";
})(ResolveMetadataSpan || (ResolveMetadataSpan = {}));
var MiddlewareSpan;
(function(MiddlewareSpan) {
    MiddlewareSpan["execute"] = "Middleware.execute";
})(MiddlewareSpan || (MiddlewareSpan = {}));
const NextVanillaSpanAllowlist = [
    "Middleware.execute",
    "BaseServer.handleRequest",
    "Render.getServerSideProps",
    "Render.getStaticProps",
    "AppRender.fetch",
    "AppRender.getBodyResult",
    "Render.renderDocument",
    "Node.runHandler",
    "AppRouteRouteHandlers.runHandler",
    "ResolveMetadata.generateMetadata",
    "ResolveMetadata.generateViewport",
    "NextNodeServer.createComponentTree",
    "NextNodeServer.findPageComponents",
    "NextNodeServer.getLayoutOrPageModule",
    "NextNodeServer.startResponse",
    "NextNodeServer.clientComponentLoading"
];
const LogSpanAllowList = [
    "NextNodeServer.findPageComponents",
    "NextNodeServer.createComponentTree",
    "NextNodeServer.clientComponentLoading"
];
;
 //# sourceMappingURL=constants.js.map

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/compiled/@opentelemetry/api/index.js [middleware] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

(()=>{
    "use strict";
    var e = {
        491: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.ContextAPI = void 0;
            const n = r(223);
            const a = r(172);
            const o = r(930);
            const i = "context";
            const c = new n.NoopContextManager;
            class ContextAPI {
                constructor(){}
                static getInstance() {
                    if (!this._instance) {
                        this._instance = new ContextAPI;
                    }
                    return this._instance;
                }
                setGlobalContextManager(e) {
                    return (0, a.registerGlobal)(i, e, o.DiagAPI.instance());
                }
                active() {
                    return this._getContextManager().active();
                }
                with(e, t, r, ...n) {
                    return this._getContextManager().with(e, t, r, ...n);
                }
                bind(e, t) {
                    return this._getContextManager().bind(e, t);
                }
                _getContextManager() {
                    return (0, a.getGlobal)(i) || c;
                }
                disable() {
                    this._getContextManager().disable();
                    (0, a.unregisterGlobal)(i, o.DiagAPI.instance());
                }
            }
            t.ContextAPI = ContextAPI;
        },
        930: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.DiagAPI = void 0;
            const n = r(56);
            const a = r(912);
            const o = r(957);
            const i = r(172);
            const c = "diag";
            class DiagAPI {
                constructor(){
                    function _logProxy(e) {
                        return function(...t) {
                            const r = (0, i.getGlobal)("diag");
                            if (!r) return;
                            return r[e](...t);
                        };
                    }
                    const e = this;
                    const setLogger = (t, r = {
                        logLevel: o.DiagLogLevel.INFO
                    })=>{
                        var n, c, s;
                        if (t === e) {
                            const t = new Error("Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation");
                            e.error((n = t.stack) !== null && n !== void 0 ? n : t.message);
                            return false;
                        }
                        if (typeof r === "number") {
                            r = {
                                logLevel: r
                            };
                        }
                        const u = (0, i.getGlobal)("diag");
                        const l = (0, a.createLogLevelDiagLogger)((c = r.logLevel) !== null && c !== void 0 ? c : o.DiagLogLevel.INFO, t);
                        if (u && !r.suppressOverrideMessage) {
                            const e = (s = (new Error).stack) !== null && s !== void 0 ? s : "<failed to generate stacktrace>";
                            u.warn(`Current logger will be overwritten from ${e}`);
                            l.warn(`Current logger will overwrite one already registered from ${e}`);
                        }
                        return (0, i.registerGlobal)("diag", l, e, true);
                    };
                    e.setLogger = setLogger;
                    e.disable = ()=>{
                        (0, i.unregisterGlobal)(c, e);
                    };
                    e.createComponentLogger = (e)=>new n.DiagComponentLogger(e);
                    e.verbose = _logProxy("verbose");
                    e.debug = _logProxy("debug");
                    e.info = _logProxy("info");
                    e.warn = _logProxy("warn");
                    e.error = _logProxy("error");
                }
                static instance() {
                    if (!this._instance) {
                        this._instance = new DiagAPI;
                    }
                    return this._instance;
                }
            }
            t.DiagAPI = DiagAPI;
        },
        653: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.MetricsAPI = void 0;
            const n = r(660);
            const a = r(172);
            const o = r(930);
            const i = "metrics";
            class MetricsAPI {
                constructor(){}
                static getInstance() {
                    if (!this._instance) {
                        this._instance = new MetricsAPI;
                    }
                    return this._instance;
                }
                setGlobalMeterProvider(e) {
                    return (0, a.registerGlobal)(i, e, o.DiagAPI.instance());
                }
                getMeterProvider() {
                    return (0, a.getGlobal)(i) || n.NOOP_METER_PROVIDER;
                }
                getMeter(e, t, r) {
                    return this.getMeterProvider().getMeter(e, t, r);
                }
                disable() {
                    (0, a.unregisterGlobal)(i, o.DiagAPI.instance());
                }
            }
            t.MetricsAPI = MetricsAPI;
        },
        181: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.PropagationAPI = void 0;
            const n = r(172);
            const a = r(874);
            const o = r(194);
            const i = r(277);
            const c = r(369);
            const s = r(930);
            const u = "propagation";
            const l = new a.NoopTextMapPropagator;
            class PropagationAPI {
                constructor(){
                    this.createBaggage = c.createBaggage;
                    this.getBaggage = i.getBaggage;
                    this.getActiveBaggage = i.getActiveBaggage;
                    this.setBaggage = i.setBaggage;
                    this.deleteBaggage = i.deleteBaggage;
                }
                static getInstance() {
                    if (!this._instance) {
                        this._instance = new PropagationAPI;
                    }
                    return this._instance;
                }
                setGlobalPropagator(e) {
                    return (0, n.registerGlobal)(u, e, s.DiagAPI.instance());
                }
                inject(e, t, r = o.defaultTextMapSetter) {
                    return this._getGlobalPropagator().inject(e, t, r);
                }
                extract(e, t, r = o.defaultTextMapGetter) {
                    return this._getGlobalPropagator().extract(e, t, r);
                }
                fields() {
                    return this._getGlobalPropagator().fields();
                }
                disable() {
                    (0, n.unregisterGlobal)(u, s.DiagAPI.instance());
                }
                _getGlobalPropagator() {
                    return (0, n.getGlobal)(u) || l;
                }
            }
            t.PropagationAPI = PropagationAPI;
        },
        997: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.TraceAPI = void 0;
            const n = r(172);
            const a = r(846);
            const o = r(139);
            const i = r(607);
            const c = r(930);
            const s = "trace";
            class TraceAPI {
                constructor(){
                    this._proxyTracerProvider = new a.ProxyTracerProvider;
                    this.wrapSpanContext = o.wrapSpanContext;
                    this.isSpanContextValid = o.isSpanContextValid;
                    this.deleteSpan = i.deleteSpan;
                    this.getSpan = i.getSpan;
                    this.getActiveSpan = i.getActiveSpan;
                    this.getSpanContext = i.getSpanContext;
                    this.setSpan = i.setSpan;
                    this.setSpanContext = i.setSpanContext;
                }
                static getInstance() {
                    if (!this._instance) {
                        this._instance = new TraceAPI;
                    }
                    return this._instance;
                }
                setGlobalTracerProvider(e) {
                    const t = (0, n.registerGlobal)(s, this._proxyTracerProvider, c.DiagAPI.instance());
                    if (t) {
                        this._proxyTracerProvider.setDelegate(e);
                    }
                    return t;
                }
                getTracerProvider() {
                    return (0, n.getGlobal)(s) || this._proxyTracerProvider;
                }
                getTracer(e, t) {
                    return this.getTracerProvider().getTracer(e, t);
                }
                disable() {
                    (0, n.unregisterGlobal)(s, c.DiagAPI.instance());
                    this._proxyTracerProvider = new a.ProxyTracerProvider;
                }
            }
            t.TraceAPI = TraceAPI;
        },
        277: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.deleteBaggage = t.setBaggage = t.getActiveBaggage = t.getBaggage = void 0;
            const n = r(491);
            const a = r(780);
            const o = (0, a.createContextKey)("OpenTelemetry Baggage Key");
            function getBaggage(e) {
                return e.getValue(o) || undefined;
            }
            t.getBaggage = getBaggage;
            function getActiveBaggage() {
                return getBaggage(n.ContextAPI.getInstance().active());
            }
            t.getActiveBaggage = getActiveBaggage;
            function setBaggage(e, t) {
                return e.setValue(o, t);
            }
            t.setBaggage = setBaggage;
            function deleteBaggage(e) {
                return e.deleteValue(o);
            }
            t.deleteBaggage = deleteBaggage;
        },
        993: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.BaggageImpl = void 0;
            class BaggageImpl {
                constructor(e){
                    this._entries = e ? new Map(e) : new Map;
                }
                getEntry(e) {
                    const t = this._entries.get(e);
                    if (!t) {
                        return undefined;
                    }
                    return Object.assign({}, t);
                }
                getAllEntries() {
                    return Array.from(this._entries.entries()).map(([e, t])=>[
                            e,
                            t
                        ]);
                }
                setEntry(e, t) {
                    const r = new BaggageImpl(this._entries);
                    r._entries.set(e, t);
                    return r;
                }
                removeEntry(e) {
                    const t = new BaggageImpl(this._entries);
                    t._entries.delete(e);
                    return t;
                }
                removeEntries(...e) {
                    const t = new BaggageImpl(this._entries);
                    for (const r of e){
                        t._entries.delete(r);
                    }
                    return t;
                }
                clear() {
                    return new BaggageImpl;
                }
            }
            t.BaggageImpl = BaggageImpl;
        },
        830: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.baggageEntryMetadataSymbol = void 0;
            t.baggageEntryMetadataSymbol = Symbol("BaggageEntryMetadata");
        },
        369: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.baggageEntryMetadataFromString = t.createBaggage = void 0;
            const n = r(930);
            const a = r(993);
            const o = r(830);
            const i = n.DiagAPI.instance();
            function createBaggage(e = {}) {
                return new a.BaggageImpl(new Map(Object.entries(e)));
            }
            t.createBaggage = createBaggage;
            function baggageEntryMetadataFromString(e) {
                if (typeof e !== "string") {
                    i.error(`Cannot create baggage metadata from unknown type: ${typeof e}`);
                    e = "";
                }
                return {
                    __TYPE__: o.baggageEntryMetadataSymbol,
                    toString () {
                        return e;
                    }
                };
            }
            t.baggageEntryMetadataFromString = baggageEntryMetadataFromString;
        },
        67: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.context = void 0;
            const n = r(491);
            t.context = n.ContextAPI.getInstance();
        },
        223: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.NoopContextManager = void 0;
            const n = r(780);
            class NoopContextManager {
                active() {
                    return n.ROOT_CONTEXT;
                }
                with(e, t, r, ...n) {
                    return t.call(r, ...n);
                }
                bind(e, t) {
                    return t;
                }
                enable() {
                    return this;
                }
                disable() {
                    return this;
                }
            }
            t.NoopContextManager = NoopContextManager;
        },
        780: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.ROOT_CONTEXT = t.createContextKey = void 0;
            function createContextKey(e) {
                return Symbol.for(e);
            }
            t.createContextKey = createContextKey;
            class BaseContext {
                constructor(e){
                    const t = this;
                    t._currentContext = e ? new Map(e) : new Map;
                    t.getValue = (e)=>t._currentContext.get(e);
                    t.setValue = (e, r)=>{
                        const n = new BaseContext(t._currentContext);
                        n._currentContext.set(e, r);
                        return n;
                    };
                    t.deleteValue = (e)=>{
                        const r = new BaseContext(t._currentContext);
                        r._currentContext.delete(e);
                        return r;
                    };
                }
            }
            t.ROOT_CONTEXT = new BaseContext;
        },
        506: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.diag = void 0;
            const n = r(930);
            t.diag = n.DiagAPI.instance();
        },
        56: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.DiagComponentLogger = void 0;
            const n = r(172);
            class DiagComponentLogger {
                constructor(e){
                    this._namespace = e.namespace || "DiagComponentLogger";
                }
                debug(...e) {
                    return logProxy("debug", this._namespace, e);
                }
                error(...e) {
                    return logProxy("error", this._namespace, e);
                }
                info(...e) {
                    return logProxy("info", this._namespace, e);
                }
                warn(...e) {
                    return logProxy("warn", this._namespace, e);
                }
                verbose(...e) {
                    return logProxy("verbose", this._namespace, e);
                }
            }
            t.DiagComponentLogger = DiagComponentLogger;
            function logProxy(e, t, r) {
                const a = (0, n.getGlobal)("diag");
                if (!a) {
                    return;
                }
                r.unshift(t);
                return a[e](...r);
            }
        },
        972: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.DiagConsoleLogger = void 0;
            const r = [
                {
                    n: "error",
                    c: "error"
                },
                {
                    n: "warn",
                    c: "warn"
                },
                {
                    n: "info",
                    c: "info"
                },
                {
                    n: "debug",
                    c: "debug"
                },
                {
                    n: "verbose",
                    c: "trace"
                }
            ];
            class DiagConsoleLogger {
                constructor(){
                    function _consoleFunc(e) {
                        return function(...t) {
                            if (console) {
                                let r = console[e];
                                if (typeof r !== "function") {
                                    r = console.log;
                                }
                                if (typeof r === "function") {
                                    return r.apply(console, t);
                                }
                            }
                        };
                    }
                    for(let e = 0; e < r.length; e++){
                        this[r[e].n] = _consoleFunc(r[e].c);
                    }
                }
            }
            t.DiagConsoleLogger = DiagConsoleLogger;
        },
        912: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.createLogLevelDiagLogger = void 0;
            const n = r(957);
            function createLogLevelDiagLogger(e, t) {
                if (e < n.DiagLogLevel.NONE) {
                    e = n.DiagLogLevel.NONE;
                } else if (e > n.DiagLogLevel.ALL) {
                    e = n.DiagLogLevel.ALL;
                }
                t = t || {};
                function _filterFunc(r, n) {
                    const a = t[r];
                    if (typeof a === "function" && e >= n) {
                        return a.bind(t);
                    }
                    return function() {};
                }
                return {
                    error: _filterFunc("error", n.DiagLogLevel.ERROR),
                    warn: _filterFunc("warn", n.DiagLogLevel.WARN),
                    info: _filterFunc("info", n.DiagLogLevel.INFO),
                    debug: _filterFunc("debug", n.DiagLogLevel.DEBUG),
                    verbose: _filterFunc("verbose", n.DiagLogLevel.VERBOSE)
                };
            }
            t.createLogLevelDiagLogger = createLogLevelDiagLogger;
        },
        957: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.DiagLogLevel = void 0;
            var r;
            (function(e) {
                e[e["NONE"] = 0] = "NONE";
                e[e["ERROR"] = 30] = "ERROR";
                e[e["WARN"] = 50] = "WARN";
                e[e["INFO"] = 60] = "INFO";
                e[e["DEBUG"] = 70] = "DEBUG";
                e[e["VERBOSE"] = 80] = "VERBOSE";
                e[e["ALL"] = 9999] = "ALL";
            })(r = t.DiagLogLevel || (t.DiagLogLevel = {}));
        },
        172: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.unregisterGlobal = t.getGlobal = t.registerGlobal = void 0;
            const n = r(200);
            const a = r(521);
            const o = r(130);
            const i = a.VERSION.split(".")[0];
            const c = Symbol.for(`opentelemetry.js.api.${i}`);
            const s = n._globalThis;
            function registerGlobal(e, t, r, n = false) {
                var o;
                const i = s[c] = (o = s[c]) !== null && o !== void 0 ? o : {
                    version: a.VERSION
                };
                if (!n && i[e]) {
                    const t = new Error(`@opentelemetry/api: Attempted duplicate registration of API: ${e}`);
                    r.error(t.stack || t.message);
                    return false;
                }
                if (i.version !== a.VERSION) {
                    const t = new Error(`@opentelemetry/api: Registration of version v${i.version} for ${e} does not match previously registered API v${a.VERSION}`);
                    r.error(t.stack || t.message);
                    return false;
                }
                i[e] = t;
                r.debug(`@opentelemetry/api: Registered a global for ${e} v${a.VERSION}.`);
                return true;
            }
            t.registerGlobal = registerGlobal;
            function getGlobal(e) {
                var t, r;
                const n = (t = s[c]) === null || t === void 0 ? void 0 : t.version;
                if (!n || !(0, o.isCompatible)(n)) {
                    return;
                }
                return (r = s[c]) === null || r === void 0 ? void 0 : r[e];
            }
            t.getGlobal = getGlobal;
            function unregisterGlobal(e, t) {
                t.debug(`@opentelemetry/api: Unregistering a global for ${e} v${a.VERSION}.`);
                const r = s[c];
                if (r) {
                    delete r[e];
                }
            }
            t.unregisterGlobal = unregisterGlobal;
        },
        130: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.isCompatible = t._makeCompatibilityCheck = void 0;
            const n = r(521);
            const a = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;
            function _makeCompatibilityCheck(e) {
                const t = new Set([
                    e
                ]);
                const r = new Set;
                const n = e.match(a);
                if (!n) {
                    return ()=>false;
                }
                const o = {
                    major: +n[1],
                    minor: +n[2],
                    patch: +n[3],
                    prerelease: n[4]
                };
                if (o.prerelease != null) {
                    return function isExactmatch(t) {
                        return t === e;
                    };
                }
                function _reject(e) {
                    r.add(e);
                    return false;
                }
                function _accept(e) {
                    t.add(e);
                    return true;
                }
                return function isCompatible(e) {
                    if (t.has(e)) {
                        return true;
                    }
                    if (r.has(e)) {
                        return false;
                    }
                    const n = e.match(a);
                    if (!n) {
                        return _reject(e);
                    }
                    const i = {
                        major: +n[1],
                        minor: +n[2],
                        patch: +n[3],
                        prerelease: n[4]
                    };
                    if (i.prerelease != null) {
                        return _reject(e);
                    }
                    if (o.major !== i.major) {
                        return _reject(e);
                    }
                    if (o.major === 0) {
                        if (o.minor === i.minor && o.patch <= i.patch) {
                            return _accept(e);
                        }
                        return _reject(e);
                    }
                    if (o.minor <= i.minor) {
                        return _accept(e);
                    }
                    return _reject(e);
                };
            }
            t._makeCompatibilityCheck = _makeCompatibilityCheck;
            t.isCompatible = _makeCompatibilityCheck(n.VERSION);
        },
        886: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.metrics = void 0;
            const n = r(653);
            t.metrics = n.MetricsAPI.getInstance();
        },
        901: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.ValueType = void 0;
            var r;
            (function(e) {
                e[e["INT"] = 0] = "INT";
                e[e["DOUBLE"] = 1] = "DOUBLE";
            })(r = t.ValueType || (t.ValueType = {}));
        },
        102: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.createNoopMeter = t.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC = t.NOOP_OBSERVABLE_GAUGE_METRIC = t.NOOP_OBSERVABLE_COUNTER_METRIC = t.NOOP_UP_DOWN_COUNTER_METRIC = t.NOOP_HISTOGRAM_METRIC = t.NOOP_COUNTER_METRIC = t.NOOP_METER = t.NoopObservableUpDownCounterMetric = t.NoopObservableGaugeMetric = t.NoopObservableCounterMetric = t.NoopObservableMetric = t.NoopHistogramMetric = t.NoopUpDownCounterMetric = t.NoopCounterMetric = t.NoopMetric = t.NoopMeter = void 0;
            class NoopMeter {
                constructor(){}
                createHistogram(e, r) {
                    return t.NOOP_HISTOGRAM_METRIC;
                }
                createCounter(e, r) {
                    return t.NOOP_COUNTER_METRIC;
                }
                createUpDownCounter(e, r) {
                    return t.NOOP_UP_DOWN_COUNTER_METRIC;
                }
                createObservableGauge(e, r) {
                    return t.NOOP_OBSERVABLE_GAUGE_METRIC;
                }
                createObservableCounter(e, r) {
                    return t.NOOP_OBSERVABLE_COUNTER_METRIC;
                }
                createObservableUpDownCounter(e, r) {
                    return t.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC;
                }
                addBatchObservableCallback(e, t) {}
                removeBatchObservableCallback(e) {}
            }
            t.NoopMeter = NoopMeter;
            class NoopMetric {
            }
            t.NoopMetric = NoopMetric;
            class NoopCounterMetric extends NoopMetric {
                add(e, t) {}
            }
            t.NoopCounterMetric = NoopCounterMetric;
            class NoopUpDownCounterMetric extends NoopMetric {
                add(e, t) {}
            }
            t.NoopUpDownCounterMetric = NoopUpDownCounterMetric;
            class NoopHistogramMetric extends NoopMetric {
                record(e, t) {}
            }
            t.NoopHistogramMetric = NoopHistogramMetric;
            class NoopObservableMetric {
                addCallback(e) {}
                removeCallback(e) {}
            }
            t.NoopObservableMetric = NoopObservableMetric;
            class NoopObservableCounterMetric extends NoopObservableMetric {
            }
            t.NoopObservableCounterMetric = NoopObservableCounterMetric;
            class NoopObservableGaugeMetric extends NoopObservableMetric {
            }
            t.NoopObservableGaugeMetric = NoopObservableGaugeMetric;
            class NoopObservableUpDownCounterMetric extends NoopObservableMetric {
            }
            t.NoopObservableUpDownCounterMetric = NoopObservableUpDownCounterMetric;
            t.NOOP_METER = new NoopMeter;
            t.NOOP_COUNTER_METRIC = new NoopCounterMetric;
            t.NOOP_HISTOGRAM_METRIC = new NoopHistogramMetric;
            t.NOOP_UP_DOWN_COUNTER_METRIC = new NoopUpDownCounterMetric;
            t.NOOP_OBSERVABLE_COUNTER_METRIC = new NoopObservableCounterMetric;
            t.NOOP_OBSERVABLE_GAUGE_METRIC = new NoopObservableGaugeMetric;
            t.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC = new NoopObservableUpDownCounterMetric;
            function createNoopMeter() {
                return t.NOOP_METER;
            }
            t.createNoopMeter = createNoopMeter;
        },
        660: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.NOOP_METER_PROVIDER = t.NoopMeterProvider = void 0;
            const n = r(102);
            class NoopMeterProvider {
                getMeter(e, t, r) {
                    return n.NOOP_METER;
                }
            }
            t.NoopMeterProvider = NoopMeterProvider;
            t.NOOP_METER_PROVIDER = new NoopMeterProvider;
        },
        200: function(e, t, r) {
            var n = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
                if (n === undefined) n = r;
                Object.defineProperty(e, n, {
                    enumerable: true,
                    get: function() {
                        return t[r];
                    }
                });
            } : function(e, t, r, n) {
                if (n === undefined) n = r;
                e[n] = t[r];
            });
            var a = this && this.__exportStar || function(e, t) {
                for(var r in e)if (r !== "default" && !Object.prototype.hasOwnProperty.call(t, r)) n(t, e, r);
            };
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            a(r(46), t);
        },
        651: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t._globalThis = void 0;
            t._globalThis = typeof globalThis === "object" ? globalThis : global;
        },
        46: function(e, t, r) {
            var n = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
                if (n === undefined) n = r;
                Object.defineProperty(e, n, {
                    enumerable: true,
                    get: function() {
                        return t[r];
                    }
                });
            } : function(e, t, r, n) {
                if (n === undefined) n = r;
                e[n] = t[r];
            });
            var a = this && this.__exportStar || function(e, t) {
                for(var r in e)if (r !== "default" && !Object.prototype.hasOwnProperty.call(t, r)) n(t, e, r);
            };
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            a(r(651), t);
        },
        939: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.propagation = void 0;
            const n = r(181);
            t.propagation = n.PropagationAPI.getInstance();
        },
        874: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.NoopTextMapPropagator = void 0;
            class NoopTextMapPropagator {
                inject(e, t) {}
                extract(e, t) {
                    return e;
                }
                fields() {
                    return [];
                }
            }
            t.NoopTextMapPropagator = NoopTextMapPropagator;
        },
        194: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.defaultTextMapSetter = t.defaultTextMapGetter = void 0;
            t.defaultTextMapGetter = {
                get (e, t) {
                    if (e == null) {
                        return undefined;
                    }
                    return e[t];
                },
                keys (e) {
                    if (e == null) {
                        return [];
                    }
                    return Object.keys(e);
                }
            };
            t.defaultTextMapSetter = {
                set (e, t, r) {
                    if (e == null) {
                        return;
                    }
                    e[t] = r;
                }
            };
        },
        845: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.trace = void 0;
            const n = r(997);
            t.trace = n.TraceAPI.getInstance();
        },
        403: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.NonRecordingSpan = void 0;
            const n = r(476);
            class NonRecordingSpan {
                constructor(e = n.INVALID_SPAN_CONTEXT){
                    this._spanContext = e;
                }
                spanContext() {
                    return this._spanContext;
                }
                setAttribute(e, t) {
                    return this;
                }
                setAttributes(e) {
                    return this;
                }
                addEvent(e, t) {
                    return this;
                }
                setStatus(e) {
                    return this;
                }
                updateName(e) {
                    return this;
                }
                end(e) {}
                isRecording() {
                    return false;
                }
                recordException(e, t) {}
            }
            t.NonRecordingSpan = NonRecordingSpan;
        },
        614: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.NoopTracer = void 0;
            const n = r(491);
            const a = r(607);
            const o = r(403);
            const i = r(139);
            const c = n.ContextAPI.getInstance();
            class NoopTracer {
                startSpan(e, t, r = c.active()) {
                    const n = Boolean(t === null || t === void 0 ? void 0 : t.root);
                    if (n) {
                        return new o.NonRecordingSpan;
                    }
                    const s = r && (0, a.getSpanContext)(r);
                    if (isSpanContext(s) && (0, i.isSpanContextValid)(s)) {
                        return new o.NonRecordingSpan(s);
                    } else {
                        return new o.NonRecordingSpan;
                    }
                }
                startActiveSpan(e, t, r, n) {
                    let o;
                    let i;
                    let s;
                    if (arguments.length < 2) {
                        return;
                    } else if (arguments.length === 2) {
                        s = t;
                    } else if (arguments.length === 3) {
                        o = t;
                        s = r;
                    } else {
                        o = t;
                        i = r;
                        s = n;
                    }
                    const u = i !== null && i !== void 0 ? i : c.active();
                    const l = this.startSpan(e, o, u);
                    const g = (0, a.setSpan)(u, l);
                    return c.with(g, s, undefined, l);
                }
            }
            t.NoopTracer = NoopTracer;
            function isSpanContext(e) {
                return typeof e === "object" && typeof e["spanId"] === "string" && typeof e["traceId"] === "string" && typeof e["traceFlags"] === "number";
            }
        },
        124: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.NoopTracerProvider = void 0;
            const n = r(614);
            class NoopTracerProvider {
                getTracer(e, t, r) {
                    return new n.NoopTracer;
                }
            }
            t.NoopTracerProvider = NoopTracerProvider;
        },
        125: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.ProxyTracer = void 0;
            const n = r(614);
            const a = new n.NoopTracer;
            class ProxyTracer {
                constructor(e, t, r, n){
                    this._provider = e;
                    this.name = t;
                    this.version = r;
                    this.options = n;
                }
                startSpan(e, t, r) {
                    return this._getTracer().startSpan(e, t, r);
                }
                startActiveSpan(e, t, r, n) {
                    const a = this._getTracer();
                    return Reflect.apply(a.startActiveSpan, a, arguments);
                }
                _getTracer() {
                    if (this._delegate) {
                        return this._delegate;
                    }
                    const e = this._provider.getDelegateTracer(this.name, this.version, this.options);
                    if (!e) {
                        return a;
                    }
                    this._delegate = e;
                    return this._delegate;
                }
            }
            t.ProxyTracer = ProxyTracer;
        },
        846: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.ProxyTracerProvider = void 0;
            const n = r(125);
            const a = r(124);
            const o = new a.NoopTracerProvider;
            class ProxyTracerProvider {
                getTracer(e, t, r) {
                    var a;
                    return (a = this.getDelegateTracer(e, t, r)) !== null && a !== void 0 ? a : new n.ProxyTracer(this, e, t, r);
                }
                getDelegate() {
                    var e;
                    return (e = this._delegate) !== null && e !== void 0 ? e : o;
                }
                setDelegate(e) {
                    this._delegate = e;
                }
                getDelegateTracer(e, t, r) {
                    var n;
                    return (n = this._delegate) === null || n === void 0 ? void 0 : n.getTracer(e, t, r);
                }
            }
            t.ProxyTracerProvider = ProxyTracerProvider;
        },
        996: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.SamplingDecision = void 0;
            var r;
            (function(e) {
                e[e["NOT_RECORD"] = 0] = "NOT_RECORD";
                e[e["RECORD"] = 1] = "RECORD";
                e[e["RECORD_AND_SAMPLED"] = 2] = "RECORD_AND_SAMPLED";
            })(r = t.SamplingDecision || (t.SamplingDecision = {}));
        },
        607: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.getSpanContext = t.setSpanContext = t.deleteSpan = t.setSpan = t.getActiveSpan = t.getSpan = void 0;
            const n = r(780);
            const a = r(403);
            const o = r(491);
            const i = (0, n.createContextKey)("OpenTelemetry Context Key SPAN");
            function getSpan(e) {
                return e.getValue(i) || undefined;
            }
            t.getSpan = getSpan;
            function getActiveSpan() {
                return getSpan(o.ContextAPI.getInstance().active());
            }
            t.getActiveSpan = getActiveSpan;
            function setSpan(e, t) {
                return e.setValue(i, t);
            }
            t.setSpan = setSpan;
            function deleteSpan(e) {
                return e.deleteValue(i);
            }
            t.deleteSpan = deleteSpan;
            function setSpanContext(e, t) {
                return setSpan(e, new a.NonRecordingSpan(t));
            }
            t.setSpanContext = setSpanContext;
            function getSpanContext(e) {
                var t;
                return (t = getSpan(e)) === null || t === void 0 ? void 0 : t.spanContext();
            }
            t.getSpanContext = getSpanContext;
        },
        325: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.TraceStateImpl = void 0;
            const n = r(564);
            const a = 32;
            const o = 512;
            const i = ",";
            const c = "=";
            class TraceStateImpl {
                constructor(e){
                    this._internalState = new Map;
                    if (e) this._parse(e);
                }
                set(e, t) {
                    const r = this._clone();
                    if (r._internalState.has(e)) {
                        r._internalState.delete(e);
                    }
                    r._internalState.set(e, t);
                    return r;
                }
                unset(e) {
                    const t = this._clone();
                    t._internalState.delete(e);
                    return t;
                }
                get(e) {
                    return this._internalState.get(e);
                }
                serialize() {
                    return this._keys().reduce((e, t)=>{
                        e.push(t + c + this.get(t));
                        return e;
                    }, []).join(i);
                }
                _parse(e) {
                    if (e.length > o) return;
                    this._internalState = e.split(i).reverse().reduce((e, t)=>{
                        const r = t.trim();
                        const a = r.indexOf(c);
                        if (a !== -1) {
                            const o = r.slice(0, a);
                            const i = r.slice(a + 1, t.length);
                            if ((0, n.validateKey)(o) && (0, n.validateValue)(i)) {
                                e.set(o, i);
                            } else {}
                        }
                        return e;
                    }, new Map);
                    if (this._internalState.size > a) {
                        this._internalState = new Map(Array.from(this._internalState.entries()).reverse().slice(0, a));
                    }
                }
                _keys() {
                    return Array.from(this._internalState.keys()).reverse();
                }
                _clone() {
                    const e = new TraceStateImpl;
                    e._internalState = new Map(this._internalState);
                    return e;
                }
            }
            t.TraceStateImpl = TraceStateImpl;
        },
        564: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.validateValue = t.validateKey = void 0;
            const r = "[_0-9a-z-*/]";
            const n = `[a-z]${r}{0,255}`;
            const a = `[a-z0-9]${r}{0,240}@[a-z]${r}{0,13}`;
            const o = new RegExp(`^(?:${n}|${a})$`);
            const i = /^[ -~]{0,255}[!-~]$/;
            const c = /,|=/;
            function validateKey(e) {
                return o.test(e);
            }
            t.validateKey = validateKey;
            function validateValue(e) {
                return i.test(e) && !c.test(e);
            }
            t.validateValue = validateValue;
        },
        98: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.createTraceState = void 0;
            const n = r(325);
            function createTraceState(e) {
                return new n.TraceStateImpl(e);
            }
            t.createTraceState = createTraceState;
        },
        476: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.INVALID_SPAN_CONTEXT = t.INVALID_TRACEID = t.INVALID_SPANID = void 0;
            const n = r(475);
            t.INVALID_SPANID = "0000000000000000";
            t.INVALID_TRACEID = "00000000000000000000000000000000";
            t.INVALID_SPAN_CONTEXT = {
                traceId: t.INVALID_TRACEID,
                spanId: t.INVALID_SPANID,
                traceFlags: n.TraceFlags.NONE
            };
        },
        357: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.SpanKind = void 0;
            var r;
            (function(e) {
                e[e["INTERNAL"] = 0] = "INTERNAL";
                e[e["SERVER"] = 1] = "SERVER";
                e[e["CLIENT"] = 2] = "CLIENT";
                e[e["PRODUCER"] = 3] = "PRODUCER";
                e[e["CONSUMER"] = 4] = "CONSUMER";
            })(r = t.SpanKind || (t.SpanKind = {}));
        },
        139: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.wrapSpanContext = t.isSpanContextValid = t.isValidSpanId = t.isValidTraceId = void 0;
            const n = r(476);
            const a = r(403);
            const o = /^([0-9a-f]{32})$/i;
            const i = /^[0-9a-f]{16}$/i;
            function isValidTraceId(e) {
                return o.test(e) && e !== n.INVALID_TRACEID;
            }
            t.isValidTraceId = isValidTraceId;
            function isValidSpanId(e) {
                return i.test(e) && e !== n.INVALID_SPANID;
            }
            t.isValidSpanId = isValidSpanId;
            function isSpanContextValid(e) {
                return isValidTraceId(e.traceId) && isValidSpanId(e.spanId);
            }
            t.isSpanContextValid = isSpanContextValid;
            function wrapSpanContext(e) {
                return new a.NonRecordingSpan(e);
            }
            t.wrapSpanContext = wrapSpanContext;
        },
        847: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.SpanStatusCode = void 0;
            var r;
            (function(e) {
                e[e["UNSET"] = 0] = "UNSET";
                e[e["OK"] = 1] = "OK";
                e[e["ERROR"] = 2] = "ERROR";
            })(r = t.SpanStatusCode || (t.SpanStatusCode = {}));
        },
        475: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.TraceFlags = void 0;
            var r;
            (function(e) {
                e[e["NONE"] = 0] = "NONE";
                e[e["SAMPLED"] = 1] = "SAMPLED";
            })(r = t.TraceFlags || (t.TraceFlags = {}));
        },
        521: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.VERSION = void 0;
            t.VERSION = "1.6.0";
        }
    };
    var t = {};
    function __nccwpck_require__(r) {
        var n = t[r];
        if (n !== undefined) {
            return n.exports;
        }
        var a = t[r] = {
            exports: {}
        };
        var o = true;
        try {
            e[r].call(a.exports, a, a.exports, __nccwpck_require__);
            o = false;
        } finally{
            if (o) delete t[r];
        }
        return a.exports;
    }
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = __dirname + "/";
    var r = {};
    (()=>{
        var e = r;
        Object.defineProperty(e, "__esModule", {
            value: true
        });
        e.trace = e.propagation = e.metrics = e.diag = e.context = e.INVALID_SPAN_CONTEXT = e.INVALID_TRACEID = e.INVALID_SPANID = e.isValidSpanId = e.isValidTraceId = e.isSpanContextValid = e.createTraceState = e.TraceFlags = e.SpanStatusCode = e.SpanKind = e.SamplingDecision = e.ProxyTracerProvider = e.ProxyTracer = e.defaultTextMapSetter = e.defaultTextMapGetter = e.ValueType = e.createNoopMeter = e.DiagLogLevel = e.DiagConsoleLogger = e.ROOT_CONTEXT = e.createContextKey = e.baggageEntryMetadataFromString = void 0;
        var t = __nccwpck_require__(369);
        Object.defineProperty(e, "baggageEntryMetadataFromString", {
            enumerable: true,
            get: function() {
                return t.baggageEntryMetadataFromString;
            }
        });
        var n = __nccwpck_require__(780);
        Object.defineProperty(e, "createContextKey", {
            enumerable: true,
            get: function() {
                return n.createContextKey;
            }
        });
        Object.defineProperty(e, "ROOT_CONTEXT", {
            enumerable: true,
            get: function() {
                return n.ROOT_CONTEXT;
            }
        });
        var a = __nccwpck_require__(972);
        Object.defineProperty(e, "DiagConsoleLogger", {
            enumerable: true,
            get: function() {
                return a.DiagConsoleLogger;
            }
        });
        var o = __nccwpck_require__(957);
        Object.defineProperty(e, "DiagLogLevel", {
            enumerable: true,
            get: function() {
                return o.DiagLogLevel;
            }
        });
        var i = __nccwpck_require__(102);
        Object.defineProperty(e, "createNoopMeter", {
            enumerable: true,
            get: function() {
                return i.createNoopMeter;
            }
        });
        var c = __nccwpck_require__(901);
        Object.defineProperty(e, "ValueType", {
            enumerable: true,
            get: function() {
                return c.ValueType;
            }
        });
        var s = __nccwpck_require__(194);
        Object.defineProperty(e, "defaultTextMapGetter", {
            enumerable: true,
            get: function() {
                return s.defaultTextMapGetter;
            }
        });
        Object.defineProperty(e, "defaultTextMapSetter", {
            enumerable: true,
            get: function() {
                return s.defaultTextMapSetter;
            }
        });
        var u = __nccwpck_require__(125);
        Object.defineProperty(e, "ProxyTracer", {
            enumerable: true,
            get: function() {
                return u.ProxyTracer;
            }
        });
        var l = __nccwpck_require__(846);
        Object.defineProperty(e, "ProxyTracerProvider", {
            enumerable: true,
            get: function() {
                return l.ProxyTracerProvider;
            }
        });
        var g = __nccwpck_require__(996);
        Object.defineProperty(e, "SamplingDecision", {
            enumerable: true,
            get: function() {
                return g.SamplingDecision;
            }
        });
        var p = __nccwpck_require__(357);
        Object.defineProperty(e, "SpanKind", {
            enumerable: true,
            get: function() {
                return p.SpanKind;
            }
        });
        var d = __nccwpck_require__(847);
        Object.defineProperty(e, "SpanStatusCode", {
            enumerable: true,
            get: function() {
                return d.SpanStatusCode;
            }
        });
        var _ = __nccwpck_require__(475);
        Object.defineProperty(e, "TraceFlags", {
            enumerable: true,
            get: function() {
                return _.TraceFlags;
            }
        });
        var f = __nccwpck_require__(98);
        Object.defineProperty(e, "createTraceState", {
            enumerable: true,
            get: function() {
                return f.createTraceState;
            }
        });
        var b = __nccwpck_require__(139);
        Object.defineProperty(e, "isSpanContextValid", {
            enumerable: true,
            get: function() {
                return b.isSpanContextValid;
            }
        });
        Object.defineProperty(e, "isValidTraceId", {
            enumerable: true,
            get: function() {
                return b.isValidTraceId;
            }
        });
        Object.defineProperty(e, "isValidSpanId", {
            enumerable: true,
            get: function() {
                return b.isValidSpanId;
            }
        });
        var v = __nccwpck_require__(476);
        Object.defineProperty(e, "INVALID_SPANID", {
            enumerable: true,
            get: function() {
                return v.INVALID_SPANID;
            }
        });
        Object.defineProperty(e, "INVALID_TRACEID", {
            enumerable: true,
            get: function() {
                return v.INVALID_TRACEID;
            }
        });
        Object.defineProperty(e, "INVALID_SPAN_CONTEXT", {
            enumerable: true,
            get: function() {
                return v.INVALID_SPAN_CONTEXT;
            }
        });
        const O = __nccwpck_require__(67);
        Object.defineProperty(e, "context", {
            enumerable: true,
            get: function() {
                return O.context;
            }
        });
        const P = __nccwpck_require__(506);
        Object.defineProperty(e, "diag", {
            enumerable: true,
            get: function() {
                return P.diag;
            }
        });
        const N = __nccwpck_require__(886);
        Object.defineProperty(e, "metrics", {
            enumerable: true,
            get: function() {
                return N.metrics;
            }
        });
        const S = __nccwpck_require__(939);
        Object.defineProperty(e, "propagation", {
            enumerable: true,
            get: function() {
                return S.propagation;
            }
        });
        const C = __nccwpck_require__(845);
        Object.defineProperty(e, "trace", {
            enumerable: true,
            get: function() {
                return C.trace;
            }
        });
        e["default"] = {
            context: O.context,
            diag: P.diag,
            metrics: N.metrics,
            propagation: S.propagation,
            trace: C.trace
        };
    })();
    module.exports = r;
})();

}.call(this) }),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/server/lib/trace/tracer.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "SpanKind": ()=>SpanKind,
    "SpanStatusCode": ()=>SpanStatusCode,
    "getTracer": ()=>getTracer
});
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/server/lib/trace/constants.js [middleware] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
let api;
// we want to allow users to use their own version of @opentelemetry/api if they
// want to, so we try to require it first, and if it fails we fall back to the
// version that is bundled with Next.js
// this is because @opentelemetry/api has to be synced with the version of
// @opentelemetry/tracing that is used, and we don't want to force users to use
// the version that is bundled with Next.js.
// the API is ~stable, so this should be fine
if ("TURBOPACK compile-time truthy", 1) {
    api = __turbopack_require__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/compiled/@opentelemetry/api/index.js [middleware] (ecmascript)");
} else {
    "TURBOPACK unreachable";
}
const { context, propagation, trace, SpanStatusCode, SpanKind, ROOT_CONTEXT } = api;
const isPromise = (p)=>{
    return p !== null && typeof p === "object" && typeof p.then === "function";
};
const closeSpanWithError = (span, error)=>{
    if ((error == null ? void 0 : error.bubble) === true) {
        span.setAttribute("next.bubble", true);
    } else {
        if (error) {
            span.recordException(error);
        }
        span.setStatus({
            code: SpanStatusCode.ERROR,
            message: error == null ? void 0 : error.message
        });
    }
    span.end();
};
/** we use this map to propagate attributes from nested spans to the top span */ const rootSpanAttributesStore = new Map();
const rootSpanIdKey = api.createContextKey("next.rootSpanId");
let lastSpanId = 0;
const getSpanId = ()=>lastSpanId++;
class NextTracerImpl {
    /**
   * Returns an instance to the trace with configured name.
   * Since wrap / trace can be defined in any place prior to actual trace subscriber initialization,
   * This should be lazily evaluated.
   */ getTracerInstance() {
        return trace.getTracer("next.js", "0.0.1");
    }
    getContext() {
        return context;
    }
    getActiveScopeSpan() {
        return trace.getSpan(context == null ? void 0 : context.active());
    }
    withPropagatedContext(carrier, fn, getter) {
        const activeContext = context.active();
        if (trace.getSpanContext(activeContext)) {
            // Active span is already set, too late to propagate.
            return fn();
        }
        const remoteContext = propagation.extract(activeContext, carrier, getter);
        return context.with(remoteContext, fn);
    }
    trace(...args) {
        var _trace_getSpanContext;
        const [type, fnOrOptions, fnOrEmpty] = args;
        // coerce options form overload
        const { fn, options } = typeof fnOrOptions === "function" ? {
            fn: fnOrOptions,
            options: {}
        } : {
            fn: fnOrEmpty,
            options: {
                ...fnOrOptions
            }
        };
        const spanName = options.spanName ?? type;
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextVanillaSpanAllowlist"].includes(type) && process.env.NEXT_OTEL_VERBOSE !== "1" || options.hideSpan) {
            return fn();
        }
        // Trying to get active scoped span to assign parent. If option specifies parent span manually, will try to use it.
        let spanContext = this.getSpanContext((options == null ? void 0 : options.parentSpan) ?? this.getActiveScopeSpan());
        let isRootSpan = false;
        if (!spanContext) {
            spanContext = (context == null ? void 0 : context.active()) ?? ROOT_CONTEXT;
            isRootSpan = true;
        } else if ((_trace_getSpanContext = trace.getSpanContext(spanContext)) == null ? void 0 : _trace_getSpanContext.isRemote) {
            isRootSpan = true;
        }
        const spanId = getSpanId();
        options.attributes = {
            "next.span_name": spanName,
            "next.span_type": type,
            ...options.attributes
        };
        return context.with(spanContext.setValue(rootSpanIdKey, spanId), ()=>this.getTracerInstance().startActiveSpan(spanName, options, (span)=>{
                const startTime = "performance" in globalThis ? globalThis.performance.now() : undefined;
                const onCleanup = ()=>{
                    rootSpanAttributesStore.delete(spanId);
                    if (startTime && process.env.NEXT_OTEL_PERFORMANCE_PREFIX && __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["LogSpanAllowList"].includes(type || "")) {
                        performance.measure(`${process.env.NEXT_OTEL_PERFORMANCE_PREFIX}:next-${(type.split(".").pop() || "").replace(/[A-Z]/g, (match)=>"-" + match.toLowerCase())}`, {
                            start: startTime,
                            end: performance.now()
                        });
                    }
                };
                if (isRootSpan) {
                    rootSpanAttributesStore.set(spanId, new Map(Object.entries(options.attributes ?? {})));
                }
                try {
                    if (fn.length > 1) {
                        return fn(span, (err)=>closeSpanWithError(span, err));
                    }
                    const result = fn(span);
                    if (isPromise(result)) {
                        // If there's error make sure it throws
                        return result.then((res)=>{
                            span.end();
                            // Need to pass down the promise result,
                            // it could be react stream response with error { error, stream }
                            return res;
                        }).catch((err)=>{
                            closeSpanWithError(span, err);
                            throw err;
                        }).finally(onCleanup);
                    } else {
                        span.end();
                        onCleanup();
                    }
                    return result;
                } catch (err) {
                    closeSpanWithError(span, err);
                    onCleanup();
                    throw err;
                }
            }));
    }
    wrap(...args) {
        const tracer = this;
        const [name, options, fn] = args.length === 3 ? args : [
            args[0],
            {},
            args[1]
        ];
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextVanillaSpanAllowlist"].includes(name) && process.env.NEXT_OTEL_VERBOSE !== "1") {
            return fn;
        }
        return function() {
            let optionsObj = options;
            if (typeof optionsObj === "function" && typeof fn === "function") {
                optionsObj = optionsObj.apply(this, arguments);
            }
            const lastArgId = arguments.length - 1;
            const cb = arguments[lastArgId];
            if (typeof cb === "function") {
                const scopeBoundCb = tracer.getContext().bind(context.active(), cb);
                return tracer.trace(name, optionsObj, (_span, done)=>{
                    arguments[lastArgId] = function(err) {
                        done == null ? void 0 : done(err);
                        return scopeBoundCb.apply(this, arguments);
                    };
                    return fn.apply(this, arguments);
                });
            } else {
                return tracer.trace(name, optionsObj, ()=>fn.apply(this, arguments));
            }
        };
    }
    startSpan(...args) {
        const [type, options] = args;
        const spanContext = this.getSpanContext((options == null ? void 0 : options.parentSpan) ?? this.getActiveScopeSpan());
        return this.getTracerInstance().startSpan(type, options, spanContext);
    }
    getSpanContext(parentSpan) {
        const spanContext = parentSpan ? trace.setSpan(context.active(), parentSpan) : undefined;
        return spanContext;
    }
    getRootSpanAttributes() {
        const spanId = context.active().getValue(rootSpanIdKey);
        return rootSpanAttributesStore.get(spanId);
    }
}
const getTracer = (()=>{
    const tracer = new NextTracerImpl();
    return ()=>tracer;
})();
;
 //# sourceMappingURL=tracer.js.map

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/compiled/cookie/index.js [middleware] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

(()=>{
    "use strict";
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = __dirname + "/";
    var e = {};
    (()=>{
        var r = e;
        /*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */ r.parse = parse;
        r.serialize = serialize;
        var i = decodeURIComponent;
        var t = encodeURIComponent;
        var a = /; */;
        var n = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
        function parse(e, r) {
            if (typeof e !== "string") {
                throw new TypeError("argument str must be a string");
            }
            var t = {};
            var n = r || {};
            var o = e.split(a);
            var s = n.decode || i;
            for(var p = 0; p < o.length; p++){
                var f = o[p];
                var u = f.indexOf("=");
                if (u < 0) {
                    continue;
                }
                var v = f.substr(0, u).trim();
                var c = f.substr(++u, f.length).trim();
                if ('"' == c[0]) {
                    c = c.slice(1, -1);
                }
                if (undefined == t[v]) {
                    t[v] = tryDecode(c, s);
                }
            }
            return t;
        }
        function serialize(e, r, i) {
            var a = i || {};
            var o = a.encode || t;
            if (typeof o !== "function") {
                throw new TypeError("option encode is invalid");
            }
            if (!n.test(e)) {
                throw new TypeError("argument name is invalid");
            }
            var s = o(r);
            if (s && !n.test(s)) {
                throw new TypeError("argument val is invalid");
            }
            var p = e + "=" + s;
            if (null != a.maxAge) {
                var f = a.maxAge - 0;
                if (isNaN(f) || !isFinite(f)) {
                    throw new TypeError("option maxAge is invalid");
                }
                p += "; Max-Age=" + Math.floor(f);
            }
            if (a.domain) {
                if (!n.test(a.domain)) {
                    throw new TypeError("option domain is invalid");
                }
                p += "; Domain=" + a.domain;
            }
            if (a.path) {
                if (!n.test(a.path)) {
                    throw new TypeError("option path is invalid");
                }
                p += "; Path=" + a.path;
            }
            if (a.expires) {
                if (typeof a.expires.toUTCString !== "function") {
                    throw new TypeError("option expires is invalid");
                }
                p += "; Expires=" + a.expires.toUTCString();
            }
            if (a.httpOnly) {
                p += "; HttpOnly";
            }
            if (a.secure) {
                p += "; Secure";
            }
            if (a.sameSite) {
                var u = typeof a.sameSite === "string" ? a.sameSite.toLowerCase() : a.sameSite;
                switch(u){
                    case true:
                        p += "; SameSite=Strict";
                        break;
                    case "lax":
                        p += "; SameSite=Lax";
                        break;
                    case "strict":
                        p += "; SameSite=Strict";
                        break;
                    case "none":
                        p += "; SameSite=None";
                        break;
                    default:
                        throw new TypeError("option sameSite is invalid");
                }
            }
            return p;
        }
        function tryDecode(e, r) {
            try {
                return r(e);
            } catch (r) {
                return e;
            }
        }
    })();
    module.exports = e;
})();

}.call(this) }),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/server/api-utils/index.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "ApiError": ()=>ApiError,
    "COOKIE_NAME_PRERENDER_BYPASS": ()=>COOKIE_NAME_PRERENDER_BYPASS,
    "COOKIE_NAME_PRERENDER_DATA": ()=>COOKIE_NAME_PRERENDER_DATA,
    "RESPONSE_LIMIT_DEFAULT": ()=>RESPONSE_LIMIT_DEFAULT,
    "SYMBOL_CLEARED_COOKIES": ()=>SYMBOL_CLEARED_COOKIES,
    "SYMBOL_PREVIEW_DATA": ()=>SYMBOL_PREVIEW_DATA,
    "checkIsOnDemandRevalidate": ()=>checkIsOnDemandRevalidate,
    "clearPreviewData": ()=>clearPreviewData,
    "redirect": ()=>redirect,
    "sendError": ()=>sendError,
    "sendStatusCode": ()=>sendStatusCode,
    "setLazyProp": ()=>setLazyProp,
    "wrapApiHandler": ()=>wrapApiHandler
});
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/server/web/spec-extension/adapters/headers.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/lib/constants.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/server/lib/trace/tracer.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/server/lib/trace/constants.js [middleware] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
function wrapApiHandler(page, handler) {
    return (...args)=>{
        var _getTracer_getRootSpanAttributes;
        (_getTracer_getRootSpanAttributes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["getTracer"])().getRootSpanAttributes()) == null ? void 0 : _getTracer_getRootSpanAttributes.set("next.route", page);
        // Call API route method
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["getTracer"])().trace(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NodeSpan"].runHandler, {
            spanName: `executing api route (pages) ${page}`
        }, ()=>handler(...args));
    };
}
function sendStatusCode(res, statusCode) {
    res.statusCode = statusCode;
    return res;
}
function redirect(res, statusOrUrl, url) {
    if (typeof statusOrUrl === "string") {
        url = statusOrUrl;
        statusOrUrl = 307;
    }
    if (typeof statusOrUrl !== "number" || typeof url !== "string") {
        throw new Error(`Invalid redirect arguments. Please use a single argument URL, e.g. res.redirect('/destination') or use a status code and URL, e.g. res.redirect(307, '/destination').`);
    }
    res.writeHead(statusOrUrl, {
        Location: url
    });
    res.write(url);
    res.end();
    return res;
}
function checkIsOnDemandRevalidate(req, previewProps) {
    const headers = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["HeadersAdapter"].from(req.headers);
    const previewModeId = headers.get(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["PRERENDER_REVALIDATE_HEADER"]);
    const isOnDemandRevalidate = previewModeId === previewProps.previewModeId;
    const revalidateOnlyGenerated = headers.has(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER"]);
    return {
        isOnDemandRevalidate,
        revalidateOnlyGenerated
    };
}
const COOKIE_NAME_PRERENDER_BYPASS = `__prerender_bypass`;
const COOKIE_NAME_PRERENDER_DATA = `__next_preview_data`;
const RESPONSE_LIMIT_DEFAULT = 4 * 1024 * 1024;
const SYMBOL_PREVIEW_DATA = Symbol(COOKIE_NAME_PRERENDER_DATA);
const SYMBOL_CLEARED_COOKIES = Symbol(COOKIE_NAME_PRERENDER_BYPASS);
function clearPreviewData(res, options = {}) {
    if (SYMBOL_CLEARED_COOKIES in res) {
        return res;
    }
    const { serialize } = __turbopack_require__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/compiled/cookie/index.js [middleware] (ecmascript)");
    const previous = res.getHeader("Set-Cookie");
    res.setHeader(`Set-Cookie`, [
        ...typeof previous === "string" ? [
            previous
        ] : Array.isArray(previous) ? previous : [],
        serialize(COOKIE_NAME_PRERENDER_BYPASS, "", {
            // To delete a cookie, set `expires` to a date in the past:
            // https://tools.ietf.org/html/rfc6265#section-4.1.1
            // `Max-Age: 0` is not valid, thus ignored, and the cookie is persisted.
            expires: new Date(0),
            httpOnly: true,
            sameSite: ("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : "lax",
            secure: ("TURBOPACK compile-time value", "development") !== "development",
            path: "/",
            ...options.path !== undefined ? {
                path: options.path
            } : undefined
        }),
        serialize(COOKIE_NAME_PRERENDER_DATA, "", {
            // To delete a cookie, set `expires` to a date in the past:
            // https://tools.ietf.org/html/rfc6265#section-4.1.1
            // `Max-Age: 0` is not valid, thus ignored, and the cookie is persisted.
            expires: new Date(0),
            httpOnly: true,
            sameSite: ("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : "lax",
            secure: ("TURBOPACK compile-time value", "development") !== "development",
            path: "/",
            ...options.path !== undefined ? {
                path: options.path
            } : undefined
        })
    ]);
    Object.defineProperty(res, SYMBOL_CLEARED_COOKIES, {
        value: true,
        enumerable: false
    });
    return res;
}
class ApiError extends Error {
    constructor(statusCode, message){
        super(message);
        this.statusCode = statusCode;
    }
}
function sendError(res, statusCode, message) {
    res.statusCode = statusCode;
    res.statusMessage = message;
    res.end(message);
}
function setLazyProp({ req }, prop, getter) {
    const opts = {
        configurable: true,
        enumerable: true
    };
    const optsReset = {
        ...opts,
        writable: true
    };
    Object.defineProperty(req, prop, {
        ...opts,
        get: ()=>{
            const value = getter();
            // we set the property on the object to avoid recalculating it
            Object.defineProperty(req, prop, {
                ...optsReset,
                value
            });
            return value;
        },
        set: (value)=>{
            Object.defineProperty(req, prop, {
                ...optsReset,
                value
            });
        }
    });
} //# sourceMappingURL=index.js.map

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/server/async-storage/draft-mode-provider.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "DraftModeProvider": ()=>DraftModeProvider
});
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$api$2d$utils$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/server/api-utils/index.js [middleware] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
class DraftModeProvider {
    constructor(previewProps, req, cookies, mutableCookies){
        var _cookies_get;
        // The logic for draftMode() is very similar to tryGetPreviewData()
        // but Draft Mode does not have any data associated with it.
        const isOnDemandRevalidate = previewProps && (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$api$2d$utils$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["checkIsOnDemandRevalidate"])(req, previewProps).isOnDemandRevalidate;
        const cookieValue = (_cookies_get = cookies.get(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$api$2d$utils$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["COOKIE_NAME_PRERENDER_BYPASS"])) == null ? void 0 : _cookies_get.value;
        this.isEnabled = Boolean(!isOnDemandRevalidate && cookieValue && previewProps && cookieValue === previewProps.previewModeId);
        this._previewModeId = previewProps == null ? void 0 : previewProps.previewModeId;
        this._mutableCookies = mutableCookies;
    }
    enable() {
        if (!this._previewModeId) {
            throw new Error("Invariant: previewProps missing previewModeId this should never happen");
        }
        this._mutableCookies.set({
            name: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$api$2d$utils$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["COOKIE_NAME_PRERENDER_BYPASS"],
            value: this._previewModeId,
            httpOnly: true,
            sameSite: ("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : "lax",
            secure: ("TURBOPACK compile-time value", "development") !== "development",
            path: "/"
        });
    }
    disable() {
        // To delete a cookie, set `expires` to a date in the past:
        // https://tools.ietf.org/html/rfc6265#section-4.1.1
        // `Max-Age: 0` is not valid, thus ignored, and the cookie is persisted.
        this._mutableCookies.set({
            name: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$api$2d$utils$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["COOKIE_NAME_PRERENDER_BYPASS"],
            value: "",
            httpOnly: true,
            sameSite: ("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : "lax",
            secure: ("TURBOPACK compile-time value", "development") !== "development",
            path: "/",
            expires: new Date(0)
        });
    }
} //# sourceMappingURL=draft-mode-provider.js.map

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/server/async-storage/request-async-storage-wrapper.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "RequestAsyncStorageWrapper": ()=>RequestAsyncStorageWrapper
});
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/client/components/app-router-headers.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/server/web/spec-extension/adapters/headers.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$request$2d$cookies$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/server/web/spec-extension/adapters/request-cookies.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$cookies$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/server/web/spec-extension/cookies.js [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f40$edge$2d$runtime$2f$cookies$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/compiled/@edge-runtime/cookies/index.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$async$2d$storage$2f$draft$2d$mode$2d$provider$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/server/async-storage/draft-mode-provider.js [middleware] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
function getHeaders(headers) {
    const cleaned = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["HeadersAdapter"].from(headers);
    for (const param of __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["FLIGHT_PARAMETERS"]){
        cleaned.delete(param.toString().toLowerCase());
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["HeadersAdapter"].seal(cleaned);
}
function getCookies(headers) {
    const cookies = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f40$edge$2d$runtime$2f$cookies$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["RequestCookies"](__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["HeadersAdapter"].from(headers));
    return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$request$2d$cookies$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["RequestCookiesAdapter"].seal(cookies);
}
function getMutableCookies(headers, onUpdateCookies) {
    const cookies = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f40$edge$2d$runtime$2f$cookies$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["RequestCookies"](__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["HeadersAdapter"].from(headers));
    return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$request$2d$cookies$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["MutableRequestCookiesAdapter"].wrap(cookies, onUpdateCookies);
}
const RequestAsyncStorageWrapper = {
    /**
   * Wrap the callback with the given store so it can access the underlying
   * store using hooks.
   *
   * @param storage underlying storage object returned by the module
   * @param context context to seed the store
   * @param callback function to call within the scope of the context
   * @returns the result returned by the callback
   */ wrap (storage, { req, res, renderOpts }, callback) {
        let previewProps = undefined;
        if (renderOpts && "previewProps" in renderOpts) {
            // TODO: investigate why previewProps isn't on RenderOpts
            previewProps = renderOpts.previewProps;
        }
        function defaultOnUpdateCookies(cookies) {
            if (res) {
                res.setHeader("Set-Cookie", cookies);
            }
        }
        const cache = {};
        const store = {
            get headers () {
                if (!cache.headers) {
                    // Seal the headers object that'll freeze out any methods that could
                    // mutate the underlying data.
                    cache.headers = getHeaders(req.headers);
                }
                return cache.headers;
            },
            get cookies () {
                if (!cache.cookies) {
                    // Seal the cookies object that'll freeze out any methods that could
                    // mutate the underlying data.
                    cache.cookies = getCookies(req.headers);
                }
                return cache.cookies;
            },
            get mutableCookies () {
                if (!cache.mutableCookies) {
                    cache.mutableCookies = getMutableCookies(req.headers, (renderOpts == null ? void 0 : renderOpts.onUpdateCookies) || (res ? defaultOnUpdateCookies : undefined));
                }
                return cache.mutableCookies;
            },
            get draftMode () {
                if (!cache.draftMode) {
                    cache.draftMode = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$async$2d$storage$2f$draft$2d$mode$2d$provider$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["DraftModeProvider"](previewProps, req, this.cookies, this.mutableCookies);
                }
                return cache.draftMode;
            },
            reactLoadableManifest: (renderOpts == null ? void 0 : renderOpts.reactLoadableManifest) || {},
            assetPrefix: (renderOpts == null ? void 0 : renderOpts.assetPrefix) || ""
        };
        return storage.run(store, callback, store);
    }
}; //# sourceMappingURL=request-async-storage-wrapper.js.map

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/client/components/request-async-storage-instance.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "requestAsyncStorage": ()=>requestAsyncStorage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$async$2d$local$2d$storage$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/client/components/async-local-storage.js [middleware] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const requestAsyncStorage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$async$2d$local$2d$storage$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["createAsyncLocalStorage"])(); //# sourceMappingURL=request-async-storage-instance.js.map

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/client/components/request-async-storage.external.js [middleware] (ecmascript) <locals>": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "getExpectedRequestStore": ()=>getExpectedRequestStore
});
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$request$2d$async$2d$storage$2d$instance$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/client/components/request-async-storage-instance.js [middleware] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"TURBOPACK { transition: next-shared }";
;
;
function getExpectedRequestStore(callingExpression) {
    const store = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$request$2d$async$2d$storage$2d$instance$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["requestAsyncStorage"].getStore();
    if (store) return store;
    throw new Error("`" + callingExpression + "` was called outside a request scope. Read more: https://nextjs.org/docs/messages/next-dynamic-api-wrong-context");
} //# sourceMappingURL=request-async-storage.external.js.map

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/client/components/request-async-storage.external.js [middleware] (ecmascript) <module evaluation>": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$request$2d$async$2d$storage$2d$instance$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/client/components/request-async-storage-instance.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$request$2d$async$2d$storage$2e$external$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/client/components/request-async-storage.external.js [middleware] (ecmascript) <locals>");
"__TURBOPACK__ecmascript__hoisting__location__";

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/experimental/testmode/context.js [middleware] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    getTestReqInfo: null,
    withRequest: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getTestReqInfo: function() {
        return getTestReqInfo;
    },
    withRequest: function() {
        return withRequest;
    }
});
const _nodeasync_hooks = require("node:async_hooks");
const testStorage = new _nodeasync_hooks.AsyncLocalStorage();
function extractTestInfoFromRequest(req, reader) {
    const proxyPortHeader = reader.header(req, "next-test-proxy-port");
    if (!proxyPortHeader) {
        return undefined;
    }
    const url = reader.url(req);
    const proxyPort = Number(proxyPortHeader);
    const testData = reader.header(req, "next-test-data") || "";
    return {
        url,
        proxyPort,
        testData
    };
}
function withRequest(req, reader, fn) {
    const testReqInfo = extractTestInfoFromRequest(req, reader);
    if (!testReqInfo) {
        return fn();
    }
    return testStorage.run(testReqInfo, fn);
}
function getTestReqInfo(req, reader) {
    const testReqInfo = testStorage.getStore();
    if (testReqInfo) {
        return testReqInfo;
    }
    if (req && reader) {
        return extractTestInfoFromRequest(req, reader);
    }
    return undefined;
} //# sourceMappingURL=context.js.map

}.call(this) }),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/experimental/testmode/fetch.js [middleware] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

var __TURBOPACK__commonjs__external__node$3a$buffer__ = __turbopack_external_require__("node:buffer", true);
var __TURBOPACK__commonjs__external__node$3a$buffer__ = __turbopack_external_require__("node:buffer", true);
"__TURBOPACK__ecmascript__hoisting__location__";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    handleFetch: null,
    interceptFetch: null,
    reader: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    handleFetch: function() {
        return handleFetch;
    },
    interceptFetch: function() {
        return interceptFetch;
    },
    reader: function() {
        return reader;
    }
});
const _context = __turbopack_require__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/experimental/testmode/context.js [middleware] (ecmascript)");
const reader = {
    url (req) {
        return req.url;
    },
    header (req, name) {
        return req.headers.get(name);
    }
};
function getTestStack() {
    let stack = (new Error().stack ?? "").split("\n");
    // Skip the first line and find first non-empty line.
    for(let i = 1; i < stack.length; i++){
        if (stack[i].length > 0) {
            stack = stack.slice(i);
            break;
        }
    }
    // Filter out franmework lines.
    stack = stack.filter((f)=>!f.includes("/next/dist/"));
    // At most 5 lines.
    stack = stack.slice(0, 5);
    // Cleanup some internal info and trim.
    stack = stack.map((s)=>s.replace("webpack-internal:///(rsc)/", "").trim());
    return stack.join("    ");
}
async function buildProxyRequest(testData, request) {
    const { url, method, headers, body, cache, credentials, integrity, mode, redirect, referrer, referrerPolicy } = request;
    return {
        testData,
        api: "fetch",
        request: {
            url,
            method,
            headers: [
                ...Array.from(headers),
                [
                    "next-test-stack",
                    getTestStack()
                ]
            ],
            body: body ? __TURBOPACK__commonjs__external__node$3a$buffer__["Buffer"].from(await request.arrayBuffer()).toString("base64") : null,
            cache,
            credentials,
            integrity,
            mode,
            redirect,
            referrer,
            referrerPolicy
        }
    };
}
function buildResponse(proxyResponse) {
    const { status, headers, body } = proxyResponse.response;
    return new Response(body ? __TURBOPACK__commonjs__external__node$3a$buffer__["Buffer"].from(body, "base64") : null, {
        status,
        headers: new Headers(headers)
    });
}
async function handleFetch(originalFetch, request) {
    const testInfo = (0, _context.getTestReqInfo)(request, reader);
    if (!testInfo) {
        // Passthrough non-test requests.
        return originalFetch(request);
    }
    const { testData, proxyPort } = testInfo;
    const proxyRequest = await buildProxyRequest(testData, request);
    const resp = await originalFetch(`http://localhost:${proxyPort}`, {
        method: "POST",
        body: JSON.stringify(proxyRequest),
        next: {
            // @ts-ignore
            internal: true
        }
    });
    if (!resp.ok) {
        throw new Error(`Proxy request failed: ${resp.status}`);
    }
    const proxyResponse = await resp.json();
    const { api } = proxyResponse;
    switch(api){
        case "continue":
            return originalFetch(request);
        case "abort":
        case "unhandled":
            throw new Error(`Proxy request aborted [${request.method} ${request.url}]`);
        default:
            break;
    }
    return buildResponse(proxyResponse);
}
function interceptFetch(originalFetch) {
    global.fetch = function testFetch(input, init) {
        var _init_next;
        // Passthrough internal requests.
        // @ts-ignore
        if (init == null ? void 0 : (_init_next = init.next) == null ? void 0 : _init_next.internal) {
            return originalFetch(input, init);
        }
        return handleFetch(originalFetch, new Request(input, init));
    };
    return ()=>{
        global.fetch = originalFetch;
    };
} //# sourceMappingURL=fetch.js.map

}.call(this) }),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/experimental/testmode/server-edge.js [middleware] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    interceptTestApis: null,
    wrapRequestHandler: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    interceptTestApis: function() {
        return interceptTestApis;
    },
    wrapRequestHandler: function() {
        return wrapRequestHandler;
    }
});
const _context = __turbopack_require__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/experimental/testmode/context.js [middleware] (ecmascript)");
const _fetch = __turbopack_require__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/experimental/testmode/fetch.js [middleware] (ecmascript)");
function interceptTestApis() {
    return (0, _fetch.interceptFetch)(global.fetch);
}
function wrapRequestHandler(handler) {
    return (req, fn)=>(0, _context.withRequest)(req, _fetch.reader, ()=>handler(req, fn));
} //# sourceMappingURL=server-edge.js.map

}.call(this) }),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/server/web/adapter.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "NextRequestHint": ()=>NextRequestHint,
    "adapter": ()=>adapter
});
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$error$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/server/web/error.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/server/web/utils.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$fetch$2d$event$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/server/web/spec-extension/fetch-event.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$request$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/server/web/spec-extension/request.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/server/web/spec-extension/response.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$relativize$2d$url$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/shared/lib/router/utils/relativize-url.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$next$2d$url$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/server/web/next-url.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$internal$2d$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/server/internal-utils.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$app$2d$paths$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/shared/lib/router/utils/app-paths.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/client/components/app-router-headers.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/lib/constants.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$globals$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/server/web/globals.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$async$2d$storage$2f$request$2d$async$2d$storage$2d$wrapper$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/server/async-storage/request-async-storage-wrapper.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$request$2d$async$2d$storage$2e$external$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/client/components/request-async-storage.external.js [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$request$2d$async$2d$storage$2d$instance$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/client/components/request-async-storage-instance.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/server/lib/trace/tracer.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/server/lib/trace/constants.js [middleware] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
class NextRequestHint extends __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$request$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextRequest"] {
    constructor(params){
        super(params.input, params.init);
        this.sourcePage = params.page;
    }
    get request() {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$error$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["PageSignatureError"]({
            page: this.sourcePage
        });
    }
    respondWith() {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$error$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["PageSignatureError"]({
            page: this.sourcePage
        });
    }
    waitUntil() {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$error$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["PageSignatureError"]({
            page: this.sourcePage
        });
    }
}
const headersGetter = {
    keys: (headers)=>Array.from(headers.keys()),
    get: (headers, key)=>headers.get(key) ?? undefined
};
let propagator = (request, fn)=>{
    const tracer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["getTracer"])();
    return tracer.withPropagatedContext(request.headers, fn, headersGetter);
};
let testApisIntercepted = false;
function ensureTestApisIntercepted() {
    if (!testApisIntercepted) {
        testApisIntercepted = true;
        if (process.env.NEXT_PRIVATE_TEST_PROXY === "true") {
            const { interceptTestApis, wrapRequestHandler } = __turbopack_require__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/experimental/testmode/server-edge.js [middleware] (ecmascript)");
            interceptTestApis();
            propagator = wrapRequestHandler(propagator);
        }
    }
}
async function adapter(params) {
    ensureTestApisIntercepted();
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$globals$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ensureInstrumentationRegistered"])();
    // TODO-APP: use explicit marker for this
    const isEdgeRendering = typeof self.__BUILD_MANIFEST !== "undefined";
    const prerenderManifest = typeof self.__PRERENDER_MANIFEST === "string" ? JSON.parse(self.__PRERENDER_MANIFEST) : undefined;
    params.request.url = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$app$2d$paths$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["normalizeRscURL"])(params.request.url);
    const requestUrl = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$next$2d$url$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextURL"](params.request.url, {
        headers: params.request.headers,
        nextConfig: params.request.nextConfig
    });
    // Iterator uses an index to keep track of the current iteration. Because of deleting and appending below we can't just use the iterator.
    // Instead we use the keys before iteration.
    const keys = [
        ...requestUrl.searchParams.keys()
    ];
    for (const key of keys){
        const value = requestUrl.searchParams.getAll(key);
        if (key !== __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NEXT_QUERY_PARAM_PREFIX"] && key.startsWith(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NEXT_QUERY_PARAM_PREFIX"])) {
            const normalizedKey = key.substring(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NEXT_QUERY_PARAM_PREFIX"].length);
            requestUrl.searchParams.delete(normalizedKey);
            for (const val of value){
                requestUrl.searchParams.append(normalizedKey, val);
            }
            requestUrl.searchParams.delete(key);
        }
    }
    // Ensure users only see page requests, never data requests.
    const buildId = requestUrl.buildId;
    requestUrl.buildId = "";
    const isDataReq = params.request.headers["x-nextjs-data"];
    if (isDataReq && requestUrl.pathname === "/index") {
        requestUrl.pathname = "/";
    }
    const requestHeaders = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["fromNodeOutgoingHttpHeaders"])(params.request.headers);
    const flightHeaders = new Map();
    // Parameters should only be stripped for middleware
    if (!isEdgeRendering) {
        for (const param of __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["FLIGHT_PARAMETERS"]){
            const key = param.toString().toLowerCase();
            const value = requestHeaders.get(key);
            if (value) {
                flightHeaders.set(key, requestHeaders.get(key));
                requestHeaders.delete(key);
            }
        }
    }
    const normalizeUrl = process.env.__NEXT_NO_MIDDLEWARE_URL_NORMALIZE ? new URL(params.request.url) : requestUrl;
    const request = new NextRequestHint({
        page: params.page,
        // Strip internal query parameters off the request.
        input: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$internal$2d$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["stripInternalSearchParams"])(normalizeUrl, true).toString(),
        init: {
            body: params.request.body,
            geo: params.request.geo,
            headers: requestHeaders,
            ip: params.request.ip,
            method: params.request.method,
            nextConfig: params.request.nextConfig,
            signal: params.request.signal
        }
    });
    /**
   * This allows to identify the request as a data request. The user doesn't
   * need to know about this property neither use it. We add it for testing
   * purposes.
   */ if (isDataReq) {
        Object.defineProperty(request, "__isData", {
            enumerable: false,
            value: true
        });
    }
    if (!globalThis.__incrementalCache && params.IncrementalCache) {
        globalThis.__incrementalCache = new params.IncrementalCache({
            appDir: true,
            fetchCache: true,
            minimalMode: ("TURBOPACK compile-time value", "development") !== "development",
            fetchCacheKeyPrefix: ("TURBOPACK compile-time value", ""),
            dev: ("TURBOPACK compile-time value", "development") === "development",
            requestHeaders: params.request.headers,
            requestProtocol: "https",
            getPrerenderManifest: ()=>{
                return {
                    version: -1,
                    routes: {},
                    dynamicRoutes: {},
                    notFoundRoutes: [],
                    preview: {
                        previewModeId: "development-id"
                    }
                };
            }
        });
    }
    const event = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$fetch$2d$event$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextFetchEvent"]({
        request,
        page: params.page
    });
    let response;
    let cookiesFromResponse;
    response = await propagator(request, ()=>{
        // we only care to make async storage available for middleware
        const isMiddleware = params.page === "/middleware" || params.page === "/src/middleware";
        if (isMiddleware) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["getTracer"])().trace(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["MiddlewareSpan"].execute, {
                spanName: `middleware ${request.method} ${request.nextUrl.pathname}`,
                attributes: {
                    "http.target": request.nextUrl.pathname,
                    "http.method": request.method
                }
            }, ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$async$2d$storage$2f$request$2d$async$2d$storage$2d$wrapper$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["RequestAsyncStorageWrapper"].wrap(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$request$2d$async$2d$storage$2d$instance$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["requestAsyncStorage"], {
                    req: request,
                    renderOpts: {
                        onUpdateCookies: (cookies)=>{
                            cookiesFromResponse = cookies;
                        },
                        // @ts-expect-error: TODO: investigate why previewProps isn't on RenderOpts
                        previewProps: (prerenderManifest == null ? void 0 : prerenderManifest.preview) || {
                            previewModeId: "development-id",
                            previewModeEncryptionKey: "",
                            previewModeSigningKey: ""
                        }
                    }
                }, ()=>params.handler(request, event)));
        }
        return params.handler(request, event);
    });
    // check if response is a Response object
    if (response && !(response instanceof Response)) {
        throw new TypeError("Expected an instance of Response to be returned");
    }
    if (response && cookiesFromResponse) {
        response.headers.set("set-cookie", cookiesFromResponse);
    }
    /**
   * For rewrites we must always include the locale in the final pathname
   * so we re-create the NextURL forcing it to include it when the it is
   * an internal rewrite. Also we make sure the outgoing rewrite URL is
   * a data URL if the request was a data request.
   */ const rewrite = response == null ? void 0 : response.headers.get("x-middleware-rewrite");
    if (response && rewrite) {
        const rewriteUrl = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$next$2d$url$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextURL"](rewrite, {
            forceLocale: true,
            headers: params.request.headers,
            nextConfig: params.request.nextConfig
        });
        if (!process.env.__NEXT_NO_MIDDLEWARE_URL_NORMALIZE) {
            if (rewriteUrl.host === request.nextUrl.host) {
                rewriteUrl.buildId = buildId || rewriteUrl.buildId;
                response.headers.set("x-middleware-rewrite", String(rewriteUrl));
            }
        }
        /**
     * When the request is a data request we must show if there was a rewrite
     * with an internal header so the client knows which component to load
     * from the data request.
     */ const relativizedRewrite = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$relativize$2d$url$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["relativizeURL"])(String(rewriteUrl), String(requestUrl));
        if (isDataReq && // if the rewrite is external and external rewrite
        // resolving config is enabled don't add this header
        // so the upstream app can set it instead
        !(("TURBOPACK compile-time value", false) && relativizedRewrite.match(/http(s)?:\/\//))) {
            response.headers.set("x-nextjs-rewrite", relativizedRewrite);
        }
    }
    /**
   * For redirects we will not include the locale in case when it is the
   * default and we must also make sure the outgoing URL is a data one if
   * the incoming request was a data request.
   */ const redirect = response == null ? void 0 : response.headers.get("Location");
    if (response && redirect && !isEdgeRendering) {
        const redirectURL = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$next$2d$url$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextURL"](redirect, {
            forceLocale: false,
            headers: params.request.headers,
            nextConfig: params.request.nextConfig
        });
        /**
     * Responses created from redirects have immutable headers so we have
     * to clone the response to be able to modify it.
     */ response = new Response(response.body, response);
        if (!process.env.__NEXT_NO_MIDDLEWARE_URL_NORMALIZE) {
            if (redirectURL.host === request.nextUrl.host) {
                redirectURL.buildId = buildId || redirectURL.buildId;
                response.headers.set("Location", String(redirectURL));
            }
        }
        /**
     * When the request is a data request we can't use the location header as
     * it may end up with CORS error. Instead we map to an internal header so
     * the client knows the destination.
     */ if (isDataReq) {
            response.headers.delete("Location");
            response.headers.set("x-nextjs-redirect", (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$relativize$2d$url$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["relativizeURL"])(String(redirectURL), String(requestUrl)));
        }
    }
    const finalResponse = response ? response : __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].next();
    // Flight headers are not overridable / removable so they are applied at the end.
    const middlewareOverrideHeaders = finalResponse.headers.get("x-middleware-override-headers");
    const overwrittenHeaders = [];
    if (middlewareOverrideHeaders) {
        for (const [key, value] of flightHeaders){
            finalResponse.headers.set(`x-middleware-request-${key}`, value);
            overwrittenHeaders.push(key);
        }
        if (overwrittenHeaders.length > 0) {
            finalResponse.headers.set("x-middleware-override-headers", middlewareOverrideHeaders + "," + overwrittenHeaders.join(","));
        }
    }
    return {
        response: finalResponse,
        waitUntil: Promise.all(event[__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$fetch$2d$event$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["waitUntilSymbol"]]),
        fetchMetrics: request.fetchMetrics
    };
} //# sourceMappingURL=adapter.js.map

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/server/web/spec-extension/image-response.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

/**
 * @deprecated ImageResponse moved from "next/server" to "next/og" since Next.js 14, please import from "next/og" instead.
 * Migration with codemods: https://nextjs.org/docs/app/building-your-application/upgrading/codemods#next-og-import
 */ __turbopack_esm__({
    "ImageResponse": ()=>ImageResponse
});
function ImageResponse() {
    throw new Error('ImageResponse moved from "next/server" to "next/og" since Next.js 14, please import from "next/og" instead');
} //# sourceMappingURL=image-response.js.map

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/compiled/ua-parser-js/ua-parser.js [middleware] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

(()=>{
    var i = {
        226: function(i, e) {
            (function(o, a) {
                "use strict";
                var r = "1.0.35", t = "", n = "?", s = "function", b = "undefined", w = "object", l = "string", d = "major", c = "model", u = "name", p = "type", m = "vendor", f = "version", h = "architecture", v = "console", g = "mobile", k = "tablet", x = "smarttv", _ = "wearable", y = "embedded", q = 350;
                var T = "Amazon", S = "Apple", z = "ASUS", N = "BlackBerry", A = "Browser", C = "Chrome", E = "Edge", O = "Firefox", U = "Google", j = "Huawei", P = "LG", R = "Microsoft", M = "Motorola", B = "Opera", V = "Samsung", D = "Sharp", I = "Sony", W = "Viera", F = "Xiaomi", G = "Zebra", H = "Facebook", L = "Chromium OS", Z = "Mac OS";
                var extend = function(i, e) {
                    var o = {};
                    for(var a in i){
                        if (e[a] && e[a].length % 2 === 0) {
                            o[a] = e[a].concat(i[a]);
                        } else {
                            o[a] = i[a];
                        }
                    }
                    return o;
                }, enumerize = function(i) {
                    var e = {};
                    for(var o = 0; o < i.length; o++){
                        e[i[o].toUpperCase()] = i[o];
                    }
                    return e;
                }, has = function(i, e) {
                    return typeof i === l ? lowerize(e).indexOf(lowerize(i)) !== -1 : false;
                }, lowerize = function(i) {
                    return i.toLowerCase();
                }, majorize = function(i) {
                    return typeof i === l ? i.replace(/[^\d\.]/g, t).split(".")[0] : a;
                }, trim = function(i, e) {
                    if (typeof i === l) {
                        i = i.replace(/^\s\s*/, t);
                        return typeof e === b ? i : i.substring(0, q);
                    }
                };
                var rgxMapper = function(i, e) {
                    var o = 0, r, t, n, b, l, d;
                    while(o < e.length && !l){
                        var c = e[o], u = e[o + 1];
                        r = t = 0;
                        while(r < c.length && !l){
                            if (!c[r]) {
                                break;
                            }
                            l = c[r++].exec(i);
                            if (!!l) {
                                for(n = 0; n < u.length; n++){
                                    d = l[++t];
                                    b = u[n];
                                    if (typeof b === w && b.length > 0) {
                                        if (b.length === 2) {
                                            if (typeof b[1] == s) {
                                                this[b[0]] = b[1].call(this, d);
                                            } else {
                                                this[b[0]] = b[1];
                                            }
                                        } else if (b.length === 3) {
                                            if (typeof b[1] === s && !(b[1].exec && b[1].test)) {
                                                this[b[0]] = d ? b[1].call(this, d, b[2]) : a;
                                            } else {
                                                this[b[0]] = d ? d.replace(b[1], b[2]) : a;
                                            }
                                        } else if (b.length === 4) {
                                            this[b[0]] = d ? b[3].call(this, d.replace(b[1], b[2])) : a;
                                        }
                                    } else {
                                        this[b] = d ? d : a;
                                    }
                                }
                            }
                        }
                        o += 2;
                    }
                }, strMapper = function(i, e) {
                    for(var o in e){
                        if (typeof e[o] === w && e[o].length > 0) {
                            for(var r = 0; r < e[o].length; r++){
                                if (has(e[o][r], i)) {
                                    return o === n ? a : o;
                                }
                            }
                        } else if (has(e[o], i)) {
                            return o === n ? a : o;
                        }
                    }
                    return i;
                };
                var $ = {
                    "1.0": "/8",
                    1.2: "/1",
                    1.3: "/3",
                    "2.0": "/412",
                    "2.0.2": "/416",
                    "2.0.3": "/417",
                    "2.0.4": "/419",
                    "?": "/"
                }, X = {
                    ME: "4.90",
                    "NT 3.11": "NT3.51",
                    "NT 4.0": "NT4.0",
                    2e3: "NT 5.0",
                    XP: [
                        "NT 5.1",
                        "NT 5.2"
                    ],
                    Vista: "NT 6.0",
                    7: "NT 6.1",
                    8: "NT 6.2",
                    8.1: "NT 6.3",
                    10: [
                        "NT 6.4",
                        "NT 10.0"
                    ],
                    RT: "ARM"
                };
                var K = {
                    browser: [
                        [
                            /\b(?:crmo|crios)\/([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                "Chrome"
                            ]
                        ],
                        [
                            /edg(?:e|ios|a)?\/([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                "Edge"
                            ]
                        ],
                        [
                            /(opera mini)\/([-\w\.]+)/i,
                            /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
                            /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i
                        ],
                        [
                            u,
                            f
                        ],
                        [
                            /opios[\/ ]+([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                B + " Mini"
                            ]
                        ],
                        [
                            /\bopr\/([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                B
                            ]
                        ],
                        [
                            /(kindle)\/([\w\.]+)/i,
                            /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,
                            /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,
                            /(ba?idubrowser)[\/ ]?([\w\.]+)/i,
                            /(?:ms|\()(ie) ([\w\.]+)/i,
                            /(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,
                            /(heytap|ovi)browser\/([\d\.]+)/i,
                            /(weibo)__([\d\.]+)/i
                        ],
                        [
                            u,
                            f
                        ],
                        [
                            /(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                "UC" + A
                            ]
                        ],
                        [
                            /microm.+\bqbcore\/([\w\.]+)/i,
                            /\bqbcore\/([\w\.]+).+microm/i
                        ],
                        [
                            f,
                            [
                                u,
                                "WeChat(Win) Desktop"
                            ]
                        ],
                        [
                            /micromessenger\/([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                "WeChat"
                            ]
                        ],
                        [
                            /konqueror\/([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                "Konqueror"
                            ]
                        ],
                        [
                            /trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i
                        ],
                        [
                            f,
                            [
                                u,
                                "IE"
                            ]
                        ],
                        [
                            /ya(?:search)?browser\/([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                "Yandex"
                            ]
                        ],
                        [
                            /(avast|avg)\/([\w\.]+)/i
                        ],
                        [
                            [
                                u,
                                /(.+)/,
                                "$1 Secure " + A
                            ],
                            f
                        ],
                        [
                            /\bfocus\/([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                O + " Focus"
                            ]
                        ],
                        [
                            /\bopt\/([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                B + " Touch"
                            ]
                        ],
                        [
                            /coc_coc\w+\/([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                "Coc Coc"
                            ]
                        ],
                        [
                            /dolfin\/([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                "Dolphin"
                            ]
                        ],
                        [
                            /coast\/([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                B + " Coast"
                            ]
                        ],
                        [
                            /miuibrowser\/([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                "MIUI " + A
                            ]
                        ],
                        [
                            /fxios\/([-\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                O
                            ]
                        ],
                        [
                            /\bqihu|(qi?ho?o?|360)browser/i
                        ],
                        [
                            [
                                u,
                                "360 " + A
                            ]
                        ],
                        [
                            /(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i
                        ],
                        [
                            [
                                u,
                                /(.+)/,
                                "$1 " + A
                            ],
                            f
                        ],
                        [
                            /(comodo_dragon)\/([\w\.]+)/i
                        ],
                        [
                            [
                                u,
                                /_/g,
                                " "
                            ],
                            f
                        ],
                        [
                            /(electron)\/([\w\.]+) safari/i,
                            /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
                            /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i
                        ],
                        [
                            u,
                            f
                        ],
                        [
                            /(metasr)[\/ ]?([\w\.]+)/i,
                            /(lbbrowser)/i,
                            /\[(linkedin)app\]/i
                        ],
                        [
                            u
                        ],
                        [
                            /((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i
                        ],
                        [
                            [
                                u,
                                H
                            ],
                            f
                        ],
                        [
                            /(kakao(?:talk|story))[\/ ]([\w\.]+)/i,
                            /(naver)\(.*?(\d+\.[\w\.]+).*\)/i,
                            /safari (line)\/([\w\.]+)/i,
                            /\b(line)\/([\w\.]+)\/iab/i,
                            /(chromium|instagram)[\/ ]([-\w\.]+)/i
                        ],
                        [
                            u,
                            f
                        ],
                        [
                            /\bgsa\/([\w\.]+) .*safari\//i
                        ],
                        [
                            f,
                            [
                                u,
                                "GSA"
                            ]
                        ],
                        [
                            /musical_ly(?:.+app_?version\/|_)([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                "TikTok"
                            ]
                        ],
                        [
                            /headlesschrome(?:\/([\w\.]+)| )/i
                        ],
                        [
                            f,
                            [
                                u,
                                C + " Headless"
                            ]
                        ],
                        [
                            / wv\).+(chrome)\/([\w\.]+)/i
                        ],
                        [
                            [
                                u,
                                C + " WebView"
                            ],
                            f
                        ],
                        [
                            /droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i
                        ],
                        [
                            f,
                            [
                                u,
                                "Android " + A
                            ]
                        ],
                        [
                            /(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i
                        ],
                        [
                            u,
                            f
                        ],
                        [
                            /version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i
                        ],
                        [
                            f,
                            [
                                u,
                                "Mobile Safari"
                            ]
                        ],
                        [
                            /version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i
                        ],
                        [
                            f,
                            u
                        ],
                        [
                            /webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i
                        ],
                        [
                            u,
                            [
                                f,
                                strMapper,
                                $
                            ]
                        ],
                        [
                            /(webkit|khtml)\/([\w\.]+)/i
                        ],
                        [
                            u,
                            f
                        ],
                        [
                            /(navigator|netscape\d?)\/([-\w\.]+)/i
                        ],
                        [
                            [
                                u,
                                "Netscape"
                            ],
                            f
                        ],
                        [
                            /mobile vr; rv:([\w\.]+)\).+firefox/i
                        ],
                        [
                            f,
                            [
                                u,
                                O + " Reality"
                            ]
                        ],
                        [
                            /ekiohf.+(flow)\/([\w\.]+)/i,
                            /(swiftfox)/i,
                            /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,
                            /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
                            /(firefox)\/([\w\.]+)/i,
                            /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
                            /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
                            /(links) \(([\w\.]+)/i,
                            /panasonic;(viera)/i
                        ],
                        [
                            u,
                            f
                        ],
                        [
                            /(cobalt)\/([\w\.]+)/i
                        ],
                        [
                            u,
                            [
                                f,
                                /master.|lts./,
                                ""
                            ]
                        ]
                    ],
                    cpu: [
                        [
                            /(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i
                        ],
                        [
                            [
                                h,
                                "amd64"
                            ]
                        ],
                        [
                            /(ia32(?=;))/i
                        ],
                        [
                            [
                                h,
                                lowerize
                            ]
                        ],
                        [
                            /((?:i[346]|x)86)[;\)]/i
                        ],
                        [
                            [
                                h,
                                "ia32"
                            ]
                        ],
                        [
                            /\b(aarch64|arm(v?8e?l?|_?64))\b/i
                        ],
                        [
                            [
                                h,
                                "arm64"
                            ]
                        ],
                        [
                            /\b(arm(?:v[67])?ht?n?[fl]p?)\b/i
                        ],
                        [
                            [
                                h,
                                "armhf"
                            ]
                        ],
                        [
                            /windows (ce|mobile); ppc;/i
                        ],
                        [
                            [
                                h,
                                "arm"
                            ]
                        ],
                        [
                            /((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i
                        ],
                        [
                            [
                                h,
                                /ower/,
                                t,
                                lowerize
                            ]
                        ],
                        [
                            /(sun4\w)[;\)]/i
                        ],
                        [
                            [
                                h,
                                "sparc"
                            ]
                        ],
                        [
                            /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i
                        ],
                        [
                            [
                                h,
                                lowerize
                            ]
                        ]
                    ],
                    device: [
                        [
                            /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i
                        ],
                        [
                            c,
                            [
                                m,
                                V
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
                            /samsung[- ]([-\w]+)/i,
                            /sec-(sgh\w+)/i
                        ],
                        [
                            c,
                            [
                                m,
                                V
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i
                        ],
                        [
                            c,
                            [
                                m,
                                S
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /\((ipad);[-\w\),; ]+apple/i,
                            /applecoremedia\/[\w\.]+ \((ipad)/i,
                            /\b(ipad)\d\d?,\d\d?[;\]].+ios/i
                        ],
                        [
                            c,
                            [
                                m,
                                S
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /(macintosh);/i
                        ],
                        [
                            c,
                            [
                                m,
                                S
                            ]
                        ],
                        [
                            /\b(sh-?[altvz]?\d\d[a-ekm]?)/i
                        ],
                        [
                            c,
                            [
                                m,
                                D
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i
                        ],
                        [
                            c,
                            [
                                m,
                                j
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /(?:huawei|honor)([-\w ]+)[;\)]/i,
                            /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i
                        ],
                        [
                            c,
                            [
                                m,
                                j
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /\b(poco[\w ]+)(?: bui|\))/i,
                            /\b; (\w+) build\/hm\1/i,
                            /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
                            /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
                            /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i
                        ],
                        [
                            [
                                c,
                                /_/g,
                                " "
                            ],
                            [
                                m,
                                F
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i
                        ],
                        [
                            [
                                c,
                                /_/g,
                                " "
                            ],
                            [
                                m,
                                F
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /; (\w+) bui.+ oppo/i,
                            /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i
                        ],
                        [
                            c,
                            [
                                m,
                                "OPPO"
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /vivo (\w+)(?: bui|\))/i,
                            /\b(v[12]\d{3}\w?[at])(?: bui|;)/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Vivo"
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /\b(rmx[12]\d{3})(?: bui|;|\))/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Realme"
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
                            /\bmot(?:orola)?[- ](\w*)/i,
                            /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i
                        ],
                        [
                            c,
                            [
                                m,
                                M
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /\b(mz60\d|xoom[2 ]{0,2}) build\//i
                        ],
                        [
                            c,
                            [
                                m,
                                M
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i
                        ],
                        [
                            c,
                            [
                                m,
                                P
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
                            /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
                            /\blg-?([\d\w]+) bui/i
                        ],
                        [
                            c,
                            [
                                m,
                                P
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /(ideatab[-\w ]+)/i,
                            /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Lenovo"
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /(?:maemo|nokia).*(n900|lumia \d+)/i,
                            /nokia[-_ ]?([-\w\.]*)/i
                        ],
                        [
                            [
                                c,
                                /_/g,
                                " "
                            ],
                            [
                                m,
                                "Nokia"
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /(pixel c)\b/i
                        ],
                        [
                            c,
                            [
                                m,
                                U
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i
                        ],
                        [
                            c,
                            [
                                m,
                                U
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i
                        ],
                        [
                            c,
                            [
                                m,
                                I
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /sony tablet [ps]/i,
                            /\b(?:sony)?sgp\w+(?: bui|\))/i
                        ],
                        [
                            [
                                c,
                                "Xperia Tablet"
                            ],
                            [
                                m,
                                I
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            / (kb2005|in20[12]5|be20[12][59])\b/i,
                            /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i
                        ],
                        [
                            c,
                            [
                                m,
                                "OnePlus"
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /(alexa)webm/i,
                            /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,
                            /(kf[a-z]+)( bui|\)).+silk\//i
                        ],
                        [
                            c,
                            [
                                m,
                                T
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i
                        ],
                        [
                            [
                                c,
                                /(.+)/g,
                                "Fire Phone $1"
                            ],
                            [
                                m,
                                T
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /(playbook);[-\w\),; ]+(rim)/i
                        ],
                        [
                            c,
                            m,
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /\b((?:bb[a-f]|st[hv])100-\d)/i,
                            /\(bb10; (\w+)/i
                        ],
                        [
                            c,
                            [
                                m,
                                N
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i
                        ],
                        [
                            c,
                            [
                                m,
                                z
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            / (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i
                        ],
                        [
                            c,
                            [
                                m,
                                z
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /(nexus 9)/i
                        ],
                        [
                            c,
                            [
                                m,
                                "HTC"
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
                            /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
                            /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i
                        ],
                        [
                            m,
                            [
                                c,
                                /_/g,
                                " "
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /droid.+; ([ab][1-7]-?[0178a]\d\d?)/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Acer"
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /droid.+; (m[1-5] note) bui/i,
                            /\bmz-([-\w]{2,})/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Meizu"
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,
                            /(hp) ([\w ]+\w)/i,
                            /(asus)-?(\w+)/i,
                            /(microsoft); (lumia[\w ]+)/i,
                            /(lenovo)[-_ ]?([-\w]+)/i,
                            /(jolla)/i,
                            /(oppo) ?([\w ]+) bui/i
                        ],
                        [
                            m,
                            c,
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /(kobo)\s(ereader|touch)/i,
                            /(archos) (gamepad2?)/i,
                            /(hp).+(touchpad(?!.+tablet)|tablet)/i,
                            /(kindle)\/([\w\.]+)/i,
                            /(nook)[\w ]+build\/(\w+)/i,
                            /(dell) (strea[kpr\d ]*[\dko])/i,
                            /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
                            /(trinity)[- ]*(t\d{3}) bui/i,
                            /(gigaset)[- ]+(q\w{1,9}) bui/i,
                            /(vodafone) ([\w ]+)(?:\)| bui)/i
                        ],
                        [
                            m,
                            c,
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /(surface duo)/i
                        ],
                        [
                            c,
                            [
                                m,
                                R
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /droid [\d\.]+; (fp\du?)(?: b|\))/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Fairphone"
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /(u304aa)/i
                        ],
                        [
                            c,
                            [
                                m,
                                "AT&T"
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /\bsie-(\w*)/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Siemens"
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /\b(rct\w+) b/i
                        ],
                        [
                            c,
                            [
                                m,
                                "RCA"
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /\b(venue[\d ]{2,7}) b/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Dell"
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /\b(q(?:mv|ta)\w+) b/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Verizon"
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Barnes & Noble"
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /\b(tm\d{3}\w+) b/i
                        ],
                        [
                            c,
                            [
                                m,
                                "NuVision"
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /\b(k88) b/i
                        ],
                        [
                            c,
                            [
                                m,
                                "ZTE"
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /\b(nx\d{3}j) b/i
                        ],
                        [
                            c,
                            [
                                m,
                                "ZTE"
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /\b(gen\d{3}) b.+49h/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Swiss"
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /\b(zur\d{3}) b/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Swiss"
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /\b((zeki)?tb.*\b) b/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Zeki"
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /\b([yr]\d{2}) b/i,
                            /\b(dragon[- ]+touch |dt)(\w{5}) b/i
                        ],
                        [
                            [
                                m,
                                "Dragon Touch"
                            ],
                            c,
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /\b(ns-?\w{0,9}) b/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Insignia"
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /\b((nxa|next)-?\w{0,9}) b/i
                        ],
                        [
                            c,
                            [
                                m,
                                "NextBook"
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i
                        ],
                        [
                            [
                                m,
                                "Voice"
                            ],
                            c,
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /\b(lvtel\-)?(v1[12]) b/i
                        ],
                        [
                            [
                                m,
                                "LvTel"
                            ],
                            c,
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /\b(ph-1) /i
                        ],
                        [
                            c,
                            [
                                m,
                                "Essential"
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /\b(v(100md|700na|7011|917g).*\b) b/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Envizen"
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /\b(trio[-\w\. ]+) b/i
                        ],
                        [
                            c,
                            [
                                m,
                                "MachSpeed"
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /\btu_(1491) b/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Rotor"
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /(shield[\w ]+) b/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Nvidia"
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /(sprint) (\w+)/i
                        ],
                        [
                            m,
                            c,
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /(kin\.[onetw]{3})/i
                        ],
                        [
                            [
                                c,
                                /\./g,
                                " "
                            ],
                            [
                                m,
                                R
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i
                        ],
                        [
                            c,
                            [
                                m,
                                G
                            ],
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i
                        ],
                        [
                            c,
                            [
                                m,
                                G
                            ],
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /smart-tv.+(samsung)/i
                        ],
                        [
                            m,
                            [
                                p,
                                x
                            ]
                        ],
                        [
                            /hbbtv.+maple;(\d+)/i
                        ],
                        [
                            [
                                c,
                                /^/,
                                "SmartTV"
                            ],
                            [
                                m,
                                V
                            ],
                            [
                                p,
                                x
                            ]
                        ],
                        [
                            /(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i
                        ],
                        [
                            [
                                m,
                                P
                            ],
                            [
                                p,
                                x
                            ]
                        ],
                        [
                            /(apple) ?tv/i
                        ],
                        [
                            m,
                            [
                                c,
                                S + " TV"
                            ],
                            [
                                p,
                                x
                            ]
                        ],
                        [
                            /crkey/i
                        ],
                        [
                            [
                                c,
                                C + "cast"
                            ],
                            [
                                m,
                                U
                            ],
                            [
                                p,
                                x
                            ]
                        ],
                        [
                            /droid.+aft(\w)( bui|\))/i
                        ],
                        [
                            c,
                            [
                                m,
                                T
                            ],
                            [
                                p,
                                x
                            ]
                        ],
                        [
                            /\(dtv[\);].+(aquos)/i,
                            /(aquos-tv[\w ]+)\)/i
                        ],
                        [
                            c,
                            [
                                m,
                                D
                            ],
                            [
                                p,
                                x
                            ]
                        ],
                        [
                            /(bravia[\w ]+)( bui|\))/i
                        ],
                        [
                            c,
                            [
                                m,
                                I
                            ],
                            [
                                p,
                                x
                            ]
                        ],
                        [
                            /(mitv-\w{5}) bui/i
                        ],
                        [
                            c,
                            [
                                m,
                                F
                            ],
                            [
                                p,
                                x
                            ]
                        ],
                        [
                            /Hbbtv.*(technisat) (.*);/i
                        ],
                        [
                            m,
                            c,
                            [
                                p,
                                x
                            ]
                        ],
                        [
                            /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
                            /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i
                        ],
                        [
                            [
                                m,
                                trim
                            ],
                            [
                                c,
                                trim
                            ],
                            [
                                p,
                                x
                            ]
                        ],
                        [
                            /\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i
                        ],
                        [
                            [
                                p,
                                x
                            ]
                        ],
                        [
                            /(ouya)/i,
                            /(nintendo) ([wids3utch]+)/i
                        ],
                        [
                            m,
                            c,
                            [
                                p,
                                v
                            ]
                        ],
                        [
                            /droid.+; (shield) bui/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Nvidia"
                            ],
                            [
                                p,
                                v
                            ]
                        ],
                        [
                            /(playstation [345portablevi]+)/i
                        ],
                        [
                            c,
                            [
                                m,
                                I
                            ],
                            [
                                p,
                                v
                            ]
                        ],
                        [
                            /\b(xbox(?: one)?(?!; xbox))[\); ]/i
                        ],
                        [
                            c,
                            [
                                m,
                                R
                            ],
                            [
                                p,
                                v
                            ]
                        ],
                        [
                            /((pebble))app/i
                        ],
                        [
                            m,
                            c,
                            [
                                p,
                                _
                            ]
                        ],
                        [
                            /(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i
                        ],
                        [
                            c,
                            [
                                m,
                                S
                            ],
                            [
                                p,
                                _
                            ]
                        ],
                        [
                            /droid.+; (glass) \d/i
                        ],
                        [
                            c,
                            [
                                m,
                                U
                            ],
                            [
                                p,
                                _
                            ]
                        ],
                        [
                            /droid.+; (wt63?0{2,3})\)/i
                        ],
                        [
                            c,
                            [
                                m,
                                G
                            ],
                            [
                                p,
                                _
                            ]
                        ],
                        [
                            /(quest( 2| pro)?)/i
                        ],
                        [
                            c,
                            [
                                m,
                                H
                            ],
                            [
                                p,
                                _
                            ]
                        ],
                        [
                            /(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i
                        ],
                        [
                            m,
                            [
                                p,
                                y
                            ]
                        ],
                        [
                            /(aeobc)\b/i
                        ],
                        [
                            c,
                            [
                                m,
                                T
                            ],
                            [
                                p,
                                y
                            ]
                        ],
                        [
                            /droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i
                        ],
                        [
                            c,
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i
                        ],
                        [
                            c,
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i
                        ],
                        [
                            [
                                p,
                                k
                            ]
                        ],
                        [
                            /(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i
                        ],
                        [
                            [
                                p,
                                g
                            ]
                        ],
                        [
                            /(android[-\w\. ]{0,9});.+buil/i
                        ],
                        [
                            c,
                            [
                                m,
                                "Generic"
                            ]
                        ]
                    ],
                    engine: [
                        [
                            /windows.+ edge\/([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                E + "HTML"
                            ]
                        ],
                        [
                            /webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                "Blink"
                            ]
                        ],
                        [
                            /(presto)\/([\w\.]+)/i,
                            /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
                            /ekioh(flow)\/([\w\.]+)/i,
                            /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
                            /(icab)[\/ ]([23]\.[\d\.]+)/i,
                            /\b(libweb)/i
                        ],
                        [
                            u,
                            f
                        ],
                        [
                            /rv\:([\w\.]{1,9})\b.+(gecko)/i
                        ],
                        [
                            f,
                            u
                        ]
                    ],
                    os: [
                        [
                            /microsoft (windows) (vista|xp)/i
                        ],
                        [
                            u,
                            f
                        ],
                        [
                            /(windows) nt 6\.2; (arm)/i,
                            /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,
                            /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i
                        ],
                        [
                            u,
                            [
                                f,
                                strMapper,
                                X
                            ]
                        ],
                        [
                            /(win(?=3|9|n)|win 9x )([nt\d\.]+)/i
                        ],
                        [
                            [
                                u,
                                "Windows"
                            ],
                            [
                                f,
                                strMapper,
                                X
                            ]
                        ],
                        [
                            /ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,
                            /ios;fbsv\/([\d\.]+)/i,
                            /cfnetwork\/.+darwin/i
                        ],
                        [
                            [
                                f,
                                /_/g,
                                "."
                            ],
                            [
                                u,
                                "iOS"
                            ]
                        ],
                        [
                            /(mac os x) ?([\w\. ]*)/i,
                            /(macintosh|mac_powerpc\b)(?!.+haiku)/i
                        ],
                        [
                            [
                                u,
                                Z
                            ],
                            [
                                f,
                                /_/g,
                                "."
                            ]
                        ],
                        [
                            /droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i
                        ],
                        [
                            f,
                            u
                        ],
                        [
                            /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,
                            /(blackberry)\w*\/([\w\.]*)/i,
                            /(tizen|kaios)[\/ ]([\w\.]+)/i,
                            /\((series40);/i
                        ],
                        [
                            u,
                            f
                        ],
                        [
                            /\(bb(10);/i
                        ],
                        [
                            f,
                            [
                                u,
                                N
                            ]
                        ],
                        [
                            /(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i
                        ],
                        [
                            f,
                            [
                                u,
                                "Symbian"
                            ]
                        ],
                        [
                            /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                O + " OS"
                            ]
                        ],
                        [
                            /web0s;.+rt(tv)/i,
                            /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                "webOS"
                            ]
                        ],
                        [
                            /watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                "watchOS"
                            ]
                        ],
                        [
                            /crkey\/([\d\.]+)/i
                        ],
                        [
                            f,
                            [
                                u,
                                C + "cast"
                            ]
                        ],
                        [
                            /(cros) [\w]+(?:\)| ([\w\.]+)\b)/i
                        ],
                        [
                            [
                                u,
                                L
                            ],
                            f
                        ],
                        [
                            /panasonic;(viera)/i,
                            /(netrange)mmh/i,
                            /(nettv)\/(\d+\.[\w\.]+)/i,
                            /(nintendo|playstation) ([wids345portablevuch]+)/i,
                            /(xbox); +xbox ([^\);]+)/i,
                            /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
                            /(mint)[\/\(\) ]?(\w*)/i,
                            /(mageia|vectorlinux)[; ]/i,
                            /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
                            /(hurd|linux) ?([\w\.]*)/i,
                            /(gnu) ?([\w\.]*)/i,
                            /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
                            /(haiku) (\w+)/i
                        ],
                        [
                            u,
                            f
                        ],
                        [
                            /(sunos) ?([\w\.\d]*)/i
                        ],
                        [
                            [
                                u,
                                "Solaris"
                            ],
                            f
                        ],
                        [
                            /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
                            /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
                            /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,
                            /(unix) ?([\w\.]*)/i
                        ],
                        [
                            u,
                            f
                        ]
                    ]
                };
                var UAParser = function(i, e) {
                    if (typeof i === w) {
                        e = i;
                        i = a;
                    }
                    if (!(this instanceof UAParser)) {
                        return new UAParser(i, e).getResult();
                    }
                    var r = typeof o !== b && o.navigator ? o.navigator : a;
                    var n = i || (r && r.userAgent ? r.userAgent : t);
                    var v = r && r.userAgentData ? r.userAgentData : a;
                    var x = e ? extend(K, e) : K;
                    var _ = r && r.userAgent == n;
                    this.getBrowser = function() {
                        var i = {};
                        i[u] = a;
                        i[f] = a;
                        rgxMapper.call(i, n, x.browser);
                        i[d] = majorize(i[f]);
                        if (_ && r && r.brave && typeof r.brave.isBrave == s) {
                            i[u] = "Brave";
                        }
                        return i;
                    };
                    this.getCPU = function() {
                        var i = {};
                        i[h] = a;
                        rgxMapper.call(i, n, x.cpu);
                        return i;
                    };
                    this.getDevice = function() {
                        var i = {};
                        i[m] = a;
                        i[c] = a;
                        i[p] = a;
                        rgxMapper.call(i, n, x.device);
                        if (_ && !i[p] && v && v.mobile) {
                            i[p] = g;
                        }
                        if (_ && i[c] == "Macintosh" && r && typeof r.standalone !== b && r.maxTouchPoints && r.maxTouchPoints > 2) {
                            i[c] = "iPad";
                            i[p] = k;
                        }
                        return i;
                    };
                    this.getEngine = function() {
                        var i = {};
                        i[u] = a;
                        i[f] = a;
                        rgxMapper.call(i, n, x.engine);
                        return i;
                    };
                    this.getOS = function() {
                        var i = {};
                        i[u] = a;
                        i[f] = a;
                        rgxMapper.call(i, n, x.os);
                        if (_ && !i[u] && v && v.platform != "Unknown") {
                            i[u] = v.platform.replace(/chrome os/i, L).replace(/macos/i, Z);
                        }
                        return i;
                    };
                    this.getResult = function() {
                        return {
                            ua: this.getUA(),
                            browser: this.getBrowser(),
                            engine: this.getEngine(),
                            os: this.getOS(),
                            device: this.getDevice(),
                            cpu: this.getCPU()
                        };
                    };
                    this.getUA = function() {
                        return n;
                    };
                    this.setUA = function(i) {
                        n = typeof i === l && i.length > q ? trim(i, q) : i;
                        return this;
                    };
                    this.setUA(n);
                    return this;
                };
                UAParser.VERSION = r;
                UAParser.BROWSER = enumerize([
                    u,
                    f,
                    d
                ]);
                UAParser.CPU = enumerize([
                    h
                ]);
                UAParser.DEVICE = enumerize([
                    c,
                    m,
                    p,
                    v,
                    g,
                    x,
                    k,
                    _,
                    y
                ]);
                UAParser.ENGINE = UAParser.OS = enumerize([
                    u,
                    f
                ]);
                if (typeof e !== b) {
                    if ("object" !== b && i.exports) {
                        e = i.exports = UAParser;
                    }
                    e.UAParser = UAParser;
                } else {
                    if (typeof define === s && define.amd) {
                        ((r)=>r !== undefined && __turbopack_export_value__(r))(function() {
                            return UAParser;
                        }(__turbopack_require__, exports, module));
                    } else if (typeof o !== b) {
                        o.UAParser = UAParser;
                    }
                }
                var Q = typeof o !== b && (o.jQuery || o.Zepto);
                if (Q && !Q.ua) {
                    var Y = new UAParser;
                    Q.ua = Y.getResult();
                    Q.ua.get = function() {
                        return Y.getUA();
                    };
                    Q.ua.set = function(i) {
                        Y.setUA(i);
                        var e = Y.getResult();
                        for(var o in e){
                            Q.ua[o] = e[o];
                        }
                    };
                }
            })(typeof window === "object" ? window : this);
        }
    };
    var e = {};
    function __nccwpck_require__(o) {
        var a = e[o];
        if (a !== undefined) {
            return a.exports;
        }
        var r = e[o] = {
            exports: {}
        };
        var t = true;
        try {
            i[o].call(r.exports, r, r.exports, __nccwpck_require__);
            t = false;
        } finally{
            if (t) delete e[o];
        }
        return r.exports;
    }
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = __dirname + "/";
    var o = __nccwpck_require__(226);
    module.exports = o;
})();

}.call(this) }),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/server/web/spec-extension/user-agent.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "isBot": ()=>isBot,
    "userAgent": ()=>userAgent,
    "userAgentFromString": ()=>userAgentFromString
});
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$ua$2d$parser$2d$js$2f$ua$2d$parser$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/compiled/ua-parser-js/ua-parser.js [middleware] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
function isBot(input) {
    return /Googlebot|Mediapartners-Google|AdsBot-Google|googleweblight|Storebot-Google|Google-PageRenderer|Google-InspectionTool|Bingbot|BingPreview|Slurp|DuckDuckBot|baiduspider|yandex|sogou|LinkedInBot|bitlybot|tumblr|vkShare|quora link preview|facebookexternalhit|facebookcatalog|Twitterbot|applebot|redditbot|Slackbot|Discordbot|WhatsApp|SkypeUriPreview|ia_archiver/i.test(input);
}
function userAgentFromString(input) {
    return {
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$ua$2d$parser$2d$js$2f$ua$2d$parser$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"])(input),
        isBot: input === undefined ? false : isBot(input)
    };
}
function userAgent({ headers }) {
    return userAgentFromString(headers.get("user-agent") || undefined);
} //# sourceMappingURL=user-agent.js.map

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/server/web/spec-extension/url-pattern.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "URLPattern": ()=>GlobalURLPattern
});
const GlobalURLPattern = typeof URLPattern === "undefined" ? undefined : URLPattern;
;
 //# sourceMappingURL=url-pattern.js.map

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/server/web/exports/index.js [middleware] (ecmascript) <locals>": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

// Alias index file of next/server for edge runtime for tree-shaking purpose
__turbopack_esm__({});
;
;
;
;
;
 //# sourceMappingURL=index.js.map

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/server/web/exports/index.js [middleware] (ecmascript) <module evaluation>": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$image$2d$response$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/server/web/spec-extension/image-response.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$request$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/server/web/spec-extension/request.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/server/web/spec-extension/response.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$user$2d$agent$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/server/web/spec-extension/user-agent.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$url$2d$pattern$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/server/web/spec-extension/url-pattern.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/server/web/exports/index.js [middleware] (ecmascript) <locals>");
"__TURBOPACK__ecmascript__hoisting__location__";

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/api/server.js [middleware] (ecmascript) <locals>": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({});
;
 //# sourceMappingURL=server.js.map

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/api/server.js [middleware] (ecmascript) <module evaluation>": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/server/web/exports/index.js [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/api/server.js [middleware] (ecmascript) <locals>");
"__TURBOPACK__ecmascript__hoisting__location__";

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/helpers/bind.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>bind
});
'use strict';
function bind(fn, thisArg) {
    return function wrap() {
        return fn.apply(thisArg, arguments);
    };
}

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/utils.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$bind$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/helpers/bind.js [middleware] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use strict';
;
// utils is a library of generic helper functions non-specific to axios
const { toString } = Object.prototype;
const { getPrototypeOf } = Object;
const kindOf = ((cache)=>(thing)=>{
        const str = toString.call(thing);
        return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
    })(Object.create(null));
const kindOfTest = (type)=>{
    type = type.toLowerCase();
    return (thing)=>kindOf(thing) === type;
};
const typeOfTest = (type)=>(thing)=>typeof thing === type;
/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 *
 * @returns {boolean} True if value is an Array, otherwise false
 */ const { isArray } = Array;
/**
 * Determine if a value is undefined
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if the value is undefined, otherwise false
 */ const isUndefined = typeOfTest('undefined');
/**
 * Determine if a value is a Buffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Buffer, otherwise false
 */ function isBuffer(val) {
    return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
}
/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */ const isArrayBuffer = kindOfTest('ArrayBuffer');
/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */ function isArrayBufferView(val) {
    let result;
    if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
        result = ArrayBuffer.isView(val);
    } else {
        result = val && val.buffer && isArrayBuffer(val.buffer);
    }
    return result;
}
/**
 * Determine if a value is a String
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a String, otherwise false
 */ const isString = typeOfTest('string');
/**
 * Determine if a value is a Function
 *
 * @param {*} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */ const isFunction = typeOfTest('function');
/**
 * Determine if a value is a Number
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Number, otherwise false
 */ const isNumber = typeOfTest('number');
/**
 * Determine if a value is an Object
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an Object, otherwise false
 */ const isObject = (thing)=>thing !== null && typeof thing === 'object';
/**
 * Determine if a value is a Boolean
 *
 * @param {*} thing The value to test
 * @returns {boolean} True if value is a Boolean, otherwise false
 */ const isBoolean = (thing)=>thing === true || thing === false;
/**
 * Determine if a value is a plain Object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a plain Object, otherwise false
 */ const isPlainObject = (val)=>{
    if (kindOf(val) !== 'object') {
        return false;
    }
    const prototype = getPrototypeOf(val);
    return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
};
/**
 * Determine if a value is a Date
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Date, otherwise false
 */ const isDate = kindOfTest('Date');
/**
 * Determine if a value is a File
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */ const isFile = kindOfTest('File');
/**
 * Determine if a value is a Blob
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Blob, otherwise false
 */ const isBlob = kindOfTest('Blob');
/**
 * Determine if a value is a FileList
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */ const isFileList = kindOfTest('FileList');
/**
 * Determine if a value is a Stream
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Stream, otherwise false
 */ const isStream = (val)=>isObject(val) && isFunction(val.pipe);
/**
 * Determine if a value is a FormData
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an FormData, otherwise false
 */ const isFormData = (thing)=>{
    let kind;
    return thing && (typeof FormData === 'function' && thing instanceof FormData || isFunction(thing.append) && ((kind = kindOf(thing)) === 'formdata' || kind === 'object' && isFunction(thing.toString) && thing.toString() === '[object FormData]'));
};
/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */ const isURLSearchParams = kindOfTest('URLSearchParams');
const [isReadableStream, isRequest, isResponse, isHeaders] = [
    'ReadableStream',
    'Request',
    'Response',
    'Headers'
].map(kindOfTest);
/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 *
 * @returns {String} The String freed of excess whitespace
 */ const trim = (str)=>str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 *
 * @param {Boolean} [allOwnKeys = false]
 * @returns {any}
 */ function forEach(obj, fn, { allOwnKeys = false } = {}) {
    // Don't bother if no value provided
    if (obj === null || typeof obj === 'undefined') {
        return;
    }
    let i;
    let l;
    // Force an array if not already something iterable
    if (typeof obj !== 'object') {
        /*eslint no-param-reassign:0*/ obj = [
            obj
        ];
    }
    if (isArray(obj)) {
        // Iterate over array values
        for(i = 0, l = obj.length; i < l; i++){
            fn.call(null, obj[i], i, obj);
        }
    } else {
        // Iterate over object keys
        const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
        const len = keys.length;
        let key;
        for(i = 0; i < len; i++){
            key = keys[i];
            fn.call(null, obj[key], key, obj);
        }
    }
}
function findKey(obj, key) {
    key = key.toLowerCase();
    const keys = Object.keys(obj);
    let i = keys.length;
    let _key;
    while(i-- > 0){
        _key = keys[i];
        if (key === _key.toLowerCase()) {
            return _key;
        }
    }
    return null;
}
const _global = (()=>{
    /*eslint no-undef:0*/ if (typeof globalThis !== "undefined") return globalThis;
    return typeof self !== "undefined" ? self : typeof window !== 'undefined' ? window : global;
})();
const isContextDefined = (context)=>!isUndefined(context) && context !== _global;
/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 *
 * @returns {Object} Result of all merge properties
 */ function merge() {
    const { caseless } = isContextDefined(this) && this || {};
    const result = {};
    const assignValue = (val, key)=>{
        const targetKey = caseless && findKey(result, key) || key;
        if (isPlainObject(result[targetKey]) && isPlainObject(val)) {
            result[targetKey] = merge(result[targetKey], val);
        } else if (isPlainObject(val)) {
            result[targetKey] = merge({}, val);
        } else if (isArray(val)) {
            result[targetKey] = val.slice();
        } else {
            result[targetKey] = val;
        }
    };
    for(let i = 0, l = arguments.length; i < l; i++){
        arguments[i] && forEach(arguments[i], assignValue);
    }
    return result;
}
/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 *
 * @param {Boolean} [allOwnKeys]
 * @returns {Object} The resulting value of object a
 */ const extend = (a, b, thisArg, { allOwnKeys } = {})=>{
    forEach(b, (val, key)=>{
        if (thisArg && isFunction(val)) {
            a[key] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$bind$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"])(val, thisArg);
        } else {
            a[key] = val;
        }
    }, {
        allOwnKeys
    });
    return a;
};
/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 *
 * @returns {string} content value without BOM
 */ const stripBOM = (content)=>{
    if (content.charCodeAt(0) === 0xFEFF) {
        content = content.slice(1);
    }
    return content;
};
/**
 * Inherit the prototype methods from one constructor into another
 * @param {function} constructor
 * @param {function} superConstructor
 * @param {object} [props]
 * @param {object} [descriptors]
 *
 * @returns {void}
 */ const inherits = (constructor, superConstructor, props, descriptors)=>{
    constructor.prototype = Object.create(superConstructor.prototype, descriptors);
    constructor.prototype.constructor = constructor;
    Object.defineProperty(constructor, 'super', {
        value: superConstructor.prototype
    });
    props && Object.assign(constructor.prototype, props);
};
/**
 * Resolve object with deep prototype chain to a flat object
 * @param {Object} sourceObj source object
 * @param {Object} [destObj]
 * @param {Function|Boolean} [filter]
 * @param {Function} [propFilter]
 *
 * @returns {Object}
 */ const toFlatObject = (sourceObj, destObj, filter, propFilter)=>{
    let props;
    let i;
    let prop;
    const merged = {};
    destObj = destObj || {};
    // eslint-disable-next-line no-eq-null,eqeqeq
    if (sourceObj == null) return destObj;
    do {
        props = Object.getOwnPropertyNames(sourceObj);
        i = props.length;
        while(i-- > 0){
            prop = props[i];
            if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
                destObj[prop] = sourceObj[prop];
                merged[prop] = true;
            }
        }
        sourceObj = filter !== false && getPrototypeOf(sourceObj);
    }while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype)
    return destObj;
};
/**
 * Determines whether a string ends with the characters of a specified string
 *
 * @param {String} str
 * @param {String} searchString
 * @param {Number} [position= 0]
 *
 * @returns {boolean}
 */ const endsWith = (str, searchString, position)=>{
    str = String(str);
    if (position === undefined || position > str.length) {
        position = str.length;
    }
    position -= searchString.length;
    const lastIndex = str.indexOf(searchString, position);
    return lastIndex !== -1 && lastIndex === position;
};
/**
 * Returns new array from array like object or null if failed
 *
 * @param {*} [thing]
 *
 * @returns {?Array}
 */ const toArray = (thing)=>{
    if (!thing) return null;
    if (isArray(thing)) return thing;
    let i = thing.length;
    if (!isNumber(i)) return null;
    const arr = new Array(i);
    while(i-- > 0){
        arr[i] = thing[i];
    }
    return arr;
};
/**
 * Checking if the Uint8Array exists and if it does, it returns a function that checks if the
 * thing passed in is an instance of Uint8Array
 *
 * @param {TypedArray}
 *
 * @returns {Array}
 */ // eslint-disable-next-line func-names
const isTypedArray = ((TypedArray)=>{
    // eslint-disable-next-line func-names
    return (thing)=>{
        return TypedArray && thing instanceof TypedArray;
    };
})(typeof Uint8Array !== 'undefined' && getPrototypeOf(Uint8Array));
/**
 * For each entry in the object, call the function with the key and value.
 *
 * @param {Object<any, any>} obj - The object to iterate over.
 * @param {Function} fn - The function to call for each entry.
 *
 * @returns {void}
 */ const forEachEntry = (obj, fn)=>{
    const generator = obj && obj[Symbol.iterator];
    const iterator = generator.call(obj);
    let result;
    while((result = iterator.next()) && !result.done){
        const pair = result.value;
        fn.call(obj, pair[0], pair[1]);
    }
};
/**
 * It takes a regular expression and a string, and returns an array of all the matches
 *
 * @param {string} regExp - The regular expression to match against.
 * @param {string} str - The string to search.
 *
 * @returns {Array<boolean>}
 */ const matchAll = (regExp, str)=>{
    let matches;
    const arr = [];
    while((matches = regExp.exec(str)) !== null){
        arr.push(matches);
    }
    return arr;
};
/* Checking if the kindOfTest function returns true when passed an HTMLFormElement. */ const isHTMLForm = kindOfTest('HTMLFormElement');
const toCamelCase = (str)=>{
    return str.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function replacer(m, p1, p2) {
        return p1.toUpperCase() + p2;
    });
};
/* Creating a function that will check if an object has a property. */ const hasOwnProperty = (({ hasOwnProperty })=>(obj, prop)=>hasOwnProperty.call(obj, prop))(Object.prototype);
/**
 * Determine if a value is a RegExp object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a RegExp object, otherwise false
 */ const isRegExp = kindOfTest('RegExp');
const reduceDescriptors = (obj, reducer)=>{
    const descriptors = Object.getOwnPropertyDescriptors(obj);
    const reducedDescriptors = {};
    forEach(descriptors, (descriptor, name)=>{
        let ret;
        if ((ret = reducer(descriptor, name, obj)) !== false) {
            reducedDescriptors[name] = ret || descriptor;
        }
    });
    Object.defineProperties(obj, reducedDescriptors);
};
/**
 * Makes all methods read-only
 * @param {Object} obj
 */ const freezeMethods = (obj)=>{
    reduceDescriptors(obj, (descriptor, name)=>{
        // skip restricted props in strict mode
        if (isFunction(obj) && [
            'arguments',
            'caller',
            'callee'
        ].indexOf(name) !== -1) {
            return false;
        }
        const value = obj[name];
        if (!isFunction(value)) return;
        descriptor.enumerable = false;
        if ('writable' in descriptor) {
            descriptor.writable = false;
            return;
        }
        if (!descriptor.set) {
            descriptor.set = ()=>{
                throw Error('Can not rewrite read-only method \'' + name + '\'');
            };
        }
    });
};
const toObjectSet = (arrayOrString, delimiter)=>{
    const obj = {};
    const define = (arr)=>{
        arr.forEach((value)=>{
            obj[value] = true;
        });
    };
    isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));
    return obj;
};
const noop = ()=>{};
const toFiniteNumber = (value, defaultValue)=>{
    return value != null && Number.isFinite(value = +value) ? value : defaultValue;
};
const ALPHA = 'abcdefghijklmnopqrstuvwxyz';
const DIGIT = '0123456789';
const ALPHABET = {
    DIGIT,
    ALPHA,
    ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT
};
const generateString = (size = 16, alphabet = ALPHABET.ALPHA_DIGIT)=>{
    let str = '';
    const { length } = alphabet;
    while(size--){
        str += alphabet[Math.random() * length | 0];
    }
    return str;
};
/**
 * If the thing is a FormData object, return true, otherwise return false.
 *
 * @param {unknown} thing - The thing to check.
 *
 * @returns {boolean}
 */ function isSpecCompliantForm(thing) {
    return !!(thing && isFunction(thing.append) && thing[Symbol.toStringTag] === 'FormData' && thing[Symbol.iterator]);
}
const toJSONObject = (obj)=>{
    const stack = new Array(10);
    const visit = (source, i)=>{
        if (isObject(source)) {
            if (stack.indexOf(source) >= 0) {
                return;
            }
            if (!('toJSON' in source)) {
                stack[i] = source;
                const target = isArray(source) ? [] : {};
                forEach(source, (value, key)=>{
                    const reducedValue = visit(value, i + 1);
                    !isUndefined(reducedValue) && (target[key] = reducedValue);
                });
                stack[i] = undefined;
                return target;
            }
        }
        return source;
    };
    return visit(obj, 0);
};
const isAsyncFn = kindOfTest('AsyncFunction');
const isThenable = (thing)=>thing && (isObject(thing) || isFunction(thing)) && isFunction(thing.then) && isFunction(thing.catch);
// original code
// https://github.com/DigitalBrainJS/AxiosPromise/blob/16deab13710ec09779922131f3fa5954320f83ab/lib/utils.js#L11-L34
const _setImmediate = ((setImmediateSupported, postMessageSupported)=>{
    if (setImmediateSupported) {
        return setImmediate;
    }
    return postMessageSupported ? ((token, callbacks)=>{
        _global.addEventListener("message", ({ source, data })=>{
            if (source === _global && data === token) {
                callbacks.length && callbacks.shift()();
            }
        }, false);
        return (cb)=>{
            callbacks.push(cb);
            _global.postMessage(token, "*");
        };
    })(`axios@${Math.random()}`, []) : (cb)=>setTimeout(cb);
})(typeof setImmediate === 'function', isFunction(_global.postMessage));
const asap = typeof queueMicrotask !== 'undefined' ? queueMicrotask.bind(_global) : typeof process !== 'undefined' && process.nextTick || _setImmediate;
const __TURBOPACK__default__export__ = {
    isArray,
    isArrayBuffer,
    isBuffer,
    isFormData,
    isArrayBufferView,
    isString,
    isNumber,
    isBoolean,
    isObject,
    isPlainObject,
    isReadableStream,
    isRequest,
    isResponse,
    isHeaders,
    isUndefined,
    isDate,
    isFile,
    isBlob,
    isRegExp,
    isFunction,
    isStream,
    isURLSearchParams,
    isTypedArray,
    isFileList,
    forEach,
    merge,
    extend,
    trim,
    stripBOM,
    inherits,
    toFlatObject,
    kindOf,
    kindOfTest,
    endsWith,
    toArray,
    forEachEntry,
    matchAll,
    isHTMLForm,
    hasOwnProperty,
    hasOwnProp: hasOwnProperty,
    reduceDescriptors,
    freezeMethods,
    toObjectSet,
    toCamelCase,
    noop,
    toFiniteNumber,
    findKey,
    global: _global,
    isContextDefined,
    ALPHABET,
    generateString,
    isSpecCompliantForm,
    toJSONObject,
    isAsyncFn,
    isThenable,
    setImmediate: _setImmediate,
    asap
};

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/core/AxiosError.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/utils.js [middleware] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use strict';
;
/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [config] The config.
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 *
 * @returns {Error} The created error.
 */ function AxiosError(message, code, config, request, response) {
    Error.call(this);
    if (Error.captureStackTrace) {
        Error.captureStackTrace(this, this.constructor);
    } else {
        this.stack = new Error().stack;
    }
    this.message = message;
    this.name = 'AxiosError';
    code && (this.code = code);
    config && (this.config = config);
    request && (this.request = request);
    if (response) {
        this.response = response;
        this.status = response.status ? response.status : null;
    }
}
__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].inherits(AxiosError, Error, {
    toJSON: function toJSON() {
        return {
            // Standard
            message: this.message,
            name: this.name,
            // Microsoft
            description: this.description,
            number: this.number,
            // Mozilla
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            // Axios
            config: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].toJSONObject(this.config),
            code: this.code,
            status: this.status
        };
    }
});
const prototype = AxiosError.prototype;
const descriptors = {};
[
    'ERR_BAD_OPTION_VALUE',
    'ERR_BAD_OPTION',
    'ECONNABORTED',
    'ETIMEDOUT',
    'ERR_NETWORK',
    'ERR_FR_TOO_MANY_REDIRECTS',
    'ERR_DEPRECATED',
    'ERR_BAD_RESPONSE',
    'ERR_BAD_REQUEST',
    'ERR_CANCELED',
    'ERR_NOT_SUPPORT',
    'ERR_INVALID_URL'
].forEach((code)=>{
    descriptors[code] = {
        value: code
    };
});
Object.defineProperties(AxiosError, descriptors);
Object.defineProperty(prototype, 'isAxiosError', {
    value: true
});
// eslint-disable-next-line func-names
AxiosError.from = (error, code, config, request, response, customProps)=>{
    const axiosError = Object.create(prototype);
    __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].toFlatObject(error, axiosError, function filter(obj) {
        return obj !== Error.prototype;
    }, (prop)=>{
        return prop !== 'isAxiosError';
    });
    AxiosError.call(axiosError, error.message, code, config, request, response);
    axiosError.cause = error;
    axiosError.name = error.name;
    customProps && Object.assign(axiosError, customProps);
    return axiosError;
};
const __TURBOPACK__default__export__ = AxiosError;

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/helpers/null.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

// eslint-disable-next-line strict
__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
const __TURBOPACK__default__export__ = null;

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/helpers/toFormData.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/utils.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/core/AxiosError.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$null$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/helpers/null.js [middleware] (ecmascript)");
var __TURBOPACK__commonjs__external__node$3a$buffer__ = __turbopack_external_require__("node:buffer", true);
"__TURBOPACK__ecmascript__hoisting__location__";
'use strict';
;
;
;
/**
 * Determines if the given thing is a array or js object.
 *
 * @param {string} thing - The object or array to be visited.
 *
 * @returns {boolean}
 */ function isVisitable(thing) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].isPlainObject(thing) || __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].isArray(thing);
}
/**
 * It removes the brackets from the end of a string
 *
 * @param {string} key - The key of the parameter.
 *
 * @returns {string} the key without the brackets.
 */ function removeBrackets(key) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].endsWith(key, '[]') ? key.slice(0, -2) : key;
}
/**
 * It takes a path, a key, and a boolean, and returns a string
 *
 * @param {string} path - The path to the current key.
 * @param {string} key - The key of the current object being iterated over.
 * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
 *
 * @returns {string} The path to the current key.
 */ function renderKey(path, key, dots) {
    if (!path) return key;
    return path.concat(key).map(function each(token, i) {
        // eslint-disable-next-line no-param-reassign
        token = removeBrackets(token);
        return !dots && i ? '[' + token + ']' : token;
    }).join(dots ? '.' : '');
}
/**
 * If the array is an array and none of its elements are visitable, then it's a flat array.
 *
 * @param {Array<any>} arr - The array to check
 *
 * @returns {boolean}
 */ function isFlatArray(arr) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].isArray(arr) && !arr.some(isVisitable);
}
const predicates = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].toFlatObject(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"], {}, null, function filter(prop) {
    return /^is[A-Z]/.test(prop);
});
/**
 * Convert a data object to FormData
 *
 * @param {Object} obj
 * @param {?Object} [formData]
 * @param {?Object} [options]
 * @param {Function} [options.visitor]
 * @param {Boolean} [options.metaTokens = true]
 * @param {Boolean} [options.dots = false]
 * @param {?Boolean} [options.indexes = false]
 *
 * @returns {Object}
 **/ /**
 * It converts an object into a FormData object
 *
 * @param {Object<any, any>} obj - The object to convert to form data.
 * @param {string} formData - The FormData object to append to.
 * @param {Object<string, any>} options
 *
 * @returns
 */ function toFormData(obj, formData, options) {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].isObject(obj)) {
        throw new TypeError('target must be an object');
    }
    // eslint-disable-next-line no-param-reassign
    formData = formData || new (__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$null$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"] || FormData)();
    // eslint-disable-next-line no-param-reassign
    options = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].toFlatObject(options, {
        metaTokens: true,
        dots: false,
        indexes: false
    }, false, function defined(option, source) {
        // eslint-disable-next-line no-eq-null,eqeqeq
        return !__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].isUndefined(source[option]);
    });
    const metaTokens = options.metaTokens;
    // eslint-disable-next-line no-use-before-define
    const visitor = options.visitor || defaultVisitor;
    const dots = options.dots;
    const indexes = options.indexes;
    const _Blob = options.Blob || typeof Blob !== 'undefined' && Blob;
    const useBlob = _Blob && __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].isSpecCompliantForm(formData);
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].isFunction(visitor)) {
        throw new TypeError('visitor must be a function');
    }
    function convertValue(value) {
        if (value === null) return '';
        if (__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].isDate(value)) {
            return value.toISOString();
        }
        if (!useBlob && __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].isBlob(value)) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"]('Blob is not supported. Use a Buffer instead.');
        }
        if (__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].isArrayBuffer(value) || __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].isTypedArray(value)) {
            return useBlob && typeof Blob === 'function' ? new Blob([
                value
            ]) : __TURBOPACK__commonjs__external__node$3a$buffer__["Buffer"].from(value);
        }
        return value;
    }
    /**
   * Default visitor.
   *
   * @param {*} value
   * @param {String|Number} key
   * @param {Array<String|Number>} path
   * @this {FormData}
   *
   * @returns {boolean} return true to visit the each prop of the value recursively
   */ function defaultVisitor(value, key, path) {
        let arr = value;
        if (value && !path && typeof value === 'object') {
            if (__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].endsWith(key, '{}')) {
                // eslint-disable-next-line no-param-reassign
                key = metaTokens ? key : key.slice(0, -2);
                // eslint-disable-next-line no-param-reassign
                value = JSON.stringify(value);
            } else if (__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].isArray(value) && isFlatArray(value) || (__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].isFileList(value) || __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].endsWith(key, '[]')) && (arr = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].toArray(value))) {
                // eslint-disable-next-line no-param-reassign
                key = removeBrackets(key);
                arr.forEach(function each(el, index) {
                    !(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].isUndefined(el) || el === null) && formData.append(// eslint-disable-next-line no-nested-ternary
                    indexes === true ? renderKey([
                        key
                    ], index, dots) : indexes === null ? key : key + '[]', convertValue(el));
                });
                return false;
            }
        }
        if (isVisitable(value)) {
            return true;
        }
        formData.append(renderKey(path, key, dots), convertValue(value));
        return false;
    }
    const stack = [];
    const exposedHelpers = Object.assign(predicates, {
        defaultVisitor,
        convertValue,
        isVisitable
    });
    function build(value, path) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].isUndefined(value)) return;
        if (stack.indexOf(value) !== -1) {
            throw Error('Circular reference detected in ' + path.join('.'));
        }
        stack.push(value);
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].forEach(value, function each(el, key) {
            const result = !(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].isUndefined(el) || el === null) && visitor.call(formData, el, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].isString(key) ? key.trim() : key, path, exposedHelpers);
            if (result === true) {
                build(el, path ? path.concat(key) : [
                    key
                ]);
            }
        });
        stack.pop();
    }
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].isObject(obj)) {
        throw new TypeError('data must be an object');
    }
    build(obj);
    return formData;
}
const __TURBOPACK__default__export__ = toFormData;

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/helpers/AxiosURLSearchParams.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$toFormData$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/helpers/toFormData.js [middleware] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use strict';
;
/**
 * It encodes a string by replacing all characters that are not in the unreserved set with
 * their percent-encoded equivalents
 *
 * @param {string} str - The string to encode.
 *
 * @returns {string} The encoded string.
 */ function encode(str) {
    const charMap = {
        '!': '%21',
        "'": '%27',
        '(': '%28',
        ')': '%29',
        '~': '%7E',
        '%20': '+',
        '%00': '\x00'
    };
    return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
        return charMap[match];
    });
}
/**
 * It takes a params object and converts it to a FormData object
 *
 * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
 * @param {Object<string, any>} options - The options object passed to the Axios constructor.
 *
 * @returns {void}
 */ function AxiosURLSearchParams(params, options) {
    this._pairs = [];
    params && (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$toFormData$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"])(params, this, options);
}
const prototype = AxiosURLSearchParams.prototype;
prototype.append = function append(name, value) {
    this._pairs.push([
        name,
        value
    ]);
};
prototype.toString = function toString(encoder) {
    const _encode = encoder ? function(value) {
        return encoder.call(this, value, encode);
    } : encode;
    return this._pairs.map(function each(pair) {
        return _encode(pair[0]) + '=' + _encode(pair[1]);
    }, '').join('&');
};
const __TURBOPACK__default__export__ = AxiosURLSearchParams;

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/helpers/buildURL.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>buildURL
});
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/utils.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$AxiosURLSearchParams$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/helpers/AxiosURLSearchParams.js [middleware] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use strict';
;
;
/**
 * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
 * URI encoded counterparts
 *
 * @param {string} val The value to be encoded.
 *
 * @returns {string} The encoded value.
 */ function encode(val) {
    return encodeURIComponent(val).replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']');
}
function buildURL(url, params, options) {
    /*eslint no-param-reassign:0*/ if (!params) {
        return url;
    }
    const _encode = options && options.encode || encode;
    const serializeFn = options && options.serialize;
    let serializedParams;
    if (serializeFn) {
        serializedParams = serializeFn(params, options);
    } else {
        serializedParams = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].isURLSearchParams(params) ? params.toString() : new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$AxiosURLSearchParams$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"](params, options).toString(_encode);
    }
    if (serializedParams) {
        const hashmarkIndex = url.indexOf("#");
        if (hashmarkIndex !== -1) {
            url = url.slice(0, hashmarkIndex);
        }
        url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
    }
    return url;
}

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/core/InterceptorManager.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/utils.js [middleware] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use strict';
;
class InterceptorManager {
    constructor(){
        this.handlers = [];
    }
    /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */ use(fulfilled, rejected, options) {
        this.handlers.push({
            fulfilled,
            rejected,
            synchronous: options ? options.synchronous : false,
            runWhen: options ? options.runWhen : null
        });
        return this.handlers.length - 1;
    }
    /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */ eject(id) {
        if (this.handlers[id]) {
            this.handlers[id] = null;
        }
    }
    /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */ clear() {
        if (this.handlers) {
            this.handlers = [];
        }
    }
    /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */ forEach(fn) {
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].forEach(this.handlers, function forEachHandler(h) {
            if (h !== null) {
                fn(h);
            }
        });
    }
}
const __TURBOPACK__default__export__ = InterceptorManager;

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/defaults/transitional.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
'use strict';
const __TURBOPACK__default__export__ = {
    silentJSONParsing: true,
    forcedJSONParsing: true,
    clarifyTimeoutError: false
};

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/platform/browser/classes/URLSearchParams.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$AxiosURLSearchParams$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/helpers/AxiosURLSearchParams.js [middleware] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use strict';
;
const __TURBOPACK__default__export__ = typeof URLSearchParams !== 'undefined' ? URLSearchParams : __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$AxiosURLSearchParams$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"];

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/platform/browser/classes/FormData.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
'use strict';
const __TURBOPACK__default__export__ = typeof FormData !== 'undefined' ? FormData : null;

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/platform/browser/classes/Blob.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
'use strict';
const __TURBOPACK__default__export__ = typeof Blob !== 'undefined' ? Blob : null;

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/platform/browser/index.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$browser$2f$classes$2f$URLSearchParams$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/platform/browser/classes/URLSearchParams.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$browser$2f$classes$2f$FormData$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/platform/browser/classes/FormData.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$browser$2f$classes$2f$Blob$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/platform/browser/classes/Blob.js [middleware] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
const __TURBOPACK__default__export__ = {
    isBrowser: true,
    classes: {
        URLSearchParams: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$browser$2f$classes$2f$URLSearchParams$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"],
        FormData: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$browser$2f$classes$2f$FormData$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"],
        Blob: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$browser$2f$classes$2f$Blob$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"]
    },
    protocols: [
        'http',
        'https',
        'file',
        'blob',
        'url',
        'data'
    ]
};

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/platform/common/utils.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "hasBrowserEnv": ()=>hasBrowserEnv,
    "hasStandardBrowserEnv": ()=>hasStandardBrowserEnv,
    "hasStandardBrowserWebWorkerEnv": ()=>hasStandardBrowserWebWorkerEnv,
    "navigator": ()=>_navigator,
    "origin": ()=>origin
});
const hasBrowserEnv = typeof window !== 'undefined' && typeof document !== 'undefined';
const _navigator = typeof navigator === 'object' && navigator || undefined;
/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 *
 * @returns {boolean}
 */ const hasStandardBrowserEnv = hasBrowserEnv && (!_navigator || [
    'ReactNative',
    'NativeScript',
    'NS'
].indexOf(_navigator.product) < 0);
/**
 * Determine if we're running in a standard browser webWorker environment
 *
 * Although the `isStandardBrowserEnv` method indicates that
 * `allows axios to run in a web worker`, the WebWorker will still be
 * filtered out due to its judgment standard
 * `typeof window !== 'undefined' && typeof document !== 'undefined'`.
 * This leads to a problem when axios post `FormData` in webWorker
 */ const hasStandardBrowserWebWorkerEnv = (()=>{
    return typeof WorkerGlobalScope !== 'undefined' && // eslint-disable-next-line no-undef
    self instanceof WorkerGlobalScope && typeof self.importScripts === 'function';
})();
const origin = hasBrowserEnv && window.location.href || 'http://localhost';
;

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/platform/index.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$browser$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/platform/browser/index.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$common$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/platform/common/utils.js [middleware] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
const __TURBOPACK__default__export__ = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$common$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__,
    ...__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$browser$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"]
};

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/helpers/toURLEncodedForm.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>toURLEncodedForm
});
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/utils.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$toFormData$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/helpers/toFormData.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/platform/index.js [middleware] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use strict';
;
;
;
function toURLEncodedForm(data, options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$toFormData$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"])(data, new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].classes.URLSearchParams(), Object.assign({
        visitor: function(value, key, path, helpers) {
            if (__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].isNode && __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].isBuffer(value)) {
                this.append(key, value.toString('base64'));
                return false;
            }
            return helpers.defaultVisitor.apply(this, arguments);
        }
    }, options));
}

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/helpers/formDataToJSON.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/utils.js [middleware] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use strict';
;
/**
 * It takes a string like `foo[x][y][z]` and returns an array like `['foo', 'x', 'y', 'z']
 *
 * @param {string} name - The name of the property to get.
 *
 * @returns An array of strings.
 */ function parsePropPath(name) {
    // foo[x][y][z]
    // foo.x.y.z
    // foo-x-y-z
    // foo x y z
    return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].matchAll(/\w+|\[(\w*)]/g, name).map((match)=>{
        return match[0] === '[]' ? '' : match[1] || match[0];
    });
}
/**
 * Convert an array to an object.
 *
 * @param {Array<any>} arr - The array to convert to an object.
 *
 * @returns An object with the same keys and values as the array.
 */ function arrayToObject(arr) {
    const obj = {};
    const keys = Object.keys(arr);
    let i;
    const len = keys.length;
    let key;
    for(i = 0; i < len; i++){
        key = keys[i];
        obj[key] = arr[key];
    }
    return obj;
}
/**
 * It takes a FormData object and returns a JavaScript object
 *
 * @param {string} formData The FormData object to convert to JSON.
 *
 * @returns {Object<string, any> | null} The converted object.
 */ function formDataToJSON(formData) {
    function buildPath(path, value, target, index) {
        let name = path[index++];
        if (name === '__proto__') return true;
        const isNumericKey = Number.isFinite(+name);
        const isLast = index >= path.length;
        name = !name && __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].isArray(target) ? target.length : name;
        if (isLast) {
            if (__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].hasOwnProp(target, name)) {
                target[name] = [
                    target[name],
                    value
                ];
            } else {
                target[name] = value;
            }
            return !isNumericKey;
        }
        if (!target[name] || !__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].isObject(target[name])) {
            target[name] = [];
        }
        const result = buildPath(path, value, target[name], index);
        if (result && __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].isArray(target[name])) {
            target[name] = arrayToObject(target[name]);
        }
        return !isNumericKey;
    }
    if (__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].isFormData(formData) && __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].isFunction(formData.entries)) {
        const obj = {};
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].forEachEntry(formData, (name, value)=>{
            buildPath(parsePropPath(name), value, obj, 0);
        });
        return obj;
    }
    return null;
}
const __TURBOPACK__default__export__ = formDataToJSON;

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/defaults/index.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/utils.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/core/AxiosError.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$defaults$2f$transitional$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/defaults/transitional.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$toFormData$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/helpers/toFormData.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$toURLEncodedForm$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/helpers/toURLEncodedForm.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/platform/index.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$formDataToJSON$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/helpers/formDataToJSON.js [middleware] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use strict';
;
;
;
;
;
;
;
/**
 * It takes a string, tries to parse it, and if it fails, it returns the stringified version
 * of the input
 *
 * @param {any} rawValue - The value to be stringified.
 * @param {Function} parser - A function that parses a string into a JavaScript object.
 * @param {Function} encoder - A function that takes a value and returns a string.
 *
 * @returns {string} A stringified version of the rawValue.
 */ function stringifySafely(rawValue, parser, encoder) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].isString(rawValue)) {
        try {
            (parser || JSON.parse)(rawValue);
            return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].trim(rawValue);
        } catch (e) {
            if (e.name !== 'SyntaxError') {
                throw e;
            }
        }
    }
    return (encoder || JSON.stringify)(rawValue);
}
const defaults = {
    transitional: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$defaults$2f$transitional$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"],
    adapter: [
        'xhr',
        'http',
        'fetch'
    ],
    transformRequest: [
        function transformRequest(data, headers) {
            const contentType = headers.getContentType() || '';
            const hasJSONContentType = contentType.indexOf('application/json') > -1;
            const isObjectPayload = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].isObject(data);
            if (isObjectPayload && __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].isHTMLForm(data)) {
                data = new FormData(data);
            }
            const isFormData = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].isFormData(data);
            if (isFormData) {
                return hasJSONContentType ? JSON.stringify((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$formDataToJSON$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"])(data)) : data;
            }
            if (__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].isArrayBuffer(data) || __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].isBuffer(data) || __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].isStream(data) || __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].isFile(data) || __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].isBlob(data) || __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].isReadableStream(data)) {
                return data;
            }
            if (__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].isArrayBufferView(data)) {
                return data.buffer;
            }
            if (__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].isURLSearchParams(data)) {
                headers.setContentType('application/x-www-form-urlencoded;charset=utf-8', false);
                return data.toString();
            }
            let isFileList;
            if (isObjectPayload) {
                if (contentType.indexOf('application/x-www-form-urlencoded') > -1) {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$toURLEncodedForm$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"])(data, this.formSerializer).toString();
                }
                if ((isFileList = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].isFileList(data)) || contentType.indexOf('multipart/form-data') > -1) {
                    const _FormData = this.env && this.env.FormData;
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$toFormData$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"])(isFileList ? {
                        'files[]': data
                    } : data, _FormData && new _FormData(), this.formSerializer);
                }
            }
            if (isObjectPayload || hasJSONContentType) {
                headers.setContentType('application/json', false);
                return stringifySafely(data);
            }
            return data;
        }
    ],
    transformResponse: [
        function transformResponse(data) {
            const transitional = this.transitional || defaults.transitional;
            const forcedJSONParsing = transitional && transitional.forcedJSONParsing;
            const JSONRequested = this.responseType === 'json';
            if (__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].isResponse(data) || __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].isReadableStream(data)) {
                return data;
            }
            if (data && __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].isString(data) && (forcedJSONParsing && !this.responseType || JSONRequested)) {
                const silentJSONParsing = transitional && transitional.silentJSONParsing;
                const strictJSONParsing = !silentJSONParsing && JSONRequested;
                try {
                    return JSON.parse(data);
                } catch (e) {
                    if (strictJSONParsing) {
                        if (e.name === 'SyntaxError') {
                            throw __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].from(e, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].ERR_BAD_RESPONSE, this, null, this.response);
                        }
                        throw e;
                    }
                }
            }
            return data;
        }
    ],
    /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */ timeout: 0,
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
        FormData: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].classes.FormData,
        Blob: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].classes.Blob
    },
    validateStatus: function validateStatus(status) {
        return status >= 200 && status < 300;
    },
    headers: {
        common: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': undefined
        }
    }
};
__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].forEach([
    'delete',
    'get',
    'head',
    'post',
    'put',
    'patch'
], (method)=>{
    defaults.headers[method] = {};
});
const __TURBOPACK__default__export__ = defaults;

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/helpers/parseHeaders.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/utils.js [middleware] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use strict';
;
// RawAxiosHeaders whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
const ignoreDuplicateOf = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].toObjectSet([
    'age',
    'authorization',
    'content-length',
    'content-type',
    'etag',
    'expires',
    'from',
    'host',
    'if-modified-since',
    'if-unmodified-since',
    'last-modified',
    'location',
    'max-forwards',
    'proxy-authorization',
    'referer',
    'retry-after',
    'user-agent'
]);
const __TURBOPACK__default__export__ = (rawHeaders)=>{
    const parsed = {};
    let key;
    let val;
    let i;
    rawHeaders && rawHeaders.split('\n').forEach(function parser(line) {
        i = line.indexOf(':');
        key = line.substring(0, i).trim().toLowerCase();
        val = line.substring(i + 1).trim();
        if (!key || parsed[key] && ignoreDuplicateOf[key]) {
            return;
        }
        if (key === 'set-cookie') {
            if (parsed[key]) {
                parsed[key].push(val);
            } else {
                parsed[key] = [
                    val
                ];
            }
        } else {
            parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
        }
    });
    return parsed;
};

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/core/AxiosHeaders.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/utils.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$parseHeaders$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/helpers/parseHeaders.js [middleware] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use strict';
;
;
const $internals = Symbol('internals');
function normalizeHeader(header) {
    return header && String(header).trim().toLowerCase();
}
function normalizeValue(value) {
    if (value === false || value == null) {
        return value;
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].isArray(value) ? value.map(normalizeValue) : String(value);
}
function parseTokens(str) {
    const tokens = Object.create(null);
    const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let match;
    while(match = tokensRE.exec(str)){
        tokens[match[1]] = match[2];
    }
    return tokens;
}
const isValidHeaderName = (str)=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());
function matchHeaderValue(context, value, header, filter, isHeaderNameFilter) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].isFunction(filter)) {
        return filter.call(this, value, header);
    }
    if (isHeaderNameFilter) {
        value = header;
    }
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].isString(value)) return;
    if (__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].isString(filter)) {
        return value.indexOf(filter) !== -1;
    }
    if (__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].isRegExp(filter)) {
        return filter.test(value);
    }
}
function formatHeader(header) {
    return header.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str)=>{
        return char.toUpperCase() + str;
    });
}
function buildAccessors(obj, header) {
    const accessorName = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].toCamelCase(' ' + header);
    [
        'get',
        'set',
        'has'
    ].forEach((methodName)=>{
        Object.defineProperty(obj, methodName + accessorName, {
            value: function(arg1, arg2, arg3) {
                return this[methodName].call(this, header, arg1, arg2, arg3);
            },
            configurable: true
        });
    });
}
class AxiosHeaders {
    constructor(headers){
        headers && this.set(headers);
    }
    set(header, valueOrRewrite, rewrite) {
        const self = this;
        function setHeader(_value, _header, _rewrite) {
            const lHeader = normalizeHeader(_header);
            if (!lHeader) {
                throw new Error('header name must be a non-empty string');
            }
            const key = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].findKey(self, lHeader);
            if (!key || self[key] === undefined || _rewrite === true || _rewrite === undefined && self[key] !== false) {
                self[key || _header] = normalizeValue(_value);
            }
        }
        const setHeaders = (headers, _rewrite)=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].forEach(headers, (_value, _header)=>setHeader(_value, _header, _rewrite));
        if (__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].isPlainObject(header) || header instanceof this.constructor) {
            setHeaders(header, valueOrRewrite);
        } else if (__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
            setHeaders((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$parseHeaders$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"])(header), valueOrRewrite);
        } else if (__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].isHeaders(header)) {
            for (const [key, value] of header.entries()){
                setHeader(value, key, rewrite);
            }
        } else {
            header != null && setHeader(valueOrRewrite, header, rewrite);
        }
        return this;
    }
    get(header, parser) {
        header = normalizeHeader(header);
        if (header) {
            const key = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].findKey(this, header);
            if (key) {
                const value = this[key];
                if (!parser) {
                    return value;
                }
                if (parser === true) {
                    return parseTokens(value);
                }
                if (__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].isFunction(parser)) {
                    return parser.call(this, value, key);
                }
                if (__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].isRegExp(parser)) {
                    return parser.exec(value);
                }
                throw new TypeError('parser must be boolean|regexp|function');
            }
        }
    }
    has(header, matcher) {
        header = normalizeHeader(header);
        if (header) {
            const key = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].findKey(this, header);
            return !!(key && this[key] !== undefined && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
        }
        return false;
    }
    delete(header, matcher) {
        const self = this;
        let deleted = false;
        function deleteHeader(_header) {
            _header = normalizeHeader(_header);
            if (_header) {
                const key = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].findKey(self, _header);
                if (key && (!matcher || matchHeaderValue(self, self[key], key, matcher))) {
                    delete self[key];
                    deleted = true;
                }
            }
        }
        if (__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].isArray(header)) {
            header.forEach(deleteHeader);
        } else {
            deleteHeader(header);
        }
        return deleted;
    }
    clear(matcher) {
        const keys = Object.keys(this);
        let i = keys.length;
        let deleted = false;
        while(i--){
            const key = keys[i];
            if (!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
                delete this[key];
                deleted = true;
            }
        }
        return deleted;
    }
    normalize(format) {
        const self = this;
        const headers = {};
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].forEach(this, (value, header)=>{
            const key = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].findKey(headers, header);
            if (key) {
                self[key] = normalizeValue(value);
                delete self[header];
                return;
            }
            const normalized = format ? formatHeader(header) : String(header).trim();
            if (normalized !== header) {
                delete self[header];
            }
            self[normalized] = normalizeValue(value);
            headers[normalized] = true;
        });
        return this;
    }
    concat(...targets) {
        return this.constructor.concat(this, ...targets);
    }
    toJSON(asStrings) {
        const obj = Object.create(null);
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].forEach(this, (value, header)=>{
            value != null && value !== false && (obj[header] = asStrings && __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].isArray(value) ? value.join(', ') : value);
        });
        return obj;
    }
    [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]();
    }
    toString() {
        return Object.entries(this.toJSON()).map(([header, value])=>header + ': ' + value).join('\n');
    }
    get [Symbol.toStringTag]() {
        return 'AxiosHeaders';
    }
    static from(thing) {
        return thing instanceof this ? thing : new this(thing);
    }
    static concat(first, ...targets) {
        const computed = new this(first);
        targets.forEach((target)=>computed.set(target));
        return computed;
    }
    static accessor(header) {
        const internals = this[$internals] = this[$internals] = {
            accessors: {}
        };
        const accessors = internals.accessors;
        const prototype = this.prototype;
        function defineAccessor(_header) {
            const lHeader = normalizeHeader(_header);
            if (!accessors[lHeader]) {
                buildAccessors(prototype, _header);
                accessors[lHeader] = true;
            }
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);
        return this;
    }
}
AxiosHeaders.accessor([
    'Content-Type',
    'Content-Length',
    'Accept',
    'Accept-Encoding',
    'User-Agent',
    'Authorization'
]);
// reserved names hotfix
__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].reduceDescriptors(AxiosHeaders.prototype, ({ value }, key)=>{
    let mapped = key[0].toUpperCase() + key.slice(1); // map `set` => `Set`
    return {
        get: ()=>value,
        set (headerValue) {
            this[mapped] = headerValue;
        }
    };
});
__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].freezeMethods(AxiosHeaders);
const __TURBOPACK__default__export__ = AxiosHeaders;

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/core/transformData.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>transformData
});
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/utils.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$defaults$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/defaults/index.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosHeaders$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/core/AxiosHeaders.js [middleware] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use strict';
;
;
;
function transformData(fns, response) {
    const config = this || __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$defaults$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"];
    const context = response || config;
    const headers = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosHeaders$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].from(context.headers);
    let data = context.data;
    __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].forEach(fns, function transform(fn) {
        data = fn.call(config, data, headers.normalize(), response ? response.status : undefined);
    });
    headers.normalize();
    return data;
}

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/cancel/isCancel.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>isCancel
});
'use strict';
function isCancel(value) {
    return !!(value && value.__CANCEL__);
}

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/cancel/CanceledError.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/core/AxiosError.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/utils.js [middleware] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use strict';
;
;
/**
 * A `CanceledError` is an object that is thrown when an operation is canceled.
 *
 * @param {string=} message The message.
 * @param {Object=} config The config.
 * @param {Object=} request The request.
 *
 * @returns {CanceledError} The created error.
 */ function CanceledError(message, config, request) {
    // eslint-disable-next-line no-eq-null,eqeqeq
    __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].call(this, message == null ? 'canceled' : message, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].ERR_CANCELED, config, request);
    this.name = 'CanceledError';
}
__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].inherits(CanceledError, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"], {
    __CANCEL__: true
});
const __TURBOPACK__default__export__ = CanceledError;

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/core/settle.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>settle
});
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/core/AxiosError.js [middleware] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use strict';
;
function settle(resolve, reject, response) {
    const validateStatus = response.config.validateStatus;
    if (!response.status || !validateStatus || validateStatus(response.status)) {
        resolve(response);
    } else {
        reject(new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"]('Request failed with status code ' + response.status, [
            __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].ERR_BAD_REQUEST,
            __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].ERR_BAD_RESPONSE
        ][Math.floor(response.status / 100) - 4], response.config, response.request, response));
    }
}

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/helpers/parseProtocol.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>parseProtocol
});
'use strict';
function parseProtocol(url) {
    const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
    return match && match[1] || '';
}

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/helpers/speedometer.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
'use strict';
/**
 * Calculate data maxRate
 * @param {Number} [samplesCount= 10]
 * @param {Number} [min= 1000]
 * @returns {Function}
 */ function speedometer(samplesCount, min) {
    samplesCount = samplesCount || 10;
    const bytes = new Array(samplesCount);
    const timestamps = new Array(samplesCount);
    let head = 0;
    let tail = 0;
    let firstSampleTS;
    min = min !== undefined ? min : 1000;
    return function push(chunkLength) {
        const now = Date.now();
        const startedAt = timestamps[tail];
        if (!firstSampleTS) {
            firstSampleTS = now;
        }
        bytes[head] = chunkLength;
        timestamps[head] = now;
        let i = tail;
        let bytesCount = 0;
        while(i !== head){
            bytesCount += bytes[i++];
            i = i % samplesCount;
        }
        head = (head + 1) % samplesCount;
        if (head === tail) {
            tail = (tail + 1) % samplesCount;
        }
        if (now - firstSampleTS < min) {
            return;
        }
        const passed = startedAt && now - startedAt;
        return passed ? Math.round(bytesCount * 1000 / passed) : undefined;
    };
}
const __TURBOPACK__default__export__ = speedometer;

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/helpers/throttle.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

/**
 * Throttle decorator
 * @param {Function} fn
 * @param {Number} freq
 * @return {Function}
 */ __turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
function throttle(fn, freq) {
    let timestamp = 0;
    let threshold = 1000 / freq;
    let lastArgs;
    let timer;
    const invoke = (args, now = Date.now())=>{
        timestamp = now;
        lastArgs = null;
        if (timer) {
            clearTimeout(timer);
            timer = null;
        }
        fn.apply(null, args);
    };
    const throttled = (...args)=>{
        const now = Date.now();
        const passed = now - timestamp;
        if (passed >= threshold) {
            invoke(args, now);
        } else {
            lastArgs = args;
            if (!timer) {
                timer = setTimeout(()=>{
                    timer = null;
                    invoke(lastArgs);
                }, threshold - passed);
            }
        }
    };
    const flush = ()=>lastArgs && invoke(lastArgs);
    return [
        throttled,
        flush
    ];
}
const __TURBOPACK__default__export__ = throttle;

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/helpers/progressEventReducer.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "asyncDecorator": ()=>asyncDecorator,
    "progressEventDecorator": ()=>progressEventDecorator,
    "progressEventReducer": ()=>progressEventReducer
});
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$speedometer$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/helpers/speedometer.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$throttle$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/helpers/throttle.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/utils.js [middleware] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
const progressEventReducer = (listener, isDownloadStream, freq = 3)=>{
    let bytesNotified = 0;
    const _speedometer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$speedometer$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"])(50, 250);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$throttle$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"])((e)=>{
        const loaded = e.loaded;
        const total = e.lengthComputable ? e.total : undefined;
        const progressBytes = loaded - bytesNotified;
        const rate = _speedometer(progressBytes);
        const inRange = loaded <= total;
        bytesNotified = loaded;
        const data = {
            loaded,
            total,
            progress: total ? loaded / total : undefined,
            bytes: progressBytes,
            rate: rate ? rate : undefined,
            estimated: rate && total && inRange ? (total - loaded) / rate : undefined,
            event: e,
            lengthComputable: total != null,
            [isDownloadStream ? 'download' : 'upload']: true
        };
        listener(data);
    }, freq);
};
const progressEventDecorator = (total, throttled)=>{
    const lengthComputable = total != null;
    return [
        (loaded)=>throttled[0]({
                lengthComputable,
                total,
                loaded
            }),
        throttled[1]
    ];
};
const asyncDecorator = (fn)=>(...args)=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].asap(()=>fn(...args));

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/helpers/isURLSameOrigin.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/utils.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/platform/index.js [middleware] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use strict';
;
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].hasStandardBrowserEnv ? // Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
function standardBrowserEnv() {
    const msie = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].navigator && /(msie|trident)/i.test(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].navigator.userAgent);
    const urlParsingNode = document.createElement('a');
    let originURL;
    /**
    * Parse a URL to discover its components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */ function resolveURL(url) {
        let href = url;
        if (msie) {
            // IE needs attribute set twice to normalize properties
            urlParsingNode.setAttribute('href', href);
            href = urlParsingNode.href;
        }
        urlParsingNode.setAttribute('href', href);
        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
            href: urlParsingNode.href,
            protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
            host: urlParsingNode.host,
            search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
            hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
            hostname: urlParsingNode.hostname,
            port: urlParsingNode.port,
            pathname: urlParsingNode.pathname.charAt(0) === '/' ? urlParsingNode.pathname : '/' + urlParsingNode.pathname
        };
    }
    originURL = resolveURL(window.location.href);
    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */ return function isURLSameOrigin(requestURL) {
        const parsed = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].isString(requestURL) ? resolveURL(requestURL) : requestURL;
        return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
    };
}() : // Non standard browser envs (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
        return true;
    };
}();

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/helpers/cookies.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/utils.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/platform/index.js [middleware] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].hasStandardBrowserEnv ? // Standard browser envs support document.cookie
{
    write (name, value, expires, path, domain, secure) {
        const cookie = [
            name + '=' + encodeURIComponent(value)
        ];
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].isNumber(expires) && cookie.push('expires=' + new Date(expires).toGMTString());
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].isString(path) && cookie.push('path=' + path);
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].isString(domain) && cookie.push('domain=' + domain);
        secure === true && cookie.push('secure');
        document.cookie = cookie.join('; ');
    },
    read (name) {
        const match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return match ? decodeURIComponent(match[3]) : null;
    },
    remove (name) {
        this.write(name, '', Date.now() - 86400000);
    }
} : // Non-standard browser env (web workers, react-native) lack needed support.
{
    write () {},
    read () {
        return null;
    },
    remove () {}
};

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/helpers/isAbsoluteURL.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>isAbsoluteURL
});
'use strict';
function isAbsoluteURL(url) {
    // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
    // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
    // by any combination of letters, digits, plus, period, or hyphen.
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/helpers/combineURLs.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>combineURLs
});
'use strict';
function combineURLs(baseURL, relativeURL) {
    return relativeURL ? baseURL.replace(/\/?\/$/, '') + '/' + relativeURL.replace(/^\/+/, '') : baseURL;
}

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/core/buildFullPath.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>buildFullPath
});
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$isAbsoluteURL$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/helpers/isAbsoluteURL.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$combineURLs$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/helpers/combineURLs.js [middleware] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use strict';
;
;
function buildFullPath(baseURL, requestedURL) {
    if (baseURL && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$isAbsoluteURL$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"])(requestedURL)) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$combineURLs$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"])(baseURL, requestedURL);
    }
    return requestedURL;
}

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/core/mergeConfig.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>mergeConfig
});
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/utils.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosHeaders$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/core/AxiosHeaders.js [middleware] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use strict';
;
;
const headersToObject = (thing)=>thing instanceof __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosHeaders$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"] ? {
        ...thing
    } : thing;
function mergeConfig(config1, config2) {
    // eslint-disable-next-line no-param-reassign
    config2 = config2 || {};
    const config = {};
    function getMergedValue(target, source, caseless) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].isPlainObject(target) && __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].isPlainObject(source)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].merge.call({
                caseless
            }, target, source);
        } else if (__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].isPlainObject(source)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].merge({}, source);
        } else if (__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].isArray(source)) {
            return source.slice();
        }
        return source;
    }
    // eslint-disable-next-line consistent-return
    function mergeDeepProperties(a, b, caseless) {
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].isUndefined(b)) {
            return getMergedValue(a, b, caseless);
        } else if (!__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].isUndefined(a)) {
            return getMergedValue(undefined, a, caseless);
        }
    }
    // eslint-disable-next-line consistent-return
    function valueFromConfig2(a, b) {
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].isUndefined(b)) {
            return getMergedValue(undefined, b);
        }
    }
    // eslint-disable-next-line consistent-return
    function defaultToConfig2(a, b) {
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].isUndefined(b)) {
            return getMergedValue(undefined, b);
        } else if (!__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].isUndefined(a)) {
            return getMergedValue(undefined, a);
        }
    }
    // eslint-disable-next-line consistent-return
    function mergeDirectKeys(a, b, prop) {
        if (prop in config2) {
            return getMergedValue(a, b);
        } else if (prop in config1) {
            return getMergedValue(undefined, a);
        }
    }
    const mergeMap = {
        url: valueFromConfig2,
        method: valueFromConfig2,
        data: valueFromConfig2,
        baseURL: defaultToConfig2,
        transformRequest: defaultToConfig2,
        transformResponse: defaultToConfig2,
        paramsSerializer: defaultToConfig2,
        timeout: defaultToConfig2,
        timeoutMessage: defaultToConfig2,
        withCredentials: defaultToConfig2,
        withXSRFToken: defaultToConfig2,
        adapter: defaultToConfig2,
        responseType: defaultToConfig2,
        xsrfCookieName: defaultToConfig2,
        xsrfHeaderName: defaultToConfig2,
        onUploadProgress: defaultToConfig2,
        onDownloadProgress: defaultToConfig2,
        decompress: defaultToConfig2,
        maxContentLength: defaultToConfig2,
        maxBodyLength: defaultToConfig2,
        beforeRedirect: defaultToConfig2,
        transport: defaultToConfig2,
        httpAgent: defaultToConfig2,
        httpsAgent: defaultToConfig2,
        cancelToken: defaultToConfig2,
        socketPath: defaultToConfig2,
        responseEncoding: defaultToConfig2,
        validateStatus: mergeDirectKeys,
        headers: (a, b)=>mergeDeepProperties(headersToObject(a), headersToObject(b), true)
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].forEach(Object.keys(Object.assign({}, config1, config2)), function computeConfigValue(prop) {
        const merge = mergeMap[prop] || mergeDeepProperties;
        const configValue = merge(config1[prop], config2[prop], prop);
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].isUndefined(configValue) && merge !== mergeDirectKeys || (config[prop] = configValue);
    });
    return config;
}

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/helpers/resolveConfig.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/platform/index.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/utils.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$isURLSameOrigin$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/helpers/isURLSameOrigin.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$cookies$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/helpers/cookies.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$core$2f$buildFullPath$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/core/buildFullPath.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$core$2f$mergeConfig$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/core/mergeConfig.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosHeaders$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/core/AxiosHeaders.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$buildURL$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/helpers/buildURL.js [middleware] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
;
;
const __TURBOPACK__default__export__ = (config)=>{
    const newConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$core$2f$mergeConfig$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"])({}, config);
    let { data, withXSRFToken, xsrfHeaderName, xsrfCookieName, headers, auth } = newConfig;
    newConfig.headers = headers = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosHeaders$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].from(headers);
    newConfig.url = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$buildURL$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$core$2f$buildFullPath$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"])(newConfig.baseURL, newConfig.url), config.params, config.paramsSerializer);
    // HTTP basic authentication
    if (auth) {
        headers.set('Authorization', 'Basic ' + btoa((auth.username || '') + ':' + (auth.password ? unescape(encodeURIComponent(auth.password)) : '')));
    }
    let contentType;
    if (__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].isFormData(data)) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].hasStandardBrowserEnv || __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].hasStandardBrowserWebWorkerEnv) {
            headers.setContentType(undefined); // Let the browser set it
        } else if ((contentType = headers.getContentType()) !== false) {
            // fix semicolon duplication issue for ReactNative FormData implementation
            const [type, ...tokens] = contentType ? contentType.split(';').map((token)=>token.trim()).filter(Boolean) : [];
            headers.setContentType([
                type || 'multipart/form-data',
                ...tokens
            ].join('; '));
        }
    }
    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].hasStandardBrowserEnv) {
        withXSRFToken && __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].isFunction(withXSRFToken) && (withXSRFToken = withXSRFToken(newConfig));
        if (withXSRFToken || withXSRFToken !== false && (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$isURLSameOrigin$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"])(newConfig.url)) {
            // Add xsrf header
            const xsrfValue = xsrfHeaderName && xsrfCookieName && __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$cookies$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].read(xsrfCookieName);
            if (xsrfValue) {
                headers.set(xsrfHeaderName, xsrfValue);
            }
        }
    }
    return newConfig;
};

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/adapters/xhr.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/utils.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$core$2f$settle$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/core/settle.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$defaults$2f$transitional$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/defaults/transitional.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/core/AxiosError.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$cancel$2f$CanceledError$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/cancel/CanceledError.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$parseProtocol$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/helpers/parseProtocol.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/platform/index.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosHeaders$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/core/AxiosHeaders.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$progressEventReducer$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/helpers/progressEventReducer.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$resolveConfig$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/helpers/resolveConfig.js [middleware] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
;
;
;
;
const isXHRAdapterSupported = typeof XMLHttpRequest !== 'undefined';
const __TURBOPACK__default__export__ = isXHRAdapterSupported && function(config) {
    return new Promise(function dispatchXhrRequest(resolve, reject) {
        const _config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$resolveConfig$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"])(config);
        let requestData = _config.data;
        const requestHeaders = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosHeaders$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].from(_config.headers).normalize();
        let { responseType, onUploadProgress, onDownloadProgress } = _config;
        let onCanceled;
        let uploadThrottled, downloadThrottled;
        let flushUpload, flushDownload;
        function done() {
            flushUpload && flushUpload(); // flush events
            flushDownload && flushDownload(); // flush events
            _config.cancelToken && _config.cancelToken.unsubscribe(onCanceled);
            _config.signal && _config.signal.removeEventListener('abort', onCanceled);
        }
        let request = new XMLHttpRequest();
        request.open(_config.method.toUpperCase(), _config.url, true);
        // Set the request timeout in MS
        request.timeout = _config.timeout;
        function onloadend() {
            if (!request) {
                return;
            }
            // Prepare the response
            const responseHeaders = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosHeaders$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].from('getAllResponseHeaders' in request && request.getAllResponseHeaders());
            const responseData = !responseType || responseType === 'text' || responseType === 'json' ? request.responseText : request.response;
            const response = {
                data: responseData,
                status: request.status,
                statusText: request.statusText,
                headers: responseHeaders,
                config,
                request
            };
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$core$2f$settle$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"])(function _resolve(value) {
                resolve(value);
                done();
            }, function _reject(err) {
                reject(err);
                done();
            }, response);
            // Clean up request
            request = null;
        }
        if ('onloadend' in request) {
            // Use onloadend if available
            request.onloadend = onloadend;
        } else {
            // Listen for ready state to emulate onloadend
            request.onreadystatechange = function handleLoad() {
                if (!request || request.readyState !== 4) {
                    return;
                }
                // The request errored out and we didn't get a response, this will be
                // handled by onerror instead
                // With one exception: request that using file: protocol, most browsers
                // will return status as 0 even though it's a successful request
                if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
                    return;
                }
                // readystate handler is calling before onerror or ontimeout handlers,
                // so we should call onloadend on the next 'tick'
                setTimeout(onloadend);
            };
        }
        // Handle browser request cancellation (as opposed to a manual cancellation)
        request.onabort = function handleAbort() {
            if (!request) {
                return;
            }
            reject(new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"]('Request aborted', __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].ECONNABORTED, config, request));
            // Clean up request
            request = null;
        };
        // Handle low level network errors
        request.onerror = function handleError() {
            // Real errors are hidden from us by the browser
            // onerror should only fire if it's a network error
            reject(new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"]('Network Error', __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].ERR_NETWORK, config, request));
            // Clean up request
            request = null;
        };
        // Handle timeout
        request.ontimeout = function handleTimeout() {
            let timeoutErrorMessage = _config.timeout ? 'timeout of ' + _config.timeout + 'ms exceeded' : 'timeout exceeded';
            const transitional = _config.transitional || __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$defaults$2f$transitional$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"];
            if (_config.timeoutErrorMessage) {
                timeoutErrorMessage = _config.timeoutErrorMessage;
            }
            reject(new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"](timeoutErrorMessage, transitional.clarifyTimeoutError ? __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].ETIMEDOUT : __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].ECONNABORTED, config, request));
            // Clean up request
            request = null;
        };
        // Remove Content-Type if data is undefined
        requestData === undefined && requestHeaders.setContentType(null);
        // Add headers to the request
        if ('setRequestHeader' in request) {
            __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
                request.setRequestHeader(key, val);
            });
        }
        // Add withCredentials to request if needed
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].isUndefined(_config.withCredentials)) {
            request.withCredentials = !!_config.withCredentials;
        }
        // Add responseType to request if needed
        if (responseType && responseType !== 'json') {
            request.responseType = _config.responseType;
        }
        // Handle progress if needed
        if (onDownloadProgress) {
            [downloadThrottled, flushDownload] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$progressEventReducer$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["progressEventReducer"])(onDownloadProgress, true);
            request.addEventListener('progress', downloadThrottled);
        }
        // Not all browsers support upload events
        if (onUploadProgress && request.upload) {
            [uploadThrottled, flushUpload] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$progressEventReducer$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["progressEventReducer"])(onUploadProgress);
            request.upload.addEventListener('progress', uploadThrottled);
            request.upload.addEventListener('loadend', flushUpload);
        }
        if (_config.cancelToken || _config.signal) {
            // Handle cancellation
            // eslint-disable-next-line func-names
            onCanceled = (cancel)=>{
                if (!request) {
                    return;
                }
                reject(!cancel || cancel.type ? new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$cancel$2f$CanceledError$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"](null, config, request) : cancel);
                request.abort();
                request = null;
            };
            _config.cancelToken && _config.cancelToken.subscribe(onCanceled);
            if (_config.signal) {
                _config.signal.aborted ? onCanceled() : _config.signal.addEventListener('abort', onCanceled);
            }
        }
        const protocol = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$parseProtocol$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"])(_config.url);
        if (protocol && __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].protocols.indexOf(protocol) === -1) {
            reject(new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"]('Unsupported protocol ' + protocol + ':', __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].ERR_BAD_REQUEST, config));
            return;
        }
        // Send the request
        request.send(requestData || null);
    });
};

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/helpers/composeSignals.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$cancel$2f$CanceledError$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/cancel/CanceledError.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/core/AxiosError.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/utils.js [middleware] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
const composeSignals = (signals, timeout)=>{
    const { length } = signals = signals ? signals.filter(Boolean) : [];
    if (timeout || length) {
        let controller = new AbortController();
        let aborted;
        const onabort = function(reason) {
            if (!aborted) {
                aborted = true;
                unsubscribe();
                const err = reason instanceof Error ? reason : this.reason;
                controller.abort(err instanceof __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"] ? err : new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$cancel$2f$CanceledError$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"](err instanceof Error ? err.message : err));
            }
        };
        let timer = timeout && setTimeout(()=>{
            timer = null;
            onabort(new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"](`timeout ${timeout} of ms exceeded`, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].ETIMEDOUT));
        }, timeout);
        const unsubscribe = ()=>{
            if (signals) {
                timer && clearTimeout(timer);
                timer = null;
                signals.forEach((signal)=>{
                    signal.unsubscribe ? signal.unsubscribe(onabort) : signal.removeEventListener('abort', onabort);
                });
                signals = null;
            }
        };
        signals.forEach((signal)=>signal.addEventListener('abort', onabort));
        const { signal } = controller;
        signal.unsubscribe = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].asap(unsubscribe);
        return signal;
    }
};
const __TURBOPACK__default__export__ = composeSignals;

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/helpers/trackStream.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "readBytes": ()=>readBytes,
    "streamChunk": ()=>streamChunk,
    "trackStream": ()=>trackStream
});
const streamChunk = function*(chunk, chunkSize) {
    let len = chunk.byteLength;
    if (!chunkSize || len < chunkSize) {
        yield chunk;
        return;
    }
    let pos = 0;
    let end;
    while(pos < len){
        end = pos + chunkSize;
        yield chunk.slice(pos, end);
        pos = end;
    }
};
const readBytes = async function*(iterable, chunkSize) {
    for await (const chunk of readStream(iterable)){
        yield* streamChunk(chunk, chunkSize);
    }
};
const readStream = async function*(stream) {
    if (stream[Symbol.asyncIterator]) {
        yield* stream;
        return;
    }
    const reader = stream.getReader();
    try {
        for(;;){
            const { done, value } = await reader.read();
            if (done) {
                break;
            }
            yield value;
        }
    } finally{
        await reader.cancel();
    }
};
const trackStream = (stream, chunkSize, onProgress, onFinish)=>{
    const iterator = readBytes(stream, chunkSize);
    let bytes = 0;
    let done;
    let _onFinish = (e)=>{
        if (!done) {
            done = true;
            onFinish && onFinish(e);
        }
    };
    return new ReadableStream({
        async pull (controller) {
            try {
                const { done, value } = await iterator.next();
                if (done) {
                    _onFinish();
                    controller.close();
                    return;
                }
                let len = value.byteLength;
                if (onProgress) {
                    let loadedBytes = bytes += len;
                    onProgress(loadedBytes);
                }
                controller.enqueue(new Uint8Array(value));
            } catch (err) {
                _onFinish(err);
                throw err;
            }
        },
        cancel (reason) {
            _onFinish(reason);
            return iterator.return();
        }
    }, {
        highWaterMark: 2
    });
};

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/adapters/fetch.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/platform/index.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/utils.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/core/AxiosError.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$composeSignals$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/helpers/composeSignals.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$trackStream$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/helpers/trackStream.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosHeaders$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/core/AxiosHeaders.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$progressEventReducer$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/helpers/progressEventReducer.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$resolveConfig$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/helpers/resolveConfig.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$core$2f$settle$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/core/settle.js [middleware] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
;
;
;
const isFetchSupported = typeof fetch === 'function' && typeof Request === 'function' && typeof Response === 'function';
const isReadableStreamSupported = isFetchSupported && typeof ReadableStream === 'function';
// used only inside the fetch adapter
const encodeText = isFetchSupported && (typeof TextEncoder === 'function' ? ((encoder)=>(str)=>encoder.encode(str))(new TextEncoder()) : async (str)=>new Uint8Array(await new Response(str).arrayBuffer()));
const test = (fn, ...args)=>{
    try {
        return !!fn(...args);
    } catch (e) {
        return false;
    }
};
const supportsRequestStream = isReadableStreamSupported && test(()=>{
    let duplexAccessed = false;
    const hasContentType = new Request(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].origin, {
        body: new ReadableStream(),
        method: 'POST',
        get duplex () {
            duplexAccessed = true;
            return 'half';
        }
    }).headers.has('Content-Type');
    return duplexAccessed && !hasContentType;
});
const DEFAULT_CHUNK_SIZE = 64 * 1024;
const supportsResponseStream = isReadableStreamSupported && test(()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].isReadableStream(new Response('').body));
const resolvers = {
    stream: supportsResponseStream && ((res)=>res.body)
};
isFetchSupported && ((res)=>{
    [
        'text',
        'arrayBuffer',
        'blob',
        'formData',
        'stream'
    ].forEach((type)=>{
        !resolvers[type] && (resolvers[type] = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].isFunction(res[type]) ? (res)=>res[type]() : (_, config)=>{
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"](`Response type '${type}' is not supported`, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].ERR_NOT_SUPPORT, config);
        });
    });
})(new Response);
const getBodyLength = async (body)=>{
    if (body == null) {
        return 0;
    }
    if (__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].isBlob(body)) {
        return body.size;
    }
    if (__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].isSpecCompliantForm(body)) {
        const _request = new Request(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$platform$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].origin, {
            method: 'POST',
            body
        });
        return (await _request.arrayBuffer()).byteLength;
    }
    if (__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].isArrayBufferView(body) || __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].isArrayBuffer(body)) {
        return body.byteLength;
    }
    if (__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].isURLSearchParams(body)) {
        body = body + '';
    }
    if (__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].isString(body)) {
        return (await encodeText(body)).byteLength;
    }
};
const resolveBodyLength = async (headers, body)=>{
    const length = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].toFiniteNumber(headers.getContentLength());
    return length == null ? getBodyLength(body) : length;
};
const __TURBOPACK__default__export__ = isFetchSupported && (async (config)=>{
    let { url, method, data, signal, cancelToken, timeout, onDownloadProgress, onUploadProgress, responseType, headers, withCredentials = 'same-origin', fetchOptions } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$resolveConfig$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"])(config);
    responseType = responseType ? (responseType + '').toLowerCase() : 'text';
    let composedSignal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$composeSignals$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"])([
        signal,
        cancelToken && cancelToken.toAbortSignal()
    ], timeout);
    let request;
    const unsubscribe = composedSignal && composedSignal.unsubscribe && (()=>{
        composedSignal.unsubscribe();
    });
    let requestContentLength;
    try {
        if (onUploadProgress && supportsRequestStream && method !== 'get' && method !== 'head' && (requestContentLength = await resolveBodyLength(headers, data)) !== 0) {
            let _request = new Request(url, {
                method: 'POST',
                body: data,
                duplex: "half"
            });
            let contentTypeHeader;
            if (__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].isFormData(data) && (contentTypeHeader = _request.headers.get('content-type'))) {
                headers.setContentType(contentTypeHeader);
            }
            if (_request.body) {
                const [onProgress, flush] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$progressEventReducer$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["progressEventDecorator"])(requestContentLength, (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$progressEventReducer$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["progressEventReducer"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$progressEventReducer$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["asyncDecorator"])(onUploadProgress)));
                data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$trackStream$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["trackStream"])(_request.body, DEFAULT_CHUNK_SIZE, onProgress, flush);
            }
        }
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].isString(withCredentials)) {
            withCredentials = withCredentials ? 'include' : 'omit';
        }
        // Cloudflare Workers throws when credentials are defined
        // see https://github.com/cloudflare/workerd/issues/902
        const isCredentialsSupported = "credentials" in Request.prototype;
        request = new Request(url, {
            ...fetchOptions,
            signal: composedSignal,
            method: method.toUpperCase(),
            headers: headers.normalize().toJSON(),
            body: data,
            duplex: "half",
            credentials: isCredentialsSupported ? withCredentials : undefined
        });
        let response = await fetch(request);
        const isStreamResponse = supportsResponseStream && (responseType === 'stream' || responseType === 'response');
        if (supportsResponseStream && (onDownloadProgress || isStreamResponse && unsubscribe)) {
            const options = {};
            [
                'status',
                'statusText',
                'headers'
            ].forEach((prop)=>{
                options[prop] = response[prop];
            });
            const responseContentLength = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].toFiniteNumber(response.headers.get('content-length'));
            const [onProgress, flush] = onDownloadProgress && (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$progressEventReducer$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["progressEventDecorator"])(responseContentLength, (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$progressEventReducer$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["progressEventReducer"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$progressEventReducer$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["asyncDecorator"])(onDownloadProgress), true)) || [];
            response = new Response((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$trackStream$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["trackStream"])(response.body, DEFAULT_CHUNK_SIZE, onProgress, ()=>{
                flush && flush();
                unsubscribe && unsubscribe();
            }), options);
        }
        responseType = responseType || 'text';
        let responseData = await resolvers[__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].findKey(resolvers, responseType) || 'text'](response, config);
        !isStreamResponse && unsubscribe && unsubscribe();
        return await new Promise((resolve, reject)=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$core$2f$settle$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"])(resolve, reject, {
                data: responseData,
                headers: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosHeaders$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].from(response.headers),
                status: response.status,
                statusText: response.statusText,
                config,
                request
            });
        });
    } catch (err) {
        unsubscribe && unsubscribe();
        if (err && err.name === 'TypeError' && /fetch/i.test(err.message)) {
            throw Object.assign(new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"]('Network Error', __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].ERR_NETWORK, config, request), {
                cause: err.cause || err
            });
        }
        throw __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].from(err, err && err.code, config, request);
    }
});

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/adapters/adapters.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/utils.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$null$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/helpers/null.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$adapters$2f$xhr$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/adapters/xhr.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$adapters$2f$fetch$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/adapters/fetch.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/core/AxiosError.js [middleware] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
const knownAdapters = {
    http: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$null$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"],
    xhr: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$adapters$2f$xhr$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"],
    fetch: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$adapters$2f$fetch$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"]
};
__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].forEach(knownAdapters, (fn, value)=>{
    if (fn) {
        try {
            Object.defineProperty(fn, 'name', {
                value
            });
        } catch (e) {
        // eslint-disable-next-line no-empty
        }
        Object.defineProperty(fn, 'adapterName', {
            value
        });
    }
});
const renderReason = (reason)=>`- ${reason}`;
const isResolvedHandle = (adapter)=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].isFunction(adapter) || adapter === null || adapter === false;
const __TURBOPACK__default__export__ = {
    getAdapter: (adapters)=>{
        adapters = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].isArray(adapters) ? adapters : [
            adapters
        ];
        const { length } = adapters;
        let nameOrAdapter;
        let adapter;
        const rejectedReasons = {};
        for(let i = 0; i < length; i++){
            nameOrAdapter = adapters[i];
            let id;
            adapter = nameOrAdapter;
            if (!isResolvedHandle(nameOrAdapter)) {
                adapter = knownAdapters[(id = String(nameOrAdapter)).toLowerCase()];
                if (adapter === undefined) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"](`Unknown adapter '${id}'`);
                }
            }
            if (adapter) {
                break;
            }
            rejectedReasons[id || '#' + i] = adapter;
        }
        if (!adapter) {
            const reasons = Object.entries(rejectedReasons).map(([id, state])=>`adapter ${id} ` + (state === false ? 'is not supported by the environment' : 'is not available in the build'));
            let s = length ? reasons.length > 1 ? 'since :\n' + reasons.map(renderReason).join('\n') : ' ' + renderReason(reasons[0]) : 'as no adapter specified';
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"](`There is no suitable adapter to dispatch the request ` + s, 'ERR_NOT_SUPPORT');
        }
        return adapter;
    },
    adapters: knownAdapters
};

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/core/dispatchRequest.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>dispatchRequest
});
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$core$2f$transformData$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/core/transformData.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$cancel$2f$isCancel$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/cancel/isCancel.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$defaults$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/defaults/index.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$cancel$2f$CanceledError$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/cancel/CanceledError.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosHeaders$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/core/AxiosHeaders.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$adapters$2f$adapters$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/adapters/adapters.js [middleware] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use strict';
;
;
;
;
;
;
/**
 * Throws a `CanceledError` if cancellation has been requested.
 *
 * @param {Object} config The config that is to be used for the request
 *
 * @returns {void}
 */ function throwIfCancellationRequested(config) {
    if (config.cancelToken) {
        config.cancelToken.throwIfRequested();
    }
    if (config.signal && config.signal.aborted) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$cancel$2f$CanceledError$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"](null, config);
    }
}
function dispatchRequest(config) {
    throwIfCancellationRequested(config);
    config.headers = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosHeaders$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].from(config.headers);
    // Transform request data
    config.data = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$core$2f$transformData$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].call(config, config.transformRequest);
    if ([
        'post',
        'put',
        'patch'
    ].indexOf(config.method) !== -1) {
        config.headers.setContentType('application/x-www-form-urlencoded', false);
    }
    const adapter = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$adapters$2f$adapters$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].getAdapter(config.adapter || __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$defaults$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].adapter);
    return adapter(config).then(function onAdapterResolution(response) {
        throwIfCancellationRequested(config);
        // Transform response data
        response.data = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$core$2f$transformData$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].call(config, config.transformResponse, response);
        response.headers = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosHeaders$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].from(response.headers);
        return response;
    }, function onAdapterRejection(reason) {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$cancel$2f$isCancel$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"])(reason)) {
            throwIfCancellationRequested(config);
            // Transform response data
            if (reason && reason.response) {
                reason.response.data = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$core$2f$transformData$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].call(config, config.transformResponse, reason.response);
                reason.response.headers = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosHeaders$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].from(reason.response.headers);
            }
        }
        return Promise.reject(reason);
    });
}

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/env/data.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "VERSION": ()=>VERSION
});
const VERSION = "1.7.7";

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/helpers/validator.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$env$2f$data$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/env/data.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/core/AxiosError.js [middleware] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use strict';
;
;
const validators = {};
// eslint-disable-next-line func-names
[
    'object',
    'boolean',
    'number',
    'function',
    'string',
    'symbol'
].forEach((type, i)=>{
    validators[type] = function validator(thing) {
        return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
    };
});
const deprecatedWarnings = {};
/**
 * Transitional option validator
 *
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 *
 * @returns {function}
 */ validators.transitional = function transitional(validator, version, message) {
    function formatMessage(opt, desc) {
        return '[Axios v' + __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$env$2f$data$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["VERSION"] + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
    }
    // eslint-disable-next-line func-names
    return (value, opt, opts)=>{
        if (validator === false) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"](formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')), __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].ERR_DEPRECATED);
        }
        if (version && !deprecatedWarnings[opt]) {
            deprecatedWarnings[opt] = true;
            // eslint-disable-next-line no-console
            console.warn(formatMessage(opt, ' has been deprecated since v' + version + ' and will be removed in the near future'));
        }
        return validator ? validator(value, opt, opts) : true;
    };
};
/**
 * Assert object's properties type
 *
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 *
 * @returns {object}
 */ function assertOptions(options, schema, allowUnknown) {
    if (typeof options !== 'object') {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"]('options must be an object', __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].ERR_BAD_OPTION_VALUE);
    }
    const keys = Object.keys(options);
    let i = keys.length;
    while(i-- > 0){
        const opt = keys[i];
        const validator = schema[opt];
        if (validator) {
            const value = options[opt];
            const result = value === undefined || validator(value, opt, options);
            if (result !== true) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"]('option ' + opt + ' must be ' + result, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].ERR_BAD_OPTION_VALUE);
            }
            continue;
        }
        if (allowUnknown !== true) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"]('Unknown option ' + opt, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].ERR_BAD_OPTION);
        }
    }
}
const __TURBOPACK__default__export__ = {
    assertOptions,
    validators
};

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/core/Axios.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/utils.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$buildURL$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/helpers/buildURL.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$core$2f$InterceptorManager$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/core/InterceptorManager.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$core$2f$dispatchRequest$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/core/dispatchRequest.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$core$2f$mergeConfig$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/core/mergeConfig.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$core$2f$buildFullPath$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/core/buildFullPath.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$validator$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/helpers/validator.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosHeaders$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/core/AxiosHeaders.js [middleware] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use strict';
;
;
;
;
;
;
;
;
const validators = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$validator$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].validators;
/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 *
 * @return {Axios} A new instance of Axios
 */ class Axios {
    constructor(instanceConfig){
        this.defaults = instanceConfig;
        this.interceptors = {
            request: new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$core$2f$InterceptorManager$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"](),
            response: new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$core$2f$InterceptorManager$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"]()
        };
    }
    /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */ async request(configOrUrl, config) {
        try {
            return await this._request(configOrUrl, config);
        } catch (err) {
            if (err instanceof Error) {
                let dummy;
                Error.captureStackTrace ? Error.captureStackTrace(dummy = {}) : dummy = new Error();
                // slice off the Error: ... line
                const stack = dummy.stack ? dummy.stack.replace(/^.+\n/, '') : '';
                try {
                    if (!err.stack) {
                        err.stack = stack;
                    // match without the 2 top stack lines
                    } else if (stack && !String(err.stack).endsWith(stack.replace(/^.+\n.+\n/, ''))) {
                        err.stack += '\n' + stack;
                    }
                } catch (e) {
                // ignore the case where "stack" is an un-writable property
                }
            }
            throw err;
        }
    }
    _request(configOrUrl, config) {
        /*eslint no-param-reassign:0*/ // Allow for axios('example/url'[, config]) a la fetch API
        if (typeof configOrUrl === 'string') {
            config = config || {};
            config.url = configOrUrl;
        } else {
            config = configOrUrl || {};
        }
        config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$core$2f$mergeConfig$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"])(this.defaults, config);
        const { transitional, paramsSerializer, headers } = config;
        if (transitional !== undefined) {
            __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$validator$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].assertOptions(transitional, {
                silentJSONParsing: validators.transitional(validators.boolean),
                forcedJSONParsing: validators.transitional(validators.boolean),
                clarifyTimeoutError: validators.transitional(validators.boolean)
            }, false);
        }
        if (paramsSerializer != null) {
            if (__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].isFunction(paramsSerializer)) {
                config.paramsSerializer = {
                    serialize: paramsSerializer
                };
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$validator$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].assertOptions(paramsSerializer, {
                    encode: validators.function,
                    serialize: validators.function
                }, true);
            }
        }
        // Set config.method
        config.method = (config.method || this.defaults.method || 'get').toLowerCase();
        // Flatten headers
        let contextHeaders = headers && __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].merge(headers.common, headers[config.method]);
        headers && __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].forEach([
            'delete',
            'get',
            'head',
            'post',
            'put',
            'patch',
            'common'
        ], (method)=>{
            delete headers[method];
        });
        config.headers = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosHeaders$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].concat(contextHeaders, headers);
        // filter out skipped interceptors
        const requestInterceptorChain = [];
        let synchronousRequestInterceptors = true;
        this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
            if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
                return;
            }
            synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
            requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
        });
        const responseInterceptorChain = [];
        this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
            responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
        });
        let promise;
        let i = 0;
        let len;
        if (!synchronousRequestInterceptors) {
            const chain = [
                __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$core$2f$dispatchRequest$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].bind(this),
                undefined
            ];
            chain.unshift.apply(chain, requestInterceptorChain);
            chain.push.apply(chain, responseInterceptorChain);
            len = chain.length;
            promise = Promise.resolve(config);
            while(i < len){
                promise = promise.then(chain[i++], chain[i++]);
            }
            return promise;
        }
        len = requestInterceptorChain.length;
        let newConfig = config;
        i = 0;
        while(i < len){
            const onFulfilled = requestInterceptorChain[i++];
            const onRejected = requestInterceptorChain[i++];
            try {
                newConfig = onFulfilled(newConfig);
            } catch (error) {
                onRejected.call(this, error);
                break;
            }
        }
        try {
            promise = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$core$2f$dispatchRequest$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].call(this, newConfig);
        } catch (error) {
            return Promise.reject(error);
        }
        i = 0;
        len = responseInterceptorChain.length;
        while(i < len){
            promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
        }
        return promise;
    }
    getUri(config) {
        config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$core$2f$mergeConfig$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"])(this.defaults, config);
        const fullPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$core$2f$buildFullPath$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"])(config.baseURL, config.url);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$buildURL$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"])(fullPath, config.params, config.paramsSerializer);
    }
}
// Provide aliases for supported request methods
__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].forEach([
    'delete',
    'get',
    'head',
    'options'
], function forEachMethodNoData(method) {
    /*eslint func-names:0*/ Axios.prototype[method] = function(url, config) {
        return this.request((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$core$2f$mergeConfig$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"])(config || {}, {
            method,
            url,
            data: (config || {}).data
        }));
    };
});
__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].forEach([
    'post',
    'put',
    'patch'
], function forEachMethodWithData(method) {
    /*eslint func-names:0*/ function generateHTTPMethod(isForm) {
        return function httpMethod(url, data, config) {
            return this.request((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$core$2f$mergeConfig$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"])(config || {}, {
                method,
                headers: isForm ? {
                    'Content-Type': 'multipart/form-data'
                } : {},
                url,
                data
            }));
        };
    }
    Axios.prototype[method] = generateHTTPMethod();
    Axios.prototype[method + 'Form'] = generateHTTPMethod(true);
});
const __TURBOPACK__default__export__ = Axios;

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/cancel/CancelToken.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$cancel$2f$CanceledError$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/cancel/CanceledError.js [middleware] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use strict';
;
/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @param {Function} executor The executor function.
 *
 * @returns {CancelToken}
 */ class CancelToken {
    constructor(executor){
        if (typeof executor !== 'function') {
            throw new TypeError('executor must be a function.');
        }
        let resolvePromise;
        this.promise = new Promise(function promiseExecutor(resolve) {
            resolvePromise = resolve;
        });
        const token = this;
        // eslint-disable-next-line func-names
        this.promise.then((cancel)=>{
            if (!token._listeners) return;
            let i = token._listeners.length;
            while(i-- > 0){
                token._listeners[i](cancel);
            }
            token._listeners = null;
        });
        // eslint-disable-next-line func-names
        this.promise.then = (onfulfilled)=>{
            let _resolve;
            // eslint-disable-next-line func-names
            const promise = new Promise((resolve)=>{
                token.subscribe(resolve);
                _resolve = resolve;
            }).then(onfulfilled);
            promise.cancel = function reject() {
                token.unsubscribe(_resolve);
            };
            return promise;
        };
        executor(function cancel(message, config, request) {
            if (token.reason) {
                // Cancellation has already been requested
                return;
            }
            token.reason = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$cancel$2f$CanceledError$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"](message, config, request);
            resolvePromise(token.reason);
        });
    }
    /**
   * Throws a `CanceledError` if cancellation has been requested.
   */ throwIfRequested() {
        if (this.reason) {
            throw this.reason;
        }
    }
    /**
   * Subscribe to the cancel signal
   */ subscribe(listener) {
        if (this.reason) {
            listener(this.reason);
            return;
        }
        if (this._listeners) {
            this._listeners.push(listener);
        } else {
            this._listeners = [
                listener
            ];
        }
    }
    /**
   * Unsubscribe from the cancel signal
   */ unsubscribe(listener) {
        if (!this._listeners) {
            return;
        }
        const index = this._listeners.indexOf(listener);
        if (index !== -1) {
            this._listeners.splice(index, 1);
        }
    }
    toAbortSignal() {
        const controller = new AbortController();
        const abort = (err)=>{
            controller.abort(err);
        };
        this.subscribe(abort);
        controller.signal.unsubscribe = ()=>this.unsubscribe(abort);
        return controller.signal;
    }
    /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */ static source() {
        let cancel;
        const token = new CancelToken(function executor(c) {
            cancel = c;
        });
        return {
            token,
            cancel
        };
    }
}
const __TURBOPACK__default__export__ = CancelToken;

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/helpers/spread.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>spread
});
'use strict';
function spread(callback) {
    return function wrap(arr) {
        return callback.apply(null, arr);
    };
}

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/helpers/isAxiosError.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>isAxiosError
});
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/utils.js [middleware] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use strict';
;
function isAxiosError(payload) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].isObject(payload) && payload.isAxiosError === true;
}

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/helpers/HttpStatusCode.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
const HttpStatusCode = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511
};
Object.entries(HttpStatusCode).forEach(([key, value])=>{
    HttpStatusCode[value] = key;
});
const __TURBOPACK__default__export__ = HttpStatusCode;

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/axios.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/utils.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$bind$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/helpers/bind.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$core$2f$Axios$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/core/Axios.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$core$2f$mergeConfig$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/core/mergeConfig.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$defaults$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/defaults/index.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$formDataToJSON$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/helpers/formDataToJSON.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$cancel$2f$CanceledError$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/cancel/CanceledError.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$cancel$2f$CancelToken$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/cancel/CancelToken.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$cancel$2f$isCancel$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/cancel/isCancel.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$env$2f$data$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/env/data.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$toFormData$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/helpers/toFormData.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/core/AxiosError.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$spread$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/helpers/spread.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$isAxiosError$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/helpers/isAxiosError.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosHeaders$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/core/AxiosHeaders.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$adapters$2f$adapters$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/adapters/adapters.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$HttpStatusCode$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/axios/lib/helpers/HttpStatusCode.js [middleware] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use strict';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 *
 * @returns {Axios} A new instance of Axios
 */ function createInstance(defaultConfig) {
    const context = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$core$2f$Axios$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"](defaultConfig);
    const instance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$bind$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$core$2f$Axios$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].prototype.request, context);
    // Copy axios.prototype to instance
    __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].extend(instance, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$core$2f$Axios$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].prototype, context, {
        allOwnKeys: true
    });
    // Copy context to instance
    __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].extend(instance, context, null, {
        allOwnKeys: true
    });
    // Factory for creating new instances
    instance.create = function create(instanceConfig) {
        return createInstance((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$core$2f$mergeConfig$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"])(defaultConfig, instanceConfig));
    };
    return instance;
}
// Create the default instance to be exported
const axios = createInstance(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$defaults$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"]);
// Expose Axios class to allow class inheritance
axios.Axios = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$core$2f$Axios$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"];
// Expose Cancel & CancelToken
axios.CanceledError = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$cancel$2f$CanceledError$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"];
axios.CancelToken = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$cancel$2f$CancelToken$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"];
axios.isCancel = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$cancel$2f$isCancel$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"];
axios.VERSION = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$env$2f$data$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["VERSION"];
axios.toFormData = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$toFormData$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"];
// Expose AxiosError class
axios.AxiosError = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosError$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"];
// alias for CanceledError for backward compatibility
axios.Cancel = axios.CanceledError;
// Expose all/spread
axios.all = function all(promises) {
    return Promise.all(promises);
};
axios.spread = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$spread$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"];
// Expose isAxiosError
axios.isAxiosError = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$isAxiosError$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"];
// Expose mergeConfig
axios.mergeConfig = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$core$2f$mergeConfig$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"];
axios.AxiosHeaders = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$core$2f$AxiosHeaders$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"];
axios.formToJSON = (thing)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$formDataToJSON$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].isHTMLForm(thing) ? new FormData(thing) : thing);
axios.getAdapter = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$adapters$2f$adapters$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].getAdapter;
axios.HttpStatusCode = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$axios$2f$lib$2f$helpers$2f$HttpStatusCode$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"];
axios.default = axios;
const __TURBOPACK__default__export__ = axios;

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/client/components/action-async-storage-instance.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "actionAsyncStorage": ()=>actionAsyncStorage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$async$2d$local$2d$storage$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/client/components/async-local-storage.js [middleware] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const actionAsyncStorage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$async$2d$local$2d$storage$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["createAsyncLocalStorage"])(); //# sourceMappingURL=action-async-storage-instance.js.map

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/client/components/action-async-storage.external.js [middleware] (ecmascript) <locals>": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({});
"TURBOPACK { transition: next-shared }";
;
;
 //# sourceMappingURL=action-async-storage.external.js.map

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/client/components/action-async-storage.external.js [middleware] (ecmascript) <module evaluation>": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$action$2d$async$2d$storage$2d$instance$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/client/components/action-async-storage-instance.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$action$2d$async$2d$storage$2e$external$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/client/components/action-async-storage.external.js [middleware] (ecmascript) <locals>");
"__TURBOPACK__ecmascript__hoisting__location__";

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/react/cjs/react.development.js [middleware] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 'use strict';
if ("TURBOPACK compile-time truthy", 1) {
    (function() {
        'use strict';
        /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */ if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === 'function') {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
        }
        var ReactVersion = '18.3.1';
        // ATTENTION
        // When adding new symbols to this file,
        // Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
        // The Symbol used to tag the ReactElement-like types.
        var REACT_ELEMENT_TYPE = Symbol.for('react.element');
        var REACT_PORTAL_TYPE = Symbol.for('react.portal');
        var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
        var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
        var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
        var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
        var REACT_CONTEXT_TYPE = Symbol.for('react.context');
        var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
        var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
        var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
        var REACT_MEMO_TYPE = Symbol.for('react.memo');
        var REACT_LAZY_TYPE = Symbol.for('react.lazy');
        var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');
        var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = '@@iterator';
        function getIteratorFn(maybeIterable) {
            if (maybeIterable === null || typeof maybeIterable !== 'object') {
                return null;
            }
            var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
            if (typeof maybeIterator === 'function') {
                return maybeIterator;
            }
            return null;
        }
        /**
 * Keeps track of the current dispatcher.
 */ var ReactCurrentDispatcher = {
            /**
   * @internal
   * @type {ReactComponent}
   */ current: null
        };
        /**
 * Keeps track of the current batch's configuration such as how long an update
 * should suspend for if it needs to.
 */ var ReactCurrentBatchConfig = {
            transition: null
        };
        var ReactCurrentActQueue = {
            current: null,
            // Used to reproduce behavior of `batchedUpdates` in legacy mode.
            isBatchingLegacy: false,
            didScheduleLegacyUpdate: false
        };
        /**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */ var ReactCurrentOwner = {
            /**
   * @internal
   * @type {ReactComponent}
   */ current: null
        };
        var ReactDebugCurrentFrame = {};
        var currentExtraStackFrame = null;
        function setExtraStackFrame(stack) {
            {
                currentExtraStackFrame = stack;
            }
        }
        {
            ReactDebugCurrentFrame.setExtraStackFrame = function(stack) {
                {
                    currentExtraStackFrame = stack;
                }
            }; // Stack implementation injected by the current renderer.
            ReactDebugCurrentFrame.getCurrentStack = null;
            ReactDebugCurrentFrame.getStackAddendum = function() {
                var stack = ''; // Add an extra top frame while an element is being validated
                if (currentExtraStackFrame) {
                    stack += currentExtraStackFrame;
                } // Delegate to the injected renderer-specific implementation
                var impl = ReactDebugCurrentFrame.getCurrentStack;
                if (impl) {
                    stack += impl() || '';
                }
                return stack;
            };
        }
        // -----------------------------------------------------------------------------
        var enableScopeAPI = false; // Experimental Create Event Handle API.
        var enableCacheElement = false;
        var enableTransitionTracing = false; // No known bugs, but needs performance testing
        var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
        // stuff. Intended to enable React core members to more easily debug scheduling
        // issues in DEV builds.
        var enableDebugTracing = false; // Track which Fiber(s) schedule render work.
        var ReactSharedInternals = {
            ReactCurrentDispatcher: ReactCurrentDispatcher,
            ReactCurrentBatchConfig: ReactCurrentBatchConfig,
            ReactCurrentOwner: ReactCurrentOwner
        };
        {
            ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
            ReactSharedInternals.ReactCurrentActQueue = ReactCurrentActQueue;
        }
        // by calls to these methods by a Babel plugin.
        //
        // In PROD (or in packages without access to React internals),
        // they are left as they are instead.
        function warn(format) {
            {
                {
                    for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                        args[_key - 1] = arguments[_key];
                    }
                    printWarning('warn', format, args);
                }
            }
        }
        function error(format) {
            {
                {
                    for(var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++){
                        args[_key2 - 1] = arguments[_key2];
                    }
                    printWarning('error', format, args);
                }
            }
        }
        function printWarning(level, format, args) {
            // When changing this logic, you might want to also
            // update consoleWithStackDev.www.js as well.
            {
                var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
                var stack = ReactDebugCurrentFrame.getStackAddendum();
                if (stack !== '') {
                    format += '%s';
                    args = args.concat([
                        stack
                    ]);
                } // eslint-disable-next-line react-internal/safe-string-coercion
                var argsWithFormat = args.map(function(item) {
                    return String(item);
                }); // Careful: RN currently depends on this prefix
                argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
                // breaks IE9: https://github.com/facebook/react/issues/13610
                // eslint-disable-next-line react-internal/no-production-logging
                Function.prototype.apply.call(console[level], console, argsWithFormat);
            }
        }
        var didWarnStateUpdateForUnmountedComponent = {};
        function warnNoop(publicInstance, callerName) {
            {
                var _constructor = publicInstance.constructor;
                var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
                var warningKey = componentName + "." + callerName;
                if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
                    return;
                }
                error("Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);
                didWarnStateUpdateForUnmountedComponent[warningKey] = true;
            }
        }
        /**
 * This is the abstract API for an update queue.
 */ var ReactNoopUpdateQueue = {
            /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */ isMounted: function(publicInstance) {
                return false;
            },
            /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */ enqueueForceUpdate: function(publicInstance, callback, callerName) {
                warnNoop(publicInstance, 'forceUpdate');
            },
            /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */ enqueueReplaceState: function(publicInstance, completeState, callback, callerName) {
                warnNoop(publicInstance, 'replaceState');
            },
            /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */ enqueueSetState: function(publicInstance, partialState, callback, callerName) {
                warnNoop(publicInstance, 'setState');
            }
        };
        var assign = Object.assign;
        var emptyObject = {};
        {
            Object.freeze(emptyObject);
        }
        /**
 * Base class helpers for the updating state of a component.
 */ function Component(props, context, updater) {
            this.props = props;
            this.context = context; // If a component has string refs, we will assign a different object later.
            this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
            // renderer.
            this.updater = updater || ReactNoopUpdateQueue;
        }
        Component.prototype.isReactComponent = {};
        /**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */ Component.prototype.setState = function(partialState, callback) {
            if (typeof partialState !== 'object' && typeof partialState !== 'function' && partialState != null) {
                throw new Error('setState(...): takes an object of state variables to update or a ' + 'function which returns an object of state variables.');
            }
            this.updater.enqueueSetState(this, partialState, callback, 'setState');
        };
        /**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */ Component.prototype.forceUpdate = function(callback) {
            this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
        };
        /**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */ {
            var deprecatedAPIs = {
                isMounted: [
                    'isMounted',
                    'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'
                ],
                replaceState: [
                    'replaceState',
                    'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).'
                ]
            };
            var defineDeprecationWarning = function(methodName, info) {
                Object.defineProperty(Component.prototype, methodName, {
                    get: function() {
                        warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);
                        return undefined;
                    }
                });
            };
            for(var fnName in deprecatedAPIs){
                if (deprecatedAPIs.hasOwnProperty(fnName)) {
                    defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
                }
            }
        }
        function ComponentDummy() {}
        ComponentDummy.prototype = Component.prototype;
        /**
 * Convenience component with default shallow equality check for sCU.
 */ function PureComponent(props, context, updater) {
            this.props = props;
            this.context = context; // If a component has string refs, we will assign a different object later.
            this.refs = emptyObject;
            this.updater = updater || ReactNoopUpdateQueue;
        }
        var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
        pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.
        assign(pureComponentPrototype, Component.prototype);
        pureComponentPrototype.isPureReactComponent = true;
        // an immutable object with a single mutable value
        function createRef() {
            var refObject = {
                current: null
            };
            {
                Object.seal(refObject);
            }
            return refObject;
        }
        var isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare
        function isArray(a) {
            return isArrayImpl(a);
        }
        /*
 * The `'' + value` pattern (used in in perf-sensitive code) throws for Symbol
 * and Temporal.* types. See https://github.com/facebook/react/pull/22064.
 *
 * The functions in this module will throw an easier-to-understand,
 * easier-to-debug exception with a clear errors message message explaining the
 * problem. (Instead of a confusing exception thrown inside the implementation
 * of the `value` object).
 */ // $FlowFixMe only called in DEV, so void return is not possible.
        function typeName(value) {
            {
                // toStringTag is needed for namespaced types like Temporal.Instant
                var hasToStringTag = typeof Symbol === 'function' && Symbol.toStringTag;
                var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || 'Object';
                return type;
            }
        } // $FlowFixMe only called in DEV, so void return is not possible.
        function willCoercionThrow(value) {
            {
                try {
                    testStringCoercion(value);
                    return false;
                } catch (e) {
                    return true;
                }
            }
        }
        function testStringCoercion(value) {
            // If you ended up here by following an exception call stack, here's what's
            // happened: you supplied an object or symbol value to React (as a prop, key,
            // DOM attribute, CSS property, string ref, etc.) and when React tried to
            // coerce it to a string using `'' + value`, an exception was thrown.
            //
            // The most common types that will cause this exception are `Symbol` instances
            // and Temporal objects like `Temporal.Instant`. But any object that has a
            // `valueOf` or `[Symbol.toPrimitive]` method that throws will also cause this
            // exception. (Library authors do this to prevent users from using built-in
            // numeric operators like `+` or comparison operators like `>=` because custom
            // methods are needed to perform accurate arithmetic or comparison.)
            //
            // To fix the problem, coerce this object or symbol value to a string before
            // passing it to React. The most reliable way is usually `String(value)`.
            //
            // To find which value is throwing, check the browser or debugger console.
            // Before this exception was thrown, there should be `console.error` output
            // that shows the type (Symbol, Temporal.PlainDate, etc.) that caused the
            // problem and how that type was used: key, atrribute, input value prop, etc.
            // In most cases, this console output also shows the component and its
            // ancestor components where the exception happened.
            //
            // eslint-disable-next-line react-internal/safe-string-coercion
            return '' + value;
        }
        function checkKeyStringCoercion(value) {
            {
                if (willCoercionThrow(value)) {
                    error('The provided key is an unsupported type %s.' + ' This value must be coerced to a string before before using it here.', typeName(value));
                    return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
                }
            }
        }
        function getWrappedName(outerType, innerType, wrapperName) {
            var displayName = outerType.displayName;
            if (displayName) {
                return displayName;
            }
            var functionName = innerType.displayName || innerType.name || '';
            return functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName;
        } // Keep in sync with react-reconciler/getComponentNameFromFiber
        function getContextName(type) {
            return type.displayName || 'Context';
        } // Note that the reconciler package should generally prefer to use getComponentNameFromFiber() instead.
        function getComponentNameFromType(type) {
            if (type == null) {
                // Host root, text node or just invalid type.
                return null;
            }
            {
                if (typeof type.tag === 'number') {
                    error('Received an unexpected object in getComponentNameFromType(). ' + 'This is likely a bug in React. Please file an issue.');
                }
            }
            if (typeof type === 'function') {
                return type.displayName || type.name || null;
            }
            if (typeof type === 'string') {
                return type;
            }
            switch(type){
                case REACT_FRAGMENT_TYPE:
                    return 'Fragment';
                case REACT_PORTAL_TYPE:
                    return 'Portal';
                case REACT_PROFILER_TYPE:
                    return 'Profiler';
                case REACT_STRICT_MODE_TYPE:
                    return 'StrictMode';
                case REACT_SUSPENSE_TYPE:
                    return 'Suspense';
                case REACT_SUSPENSE_LIST_TYPE:
                    return 'SuspenseList';
            }
            if (typeof type === 'object') {
                switch(type.$$typeof){
                    case REACT_CONTEXT_TYPE:
                        var context = type;
                        return getContextName(context) + '.Consumer';
                    case REACT_PROVIDER_TYPE:
                        var provider = type;
                        return getContextName(provider._context) + '.Provider';
                    case REACT_FORWARD_REF_TYPE:
                        return getWrappedName(type, type.render, 'ForwardRef');
                    case REACT_MEMO_TYPE:
                        var outerName = type.displayName || null;
                        if (outerName !== null) {
                            return outerName;
                        }
                        return getComponentNameFromType(type.type) || 'Memo';
                    case REACT_LAZY_TYPE:
                        {
                            var lazyComponent = type;
                            var payload = lazyComponent._payload;
                            var init = lazyComponent._init;
                            try {
                                return getComponentNameFromType(init(payload));
                            } catch (x) {
                                return null;
                            }
                        }
                }
            }
            return null;
        }
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var RESERVED_PROPS = {
            key: true,
            ref: true,
            __self: true,
            __source: true
        };
        var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;
        {
            didWarnAboutStringRefs = {};
        }
        function hasValidRef(config) {
            {
                if (hasOwnProperty.call(config, 'ref')) {
                    var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
                    if (getter && getter.isReactWarning) {
                        return false;
                    }
                }
            }
            return config.ref !== undefined;
        }
        function hasValidKey(config) {
            {
                if (hasOwnProperty.call(config, 'key')) {
                    var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
                    if (getter && getter.isReactWarning) {
                        return false;
                    }
                }
            }
            return config.key !== undefined;
        }
        function defineKeyPropWarningGetter(props, displayName) {
            var warnAboutAccessingKey = function() {
                {
                    if (!specialPropKeyWarningShown) {
                        specialPropKeyWarningShown = true;
                        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
                    }
                }
            };
            warnAboutAccessingKey.isReactWarning = true;
            Object.defineProperty(props, 'key', {
                get: warnAboutAccessingKey,
                configurable: true
            });
        }
        function defineRefPropWarningGetter(props, displayName) {
            var warnAboutAccessingRef = function() {
                {
                    if (!specialPropRefWarningShown) {
                        specialPropRefWarningShown = true;
                        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
                    }
                }
            };
            warnAboutAccessingRef.isReactWarning = true;
            Object.defineProperty(props, 'ref', {
                get: warnAboutAccessingRef,
                configurable: true
            });
        }
        function warnIfStringRefCannotBeAutoConverted(config) {
            {
                if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
                    var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
                    if (!didWarnAboutStringRefs[componentName]) {
                        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);
                        didWarnAboutStringRefs[componentName] = true;
                    }
                }
            }
        }
        /**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */ var ReactElement = function(type, key, ref, self, source, owner, props) {
            var element = {
                // This tag allows us to uniquely identify this as a React Element
                $$typeof: REACT_ELEMENT_TYPE,
                // Built-in properties that belong on the element
                type: type,
                key: key,
                ref: ref,
                props: props,
                // Record the component responsible for creating this element.
                _owner: owner
            };
            {
                // The validation flag is currently mutative. We put it on
                // an external backing store so that we can freeze the whole object.
                // This can be replaced with a WeakMap once they are implemented in
                // commonly used development environments.
                element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
                // the validation flag non-enumerable (where possible, which should
                // include every environment we run tests in), so the test framework
                // ignores it.
                Object.defineProperty(element._store, 'validated', {
                    configurable: false,
                    enumerable: false,
                    writable: true,
                    value: false
                }); // self and source are DEV only properties.
                Object.defineProperty(element, '_self', {
                    configurable: false,
                    enumerable: false,
                    writable: false,
                    value: self
                }); // Two elements created in two different places should be considered
                // equal for testing purposes and therefore we hide it from enumeration.
                Object.defineProperty(element, '_source', {
                    configurable: false,
                    enumerable: false,
                    writable: false,
                    value: source
                });
                if (Object.freeze) {
                    Object.freeze(element.props);
                    Object.freeze(element);
                }
            }
            return element;
        };
        /**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */ function createElement(type, config, children) {
            var propName; // Reserved names are extracted
            var props = {};
            var key = null;
            var ref = null;
            var self = null;
            var source = null;
            if (config != null) {
                if (hasValidRef(config)) {
                    ref = config.ref;
                    {
                        warnIfStringRefCannotBeAutoConverted(config);
                    }
                }
                if (hasValidKey(config)) {
                    {
                        checkKeyStringCoercion(config.key);
                    }
                    key = '' + config.key;
                }
                self = config.__self === undefined ? null : config.__self;
                source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object
                for(propName in config){
                    if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                        props[propName] = config[propName];
                    }
                }
            } // Children can be more than one argument, and those are transferred onto
            // the newly allocated props object.
            var childrenLength = arguments.length - 2;
            if (childrenLength === 1) {
                props.children = children;
            } else if (childrenLength > 1) {
                var childArray = Array(childrenLength);
                for(var i = 0; i < childrenLength; i++){
                    childArray[i] = arguments[i + 2];
                }
                {
                    if (Object.freeze) {
                        Object.freeze(childArray);
                    }
                }
                props.children = childArray;
            } // Resolve default props
            if (type && type.defaultProps) {
                var defaultProps = type.defaultProps;
                for(propName in defaultProps){
                    if (props[propName] === undefined) {
                        props[propName] = defaultProps[propName];
                    }
                }
            }
            {
                if (key || ref) {
                    var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
                    if (key) {
                        defineKeyPropWarningGetter(props, displayName);
                    }
                    if (ref) {
                        defineRefPropWarningGetter(props, displayName);
                    }
                }
            }
            return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
        }
        function cloneAndReplaceKey(oldElement, newKey) {
            var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
            return newElement;
        }
        /**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */ function cloneElement(element, config, children) {
            if (element === null || element === undefined) {
                throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
            }
            var propName; // Original props are copied
            var props = assign({}, element.props); // Reserved names are extracted
            var key = element.key;
            var ref = element.ref; // Self is preserved since the owner is preserved.
            var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
            // transpiler, and the original source is probably a better indicator of the
            // true owner.
            var source = element._source; // Owner will be preserved, unless ref is overridden
            var owner = element._owner;
            if (config != null) {
                if (hasValidRef(config)) {
                    // Silently steal the ref from the parent.
                    ref = config.ref;
                    owner = ReactCurrentOwner.current;
                }
                if (hasValidKey(config)) {
                    {
                        checkKeyStringCoercion(config.key);
                    }
                    key = '' + config.key;
                } // Remaining properties override existing props
                var defaultProps;
                if (element.type && element.type.defaultProps) {
                    defaultProps = element.type.defaultProps;
                }
                for(propName in config){
                    if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                        if (config[propName] === undefined && defaultProps !== undefined) {
                            // Resolve default props
                            props[propName] = defaultProps[propName];
                        } else {
                            props[propName] = config[propName];
                        }
                    }
                }
            } // Children can be more than one argument, and those are transferred onto
            // the newly allocated props object.
            var childrenLength = arguments.length - 2;
            if (childrenLength === 1) {
                props.children = children;
            } else if (childrenLength > 1) {
                var childArray = Array(childrenLength);
                for(var i = 0; i < childrenLength; i++){
                    childArray[i] = arguments[i + 2];
                }
                props.children = childArray;
            }
            return ReactElement(element.type, key, ref, self, source, owner, props);
        }
        /**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */ function isValidElement(object) {
            return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        var SEPARATOR = '.';
        var SUBSEPARATOR = ':';
        /**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */ function escape(key) {
            var escapeRegex = /[=:]/g;
            var escaperLookup = {
                '=': '=0',
                ':': '=2'
            };
            var escapedString = key.replace(escapeRegex, function(match) {
                return escaperLookup[match];
            });
            return '$' + escapedString;
        }
        /**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */ var didWarnAboutMaps = false;
        var userProvidedKeyEscapeRegex = /\/+/g;
        function escapeUserProvidedKey(text) {
            return text.replace(userProvidedKeyEscapeRegex, '$&/');
        }
        /**
 * Generate a key string that identifies a element within a set.
 *
 * @param {*} element A element that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */ function getElementKey(element, index) {
            // Do some typechecking here since we call this blindly. We want to ensure
            // that we don't block potential future ES APIs.
            if (typeof element === 'object' && element !== null && element.key != null) {
                // Explicit key
                {
                    checkKeyStringCoercion(element.key);
                }
                return escape('' + element.key);
            } // Implicit key determined by the index in the set
            return index.toString(36);
        }
        function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
            var type = typeof children;
            if (type === 'undefined' || type === 'boolean') {
                // All of the above are perceived as null.
                children = null;
            }
            var invokeCallback = false;
            if (children === null) {
                invokeCallback = true;
            } else {
                switch(type){
                    case 'string':
                    case 'number':
                        invokeCallback = true;
                        break;
                    case 'object':
                        switch(children.$$typeof){
                            case REACT_ELEMENT_TYPE:
                            case REACT_PORTAL_TYPE:
                                invokeCallback = true;
                        }
                }
            }
            if (invokeCallback) {
                var _child = children;
                var mappedChild = callback(_child); // If it's the only child, treat the name as if it was wrapped in an array
                // so that it's consistent if the number of children grows:
                var childKey = nameSoFar === '' ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;
                if (isArray(mappedChild)) {
                    var escapedChildKey = '';
                    if (childKey != null) {
                        escapedChildKey = escapeUserProvidedKey(childKey) + '/';
                    }
                    mapIntoArray(mappedChild, array, escapedChildKey, '', function(c) {
                        return c;
                    });
                } else if (mappedChild != null) {
                    if (isValidElement(mappedChild)) {
                        {
                            // The `if` statement here prevents auto-disabling of the safe
                            // coercion ESLint rule, so we must manually disable it below.
                            // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
                            if (mappedChild.key && (!_child || _child.key !== mappedChild.key)) {
                                checkKeyStringCoercion(mappedChild.key);
                            }
                        }
                        mappedChild = cloneAndReplaceKey(mappedChild, // traverseAllChildren used to do for objects as children
                        escapedPrefix + (mappedChild.key && (!_child || _child.key !== mappedChild.key) ? // eslint-disable-next-line react-internal/safe-string-coercion
                        escapeUserProvidedKey('' + mappedChild.key) + '/' : '') + childKey);
                    }
                    array.push(mappedChild);
                }
                return 1;
            }
            var child;
            var nextName;
            var subtreeCount = 0; // Count of children found in the current subtree.
            var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;
            if (isArray(children)) {
                for(var i = 0; i < children.length; i++){
                    child = children[i];
                    nextName = nextNamePrefix + getElementKey(child, i);
                    subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
                }
            } else {
                var iteratorFn = getIteratorFn(children);
                if (typeof iteratorFn === 'function') {
                    var iterableChildren = children;
                    {
                        // Warn about using Maps as children
                        if (iteratorFn === iterableChildren.entries) {
                            if (!didWarnAboutMaps) {
                                warn('Using Maps as children is not supported. ' + 'Use an array of keyed ReactElements instead.');
                            }
                            didWarnAboutMaps = true;
                        }
                    }
                    var iterator = iteratorFn.call(iterableChildren);
                    var step;
                    var ii = 0;
                    while(!(step = iterator.next()).done){
                        child = step.value;
                        nextName = nextNamePrefix + getElementKey(child, ii++);
                        subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
                    }
                } else if (type === 'object') {
                    // eslint-disable-next-line react-internal/safe-string-coercion
                    var childrenString = String(children);
                    throw new Error("Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + "). " + 'If you meant to render a collection of children, use an array ' + 'instead.');
                }
            }
            return subtreeCount;
        }
        /**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
 *
 * The provided mapFunction(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */ function mapChildren(children, func, context) {
            if (children == null) {
                return children;
            }
            var result = [];
            var count = 0;
            mapIntoArray(children, result, '', '', function(child) {
                return func.call(context, child, count++);
            });
            return result;
        }
        /**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrencount
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */ function countChildren(children) {
            var n = 0;
            mapChildren(children, function() {
                n++; // Don't return anything
            });
            return n;
        }
        /**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */ function forEachChildren(children, forEachFunc, forEachContext) {
            mapChildren(children, function() {
                forEachFunc.apply(this, arguments); // Don't return anything.
            }, forEachContext);
        }
        /**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
 */ function toArray(children) {
            return mapChildren(children, function(child) {
                return child;
            }) || [];
        }
        /**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */ function onlyChild(children) {
            if (!isValidElement(children)) {
                throw new Error('React.Children.only expected to receive a single React element child.');
            }
            return children;
        }
        function createContext(defaultValue) {
            // TODO: Second argument used to be an optional `calculateChangedBits`
            // function. Warn to reserve for future use?
            var context = {
                $$typeof: REACT_CONTEXT_TYPE,
                // As a workaround to support multiple concurrent renderers, we categorize
                // some renderers as primary and others as secondary. We only expect
                // there to be two concurrent renderers at most: React Native (primary) and
                // Fabric (secondary); React DOM (primary) and React ART (secondary).
                // Secondary renderers store their context values on separate fields.
                _currentValue: defaultValue,
                _currentValue2: defaultValue,
                // Used to track how many concurrent renderers this context currently
                // supports within in a single renderer. Such as parallel server rendering.
                _threadCount: 0,
                // These are circular
                Provider: null,
                Consumer: null,
                // Add these to use same hidden class in VM as ServerContext
                _defaultValue: null,
                _globalName: null
            };
            context.Provider = {
                $$typeof: REACT_PROVIDER_TYPE,
                _context: context
            };
            var hasWarnedAboutUsingNestedContextConsumers = false;
            var hasWarnedAboutUsingConsumerProvider = false;
            var hasWarnedAboutDisplayNameOnConsumer = false;
            {
                // A separate object, but proxies back to the original context object for
                // backwards compatibility. It has a different $$typeof, so we can properly
                // warn for the incorrect usage of Context as a Consumer.
                var Consumer = {
                    $$typeof: REACT_CONTEXT_TYPE,
                    _context: context
                }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here
                Object.defineProperties(Consumer, {
                    Provider: {
                        get: function() {
                            if (!hasWarnedAboutUsingConsumerProvider) {
                                hasWarnedAboutUsingConsumerProvider = true;
                                error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
                            }
                            return context.Provider;
                        },
                        set: function(_Provider) {
                            context.Provider = _Provider;
                        }
                    },
                    _currentValue: {
                        get: function() {
                            return context._currentValue;
                        },
                        set: function(_currentValue) {
                            context._currentValue = _currentValue;
                        }
                    },
                    _currentValue2: {
                        get: function() {
                            return context._currentValue2;
                        },
                        set: function(_currentValue2) {
                            context._currentValue2 = _currentValue2;
                        }
                    },
                    _threadCount: {
                        get: function() {
                            return context._threadCount;
                        },
                        set: function(_threadCount) {
                            context._threadCount = _threadCount;
                        }
                    },
                    Consumer: {
                        get: function() {
                            if (!hasWarnedAboutUsingNestedContextConsumers) {
                                hasWarnedAboutUsingNestedContextConsumers = true;
                                error('Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
                            }
                            return context.Consumer;
                        }
                    },
                    displayName: {
                        get: function() {
                            return context.displayName;
                        },
                        set: function(displayName) {
                            if (!hasWarnedAboutDisplayNameOnConsumer) {
                                warn('Setting `displayName` on Context.Consumer has no effect. ' + "You should set it directly on the context with Context.displayName = '%s'.", displayName);
                                hasWarnedAboutDisplayNameOnConsumer = true;
                            }
                        }
                    }
                }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty
                context.Consumer = Consumer;
            }
            {
                context._currentRenderer = null;
                context._currentRenderer2 = null;
            }
            return context;
        }
        var Uninitialized = -1;
        var Pending = 0;
        var Resolved = 1;
        var Rejected = 2;
        function lazyInitializer(payload) {
            if (payload._status === Uninitialized) {
                var ctor = payload._result;
                var thenable = ctor(); // Transition to the next state.
                // This might throw either because it's missing or throws. If so, we treat it
                // as still uninitialized and try again next time. Which is the same as what
                // happens if the ctor or any wrappers processing the ctor throws. This might
                // end up fixing it if the resolution was a concurrency bug.
                thenable.then(function(moduleObject) {
                    if (payload._status === Pending || payload._status === Uninitialized) {
                        // Transition to the next state.
                        var resolved = payload;
                        resolved._status = Resolved;
                        resolved._result = moduleObject;
                    }
                }, function(error) {
                    if (payload._status === Pending || payload._status === Uninitialized) {
                        // Transition to the next state.
                        var rejected = payload;
                        rejected._status = Rejected;
                        rejected._result = error;
                    }
                });
                if (payload._status === Uninitialized) {
                    // In case, we're still uninitialized, then we're waiting for the thenable
                    // to resolve. Set it as pending in the meantime.
                    var pending = payload;
                    pending._status = Pending;
                    pending._result = thenable;
                }
            }
            if (payload._status === Resolved) {
                var moduleObject = payload._result;
                {
                    if (moduleObject === undefined) {
                        error('lazy: Expected the result of a dynamic imp' + 'ort() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' + // Break up imports to avoid accidentally parsing them as dependencies.
                        'const MyComponent = lazy(() => imp' + "ort('./MyComponent'))\n\n" + 'Did you accidentally put curly braces around the import?', moduleObject);
                    }
                }
                {
                    if (!('default' in moduleObject)) {
                        error('lazy: Expected the result of a dynamic imp' + 'ort() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' + // Break up imports to avoid accidentally parsing them as dependencies.
                        'const MyComponent = lazy(() => imp' + "ort('./MyComponent'))", moduleObject);
                    }
                }
                return moduleObject.default;
            } else {
                throw payload._result;
            }
        }
        function lazy(ctor) {
            var payload = {
                // We use these fields to store the result.
                _status: Uninitialized,
                _result: ctor
            };
            var lazyType = {
                $$typeof: REACT_LAZY_TYPE,
                _payload: payload,
                _init: lazyInitializer
            };
            {
                // In production, this would just set it on the object.
                var defaultProps;
                var propTypes; // $FlowFixMe
                Object.defineProperties(lazyType, {
                    defaultProps: {
                        configurable: true,
                        get: function() {
                            return defaultProps;
                        },
                        set: function(newDefaultProps) {
                            error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');
                            defaultProps = newDefaultProps; // Match production behavior more closely:
                            // $FlowFixMe
                            Object.defineProperty(lazyType, 'defaultProps', {
                                enumerable: true
                            });
                        }
                    },
                    propTypes: {
                        configurable: true,
                        get: function() {
                            return propTypes;
                        },
                        set: function(newPropTypes) {
                            error('React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');
                            propTypes = newPropTypes; // Match production behavior more closely:
                            // $FlowFixMe
                            Object.defineProperty(lazyType, 'propTypes', {
                                enumerable: true
                            });
                        }
                    }
                });
            }
            return lazyType;
        }
        function forwardRef(render) {
            {
                if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
                    error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
                } else if (typeof render !== 'function') {
                    error('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
                } else {
                    if (render.length !== 0 && render.length !== 2) {
                        error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
                    }
                }
                if (render != null) {
                    if (render.defaultProps != null || render.propTypes != null) {
                        error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
                    }
                }
            }
            var elementType = {
                $$typeof: REACT_FORWARD_REF_TYPE,
                render: render
            };
            {
                var ownName;
                Object.defineProperty(elementType, 'displayName', {
                    enumerable: false,
                    configurable: true,
                    get: function() {
                        return ownName;
                    },
                    set: function(name) {
                        ownName = name; // The inner component shouldn't inherit this display name in most cases,
                        // because the component may be used elsewhere.
                        // But it's nice for anonymous functions to inherit the name,
                        // so that our component-stack generation logic will display their frames.
                        // An anonymous function generally suggests a pattern like:
                        //   React.forwardRef((props, ref) => {...});
                        // This kind of inner function is not used elsewhere so the side effect is okay.
                        if (!render.name && !render.displayName) {
                            render.displayName = name;
                        }
                    }
                });
            }
            return elementType;
        }
        var REACT_MODULE_REFERENCE;
        {
            REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
        }
        function isValidElementType(type) {
            if (typeof type === 'string' || typeof type === 'function') {
                return true;
            } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).
            if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
                return true;
            }
            if (typeof type === 'object' && type !== null) {
                if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
                // types supported by any Flight configuration anywhere since
                // we don't know which Flight build this will end up being used
                // with.
                type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {
                    return true;
                }
            }
            return false;
        }
        function memo(type, compare) {
            {
                if (!isValidElementType(type)) {
                    error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
                }
            }
            var elementType = {
                $$typeof: REACT_MEMO_TYPE,
                type: type,
                compare: compare === undefined ? null : compare
            };
            {
                var ownName;
                Object.defineProperty(elementType, 'displayName', {
                    enumerable: false,
                    configurable: true,
                    get: function() {
                        return ownName;
                    },
                    set: function(name) {
                        ownName = name; // The inner component shouldn't inherit this display name in most cases,
                        // because the component may be used elsewhere.
                        // But it's nice for anonymous functions to inherit the name,
                        // so that our component-stack generation logic will display their frames.
                        // An anonymous function generally suggests a pattern like:
                        //   React.memo((props) => {...});
                        // This kind of inner function is not used elsewhere so the side effect is okay.
                        if (!type.name && !type.displayName) {
                            type.displayName = name;
                        }
                    }
                });
            }
            return elementType;
        }
        function resolveDispatcher() {
            var dispatcher = ReactCurrentDispatcher.current;
            {
                if (dispatcher === null) {
                    error('Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for' + ' one of the following reasons:\n' + '1. You might have mismatching versions of React and the renderer (such as React DOM)\n' + '2. You might be breaking the Rules of Hooks\n' + '3. You might have more than one copy of React in the same app\n' + 'See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.');
                }
            }
            // intentionally don't throw our own error because this is in a hot path.
            // Also helps ensure this is inlined.
            return dispatcher;
        }
        function useContext(Context) {
            var dispatcher = resolveDispatcher();
            {
                // TODO: add a more generic warning for invalid values.
                if (Context._context !== undefined) {
                    var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
                    // and nobody should be using this in existing code.
                    if (realContext.Consumer === Context) {
                        error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
                    } else if (realContext.Provider === Context) {
                        error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
                    }
                }
            }
            return dispatcher.useContext(Context);
        }
        function useState(initialState) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useState(initialState);
        }
        function useReducer(reducer, initialArg, init) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useReducer(reducer, initialArg, init);
        }
        function useRef(initialValue) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useRef(initialValue);
        }
        function useEffect(create, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useEffect(create, deps);
        }
        function useInsertionEffect(create, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useInsertionEffect(create, deps);
        }
        function useLayoutEffect(create, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useLayoutEffect(create, deps);
        }
        function useCallback(callback, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useCallback(callback, deps);
        }
        function useMemo(create, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useMemo(create, deps);
        }
        function useImperativeHandle(ref, create, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useImperativeHandle(ref, create, deps);
        }
        function useDebugValue(value, formatterFn) {
            {
                var dispatcher = resolveDispatcher();
                return dispatcher.useDebugValue(value, formatterFn);
            }
        }
        function useTransition() {
            var dispatcher = resolveDispatcher();
            return dispatcher.useTransition();
        }
        function useDeferredValue(value) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useDeferredValue(value);
        }
        function useId() {
            var dispatcher = resolveDispatcher();
            return dispatcher.useId();
        }
        function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
        }
        // Helpers to patch console.logs to avoid logging during side-effect free
        // replaying on render function. This currently only patches the object
        // lazily which won't cover if the log function was extracted eagerly.
        // We could also eagerly patch the method.
        var disabledDepth = 0;
        var prevLog;
        var prevInfo;
        var prevWarn;
        var prevError;
        var prevGroup;
        var prevGroupCollapsed;
        var prevGroupEnd;
        function disabledLog() {}
        disabledLog.__reactDisabledLog = true;
        function disableLogs() {
            {
                if (disabledDepth === 0) {
                    /* eslint-disable react-internal/no-production-logging */ prevLog = console.log;
                    prevInfo = console.info;
                    prevWarn = console.warn;
                    prevError = console.error;
                    prevGroup = console.group;
                    prevGroupCollapsed = console.groupCollapsed;
                    prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099
                    var props = {
                        configurable: true,
                        enumerable: true,
                        value: disabledLog,
                        writable: true
                    }; // $FlowFixMe Flow thinks console is immutable.
                    Object.defineProperties(console, {
                        info: props,
                        log: props,
                        warn: props,
                        error: props,
                        group: props,
                        groupCollapsed: props,
                        groupEnd: props
                    });
                /* eslint-enable react-internal/no-production-logging */ }
                disabledDepth++;
            }
        }
        function reenableLogs() {
            {
                disabledDepth--;
                if (disabledDepth === 0) {
                    /* eslint-disable react-internal/no-production-logging */ var props = {
                        configurable: true,
                        enumerable: true,
                        writable: true
                    }; // $FlowFixMe Flow thinks console is immutable.
                    Object.defineProperties(console, {
                        log: assign({}, props, {
                            value: prevLog
                        }),
                        info: assign({}, props, {
                            value: prevInfo
                        }),
                        warn: assign({}, props, {
                            value: prevWarn
                        }),
                        error: assign({}, props, {
                            value: prevError
                        }),
                        group: assign({}, props, {
                            value: prevGroup
                        }),
                        groupCollapsed: assign({}, props, {
                            value: prevGroupCollapsed
                        }),
                        groupEnd: assign({}, props, {
                            value: prevGroupEnd
                        })
                    });
                /* eslint-enable react-internal/no-production-logging */ }
                if (disabledDepth < 0) {
                    error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
                }
            }
        }
        var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
        var prefix;
        function describeBuiltInComponentFrame(name, source, ownerFn) {
            {
                if (prefix === undefined) {
                    // Extract the VM specific prefix used by each line.
                    try {
                        throw Error();
                    } catch (x) {
                        var match = x.stack.trim().match(/\n( *(at )?)/);
                        prefix = match && match[1] || '';
                    }
                } // We use the prefix to ensure our stacks line up with native stack frames.
                return '\n' + prefix + name;
            }
        }
        var reentry = false;
        var componentFrameCache;
        {
            var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
            componentFrameCache = new PossiblyWeakMap();
        }
        function describeNativeComponentFrame(fn, construct) {
            // If something asked for a stack inside a fake render, it should get ignored.
            if (!fn || reentry) {
                return '';
            }
            {
                var frame = componentFrameCache.get(fn);
                if (frame !== undefined) {
                    return frame;
                }
            }
            var control;
            reentry = true;
            var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.
            Error.prepareStackTrace = undefined;
            var previousDispatcher;
            {
                previousDispatcher = ReactCurrentDispatcher$1.current; // Set the dispatcher in DEV because this might be call in the render function
                // for warnings.
                ReactCurrentDispatcher$1.current = null;
                disableLogs();
            }
            try {
                // This should throw.
                if (construct) {
                    // Something should be setting the props in the constructor.
                    var Fake = function() {
                        throw Error();
                    }; // $FlowFixMe
                    Object.defineProperty(Fake.prototype, 'props', {
                        set: function() {
                            // We use a throwing setter instead of frozen or non-writable props
                            // because that won't throw in a non-strict mode function.
                            throw Error();
                        }
                    });
                    if (typeof Reflect === 'object' && Reflect.construct) {
                        // We construct a different control for this case to include any extra
                        // frames added by the construct call.
                        try {
                            Reflect.construct(Fake, []);
                        } catch (x) {
                            control = x;
                        }
                        Reflect.construct(fn, [], Fake);
                    } else {
                        try {
                            Fake.call();
                        } catch (x) {
                            control = x;
                        }
                        fn.call(Fake.prototype);
                    }
                } else {
                    try {
                        throw Error();
                    } catch (x) {
                        control = x;
                    }
                    fn();
                }
            } catch (sample) {
                // This is inlined manually because closure doesn't do it for us.
                if (sample && control && typeof sample.stack === 'string') {
                    // This extracts the first frame from the sample that isn't also in the control.
                    // Skipping one frame that we assume is the frame that calls the two.
                    var sampleLines = sample.stack.split('\n');
                    var controlLines = control.stack.split('\n');
                    var s = sampleLines.length - 1;
                    var c = controlLines.length - 1;
                    while(s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]){
                        // We expect at least one stack frame to be shared.
                        // Typically this will be the root most one. However, stack frames may be
                        // cut off due to maximum stack limits. In this case, one maybe cut off
                        // earlier than the other. We assume that the sample is longer or the same
                        // and there for cut off earlier. So we should find the root most frame in
                        // the sample somewhere in the control.
                        c--;
                    }
                    for(; s >= 1 && c >= 0; s--, c--){
                        // Next we find the first one that isn't the same which should be the
                        // frame that called our sample function and the control.
                        if (sampleLines[s] !== controlLines[c]) {
                            // In V8, the first line is describing the message but other VMs don't.
                            // If we're about to return the first line, and the control is also on the same
                            // line, that's a pretty good indicator that our sample threw at same line as
                            // the control. I.e. before we entered the sample frame. So we ignore this result.
                            // This can happen if you passed a class to function component, or non-function.
                            if (s !== 1 || c !== 1) {
                                do {
                                    s--;
                                    c--; // We may still have similar intermediate frames from the construct call.
                                    // The next one that isn't the same should be our match though.
                                    if (c < 0 || sampleLines[s] !== controlLines[c]) {
                                        // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                                        var _frame = '\n' + sampleLines[s].replace(' at new ', ' at '); // If our component frame is labeled "<anonymous>"
                                        // but we have a user-provided "displayName"
                                        // splice it in to make the stack more readable.
                                        if (fn.displayName && _frame.includes('<anonymous>')) {
                                            _frame = _frame.replace('<anonymous>', fn.displayName);
                                        }
                                        {
                                            if (typeof fn === 'function') {
                                                componentFrameCache.set(fn, _frame);
                                            }
                                        }
                                        return _frame;
                                    }
                                }while (s >= 1 && c >= 0)
                            }
                            break;
                        }
                    }
                }
            } finally{
                reentry = false;
                {
                    ReactCurrentDispatcher$1.current = previousDispatcher;
                    reenableLogs();
                }
                Error.prepareStackTrace = previousPrepareStackTrace;
            } // Fallback to just using the name if we couldn't make it throw.
            var name = fn ? fn.displayName || fn.name : '';
            var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';
            {
                if (typeof fn === 'function') {
                    componentFrameCache.set(fn, syntheticFrame);
                }
            }
            return syntheticFrame;
        }
        function describeFunctionComponentFrame(fn, source, ownerFn) {
            {
                return describeNativeComponentFrame(fn, false);
            }
        }
        function shouldConstruct(Component) {
            var prototype = Component.prototype;
            return !!(prototype && prototype.isReactComponent);
        }
        function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
            if (type == null) {
                return '';
            }
            if (typeof type === 'function') {
                {
                    return describeNativeComponentFrame(type, shouldConstruct(type));
                }
            }
            if (typeof type === 'string') {
                return describeBuiltInComponentFrame(type);
            }
            switch(type){
                case REACT_SUSPENSE_TYPE:
                    return describeBuiltInComponentFrame('Suspense');
                case REACT_SUSPENSE_LIST_TYPE:
                    return describeBuiltInComponentFrame('SuspenseList');
            }
            if (typeof type === 'object') {
                switch(type.$$typeof){
                    case REACT_FORWARD_REF_TYPE:
                        return describeFunctionComponentFrame(type.render);
                    case REACT_MEMO_TYPE:
                        // Memo may contain any component type so we recursively resolve it.
                        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
                    case REACT_LAZY_TYPE:
                        {
                            var lazyComponent = type;
                            var payload = lazyComponent._payload;
                            var init = lazyComponent._init;
                            try {
                                // Lazy may contain any component type so we recursively resolve it.
                                return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                            } catch (x) {}
                        }
                }
            }
            return '';
        }
        var loggedTypeFailures = {};
        var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement(element) {
            {
                if (element) {
                    var owner = element._owner;
                    var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
                    ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
                } else {
                    ReactDebugCurrentFrame$1.setExtraStackFrame(null);
                }
            }
        }
        function checkPropTypes(typeSpecs, values, location, componentName, element) {
            {
                // $FlowFixMe This is okay but Flow doesn't know it.
                var has = Function.call.bind(hasOwnProperty);
                for(var typeSpecName in typeSpecs){
                    if (has(typeSpecs, typeSpecName)) {
                        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
                        // fail the render phase where it didn't fail before. So we log it.
                        // After these have been cleaned up, we'll let them throw.
                        try {
                            // This is intentionally an invariant that gets caught. It's the same
                            // behavior as without this statement except with a better message.
                            if (typeof typeSpecs[typeSpecName] !== 'function') {
                                // eslint-disable-next-line react-internal/prod-error-codes
                                var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
                                err.name = 'Invariant Violation';
                                throw err;
                            }
                            error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
                        } catch (ex) {
                            error$1 = ex;
                        }
                        if (error$1 && !(error$1 instanceof Error)) {
                            setCurrentlyValidatingElement(element);
                            error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);
                            setCurrentlyValidatingElement(null);
                        }
                        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                            // Only monitor this failure once because there tends to be a lot of the
                            // same error.
                            loggedTypeFailures[error$1.message] = true;
                            setCurrentlyValidatingElement(element);
                            error('Failed %s type: %s', location, error$1.message);
                            setCurrentlyValidatingElement(null);
                        }
                    }
                }
            }
        }
        function setCurrentlyValidatingElement$1(element) {
            {
                if (element) {
                    var owner = element._owner;
                    var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
                    setExtraStackFrame(stack);
                } else {
                    setExtraStackFrame(null);
                }
            }
        }
        var propTypesMisspellWarningShown;
        {
            propTypesMisspellWarningShown = false;
        }
        function getDeclarationErrorAddendum() {
            if (ReactCurrentOwner.current) {
                var name = getComponentNameFromType(ReactCurrentOwner.current.type);
                if (name) {
                    return '\n\nCheck the render method of `' + name + '`.';
                }
            }
            return '';
        }
        function getSourceInfoErrorAddendum(source) {
            if (source !== undefined) {
                var fileName = source.fileName.replace(/^.*[\\\/]/, '');
                var lineNumber = source.lineNumber;
                return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
            }
            return '';
        }
        function getSourceInfoErrorAddendumForProps(elementProps) {
            if (elementProps !== null && elementProps !== undefined) {
                return getSourceInfoErrorAddendum(elementProps.__source);
            }
            return '';
        }
        /**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */ var ownerHasKeyUseWarning = {};
        function getCurrentComponentErrorInfo(parentType) {
            var info = getDeclarationErrorAddendum();
            if (!info) {
                var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
                if (parentName) {
                    info = "\n\nCheck the top-level render call using <" + parentName + ">.";
                }
            }
            return info;
        }
        /**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */ function validateExplicitKey(element, parentType) {
            if (!element._store || element._store.validated || element.key != null) {
                return;
            }
            element._store.validated = true;
            var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
            if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
                return;
            }
            ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
            // property, it may be the creator of the child that's responsible for
            // assigning it a key.
            var childOwner = '';
            if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
                // Give the component that originally created this child.
                childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
            }
            {
                setCurrentlyValidatingElement$1(element);
                error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
                setCurrentlyValidatingElement$1(null);
            }
        }
        /**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */ function validateChildKeys(node, parentType) {
            if (typeof node !== 'object') {
                return;
            }
            if (isArray(node)) {
                for(var i = 0; i < node.length; i++){
                    var child = node[i];
                    if (isValidElement(child)) {
                        validateExplicitKey(child, parentType);
                    }
                }
            } else if (isValidElement(node)) {
                // This element was passed in a valid location.
                if (node._store) {
                    node._store.validated = true;
                }
            } else if (node) {
                var iteratorFn = getIteratorFn(node);
                if (typeof iteratorFn === 'function') {
                    // Entry iterators used to provide implicit keys,
                    // but now we print a separate warning for them later.
                    if (iteratorFn !== node.entries) {
                        var iterator = iteratorFn.call(node);
                        var step;
                        while(!(step = iterator.next()).done){
                            if (isValidElement(step.value)) {
                                validateExplicitKey(step.value, parentType);
                            }
                        }
                    }
                }
            }
        }
        /**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */ function validatePropTypes(element) {
            {
                var type = element.type;
                if (type === null || type === undefined || typeof type === 'string') {
                    return;
                }
                var propTypes;
                if (typeof type === 'function') {
                    propTypes = type.propTypes;
                } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
                // Inner props are checked in the reconciler.
                type.$$typeof === REACT_MEMO_TYPE)) {
                    propTypes = type.propTypes;
                } else {
                    return;
                }
                if (propTypes) {
                    // Intentionally inside to avoid triggering lazy initializers:
                    var name = getComponentNameFromType(type);
                    checkPropTypes(propTypes, element.props, 'prop', name, element);
                } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
                    propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:
                    var _name = getComponentNameFromType(type);
                    error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
                }
                if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
                    error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
                }
            }
        }
        /**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */ function validateFragmentProps(fragment) {
            {
                var keys = Object.keys(fragment.props);
                for(var i = 0; i < keys.length; i++){
                    var key = keys[i];
                    if (key !== 'children' && key !== 'key') {
                        setCurrentlyValidatingElement$1(fragment);
                        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);
                        setCurrentlyValidatingElement$1(null);
                        break;
                    }
                }
                if (fragment.ref !== null) {
                    setCurrentlyValidatingElement$1(fragment);
                    error('Invalid attribute `ref` supplied to `React.Fragment`.');
                    setCurrentlyValidatingElement$1(null);
                }
            }
        }
        function createElementWithValidation(type, props, children) {
            var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
            // succeed and there will likely be errors in render.
            if (!validType) {
                var info = '';
                if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
                    info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
                }
                var sourceInfo = getSourceInfoErrorAddendumForProps(props);
                if (sourceInfo) {
                    info += sourceInfo;
                } else {
                    info += getDeclarationErrorAddendum();
                }
                var typeString;
                if (type === null) {
                    typeString = 'null';
                } else if (isArray(type)) {
                    typeString = 'array';
                } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
                    typeString = "<" + (getComponentNameFromType(type.type) || 'Unknown') + " />";
                    info = ' Did you accidentally export a JSX literal instead of a component?';
                } else {
                    typeString = typeof type;
                }
                {
                    error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
                }
            }
            var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
            // TODO: Drop this when these are no longer allowed as the type argument.
            if (element == null) {
                return element;
            } // Skip key warning if the type isn't valid since our key validation logic
            // doesn't expect a non-string/function type and can throw confusing errors.
            // We don't want exception behavior to differ between dev and prod.
            // (Rendering will throw with a helpful message and as soon as the type is
            // fixed, the key warnings will appear.)
            if (validType) {
                for(var i = 2; i < arguments.length; i++){
                    validateChildKeys(arguments[i], type);
                }
            }
            if (type === REACT_FRAGMENT_TYPE) {
                validateFragmentProps(element);
            } else {
                validatePropTypes(element);
            }
            return element;
        }
        var didWarnAboutDeprecatedCreateFactory = false;
        function createFactoryWithValidation(type) {
            var validatedFactory = createElementWithValidation.bind(null, type);
            validatedFactory.type = type;
            {
                if (!didWarnAboutDeprecatedCreateFactory) {
                    didWarnAboutDeprecatedCreateFactory = true;
                    warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');
                } // Legacy hook: remove it
                Object.defineProperty(validatedFactory, 'type', {
                    enumerable: false,
                    get: function() {
                        warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');
                        Object.defineProperty(this, 'type', {
                            value: type
                        });
                        return type;
                    }
                });
            }
            return validatedFactory;
        }
        function cloneElementWithValidation(element, props, children) {
            var newElement = cloneElement.apply(this, arguments);
            for(var i = 2; i < arguments.length; i++){
                validateChildKeys(arguments[i], newElement.type);
            }
            validatePropTypes(newElement);
            return newElement;
        }
        function startTransition(scope, options) {
            var prevTransition = ReactCurrentBatchConfig.transition;
            ReactCurrentBatchConfig.transition = {};
            var currentTransition = ReactCurrentBatchConfig.transition;
            {
                ReactCurrentBatchConfig.transition._updatedFibers = new Set();
            }
            try {
                scope();
            } finally{
                ReactCurrentBatchConfig.transition = prevTransition;
                {
                    if (prevTransition === null && currentTransition._updatedFibers) {
                        var updatedFibersCount = currentTransition._updatedFibers.size;
                        if (updatedFibersCount > 10) {
                            warn('Detected a large number of updates inside startTransition. ' + 'If this is due to a subscription please re-write it to use React provided hooks. ' + 'Otherwise concurrent mode guarantees are off the table.');
                        }
                        currentTransition._updatedFibers.clear();
                    }
                }
            }
        }
        var didWarnAboutMessageChannel = false;
        var enqueueTaskImpl = null;
        function enqueueTask(task) {
            if (enqueueTaskImpl === null) {
                try {
                    // read require off the module object to get around the bundlers.
                    // we don't want them to detect a require and bundle a Node polyfill.
                    var requireString = ('require' + Math.random()).slice(0, 7);
                    var nodeRequire = module && module[requireString]; // assuming we're in node, let's try to get node's
                    // version of setImmediate, bypassing fake timers if any.
                    enqueueTaskImpl = nodeRequire.call(module, 'timers').setImmediate;
                } catch (_err) {
                    // we're in a browser
                    // we can't use regular timers because they may still be faked
                    // so we try MessageChannel+postMessage instead
                    enqueueTaskImpl = function(callback) {
                        {
                            if (didWarnAboutMessageChannel === false) {
                                didWarnAboutMessageChannel = true;
                                if (typeof MessageChannel === 'undefined') {
                                    error('This browser does not have a MessageChannel implementation, ' + 'so enqueuing tasks via await act(async () => ...) will fail. ' + 'Please file an issue at https://github.com/facebook/react/issues ' + 'if you encounter this warning.');
                                }
                            }
                        }
                        var channel = new MessageChannel();
                        channel.port1.onmessage = callback;
                        channel.port2.postMessage(undefined);
                    };
                }
            }
            return enqueueTaskImpl(task);
        }
        var actScopeDepth = 0;
        var didWarnNoAwaitAct = false;
        function act(callback) {
            {
                // `act` calls can be nested, so we track the depth. This represents the
                // number of `act` scopes on the stack.
                var prevActScopeDepth = actScopeDepth;
                actScopeDepth++;
                if (ReactCurrentActQueue.current === null) {
                    // This is the outermost `act` scope. Initialize the queue. The reconciler
                    // will detect the queue and use it instead of Scheduler.
                    ReactCurrentActQueue.current = [];
                }
                var prevIsBatchingLegacy = ReactCurrentActQueue.isBatchingLegacy;
                var result;
                try {
                    // Used to reproduce behavior of `batchedUpdates` in legacy mode. Only
                    // set to `true` while the given callback is executed, not for updates
                    // triggered during an async event, because this is how the legacy
                    // implementation of `act` behaved.
                    ReactCurrentActQueue.isBatchingLegacy = true;
                    result = callback(); // Replicate behavior of original `act` implementation in legacy mode,
                    // which flushed updates immediately after the scope function exits, even
                    // if it's an async function.
                    if (!prevIsBatchingLegacy && ReactCurrentActQueue.didScheduleLegacyUpdate) {
                        var queue = ReactCurrentActQueue.current;
                        if (queue !== null) {
                            ReactCurrentActQueue.didScheduleLegacyUpdate = false;
                            flushActQueue(queue);
                        }
                    }
                } catch (error) {
                    popActScope(prevActScopeDepth);
                    throw error;
                } finally{
                    ReactCurrentActQueue.isBatchingLegacy = prevIsBatchingLegacy;
                }
                if (result !== null && typeof result === 'object' && typeof result.then === 'function') {
                    var thenableResult = result; // The callback is an async function (i.e. returned a promise). Wait
                    // for it to resolve before exiting the current scope.
                    var wasAwaited = false;
                    var thenable = {
                        then: function(resolve, reject) {
                            wasAwaited = true;
                            thenableResult.then(function(returnValue) {
                                popActScope(prevActScopeDepth);
                                if (actScopeDepth === 0) {
                                    // We've exited the outermost act scope. Recursively flush the
                                    // queue until there's no remaining work.
                                    recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                                } else {
                                    resolve(returnValue);
                                }
                            }, function(error) {
                                // The callback threw an error.
                                popActScope(prevActScopeDepth);
                                reject(error);
                            });
                        }
                    };
                    {
                        if (!didWarnNoAwaitAct && typeof Promise !== 'undefined') {
                            // eslint-disable-next-line no-undef
                            Promise.resolve().then(function() {}).then(function() {
                                if (!wasAwaited) {
                                    didWarnNoAwaitAct = true;
                                    error('You called act(async () => ...) without await. ' + 'This could lead to unexpected testing behaviour, ' + 'interleaving multiple act calls and mixing their ' + 'scopes. ' + 'You should - await act(async () => ...);');
                                }
                            });
                        }
                    }
                    return thenable;
                } else {
                    var returnValue = result; // The callback is not an async function. Exit the current scope
                    // immediately, without awaiting.
                    popActScope(prevActScopeDepth);
                    if (actScopeDepth === 0) {
                        // Exiting the outermost act scope. Flush the queue.
                        var _queue = ReactCurrentActQueue.current;
                        if (_queue !== null) {
                            flushActQueue(_queue);
                            ReactCurrentActQueue.current = null;
                        } // Return a thenable. If the user awaits it, we'll flush again in
                        // case additional work was scheduled by a microtask.
                        var _thenable = {
                            then: function(resolve, reject) {
                                // Confirm we haven't re-entered another `act` scope, in case
                                // the user does something weird like await the thenable
                                // multiple times.
                                if (ReactCurrentActQueue.current === null) {
                                    // Recursively flush the queue until there's no remaining work.
                                    ReactCurrentActQueue.current = [];
                                    recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                                } else {
                                    resolve(returnValue);
                                }
                            }
                        };
                        return _thenable;
                    } else {
                        // Since we're inside a nested `act` scope, the returned thenable
                        // immediately resolves. The outer scope will flush the queue.
                        var _thenable2 = {
                            then: function(resolve, reject) {
                                resolve(returnValue);
                            }
                        };
                        return _thenable2;
                    }
                }
            }
        }
        function popActScope(prevActScopeDepth) {
            {
                if (prevActScopeDepth !== actScopeDepth - 1) {
                    error('You seem to have overlapping act() calls, this is not supported. ' + 'Be sure to await previous act() calls before making a new one. ');
                }
                actScopeDepth = prevActScopeDepth;
            }
        }
        function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
            {
                var queue = ReactCurrentActQueue.current;
                if (queue !== null) {
                    try {
                        flushActQueue(queue);
                        enqueueTask(function() {
                            if (queue.length === 0) {
                                // No additional work was scheduled. Finish.
                                ReactCurrentActQueue.current = null;
                                resolve(returnValue);
                            } else {
                                // Keep flushing work until there's none left.
                                recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                            }
                        });
                    } catch (error) {
                        reject(error);
                    }
                } else {
                    resolve(returnValue);
                }
            }
        }
        var isFlushing = false;
        function flushActQueue(queue) {
            {
                if (!isFlushing) {
                    // Prevent re-entrance.
                    isFlushing = true;
                    var i = 0;
                    try {
                        for(; i < queue.length; i++){
                            var callback = queue[i];
                            do {
                                callback = callback(true);
                            }while (callback !== null)
                        }
                        queue.length = 0;
                    } catch (error) {
                        // If something throws, leave the remaining callbacks on the queue.
                        queue = queue.slice(i + 1);
                        throw error;
                    } finally{
                        isFlushing = false;
                    }
                }
            }
        }
        var createElement$1 = createElementWithValidation;
        var cloneElement$1 = cloneElementWithValidation;
        var createFactory = createFactoryWithValidation;
        var Children = {
            map: mapChildren,
            forEach: forEachChildren,
            count: countChildren,
            toArray: toArray,
            only: onlyChild
        };
        exports.Children = Children;
        exports.Component = Component;
        exports.Fragment = REACT_FRAGMENT_TYPE;
        exports.Profiler = REACT_PROFILER_TYPE;
        exports.PureComponent = PureComponent;
        exports.StrictMode = REACT_STRICT_MODE_TYPE;
        exports.Suspense = REACT_SUSPENSE_TYPE;
        exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
        exports.act = act;
        exports.cloneElement = cloneElement$1;
        exports.createContext = createContext;
        exports.createElement = createElement$1;
        exports.createFactory = createFactory;
        exports.createRef = createRef;
        exports.forwardRef = forwardRef;
        exports.isValidElement = isValidElement;
        exports.lazy = lazy;
        exports.memo = memo;
        exports.startTransition = startTransition;
        exports.unstable_act = act;
        exports.useCallback = useCallback;
        exports.useContext = useContext;
        exports.useDebugValue = useDebugValue;
        exports.useDeferredValue = useDeferredValue;
        exports.useEffect = useEffect;
        exports.useId = useId;
        exports.useImperativeHandle = useImperativeHandle;
        exports.useInsertionEffect = useInsertionEffect;
        exports.useLayoutEffect = useLayoutEffect;
        exports.useMemo = useMemo;
        exports.useReducer = useReducer;
        exports.useRef = useRef;
        exports.useState = useState;
        exports.useSyncExternalStore = useSyncExternalStore;
        exports.useTransition = useTransition;
        exports.version = ReactVersion;
        /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */ if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === 'function') {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
        }
    })();
}

}.call(this) }),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/react/index.js [middleware] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

'use strict';
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    module.exports = __turbopack_require__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/react/cjs/react.development.js [middleware] (ecmascript)");
}

}.call(this) }),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/client/components/hooks-server-context.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "DynamicServerError": ()=>DynamicServerError,
    "isDynamicServerError": ()=>isDynamicServerError
});
const DYNAMIC_ERROR_CODE = "DYNAMIC_SERVER_USAGE";
class DynamicServerError extends Error {
    constructor(description){
        super("Dynamic server usage: " + description);
        this.description = description;
        this.digest = DYNAMIC_ERROR_CODE;
    }
}
function isDynamicServerError(err) {
    if (typeof err !== "object" || err === null || !("digest" in err) || typeof err.digest !== "string") {
        return false;
    }
    return err.digest === DYNAMIC_ERROR_CODE;
} //# sourceMappingURL=hooks-server-context.js.map

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/client/components/static-generation-bailout.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "StaticGenBailoutError": ()=>StaticGenBailoutError,
    "isStaticGenBailoutError": ()=>isStaticGenBailoutError
});
const NEXT_STATIC_GEN_BAILOUT = "NEXT_STATIC_GEN_BAILOUT";
class StaticGenBailoutError extends Error {
    constructor(...args){
        super(...args);
        this.code = NEXT_STATIC_GEN_BAILOUT;
    }
}
function isStaticGenBailoutError(error) {
    if (typeof error !== "object" || error === null || !("code" in error)) {
        return false;
    }
    return error.code === NEXT_STATIC_GEN_BAILOUT;
} //# sourceMappingURL=static-generation-bailout.js.map

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/lib/url.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "getPathname": ()=>getPathname,
    "isFullStringUrl": ()=>isFullStringUrl
});
const DUMMY_ORIGIN = "http://n";
function getUrlWithoutHost(url) {
    return new URL(url, DUMMY_ORIGIN);
}
function getPathname(url) {
    return getUrlWithoutHost(url).pathname;
}
function isFullStringUrl(url) {
    return /https?:\/\//.test(url);
} //# sourceMappingURL=url.js.map

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/server/app-render/dynamic-rendering.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

/**
 * The functions provided by this module are used to communicate certain properties
 * about the currently running code so that Next.js can make decisions on how to handle
 * the current execution in different rendering modes such as pre-rendering, resuming, and SSR.
 *
 * Today Next.js treats all code as potentially static. Certain APIs may only make sense when dynamically rendering.
 * Traditionally this meant deopting the entire render to dynamic however with PPR we can now deopt parts
 * of a React tree as dynamic while still keeping other parts static. There are really two different kinds of
 * Dynamic indications.
 *
 * The first is simply an intention to be dynamic. unstable_noStore is an example of this where
 * the currently executing code simply declares that the current scope is dynamic but if you use it
 * inside unstable_cache it can still be cached. This type of indication can be removed if we ever
 * make the default dynamic to begin with because the only way you would ever be static is inside
 * a cache scope which this indication does not affect.
 *
 * The second is an indication that a dynamic data source was read. This is a stronger form of dynamic
 * because it means that it is inappropriate to cache this at all. using a dynamic data source inside
 * unstable_cache should error. If you want to use some dynamic data inside unstable_cache you should
 * read that data outside the cache and pass it in as an argument to the cached function.
 */ // Once postpone is in stable we should switch to importing the postpone export directly
__turbopack_esm__({
    "Postpone": ()=>Postpone,
    "createPostponedAbortSignal": ()=>createPostponedAbortSignal,
    "createPrerenderState": ()=>createPrerenderState,
    "formatDynamicAPIAccesses": ()=>formatDynamicAPIAccesses,
    "markCurrentScopeAsDynamic": ()=>markCurrentScopeAsDynamic,
    "trackDynamicDataAccessed": ()=>trackDynamicDataAccessed,
    "trackDynamicFetch": ()=>trackDynamicFetch,
    "usedDynamicAPIs": ()=>usedDynamicAPIs
});
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$react$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/react/index.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$hooks$2d$server$2d$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/client/components/hooks-server-context.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$static$2d$generation$2d$bailout$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/client/components/static-generation-bailout.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$url$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/lib/url.js [middleware] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
const hasPostpone = typeof __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$react$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].unstable_postpone === "function";
function createPrerenderState(isDebugSkeleton) {
    return {
        isDebugSkeleton,
        dynamicAccesses: []
    };
}
function markCurrentScopeAsDynamic(store, expression) {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$url$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["getPathname"])(store.urlPathname);
    if (store.isUnstableCacheCallback) {
        // inside cache scopes marking a scope as dynamic has no effect because the outer cache scope
        // creates a cache boundary. This is subtly different from reading a dynamic data source which is
        // forbidden inside a cache scope.
        return;
    } else if (store.dynamicShouldError) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$static$2d$generation$2d$bailout$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["StaticGenBailoutError"](`Route ${pathname} with \`dynamic = "error"\` couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`);
    } else if (store.prerenderState) {
        // We track that we had a dynamic scope that postponed.
        // This will be used by the renderer to decide whether
        // the prerender requires a resume
        postponeWithTracking(store.prerenderState, expression, pathname);
    } else {
        store.revalidate = 0;
        if (store.isStaticGeneration) {
            // We aren't prerendering but we are generating a static page. We need to bail out of static generation
            const err = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$hooks$2d$server$2d$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["DynamicServerError"](`Route ${pathname} couldn't be rendered statically because it used ${expression}. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`);
            store.dynamicUsageDescription = expression;
            store.dynamicUsageStack = err.stack;
            throw err;
        }
    }
}
function trackDynamicDataAccessed(store, expression) {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$url$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["getPathname"])(store.urlPathname);
    if (store.isUnstableCacheCallback) {
        throw new Error(`Route ${pathname} used "${expression}" inside a function cached with "unstable_cache(...)". Accessing Dynamic data sources inside a cache scope is not supported. If you need this data inside a cached function use "${expression}" outside of the cached function and pass the required dynamic data in as an argument. See more info here: https://nextjs.org/docs/app/api-reference/functions/unstable_cache`);
    } else if (store.dynamicShouldError) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$static$2d$generation$2d$bailout$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["StaticGenBailoutError"](`Route ${pathname} with \`dynamic = "error"\` couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`);
    } else if (store.prerenderState) {
        // We track that we had a dynamic scope that postponed.
        // This will be used by the renderer to decide whether
        // the prerender requires a resume
        postponeWithTracking(store.prerenderState, expression, pathname);
    } else {
        store.revalidate = 0;
        if (store.isStaticGeneration) {
            // We aren't prerendering but we are generating a static page. We need to bail out of static generation
            const err = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$hooks$2d$server$2d$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["DynamicServerError"](`Route ${pathname} couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`);
            store.dynamicUsageDescription = expression;
            store.dynamicUsageStack = err.stack;
            throw err;
        }
    }
}
function Postpone({ reason, prerenderState, pathname }) {
    postponeWithTracking(prerenderState, reason, pathname);
}
function trackDynamicFetch(store, expression) {
    if (store.prerenderState) {
        postponeWithTracking(store.prerenderState, expression, store.urlPathname);
    }
}
function postponeWithTracking(prerenderState, expression, pathname) {
    assertPostpone();
    const reason = `Route ${pathname} needs to bail out of prerendering at this point because it used ${expression}. ` + `React throws this special object to indicate where. It should not be caught by ` + `your own try/catch. Learn more: https://nextjs.org/docs/messages/ppr-caught-error`;
    prerenderState.dynamicAccesses.push({
        // When we aren't debugging, we don't need to create another error for the
        // stack trace.
        stack: prerenderState.isDebugSkeleton ? new Error().stack : undefined,
        expression
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$react$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].unstable_postpone(reason);
}
function usedDynamicAPIs(prerenderState) {
    return prerenderState.dynamicAccesses.length > 0;
}
function formatDynamicAPIAccesses(prerenderState) {
    return prerenderState.dynamicAccesses.filter((access)=>typeof access.stack === "string" && access.stack.length > 0).map(({ expression, stack })=>{
        stack = stack.split("\n") // Remove the "Error: " prefix from the first line of the stack trace as
        // well as the first 4 lines of the stack trace which is the distance
        // from the user code and the `new Error().stack` call.
        .slice(4).filter((line)=>{
            // Exclude Next.js internals from the stack trace.
            if (line.includes("node_modules/next/")) {
                return false;
            }
            // Exclude anonymous functions from the stack trace.
            if (line.includes(" (<anonymous>)")) {
                return false;
            }
            // Exclude Node.js internals from the stack trace.
            if (line.includes(" (node:")) {
                return false;
            }
            return true;
        }).join("\n");
        return `Dynamic API Usage Debug - ${expression}:\n${stack}`;
    });
}
function assertPostpone() {
    if (!hasPostpone) {
        throw new Error(`Invariant: React.unstable_postpone is not defined. This suggests the wrong version of React was loaded. This is a bug in Next.js`);
    }
}
function createPostponedAbortSignal(reason) {
    assertPostpone();
    const controller = new AbortController();
    // We get our hands on a postpone instance by calling postpone and catching the throw
    try {
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$react$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].unstable_postpone(reason);
    } catch (x) {
        controller.abort(x);
    }
    return controller.signal;
} //# sourceMappingURL=dynamic-rendering.js.map

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/client/components/draft-mode.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "DraftMode": ()=>DraftMode
});
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$static$2d$generation$2d$async$2d$storage$2e$external$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/client/components/static-generation-async-storage.external.js [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$static$2d$generation$2d$async$2d$storage$2d$instance$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/client/components/static-generation-async-storage-instance.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/server/app-render/dynamic-rendering.js [middleware] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
class DraftMode {
    get isEnabled() {
        return this._provider.isEnabled;
    }
    enable() {
        const store = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$static$2d$generation$2d$async$2d$storage$2d$instance$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["staticGenerationAsyncStorage"].getStore();
        if (store) {
            // We we have a store we want to track dynamic data access to ensure we
            // don't statically generate routes that manipulate draft mode.
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["trackDynamicDataAccessed"])(store, "draftMode().enable()");
        }
        return this._provider.enable();
    }
    disable() {
        const store = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$static$2d$generation$2d$async$2d$storage$2d$instance$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["staticGenerationAsyncStorage"].getStore();
        if (store) {
            // We we have a store we want to track dynamic data access to ensure we
            // don't statically generate routes that manipulate draft mode.
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["trackDynamicDataAccessed"])(store, "draftMode().disable()");
        }
        return this._provider.disable();
    }
    constructor(provider){
        this._provider = provider;
    }
} //# sourceMappingURL=draft-mode.js.map

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/client/components/headers.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "cookies": ()=>cookies,
    "draftMode": ()=>draftMode,
    "headers": ()=>headers
});
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$request$2d$cookies$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/server/web/spec-extension/adapters/request-cookies.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/server/web/spec-extension/adapters/headers.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$cookies$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/server/web/spec-extension/cookies.js [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f40$edge$2d$runtime$2f$cookies$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/compiled/@edge-runtime/cookies/index.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$action$2d$async$2d$storage$2e$external$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/client/components/action-async-storage.external.js [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$action$2d$async$2d$storage$2d$instance$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/client/components/action-async-storage-instance.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$draft$2d$mode$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/client/components/draft-mode.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/server/app-render/dynamic-rendering.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$static$2d$generation$2d$async$2d$storage$2e$external$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/client/components/static-generation-async-storage.external.js [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$static$2d$generation$2d$async$2d$storage$2d$instance$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/client/components/static-generation-async-storage-instance.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$request$2d$async$2d$storage$2e$external$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/client/components/request-async-storage.external.js [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$request$2d$async$2d$storage$2e$external$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/client/components/request-async-storage.external.js [middleware] (ecmascript) <locals>");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
;
;
function headers() {
    const callingExpression = "headers";
    const staticGenerationStore = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$static$2d$generation$2d$async$2d$storage$2d$instance$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["staticGenerationAsyncStorage"].getStore();
    if (staticGenerationStore) {
        if (staticGenerationStore.forceStatic) {
            // When we are forcing static we don't mark this as a Dynamic read and we return an empty headers object
            return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["HeadersAdapter"].seal(new Headers({}));
        } else {
            // We will return a real headers object below so we mark this call as reading from a dynamic data source
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["trackDynamicDataAccessed"])(staticGenerationStore, callingExpression);
        }
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$request$2d$async$2d$storage$2e$external$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getExpectedRequestStore"])(callingExpression).headers;
}
function cookies() {
    const callingExpression = "cookies";
    const staticGenerationStore = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$static$2d$generation$2d$async$2d$storage$2d$instance$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["staticGenerationAsyncStorage"].getStore();
    if (staticGenerationStore) {
        if (staticGenerationStore.forceStatic) {
            // When we are forcing static we don't mark this as a Dynamic read and we return an empty cookies object
            return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$request$2d$cookies$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["RequestCookiesAdapter"].seal(new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f40$edge$2d$runtime$2f$cookies$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["RequestCookies"](new Headers({})));
        } else {
            // We will return a real headers object below so we mark this call as reading from a dynamic data source
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["trackDynamicDataAccessed"])(staticGenerationStore, callingExpression);
        }
    }
    const requestStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$request$2d$async$2d$storage$2e$external$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getExpectedRequestStore"])(callingExpression);
    const asyncActionStore = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$action$2d$async$2d$storage$2d$instance$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["actionAsyncStorage"].getStore();
    if ((asyncActionStore == null ? void 0 : asyncActionStore.isAction) || (asyncActionStore == null ? void 0 : asyncActionStore.isAppRoute)) {
        // We can't conditionally return different types here based on the context.
        // To avoid confusion, we always return the readonly type here.
        return requestStore.mutableCookies;
    }
    return requestStore.cookies;
}
function draftMode() {
    const callingExpression = "draftMode";
    const requestStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$request$2d$async$2d$storage$2e$external$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getExpectedRequestStore"])(callingExpression);
    return new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$draft$2d$mode$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["DraftMode"](requestStore.draftMode);
} //# sourceMappingURL=headers.js.map

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/api/headers.js [middleware] (ecmascript) <locals>": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({});
;
 //# sourceMappingURL=headers.js.map

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/api/headers.js [middleware] (ecmascript) <module evaluation>": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/client/components/headers.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/api/headers.js [middleware] (ecmascript) <locals>");
"__TURBOPACK__ecmascript__hoisting__location__";

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/jwt-decode/build/esm/index.js [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "InvalidTokenError": ()=>InvalidTokenError,
    "jwtDecode": ()=>jwtDecode
});
class InvalidTokenError extends Error {
}
InvalidTokenError.prototype.name = "InvalidTokenError";
function b64DecodeUnicode(str) {
    return decodeURIComponent(atob(str).replace(/(.)/g, (m, p)=>{
        let code = p.charCodeAt(0).toString(16).toUpperCase();
        if (code.length < 2) {
            code = "0" + code;
        }
        return "%" + code;
    }));
}
function base64UrlDecode(str) {
    let output = str.replace(/-/g, "+").replace(/_/g, "/");
    switch(output.length % 4){
        case 0:
            break;
        case 2:
            output += "==";
            break;
        case 3:
            output += "=";
            break;
        default:
            throw new Error("base64 string is not of the correct length");
    }
    try {
        return b64DecodeUnicode(output);
    } catch (err) {
        return atob(output);
    }
}
function jwtDecode(token, options) {
    if (typeof token !== "string") {
        throw new InvalidTokenError("Invalid token specified: must be a string");
    }
    options || (options = {});
    const pos = options.header === true ? 0 : 1;
    const part = token.split(".")[pos];
    if (typeof part !== "string") {
        throw new InvalidTokenError(`Invalid token specified: missing part #${pos + 1}`);
    }
    let decoded;
    try {
        decoded = base64UrlDecode(part);
    } catch (e) {
        throw new InvalidTokenError(`Invalid token specified: invalid base64 for part #${pos + 1} (${e.message})`);
    }
    try {
        return JSON.parse(decoded);
    } catch (e) {
        throw new InvalidTokenError(`Invalid token specified: invalid json for part #${pos + 1} (${e.message})`);
    }
}

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/build/templates/middleware.js { INNER_MIDDLEWARE_MODULE => \"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/src/middleware.ts [middleware] (ecmascript)\" } [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>nHandler
});
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$globals$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/server/web/globals.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$adapter$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/server/web/adapter.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$src$2f$middleware$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/src/middleware.ts [middleware] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
const mod = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$src$2f$middleware$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__
};
const handler = mod.middleware || mod.default;
const page = "/middleware";
if (typeof handler !== "function") {
    throw new Error(`The Middleware "${page}" must export a \`middleware\` or a \`default\` function`);
}
function nHandler(opts) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Next$2d$Level$2d$Technology$2f$Assingment$2f$Assingment6$2f$client$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$adapter$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["adapter"])({
        ...opts,
        page,
        handler
    });
} //# sourceMappingURL=middleware.js.map

})()),
"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/edge-wrapper.js { MODULE => \"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/build/templates/middleware.js { INNER_MIDDLEWARE_MODULE => \\\"[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/src/middleware.ts [middleware] (ecmascript)\\\" } [middleware] (ecmascript)\" } [middleware] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

self._ENTRIES ||= {};
self._ENTRIES["middleware_middleware"] = Promise.resolve().then(()=>__turbopack_import__('[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/node_modules/next/dist/esm/build/templates/middleware.js { INNER_MIDDLEWARE_MODULE => "[project]/OneDrive/Desktop/Next-Level-Technology/Assingment/Assingment6/client/src/middleware.ts [middleware] (ecmascript)" } [middleware] (ecmascript)'));

}.call(this) }),
}]);

//# sourceMappingURL=fc95d_OneDrive_Desktop_Next-Level-Technology_Assingment_Assingment6_client_960c79._.js.map