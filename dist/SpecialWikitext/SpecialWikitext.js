/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-SpecialWikitext.js}
 * @source {@link https://github.com/FurryWiki-zh/FurryWikiGadgets/tree/master/src/SpecialWikitext}
 * @license CC-BY-SA-4.0 {@link https://furrywiki.org.cn/wiki/H:CC-BY-SA-4.0}
 */

/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 *
 * Alert Mark (Orange)
 *
 * @base {@link https://www.qiuwenbaike.cn/wiki/File:Alert_Mark_%28Orange%29.svg}
 * @source {@link https://github.com/FurryWiki-zh/FurryWikiGadgets/tree/master/src/SpecialWikitext}
 * @license CC-BY-SA-4.0 {@link https://furrywiki.org.cn/wiki/H:CC-BY-SA-4.0}
 */
/**
 * +------------------------------------------------------------+
 * |            === WARNING: GLOBAL GADGET FILE ===             |
 * +------------------------------------------------------------+
 * |       All changes should be made in the repository,        |
 * |                otherwise they will be lost.                |
 * +------------------------------------------------------------+
 * |        Changes to this page may affect many users.         |
 * | Please discuss changes by opening an issue before editing. |
 * +------------------------------------------------------------+
 */
/* <nowiki> */

(() => {

"use strict";
var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/global-this.js
var require_global_this = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/global-this.js"(exports, module2) {
    "use strict";
    var check = function(it) {
      return it && it.Math === Math && it;
    };
    module2.exports = // eslint-disable-next-line es/no-global-this -- safe
    check(typeof globalThis == "object" && globalThis) || check(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
    check(typeof self == "object" && self) || check(typeof global == "object" && global) || check(typeof exports == "object" && exports) || // eslint-disable-next-line no-new-func -- fallback
    /* @__PURE__ */ (function() {
      return this;
    })() || Function("return this")();
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/fails.js
var require_fails = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/fails.js"(exports, module2) {
    "use strict";
    module2.exports = function(exec) {
      try {
        return !!exec();
      } catch (error) {
        return true;
      }
    };
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/descriptors.js
var require_descriptors = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/descriptors.js"(exports, module2) {
    "use strict";
    var fails = require_fails();
    module2.exports = !fails(function() {
      return Object.defineProperty({}, 1, { get: function() {
        return 7;
      } })[1] !== 7;
    });
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/function-bind-native.js
var require_function_bind_native = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/function-bind-native.js"(exports, module2) {
    "use strict";
    var fails = require_fails();
    module2.exports = !fails(function() {
      var test = function() {
      }.bind();
      return typeof test != "function" || test.hasOwnProperty("prototype");
    });
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/function-call.js
var require_function_call = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/function-call.js"(exports, module2) {
    "use strict";
    var NATIVE_BIND = require_function_bind_native();
    var call = Function.prototype.call;
    module2.exports = NATIVE_BIND ? call.bind(call) : function() {
      return call.apply(call, arguments);
    };
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/object-property-is-enumerable.js
var require_object_property_is_enumerable = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/object-property-is-enumerable.js"(exports) {
    "use strict";
    var $propertyIsEnumerable = {}.propertyIsEnumerable;
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);
    exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
      var descriptor = getOwnPropertyDescriptor(this, V);
      return !!descriptor && descriptor.enumerable;
    } : $propertyIsEnumerable;
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/create-property-descriptor.js
var require_create_property_descriptor = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/create-property-descriptor.js"(exports, module2) {
    "use strict";
    module2.exports = function(bitmap, value) {
      return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value
      };
    };
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/function-uncurry-this.js
var require_function_uncurry_this = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/function-uncurry-this.js"(exports, module2) {
    "use strict";
    var NATIVE_BIND = require_function_bind_native();
    var FunctionPrototype = Function.prototype;
    var call = FunctionPrototype.call;
    var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);
    module2.exports = NATIVE_BIND ? uncurryThisWithBind : function(fn) {
      return function() {
        return call.apply(fn, arguments);
      };
    };
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/classof-raw.js
var require_classof_raw = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/classof-raw.js"(exports, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var toString = uncurryThis({}.toString);
    var stringSlice = uncurryThis("".slice);
    module2.exports = function(it) {
      return stringSlice(toString(it), 8, -1);
    };
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/indexed-object.js
var require_indexed_object = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/indexed-object.js"(exports, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var fails = require_fails();
    var classof = require_classof_raw();
    var $Object = Object;
    var split = uncurryThis("".split);
    module2.exports = fails(function() {
      return !$Object("z").propertyIsEnumerable(0);
    }) ? function(it) {
      return classof(it) === "String" ? split(it, "") : $Object(it);
    } : $Object;
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/is-null-or-undefined.js
var require_is_null_or_undefined = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/is-null-or-undefined.js"(exports, module2) {
    "use strict";
    module2.exports = function(it) {
      return it === null || it === void 0;
    };
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/require-object-coercible.js
var require_require_object_coercible = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/require-object-coercible.js"(exports, module2) {
    "use strict";
    var isNullOrUndefined = require_is_null_or_undefined();
    var $TypeError = TypeError;
    module2.exports = function(it) {
      if (isNullOrUndefined(it)) throw new $TypeError("Can't call method on " + it);
      return it;
    };
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/to-indexed-object.js
var require_to_indexed_object = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/to-indexed-object.js"(exports, module2) {
    "use strict";
    var IndexedObject = require_indexed_object();
    var requireObjectCoercible = require_require_object_coercible();
    module2.exports = function(it) {
      return IndexedObject(requireObjectCoercible(it));
    };
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/is-callable.js
var require_is_callable = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/is-callable.js"(exports, module2) {
    "use strict";
    var documentAll = typeof document == "object" && document.all;
    module2.exports = typeof documentAll == "undefined" && documentAll !== void 0 ? function(argument) {
      return typeof argument == "function" || argument === documentAll;
    } : function(argument) {
      return typeof argument == "function";
    };
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/is-object.js
var require_is_object = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/is-object.js"(exports, module2) {
    "use strict";
    var isCallable = require_is_callable();
    module2.exports = function(it) {
      return typeof it == "object" ? it !== null : isCallable(it);
    };
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/get-built-in.js
var require_get_built_in = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/get-built-in.js"(exports, module2) {
    "use strict";
    var globalThis2 = require_global_this();
    var isCallable = require_is_callable();
    var aFunction = function(argument) {
      return isCallable(argument) ? argument : void 0;
    };
    module2.exports = function(namespace, method) {
      return arguments.length < 2 ? aFunction(globalThis2[namespace]) : globalThis2[namespace] && globalThis2[namespace][method];
    };
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/object-is-prototype-of.js
var require_object_is_prototype_of = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/object-is-prototype-of.js"(exports, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    module2.exports = uncurryThis({}.isPrototypeOf);
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/environment-user-agent.js
var require_environment_user_agent = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/environment-user-agent.js"(exports, module2) {
    "use strict";
    var globalThis2 = require_global_this();
    var navigator = globalThis2.navigator;
    var userAgent = navigator && navigator.userAgent;
    module2.exports = userAgent ? String(userAgent) : "";
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/environment-v8-version.js
var require_environment_v8_version = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/environment-v8-version.js"(exports, module2) {
    "use strict";
    var globalThis2 = require_global_this();
    var userAgent = require_environment_user_agent();
    var process = globalThis2.process;
    var Deno = globalThis2.Deno;
    var versions = process && process.versions || Deno && Deno.version;
    var v8 = versions && versions.v8;
    var match;
    var version2;
    if (v8) {
      match = v8.split(".");
      version2 = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
    }
    if (!version2 && userAgent) {
      match = userAgent.match(/Edge\/(\d+)/);
      if (!match || match[1] >= 74) {
        match = userAgent.match(/Chrome\/(\d+)/);
        if (match) version2 = +match[1];
      }
    }
    module2.exports = version2;
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/symbol-constructor-detection.js
var require_symbol_constructor_detection = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/symbol-constructor-detection.js"(exports, module2) {
    "use strict";
    var V8_VERSION = require_environment_v8_version();
    var fails = require_fails();
    var globalThis2 = require_global_this();
    var $String = globalThis2.String;
    module2.exports = !!Object.getOwnPropertySymbols && !fails(function() {
      var symbol = Symbol("symbol detection");
      return !$String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
      !Symbol.sham && V8_VERSION && V8_VERSION < 41;
    });
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/use-symbol-as-uid.js
var require_use_symbol_as_uid = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/use-symbol-as-uid.js"(exports, module2) {
    "use strict";
    var NATIVE_SYMBOL = require_symbol_constructor_detection();
    module2.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == "symbol";
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/is-symbol.js
var require_is_symbol = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/is-symbol.js"(exports, module2) {
    "use strict";
    var getBuiltIn = require_get_built_in();
    var isCallable = require_is_callable();
    var isPrototypeOf = require_object_is_prototype_of();
    var USE_SYMBOL_AS_UID = require_use_symbol_as_uid();
    var $Object = Object;
    module2.exports = USE_SYMBOL_AS_UID ? function(it) {
      return typeof it == "symbol";
    } : function(it) {
      var $Symbol = getBuiltIn("Symbol");
      return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
    };
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/try-to-string.js
var require_try_to_string = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/try-to-string.js"(exports, module2) {
    "use strict";
    var $String = String;
    module2.exports = function(argument) {
      try {
        return $String(argument);
      } catch (error) {
        return "Object";
      }
    };
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/a-callable.js
var require_a_callable = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/a-callable.js"(exports, module2) {
    "use strict";
    var isCallable = require_is_callable();
    var tryToString = require_try_to_string();
    var $TypeError = TypeError;
    module2.exports = function(argument) {
      if (isCallable(argument)) return argument;
      throw new $TypeError(tryToString(argument) + " is not a function");
    };
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/get-method.js
var require_get_method = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/get-method.js"(exports, module2) {
    "use strict";
    var aCallable = require_a_callable();
    var isNullOrUndefined = require_is_null_or_undefined();
    module2.exports = function(V, P) {
      var func = V[P];
      return isNullOrUndefined(func) ? void 0 : aCallable(func);
    };
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/ordinary-to-primitive.js
var require_ordinary_to_primitive = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/ordinary-to-primitive.js"(exports, module2) {
    "use strict";
    var call = require_function_call();
    var isCallable = require_is_callable();
    var isObject = require_is_object();
    var $TypeError = TypeError;
    module2.exports = function(input, pref) {
      var fn, val;
      if (pref === "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
      if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
      if (pref !== "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
      throw new $TypeError("Can't convert object to primitive value");
    };
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/is-pure.js
var require_is_pure = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/is-pure.js"(exports, module2) {
    "use strict";
    module2.exports = false;
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/define-global-property.js
var require_define_global_property = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/define-global-property.js"(exports, module2) {
    "use strict";
    var globalThis2 = require_global_this();
    var defineProperty = Object.defineProperty;
    module2.exports = function(key, value) {
      try {
        defineProperty(globalThis2, key, { value, configurable: true, writable: true });
      } catch (error) {
        globalThis2[key] = value;
      }
      return value;
    };
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/shared-store.js
var require_shared_store = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/shared-store.js"(exports, module2) {
    "use strict";
    var IS_PURE = require_is_pure();
    var globalThis2 = require_global_this();
    var defineGlobalProperty = require_define_global_property();
    var SHARED = "__core-js_shared__";
    var store = module2.exports = globalThis2[SHARED] || defineGlobalProperty(SHARED, {});
    (store.versions || (store.versions = [])).push({
      version: "3.49.0",
      mode: IS_PURE ? "pure" : "global",
      copyright: "© 2013–2025 Denis Pushkarev (zloirock.ru), 2025–2026 CoreJS Company (core-js.io). All rights reserved.",
      license: "https://github.com/zloirock/core-js/blob/v3.49.0/LICENSE",
      source: "https://github.com/zloirock/core-js"
    });
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/shared.js
var require_shared = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/shared.js"(exports, module2) {
    "use strict";
    var store = require_shared_store();
    module2.exports = function(key, value) {
      return store[key] || (store[key] = value || {});
    };
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/to-object.js
var require_to_object = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/to-object.js"(exports, module2) {
    "use strict";
    var requireObjectCoercible = require_require_object_coercible();
    var $Object = Object;
    module2.exports = function(argument) {
      return $Object(requireObjectCoercible(argument));
    };
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/has-own-property.js
var require_has_own_property = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/has-own-property.js"(exports, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var toObject = require_to_object();
    var hasOwnProperty = uncurryThis({}.hasOwnProperty);
    module2.exports = Object.hasOwn || function hasOwn(it, key) {
      return hasOwnProperty(toObject(it), key);
    };
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/uid.js
var require_uid = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/uid.js"(exports, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var id = 0;
    var postfix = Math.random();
    var toString = uncurryThis(1.1.toString);
    module2.exports = function(key) {
      return "Symbol(" + (key === void 0 ? "" : key) + ")_" + toString(++id + postfix, 36);
    };
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/well-known-symbol.js
var require_well_known_symbol = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/well-known-symbol.js"(exports, module2) {
    "use strict";
    var globalThis2 = require_global_this();
    var shared = require_shared();
    var hasOwn = require_has_own_property();
    var uid = require_uid();
    var NATIVE_SYMBOL = require_symbol_constructor_detection();
    var USE_SYMBOL_AS_UID = require_use_symbol_as_uid();
    var Symbol2 = globalThis2.Symbol;
    var WellKnownSymbolsStore = shared("wks");
    var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol2["for"] || Symbol2 : Symbol2 && Symbol2.withoutSetter || uid;
    module2.exports = function(name) {
      if (!hasOwn(WellKnownSymbolsStore, name)) {
        WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol2, name) ? Symbol2[name] : createWellKnownSymbol("Symbol." + name);
      }
      return WellKnownSymbolsStore[name];
    };
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/to-primitive.js
var require_to_primitive = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/to-primitive.js"(exports, module2) {
    "use strict";
    var call = require_function_call();
    var isObject = require_is_object();
    var isSymbol = require_is_symbol();
    var getMethod = require_get_method();
    var ordinaryToPrimitive = require_ordinary_to_primitive();
    var wellKnownSymbol = require_well_known_symbol();
    var $TypeError = TypeError;
    var TO_PRIMITIVE = wellKnownSymbol("toPrimitive");
    module2.exports = function(input, pref) {
      if (!isObject(input) || isSymbol(input)) return input;
      var exoticToPrim = getMethod(input, TO_PRIMITIVE);
      var result;
      if (exoticToPrim) {
        if (pref === void 0) pref = "default";
        result = call(exoticToPrim, input, pref);
        if (!isObject(result) || isSymbol(result)) return result;
        throw new $TypeError("Can't convert object to primitive value");
      }
      if (pref === void 0) pref = "number";
      return ordinaryToPrimitive(input, pref);
    };
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/to-property-key.js
var require_to_property_key = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/to-property-key.js"(exports, module2) {
    "use strict";
    var toPrimitive = require_to_primitive();
    var isSymbol = require_is_symbol();
    module2.exports = function(argument) {
      var key = toPrimitive(argument, "string");
      return isSymbol(key) ? key : key + "";
    };
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/document-create-element.js
var require_document_create_element = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/document-create-element.js"(exports, module2) {
    "use strict";
    var globalThis2 = require_global_this();
    var isObject = require_is_object();
    var document2 = globalThis2.document;
    var EXISTS = isObject(document2) && isObject(document2.createElement);
    module2.exports = function(it) {
      return EXISTS ? document2.createElement(it) : {};
    };
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/ie8-dom-define.js
var require_ie8_dom_define = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/ie8-dom-define.js"(exports, module2) {
    "use strict";
    var DESCRIPTORS = require_descriptors();
    var fails = require_fails();
    var createElement = require_document_create_element();
    module2.exports = !DESCRIPTORS && !fails(function() {
      return Object.defineProperty(createElement("div"), "a", {
        get: function() {
          return 7;
        }
      }).a !== 7;
    });
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/object-get-own-property-descriptor.js
var require_object_get_own_property_descriptor = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/object-get-own-property-descriptor.js"(exports) {
    "use strict";
    var DESCRIPTORS = require_descriptors();
    var call = require_function_call();
    var propertyIsEnumerableModule = require_object_property_is_enumerable();
    var createPropertyDescriptor = require_create_property_descriptor();
    var toIndexedObject = require_to_indexed_object();
    var toPropertyKey = require_to_property_key();
    var hasOwn = require_has_own_property();
    var IE8_DOM_DEFINE = require_ie8_dom_define();
    var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
      O = toIndexedObject(O);
      P = toPropertyKey(P);
      if (IE8_DOM_DEFINE) try {
        return $getOwnPropertyDescriptor(O, P);
      } catch (error) {
      }
      if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
    };
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/v8-prototype-define-bug.js
var require_v8_prototype_define_bug = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/v8-prototype-define-bug.js"(exports, module2) {
    "use strict";
    var DESCRIPTORS = require_descriptors();
    var fails = require_fails();
    module2.exports = DESCRIPTORS && fails(function() {
      return Object.defineProperty(function() {
      }, "prototype", {
        value: 42,
        writable: false
      }).prototype !== 42;
    });
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/an-object.js
var require_an_object = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/an-object.js"(exports, module2) {
    "use strict";
    var isObject = require_is_object();
    var $String = String;
    var $TypeError = TypeError;
    module2.exports = function(argument) {
      if (isObject(argument)) return argument;
      throw new $TypeError($String(argument) + " is not an object");
    };
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/object-define-property.js
var require_object_define_property = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/object-define-property.js"(exports) {
    "use strict";
    var DESCRIPTORS = require_descriptors();
    var IE8_DOM_DEFINE = require_ie8_dom_define();
    var V8_PROTOTYPE_DEFINE_BUG = require_v8_prototype_define_bug();
    var anObject = require_an_object();
    var toPropertyKey = require_to_property_key();
    var $TypeError = TypeError;
    var $defineProperty = Object.defineProperty;
    var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var ENUMERABLE = "enumerable";
    var CONFIGURABLE = "configurable";
    var WRITABLE = "writable";
    exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
      anObject(O);
      P = toPropertyKey(P);
      anObject(Attributes);
      if (typeof O === "function" && P === "prototype" && "value" in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
        var current = $getOwnPropertyDescriptor(O, P);
        if (current && current[WRITABLE]) {
          O[P] = Attributes.value;
          Attributes = {
            configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
            enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
            writable: false
          };
        }
      }
      return $defineProperty(O, P, Attributes);
    } : $defineProperty : function defineProperty(O, P, Attributes) {
      anObject(O);
      P = toPropertyKey(P);
      anObject(Attributes);
      if (IE8_DOM_DEFINE) try {
        return $defineProperty(O, P, Attributes);
      } catch (error) {
      }
      if ("get" in Attributes || "set" in Attributes) throw new $TypeError("Accessors not supported");
      if ("value" in Attributes) O[P] = Attributes.value;
      return O;
    };
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/create-non-enumerable-property.js
var require_create_non_enumerable_property = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/create-non-enumerable-property.js"(exports, module2) {
    "use strict";
    var DESCRIPTORS = require_descriptors();
    var definePropertyModule = require_object_define_property();
    var createPropertyDescriptor = require_create_property_descriptor();
    module2.exports = DESCRIPTORS ? function(object, key, value) {
      return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
    } : function(object, key, value) {
      object[key] = value;
      return object;
    };
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/function-name.js
var require_function_name = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/function-name.js"(exports, module2) {
    "use strict";
    var DESCRIPTORS = require_descriptors();
    var hasOwn = require_has_own_property();
    var FunctionPrototype = Function.prototype;
    var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;
    var EXISTS = hasOwn(FunctionPrototype, "name");
    var PROPER = EXISTS && function something() {
    }.name === "something";
    var CONFIGURABLE = EXISTS && (!DESCRIPTORS || DESCRIPTORS && getDescriptor(FunctionPrototype, "name").configurable);
    module2.exports = {
      EXISTS,
      PROPER,
      CONFIGURABLE
    };
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/inspect-source.js
var require_inspect_source = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/inspect-source.js"(exports, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var isCallable = require_is_callable();
    var store = require_shared_store();
    var functionToString = uncurryThis(Function.toString);
    if (!isCallable(store.inspectSource)) {
      store.inspectSource = function(it) {
        return functionToString(it);
      };
    }
    module2.exports = store.inspectSource;
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/weak-map-basic-detection.js
var require_weak_map_basic_detection = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/weak-map-basic-detection.js"(exports, module2) {
    "use strict";
    var globalThis2 = require_global_this();
    var isCallable = require_is_callable();
    var WeakMap = globalThis2.WeakMap;
    module2.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/shared-key.js
var require_shared_key = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/shared-key.js"(exports, module2) {
    "use strict";
    var shared = require_shared();
    var uid = require_uid();
    var keys = shared("keys");
    module2.exports = function(key) {
      return keys[key] || (keys[key] = uid(key));
    };
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/hidden-keys.js
var require_hidden_keys = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/hidden-keys.js"(exports, module2) {
    "use strict";
    module2.exports = {};
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/internal-state.js
var require_internal_state = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/internal-state.js"(exports, module2) {
    "use strict";
    var NATIVE_WEAK_MAP = require_weak_map_basic_detection();
    var globalThis2 = require_global_this();
    var isObject = require_is_object();
    var createNonEnumerableProperty = require_create_non_enumerable_property();
    var hasOwn = require_has_own_property();
    var shared = require_shared_store();
    var sharedKey = require_shared_key();
    var hiddenKeys = require_hidden_keys();
    var OBJECT_ALREADY_INITIALIZED = "Object already initialized";
    var TypeError2 = globalThis2.TypeError;
    var WeakMap = globalThis2.WeakMap;
    var set;
    var get;
    var has;
    var enforce = function(it) {
      return has(it) ? get(it) : set(it, {});
    };
    var getterFor = function(TYPE) {
      return function(it) {
        var state;
        if (!isObject(it) || (state = get(it)).type !== TYPE) {
          throw new TypeError2("Incompatible receiver, " + TYPE + " required");
        }
        return state;
      };
    };
    if (NATIVE_WEAK_MAP || shared.state) {
      store = shared.state || (shared.state = new WeakMap());
      store.get = store.get;
      store.has = store.has;
      store.set = store.set;
      set = function(it, metadata) {
        if (store.has(it)) throw new TypeError2(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        store.set(it, metadata);
        return metadata;
      };
      get = function(it) {
        return store.get(it) || {};
      };
      has = function(it) {
        return store.has(it);
      };
    } else {
      STATE = sharedKey("state");
      hiddenKeys[STATE] = true;
      set = function(it, metadata) {
        if (hasOwn(it, STATE)) throw new TypeError2(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        createNonEnumerableProperty(it, STATE, metadata);
        return metadata;
      };
      get = function(it) {
        return hasOwn(it, STATE) ? it[STATE] : {};
      };
      has = function(it) {
        return hasOwn(it, STATE);
      };
    }
    var store;
    var STATE;
    module2.exports = {
      set,
      get,
      has,
      enforce,
      getterFor
    };
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/make-built-in.js
var require_make_built_in = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/make-built-in.js"(exports, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var fails = require_fails();
    var isCallable = require_is_callable();
    var hasOwn = require_has_own_property();
    var DESCRIPTORS = require_descriptors();
    var CONFIGURABLE_FUNCTION_NAME = require_function_name().CONFIGURABLE;
    var inspectSource = require_inspect_source();
    var InternalStateModule = require_internal_state();
    var enforceInternalState = InternalStateModule.enforce;
    var getInternalState = InternalStateModule.get;
    var $String = String;
    var defineProperty = Object.defineProperty;
    var stringSlice = uncurryThis("".slice);
    var replace = uncurryThis("".replace);
    var join = uncurryThis([].join);
    var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function() {
      return defineProperty(function() {
      }, "length", { value: 8 }).length !== 8;
    });
    var TEMPLATE = String(String).split("String");
    var makeBuiltIn = module2.exports = function(value, name, options) {
      if (stringSlice($String(name), 0, 7) === "Symbol(") {
        name = "[" + replace($String(name), /^Symbol\(([^)]*)\).*$/, "$1") + "]";
      }
      if (options && options.getter) name = "get " + name;
      if (options && options.setter) name = "set " + name;
      if (!hasOwn(value, "name") || CONFIGURABLE_FUNCTION_NAME && value.name !== name) {
        if (DESCRIPTORS) defineProperty(value, "name", { value: name, configurable: true });
        else value.name = name;
      }
      if (CONFIGURABLE_LENGTH && options && hasOwn(options, "arity") && value.length !== options.arity) {
        defineProperty(value, "length", { value: options.arity });
      }
      try {
        if (options && hasOwn(options, "constructor") && options.constructor) {
          if (DESCRIPTORS) defineProperty(value, "prototype", { writable: false });
        } else if (value.prototype) value.prototype = void 0;
      } catch (error) {
      }
      var state = enforceInternalState(value);
      if (!hasOwn(state, "source")) {
        state.source = join(TEMPLATE, typeof name == "string" ? name : "");
      }
      return value;
    };
    Function.prototype.toString = makeBuiltIn(function toString() {
      return isCallable(this) && getInternalState(this).source || inspectSource(this);
    }, "toString");
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/define-built-in.js
var require_define_built_in = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/define-built-in.js"(exports, module2) {
    "use strict";
    var isCallable = require_is_callable();
    var definePropertyModule = require_object_define_property();
    var makeBuiltIn = require_make_built_in();
    var defineGlobalProperty = require_define_global_property();
    module2.exports = function(O, key, value, options) {
      if (!options) options = {};
      var simple = options.enumerable;
      var name = options.name !== void 0 ? options.name : key;
      if (isCallable(value)) makeBuiltIn(value, name, options);
      if (options.global) {
        if (simple) O[key] = value;
        else defineGlobalProperty(key, value);
      } else {
        try {
          if (!options.unsafe) delete O[key];
          else if (O[key]) simple = true;
        } catch (error) {
        }
        if (simple) O[key] = value;
        else definePropertyModule.f(O, key, {
          value,
          enumerable: false,
          configurable: !options.nonConfigurable,
          writable: !options.nonWritable
        });
      }
      return O;
    };
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/math-trunc.js
var require_math_trunc = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/math-trunc.js"(exports, module2) {
    "use strict";
    var ceil = Math.ceil;
    var floor = Math.floor;
    module2.exports = Math.trunc || function trunc(x) {
      var n = +x;
      return (n > 0 ? floor : ceil)(n);
    };
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/to-integer-or-infinity.js
var require_to_integer_or_infinity = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/to-integer-or-infinity.js"(exports, module2) {
    "use strict";
    var trunc = require_math_trunc();
    module2.exports = function(argument) {
      var number = +argument;
      return number !== number || number === 0 ? 0 : trunc(number);
    };
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/to-absolute-index.js
var require_to_absolute_index = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/to-absolute-index.js"(exports, module2) {
    "use strict";
    var toIntegerOrInfinity = require_to_integer_or_infinity();
    var max = Math.max;
    var min = Math.min;
    module2.exports = function(index, length) {
      var integer = toIntegerOrInfinity(index);
      return integer < 0 ? max(integer + length, 0) : min(integer, length);
    };
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/to-length.js
var require_to_length = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/to-length.js"(exports, module2) {
    "use strict";
    var toIntegerOrInfinity = require_to_integer_or_infinity();
    var min = Math.min;
    module2.exports = function(argument) {
      var len = toIntegerOrInfinity(argument);
      return len > 0 ? min(len, 9007199254740991) : 0;
    };
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/length-of-array-like.js
var require_length_of_array_like = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/length-of-array-like.js"(exports, module2) {
    "use strict";
    var toLength = require_to_length();
    module2.exports = function(obj) {
      return toLength(obj.length);
    };
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/array-includes.js
var require_array_includes = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/array-includes.js"(exports, module2) {
    "use strict";
    var toIndexedObject = require_to_indexed_object();
    var toAbsoluteIndex = require_to_absolute_index();
    var lengthOfArrayLike = require_length_of_array_like();
    var createMethod = function(IS_INCLUDES) {
      return function($this, el, fromIndex) {
        var O = toIndexedObject($this);
        var length = lengthOfArrayLike(O);
        if (length === 0) return !IS_INCLUDES && -1;
        var index = toAbsoluteIndex(fromIndex, length);
        var value;
        if (IS_INCLUDES && el !== el) while (length > index) {
          value = O[index++];
          if (value !== value) return true;
        }
        else for (; length > index; index++) {
          if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
        }
        return !IS_INCLUDES && -1;
      };
    };
    module2.exports = {
      // `Array.prototype.includes` method
      // https://tc39.es/ecma262/#sec-array.prototype.includes
      includes: createMethod(true),
      // `Array.prototype.indexOf` method
      // https://tc39.es/ecma262/#sec-array.prototype.indexof
      indexOf: createMethod(false)
    };
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/object-keys-internal.js
var require_object_keys_internal = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/object-keys-internal.js"(exports, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var hasOwn = require_has_own_property();
    var toIndexedObject = require_to_indexed_object();
    var indexOf = require_array_includes().indexOf;
    var hiddenKeys = require_hidden_keys();
    var push = uncurryThis([].push);
    module2.exports = function(object, names) {
      var O = toIndexedObject(object);
      var i = 0;
      var result = [];
      var key;
      for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
      while (names.length > i) if (hasOwn(O, key = names[i++])) {
        ~indexOf(result, key) || push(result, key);
      }
      return result;
    };
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/enum-bug-keys.js
var require_enum_bug_keys = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/enum-bug-keys.js"(exports, module2) {
    "use strict";
    module2.exports = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf"
    ];
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/object-get-own-property-names.js
var require_object_get_own_property_names = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/object-get-own-property-names.js"(exports) {
    "use strict";
    var internalObjectKeys = require_object_keys_internal();
    var enumBugKeys = require_enum_bug_keys();
    var hiddenKeys = enumBugKeys.concat("length", "prototype");
    exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
      return internalObjectKeys(O, hiddenKeys);
    };
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/object-get-own-property-symbols.js
var require_object_get_own_property_symbols = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/object-get-own-property-symbols.js"(exports) {
    "use strict";
    exports.f = Object.getOwnPropertySymbols;
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/own-keys.js
var require_own_keys = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/own-keys.js"(exports, module2) {
    "use strict";
    var getBuiltIn = require_get_built_in();
    var uncurryThis = require_function_uncurry_this();
    var getOwnPropertyNamesModule = require_object_get_own_property_names();
    var getOwnPropertySymbolsModule = require_object_get_own_property_symbols();
    var anObject = require_an_object();
    var concat = uncurryThis([].concat);
    module2.exports = getBuiltIn("Reflect", "ownKeys") || function ownKeys(it) {
      var keys = getOwnPropertyNamesModule.f(anObject(it));
      var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
      return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
    };
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/copy-constructor-properties.js
var require_copy_constructor_properties = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/copy-constructor-properties.js"(exports, module2) {
    "use strict";
    var hasOwn = require_has_own_property();
    var ownKeys = require_own_keys();
    var getOwnPropertyDescriptorModule = require_object_get_own_property_descriptor();
    var definePropertyModule = require_object_define_property();
    module2.exports = function(target, source, exceptions) {
      var keys = ownKeys(source);
      var defineProperty = definePropertyModule.f;
      var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
          defineProperty(target, key, getOwnPropertyDescriptor(source, key));
        }
      }
    };
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/is-forced.js
var require_is_forced = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/is-forced.js"(exports, module2) {
    "use strict";
    var fails = require_fails();
    var isCallable = require_is_callable();
    var replacement = /#|\.prototype\./;
    var isForced = function(feature, detection) {
      var value = data[normalize(feature)];
      return value === POLYFILL ? true : value === NATIVE ? false : isCallable(detection) ? fails(detection) : !!detection;
    };
    var normalize = isForced.normalize = function(string) {
      return String(string).replace(replacement, ".").toLowerCase();
    };
    var data = isForced.data = {};
    var NATIVE = isForced.NATIVE = "N";
    var POLYFILL = isForced.POLYFILL = "P";
    module2.exports = isForced;
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/export.js
var require_export = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/export.js"(exports, module2) {
    "use strict";
    var globalThis2 = require_global_this();
    var getOwnPropertyDescriptor = require_object_get_own_property_descriptor().f;
    var createNonEnumerableProperty = require_create_non_enumerable_property();
    var defineBuiltIn = require_define_built_in();
    var defineGlobalProperty = require_define_global_property();
    var copyConstructorProperties = require_copy_constructor_properties();
    var isForced = require_is_forced();
    module2.exports = function(options, source) {
      var TARGET = options.target;
      var GLOBAL = options.global;
      var STATIC = options.stat;
      var FORCED, target, key, targetProperty, sourceProperty, descriptor;
      if (GLOBAL) {
        target = globalThis2;
      } else if (STATIC) {
        target = globalThis2[TARGET] || defineGlobalProperty(TARGET, {});
      } else {
        target = globalThis2[TARGET] && globalThis2[TARGET].prototype;
      }
      if (target) for (key in source) {
        sourceProperty = source[key];
        if (options.dontCallGetSet) {
          descriptor = getOwnPropertyDescriptor(target, key);
          targetProperty = descriptor && descriptor.value;
        } else targetProperty = target[key];
        FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced);
        if (!FORCED && targetProperty !== void 0) {
          if (typeof sourceProperty == typeof targetProperty) continue;
          copyConstructorProperties(sourceProperty, targetProperty);
        }
        if (options.sham || targetProperty && targetProperty.sham) {
          createNonEnumerableProperty(sourceProperty, "sham", true);
        }
        defineBuiltIn(target, key, sourceProperty, options);
      }
    };
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/is-array.js
var require_is_array = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/is-array.js"(exports, module2) {
    "use strict";
    var classof = require_classof_raw();
    module2.exports = Array.isArray || function isArray(argument) {
      return classof(argument) === "Array";
    };
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/to-string-tag-support.js
var require_to_string_tag_support = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/to-string-tag-support.js"(exports, module2) {
    "use strict";
    var wellKnownSymbol = require_well_known_symbol();
    var TO_STRING_TAG = wellKnownSymbol("toStringTag");
    var test = {};
    test[TO_STRING_TAG] = "z";
    module2.exports = String(test) === "[object z]";
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/classof.js
var require_classof = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/classof.js"(exports, module2) {
    "use strict";
    var TO_STRING_TAG_SUPPORT = require_to_string_tag_support();
    var isCallable = require_is_callable();
    var classofRaw = require_classof_raw();
    var wellKnownSymbol = require_well_known_symbol();
    var TO_STRING_TAG = wellKnownSymbol("toStringTag");
    var $Object = Object;
    var CORRECT_ARGUMENTS = classofRaw(/* @__PURE__ */ (function() {
      return arguments;
    })()) === "Arguments";
    var tryGet = function(it, key) {
      try {
        return it[key];
      } catch (error) {
      }
    };
    module2.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function(it) {
      var O, tag, result;
      return it === void 0 ? "Undefined" : it === null ? "Null" : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == "string" ? tag : CORRECT_ARGUMENTS ? classofRaw(O) : (result = classofRaw(O)) === "Object" && isCallable(O.callee) ? "Arguments" : result;
    };
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/to-string.js
var require_to_string = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/to-string.js"(exports, module2) {
    "use strict";
    var classof = require_classof();
    var $String = String;
    module2.exports = function(argument) {
      if (classof(argument) === "Symbol") throw new TypeError("Cannot convert a Symbol value to a string");
      return $String(argument);
    };
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/create-property.js
var require_create_property = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/create-property.js"(exports, module2) {
    "use strict";
    var DESCRIPTORS = require_descriptors();
    var definePropertyModule = require_object_define_property();
    var createPropertyDescriptor = require_create_property_descriptor();
    module2.exports = function(object, key, value) {
      if (DESCRIPTORS) definePropertyModule.f(object, key, createPropertyDescriptor(0, value));
      else object[key] = value;
    };
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/parse-json-string.js
var require_parse_json_string = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/parse-json-string.js"(exports, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var hasOwn = require_has_own_property();
    var $SyntaxError = SyntaxError;
    var $parseInt = parseInt;
    var fromCharCode = String.fromCharCode;
    var at = uncurryThis("".charAt);
    var slice = uncurryThis("".slice);
    var exec = uncurryThis(/./.exec);
    var codePoints = {
      '\\"': '"',
      "\\\\": "\\",
      "\\/": "/",
      "\\b": "\b",
      "\\f": "\f",
      "\\n": "\n",
      "\\r": "\r",
      "\\t": "	"
    };
    var IS_4_HEX_DIGITS = /^[\da-f]{4}$/i;
    var IS_C0_CONTROL_CODE = /^[\u0000-\u001F]$/;
    module2.exports = function(source, i) {
      var unterminated = true;
      var value = "";
      while (i < source.length) {
        var chr = at(source, i);
        if (chr === "\\") {
          var twoChars = slice(source, i, i + 2);
          if (hasOwn(codePoints, twoChars)) {
            value += codePoints[twoChars];
            i += 2;
          } else if (twoChars === "\\u") {
            i += 2;
            var fourHexDigits = slice(source, i, i + 4);
            if (!exec(IS_4_HEX_DIGITS, fourHexDigits)) throw new $SyntaxError("Bad Unicode escape at: " + i);
            value += fromCharCode($parseInt(fourHexDigits, 16));
            i += 4;
          } else throw new $SyntaxError('Unknown escape sequence: "' + twoChars + '"');
        } else if (chr === '"') {
          unterminated = false;
          i++;
          break;
        } else {
          if (exec(IS_C0_CONTROL_CODE, chr)) throw new $SyntaxError("Bad control character in string literal at: " + i);
          value += chr;
          i++;
        }
      }
      if (unterminated) throw new $SyntaxError("Unterminated string at: " + i);
      return { value, end: i };
    };
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/modules/es.json.parse.js
var require_es_json_parse = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/modules/es.json.parse.js"() {
    "use strict";
    var $2 = require_export();
    var DESCRIPTORS = require_descriptors();
    var globalThis2 = require_global_this();
    var getBuiltIn = require_get_built_in();
    var uncurryThis = require_function_uncurry_this();
    var call = require_function_call();
    var isCallable = require_is_callable();
    var isObject = require_is_object();
    var isArray = require_is_array();
    var hasOwn = require_has_own_property();
    var toString = require_to_string();
    var lengthOfArrayLike = require_length_of_array_like();
    var createProperty = require_create_property();
    var fails = require_fails();
    var parseJSONString = require_parse_json_string();
    var NATIVE_SYMBOL = require_symbol_constructor_detection();
    var JSON2 = globalThis2.JSON;
    var Number = globalThis2.Number;
    var SyntaxError2 = globalThis2.SyntaxError;
    var nativeParse = JSON2 && JSON2.parse;
    var enumerableOwnProperties = getBuiltIn("Object", "keys");
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var at = uncurryThis("".charAt);
    var slice = uncurryThis("".slice);
    var exec = uncurryThis(/./.exec);
    var push = uncurryThis([].push);
    var IS_DIGIT = /^\d$/;
    var IS_NON_ZERO_DIGIT = /^[1-9]$/;
    var IS_NUMBER_START = /^[\d-]$/;
    var IS_WHITESPACE = /^[\t\n\r ]$/;
    var PRIMITIVE = 0;
    var OBJECT = 1;
    var $parse = function(source, reviver) {
      source = toString(source);
      var context = new Context(source, 0, "");
      var root = context.parse();
      var value = root.value;
      var endIndex = context.skip(IS_WHITESPACE, root.end);
      if (endIndex < source.length) {
        throw new SyntaxError2('Unexpected extra character: "' + at(source, endIndex) + '" after the parsed data at: ' + endIndex);
      }
      return isCallable(reviver) ? internalize({ "": value }, "", reviver, root) : value;
    };
    var internalize = function(holder, name, reviver, node) {
      var val = holder[name];
      var unmodified = node && val === node.value;
      var context = unmodified && typeof node.source == "string" ? { source: node.source } : {};
      var elementRecordsLen, keys, len, i, P;
      if (isObject(val)) {
        var nodeIsArray = isArray(val);
        var nodes = unmodified ? node.nodes : nodeIsArray ? [] : {};
        if (nodeIsArray) {
          elementRecordsLen = nodes.length;
          len = lengthOfArrayLike(val);
          for (i = 0; i < len; i++) {
            internalizeProperty(val, i, internalize(val, "" + i, reviver, i < elementRecordsLen ? nodes[i] : void 0));
          }
        } else {
          keys = enumerableOwnProperties(val);
          len = lengthOfArrayLike(keys);
          for (i = 0; i < len; i++) {
            P = keys[i];
            internalizeProperty(val, P, internalize(val, P, reviver, hasOwn(nodes, P) ? nodes[P] : void 0));
          }
        }
      }
      return call(reviver, holder, name, val, context);
    };
    var internalizeProperty = function(object, key, value) {
      if (DESCRIPTORS) {
        var descriptor = getOwnPropertyDescriptor(object, key);
        if (descriptor && !descriptor.configurable) return;
      }
      if (value === void 0) delete object[key];
      else createProperty(object, key, value);
    };
    var Node = function(value, end, source, nodes) {
      this.value = value;
      this.end = end;
      this.source = source;
      this.nodes = nodes;
    };
    var Context = function(source, index) {
      this.source = source;
      this.index = index;
    };
    Context.prototype = {
      fork: function(nextIndex) {
        return new Context(this.source, nextIndex);
      },
      parse: function() {
        var source = this.source;
        var i = this.skip(IS_WHITESPACE, this.index);
        var fork = this.fork(i);
        var chr = at(source, i);
        if (exec(IS_NUMBER_START, chr)) return fork.number();
        switch (chr) {
          case "{":
            return fork.object();
          case "[":
            return fork.array();
          case '"':
            return fork.string();
          case "t":
            return fork.keyword(true);
          case "f":
            return fork.keyword(false);
          case "n":
            return fork.keyword(null);
        }
        throw new SyntaxError2('Unexpected character: "' + chr + '" at: ' + i);
      },
      node: function(type, value, start, end, nodes) {
        return new Node(value, end, type ? null : slice(this.source, start, end), nodes);
      },
      object: function() {
        var source = this.source;
        var i = this.index + 1;
        var expectKeypair = false;
        var object = {};
        var nodes = {};
        var closed = false;
        while (i < source.length) {
          i = this.until(['"', "}"], i);
          if (at(source, i) === "}" && !expectKeypair) {
            i++;
            closed = true;
            break;
          }
          var result = this.fork(i).string();
          var key = result.value;
          i = result.end;
          i = this.until([":"], i) + 1;
          i = this.skip(IS_WHITESPACE, i);
          result = this.fork(i).parse();
          createProperty(nodes, key, result);
          createProperty(object, key, result.value);
          i = this.until([",", "}"], result.end);
          var chr = at(source, i);
          if (chr === ",") {
            expectKeypair = true;
            i++;
          } else if (chr === "}") {
            i++;
            closed = true;
            break;
          }
        }
        if (!closed) throw new SyntaxError2("Unterminated object at: " + i);
        return this.node(OBJECT, object, this.index, i, nodes);
      },
      array: function() {
        var source = this.source;
        var i = this.index + 1;
        var expectElement = false;
        var array = [];
        var nodes = [];
        var closed = false;
        while (i < source.length) {
          i = this.skip(IS_WHITESPACE, i);
          if (at(source, i) === "]" && !expectElement) {
            i++;
            closed = true;
            break;
          }
          var result = this.fork(i).parse();
          push(nodes, result);
          push(array, result.value);
          i = this.until([",", "]"], result.end);
          if (at(source, i) === ",") {
            expectElement = true;
            i++;
          } else if (at(source, i) === "]") {
            i++;
            closed = true;
            break;
          }
        }
        if (!closed) throw new SyntaxError2("Unterminated array at: " + i);
        return this.node(OBJECT, array, this.index, i, nodes);
      },
      string: function() {
        var index = this.index;
        var parsed = parseJSONString(this.source, this.index + 1);
        return this.node(PRIMITIVE, parsed.value, index, parsed.end);
      },
      number: function() {
        var source = this.source;
        var startIndex = this.index;
        var i = startIndex;
        if (at(source, i) === "-") i++;
        if (at(source, i) === "0") i++;
        else if (exec(IS_NON_ZERO_DIGIT, at(source, i))) i = this.skip(IS_DIGIT, i + 1);
        else throw new SyntaxError2("Failed to parse number at: " + i);
        if (at(source, i) === ".") {
          var fractionStartIndex = i + 1;
          i = this.skip(IS_DIGIT, fractionStartIndex);
          if (fractionStartIndex === i) throw new SyntaxError2("Failed to parse number's fraction at: " + i);
        }
        if (at(source, i) === "e" || at(source, i) === "E") {
          i++;
          if (at(source, i) === "+" || at(source, i) === "-") i++;
          var exponentStartIndex = i;
          i = this.skip(IS_DIGIT, i);
          if (exponentStartIndex === i) throw new SyntaxError2("Failed to parse number's exponent value at: " + i);
        }
        return this.node(PRIMITIVE, Number(slice(source, startIndex, i)), startIndex, i);
      },
      keyword: function(value) {
        var keyword = "" + value;
        var index = this.index;
        var endIndex = index + keyword.length;
        if (slice(this.source, index, endIndex) !== keyword) throw new SyntaxError2("Failed to parse value at: " + index);
        return this.node(PRIMITIVE, value, index, endIndex);
      },
      skip: function(regex, i) {
        var source = this.source;
        for (; i < source.length; i++) if (!exec(regex, at(source, i))) break;
        return i;
      },
      until: function(array, i) {
        i = this.skip(IS_WHITESPACE, i);
        var chr = at(this.source, i);
        for (var j = 0; j < array.length; j++) if (array[j] === chr) return i;
        throw new SyntaxError2('Unexpected character: "' + chr + '" at: ' + i);
      }
    };
    var NO_SOURCE_SUPPORT = fails(function() {
      var unsafeInt = "9007199254740993";
      var source;
      nativeParse(unsafeInt, function(key, value, context) {
        source = context.source;
      });
      return source !== unsafeInt;
    });
    var PROPER_BASE_PARSE = NATIVE_SYMBOL && !fails(function() {
      return 1 / nativeParse("-0 	") !== -Infinity;
    });
    $2({ target: "JSON", stat: true, forced: NO_SOURCE_SUPPORT }, {
      parse: function parse(text, reviver) {
        return PROPER_BASE_PARSE && !isCallable(reviver) ? nativeParse(text) : $parse(text, reviver);
      }
    });
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/function-apply.js
var require_function_apply = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/function-apply.js"(exports, module2) {
    "use strict";
    var NATIVE_BIND = require_function_bind_native();
    var FunctionPrototype = Function.prototype;
    var apply = FunctionPrototype.apply;
    var call = FunctionPrototype.call;
    module2.exports = typeof Reflect == "object" && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function() {
      return call.apply(apply, arguments);
    });
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/is-raw-json.js
var require_is_raw_json = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/is-raw-json.js"(exports, module2) {
    "use strict";
    var isObject = require_is_object();
    var getInternalState = require_internal_state().get;
    module2.exports = function isRawJSON(O) {
      if (!isObject(O)) return false;
      var state = getInternalState(O);
      return !!state && state.type === "RawJSON";
    };
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/array-slice.js
var require_array_slice = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/array-slice.js"(exports, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    module2.exports = uncurryThis([].slice);
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/native-raw-json.js
var require_native_raw_json = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/native-raw-json.js"(exports, module2) {
    "use strict";
    var fails = require_fails();
    module2.exports = !fails(function() {
      var unsafeInt = "9007199254740993";
      var raw = JSON.rawJSON(unsafeInt);
      return !JSON.isRawJSON(raw) || JSON.stringify(raw) !== unsafeInt;
    });
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/modules/es.json.stringify.js
var require_es_json_stringify = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/modules/es.json.stringify.js"() {
    "use strict";
    var $2 = require_export();
    var getBuiltIn = require_get_built_in();
    var apply = require_function_apply();
    var call = require_function_call();
    var uncurryThis = require_function_uncurry_this();
    var fails = require_fails();
    var isArray = require_is_array();
    var isCallable = require_is_callable();
    var isRawJSON = require_is_raw_json();
    var isSymbol = require_is_symbol();
    var classof = require_classof_raw();
    var toString = require_to_string();
    var arraySlice = require_array_slice();
    var parseJSONString = require_parse_json_string();
    var uid = require_uid();
    var NATIVE_SYMBOL = require_symbol_constructor_detection();
    var NATIVE_RAW_JSON = require_native_raw_json();
    var $String = String;
    var $stringify = getBuiltIn("JSON", "stringify");
    var exec = uncurryThis(/./.exec);
    var charAt = uncurryThis("".charAt);
    var charCodeAt = uncurryThis("".charCodeAt);
    var replace = uncurryThis("".replace);
    var slice = uncurryThis("".slice);
    var push = uncurryThis([].push);
    var numberToString = uncurryThis(1.1.toString);
    var surrogates = /[\uD800-\uDFFF]/g;
    var leadingSurrogates = /^[\uD800-\uDBFF]$/;
    var trailingSurrogates = /^[\uDC00-\uDFFF]$/;
    var MARK = uid();
    var MARK_LENGTH = MARK.length;
    var WRONG_SYMBOLS_CONVERSION = !NATIVE_SYMBOL || fails(function() {
      var symbol = getBuiltIn("Symbol")("stringify detection");
      return $stringify([symbol]) !== "[null]" || $stringify({ a: symbol }) !== "{}" || $stringify(Object(symbol)) !== "{}";
    });
    var ILL_FORMED_UNICODE = fails(function() {
      return $stringify("\uDF06\uD834") !== '"\\udf06\\ud834"' || $stringify("\uDEAD") !== '"\\udead"';
    });
    var stringifyWithProperSymbolsConversion = WRONG_SYMBOLS_CONVERSION ? function(it, replacer) {
      var args = arraySlice(arguments);
      var $replacer = getReplacerFunction(replacer);
      if (!isCallable($replacer) && (it === void 0 || isSymbol(it))) return;
      args[1] = function(key, value) {
        if (isCallable($replacer)) value = call($replacer, this, $String(key), value);
        if (!isSymbol(value)) return value;
      };
      return apply($stringify, null, args);
    } : $stringify;
    var fixIllFormedJSON = function(match, offset, string) {
      var prev = charAt(string, offset - 1);
      var next = charAt(string, offset + 1);
      if (exec(leadingSurrogates, match) && !exec(trailingSurrogates, next) || exec(trailingSurrogates, match) && !exec(leadingSurrogates, prev)) {
        return "\\u" + numberToString(charCodeAt(match, 0), 16);
      }
      return match;
    };
    var getReplacerFunction = function(replacer) {
      if (isCallable(replacer)) return replacer;
      if (!isArray(replacer)) return;
      var rawLength = replacer.length;
      var keys = [];
      for (var i = 0; i < rawLength; i++) {
        var element = replacer[i];
        if (typeof element == "string") push(keys, element);
        else if (typeof element == "number" || classof(element) === "Number" || classof(element) === "String") push(keys, toString(element));
      }
      var keysLength = keys.length;
      var root = true;
      return function(key, value) {
        if (root) {
          root = false;
          return value;
        }
        if (isArray(this)) return value;
        for (var j = 0; j < keysLength; j++) if (keys[j] === key) return value;
      };
    };
    if ($stringify) $2({ target: "JSON", stat: true, arity: 3, forced: WRONG_SYMBOLS_CONVERSION || ILL_FORMED_UNICODE || !NATIVE_RAW_JSON }, {
      stringify: function stringify(text, replacer, space) {
        var replacerFunction = getReplacerFunction(replacer);
        var rawStrings = [];
        var json = stringifyWithProperSymbolsConversion(text, function(key, value) {
          var v = isCallable(replacerFunction) ? call(replacerFunction, this, $String(key), value) : value;
          return !NATIVE_RAW_JSON && isRawJSON(v) ? MARK + (push(rawStrings, v.rawJSON) - 1) : v;
        }, space);
        if (typeof json != "string") return json;
        if (ILL_FORMED_UNICODE) json = replace(json, surrogates, fixIllFormedJSON);
        if (NATIVE_RAW_JSON) return json;
        var result = "";
        var length = json.length;
        for (var i = 0; i < length; i++) {
          var chr = charAt(json, i);
          if (chr === '"') {
            var end = parseJSONString(json, ++i).end - 1;
            var string = slice(json, i, end);
            result += slice(string, 0, MARK_LENGTH) === MARK ? rawStrings[slice(string, MARK_LENGTH)] : '"' + string + '"';
            i = end;
          } else result += chr;
        }
        return result;
      }
    });
  }
});

// dist/SpecialWikitext/SpecialWikitext.js
require_es_json_parse();
require_es_json_stringify();
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c), u = i.value;
  } catch (n2) {
    return void e(n2);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function() {
    var t = this, e = arguments;
    return new Promise(function(r, o) {
      var a = n.apply(t, e);
      function _next(n2) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n2);
      }
      function _throw(n2) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n2);
      }
      _next(void 0);
    });
  };
}
function _createForOfIteratorHelper(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
      t && (r = t);
      var n = 0, F = function() {
      };
      return { s: F, n: function() {
        return n >= r.length ? { done: true } : { done: false, value: r[n++] };
      }, e: function(r2) {
        throw r2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o, a = true, u = false;
  return { s: function() {
    t = t.call(r);
  }, n: function() {
    var r2 = t.next();
    return a = r2.done, r2;
  }, e: function(r2) {
    u = true, o = r2;
  }, f: function() {
    try {
      a || null == t.return || t.return();
    } finally {
      if (u) throw o;
    }
  } };
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames2 = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    var _iterator = _createForOfIteratorHelper(__getOwnPropNames2(from)), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        let key = _step.value;
        if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
          get: () => from[key],
          enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
    value: mod,
    enumerable: true
  }) : target,
  mod
));
//! src/SpecialWikitext/SpecialWikitext.ts
var import_ext_gadget6 = require("ext.gadget.Util");
//! src/SpecialWikitext/components/SpecialWikitext.module.less
var previewLoadingContent = "SpecialWikitext-module__preview-loading__content_0PrDlG__4100";
var previewLoadingInner = "SpecialWikitext-module__preview-loading__inner_0PrDlG__4100";
//! src/SpecialWikitext/components/generateElements.tsx
var import_ext_gadget2 = __toESM(require("ext.gadget.JSX"), 1);
//! src/SpecialWikitext/images/Loading_icon.gif
var Loading_icon_default = "data:image/gif;base64,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";
//! src/SpecialWikitext/images/Alert.png
var Alert_default = "data:image/png;base64,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";
//! src/SpecialWikitext/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    Failed: (0, import_ext_gadget.localize)({
      en: "Failed to load preview.",
      "zh-hans": "预览加载失败",
      "zh-hant": "預覽載入失败"
    }),
    Loading: (0, import_ext_gadget.localize)({
      en: "Loading preview...",
      "zh-hans": "预览加载中……",
      "zh-hant": "預覽載入中……"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/SpecialWikitext/components/generateElements.tsx
var Failed = () => /* @__PURE__ */ import_ext_gadget2.default.createElement(import_ext_gadget2.default.Fragment, null, /* @__PURE__ */ import_ext_gadget2.default.createElement("img", {
  src: Alert_default,
  decoding: "async",
  width: "32",
  height: "32"
}), /* @__PURE__ */ import_ext_gadget2.default.createElement("span", null, " ", getMessage("Failed")));
var Loading = () => /* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
  id: "specialwikitext-preview-loading"
}, /* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
  className: ["quotebox", previewLoadingInner],
  id: "specialwikitext-preview-loading__inner"
}, /* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
  className: previewLoadingContent,
  id: "specialwikitext-preview-loading__content"
}, /* @__PURE__ */ import_ext_gadget2.default.createElement("img", {
  src: Loading_icon_default,
  decoding: "async",
  width: "32",
  height: "32"
}), /* @__PURE__ */ import_ext_gadget2.default.createElement("span", null, " ", getMessage("Loading")))));
//! src/SpecialWikitext/modules/util/checkElementExist.ts
var import_ext_gadget3 = require("ext.gadget.Util");
var checkElementExist = (selectors) => {
  const selectorArray = (0, import_ext_gadget3.generateArray)(selectors);
  var _iterator2 = _createForOfIteratorHelper(selectorArray), _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
      const selector = _step2.value;
      if (document.querySelector(selector)) {
        return true;
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  return false;
};
//! src/SpecialWikitext/modules/util/addParsedWikitext.ts
var addParsedWikitext = (parsedWikitext) => {
  const $body = $("body");
  const $parsedWikitext = $().html(parsedWikitext);
  if (checkElementExist("#specialwikitext-preview-loading")) {
    const $element = $body.find("#specialwikitext-preview-loading");
    $element.html(parsedWikitext);
    mw.hook("wikipage.content").fire($element);
  } else if (checkElementExist(".diff-currentversion-title")) {
    $body.find(".diff-currentversion-title").append($parsedWikitext);
  } else if (checkElementExist(".previewnote")) {
    $body.find(".previewnote").append($parsedWikitext);
  } else if (checkElementExist(".mw-undelete-revision")) {
    $body.find(".mw-undelete-revision").append($parsedWikitext);
  } else if (checkElementExist("#mw-content-text")) {
    $body.find("#mw-content-text").append($parsedWikitext);
  }
  mw.hook("wikipage.content").fire($parsedWikitext);
};
//! src/SpecialWikitext/modules/notice.ts
var noticeFailElement = Failed();
var noticeLoadingElement = Loading();
var replaceDOM = (selector, element) => {
  $(selector).html(element !== null && element !== void 0 ? element : "");
};
var addLoadingNotice = () => {
  addParsedWikitext(noticeLoadingElement);
};
var loadingFailNotice = () => {
  replaceDOM("#specialwikitext-preview-loading__content", noticeFailElement);
};
var removeLoadingNotice = () => {
  replaceDOM("#specialwikitext-preview-loading");
};
//! src/SpecialWikitext/options.json
var version = "2.0";
var wikiTextKey = "_addText";
//! src/SpecialWikitext/modules/lua/luaAddText.ts
var luaAddText = (inputString, newString, isEscape = false) => {
  if (newString) {
    if (inputString) {
      inputString += "\n";
    }
    if (isEscape) {
      const [escapeString] = JSON.parse("[".concat(JSON.stringify(
        // Lua不支持\u、\x转义字符
        newString.replace(/\\([ux])/gi, "$1")
      ).replace(/\\\\/g, "\\"), "]"));
      newString = escapeString;
    }
    inputString += newString;
  }
  return inputString;
};
//! src/SpecialWikitext/modules/lua/luaGetText.ts
var luaGetString = (inputString) => {
  const testStringExecArray = /[^\n]*\*\//.exec(inputString);
  let testString = inputString;
  if (testStringExecArray) {
    [testString] = testStringExecArray;
    testString = testString.slice(0, Math.max(0, testString.length - 2));
  }
  const trimCheck = testString.trim();
  const firstChar = trimCheck.charAt(0);
  if (firstChar === trimCheck.at(-1) && (firstChar === "'" || firstChar === '"')) {
    return trimCheck.slice(1, 1 + trimCheck.length - 2);
  }
  return testString.trim();
};
var luaGetContentText = (inputString) => {
  let wikitext = "";
  try {
    inputString.replace(new RegExp("".concat(wikiTextKey, "\\s*\\{[^c\\}]*content\\s*:\\s*[^\n]*"), "g"), (substring) => {
      const tempText = (/content\s*:\s*[^\n]*/.exec(substring) || ["content:"])[0].replace(/^[\s;}]+|[\s;}]+$/g, "").replace(/\s*content\s*:\s*/, "");
      if (wikitext) {
        wikitext += "\n";
      }
      wikitext += luaGetString(tempText);
      return substring;
    });
  } catch {
    return "";
  }
  return wikitext.trim();
};
var luaGetObjText = (inputString) => {
  let wikitext = "";
  try {
    inputString.replace(new RegExp("".concat(wikiTextKey, "\\s*[\\=:]\\s*[^\n]*"), "g"), (substring) => {
      const tempText = substring.replace(/^[\s;}]+|[\s;}]+$/g, "").replace(new RegExp("".concat(wikiTextKey, "\\s*[\\=:]\\s*")), "");
      if (wikitext) {
        wikitext += "\n";
      }
      wikitext += luaGetString(tempText);
      return substring;
    });
  } catch {
    return "";
  }
  return wikitext.trim();
};
var luaGetCSSwikitext = (inputString) => {
  var _ref, _document$querySelect;
  let wikitext = "";
  const cssText = (_ref = inputString || ((_document$querySelect = document.querySelector("textarea[name=wpTextbox1]")) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.value)) !== null && _ref !== void 0 ? _ref : "";
  if (!cssText.trim()) {
    return "";
  }
  wikitext = luaAddText(wikitext, luaGetContentText(cssText), true);
  wikitext = luaAddText(wikitext, luaGetObjText(cssText), true);
  return wikitext.trim();
};
var luaGetJSONwikitext = (inputString) => {
  var _ref2, _document$querySelect2;
  let wikitext = "";
  const JSONText = (_ref2 = inputString || ((_document$querySelect2 = document.querySelector("textarea[name=wpTextbox1]")) === null || _document$querySelect2 === void 0 ? void 0 : _document$querySelect2.value)) !== null && _ref2 !== void 0 ? _ref2 : "";
  if (!JSONText.trim()) {
    return "";
  }
  try {
    const jsonData = JSON.parse(JSONText);
    for (var _i = 0, _Object$entries = Object.entries(jsonData); _i < _Object$entries.length; _i++) {
      const [key, value] = _Object$entries[_i];
      if (new RegExp(wikiTextKey).test(key) && typeof value === "string") {
        wikitext = luaAddText(wikitext, value);
      }
      if (typeof value !== "string") {
        for (var _i2 = 0, _Object$entries2 = Object.entries(value); _i2 < _Object$entries2.length; _i2++) {
          const [k, v] = _Object$entries2[_i2];
          if (new RegExp(wikiTextKey).test(k) && typeof v === "string") {
            wikitext = luaAddText(wikitext, v);
          }
        }
      }
    }
  } catch {
    return "";
  }
  return wikitext.trim();
};
var luaGetJSwikitext = (inputString) => {
  var _ref3, _document$querySelect3;
  let wikitext = "";
  const jsText = (_ref3 = inputString || ((_document$querySelect3 = document.querySelector("textarea[name=wpTextbox1]")) === null || _document$querySelect3 === void 0 ? void 0 : _document$querySelect3.value)) !== null && _ref3 !== void 0 ? _ref3 : "";
  if (!jsText.trim()) {
    return "";
  }
  wikitext = luaAddText(wikitext, luaGetObjText(jsText), true);
  return wikitext.trim();
};
//! src/SpecialWikitext/modules/api.ts
var import_ext_gadget4 = require("ext.gadget.Util");
var api = (0, import_ext_gadget4.initMwApi)("SpecialWikitext/".concat(version));
//! src/SpecialWikitext/modules/util/getLanguage.ts
var {
  wgUserLanguage,
  wgUserVariant
} = mw.config.get();
var getLanguage = () => {
  const lang = wgUserLanguage;
  if (lang.includes("zh")) {
    return wgUserVariant;
  }
  return lang;
};
//! src/SpecialWikitext/modules/mw/mwAddText.ts
var {
  skin
} = mw.config.get();
var mwAddWikiText = /* @__PURE__ */ (function() {
  var _ref4 = _asyncToGenerator(function* (wikitext, pageName, isPreview) {
    if (wikitext.trim()) {
      const params = {
        action: "parse",
        format: "json",
        formatversion: "2",
        // 避免内容重复
        title: pageName,
        contentmodel: "wikitext",
        text: wikitext,
        prop: "text",
        uselang: getLanguage(),
        useskin: skin
      };
      if (isPreview) {
        params.disableeditsection = true;
        params.preview = true;
      }
      try {
        var _data$parse;
        const data = yield api.get(params);
        if (!(data !== null && data !== void 0 && (_data$parse = data["parse"]) !== null && _data$parse !== void 0 && _data$parse.text)) {
          return;
        }
        const parsedWikitext = data["parse"].text.trim();
        if (parsedWikitext) {
          addParsedWikitext(parsedWikitext);
        } else {
          removeLoadingNotice();
        }
      } catch {
        loadingFailNotice();
      }
    } else {
      removeLoadingNotice();
    }
  });
  return function mwAddWikiText2(_x, _x2, _x3) {
    return _ref4.apply(this, arguments);
  };
})();
var mwAddLuaText = /* @__PURE__ */ (function() {
  var _ref5 = _asyncToGenerator(function* (wikitext, pageName, isPreview, callBack) {
    const tempModuleName = "AddText/Temp/Module/Data.lua";
    const moduleCall = {
      wikitext: "#invoke:",
      // 分开来，避免被分到[[:Category:有脚本错误的页面]]
      pageName: "Module:"
    };
    if (wikitext.trim()) {
      try {
        var _data$parse2;
        const params = {
          action: "parse",
          format: "json",
          formatversion: "2",
          title: pageName,
          contentmodel: "wikitext",
          templatesandboxtitle: moduleCall.pageName + tempModuleName,
          // 创建临时Lua Module
          templatesandboxtext: "return {\n	main = function()\n		xpcall(\n			function()\n				".concat(wikitext, '\n			end,\n			function()\n			end\n		)\n		local moduleWikitext = package.loaded["Module:Module wikitext"]\n		if moduleWikitext then\n			local wikitext = moduleWikitext.main()\n			if mw.text.trim(wikitext) ~= "" then\n				return mw.getCurrentFrame():preprocess(moduleWikitext.main())\n			end\n		end\n		return ""\n	end\n}'),
          templatesandboxcontentmodel: "Scribunto",
          templatesandboxcontentformat: "text/plain",
          text: "{{".concat(moduleCall.wikitext).concat(tempModuleName, "|main}}"),
          prop: "text",
          uselang: getLanguage(),
          useskin: skin
        };
        if (isPreview) {
          params.preview = true;
          params.disableeditsection = true;
        }
        const data = yield api.get(params);
        if (!(data !== null && data !== void 0 && (_data$parse2 = data["parse"]) !== null && _data$parse2 !== void 0 && _data$parse2.text)) {
          return;
        }
        const parsedWikitext = data["parse"].text.trim();
        if (!parsedWikitext) {
          removeLoadingNotice();
        } else if ($(parsedWikitext).find(".scribunto-error").text().search(tempModuleName)) {
          removeLoadingNotice();
        } else if (typeof callBack === "function") {
          callBack(parsedWikitext);
        } else {
          addParsedWikitext(parsedWikitext);
        }
      } catch {
        loadingFailNotice();
      }
    } else {
      removeLoadingNotice();
    }
  });
  return function mwAddLuaText2(_x4, _x5, _x6, _x7) {
    return _ref5.apply(this, arguments);
  };
})();
//! src/SpecialWikitext/modules/lua/luaCheck.ts
var {
  wgPageContentModel
} = mw.config.get();
var luaCheck = (inputString = "", contentModel = wgPageContentModel) => {
  switch (contentModel.toLowerCase()) {
    case "json":
      return luaGetJSONwikitext(inputString);
    case "js":
    case "javascript":
    case "text":
      return luaGetJSwikitext(inputString);
    case "css":
    case "sanitized-css":
      return luaGetCSSwikitext(inputString);
    default:
      return "";
  }
};
//! src/SpecialWikitext/modules/mw/mwApply.ts
var {
  skin: skin2,
  wgRevisionId
} = mw.config.get();
var mwApplyNotice = /* @__PURE__ */ (function() {
  var _ref6 = _asyncToGenerator(function* (currentPageName, pageSubName) {
    try {
      var _data$parse3;
      const params = {
        action: "parse",
        format: "json",
        formatversion: "2",
        // get the original wikitext content of a page
        title: currentPageName + pageSubName,
        text: "{{#invoke:Special wikitext/Template|getNotices|".concat(currentPageName, "|").concat(pageSubName, "}}"),
        prop: "text",
        uselang: getLanguage(),
        useskin: skin2,
        smaxage: 600,
        maxage: 600
      };
      const data = yield api.get(params);
      if (!(data !== null && data !== void 0 && (_data$parse3 = data["parse"]) !== null && _data$parse3 !== void 0 && _data$parse3.text)) {
        return;
      }
      const html = data["parse"].text;
      if ($(html).text().trim()) {
        addParsedWikitext(html);
      }
    } catch {
    }
  });
  return function mwApplyNotice2(_x8, _x9) {
    return _ref6.apply(this, arguments);
  };
})();
var mwApplyRevision = /* @__PURE__ */ (function() {
  var _ref7 = _asyncToGenerator(function* (currentPageName) {
    try {
      var _data$parse4;
      const params = {
        action: "parse",
        format: "json",
        formatversion: "2",
        // get the original wikitext content of a page
        oldid: wgRevisionId,
        prop: "wikitext",
        smaxage: 600,
        maxage: 600
      };
      const data = yield api.get(params);
      if (!(data !== null && data !== void 0 && (_data$parse4 = data["parse"]) !== null && _data$parse4 !== void 0 && _data$parse4.wikitext)) {
        return;
      }
      let pageContent = luaCheck(data["parse"].wikitext.trim());
      pageContent = (checkElementExist("#mw-clearyourcache") ? "{{#invoke:Special wikitext/Template|int|clearyourcache}}" : "") + pageContent;
      if (pageContent.trim()) {
        void mwAddWikiText(pageContent, currentPageName, true);
      } else {
        removeLoadingNotice();
      }
    } catch {
      removeLoadingNotice();
    }
  });
  return function mwApplyRevision2(_x0) {
    return _ref7.apply(this, arguments);
  };
})();
//! src/SpecialWikitext/modules/util/checkMwConfig.ts
var import_ext_gadget5 = require("ext.gadget.Util");
var allMwConfig = mw.config.get();
var checkMwConfig = (configKey, expectConfig) => {
  let mwConfig = allMwConfig[configKey];
  if (!mwConfig) {
    return false;
  }
  mwConfig = String(mwConfig).toLowerCase().trim();
  if (!mwConfig) {
    return false;
  }
  return (0, import_ext_gadget5.generateArray)(expectConfig).includes(mwConfig);
};
//! src/SpecialWikitext/modules/util/checkNeedPreview.ts
var checkNeedPreview = () => {
  return document.body.innerHTML.search(wikiTextKey) > -1;
};
//! src/SpecialWikitext/modules/mw/mwAddPreview.ts
var {
  wgCanonicalNamespace,
  wgCanonicalSpecialPageName,
  wgPageName
} = mw.config.get();
var mwAddPreview = ($body) => {
  if (checkMwConfig("wgPageContentModel", ["javascript", "js", "json", "text", "css", "sanitized-css"])) {
    if (checkElementExist(".previewnote")) {
      var _mw$util$getUrl$match, _mw$util$getUrl$match2;
      const pathPath = decodeURI(mw.util.getUrl(wgPageName)).replace(new RegExp("^\\/?".concat((_mw$util$getUrl$match = (_mw$util$getUrl$match2 = mw.util.getUrl("").match(/[a-z]+/)) === null || _mw$util$getUrl$match2 === void 0 ? void 0 : _mw$util$getUrl$match2[0]) !== null && _mw$util$getUrl$match !== void 0 ? _mw$util$getUrl$match : "", "\\/")), "");
      if (pathPath !== wgPageName) {
        return;
      }
      const wikitext = luaCheck();
      if (wikitext) {
        addLoadingNotice();
        void mwAddWikiText(wikitext, wgPageName, true);
      }
    } else if (!checkElementExist(".mw-_addText-content") && checkMwConfig("wgAction", "view")) {
      if (!checkNeedPreview()) {
        return;
      }
      $body.find("#mw-clearyourcache").html("");
      if (!checkElementExist("textarea[name=wpTextbox1]")) {
        addLoadingNotice();
        void mwApplyRevision(wgPageName);
      }
    } else if (checkElementExist("#mw-revision-info") && checkMwConfig("wgAction", "view")) {
      if (!checkElementExist("textarea[name=wpTextbox1]")) {
        $body.find("#mw-clearyourcache").html(noticeLoadingElement);
        void mwApplyRevision(wgPageName);
      }
    } else {
      removeLoadingNotice();
    }
  } else if (checkMwConfig("wgPageContentModel", ["scribunto", "lua"])) {
    if (!checkNeedPreview()) {
      return;
    }
    if (checkElementExist("textarea[name=wpTextbox1]") && checkElementExist("table.diff") && !checkElementExist(".previewnote") && !checkMwConfig("wgAction", "view")) {
      var _$body$find$val;
      $(noticeLoadingElement).insertAfter("#wikiDiff");
      void mwAddLuaText((_$body$find$val = $body.find("textarea[name=wpTextbox1]").val()) !== null && _$body$find$val !== void 0 ? _$body$find$val : "", wgPageName, true);
    }
  } else if (checkElementExist(".mw-undelete-revision")) {
    if (!checkNeedPreview()) {
      return;
    }
    if (checkElementExist([".mw-highlight", "pre", ".mw-json"])) {
      var _$body$find$val2;
      const textareaContent = (_$body$find$val2 = $body.find("textarea").val()) !== null && _$body$find$val2 !== void 0 ? _$body$find$val2 : "";
      let wikitext = luaGetJSONwikitext(textareaContent);
      wikitext || (wikitext = luaGetCSSwikitext(textareaContent));
      if (wikitext) {
        addLoadingNotice();
        void mwAddWikiText(wikitext, mw.config.get("wgRelevantPageName"), true);
      } else if (/module[ _]wikitext.*_addtext/i.test($body.find(".mw-parser-output").text())) {
      }
    }
  } else if (!checkElementExist(".mw-editnotice") && checkMwConfig("wgCanonicalNamespace", "special")) {
    const pageSubName = wgPageName.replace(/special:[^/]+/i, "");
    if (wgCanonicalSpecialPageName) {
      const fullPageName = "".concat(wgCanonicalNamespace, ":").concat(wgCanonicalSpecialPageName);
      void mwApplyNotice(fullPageName, pageSubName);
    }
  } else {
    removeLoadingNotice();
  }
};
//! src/SpecialWikitext/modules/wikitextPreviewTestcase.ts
var {
  wgPageName: wgPageName2
} = mw.config.get();
var wikitextPreviewTestcase = /* @__PURE__ */ (function() {
  var _ref8 = _asyncToGenerator(function* (isPreview) {
    if (!checkNeedPreview()) {
      return;
    }
    const testcaseList = document.querySelectorAll(".special-wikitext-preview-testcase");
    if (!testcaseList.length) {
      return;
    }
    const testcaseDataList = [];
    let i = 0;
    for (i = 0; i < testcaseList.length; ++i) {
      var _exec, _codeId$toLowerCase, _codeElement$textCont, _codeElement$textCont2;
      const element = testcaseList[i];
      if (!element) {
        continue;
      }
      const codeElement = element.querySelector(".mw-highlight");
      if (!codeElement) {
        continue;
      }
      const {
        className
      } = codeElement;
      if (!className) {
        continue;
      }
      const [, codeId] = (_exec = /mw-highlight-lang-(\S+)/.exec(className)) !== null && _exec !== void 0 ? _exec : [];
      const {
        length
      } = testcaseDataList;
      element.setAttribute("preview-id", length.toString());
      testcaseDataList[length] = {
        element,
        lang: (_codeId$toLowerCase = codeId === null || codeId === void 0 ? void 0 : codeId.toLowerCase()) !== null && _codeId$toLowerCase !== void 0 ? _codeId$toLowerCase : "",
        code: (_codeElement$textCont = (_codeElement$textCont2 = codeElement.textContent) === null || _codeElement$textCont2 === void 0 ? void 0 : _codeElement$textCont2.trim()) !== null && _codeElement$textCont !== void 0 ? _codeElement$textCont : ""
      };
    }
    let packageWikitext = "";
    for (var _i3 = 0, _Object$values = Object.values(testcaseDataList); _i3 < _Object$values.length; _i3++) {
      const testcaseItem = _Object$values[_i3];
      const {
        code,
        element,
        lang
      } = testcaseItem;
      if (!code) {
        continue;
      }
      const $element = $(element);
      if (["javascript", "js", "css", "json", "text"].includes(testcaseItem.lang)) {
        const wikitext = luaCheck(code, lang);
        if (wikitext) {
          $element.prepend(noticeLoadingElement);
          packageWikitext += '<div class="special-wikitext-preview-testcase-'.concat(i, '">\n').concat(wikitext, "\n</div>");
        }
      } else if (["lua", "scribunto"].includes(lang)) {
        void mwAddLuaText(code, wgPageName2, isPreview, /* @__PURE__ */ (() => {
          return (wikitext) => {
            $element.prepend(wikitext);
          };
        })());
      }
    }
    if (packageWikitext) {
      packageWikitext = '<div class="special-wikitext-preview-testcase-undefined">'.concat(packageWikitext, "</div>");
      try {
        var _data$parse5;
        const params = {
          action: "parse",
          format: "json",
          formatversion: "2",
          text: packageWikitext,
          contentmodel: "wikitext",
          prop: "text"
        };
        if (isPreview) {
          params.disableeditsection = true;
          params.preview = true;
        }
        const data = yield api.get(params);
        if (!(data !== null && data !== void 0 && (_data$parse5 = data["parse"]) !== null && _data$parse5 !== void 0 && _data$parse5.text)) {
          return;
        }
        const parsedWikitext = data["parse"].text.trim();
        if (parsedWikitext) {
          const $parsedElement = $(parsedWikitext);
          for (var _i4 = 0, _Object$entries3 = Object.entries(testcaseDataList); _i4 < _Object$entries3.length; _i4++) {
            const [key, testcaseItem] = _Object$entries3[_i4];
            const {
              element,
              lang
            } = testcaseItem;
            if (!["javascript", "js", "text", "css", "json"].includes(lang)) {
              continue;
            }
            const $element = $parsedElement.find(".special-wikitext-preview-testcase-undefined > .special-wikitext-preview-testcase-".concat(key));
            if (!$element.length) {
              continue;
            }
            const $addTarget = $(element).find("#specialwikitext-preview-loading");
            $addTarget.html($element.html());
            mw.hook("wikipage.content").fire($addTarget);
          }
        }
      } catch {
      }
    }
  });
  return function wikitextPreviewTestcase2(_x1) {
    return _ref8.apply(this, arguments);
  };
})();
//! src/SpecialWikitext/SpecialWikitext.ts
void (0, import_ext_gadget6.getBody)().then(function specialWikitext($body) {
  mwAddPreview($body);
  void wikitextPreviewTestcase(true);
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nbG9iYWwtdGhpcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2ZhaWxzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZGVzY3JpcHRvcnMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLW5hdGl2ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtcHJvcGVydHktaXMtZW51bWVyYWJsZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY2xhc3NvZi1yYXcuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbmRleGVkLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLW51bGwtb3ItdW5kZWZpbmVkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1jYWxsYWJsZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dldC1idWlsdC1pbi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1pcy1wcm90b3R5cGUtb2YuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9lbnZpcm9ubWVudC11c2VyLWFnZW50LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW52aXJvbm1lbnQtdjgtdmVyc2lvbi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3N5bWJvbC1jb25zdHJ1Y3Rvci1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXN5bWJvbC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RyeS10by1zdHJpbmcuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hLWNhbGxhYmxlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2V0LW1ldGhvZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29yZGluYXJ5LXRvLXByaW1pdGl2ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXB1cmUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tb2JqZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3VpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJvcGVydHkta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pZTgtZG9tLWRlZmluZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy92OC1wcm90b3R5cGUtZGVmaW5lLWJ1Zy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FuLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1uYW1lLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW5zcGVjdC1zb3VyY2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy93ZWFrLW1hcC1iYXNpYy1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zaGFyZWQta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGlkZGVuLWtleXMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL21ha2UtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9tYXRoLXRydW5jLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tbGVuZ3RoLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1pbmNsdWRlcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW51bS1idWcta2V5cy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL293bi1rZXlzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtZm9yY2VkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZXhwb3J0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtYXJyYXkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1zdHJpbmctdGFnLXN1cHBvcnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jbGFzc29mLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tc3RyaW5nLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcGFyc2UtanNvbi1zdHJpbmcuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuanNvbi5wYXJzZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLWFwcGx5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtcmF3LWpzb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1zbGljZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL25hdGl2ZS1yYXctanNvbi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5qc29uLnN0cmluZ2lmeS5qcyIsICJzcmMvU3BlY2lhbFdpa2l0ZXh0L1NwZWNpYWxXaWtpdGV4dC50cyIsICJzcmMvU3BlY2lhbFdpa2l0ZXh0L2NvbXBvbmVudHMvU3BlY2lhbFdpa2l0ZXh0Lm1vZHVsZS5sZXNzIiwgInNyYy9TcGVjaWFsV2lraXRleHQvY29tcG9uZW50cy9nZW5lcmF0ZUVsZW1lbnRzLnRzeCIsICJzcmMvU3BlY2lhbFdpa2l0ZXh0L21vZHVsZXMvaTE4bi50cyIsICJzcmMvU3BlY2lhbFdpa2l0ZXh0L21vZHVsZXMvdXRpbC9jaGVja0VsZW1lbnRFeGlzdC50cyIsICJzcmMvU3BlY2lhbFdpa2l0ZXh0L21vZHVsZXMvdXRpbC9hZGRQYXJzZWRXaWtpdGV4dC50cyIsICJzcmMvU3BlY2lhbFdpa2l0ZXh0L21vZHVsZXMvbm90aWNlLnRzIiwgInNyYy9TcGVjaWFsV2lraXRleHQvb3B0aW9ucy5qc29uIiwgInNyYy9TcGVjaWFsV2lraXRleHQvbW9kdWxlcy9sdWEvbHVhQWRkVGV4dC50cyIsICJzcmMvU3BlY2lhbFdpa2l0ZXh0L21vZHVsZXMvbHVhL2x1YUdldFRleHQudHMiLCAic3JjL1NwZWNpYWxXaWtpdGV4dC9tb2R1bGVzL2FwaS50cyIsICJzcmMvU3BlY2lhbFdpa2l0ZXh0L21vZHVsZXMvdXRpbC9nZXRMYW5ndWFnZS50cyIsICJzcmMvU3BlY2lhbFdpa2l0ZXh0L21vZHVsZXMvbXcvbXdBZGRUZXh0LnRzIiwgInNyYy9TcGVjaWFsV2lraXRleHQvbW9kdWxlcy9sdWEvbHVhQ2hlY2sudHMiLCAic3JjL1NwZWNpYWxXaWtpdGV4dC9tb2R1bGVzL213L213QXBwbHkudHMiLCAic3JjL1NwZWNpYWxXaWtpdGV4dC9tb2R1bGVzL3V0aWwvY2hlY2tNd0NvbmZpZy50cyIsICJzcmMvU3BlY2lhbFdpa2l0ZXh0L21vZHVsZXMvdXRpbC9jaGVja05lZWRQcmV2aWV3LnRzIiwgInNyYy9TcGVjaWFsV2lraXRleHQvbW9kdWxlcy9tdy9td0FkZFByZXZpZXcudHMiLCAic3JjL1NwZWNpYWxXaWtpdGV4dC9tb2R1bGVzL3dpa2l0ZXh0UHJldmlld1Rlc3RjYXNlLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIndXNlIHN0cmljdCc7XG52YXIgY2hlY2sgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ICYmIGl0Lk1hdGggPT09IE1hdGggJiYgaXQ7XG59O1xuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxubW9kdWxlLmV4cG9ydHMgPVxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tZ2xvYmFsLXRoaXMgLS0gc2FmZVxuICBjaGVjayh0eXBlb2YgZ2xvYmFsVGhpcyA9PSAnb2JqZWN0JyAmJiBnbG9iYWxUaGlzKSB8fFxuICBjaGVjayh0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdykgfHxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtZ2xvYmFscyAtLSBzYWZlXG4gIGNoZWNrKHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYpIHx8XG4gIGNoZWNrKHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsKSB8fFxuICBjaGVjayh0eXBlb2YgdGhpcyA9PSAnb2JqZWN0JyAmJiB0aGlzKSB8fFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmMgLS0gZmFsbGJhY2tcbiAgKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0pKCkgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG4vLyBEZXRlY3QgSUU4J3MgaW5jb21wbGV0ZSBkZWZpbmVQcm9wZXJ0eSBpbXBsZW1lbnRhdGlvblxubW9kdWxlLmV4cG9ydHMgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sIDEsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pWzFdICE9PSA3O1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWZ1bmN0aW9uLXByb3RvdHlwZS1iaW5kIC0tIHNhZmVcbiAgdmFyIHRlc3QgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH0uYmluZCgpO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zIC0tIHNhZmVcbiAgcmV0dXJuIHR5cGVvZiB0ZXN0ICE9ICdmdW5jdGlvbicgfHwgdGVzdC5oYXNPd25Qcm9wZXJ0eSgncHJvdG90eXBlJyk7XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgTkFUSVZFX0JJTkQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1uYXRpdmUnKTtcblxudmFyIGNhbGwgPSBGdW5jdGlvbi5wcm90b3R5cGUuY2FsbDtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1mdW5jdGlvbi1wcm90b3R5cGUtYmluZCAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IE5BVElWRV9CSU5EID8gY2FsbC5iaW5kKGNhbGwpIDogZnVuY3Rpb24gKCkge1xuICByZXR1cm4gY2FsbC5hcHBseShjYWxsLCBhcmd1bWVudHMpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJHByb3BlcnR5SXNFbnVtZXJhYmxlID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuLy8gTmFzaG9ybiB+IEpESzggYnVnXG52YXIgTkFTSE9STl9CVUcgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgJiYgISRwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHsgMTogMiB9LCAxKTtcblxuLy8gYE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGVgIG1ldGhvZCBpbXBsZW1lbnRhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QucHJvdG90eXBlLnByb3BlcnR5aXNlbnVtZXJhYmxlXG5leHBvcnRzLmYgPSBOQVNIT1JOX0JVRyA/IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKFYpIHtcbiAgdmFyIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGhpcywgVik7XG4gIHJldHVybiAhIWRlc2NyaXB0b3IgJiYgZGVzY3JpcHRvci5lbnVtZXJhYmxlO1xufSA6ICRwcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChiaXRtYXAsIHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZTogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGU6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWU6IHZhbHVlXG4gIH07XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBOQVRJVkVfQklORCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLW5hdGl2ZScpO1xuXG52YXIgRnVuY3Rpb25Qcm90b3R5cGUgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG52YXIgY2FsbCA9IEZ1bmN0aW9uUHJvdG90eXBlLmNhbGw7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tZnVuY3Rpb24tcHJvdG90eXBlLWJpbmQgLS0gc2FmZVxudmFyIHVuY3VycnlUaGlzV2l0aEJpbmQgPSBOQVRJVkVfQklORCAmJiBGdW5jdGlvblByb3RvdHlwZS5iaW5kLmJpbmQoY2FsbCwgY2FsbCk7XG5cbm1vZHVsZS5leHBvcnRzID0gTkFUSVZFX0JJTkQgPyB1bmN1cnJ5VGhpc1dpdGhCaW5kIDogZnVuY3Rpb24gKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGNhbGwuYXBwbHkoZm4sIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcblxudmFyIHRvU3RyaW5nID0gdW5jdXJyeVRoaXMoe30udG9TdHJpbmcpO1xudmFyIHN0cmluZ1NsaWNlID0gdW5jdXJyeVRoaXMoJycuc2xpY2UpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gc3RyaW5nU2xpY2UodG9TdHJpbmcoaXQpLCA4LCAtMSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcblxudmFyICRPYmplY3QgPSBPYmplY3Q7XG52YXIgc3BsaXQgPSB1bmN1cnJ5VGhpcygnJy5zcGxpdCk7XG5cbi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG5tb2R1bGUuZXhwb3J0cyA9IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gdGhyb3dzIGFuIGVycm9yIGluIHJoaW5vLCBzZWUgaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvcmhpbm8vaXNzdWVzLzM0NlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zIC0tIHNhZmVcbiAgcmV0dXJuICEkT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCk7XG59KSA/IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gY2xhc3NvZihpdCkgPT09ICdTdHJpbmcnID8gc3BsaXQoaXQsICcnKSA6ICRPYmplY3QoaXQpO1xufSA6ICRPYmplY3Q7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gd2UgY2FuJ3QgdXNlIGp1c3QgYGl0ID09IG51bGxgIHNpbmNlIG9mIGBkb2N1bWVudC5hbGxgIHNwZWNpYWwgY2FzZVxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1Jc0hUTUxEREEtaW50ZXJuYWwtc2xvdC1hZWNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCA9PT0gbnVsbCB8fCBpdCA9PT0gdW5kZWZpbmVkO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaXNOdWxsT3JVbmRlZmluZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtbnVsbC1vci11bmRlZmluZWQnKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbi8vIGBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcmVxdWlyZW9iamVjdGNvZXJjaWJsZVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGlzTnVsbE9yVW5kZWZpbmVkKGl0KSkgdGhyb3cgbmV3ICRUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG4vLyB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIEluZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QnKTtcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gSW5kZXhlZE9iamVjdChyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGl0KSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtSXNIVE1MRERBLWludGVybmFsLXNsb3RcbnZhciBkb2N1bWVudEFsbCA9IHR5cGVvZiBkb2N1bWVudCA9PSAnb2JqZWN0JyAmJiBkb2N1bWVudC5hbGw7XG5cbi8vIGBJc0NhbGxhYmxlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtaXNjYWxsYWJsZVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHVuaWNvcm4vbm8tdHlwZW9mLXVuZGVmaW5lZCAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xubW9kdWxlLmV4cG9ydHMgPSB0eXBlb2YgZG9jdW1lbnRBbGwgPT0gJ3VuZGVmaW5lZCcgJiYgZG9jdW1lbnRBbGwgIT09IHVuZGVmaW5lZCA/IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gdHlwZW9mIGFyZ3VtZW50ID09ICdmdW5jdGlvbicgfHwgYXJndW1lbnQgPT09IGRvY3VtZW50QWxsO1xufSA6IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gdHlwZW9mIGFyZ3VtZW50ID09ICdmdW5jdGlvbic7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IGlzQ2FsbGFibGUoaXQpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcblxudmFyIGFGdW5jdGlvbiA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gaXNDYWxsYWJsZShhcmd1bWVudCkgPyBhcmd1bWVudCA6IHVuZGVmaW5lZDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWVzcGFjZSwgbWV0aG9kKSB7XG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoIDwgMiA/IGFGdW5jdGlvbihnbG9iYWxUaGlzW25hbWVzcGFjZV0pIDogZ2xvYmFsVGhpc1tuYW1lc3BhY2VdICYmIGdsb2JhbFRoaXNbbmFtZXNwYWNlXVttZXRob2RdO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gdW5jdXJyeVRoaXMoe30uaXNQcm90b3R5cGVPZik7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcblxudmFyIG5hdmlnYXRvciA9IGdsb2JhbFRoaXMubmF2aWdhdG9yO1xudmFyIHVzZXJBZ2VudCA9IG5hdmlnYXRvciAmJiBuYXZpZ2F0b3IudXNlckFnZW50O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHVzZXJBZ2VudCA/IFN0cmluZyh1c2VyQWdlbnQpIDogJyc7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcbnZhciB1c2VyQWdlbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW52aXJvbm1lbnQtdXNlci1hZ2VudCcpO1xuXG52YXIgcHJvY2VzcyA9IGdsb2JhbFRoaXMucHJvY2VzcztcbnZhciBEZW5vID0gZ2xvYmFsVGhpcy5EZW5vO1xudmFyIHZlcnNpb25zID0gcHJvY2VzcyAmJiBwcm9jZXNzLnZlcnNpb25zIHx8IERlbm8gJiYgRGVuby52ZXJzaW9uO1xudmFyIHY4ID0gdmVyc2lvbnMgJiYgdmVyc2lvbnMudjg7XG52YXIgbWF0Y2gsIHZlcnNpb247XG5cbmlmICh2OCkge1xuICBtYXRjaCA9IHY4LnNwbGl0KCcuJyk7XG4gIC8vIGluIG9sZCBDaHJvbWUsIHZlcnNpb25zIG9mIFY4IGlzbid0IFY4ID0gQ2hyb21lIC8gMTBcbiAgLy8gYnV0IHRoZWlyIGNvcnJlY3QgdmVyc2lvbnMgYXJlIG5vdCBpbnRlcmVzdGluZyBmb3IgdXNcbiAgdmVyc2lvbiA9IG1hdGNoWzBdID4gMCAmJiBtYXRjaFswXSA8IDQgPyAxIDogKyhtYXRjaFswXSArIG1hdGNoWzFdKTtcbn1cblxuLy8gQnJvd3NlckZTIE5vZGVKUyBgcHJvY2Vzc2AgcG9seWZpbGwgaW5jb3JyZWN0bHkgc2V0IGAudjhgIHRvIGAwLjBgXG4vLyBzbyBjaGVjayBgdXNlckFnZW50YCBldmVuIGlmIGAudjhgIGV4aXN0cywgYnV0IDBcbmlmICghdmVyc2lvbiAmJiB1c2VyQWdlbnQpIHtcbiAgbWF0Y2ggPSB1c2VyQWdlbnQubWF0Y2goL0VkZ2VcXC8oXFxkKykvKTtcbiAgaWYgKCFtYXRjaCB8fCBtYXRjaFsxXSA+PSA3NCkge1xuICAgIG1hdGNoID0gdXNlckFnZW50Lm1hdGNoKC9DaHJvbWVcXC8oXFxkKykvKTtcbiAgICBpZiAobWF0Y2gpIHZlcnNpb24gPSArbWF0Y2hbMV07XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB2ZXJzaW9uO1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIGVzL25vLXN5bWJvbCAtLSByZXF1aXJlZCBmb3IgdGVzdGluZyAqL1xudmFyIFY4X1ZFUlNJT04gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW52aXJvbm1lbnQtdjgtdmVyc2lvbicpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xuXG52YXIgJFN0cmluZyA9IGdsb2JhbFRoaXMuU3RyaW5nO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5c3ltYm9scyAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xubW9kdWxlLmV4cG9ydHMgPSAhIU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHN5bWJvbCA9IFN5bWJvbCgnc3ltYm9sIGRldGVjdGlvbicpO1xuICAvLyBDaHJvbWUgMzggU3ltYm9sIGhhcyBpbmNvcnJlY3QgdG9TdHJpbmcgY29udmVyc2lvblxuICAvLyBgZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzYCBwb2x5ZmlsbCBzeW1ib2xzIGNvbnZlcnRlZCB0byBvYmplY3QgYXJlIG5vdCBTeW1ib2wgaW5zdGFuY2VzXG4gIC8vIG5iOiBEbyBub3QgY2FsbCBgU3RyaW5nYCBkaXJlY3RseSB0byBhdm9pZCB0aGlzIGJlaW5nIG9wdGltaXplZCBvdXQgdG8gYHN5bWJvbCsnJ2Agd2hpY2ggd2lsbCxcbiAgLy8gb2YgY291cnNlLCBmYWlsLlxuICByZXR1cm4gISRTdHJpbmcoc3ltYm9sKSB8fCAhKE9iamVjdChzeW1ib2wpIGluc3RhbmNlb2YgU3ltYm9sKSB8fFxuICAgIC8vIENocm9tZSAzOC00MCBzeW1ib2xzIGFyZSBub3QgaW5oZXJpdGVkIGZyb20gRE9NIGNvbGxlY3Rpb25zIHByb3RvdHlwZXMgdG8gaW5zdGFuY2VzXG4gICAgIVN5bWJvbC5zaGFtICYmIFY4X1ZFUlNJT04gJiYgVjhfVkVSU0lPTiA8IDQxO1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgZXMvbm8tc3ltYm9sIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nICovXG52YXIgTkFUSVZFX1NZTUJPTCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zeW1ib2wtY29uc3RydWN0b3ItZGV0ZWN0aW9uJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gTkFUSVZFX1NZTUJPTCAmJlxuICAhU3ltYm9sLnNoYW0gJiZcbiAgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PSAnc3ltYm9sJztcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgaXNQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtaXMtcHJvdG90eXBlLW9mJyk7XG52YXIgVVNFX1NZTUJPTF9BU19VSUQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdXNlLXN5bWJvbC1hcy11aWQnKTtcblxudmFyICRPYmplY3QgPSBPYmplY3Q7XG5cbm1vZHVsZS5leHBvcnRzID0gVVNFX1NZTUJPTF9BU19VSUQgPyBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJztcbn0gOiBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyICRTeW1ib2wgPSBnZXRCdWlsdEluKCdTeW1ib2wnKTtcbiAgcmV0dXJuIGlzQ2FsbGFibGUoJFN5bWJvbCkgJiYgaXNQcm90b3R5cGVPZigkU3ltYm9sLnByb3RvdHlwZSwgJE9iamVjdChpdCkpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJFN0cmluZyA9IFN0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gJFN0cmluZyhhcmd1bWVudCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuICdPYmplY3QnO1xuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgdHJ5VG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdHJ5LXRvLXN0cmluZycpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gYEFzc2VydDogSXNDYWxsYWJsZShhcmd1bWVudCkgaXMgdHJ1ZWBcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIGlmIChpc0NhbGxhYmxlKGFyZ3VtZW50KSkgcmV0dXJuIGFyZ3VtZW50O1xuICB0aHJvdyBuZXcgJFR5cGVFcnJvcih0cnlUb1N0cmluZyhhcmd1bWVudCkgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBhQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1jYWxsYWJsZScpO1xudmFyIGlzTnVsbE9yVW5kZWZpbmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW51bGwtb3ItdW5kZWZpbmVkJyk7XG5cbi8vIGBHZXRNZXRob2RgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1nZXRtZXRob2Rcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFYsIFApIHtcbiAgdmFyIGZ1bmMgPSBWW1BdO1xuICByZXR1cm4gaXNOdWxsT3JVbmRlZmluZWQoZnVuYykgPyB1bmRlZmluZWQgOiBhQ2FsbGFibGUoZnVuYyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG4vLyBgT3JkaW5hcnlUb1ByaW1pdGl2ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9yZGluYXJ5dG9wcmltaXRpdmVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGlucHV0LCBwcmVmKSB7XG4gIHZhciBmbiwgdmFsO1xuICBpZiAocHJlZiA9PT0gJ3N0cmluZycgJiYgaXNDYWxsYWJsZShmbiA9IGlucHV0LnRvU3RyaW5nKSAmJiAhaXNPYmplY3QodmFsID0gY2FsbChmbiwgaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKGlzQ2FsbGFibGUoZm4gPSBpbnB1dC52YWx1ZU9mKSAmJiAhaXNPYmplY3QodmFsID0gY2FsbChmbiwgaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKHByZWYgIT09ICdzdHJpbmcnICYmIGlzQ2FsbGFibGUoZm4gPSBpbnB1dC50b1N0cmluZykgJiYgIWlzT2JqZWN0KHZhbCA9IGNhbGwoZm4sIGlucHV0KSkpIHJldHVybiB2YWw7XG4gIHRocm93IG5ldyAkVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZhbHNlO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxudmFyIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIHRyeSB7XG4gICAgZGVmaW5lUHJvcGVydHkoZ2xvYmFsVGhpcywga2V5LCB7IHZhbHVlOiB2YWx1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBnbG9iYWxUaGlzW2tleV0gPSB2YWx1ZTtcbiAgfSByZXR1cm4gdmFsdWU7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBJU19QVVJFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXB1cmUnKTtcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgZGVmaW5lR2xvYmFsUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWdsb2JhbC1wcm9wZXJ0eScpO1xuXG52YXIgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXyc7XG52YXIgc3RvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IGdsb2JhbFRoaXNbU0hBUkVEXSB8fCBkZWZpbmVHbG9iYWxQcm9wZXJ0eShTSEFSRUQsIHt9KTtcblxuKHN0b3JlLnZlcnNpb25zIHx8IChzdG9yZS52ZXJzaW9ucyA9IFtdKSkucHVzaCh7XG4gIHZlcnNpb246ICczLjQ5LjAnLFxuICBtb2RlOiBJU19QVVJFID8gJ3B1cmUnIDogJ2dsb2JhbCcsXG4gIGNvcHlyaWdodDogJ8KpIDIwMTPigJMyMDI1IERlbmlzIFB1c2hrYXJldiAoemxvaXJvY2sucnUpLCAyMDI14oCTMjAyNiBDb3JlSlMgQ29tcGFueSAoY29yZS1qcy5pbykuIEFsbCByaWdodHMgcmVzZXJ2ZWQuJyxcbiAgbGljZW5zZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2Jsb2IvdjMuNDkuMC9MSUNFTlNFJyxcbiAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMnXG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgc3RvcmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB2YWx1ZSB8fCB7fSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xuXG52YXIgJE9iamVjdCA9IE9iamVjdDtcblxuLy8gYFRvT2JqZWN0YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9vYmplY3Rcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiAkT2JqZWN0KHJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xuXG52YXIgaGFzT3duUHJvcGVydHkgPSB1bmN1cnJ5VGhpcyh7fS5oYXNPd25Qcm9wZXJ0eSk7XG5cbi8vIGBIYXNPd25Qcm9wZXJ0eWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWhhc293bnByb3BlcnR5XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWhhc293biAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5oYXNPd24gfHwgZnVuY3Rpb24gaGFzT3duKGl0LCBrZXkpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5KHRvT2JqZWN0KGl0KSwga2V5KTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xuXG52YXIgaWQgPSAwO1xudmFyIHBvc3RmaXggPSBNYXRoLnJhbmRvbSgpO1xudmFyIHRvU3RyaW5nID0gdW5jdXJyeVRoaXMoMS4xLnRvU3RyaW5nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiAnU3ltYm9sKCcgKyAoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSkgKyAnKV8nICsgdG9TdHJpbmcoKytpZCArIHBvc3RmaXgsIDM2KTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkJyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdWlkJyk7XG52YXIgTkFUSVZFX1NZTUJPTCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zeW1ib2wtY29uc3RydWN0b3ItZGV0ZWN0aW9uJyk7XG52YXIgVVNFX1NZTUJPTF9BU19VSUQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdXNlLXN5bWJvbC1hcy11aWQnKTtcblxudmFyIFN5bWJvbCA9IGdsb2JhbFRoaXMuU3ltYm9sO1xudmFyIFdlbGxLbm93blN5bWJvbHNTdG9yZSA9IHNoYXJlZCgnd2tzJyk7XG52YXIgY3JlYXRlV2VsbEtub3duU3ltYm9sID0gVVNFX1NZTUJPTF9BU19VSUQgPyBTeW1ib2xbJ2ZvciddIHx8IFN5bWJvbCA6IFN5bWJvbCAmJiBTeW1ib2wud2l0aG91dFNldHRlciB8fCB1aWQ7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgaWYgKCFoYXNPd24oV2VsbEtub3duU3ltYm9sc1N0b3JlLCBuYW1lKSkge1xuICAgIFdlbGxLbm93blN5bWJvbHNTdG9yZVtuYW1lXSA9IE5BVElWRV9TWU1CT0wgJiYgaGFzT3duKFN5bWJvbCwgbmFtZSlcbiAgICAgID8gU3ltYm9sW25hbWVdXG4gICAgICA6IGNyZWF0ZVdlbGxLbm93blN5bWJvbCgnU3ltYm9sLicgKyBuYW1lKTtcbiAgfSByZXR1cm4gV2VsbEtub3duU3ltYm9sc1N0b3JlW25hbWVdO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgaXNTeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtc3ltYm9sJyk7XG52YXIgZ2V0TWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1tZXRob2QnKTtcbnZhciBvcmRpbmFyeVRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29yZGluYXJ5LXRvLXByaW1pdGl2ZScpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcbnZhciBUT19QUklNSVRJVkUgPSB3ZWxsS25vd25TeW1ib2woJ3RvUHJpbWl0aXZlJyk7XG5cbi8vIGBUb1ByaW1pdGl2ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvcHJpbWl0aXZlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbnB1dCwgcHJlZikge1xuICBpZiAoIWlzT2JqZWN0KGlucHV0KSB8fCBpc1N5bWJvbChpbnB1dCkpIHJldHVybiBpbnB1dDtcbiAgdmFyIGV4b3RpY1RvUHJpbSA9IGdldE1ldGhvZChpbnB1dCwgVE9fUFJJTUlUSVZFKTtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKGV4b3RpY1RvUHJpbSkge1xuICAgIGlmIChwcmVmID09PSB1bmRlZmluZWQpIHByZWYgPSAnZGVmYXVsdCc7XG4gICAgcmVzdWx0ID0gY2FsbChleG90aWNUb1ByaW0sIGlucHV0LCBwcmVmKTtcbiAgICBpZiAoIWlzT2JqZWN0KHJlc3VsdCkgfHwgaXNTeW1ib2wocmVzdWx0KSkgcmV0dXJuIHJlc3VsdDtcbiAgICB0aHJvdyBuZXcgJFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbiAgfVxuICBpZiAocHJlZiA9PT0gdW5kZWZpbmVkKSBwcmVmID0gJ251bWJlcic7XG4gIHJldHVybiBvcmRpbmFyeVRvUHJpbWl0aXZlKGlucHV0LCBwcmVmKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByaW1pdGl2ZScpO1xudmFyIGlzU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXN5bWJvbCcpO1xuXG4vLyBgVG9Qcm9wZXJ0eUtleWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvcHJvcGVydHlrZXlcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHZhciBrZXkgPSB0b1ByaW1pdGl2ZShhcmd1bWVudCwgJ3N0cmluZycpO1xuICByZXR1cm4gaXNTeW1ib2woa2V5KSA/IGtleSA6IGtleSArICcnO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG52YXIgZG9jdW1lbnQgPSBnbG9iYWxUaGlzLmRvY3VtZW50O1xuLy8gdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCcgaW4gb2xkIElFXG52YXIgRVhJU1RTID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gRVhJU1RTID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBjcmVhdGVFbGVtZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvY3VtZW50LWNyZWF0ZS1lbGVtZW50Jyk7XG5cbi8vIFRoYW5rcyB0byBJRTggZm9yIGl0cyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhREVTQ1JJUFRPUlMgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGNyZWF0ZUVsZW1lbnQoJ2RpdicpLCAnYScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH1cbiAgfSkuYSAhPT0gNztcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1wcm9wZXJ0eS1pcy1lbnVtZXJhYmxlJyk7XG52YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgdG9Qcm9wZXJ0eUtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1wcm9wZXJ0eS1rZXknKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2llOC1kb20tZGVmaW5lJyk7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuLy8gYE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yXG5leHBvcnRzLmYgPSBERVNDUklQVE9SUyA/ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCkge1xuICBPID0gdG9JbmRleGVkT2JqZWN0KE8pO1xuICBQID0gdG9Qcm9wZXJ0eUtleShQKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gIGlmIChoYXNPd24oTywgUCkpIHJldHVybiBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoIWNhbGwocHJvcGVydHlJc0VudW1lcmFibGVNb2R1bGUuZiwgTywgUCksIE9bUF0pO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG4vLyBWOCB+IENocm9tZSAzNi1cbi8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMzMzRcbm1vZHVsZS5leHBvcnRzID0gREVTQ1JJUFRPUlMgJiYgZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9LCAncHJvdG90eXBlJywge1xuICAgIHZhbHVlOiA0MixcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSkucHJvdG90eXBlICE9PSA0Mjtcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcblxudmFyICRTdHJpbmcgPSBTdHJpbmc7XG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gYEFzc2VydDogVHlwZShhcmd1bWVudCkgaXMgT2JqZWN0YFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgaWYgKGlzT2JqZWN0KGFyZ3VtZW50KSkgcmV0dXJuIGFyZ3VtZW50O1xuICB0aHJvdyBuZXcgJFR5cGVFcnJvcigkU3RyaW5nKGFyZ3VtZW50KSArICcgaXMgbm90IGFuIG9iamVjdCcpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pZTgtZG9tLWRlZmluZScpO1xudmFyIFY4X1BST1RPVFlQRV9ERUZJTkVfQlVHID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3Y4LXByb3RvdHlwZS1kZWZpbmUtYnVnJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgdG9Qcm9wZXJ0eUtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1wcm9wZXJ0eS1rZXknKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHNhZmVcbnZhciAkZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG52YXIgRU5VTUVSQUJMRSA9ICdlbnVtZXJhYmxlJztcbnZhciBDT05GSUdVUkFCTEUgPSAnY29uZmlndXJhYmxlJztcbnZhciBXUklUQUJMRSA9ICd3cml0YWJsZSc7XG5cbi8vIGBPYmplY3QuZGVmaW5lUHJvcGVydHlgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuZGVmaW5lcHJvcGVydHlcbmV4cG9ydHMuZiA9IERFU0NSSVBUT1JTID8gVjhfUFJPVE9UWVBFX0RFRklORV9CVUcgPyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9Qcm9wZXJ0eUtleShQKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmICh0eXBlb2YgTyA9PT0gJ2Z1bmN0aW9uJyAmJiBQID09PSAncHJvdG90eXBlJyAmJiAndmFsdWUnIGluIEF0dHJpYnV0ZXMgJiYgV1JJVEFCTEUgaW4gQXR0cmlidXRlcyAmJiAhQXR0cmlidXRlc1tXUklUQUJMRV0pIHtcbiAgICB2YXIgY3VycmVudCA9ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCk7XG4gICAgaWYgKGN1cnJlbnQgJiYgY3VycmVudFtXUklUQUJMRV0pIHtcbiAgICAgIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICAgICAgQXR0cmlidXRlcyA9IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiBDT05GSUdVUkFCTEUgaW4gQXR0cmlidXRlcyA/IEF0dHJpYnV0ZXNbQ09ORklHVVJBQkxFXSA6IGN1cnJlbnRbQ09ORklHVVJBQkxFXSxcbiAgICAgICAgZW51bWVyYWJsZTogRU5VTUVSQUJMRSBpbiBBdHRyaWJ1dGVzID8gQXR0cmlidXRlc1tFTlVNRVJBQkxFXSA6IGN1cnJlbnRbRU5VTUVSQUJMRV0sXG4gICAgICAgIHdyaXRhYmxlOiBmYWxzZVxuICAgICAgfTtcbiAgICB9XG4gIH0gcmV0dXJuICRkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKTtcbn0gOiAkZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9Qcm9wZXJ0eUtleShQKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gJGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gIGlmICgnZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpIHRocm93IG5ldyAkVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCcpO1xuICBpZiAoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKSBPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBERVNDUklQVE9SUyA/IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIGRlZmluZVByb3BlcnR5TW9kdWxlLmYob2JqZWN0LCBrZXksIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcigxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcblxudmFyIEZ1bmN0aW9uUHJvdG90eXBlID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyIGdldERlc2NyaXB0b3IgPSBERVNDUklQVE9SUyAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG52YXIgRVhJU1RTID0gaGFzT3duKEZ1bmN0aW9uUHJvdG90eXBlLCAnbmFtZScpO1xuLy8gYWRkaXRpb25hbCBwcm90ZWN0aW9uIGZyb20gbWluaWZpZWQgLyBtYW5nbGVkIC8gZHJvcHBlZCBmdW5jdGlvbiBuYW1lc1xudmFyIFBST1BFUiA9IEVYSVNUUyAmJiBmdW5jdGlvbiBzb21ldGhpbmcoKSB7IC8qIGVtcHR5ICovIH0ubmFtZSA9PT0gJ3NvbWV0aGluZyc7XG52YXIgQ09ORklHVVJBQkxFID0gRVhJU1RTICYmICghREVTQ1JJUFRPUlMgfHwgKERFU0NSSVBUT1JTICYmIGdldERlc2NyaXB0b3IoRnVuY3Rpb25Qcm90b3R5cGUsICduYW1lJykuY29uZmlndXJhYmxlKSk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBFWElTVFM6IEVYSVNUUyxcbiAgUFJPUEVSOiBQUk9QRVIsXG4gIENPTkZJR1VSQUJMRTogQ09ORklHVVJBQkxFXG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgc3RvcmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlJyk7XG5cbnZhciBmdW5jdGlvblRvU3RyaW5nID0gdW5jdXJyeVRoaXMoRnVuY3Rpb24udG9TdHJpbmcpO1xuXG4vLyB0aGlzIGhlbHBlciBicm9rZW4gaW4gYGNvcmUtanNAMy40LjEtMy40LjRgLCBzbyB3ZSBjYW4ndCB1c2UgYHNoYXJlZGAgaGVscGVyXG5pZiAoIWlzQ2FsbGFibGUoc3RvcmUuaW5zcGVjdFNvdXJjZSkpIHtcbiAgc3RvcmUuaW5zcGVjdFNvdXJjZSA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBmdW5jdGlvblRvU3RyaW5nKGl0KTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdG9yZS5pbnNwZWN0U291cmNlO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xuXG52YXIgV2Vha01hcCA9IGdsb2JhbFRoaXMuV2Vha01hcDtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0NhbGxhYmxlKFdlYWtNYXApICYmIC9uYXRpdmUgY29kZS8udGVzdChTdHJpbmcoV2Vha01hcCkpO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VpZCcpO1xuXG52YXIga2V5cyA9IHNoYXJlZCgna2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIGtleXNba2V5XSB8fCAoa2V5c1trZXldID0gdWlkKGtleSkpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBOQVRJVkVfV0VBS19NQVAgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2Vhay1tYXAtYmFzaWMtZGV0ZWN0aW9uJyk7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQtc3RvcmUnKTtcbnZhciBzaGFyZWRLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLWtleScpO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGlkZGVuLWtleXMnKTtcblxudmFyIE9CSkVDVF9BTFJFQURZX0lOSVRJQUxJWkVEID0gJ09iamVjdCBhbHJlYWR5IGluaXRpYWxpemVkJztcbnZhciBUeXBlRXJyb3IgPSBnbG9iYWxUaGlzLlR5cGVFcnJvcjtcbnZhciBXZWFrTWFwID0gZ2xvYmFsVGhpcy5XZWFrTWFwO1xudmFyIHNldCwgZ2V0LCBoYXM7XG5cbnZhciBlbmZvcmNlID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBoYXMoaXQpID8gZ2V0KGl0KSA6IHNldChpdCwge30pO1xufTtcblxudmFyIGdldHRlckZvciA9IGZ1bmN0aW9uIChUWVBFKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoaXQpIHtcbiAgICB2YXIgc3RhdGU7XG4gICAgaWYgKCFpc09iamVjdChpdCkgfHwgKHN0YXRlID0gZ2V0KGl0KSkudHlwZSAhPT0gVFlQRSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW5jb21wYXRpYmxlIHJlY2VpdmVyLCAnICsgVFlQRSArICcgcmVxdWlyZWQnKTtcbiAgICB9IHJldHVybiBzdGF0ZTtcbiAgfTtcbn07XG5cbmlmIChOQVRJVkVfV0VBS19NQVAgfHwgc2hhcmVkLnN0YXRlKSB7XG4gIHZhciBzdG9yZSA9IHNoYXJlZC5zdGF0ZSB8fCAoc2hhcmVkLnN0YXRlID0gbmV3IFdlYWtNYXAoKSk7XG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLXNlbGYtYXNzaWduIC0tIHByb3RvdHlwZSBtZXRob2RzIHByb3RlY3Rpb24gKi9cbiAgc3RvcmUuZ2V0ID0gc3RvcmUuZ2V0O1xuICBzdG9yZS5oYXMgPSBzdG9yZS5oYXM7XG4gIHN0b3JlLnNldCA9IHN0b3JlLnNldDtcbiAgLyogZXNsaW50LWVuYWJsZSBuby1zZWxmLWFzc2lnbiAtLSBwcm90b3R5cGUgbWV0aG9kcyBwcm90ZWN0aW9uICovXG4gIHNldCA9IGZ1bmN0aW9uIChpdCwgbWV0YWRhdGEpIHtcbiAgICBpZiAoc3RvcmUuaGFzKGl0KSkgdGhyb3cgbmV3IFR5cGVFcnJvcihPQkpFQ1RfQUxSRUFEWV9JTklUSUFMSVpFRCk7XG4gICAgbWV0YWRhdGEuZmFjYWRlID0gaXQ7XG4gICAgc3RvcmUuc2V0KGl0LCBtZXRhZGF0YSk7XG4gICAgcmV0dXJuIG1ldGFkYXRhO1xuICB9O1xuICBnZXQgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gc3RvcmUuZ2V0KGl0KSB8fCB7fTtcbiAgfTtcbiAgaGFzID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIHN0b3JlLmhhcyhpdCk7XG4gIH07XG59IGVsc2Uge1xuICB2YXIgU1RBVEUgPSBzaGFyZWRLZXkoJ3N0YXRlJyk7XG4gIGhpZGRlbktleXNbU1RBVEVdID0gdHJ1ZTtcbiAgc2V0ID0gZnVuY3Rpb24gKGl0LCBtZXRhZGF0YSkge1xuICAgIGlmIChoYXNPd24oaXQsIFNUQVRFKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihPQkpFQ1RfQUxSRUFEWV9JTklUSUFMSVpFRCk7XG4gICAgbWV0YWRhdGEuZmFjYWRlID0gaXQ7XG4gICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KGl0LCBTVEFURSwgbWV0YWRhdGEpO1xuICAgIHJldHVybiBtZXRhZGF0YTtcbiAgfTtcbiAgZ2V0ID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIGhhc093bihpdCwgU1RBVEUpID8gaXRbU1RBVEVdIDoge307XG4gIH07XG4gIGhhcyA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBoYXNPd24oaXQsIFNUQVRFKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogc2V0LFxuICBnZXQ6IGdldCxcbiAgaGFzOiBoYXMsXG4gIGVuZm9yY2U6IGVuZm9yY2UsXG4gIGdldHRlckZvcjogZ2V0dGVyRm9yXG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgQ09ORklHVVJBQkxFX0ZVTkNUSU9OX05BTUUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tbmFtZScpLkNPTkZJR1VSQUJMRTtcbnZhciBpbnNwZWN0U291cmNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luc3BlY3Qtc291cmNlJyk7XG52YXIgSW50ZXJuYWxTdGF0ZU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZScpO1xuXG52YXIgZW5mb3JjZUludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmVuZm9yY2U7XG52YXIgZ2V0SW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuZ2V0O1xudmFyICRTdHJpbmcgPSBTdHJpbmc7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHNhZmVcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBzdHJpbmdTbGljZSA9IHVuY3VycnlUaGlzKCcnLnNsaWNlKTtcbnZhciByZXBsYWNlID0gdW5jdXJyeVRoaXMoJycucmVwbGFjZSk7XG52YXIgam9pbiA9IHVuY3VycnlUaGlzKFtdLmpvaW4pO1xuXG52YXIgQ09ORklHVVJBQkxFX0xFTkdUSCA9IERFU0NSSVBUT1JTICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBkZWZpbmVQcm9wZXJ0eShmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH0sICdsZW5ndGgnLCB7IHZhbHVlOiA4IH0pLmxlbmd0aCAhPT0gODtcbn0pO1xuXG52YXIgVEVNUExBVEUgPSBTdHJpbmcoU3RyaW5nKS5zcGxpdCgnU3RyaW5nJyk7XG5cbnZhciBtYWtlQnVpbHRJbiA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHZhbHVlLCBuYW1lLCBvcHRpb25zKSB7XG4gIGlmIChzdHJpbmdTbGljZSgkU3RyaW5nKG5hbWUpLCAwLCA3KSA9PT0gJ1N5bWJvbCgnKSB7XG4gICAgbmFtZSA9ICdbJyArIHJlcGxhY2UoJFN0cmluZyhuYW1lKSwgL15TeW1ib2xcXCgoW14pXSopXFwpLiokLywgJyQxJykgKyAnXSc7XG4gIH1cbiAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5nZXR0ZXIpIG5hbWUgPSAnZ2V0ICcgKyBuYW1lO1xuICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLnNldHRlcikgbmFtZSA9ICdzZXQgJyArIG5hbWU7XG4gIGlmICghaGFzT3duKHZhbHVlLCAnbmFtZScpIHx8IChDT05GSUdVUkFCTEVfRlVOQ1RJT05fTkFNRSAmJiB2YWx1ZS5uYW1lICE9PSBuYW1lKSkge1xuICAgIGlmIChERVNDUklQVE9SUykgZGVmaW5lUHJvcGVydHkodmFsdWUsICduYW1lJywgeyB2YWx1ZTogbmFtZSwgY29uZmlndXJhYmxlOiB0cnVlIH0pO1xuICAgIGVsc2UgdmFsdWUubmFtZSA9IG5hbWU7XG4gIH1cbiAgaWYgKENPTkZJR1VSQUJMRV9MRU5HVEggJiYgb3B0aW9ucyAmJiBoYXNPd24ob3B0aW9ucywgJ2FyaXR5JykgJiYgdmFsdWUubGVuZ3RoICE9PSBvcHRpb25zLmFyaXR5KSB7XG4gICAgZGVmaW5lUHJvcGVydHkodmFsdWUsICdsZW5ndGgnLCB7IHZhbHVlOiBvcHRpb25zLmFyaXR5IH0pO1xuICB9XG4gIHRyeSB7XG4gICAgaWYgKG9wdGlvbnMgJiYgaGFzT3duKG9wdGlvbnMsICdjb25zdHJ1Y3RvcicpICYmIG9wdGlvbnMuY29uc3RydWN0b3IpIHtcbiAgICAgIGlmIChERVNDUklQVE9SUykgZGVmaW5lUHJvcGVydHkodmFsdWUsICdwcm90b3R5cGUnLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTtcbiAgICAvLyBpbiBWOCB+IENocm9tZSA1MywgcHJvdG90eXBlcyBvZiBzb21lIG1ldGhvZHMsIGxpa2UgYEFycmF5LnByb3RvdHlwZS52YWx1ZXNgLCBhcmUgbm9uLXdyaXRhYmxlXG4gICAgfSBlbHNlIGlmICh2YWx1ZS5wcm90b3R5cGUpIHZhbHVlLnByb3RvdHlwZSA9IHVuZGVmaW5lZDtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICB2YXIgc3RhdGUgPSBlbmZvcmNlSW50ZXJuYWxTdGF0ZSh2YWx1ZSk7XG4gIGlmICghaGFzT3duKHN0YXRlLCAnc291cmNlJykpIHtcbiAgICBzdGF0ZS5zb3VyY2UgPSBqb2luKFRFTVBMQVRFLCB0eXBlb2YgbmFtZSA9PSAnc3RyaW5nJyA/IG5hbWUgOiAnJyk7XG4gIH0gcmV0dXJuIHZhbHVlO1xufTtcblxuLy8gYWRkIGZha2UgRnVuY3Rpb24jdG9TdHJpbmcgZm9yIGNvcnJlY3Qgd29yayB3cmFwcGVkIG1ldGhvZHMgLyBjb25zdHJ1Y3RvcnMgd2l0aCBtZXRob2RzIGxpa2UgTG9EYXNoIGlzTmF0aXZlXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZXh0ZW5kLW5hdGl2ZSAtLSByZXF1aXJlZFxuRnVuY3Rpb24ucHJvdG90eXBlLnRvU3RyaW5nID0gbWFrZUJ1aWx0SW4oZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gIHJldHVybiBpc0NhbGxhYmxlKHRoaXMpICYmIGdldEludGVybmFsU3RhdGUodGhpcykuc291cmNlIHx8IGluc3BlY3RTb3VyY2UodGhpcyk7XG59LCAndG9TdHJpbmcnKTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcbnZhciBtYWtlQnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9tYWtlLWJ1aWx0LWluJyk7XG52YXIgZGVmaW5lR2xvYmFsUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWdsb2JhbC1wcm9wZXJ0eScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChPLCBrZXksIHZhbHVlLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykgb3B0aW9ucyA9IHt9O1xuICB2YXIgc2ltcGxlID0gb3B0aW9ucy5lbnVtZXJhYmxlO1xuICB2YXIgbmFtZSA9IG9wdGlvbnMubmFtZSAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5uYW1lIDoga2V5O1xuICBpZiAoaXNDYWxsYWJsZSh2YWx1ZSkpIG1ha2VCdWlsdEluKHZhbHVlLCBuYW1lLCBvcHRpb25zKTtcbiAgaWYgKG9wdGlvbnMuZ2xvYmFsKSB7XG4gICAgaWYgKHNpbXBsZSkgT1trZXldID0gdmFsdWU7XG4gICAgZWxzZSBkZWZpbmVHbG9iYWxQcm9wZXJ0eShrZXksIHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFvcHRpb25zLnVuc2FmZSkgZGVsZXRlIE9ba2V5XTtcbiAgICAgIGVsc2UgaWYgKE9ba2V5XSkgc2ltcGxlID0gdHJ1ZTtcbiAgICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gICAgaWYgKHNpbXBsZSkgT1trZXldID0gdmFsdWU7XG4gICAgZWxzZSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mKE8sIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICBjb25maWd1cmFibGU6ICFvcHRpb25zLm5vbkNvbmZpZ3VyYWJsZSxcbiAgICAgIHdyaXRhYmxlOiAhb3B0aW9ucy5ub25Xcml0YWJsZVxuICAgIH0pO1xuICB9IHJldHVybiBPO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgY2VpbCA9IE1hdGguY2VpbDtcbnZhciBmbG9vciA9IE1hdGguZmxvb3I7XG5cbi8vIGBNYXRoLnRydW5jYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtbWF0aC50cnVuY1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW1hdGgtdHJ1bmMgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBNYXRoLnRydW5jIHx8IGZ1bmN0aW9uIHRydW5jKHgpIHtcbiAgdmFyIG4gPSAreDtcbiAgcmV0dXJuIChuID4gMCA/IGZsb29yIDogY2VpbCkobik7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0cnVuYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9tYXRoLXRydW5jJyk7XG5cbi8vIGBUb0ludGVnZXJPckluZmluaXR5YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9pbnRlZ2Vyb3JpbmZpbml0eVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdmFyIG51bWJlciA9ICthcmd1bWVudDtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcbiAgcmV0dXJuIG51bWJlciAhPT0gbnVtYmVyIHx8IG51bWJlciA9PT0gMCA/IDAgOiB0cnVuYyhudW1iZXIpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdG9JbnRlZ2VyT3JJbmZpbml0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbnRlZ2VyLW9yLWluZmluaXR5Jyk7XG5cbnZhciBtYXggPSBNYXRoLm1heDtcbnZhciBtaW4gPSBNYXRoLm1pbjtcblxuLy8gSGVscGVyIGZvciBhIHBvcHVsYXIgcmVwZWF0aW5nIGNhc2Ugb2YgdGhlIHNwZWM6XG4vLyBMZXQgaW50ZWdlciBiZSA/IFRvSW50ZWdlcihpbmRleCkuXG4vLyBJZiBpbnRlZ2VyIDwgMCwgbGV0IHJlc3VsdCBiZSBtYXgoKGxlbmd0aCArIGludGVnZXIpLCAwKTsgZWxzZSBsZXQgcmVzdWx0IGJlIG1pbihpbnRlZ2VyLCBsZW5ndGgpLlxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5kZXgsIGxlbmd0aCkge1xuICB2YXIgaW50ZWdlciA9IHRvSW50ZWdlck9ySW5maW5pdHkoaW5kZXgpO1xuICByZXR1cm4gaW50ZWdlciA8IDAgPyBtYXgoaW50ZWdlciArIGxlbmd0aCwgMCkgOiBtaW4oaW50ZWdlciwgbGVuZ3RoKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRvSW50ZWdlck9ySW5maW5pdHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eScpO1xuXG52YXIgbWluID0gTWF0aC5taW47XG5cbi8vIGBUb0xlbmd0aGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvbGVuZ3RoXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICB2YXIgbGVuID0gdG9JbnRlZ2VyT3JJbmZpbml0eShhcmd1bWVudCk7XG4gIHJldHVybiBsZW4gPiAwID8gbWluKGxlbiwgMHgxRkZGRkZGRkZGRkZGRikgOiAwOyAvLyAyICoqIDUzIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1sZW5ndGgnKTtcblxuLy8gYExlbmd0aE9mQXJyYXlMaWtlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtbGVuZ3Rob2ZhcnJheWxpa2Vcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gdG9MZW5ndGgob2JqLmxlbmd0aCk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciB0b0Fic29sdXRlSW5kZXggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tYWJzb2x1dGUtaW5kZXgnKTtcbnZhciBsZW5ndGhPZkFycmF5TGlrZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9sZW5ndGgtb2YtYXJyYXktbGlrZScpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLnsgaW5kZXhPZiwgaW5jbHVkZXMgfWAgbWV0aG9kcyBpbXBsZW1lbnRhdGlvblxudmFyIGNyZWF0ZU1ldGhvZCA9IGZ1bmN0aW9uIChJU19JTkNMVURFUykge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBlbCwgZnJvbUluZGV4KSB7XG4gICAgdmFyIE8gPSB0b0luZGV4ZWRPYmplY3QoJHRoaXMpO1xuICAgIHZhciBsZW5ndGggPSBsZW5ndGhPZkFycmF5TGlrZShPKTtcbiAgICBpZiAobGVuZ3RoID09PSAwKSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICAgIHZhciBpbmRleCA9IHRvQWJzb2x1dGVJbmRleChmcm9tSW5kZXgsIGxlbmd0aCk7XG4gICAgdmFyIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIE5hTiBjaGVja1xuICAgIGlmIChJU19JTkNMVURFUyAmJiBlbCAhPT0gZWwpIHdoaWxlIChsZW5ndGggPiBpbmRleCkge1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcbiAgICAgIGlmICh2YWx1ZSAhPT0gdmFsdWUpIHJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I2luZGV4T2YgaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yICg7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIHtcbiAgICAgIGlmICgoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTykgJiYgT1tpbmRleF0gPT09IGVsKSByZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5pbmNsdWRlc2AgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmluY2x1ZGVzXG4gIGluY2x1ZGVzOiBjcmVhdGVNZXRob2QodHJ1ZSksXG4gIC8vIGBBcnJheS5wcm90b3R5cGUuaW5kZXhPZmAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmluZGV4b2ZcbiAgaW5kZXhPZjogY3JlYXRlTWV0aG9kKGZhbHNlKVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciBpbmRleE9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWluY2x1ZGVzJykuaW5kZXhPZjtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hpZGRlbi1rZXlzJyk7XG5cbnZhciBwdXNoID0gdW5jdXJyeVRoaXMoW10ucHVzaCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwgbmFtZXMpIHtcbiAgdmFyIE8gPSB0b0luZGV4ZWRPYmplY3Qob2JqZWN0KTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBrZXk7XG4gIGZvciAoa2V5IGluIE8pICFoYXNPd24oaGlkZGVuS2V5cywga2V5KSAmJiBoYXNPd24oTywga2V5KSAmJiBwdXNoKHJlc3VsdCwga2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkgaWYgKGhhc093bihPLCBrZXkgPSBuYW1lc1tpKytdKSkge1xuICAgIH5pbmRleE9mKHJlc3VsdCwga2V5KSB8fCBwdXNoKHJlc3VsdCwga2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG4vLyBJRTgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gW1xuICAnY29uc3RydWN0b3InLFxuICAnaGFzT3duUHJvcGVydHknLFxuICAnaXNQcm90b3R5cGVPZicsXG4gICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsXG4gICd0b0xvY2FsZVN0cmluZycsXG4gICd0b1N0cmluZycsXG4gICd2YWx1ZU9mJ1xuXTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaW50ZXJuYWxPYmplY3RLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW51bS1idWcta2V5cycpO1xuXG52YXIgaGlkZGVuS2V5cyA9IGVudW1CdWdLZXlzLmNvbmNhdCgnbGVuZ3RoJywgJ3Byb3RvdHlwZScpO1xuXG4vLyBgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuZ2V0b3ducHJvcGVydHluYW1lc1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eW5hbWVzIC0tIHNhZmVcbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoTykge1xuICByZXR1cm4gaW50ZXJuYWxPYmplY3RLZXlzKE8sIGhpZGRlbktleXMpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5c3ltYm9scyAtLSBzYWZlXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnZXRCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1idWlsdC1pbicpO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGdldE93blByb3BlcnR5TmFtZXNNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktbmFtZXMnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHNNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scycpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xuXG52YXIgY29uY2F0ID0gdW5jdXJyeVRoaXMoW10uY29uY2F0KTtcblxuLy8gYWxsIG9iamVjdCBrZXlzLCBpbmNsdWRlcyBub24tZW51bWVyYWJsZSBhbmQgc3ltYm9sc1xubW9kdWxlLmV4cG9ydHMgPSBnZXRCdWlsdEluKCdSZWZsZWN0JywgJ293bktleXMnKSB8fCBmdW5jdGlvbiBvd25LZXlzKGl0KSB7XG4gIHZhciBrZXlzID0gZ2V0T3duUHJvcGVydHlOYW1lc01vZHVsZS5mKGFuT2JqZWN0KGl0KSk7XG4gIHZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHNNb2R1bGUuZjtcbiAgcmV0dXJuIGdldE93blByb3BlcnR5U3ltYm9scyA/IGNvbmNhdChrZXlzLCBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoaXQpKSA6IGtleXM7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIG93bktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb3duLWtleXMnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcicpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UsIGV4Y2VwdGlvbnMpIHtcbiAgdmFyIGtleXMgPSBvd25LZXlzKHNvdXJjZSk7XG4gIHZhciBkZWZpbmVQcm9wZXJ0eSA9IGRlZmluZVByb3BlcnR5TW9kdWxlLmY7XG4gIHZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JNb2R1bGUuZjtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgaWYgKCFoYXNPd24odGFyZ2V0LCBrZXkpICYmICEoZXhjZXB0aW9ucyAmJiBoYXNPd24oZXhjZXB0aW9ucywga2V5KSkpIHtcbiAgICAgIGRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTtcbiAgICB9XG4gIH1cbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xuXG52YXIgcmVwbGFjZW1lbnQgPSAvI3xcXC5wcm90b3R5cGVcXC4vO1xuXG52YXIgaXNGb3JjZWQgPSBmdW5jdGlvbiAoZmVhdHVyZSwgZGV0ZWN0aW9uKSB7XG4gIHZhciB2YWx1ZSA9IGRhdGFbbm9ybWFsaXplKGZlYXR1cmUpXTtcbiAgcmV0dXJuIHZhbHVlID09PSBQT0xZRklMTCA/IHRydWVcbiAgICA6IHZhbHVlID09PSBOQVRJVkUgPyBmYWxzZVxuICAgIDogaXNDYWxsYWJsZShkZXRlY3Rpb24pID8gZmFpbHMoZGV0ZWN0aW9uKVxuICAgIDogISFkZXRlY3Rpb247XG59O1xuXG52YXIgbm9ybWFsaXplID0gaXNGb3JjZWQubm9ybWFsaXplID0gZnVuY3Rpb24gKHN0cmluZykge1xuICByZXR1cm4gU3RyaW5nKHN0cmluZykucmVwbGFjZShyZXBsYWNlbWVudCwgJy4nKS50b0xvd2VyQ2FzZSgpO1xufTtcblxudmFyIGRhdGEgPSBpc0ZvcmNlZC5kYXRhID0ge307XG52YXIgTkFUSVZFID0gaXNGb3JjZWQuTkFUSVZFID0gJ04nO1xudmFyIFBPTFlGSUxMID0gaXNGb3JjZWQuUE9MWUZJTEwgPSAnUCc7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNGb3JjZWQ7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcicpLmY7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xudmFyIGRlZmluZUJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWJ1aWx0LWluJyk7XG52YXIgZGVmaW5lR2xvYmFsUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWdsb2JhbC1wcm9wZXJ0eScpO1xudmFyIGNvcHlDb25zdHJ1Y3RvclByb3BlcnRpZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzJyk7XG52YXIgaXNGb3JjZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtZm9yY2VkJyk7XG5cbi8qXG4gIG9wdGlvbnMudGFyZ2V0ICAgICAgICAgLSBuYW1lIG9mIHRoZSB0YXJnZXQgb2JqZWN0XG4gIG9wdGlvbnMuZ2xvYmFsICAgICAgICAgLSB0YXJnZXQgaXMgdGhlIGdsb2JhbCBvYmplY3RcbiAgb3B0aW9ucy5zdGF0ICAgICAgICAgICAtIGV4cG9ydCBhcyBzdGF0aWMgbWV0aG9kcyBvZiB0YXJnZXRcbiAgb3B0aW9ucy5wcm90byAgICAgICAgICAtIGV4cG9ydCBhcyBwcm90b3R5cGUgbWV0aG9kcyBvZiB0YXJnZXRcbiAgb3B0aW9ucy5yZWFsICAgICAgICAgICAtIHJlYWwgcHJvdG90eXBlIG1ldGhvZCBmb3IgdGhlIGBwdXJlYCB2ZXJzaW9uXG4gIG9wdGlvbnMuZm9yY2VkICAgICAgICAgLSBleHBvcnQgZXZlbiBpZiB0aGUgbmF0aXZlIGZlYXR1cmUgaXMgYXZhaWxhYmxlXG4gIG9wdGlvbnMuYmluZCAgICAgICAgICAgLSBiaW5kIG1ldGhvZHMgdG8gdGhlIHRhcmdldCwgcmVxdWlyZWQgZm9yIHRoZSBgcHVyZWAgdmVyc2lvblxuICBvcHRpb25zLndyYXAgICAgICAgICAgIC0gd3JhcCBjb25zdHJ1Y3RvcnMgdG8gcHJldmVudGluZyBnbG9iYWwgcG9sbHV0aW9uLCByZXF1aXJlZCBmb3IgdGhlIGBwdXJlYCB2ZXJzaW9uXG4gIG9wdGlvbnMudW5zYWZlICAgICAgICAgLSB1c2UgdGhlIHNpbXBsZSBhc3NpZ25tZW50IG9mIHByb3BlcnR5IGluc3RlYWQgb2YgZGVsZXRlICsgZGVmaW5lUHJvcGVydHlcbiAgb3B0aW9ucy5zaGFtICAgICAgICAgICAtIGFkZCBhIGZsYWcgdG8gbm90IGNvbXBsZXRlbHkgZnVsbCBwb2x5ZmlsbHNcbiAgb3B0aW9ucy5lbnVtZXJhYmxlICAgICAtIGV4cG9ydCBhcyBlbnVtZXJhYmxlIHByb3BlcnR5XG4gIG9wdGlvbnMuZG9udENhbGxHZXRTZXQgLSBwcmV2ZW50IGNhbGxpbmcgYSBnZXR0ZXIgb24gdGFyZ2V0XG4gIG9wdGlvbnMubmFtZSAgICAgICAgICAgLSB0aGUgLm5hbWUgb2YgdGhlIGZ1bmN0aW9uIGlmIGl0IGRvZXMgbm90IG1hdGNoIHRoZSBrZXlcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvcHRpb25zLCBzb3VyY2UpIHtcbiAgdmFyIFRBUkdFVCA9IG9wdGlvbnMudGFyZ2V0O1xuICB2YXIgR0xPQkFMID0gb3B0aW9ucy5nbG9iYWw7XG4gIHZhciBTVEFUSUMgPSBvcHRpb25zLnN0YXQ7XG4gIHZhciBGT1JDRUQsIHRhcmdldCwga2V5LCB0YXJnZXRQcm9wZXJ0eSwgc291cmNlUHJvcGVydHksIGRlc2NyaXB0b3I7XG4gIGlmIChHTE9CQUwpIHtcbiAgICB0YXJnZXQgPSBnbG9iYWxUaGlzO1xuICB9IGVsc2UgaWYgKFNUQVRJQykge1xuICAgIHRhcmdldCA9IGdsb2JhbFRoaXNbVEFSR0VUXSB8fCBkZWZpbmVHbG9iYWxQcm9wZXJ0eShUQVJHRVQsIHt9KTtcbiAgfSBlbHNlIHtcbiAgICB0YXJnZXQgPSBnbG9iYWxUaGlzW1RBUkdFVF0gJiYgZ2xvYmFsVGhpc1tUQVJHRVRdLnByb3RvdHlwZTtcbiAgfVxuICBpZiAodGFyZ2V0KSBmb3IgKGtleSBpbiBzb3VyY2UpIHtcbiAgICBzb3VyY2VQcm9wZXJ0eSA9IHNvdXJjZVtrZXldO1xuICAgIGlmIChvcHRpb25zLmRvbnRDYWxsR2V0U2V0KSB7XG4gICAgICBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KTtcbiAgICAgIHRhcmdldFByb3BlcnR5ID0gZGVzY3JpcHRvciAmJiBkZXNjcmlwdG9yLnZhbHVlO1xuICAgIH0gZWxzZSB0YXJnZXRQcm9wZXJ0eSA9IHRhcmdldFtrZXldO1xuICAgIEZPUkNFRCA9IGlzRm9yY2VkKEdMT0JBTCA/IGtleSA6IFRBUkdFVCArIChTVEFUSUMgPyAnLicgOiAnIycpICsga2V5LCBvcHRpb25zLmZvcmNlZCk7XG4gICAgLy8gY29udGFpbmVkIGluIHRhcmdldFxuICAgIGlmICghRk9SQ0VEICYmIHRhcmdldFByb3BlcnR5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmICh0eXBlb2Ygc291cmNlUHJvcGVydHkgPT0gdHlwZW9mIHRhcmdldFByb3BlcnR5KSBjb250aW51ZTtcbiAgICAgIGNvcHlDb25zdHJ1Y3RvclByb3BlcnRpZXMoc291cmNlUHJvcGVydHksIHRhcmdldFByb3BlcnR5KTtcbiAgICB9XG4gICAgLy8gYWRkIGEgZmxhZyB0byBub3QgY29tcGxldGVseSBmdWxsIHBvbHlmaWxsc1xuICAgIGlmIChvcHRpb25zLnNoYW0gfHwgKHRhcmdldFByb3BlcnR5ICYmIHRhcmdldFByb3BlcnR5LnNoYW0pKSB7XG4gICAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoc291cmNlUHJvcGVydHksICdzaGFtJywgdHJ1ZSk7XG4gICAgfVxuICAgIGRlZmluZUJ1aWx0SW4odGFyZ2V0LCBrZXksIHNvdXJjZVByb3BlcnR5LCBvcHRpb25zKTtcbiAgfVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xuXG4vLyBgSXNBcnJheWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWlzYXJyYXlcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1hcnJheS1pc2FycmF5IC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiBpc0FycmF5KGFyZ3VtZW50KSB7XG4gIHJldHVybiBjbGFzc29mKGFyZ3VtZW50KSA9PT0gJ0FycmF5Jztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgVE9fU1RSSU5HX1RBRyA9IHdlbGxLbm93blN5bWJvbCgndG9TdHJpbmdUYWcnKTtcbnZhciB0ZXN0ID0ge307XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW5pY29ybi9uby1pbW1lZGlhdGUtbXV0YXRpb24gLS0gRVMzIHN5bnRheCBsaW1pdGF0aW9uXG50ZXN0W1RPX1NUUklOR19UQUddID0gJ3onO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN0cmluZyh0ZXN0KSA9PT0gJ1tvYmplY3Qgel0nO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBUT19TVFJJTkdfVEFHX1NVUFBPUlQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tc3RyaW5nLXRhZy1zdXBwb3J0Jyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGNsYXNzb2ZSYXcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIFRPX1NUUklOR19UQUcgPSB3ZWxsS25vd25TeW1ib2woJ3RvU3RyaW5nVGFnJyk7XG52YXIgJE9iamVjdCA9IE9iamVjdDtcblxuLy8gRVMzIHdyb25nIGhlcmVcbnZhciBDT1JSRUNUX0FSR1VNRU5UUyA9IGNsYXNzb2ZSYXcoZnVuY3Rpb24gKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID09PSAnQXJndW1lbnRzJztcblxuLy8gZmFsbGJhY2sgZm9yIElFMTEgU2NyaXB0IEFjY2VzcyBEZW5pZWQgZXJyb3JcbnZhciB0cnlHZXQgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICB0cnkge1xuICAgIHJldHVybiBpdFtrZXldO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG59O1xuXG4vLyBnZXR0aW5nIHRhZyBmcm9tIEVTNisgYE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdgXG5tb2R1bGUuZXhwb3J0cyA9IFRPX1NUUklOR19UQUdfU1VQUE9SVCA/IGNsYXNzb2ZSYXcgOiBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIE8sIHRhZywgcmVzdWx0O1xuICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/ICdVbmRlZmluZWQnIDogaXQgPT09IG51bGwgPyAnTnVsbCdcbiAgICAvLyBAQHRvU3RyaW5nVGFnIGNhc2VcbiAgICA6IHR5cGVvZiAodGFnID0gdHJ5R2V0KE8gPSAkT2JqZWN0KGl0KSwgVE9fU1RSSU5HX1RBRykpID09ICdzdHJpbmcnID8gdGFnXG4gICAgLy8gYnVpbHRpblRhZyBjYXNlXG4gICAgOiBDT1JSRUNUX0FSR1VNRU5UUyA/IGNsYXNzb2ZSYXcoTylcbiAgICAvLyBFUzMgYXJndW1lbnRzIGZhbGxiYWNrXG4gICAgOiAocmVzdWx0ID0gY2xhc3NvZlJhdyhPKSkgPT09ICdPYmplY3QnICYmIGlzQ2FsbGFibGUoTy5jYWxsZWUpID8gJ0FyZ3VtZW50cycgOiByZXN1bHQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YnKTtcblxudmFyICRTdHJpbmcgPSBTdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIGlmIChjbGFzc29mKGFyZ3VtZW50KSA9PT0gJ1N5bWJvbCcpIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0IGEgU3ltYm9sIHZhbHVlIHRvIGEgc3RyaW5nJyk7XG4gIHJldHVybiAkU3RyaW5nKGFyZ3VtZW50KTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgaWYgKERFU0NSSVBUT1JTKSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mKG9iamVjdCwga2V5LCBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoMCwgdmFsdWUpKTtcbiAgZWxzZSBvYmplY3Rba2V5XSA9IHZhbHVlO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcblxudmFyICRTeW50YXhFcnJvciA9IFN5bnRheEVycm9yO1xudmFyICRwYXJzZUludCA9IHBhcnNlSW50O1xudmFyIGZyb21DaGFyQ29kZSA9IFN0cmluZy5mcm9tQ2hhckNvZGU7XG52YXIgYXQgPSB1bmN1cnJ5VGhpcygnJy5jaGFyQXQpO1xudmFyIHNsaWNlID0gdW5jdXJyeVRoaXMoJycuc2xpY2UpO1xudmFyIGV4ZWMgPSB1bmN1cnJ5VGhpcygvLi8uZXhlYyk7XG5cbnZhciBjb2RlUG9pbnRzID0ge1xuICAnXFxcXFwiJzogJ1wiJyxcbiAgJ1xcXFxcXFxcJzogJ1xcXFwnLFxuICAnXFxcXC8nOiAnLycsXG4gICdcXFxcYic6ICdcXGInLFxuICAnXFxcXGYnOiAnXFxmJyxcbiAgJ1xcXFxuJzogJ1xcbicsXG4gICdcXFxccic6ICdcXHInLFxuICAnXFxcXHQnOiAnXFx0J1xufTtcblxudmFyIElTXzRfSEVYX0RJR0lUUyA9IC9eW1xcZGEtZl17NH0kL2k7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVnZXhwL25vLWNvbnRyb2wtY2hhcmFjdGVyIC0tIHNhZmVcbnZhciBJU19DMF9DT05UUk9MX0NPREUgPSAvXltcXHUwMDAwLVxcdTAwMUZdJC87XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHNvdXJjZSwgaSkge1xuICB2YXIgdW50ZXJtaW5hdGVkID0gdHJ1ZTtcbiAgdmFyIHZhbHVlID0gJyc7XG4gIHdoaWxlIChpIDwgc291cmNlLmxlbmd0aCkge1xuICAgIHZhciBjaHIgPSBhdChzb3VyY2UsIGkpO1xuICAgIGlmIChjaHIgPT09ICdcXFxcJykge1xuICAgICAgdmFyIHR3b0NoYXJzID0gc2xpY2Uoc291cmNlLCBpLCBpICsgMik7XG4gICAgICBpZiAoaGFzT3duKGNvZGVQb2ludHMsIHR3b0NoYXJzKSkge1xuICAgICAgICB2YWx1ZSArPSBjb2RlUG9pbnRzW3R3b0NoYXJzXTtcbiAgICAgICAgaSArPSAyO1xuICAgICAgfSBlbHNlIGlmICh0d29DaGFycyA9PT0gJ1xcXFx1Jykge1xuICAgICAgICBpICs9IDI7XG4gICAgICAgIHZhciBmb3VySGV4RGlnaXRzID0gc2xpY2Uoc291cmNlLCBpLCBpICsgNCk7XG4gICAgICAgIGlmICghZXhlYyhJU180X0hFWF9ESUdJVFMsIGZvdXJIZXhEaWdpdHMpKSB0aHJvdyBuZXcgJFN5bnRheEVycm9yKCdCYWQgVW5pY29kZSBlc2NhcGUgYXQ6ICcgKyBpKTtcbiAgICAgICAgdmFsdWUgKz0gZnJvbUNoYXJDb2RlKCRwYXJzZUludChmb3VySGV4RGlnaXRzLCAxNikpO1xuICAgICAgICBpICs9IDQ7XG4gICAgICB9IGVsc2UgdGhyb3cgbmV3ICRTeW50YXhFcnJvcignVW5rbm93biBlc2NhcGUgc2VxdWVuY2U6IFwiJyArIHR3b0NoYXJzICsgJ1wiJyk7XG4gICAgfSBlbHNlIGlmIChjaHIgPT09ICdcIicpIHtcbiAgICAgIHVudGVybWluYXRlZCA9IGZhbHNlO1xuICAgICAgaSsrO1xuICAgICAgYnJlYWs7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChleGVjKElTX0MwX0NPTlRST0xfQ09ERSwgY2hyKSkgdGhyb3cgbmV3ICRTeW50YXhFcnJvcignQmFkIGNvbnRyb2wgY2hhcmFjdGVyIGluIHN0cmluZyBsaXRlcmFsIGF0OiAnICsgaSk7XG4gICAgICB2YWx1ZSArPSBjaHI7XG4gICAgICBpKys7XG4gICAgfVxuICB9XG4gIGlmICh1bnRlcm1pbmF0ZWQpIHRocm93IG5ldyAkU3ludGF4RXJyb3IoJ1VudGVybWluYXRlZCBzdHJpbmcgYXQ6ICcgKyBpKTtcbiAgcmV0dXJuIHsgdmFsdWU6IHZhbHVlLCBlbmQ6IGkgfTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1hcnJheScpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgdG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tc3RyaW5nJyk7XG52YXIgbGVuZ3RoT2ZBcnJheUxpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHknKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIHBhcnNlSlNPTlN0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9wYXJzZS1qc29uLXN0cmluZycpO1xudmFyIE5BVElWRV9TWU1CT0wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3ltYm9sLWNvbnN0cnVjdG9yLWRldGVjdGlvbicpO1xuXG52YXIgSlNPTiA9IGdsb2JhbFRoaXMuSlNPTjtcbnZhciBOdW1iZXIgPSBnbG9iYWxUaGlzLk51bWJlcjtcbnZhciBTeW50YXhFcnJvciA9IGdsb2JhbFRoaXMuU3ludGF4RXJyb3I7XG52YXIgbmF0aXZlUGFyc2UgPSBKU09OICYmIEpTT04ucGFyc2U7XG52YXIgZW51bWVyYWJsZU93blByb3BlcnRpZXMgPSBnZXRCdWlsdEluKCdPYmplY3QnLCAna2V5cycpO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG52YXIgYXQgPSB1bmN1cnJ5VGhpcygnJy5jaGFyQXQpO1xudmFyIHNsaWNlID0gdW5jdXJyeVRoaXMoJycuc2xpY2UpO1xudmFyIGV4ZWMgPSB1bmN1cnJ5VGhpcygvLi8uZXhlYyk7XG52YXIgcHVzaCA9IHVuY3VycnlUaGlzKFtdLnB1c2gpO1xuXG52YXIgSVNfRElHSVQgPSAvXlxcZCQvO1xudmFyIElTX05PTl9aRVJPX0RJR0lUID0gL15bMS05XSQvO1xudmFyIElTX05VTUJFUl9TVEFSVCA9IC9eW1xcZC1dJC87XG52YXIgSVNfV0hJVEVTUEFDRSA9IC9eW1xcdFxcblxcciBdJC87XG5cbnZhciBQUklNSVRJVkUgPSAwO1xudmFyIE9CSkVDVCA9IDE7XG5cbnZhciAkcGFyc2UgPSBmdW5jdGlvbiAoc291cmNlLCByZXZpdmVyKSB7XG4gIHNvdXJjZSA9IHRvU3RyaW5nKHNvdXJjZSk7XG4gIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQoc291cmNlLCAwLCAnJyk7XG4gIHZhciByb290ID0gY29udGV4dC5wYXJzZSgpO1xuICB2YXIgdmFsdWUgPSByb290LnZhbHVlO1xuICB2YXIgZW5kSW5kZXggPSBjb250ZXh0LnNraXAoSVNfV0hJVEVTUEFDRSwgcm9vdC5lbmQpO1xuICBpZiAoZW5kSW5kZXggPCBzb3VyY2UubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKCdVbmV4cGVjdGVkIGV4dHJhIGNoYXJhY3RlcjogXCInICsgYXQoc291cmNlLCBlbmRJbmRleCkgKyAnXCIgYWZ0ZXIgdGhlIHBhcnNlZCBkYXRhIGF0OiAnICsgZW5kSW5kZXgpO1xuICB9XG4gIHJldHVybiBpc0NhbGxhYmxlKHJldml2ZXIpID8gaW50ZXJuYWxpemUoeyAnJzogdmFsdWUgfSwgJycsIHJldml2ZXIsIHJvb3QpIDogdmFsdWU7XG59O1xuXG52YXIgaW50ZXJuYWxpemUgPSBmdW5jdGlvbiAoaG9sZGVyLCBuYW1lLCByZXZpdmVyLCBub2RlKSB7XG4gIHZhciB2YWwgPSBob2xkZXJbbmFtZV07XG4gIHZhciB1bm1vZGlmaWVkID0gbm9kZSAmJiB2YWwgPT09IG5vZGUudmFsdWU7XG4gIHZhciBjb250ZXh0ID0gdW5tb2RpZmllZCAmJiB0eXBlb2Ygbm9kZS5zb3VyY2UgPT0gJ3N0cmluZycgPyB7IHNvdXJjZTogbm9kZS5zb3VyY2UgfSA6IHt9O1xuICB2YXIgZWxlbWVudFJlY29yZHNMZW4sIGtleXMsIGxlbiwgaSwgUDtcbiAgaWYgKGlzT2JqZWN0KHZhbCkpIHtcbiAgICB2YXIgbm9kZUlzQXJyYXkgPSBpc0FycmF5KHZhbCk7XG4gICAgdmFyIG5vZGVzID0gdW5tb2RpZmllZCA/IG5vZGUubm9kZXMgOiBub2RlSXNBcnJheSA/IFtdIDoge307XG4gICAgaWYgKG5vZGVJc0FycmF5KSB7XG4gICAgICBlbGVtZW50UmVjb3Jkc0xlbiA9IG5vZGVzLmxlbmd0aDtcbiAgICAgIGxlbiA9IGxlbmd0aE9mQXJyYXlMaWtlKHZhbCk7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgaW50ZXJuYWxpemVQcm9wZXJ0eSh2YWwsIGksIGludGVybmFsaXplKHZhbCwgJycgKyBpLCByZXZpdmVyLCBpIDwgZWxlbWVudFJlY29yZHNMZW4gPyBub2Rlc1tpXSA6IHVuZGVmaW5lZCkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBrZXlzID0gZW51bWVyYWJsZU93blByb3BlcnRpZXModmFsKTtcbiAgICAgIGxlbiA9IGxlbmd0aE9mQXJyYXlMaWtlKGtleXMpO1xuICAgICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIFAgPSBrZXlzW2ldO1xuICAgICAgICBpbnRlcm5hbGl6ZVByb3BlcnR5KHZhbCwgUCwgaW50ZXJuYWxpemUodmFsLCBQLCByZXZpdmVyLCBoYXNPd24obm9kZXMsIFApID8gbm9kZXNbUF0gOiB1bmRlZmluZWQpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNhbGwocmV2aXZlciwgaG9sZGVyLCBuYW1lLCB2YWwsIGNvbnRleHQpO1xufTtcblxudmFyIGludGVybmFsaXplUHJvcGVydHkgPSBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIGlmIChERVNDUklQVE9SUykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwga2V5KTtcbiAgICBpZiAoZGVzY3JpcHRvciAmJiAhZGVzY3JpcHRvci5jb25maWd1cmFibGUpIHJldHVybjtcbiAgfVxuICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkgZGVsZXRlIG9iamVjdFtrZXldO1xuICBlbHNlIGNyZWF0ZVByb3BlcnR5KG9iamVjdCwga2V5LCB2YWx1ZSk7XG59O1xuXG52YXIgTm9kZSA9IGZ1bmN0aW9uICh2YWx1ZSwgZW5kLCBzb3VyY2UsIG5vZGVzKSB7XG4gIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgdGhpcy5lbmQgPSBlbmQ7XG4gIHRoaXMuc291cmNlID0gc291cmNlO1xuICB0aGlzLm5vZGVzID0gbm9kZXM7XG59O1xuXG52YXIgQ29udGV4dCA9IGZ1bmN0aW9uIChzb3VyY2UsIGluZGV4KSB7XG4gIHRoaXMuc291cmNlID0gc291cmNlO1xuICB0aGlzLmluZGV4ID0gaW5kZXg7XG59O1xuXG4vLyBodHRwczovL3d3dy5qc29uLm9yZy9qc29uLWVuLmh0bWxcbkNvbnRleHQucHJvdG90eXBlID0ge1xuICBmb3JrOiBmdW5jdGlvbiAobmV4dEluZGV4KSB7XG4gICAgcmV0dXJuIG5ldyBDb250ZXh0KHRoaXMuc291cmNlLCBuZXh0SW5kZXgpO1xuICB9LFxuICBwYXJzZTogZnVuY3Rpb24gKCkge1xuICAgIHZhciBzb3VyY2UgPSB0aGlzLnNvdXJjZTtcbiAgICB2YXIgaSA9IHRoaXMuc2tpcChJU19XSElURVNQQUNFLCB0aGlzLmluZGV4KTtcbiAgICB2YXIgZm9yayA9IHRoaXMuZm9yayhpKTtcbiAgICB2YXIgY2hyID0gYXQoc291cmNlLCBpKTtcbiAgICBpZiAoZXhlYyhJU19OVU1CRVJfU1RBUlQsIGNocikpIHJldHVybiBmb3JrLm51bWJlcigpO1xuICAgIHN3aXRjaCAoY2hyKSB7XG4gICAgICBjYXNlICd7JzpcbiAgICAgICAgcmV0dXJuIGZvcmsub2JqZWN0KCk7XG4gICAgICBjYXNlICdbJzpcbiAgICAgICAgcmV0dXJuIGZvcmsuYXJyYXkoKTtcbiAgICAgIGNhc2UgJ1wiJzpcbiAgICAgICAgcmV0dXJuIGZvcmsuc3RyaW5nKCk7XG4gICAgICBjYXNlICd0JzpcbiAgICAgICAgcmV0dXJuIGZvcmsua2V5d29yZCh0cnVlKTtcbiAgICAgIGNhc2UgJ2YnOlxuICAgICAgICByZXR1cm4gZm9yay5rZXl3b3JkKGZhbHNlKTtcbiAgICAgIGNhc2UgJ24nOlxuICAgICAgICByZXR1cm4gZm9yay5rZXl3b3JkKG51bGwpO1xuICAgIH0gdGhyb3cgbmV3IFN5bnRheEVycm9yKCdVbmV4cGVjdGVkIGNoYXJhY3RlcjogXCInICsgY2hyICsgJ1wiIGF0OiAnICsgaSk7XG4gIH0sXG4gIG5vZGU6IGZ1bmN0aW9uICh0eXBlLCB2YWx1ZSwgc3RhcnQsIGVuZCwgbm9kZXMpIHtcbiAgICByZXR1cm4gbmV3IE5vZGUodmFsdWUsIGVuZCwgdHlwZSA/IG51bGwgOiBzbGljZSh0aGlzLnNvdXJjZSwgc3RhcnQsIGVuZCksIG5vZGVzKTtcbiAgfSxcbiAgb2JqZWN0OiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNvdXJjZSA9IHRoaXMuc291cmNlO1xuICAgIHZhciBpID0gdGhpcy5pbmRleCArIDE7XG4gICAgdmFyIGV4cGVjdEtleXBhaXIgPSBmYWxzZTtcbiAgICB2YXIgb2JqZWN0ID0ge307XG4gICAgdmFyIG5vZGVzID0ge307XG4gICAgdmFyIGNsb3NlZCA9IGZhbHNlO1xuICAgIHdoaWxlIChpIDwgc291cmNlLmxlbmd0aCkge1xuICAgICAgaSA9IHRoaXMudW50aWwoWydcIicsICd9J10sIGkpO1xuICAgICAgaWYgKGF0KHNvdXJjZSwgaSkgPT09ICd9JyAmJiAhZXhwZWN0S2V5cGFpcikge1xuICAgICAgICBpKys7XG4gICAgICAgIGNsb3NlZCA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgLy8gUGFyc2luZyB0aGUga2V5XG4gICAgICB2YXIgcmVzdWx0ID0gdGhpcy5mb3JrKGkpLnN0cmluZygpO1xuICAgICAgdmFyIGtleSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgIGkgPSByZXN1bHQuZW5kO1xuICAgICAgaSA9IHRoaXMudW50aWwoWyc6J10sIGkpICsgMTtcbiAgICAgIC8vIFBhcnNpbmcgdmFsdWVcbiAgICAgIGkgPSB0aGlzLnNraXAoSVNfV0hJVEVTUEFDRSwgaSk7XG4gICAgICByZXN1bHQgPSB0aGlzLmZvcmsoaSkucGFyc2UoKTtcbiAgICAgIGNyZWF0ZVByb3BlcnR5KG5vZGVzLCBrZXksIHJlc3VsdCk7XG4gICAgICBjcmVhdGVQcm9wZXJ0eShvYmplY3QsIGtleSwgcmVzdWx0LnZhbHVlKTtcbiAgICAgIGkgPSB0aGlzLnVudGlsKFsnLCcsICd9J10sIHJlc3VsdC5lbmQpO1xuICAgICAgdmFyIGNociA9IGF0KHNvdXJjZSwgaSk7XG4gICAgICBpZiAoY2hyID09PSAnLCcpIHtcbiAgICAgICAgZXhwZWN0S2V5cGFpciA9IHRydWU7XG4gICAgICAgIGkrKztcbiAgICAgIH0gZWxzZSBpZiAoY2hyID09PSAnfScpIHtcbiAgICAgICAgaSsrO1xuICAgICAgICBjbG9zZWQgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFjbG9zZWQpIHRocm93IG5ldyBTeW50YXhFcnJvcignVW50ZXJtaW5hdGVkIG9iamVjdCBhdDogJyArIGkpO1xuICAgIHJldHVybiB0aGlzLm5vZGUoT0JKRUNULCBvYmplY3QsIHRoaXMuaW5kZXgsIGksIG5vZGVzKTtcbiAgfSxcbiAgYXJyYXk6IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc291cmNlID0gdGhpcy5zb3VyY2U7XG4gICAgdmFyIGkgPSB0aGlzLmluZGV4ICsgMTtcbiAgICB2YXIgZXhwZWN0RWxlbWVudCA9IGZhbHNlO1xuICAgIHZhciBhcnJheSA9IFtdO1xuICAgIHZhciBub2RlcyA9IFtdO1xuICAgIHZhciBjbG9zZWQgPSBmYWxzZTtcbiAgICB3aGlsZSAoaSA8IHNvdXJjZS5sZW5ndGgpIHtcbiAgICAgIGkgPSB0aGlzLnNraXAoSVNfV0hJVEVTUEFDRSwgaSk7XG4gICAgICBpZiAoYXQoc291cmNlLCBpKSA9PT0gJ10nICYmICFleHBlY3RFbGVtZW50KSB7XG4gICAgICAgIGkrKztcbiAgICAgICAgY2xvc2VkID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICB2YXIgcmVzdWx0ID0gdGhpcy5mb3JrKGkpLnBhcnNlKCk7XG4gICAgICBwdXNoKG5vZGVzLCByZXN1bHQpO1xuICAgICAgcHVzaChhcnJheSwgcmVzdWx0LnZhbHVlKTtcbiAgICAgIGkgPSB0aGlzLnVudGlsKFsnLCcsICddJ10sIHJlc3VsdC5lbmQpO1xuICAgICAgaWYgKGF0KHNvdXJjZSwgaSkgPT09ICcsJykge1xuICAgICAgICBleHBlY3RFbGVtZW50ID0gdHJ1ZTtcbiAgICAgICAgaSsrO1xuICAgICAgfSBlbHNlIGlmIChhdChzb3VyY2UsIGkpID09PSAnXScpIHtcbiAgICAgICAgaSsrO1xuICAgICAgICBjbG9zZWQgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFjbG9zZWQpIHRocm93IG5ldyBTeW50YXhFcnJvcignVW50ZXJtaW5hdGVkIGFycmF5IGF0OiAnICsgaSk7XG4gICAgcmV0dXJuIHRoaXMubm9kZShPQkpFQ1QsIGFycmF5LCB0aGlzLmluZGV4LCBpLCBub2Rlcyk7XG4gIH0sXG4gIHN0cmluZzogZnVuY3Rpb24gKCkge1xuICAgIHZhciBpbmRleCA9IHRoaXMuaW5kZXg7XG4gICAgdmFyIHBhcnNlZCA9IHBhcnNlSlNPTlN0cmluZyh0aGlzLnNvdXJjZSwgdGhpcy5pbmRleCArIDEpO1xuICAgIHJldHVybiB0aGlzLm5vZGUoUFJJTUlUSVZFLCBwYXJzZWQudmFsdWUsIGluZGV4LCBwYXJzZWQuZW5kKTtcbiAgfSxcbiAgbnVtYmVyOiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNvdXJjZSA9IHRoaXMuc291cmNlO1xuICAgIHZhciBzdGFydEluZGV4ID0gdGhpcy5pbmRleDtcbiAgICB2YXIgaSA9IHN0YXJ0SW5kZXg7XG4gICAgaWYgKGF0KHNvdXJjZSwgaSkgPT09ICctJykgaSsrO1xuICAgIGlmIChhdChzb3VyY2UsIGkpID09PSAnMCcpIGkrKztcbiAgICBlbHNlIGlmIChleGVjKElTX05PTl9aRVJPX0RJR0lULCBhdChzb3VyY2UsIGkpKSkgaSA9IHRoaXMuc2tpcChJU19ESUdJVCwgaSArIDEpO1xuICAgIGVsc2UgdGhyb3cgbmV3IFN5bnRheEVycm9yKCdGYWlsZWQgdG8gcGFyc2UgbnVtYmVyIGF0OiAnICsgaSk7XG4gICAgaWYgKGF0KHNvdXJjZSwgaSkgPT09ICcuJykge1xuICAgICAgdmFyIGZyYWN0aW9uU3RhcnRJbmRleCA9IGkgKyAxO1xuICAgICAgaSA9IHRoaXMuc2tpcChJU19ESUdJVCwgZnJhY3Rpb25TdGFydEluZGV4KTtcbiAgICAgIGlmIChmcmFjdGlvblN0YXJ0SW5kZXggPT09IGkpIHRocm93IG5ldyBTeW50YXhFcnJvcihcIkZhaWxlZCB0byBwYXJzZSBudW1iZXIncyBmcmFjdGlvbiBhdDogXCIgKyBpKTtcbiAgICB9XG4gICAgaWYgKGF0KHNvdXJjZSwgaSkgPT09ICdlJyB8fCBhdChzb3VyY2UsIGkpID09PSAnRScpIHtcbiAgICAgIGkrKztcbiAgICAgIGlmIChhdChzb3VyY2UsIGkpID09PSAnKycgfHwgYXQoc291cmNlLCBpKSA9PT0gJy0nKSBpKys7XG4gICAgICB2YXIgZXhwb25lbnRTdGFydEluZGV4ID0gaTtcbiAgICAgIGkgPSB0aGlzLnNraXAoSVNfRElHSVQsIGkpO1xuICAgICAgaWYgKGV4cG9uZW50U3RhcnRJbmRleCA9PT0gaSkgdGhyb3cgbmV3IFN5bnRheEVycm9yKFwiRmFpbGVkIHRvIHBhcnNlIG51bWJlcidzIGV4cG9uZW50IHZhbHVlIGF0OiBcIiArIGkpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5ub2RlKFBSSU1JVElWRSwgTnVtYmVyKHNsaWNlKHNvdXJjZSwgc3RhcnRJbmRleCwgaSkpLCBzdGFydEluZGV4LCBpKTtcbiAgfSxcbiAga2V5d29yZDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgdmFyIGtleXdvcmQgPSAnJyArIHZhbHVlO1xuICAgIHZhciBpbmRleCA9IHRoaXMuaW5kZXg7XG4gICAgdmFyIGVuZEluZGV4ID0gaW5kZXggKyBrZXl3b3JkLmxlbmd0aDtcbiAgICBpZiAoc2xpY2UodGhpcy5zb3VyY2UsIGluZGV4LCBlbmRJbmRleCkgIT09IGtleXdvcmQpIHRocm93IG5ldyBTeW50YXhFcnJvcignRmFpbGVkIHRvIHBhcnNlIHZhbHVlIGF0OiAnICsgaW5kZXgpO1xuICAgIHJldHVybiB0aGlzLm5vZGUoUFJJTUlUSVZFLCB2YWx1ZSwgaW5kZXgsIGVuZEluZGV4KTtcbiAgfSxcbiAgc2tpcDogZnVuY3Rpb24gKHJlZ2V4LCBpKSB7XG4gICAgdmFyIHNvdXJjZSA9IHRoaXMuc291cmNlO1xuICAgIGZvciAoOyBpIDwgc291cmNlLmxlbmd0aDsgaSsrKSBpZiAoIWV4ZWMocmVnZXgsIGF0KHNvdXJjZSwgaSkpKSBicmVhaztcbiAgICByZXR1cm4gaTtcbiAgfSxcbiAgdW50aWw6IGZ1bmN0aW9uIChhcnJheSwgaSkge1xuICAgIGkgPSB0aGlzLnNraXAoSVNfV0hJVEVTUEFDRSwgaSk7XG4gICAgdmFyIGNociA9IGF0KHRoaXMuc291cmNlLCBpKTtcbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IGFycmF5Lmxlbmd0aDsgaisrKSBpZiAoYXJyYXlbal0gPT09IGNocikgcmV0dXJuIGk7XG4gICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKCdVbmV4cGVjdGVkIGNoYXJhY3RlcjogXCInICsgY2hyICsgJ1wiIGF0OiAnICsgaSk7XG4gIH1cbn07XG5cbnZhciBOT19TT1VSQ0VfU1VQUE9SVCA9IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHVuc2FmZUludCA9ICc5MDA3MTk5MjU0NzQwOTkzJztcbiAgdmFyIHNvdXJjZTtcbiAgbmF0aXZlUGFyc2UodW5zYWZlSW50LCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSwgY29udGV4dCkge1xuICAgIHNvdXJjZSA9IGNvbnRleHQuc291cmNlO1xuICB9KTtcbiAgcmV0dXJuIHNvdXJjZSAhPT0gdW5zYWZlSW50O1xufSk7XG5cbnZhciBQUk9QRVJfQkFTRV9QQVJTRSA9IE5BVElWRV9TWU1CT0wgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gU2FmYXJpIDkgYnVnXG4gIHJldHVybiAxIC8gbmF0aXZlUGFyc2UoJy0wIFxcdCcpICE9PSAtSW5maW5pdHk7XG59KTtcblxuLy8gYEpTT04ucGFyc2VgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1qc29uLnBhcnNlXG4vLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1qc29uLXBhcnNlLXdpdGgtc291cmNlXG4kKHsgdGFyZ2V0OiAnSlNPTicsIHN0YXQ6IHRydWUsIGZvcmNlZDogTk9fU09VUkNFX1NVUFBPUlQgfSwge1xuICBwYXJzZTogZnVuY3Rpb24gcGFyc2UodGV4dCwgcmV2aXZlcikge1xuICAgIHJldHVybiBQUk9QRVJfQkFTRV9QQVJTRSAmJiAhaXNDYWxsYWJsZShyZXZpdmVyKSA/IG5hdGl2ZVBhcnNlKHRleHQpIDogJHBhcnNlKHRleHQsIHJldml2ZXIpO1xuICB9XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgTkFUSVZFX0JJTkQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1uYXRpdmUnKTtcblxudmFyIEZ1bmN0aW9uUHJvdG90eXBlID0gRnVuY3Rpb24ucHJvdG90eXBlO1xudmFyIGFwcGx5ID0gRnVuY3Rpb25Qcm90b3R5cGUuYXBwbHk7XG52YXIgY2FsbCA9IEZ1bmN0aW9uUHJvdG90eXBlLmNhbGw7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1mdW5jdGlvbi1wcm90b3R5cGUtYmluZCwgZXMvbm8tcmVmbGVjdCAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiBSZWZsZWN0ID09ICdvYmplY3QnICYmIFJlZmxlY3QuYXBwbHkgfHwgKE5BVElWRV9CSU5EID8gY2FsbC5iaW5kKGFwcGx5KSA6IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGNhbGwuYXBwbHkoYXBwbHksIGFyZ3VtZW50cyk7XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgZ2V0SW50ZXJuYWxTdGF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZScpLmdldDtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc1Jhd0pTT04oTykge1xuICBpZiAoIWlzT2JqZWN0KE8pKSByZXR1cm4gZmFsc2U7XG4gIHZhciBzdGF0ZSA9IGdldEludGVybmFsU3RhdGUoTyk7XG4gIHJldHVybiAhIXN0YXRlICYmIHN0YXRlLnR5cGUgPT09ICdSYXdKU09OJztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHVuY3VycnlUaGlzKFtdLnNsaWNlKTtcbiIsICIndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBlcy9uby1qc29uIC0tIHNhZmUgKi9cbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHZhciB1bnNhZmVJbnQgPSAnOTAwNzE5OTI1NDc0MDk5Myc7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1qc29uLXJhd2pzb24gLS0gZmVhdHVyZSBkZXRlY3Rpb25cbiAgdmFyIHJhdyA9IEpTT04ucmF3SlNPTih1bnNhZmVJbnQpO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tanNvbi1pc3Jhd2pzb24gLS0gZmVhdHVyZSBkZXRlY3Rpb25cbiAgcmV0dXJuICFKU09OLmlzUmF3SlNPTihyYXcpIHx8IEpTT04uc3RyaW5naWZ5KHJhdykgIT09IHVuc2FmZUludDtcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG52YXIgYXBwbHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYXBwbHknKTtcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtYXJyYXknKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgaXNSYXdKU09OID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXJhdy1qc29uJyk7XG52YXIgaXNTeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtc3ltYm9sJyk7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xudmFyIHRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXN0cmluZycpO1xudmFyIGFycmF5U2xpY2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktc2xpY2UnKTtcbnZhciBwYXJzZUpTT05TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcGFyc2UtanNvbi1zdHJpbmcnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdWlkJyk7XG52YXIgTkFUSVZFX1NZTUJPTCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zeW1ib2wtY29uc3RydWN0b3ItZGV0ZWN0aW9uJyk7XG52YXIgTkFUSVZFX1JBV19KU09OID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL25hdGl2ZS1yYXctanNvbicpO1xuXG52YXIgJFN0cmluZyA9IFN0cmluZztcbnZhciAkc3RyaW5naWZ5ID0gZ2V0QnVpbHRJbignSlNPTicsICdzdHJpbmdpZnknKTtcbnZhciBleGVjID0gdW5jdXJyeVRoaXMoLy4vLmV4ZWMpO1xudmFyIGNoYXJBdCA9IHVuY3VycnlUaGlzKCcnLmNoYXJBdCk7XG52YXIgY2hhckNvZGVBdCA9IHVuY3VycnlUaGlzKCcnLmNoYXJDb2RlQXQpO1xudmFyIHJlcGxhY2UgPSB1bmN1cnJ5VGhpcygnJy5yZXBsYWNlKTtcbnZhciBzbGljZSA9IHVuY3VycnlUaGlzKCcnLnNsaWNlKTtcbnZhciBwdXNoID0gdW5jdXJyeVRoaXMoW10ucHVzaCk7XG52YXIgbnVtYmVyVG9TdHJpbmcgPSB1bmN1cnJ5VGhpcygxLjEudG9TdHJpbmcpO1xuXG52YXIgc3Vycm9nYXRlcyA9IC9bXFx1RDgwMC1cXHVERkZGXS9nO1xudmFyIGxlYWRpbmdTdXJyb2dhdGVzID0gL15bXFx1RDgwMC1cXHVEQkZGXSQvO1xudmFyIHRyYWlsaW5nU3Vycm9nYXRlcyA9IC9eW1xcdURDMDAtXFx1REZGRl0kLztcblxudmFyIE1BUksgPSB1aWQoKTtcbnZhciBNQVJLX0xFTkdUSCA9IE1BUksubGVuZ3RoO1xuXG52YXIgV1JPTkdfU1lNQk9MU19DT05WRVJTSU9OID0gIU5BVElWRV9TWU1CT0wgfHwgZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgc3ltYm9sID0gZ2V0QnVpbHRJbignU3ltYm9sJykoJ3N0cmluZ2lmeSBkZXRlY3Rpb24nKTtcbiAgLy8gTVMgRWRnZSBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMge31cbiAgcmV0dXJuICRzdHJpbmdpZnkoW3N5bWJvbF0pICE9PSAnW251bGxdJ1xuICAgIC8vIFdlYktpdCBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMgbnVsbFxuICAgIHx8ICRzdHJpbmdpZnkoeyBhOiBzeW1ib2wgfSkgIT09ICd7fSdcbiAgICAvLyBWOCB0aHJvd3Mgb24gYm94ZWQgc3ltYm9sc1xuICAgIHx8ICRzdHJpbmdpZnkoT2JqZWN0KHN5bWJvbCkpICE9PSAne30nO1xufSk7XG5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLXdlbGwtZm9ybWVkLXN0cmluZ2lmeVxudmFyIElMTF9GT1JNRURfVU5JQ09ERSA9IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuICRzdHJpbmdpZnkoJ1xcdURGMDZcXHVEODM0JykgIT09ICdcIlxcXFx1ZGYwNlxcXFx1ZDgzNFwiJ1xuICAgIHx8ICRzdHJpbmdpZnkoJ1xcdURFQUQnKSAhPT0gJ1wiXFxcXHVkZWFkXCInO1xufSk7XG5cbnZhciBzdHJpbmdpZnlXaXRoUHJvcGVyU3ltYm9sc0NvbnZlcnNpb24gPSBXUk9OR19TWU1CT0xTX0NPTlZFUlNJT04gPyBmdW5jdGlvbiAoaXQsIHJlcGxhY2VyKSB7XG4gIHZhciBhcmdzID0gYXJyYXlTbGljZShhcmd1bWVudHMpO1xuICB2YXIgJHJlcGxhY2VyID0gZ2V0UmVwbGFjZXJGdW5jdGlvbihyZXBsYWNlcik7XG4gIGlmICghaXNDYWxsYWJsZSgkcmVwbGFjZXIpICYmIChpdCA9PT0gdW5kZWZpbmVkIHx8IGlzU3ltYm9sKGl0KSkpIHJldHVybjsgLy8gSUU4IHJldHVybnMgc3RyaW5nIG9uIHVuZGVmaW5lZFxuICBhcmdzWzFdID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAvLyBzb21lIG9sZCBpbXBsZW1lbnRhdGlvbnMgKGxpa2UgV2ViS2l0KSBjb3VsZCBwYXNzIG51bWJlcnMgYXMga2V5c1xuICAgIGlmIChpc0NhbGxhYmxlKCRyZXBsYWNlcikpIHZhbHVlID0gY2FsbCgkcmVwbGFjZXIsIHRoaXMsICRTdHJpbmcoa2V5KSwgdmFsdWUpO1xuICAgIGlmICghaXNTeW1ib2wodmFsdWUpKSByZXR1cm4gdmFsdWU7XG4gIH07XG4gIHJldHVybiBhcHBseSgkc3RyaW5naWZ5LCBudWxsLCBhcmdzKTtcbn0gOiAkc3RyaW5naWZ5O1xuXG52YXIgZml4SWxsRm9ybWVkSlNPTiA9IGZ1bmN0aW9uIChtYXRjaCwgb2Zmc2V0LCBzdHJpbmcpIHtcbiAgdmFyIHByZXYgPSBjaGFyQXQoc3RyaW5nLCBvZmZzZXQgLSAxKTtcbiAgdmFyIG5leHQgPSBjaGFyQXQoc3RyaW5nLCBvZmZzZXQgKyAxKTtcbiAgaWYgKFxuICAgIChleGVjKGxlYWRpbmdTdXJyb2dhdGVzLCBtYXRjaCkgJiYgIWV4ZWModHJhaWxpbmdTdXJyb2dhdGVzLCBuZXh0KSkgfHxcbiAgICAoZXhlYyh0cmFpbGluZ1N1cnJvZ2F0ZXMsIG1hdGNoKSAmJiAhZXhlYyhsZWFkaW5nU3Vycm9nYXRlcywgcHJldikpXG4gICkge1xuICAgIHJldHVybiAnXFxcXHUnICsgbnVtYmVyVG9TdHJpbmcoY2hhckNvZGVBdChtYXRjaCwgMCksIDE2KTtcbiAgfSByZXR1cm4gbWF0Y2g7XG59O1xuXG52YXIgZ2V0UmVwbGFjZXJGdW5jdGlvbiA9IGZ1bmN0aW9uIChyZXBsYWNlcikge1xuICBpZiAoaXNDYWxsYWJsZShyZXBsYWNlcikpIHJldHVybiByZXBsYWNlcjtcbiAgaWYgKCFpc0FycmF5KHJlcGxhY2VyKSkgcmV0dXJuO1xuICB2YXIgcmF3TGVuZ3RoID0gcmVwbGFjZXIubGVuZ3RoO1xuICB2YXIga2V5cyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHJhd0xlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGVsZW1lbnQgPSByZXBsYWNlcltpXTtcbiAgICBpZiAodHlwZW9mIGVsZW1lbnQgPT0gJ3N0cmluZycpIHB1c2goa2V5cywgZWxlbWVudCk7XG4gICAgZWxzZSBpZiAodHlwZW9mIGVsZW1lbnQgPT0gJ251bWJlcicgfHwgY2xhc3NvZihlbGVtZW50KSA9PT0gJ051bWJlcicgfHwgY2xhc3NvZihlbGVtZW50KSA9PT0gJ1N0cmluZycpIHB1c2goa2V5cywgdG9TdHJpbmcoZWxlbWVudCkpO1xuICB9XG4gIHZhciBrZXlzTGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIHZhciByb290ID0gdHJ1ZTtcbiAgcmV0dXJuIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgaWYgKHJvb3QpIHtcbiAgICAgIHJvb3QgPSBmYWxzZTtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgaWYgKGlzQXJyYXkodGhpcykpIHJldHVybiB2YWx1ZTtcbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IGtleXNMZW5ndGg7IGorKykgaWYgKGtleXNbal0gPT09IGtleSkgcmV0dXJuIHZhbHVlO1xuICB9O1xufTtcblxuLy8gYEpTT04uc3RyaW5naWZ5YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtanNvbi5zdHJpbmdpZnlcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLWpzb24tcGFyc2Utd2l0aC1zb3VyY2VcbmlmICgkc3RyaW5naWZ5KSAkKHsgdGFyZ2V0OiAnSlNPTicsIHN0YXQ6IHRydWUsIGFyaXR5OiAzLCBmb3JjZWQ6IFdST05HX1NZTUJPTFNfQ09OVkVSU0lPTiB8fCBJTExfRk9STUVEX1VOSUNPREUgfHwgIU5BVElWRV9SQVdfSlNPTiB9LCB7XG4gIHN0cmluZ2lmeTogZnVuY3Rpb24gc3RyaW5naWZ5KHRleHQsIHJlcGxhY2VyLCBzcGFjZSkge1xuICAgIHZhciByZXBsYWNlckZ1bmN0aW9uID0gZ2V0UmVwbGFjZXJGdW5jdGlvbihyZXBsYWNlcik7XG4gICAgdmFyIHJhd1N0cmluZ3MgPSBbXTtcblxuICAgIHZhciBqc29uID0gc3RyaW5naWZ5V2l0aFByb3BlclN5bWJvbHNDb252ZXJzaW9uKHRleHQsIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAvLyBzb21lIG9sZCBpbXBsZW1lbnRhdGlvbnMgKGxpa2UgV2ViS2l0KSBjb3VsZCBwYXNzIG51bWJlcnMgYXMga2V5c1xuICAgICAgdmFyIHYgPSBpc0NhbGxhYmxlKHJlcGxhY2VyRnVuY3Rpb24pID8gY2FsbChyZXBsYWNlckZ1bmN0aW9uLCB0aGlzLCAkU3RyaW5nKGtleSksIHZhbHVlKSA6IHZhbHVlO1xuICAgICAgcmV0dXJuICFOQVRJVkVfUkFXX0pTT04gJiYgaXNSYXdKU09OKHYpID8gTUFSSyArIChwdXNoKHJhd1N0cmluZ3MsIHYucmF3SlNPTikgLSAxKSA6IHY7XG4gICAgfSwgc3BhY2UpO1xuXG4gICAgaWYgKHR5cGVvZiBqc29uICE9ICdzdHJpbmcnKSByZXR1cm4ganNvbjtcblxuICAgIGlmIChJTExfRk9STUVEX1VOSUNPREUpIGpzb24gPSByZXBsYWNlKGpzb24sIHN1cnJvZ2F0ZXMsIGZpeElsbEZvcm1lZEpTT04pO1xuXG4gICAgaWYgKE5BVElWRV9SQVdfSlNPTikgcmV0dXJuIGpzb247XG5cbiAgICB2YXIgcmVzdWx0ID0gJyc7XG4gICAgdmFyIGxlbmd0aCA9IGpzb24ubGVuZ3RoO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGNociA9IGNoYXJBdChqc29uLCBpKTtcbiAgICAgIGlmIChjaHIgPT09ICdcIicpIHtcbiAgICAgICAgdmFyIGVuZCA9IHBhcnNlSlNPTlN0cmluZyhqc29uLCArK2kpLmVuZCAtIDE7XG4gICAgICAgIHZhciBzdHJpbmcgPSBzbGljZShqc29uLCBpLCBlbmQpO1xuICAgICAgICByZXN1bHQgKz0gc2xpY2Uoc3RyaW5nLCAwLCBNQVJLX0xFTkdUSCkgPT09IE1BUktcbiAgICAgICAgICA/IHJhd1N0cmluZ3Nbc2xpY2Uoc3RyaW5nLCBNQVJLX0xFTkdUSCldXG4gICAgICAgICAgOiAnXCInICsgc3RyaW5nICsgJ1wiJztcbiAgICAgICAgaSA9IGVuZDtcbiAgICAgIH0gZWxzZSByZXN1bHQgKz0gY2hyO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn0pO1xuIiwgImltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7bXdBZGRQcmV2aWV3fSBmcm9tICcuL21vZHVsZXMvbXcvbXdBZGRQcmV2aWV3JztcbmltcG9ydCB7d2lraXRleHRQcmV2aWV3VGVzdGNhc2V9IGZyb20gJy4vbW9kdWxlcy93aWtpdGV4dFByZXZpZXdUZXN0Y2FzZSc7XG5cbnZvaWQgZ2V0Qm9keSgpLnRoZW4oZnVuY3Rpb24gc3BlY2lhbFdpa2l0ZXh0KCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQge1xuXHQvLyDmiafooYzpooTop4hcblx0bXdBZGRQcmV2aWV3KCRib2R5KTtcblx0Ly8g5qOA5p+l5rWL6K+V5qC35L6LXG5cdHZvaWQgd2lraXRleHRQcmV2aWV3VGVzdGNhc2UodHJ1ZSk7XG59KTtcbiIsICJpbXBvcnQgXCJlc2J1aWxkLWNzcy1tb2R1bGVzLXBsdWdpbi1ucy1jc3M6c3JjL1NwZWNpYWxXaWtpdGV4dC9jb21wb25lbnRzL1NwZWNpYWxXaWtpdGV4dC5tb2R1bGUubGVzc1wiO1xuZXhwb3J0IGNvbnN0IHByZXZpZXdMb2FkaW5nQ29udGVudCA9IFwiU3BlY2lhbFdpa2l0ZXh0LW1vZHVsZV9fcHJldmlldy1sb2FkaW5nX19jb250ZW50XzBQckRsR19fNDEwMFwiO1xuZXhwb3J0IGNvbnN0IHByZXZpZXdMb2FkaW5nSW5uZXIgPSBcIlNwZWNpYWxXaWtpdGV4dC1tb2R1bGVfX3ByZXZpZXctbG9hZGluZ19faW5uZXJfMFByRGxHX180MTAwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgXCJwcmV2aWV3TG9hZGluZ0NvbnRlbnRcIjogcHJldmlld0xvYWRpbmdDb250ZW50LFxuICBcInByZXZpZXdMb2FkaW5nSW5uZXJcIjogcHJldmlld0xvYWRpbmdJbm5lclxufTtcbiAgICAgICIsICJpbXBvcnQge3ByZXZpZXdMb2FkaW5nQ29udGVudCwgcHJldmlld0xvYWRpbmdJbm5lcn0gZnJvbSAnLi9TcGVjaWFsV2lraXRleHQubW9kdWxlLmxlc3MnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuSlNYJztcbmltcG9ydCBhamF4TG9hZGVyIGZyb20gJy4uL2ltYWdlcy9Mb2FkaW5nX2ljb24uZ2lmJztcbmltcG9ydCBhbGVydCBmcm9tICcuLi9pbWFnZXMvQWxlcnQucG5nJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vbW9kdWxlcy9pMThuJztcblxuY29uc3QgRmFpbGVkID0gKCkgPT4gKFxuXHQ8PlxuXHRcdDxpbWcgc3JjPXthbGVydH0gZGVjb2Rpbmc9XCJhc3luY1wiIHdpZHRoPVwiMzJcIiBoZWlnaHQ9XCIzMlwiIC8+XG5cdFx0PHNwYW4+Jm5ic3A7e2dldE1lc3NhZ2UoJ0ZhaWxlZCcpfTwvc3Bhbj5cblx0PC8+XG4pO1xuXG5jb25zdCBMb2FkaW5nID0gKCkgPT4gKFxuXHQ8ZGl2IGlkPVwic3BlY2lhbHdpa2l0ZXh0LXByZXZpZXctbG9hZGluZ1wiPlxuXHRcdDxkaXYgY2xhc3NOYW1lPXtbJ3F1b3RlYm94JywgcHJldmlld0xvYWRpbmdJbm5lcl19IGlkPVwic3BlY2lhbHdpa2l0ZXh0LXByZXZpZXctbG9hZGluZ19faW5uZXJcIj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtwcmV2aWV3TG9hZGluZ0NvbnRlbnR9IGlkPVwic3BlY2lhbHdpa2l0ZXh0LXByZXZpZXctbG9hZGluZ19fY29udGVudFwiPlxuXHRcdFx0XHQ8aW1nIHNyYz17YWpheExvYWRlcn0gZGVjb2Rpbmc9XCJhc3luY1wiIHdpZHRoPVwiMzJcIiBoZWlnaHQ9XCIzMlwiIC8+XG5cdFx0XHRcdDxzcGFuPiZuYnNwO3tnZXRNZXNzYWdlKCdMb2FkaW5nJyl9PC9zcGFuPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdDwvZGl2PlxuKTtcblxuZXhwb3J0IHtGYWlsZWQsIExvYWRpbmd9O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRGYWlsZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRmFpbGVkIHRvIGxvYWQgcHJldmlldy4nLFxuXHRcdFx0J3poLWhhbnMnOiAn6aKE6KeI5Yqg6L295aSx6LSlJyxcblx0XHRcdCd6aC1oYW50JzogJ+mgkOimvei8ieWFpeWksei0pScsXG5cdFx0fSksXG5cdFx0TG9hZGluZzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdMb2FkaW5nIHByZXZpZXcuLi4nLFxuXHRcdFx0J3poLWhhbnMnOiAn6aKE6KeI5Yqg6L295Lit4oCm4oCmJyxcblx0XHRcdCd6aC1oYW50JzogJ+mgkOimvei8ieWFpeS4reKApuKApicsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCB7Z2VuZXJhdGVBcnJheX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuLy8g5qOA5p+lc2VsZWN0b3Llr7nlupTnmoRET03lr7nosaHmmK/lkKblrZjlnKhcbmNvbnN0IGNoZWNrRWxlbWVudEV4aXN0ID0gKHNlbGVjdG9yczogc3RyaW5nIHwgc3RyaW5nW10pOiBib29sZWFuID0+IHtcblx0Y29uc3Qgc2VsZWN0b3JBcnJheTogc3RyaW5nW10gPSBnZW5lcmF0ZUFycmF5KHNlbGVjdG9ycyk7XG5cblx0Zm9yIChjb25zdCBzZWxlY3RvciBvZiBzZWxlY3RvckFycmF5KSB7XG5cdFx0aWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gZmFsc2U7XG59O1xuXG5leHBvcnQge2NoZWNrRWxlbWVudEV4aXN0fTtcbiIsICJpbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5KU1gnO1xuaW1wb3J0IHtjaGVja0VsZW1lbnRFeGlzdH0gZnJvbSAnLi9jaGVja0VsZW1lbnRFeGlzdCc7XG5cbi8vIOWwhuino+aekOWQjueahHdpa2l0ZXh05Yqg5YWl6aG16Z2i5LitXG5jb25zdCBhZGRQYXJzZWRXaWtpdGV4dCA9IChwYXJzZWRXaWtpdGV4dDogc3RyaW5nIHwgUmVhY3QuUmVhY3RFbGVtZW50KTogdm9pZCA9PiB7XG5cdGNvbnN0ICRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50PiA9ICQoJ2JvZHknKTtcblx0Y29uc3QgJHBhcnNlZFdpa2l0ZXh0OiBKUXVlcnkgPSAkKCkuaHRtbChwYXJzZWRXaWtpdGV4dCk7XG5cblx0aWYgKGNoZWNrRWxlbWVudEV4aXN0KCcjc3BlY2lhbHdpa2l0ZXh0LXByZXZpZXctbG9hZGluZycpKSB7XG5cdFx0Y29uc3QgJGVsZW1lbnQ6IEpRdWVyeSA9ICRib2R5LmZpbmQoJyNzcGVjaWFsd2lraXRleHQtcHJldmlldy1sb2FkaW5nJyk7XG5cdFx0JGVsZW1lbnQuaHRtbChwYXJzZWRXaWtpdGV4dCk7XG5cdFx0bXcuaG9vaygnd2lraXBhZ2UuY29udGVudCcpLmZpcmUoJGVsZW1lbnQpO1xuXHR9IGVsc2UgaWYgKGNoZWNrRWxlbWVudEV4aXN0KCcuZGlmZi1jdXJyZW50dmVyc2lvbi10aXRsZScpKSB7XG5cdFx0JGJvZHkuZmluZCgnLmRpZmYtY3VycmVudHZlcnNpb24tdGl0bGUnKS5hcHBlbmQoJHBhcnNlZFdpa2l0ZXh0KTtcblx0fSBlbHNlIGlmIChjaGVja0VsZW1lbnRFeGlzdCgnLnByZXZpZXdub3RlJykpIHtcblx0XHQkYm9keS5maW5kKCcucHJldmlld25vdGUnKS5hcHBlbmQoJHBhcnNlZFdpa2l0ZXh0KTtcblx0fSBlbHNlIGlmIChjaGVja0VsZW1lbnRFeGlzdCgnLm13LXVuZGVsZXRlLXJldmlzaW9uJykpIHtcblx0XHQkYm9keS5maW5kKCcubXctdW5kZWxldGUtcmV2aXNpb24nKS5hcHBlbmQoJHBhcnNlZFdpa2l0ZXh0KTtcblx0fSBlbHNlIGlmIChjaGVja0VsZW1lbnRFeGlzdCgnI213LWNvbnRlbnQtdGV4dCcpKSB7XG5cdFx0JGJvZHkuZmluZCgnI213LWNvbnRlbnQtdGV4dCcpLmFwcGVuZCgkcGFyc2VkV2lraXRleHQpO1xuXHR9XG5cblx0bXcuaG9vaygnd2lraXBhZ2UuY29udGVudCcpLmZpcmUoJHBhcnNlZFdpa2l0ZXh0KTtcbn07XG5cbmV4cG9ydCB7YWRkUGFyc2VkV2lraXRleHR9O1xuIiwgImltcG9ydCB7RmFpbGVkLCBMb2FkaW5nfSBmcm9tICcuLi9jb21wb25lbnRzL2dlbmVyYXRlRWxlbWVudHMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuSlNYJztcbmltcG9ydCB7YWRkUGFyc2VkV2lraXRleHR9IGZyb20gJy4vdXRpbC9hZGRQYXJzZWRXaWtpdGV4dCc7XG5cbi8vIFtbRmlsZTpHbm9tZS1kaWFsb2ctd2FybmluZzIuc3ZnfDMycHhdXVxuLy8gLXt6aC1oYW5zOumihOiniOWKoOi9veWksei0pTt6aC1oYW50OumgkOimvei8ieWFpeWksei0pTt9LVxuY29uc3Qgbm90aWNlRmFpbEVsZW1lbnQ6IFJlYWN0LlJlYWN0RWxlbWVudCA9IEZhaWxlZCgpO1xuXG4vLyB7e1F1b3RlIGJveCB8cXVvdGUgID0gLXt6aC1oYW5zOumihOiniOWKoOi9veS4rTt6aC1oYW50OumgkOimvei8ieWFpeS4rTt9LeKApuKApiB8d2lkdGggID0gNTAlIHxhbGlnbiAgPSBjZW50ZXJ9fVxuY29uc3Qgbm90aWNlTG9hZGluZ0VsZW1lbnQ6IFJlYWN0LlJlYWN0RWxlbWVudCA9IExvYWRpbmcoKTtcblxuLy8g5pS55YqoRE9N5YaF5a65XG5jb25zdCByZXBsYWNlRE9NID0gKHNlbGVjdG9yOiBzdHJpbmcsIGVsZW1lbnQ/OiBSZWFjdC5SZWFjdEVsZW1lbnQpOiB2b2lkID0+IHtcblx0JChzZWxlY3RvcikuaHRtbChlbGVtZW50ID8/ICcnKTtcbn07XG5cbi8vIOWKoOWFpeKAnFvovb3lhaXkuK1d4oCd55qE5o+Q56S6XG5jb25zdCBhZGRMb2FkaW5nTm90aWNlID0gKCk6IHZvaWQgPT4ge1xuXHRhZGRQYXJzZWRXaWtpdGV4dChub3RpY2VMb2FkaW5nRWxlbWVudCk7XG59O1xuXG4vLyDovb3lhaXplJnor6/nmoTmj5DnpLpcbmNvbnN0IGxvYWRpbmdGYWlsTm90aWNlID0gKCk6IHZvaWQgPT4ge1xuXHRyZXBsYWNlRE9NKCcjc3BlY2lhbHdpa2l0ZXh0LXByZXZpZXctbG9hZGluZ19fY29udGVudCcsIG5vdGljZUZhaWxFbGVtZW50KTtcbn07XG5cbi8vIOenu+mZpOKAnFvovb3lhaXkuK1d4oCd55qE5o+Q56S6XG5jb25zdCByZW1vdmVMb2FkaW5nTm90aWNlID0gKCk6IHZvaWQgPT4ge1xuXHRyZXBsYWNlRE9NKCcjc3BlY2lhbHdpa2l0ZXh0LXByZXZpZXctbG9hZGluZycpO1xufTtcblxuZXhwb3J0IHtub3RpY2VMb2FkaW5nRWxlbWVudCwgYWRkTG9hZGluZ05vdGljZSwgbG9hZGluZ0ZhaWxOb3RpY2UsIHJlbW92ZUxvYWRpbmdOb3RpY2V9O1xuIiwgIntcblx0XCJ2ZXJzaW9uXCI6IFwiMi4wXCIsXG5cdFwid2lraVRleHRLZXlcIjogXCJfYWRkVGV4dFwiXG59XG4iLCAiLy8g5ZCI5bm25aSa5Liqd2lraXRleHTlrZfnrKbkuLJcbmNvbnN0IGx1YUFkZFRleHQgPSAoaW5wdXRTdHJpbmc6IHN0cmluZywgbmV3U3RyaW5nOiBzdHJpbmcsIGlzRXNjYXBlOiBib29sZWFuID0gZmFsc2UpOiBzdHJpbmcgPT4ge1xuXHRpZiAobmV3U3RyaW5nKSB7XG5cdFx0aWYgKGlucHV0U3RyaW5nKSB7XG5cdFx0XHRpbnB1dFN0cmluZyArPSAnXFxuJztcblx0XHR9XG5cblx0XHRpZiAoaXNFc2NhcGUpIHtcblx0XHRcdGNvbnN0IFtlc2NhcGVTdHJpbmddID0gSlNPTi5wYXJzZShcblx0XHRcdFx0YFske0pTT04uc3RyaW5naWZ5KFxuXHRcdFx0XHRcdC8vIEx1YeS4jeaUr+aMgVxcdeOAgVxceOi9rOS5ieWtl+esplxuXHRcdFx0XHRcdG5ld1N0cmluZy5yZXBsYWNlKC9cXFxcKFt1eF0pL2dpLCAnJDEnKVxuXHRcdFx0XHQpLnJlcGxhY2UoL1xcXFxcXFxcL2csICdcXFxcJyl9XWBcblx0XHRcdCkgYXMgW3N0cmluZ107XG5cdFx0XHRuZXdTdHJpbmcgPSBlc2NhcGVTdHJpbmc7XG5cdFx0fVxuXG5cdFx0aW5wdXRTdHJpbmcgKz0gbmV3U3RyaW5nO1xuXHR9XG5cblx0cmV0dXJuIGlucHV0U3RyaW5nO1xufTtcblxuZXhwb3J0IHtsdWFBZGRUZXh0fTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uLy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2x1YUFkZFRleHR9IGZyb20gJy4vbHVhQWRkVGV4dCc7XG5cbi8vIOivu+WPlndpa2l0ZXh05a2X56ym5Liy77yM5bm25b+955Wl5rOo6YeK5bC+6YOoXG5jb25zdCBsdWFHZXRTdHJpbmcgPSAoaW5wdXRTdHJpbmc6IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdGNvbnN0IHRlc3RTdHJpbmdFeGVjQXJyYXk6IFJlZ0V4cEV4ZWNBcnJheSB8IG51bGwgPSAvW15cXG5dKlxcKlxcLy8uZXhlYyhpbnB1dFN0cmluZyk7XG5cblx0bGV0IHRlc3RTdHJpbmc6IHN0cmluZyA9IGlucHV0U3RyaW5nO1xuXHRpZiAodGVzdFN0cmluZ0V4ZWNBcnJheSkge1xuXHRcdFt0ZXN0U3RyaW5nXSA9IHRlc3RTdHJpbmdFeGVjQXJyYXk7XG5cdFx0dGVzdFN0cmluZyA9IHRlc3RTdHJpbmcuc2xpY2UoMCwgTWF0aC5tYXgoMCwgdGVzdFN0cmluZy5sZW5ndGggLSAyKSk7XG5cdH1cblxuXHRjb25zdCB0cmltQ2hlY2s6IHN0cmluZyA9IHRlc3RTdHJpbmcudHJpbSgpO1xuXHRjb25zdCBmaXJzdENoYXI6IHN0cmluZyA9IHRyaW1DaGVjay5jaGFyQXQoMCk7XG5cdGlmIChmaXJzdENoYXIgPT09IHRyaW1DaGVjay5hdCgtMSkgJiYgKGZpcnN0Q2hhciA9PT0gXCInXCIgfHwgZmlyc3RDaGFyID09PSAnXCInKSkge1xuXHRcdHJldHVybiB0cmltQ2hlY2suc2xpY2UoMSwgMSArIHRyaW1DaGVjay5sZW5ndGggLSAyKTtcblx0fVxuXG5cdHJldHVybiB0ZXN0U3RyaW5nLnRyaW0oKTtcbn07XG5cbi8vIOaNleiOt0NTU+aWh+acrOS4reespuWQiGA8e09QVElPTlMud2lraVRleHRLZXl9PiAgeyBjb250ZW5077yaXCJYWFhcIiB9YOaooeW8j+eahOWtl+espuS4slxuY29uc3QgbHVhR2V0Q29udGVudFRleHQgPSAoaW5wdXRTdHJpbmc6IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdGxldCB3aWtpdGV4dDogc3RyaW5nID0gJyc7XG5cblx0dHJ5IHtcblx0XHRpbnB1dFN0cmluZy5yZXBsYWNlKFxuXHRcdFx0bmV3IFJlZ0V4cChgJHtPUFRJT05TLndpa2lUZXh0S2V5fVxcXFxzKlxcXFx7W15jXFxcXH1dKmNvbnRlbnRcXFxccyo6XFxcXHMqW15cXG5dKmAsICdnJyksXG5cdFx0XHQoc3Vic3RyaW5nOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRcdFx0XHRjb25zdCB0ZW1wVGV4dDogc3RyaW5nID0gKC9jb250ZW50XFxzKjpcXHMqW15cXG5dKi8uZXhlYyhzdWJzdHJpbmcpIHx8IFsnY29udGVudDonXSlbMF1cblx0XHRcdFx0XHQucmVwbGFjZSgvXltcXHM7fV0rfFtcXHM7fV0rJC9nLCAnJylcblx0XHRcdFx0XHQucmVwbGFjZSgvXFxzKmNvbnRlbnRcXHMqOlxccyovLCAnJyk7XG5cblx0XHRcdFx0aWYgKHdpa2l0ZXh0KSB7XG5cdFx0XHRcdFx0d2lraXRleHQgKz0gJ1xcbic7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR3aWtpdGV4dCArPSBsdWFHZXRTdHJpbmcodGVtcFRleHQpO1xuXG5cdFx0XHRcdHJldHVybiBzdWJzdHJpbmc7XG5cdFx0XHR9XG5cdFx0KTtcblx0fSBjYXRjaCB7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cblx0cmV0dXJuIHdpa2l0ZXh0LnRyaW0oKTtcbn07XG5cbi8vIOaNleiOt+Wtl+espuS4suWMlueahOWvueixoeS4reespuWQiGA8e09QVElPTlMud2lraVRleHRLZXl9Pu+8nVhYWGDmiJZgPHtPUFRJT05TLndpa2lUZXh0S2V5fT7vvJpYWFhg5qih5byP55qE5a2X56ym5LiyICjms6jph4rku6Xlhajop5LlrZfnrKbku6Pmm7/vvIzpgb/lhY3ooqvmjZXojrcpXG5jb25zdCBsdWFHZXRPYmpUZXh0ID0gKGlucHV0U3RyaW5nOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRsZXQgd2lraXRleHQ6IHN0cmluZyA9ICcnO1xuXG5cdHRyeSB7XG5cdFx0aW5wdXRTdHJpbmcucmVwbGFjZShcblx0XHRcdG5ldyBSZWdFeHAoYCR7T1BUSU9OUy53aWtpVGV4dEtleX1cXFxccypbXFxcXD06XVxcXFxzKlteXFxuXSpgLCAnZycpLFxuXHRcdFx0KHN1YnN0cmluZzogc3RyaW5nKTogc3RyaW5nID0+IHtcblx0XHRcdFx0Y29uc3QgdGVtcFRleHQ6IHN0cmluZyA9IHN1YnN0cmluZ1xuXHRcdFx0XHRcdC5yZXBsYWNlKC9eW1xcczt9XSt8W1xcczt9XSskL2csICcnKVxuXHRcdFx0XHRcdC5yZXBsYWNlKG5ldyBSZWdFeHAoYCR7T1BUSU9OUy53aWtpVGV4dEtleX1cXFxccypbXFxcXD06XVxcXFxzKmApLCAnJyk7XG5cblx0XHRcdFx0aWYgKHdpa2l0ZXh0KSB7XG5cdFx0XHRcdFx0d2lraXRleHQgKz0gJ1xcbic7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR3aWtpdGV4dCArPSBsdWFHZXRTdHJpbmcodGVtcFRleHQpO1xuXG5cdFx0XHRcdHJldHVybiBzdWJzdHJpbmc7XG5cdFx0XHR9XG5cdFx0KTtcblx0fSBjYXRjaCB7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cblx0cmV0dXJuIHdpa2l0ZXh0LnRyaW0oKTtcbn07XG5cbi8vIOWIhuaekENTU+S4reespuWQiOadoeS7tueahHdpa2l0ZXh0XG5jb25zdCBsdWFHZXRDU1N3aWtpdGV4dCA9IChpbnB1dFN0cmluZzogc3RyaW5nKTogc3RyaW5nID0+IHtcblx0bGV0IHdpa2l0ZXh0OiBzdHJpbmcgPSAnJztcblxuXHRjb25zdCBjc3NUZXh0OiBzdHJpbmcgPVxuXHRcdChpbnB1dFN0cmluZyB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxUZXh0QXJlYUVsZW1lbnQ+KCd0ZXh0YXJlYVtuYW1lPXdwVGV4dGJveDFdJyk/LnZhbHVlKSA/PyAnJztcblx0aWYgKCFjc3NUZXh0LnRyaW0oKSkge1xuXHRcdHJldHVybiAnJztcblx0fVxuXG5cdC8vIOWMuemFjSA8e09QVElPTlMud2lraVRleHRLZXl9PiB7IGNvbnRlbnTvvJpcIlhYWFwiIH0g5qih5byPXG5cdHdpa2l0ZXh0ID0gbHVhQWRkVGV4dCh3aWtpdGV4dCwgbHVhR2V0Q29udGVudFRleHQoY3NzVGV4dCksIHRydWUpO1xuXHQvLyDljLnphY0gLyogPHtPUFRJT05TLndpa2lUZXh0S2V5fT7vvJpYWFggKi8g5qih5byPXG5cdHdpa2l0ZXh0ID0gbHVhQWRkVGV4dCh3aWtpdGV4dCwgbHVhR2V0T2JqVGV4dChjc3NUZXh0KSwgdHJ1ZSk7XG5cblx0cmV0dXJuIHdpa2l0ZXh0LnRyaW0oKTtcbn07XG5cbi8vIOWIhuaekEpTT07kuK3nrKblkIjmnaHku7bnmoR3aWtpdGV4dFxuY29uc3QgbHVhR2V0SlNPTndpa2l0ZXh0ID0gKGlucHV0U3RyaW5nOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRsZXQgd2lraXRleHQ6IHN0cmluZyA9ICcnO1xuXG5cdGNvbnN0IEpTT05UZXh0OiBzdHJpbmcgPVxuXHRcdChpbnB1dFN0cmluZyB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxUZXh0QXJlYUVsZW1lbnQ+KCd0ZXh0YXJlYVtuYW1lPXdwVGV4dGJveDFdJyk/LnZhbHVlKSA/PyAnJztcblx0aWYgKCFKU09OVGV4dC50cmltKCkpIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHR0cnkge1xuXHRcdGNvbnN0IGpzb25EYXRhID0gSlNPTi5wYXJzZShKU09OVGV4dCkgYXMgb2JqZWN0O1xuXHRcdGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGpzb25EYXRhKSkge1xuXHRcdFx0aWYgKG5ldyBSZWdFeHAoT1BUSU9OUy53aWtpVGV4dEtleSkudGVzdChrZXkpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcblx0XHRcdFx0d2lraXRleHQgPSBsdWFBZGRUZXh0KHdpa2l0ZXh0LCB2YWx1ZSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIOiLpemUruWAvOaYr+WvueixoVxuXHRcdFx0aWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycpIHtcblx0XHRcdFx0Zm9yIChjb25zdCBbaywgdl0gb2YgT2JqZWN0LmVudHJpZXModmFsdWUgYXMgb2JqZWN0KSkge1xuXHRcdFx0XHRcdGlmIChuZXcgUmVnRXhwKE9QVElPTlMud2lraVRleHRLZXkpLnRlc3QoaykgJiYgdHlwZW9mIHYgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdFx0XHR3aWtpdGV4dCA9IGx1YUFkZFRleHQod2lraXRleHQsIHYpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fSBjYXRjaCB7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cblx0cmV0dXJuIHdpa2l0ZXh0LnRyaW0oKTtcbn07XG5cbi8vIOWIhuaekEphdmFTY3JpcHTkuK3nrKblkIjmnaHku7bnmoR3aWtpdGV4dFxuY29uc3QgbHVhR2V0SlN3aWtpdGV4dCA9IChpbnB1dFN0cmluZzogc3RyaW5nKTogc3RyaW5nID0+IHtcblx0bGV0IHdpa2l0ZXh0OiBzdHJpbmcgPSAnJztcblxuXHRjb25zdCBqc1RleHQ6IHN0cmluZyA9XG5cdFx0KGlucHV0U3RyaW5nIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTFRleHRBcmVhRWxlbWVudD4oJ3RleHRhcmVhW25hbWU9d3BUZXh0Ym94MV0nKT8udmFsdWUpID8/ICcnO1xuXHRpZiAoIWpzVGV4dC50cmltKCkpIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHR3aWtpdGV4dCA9IGx1YUFkZFRleHQod2lraXRleHQsIGx1YUdldE9ialRleHQoanNUZXh0KSwgdHJ1ZSk7XG5cblx0cmV0dXJuIHdpa2l0ZXh0LnRyaW0oKTtcbn07XG5cbmV4cG9ydCB7bHVhR2V0Q1NTd2lraXRleHQsIGx1YUdldEpTT053aWtpdGV4dCwgbHVhR2V0SlN3aWtpdGV4dH07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBTcGVjaWFsV2lraXRleHQvJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJjb25zdCB7d2dVc2VyTGFuZ3VhZ2UsIHdnVXNlclZhcmlhbnR9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5jb25zdCBnZXRMYW5ndWFnZSA9ICgpOiBzdHJpbmcgPT4ge1xuXHRjb25zdCBsYW5nOiBzdHJpbmcgPSB3Z1VzZXJMYW5ndWFnZTtcblxuXHRpZiAobGFuZy5pbmNsdWRlcygnemgnKSkge1xuXHRcdHJldHVybiB3Z1VzZXJWYXJpYW50IGFzIHN0cmluZztcblx0fVxuXG5cdHJldHVybiBsYW5nO1xufTtcblxuZXhwb3J0IHtnZXRMYW5ndWFnZX07XG4iLCAiaW1wb3J0IHtsb2FkaW5nRmFpbE5vdGljZSwgcmVtb3ZlTG9hZGluZ05vdGljZX0gZnJvbSAnLi4vbm90aWNlJztcbmltcG9ydCB7YWRkUGFyc2VkV2lraXRleHR9IGZyb20gJy4uL3V0aWwvYWRkUGFyc2VkV2lraXRleHQnO1xuaW1wb3J0IHthcGl9IGZyb20gJy4uL2FwaSc7XG5pbXBvcnQge2dldExhbmd1YWdlfSBmcm9tICcuLi91dGlsL2dldExhbmd1YWdlJztcblxuY29uc3Qge3NraW59ID0gbXcuY29uZmlnLmdldCgpO1xuXG4vLyDliqDlhaXpooTop4jlhoXlrrlcbmNvbnN0IG13QWRkV2lraVRleHQgPSBhc3luYyAod2lraXRleHQ6IHN0cmluZywgcGFnZU5hbWU6IHN0cmluZywgaXNQcmV2aWV3OiBib29sZWFuKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdGlmICh3aWtpdGV4dC50cmltKCkpIHtcblx0XHRjb25zdCBwYXJhbXM6IEFwaVBhcnNlUGFyYW1zID0ge1xuXHRcdFx0YWN0aW9uOiAncGFyc2UnLFxuXHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHQvLyDpgb/lhY3lhoXlrrnph43lpI1cblx0XHRcdHRpdGxlOiBwYWdlTmFtZSxcblx0XHRcdGNvbnRlbnRtb2RlbDogJ3dpa2l0ZXh0Jyxcblx0XHRcdHRleHQ6IHdpa2l0ZXh0LFxuXHRcdFx0cHJvcDogJ3RleHQnLFxuXHRcdFx0dXNlbGFuZzogZ2V0TGFuZ3VhZ2UoKSxcblx0XHRcdHVzZXNraW46IHNraW4sXG5cdFx0fTtcblx0XHRpZiAoaXNQcmV2aWV3KSB7XG5cdFx0XHRwYXJhbXMuZGlzYWJsZWVkaXRzZWN0aW9uID0gdHJ1ZTtcblx0XHRcdHBhcmFtcy5wcmV2aWV3ID0gdHJ1ZTtcblx0XHR9XG5cblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgZGF0YSA9IGF3YWl0IGFwaS5nZXQocGFyYW1zKTtcblx0XHRcdGlmICghZGF0YT8uWydwYXJzZSddPy50ZXh0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgcGFyc2VkV2lraXRleHQ6IHN0cmluZyA9IChkYXRhWydwYXJzZSddLnRleHQgYXMgc3RyaW5nKS50cmltKCk7XG5cblx0XHRcdGlmIChwYXJzZWRXaWtpdGV4dCkge1xuXHRcdFx0XHRhZGRQYXJzZWRXaWtpdGV4dChwYXJzZWRXaWtpdGV4dCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZW1vdmVMb2FkaW5nTm90aWNlKCk7XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHRsb2FkaW5nRmFpbE5vdGljZSgpO1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRyZW1vdmVMb2FkaW5nTm90aWNlKCk7XG5cdH1cbn07XG5cbi8vIOWKoOWFpemihOiniOeahEx1YeWGheWuuVxuY29uc3QgbXdBZGRMdWFUZXh0ID0gYXN5bmMgKFxuXHR3aWtpdGV4dDogc3RyaW5nLFxuXHRwYWdlTmFtZTogc3RyaW5nLFxuXHRpc1ByZXZpZXc6IGJvb2xlYW4sXG5cdGNhbGxCYWNrPzogKGFyZzogc3RyaW5nKSA9PiBKUXVlcnkgfCBIVE1MRWxlbWVudCB8IHZvaWRcbikgPT4ge1xuXHRjb25zdCB0ZW1wTW9kdWxlTmFtZTogc3RyaW5nID0gJ0FkZFRleHQvVGVtcC9Nb2R1bGUvRGF0YS5sdWEnO1xuXHRjb25zdCBtb2R1bGVDYWxsOiB7XG5cdFx0d2lraXRleHQ6IHN0cmluZztcblx0XHRwYWdlTmFtZTogc3RyaW5nO1xuXHR9ID0ge1xuXHRcdHdpa2l0ZXh0OiAnI2ludm9rZTonLFxuXHRcdC8vIOWIhuW8gOadpe+8jOmBv+WFjeiiq+WIhuWIsFtbOkNhdGVnb3J5OuacieiEmuacrOmUmeivr+eahOmhtemdol1dXG5cdFx0cGFnZU5hbWU6ICdNb2R1bGU6Jyxcblx0fTtcblxuXHRpZiAod2lraXRleHQudHJpbSgpKSB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHBhcmFtczogQXBpUGFyc2VQYXJhbXMgPSB7XG5cdFx0XHRcdGFjdGlvbjogJ3BhcnNlJyxcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdFx0dGl0bGU6IHBhZ2VOYW1lLFxuXHRcdFx0XHRjb250ZW50bW9kZWw6ICd3aWtpdGV4dCcsXG5cdFx0XHRcdHRlbXBsYXRlc2FuZGJveHRpdGxlOiBtb2R1bGVDYWxsLnBhZ2VOYW1lICsgdGVtcE1vZHVsZU5hbWUsXG5cdFx0XHRcdC8vIOWIm+W7uuS4tOaXtkx1YSBNb2R1bGVcblx0XHRcdFx0dGVtcGxhdGVzYW5kYm94dGV4dDogYHJldHVybiB7XG5cdG1haW4gPSBmdW5jdGlvbigpXG5cdFx0eHBjYWxsKFxuXHRcdFx0ZnVuY3Rpb24oKVxuXHRcdFx0XHQke3dpa2l0ZXh0fVxuXHRcdFx0ZW5kLFxuXHRcdFx0ZnVuY3Rpb24oKVxuXHRcdFx0ZW5kXG5cdFx0KVxuXHRcdGxvY2FsIG1vZHVsZVdpa2l0ZXh0ID0gcGFja2FnZS5sb2FkZWRbXCJNb2R1bGU6TW9kdWxlIHdpa2l0ZXh0XCJdXG5cdFx0aWYgbW9kdWxlV2lraXRleHQgdGhlblxuXHRcdFx0bG9jYWwgd2lraXRleHQgPSBtb2R1bGVXaWtpdGV4dC5tYWluKClcblx0XHRcdGlmIG13LnRleHQudHJpbSh3aWtpdGV4dCkgfj0gXCJcIiB0aGVuXG5cdFx0XHRcdHJldHVybiBtdy5nZXRDdXJyZW50RnJhbWUoKTpwcmVwcm9jZXNzKG1vZHVsZVdpa2l0ZXh0Lm1haW4oKSlcblx0XHRcdGVuZFxuXHRcdGVuZFxuXHRcdHJldHVybiBcIlwiXG5cdGVuZFxufWAsXG5cdFx0XHRcdHRlbXBsYXRlc2FuZGJveGNvbnRlbnRtb2RlbDogJ1NjcmlidW50bycsXG5cdFx0XHRcdHRlbXBsYXRlc2FuZGJveGNvbnRlbnRmb3JtYXQ6ICd0ZXh0L3BsYWluJyxcblx0XHRcdFx0dGV4dDogYHt7JHttb2R1bGVDYWxsLndpa2l0ZXh0fSR7dGVtcE1vZHVsZU5hbWV9fG1haW59fWAsXG5cdFx0XHRcdHByb3A6ICd0ZXh0Jyxcblx0XHRcdFx0dXNlbGFuZzogZ2V0TGFuZ3VhZ2UoKSxcblx0XHRcdFx0dXNlc2tpbjogc2tpbixcblx0XHRcdH07XG5cdFx0XHRpZiAoaXNQcmV2aWV3KSB7XG5cdFx0XHRcdHBhcmFtcy5wcmV2aWV3ID0gdHJ1ZTtcblx0XHRcdFx0cGFyYW1zLmRpc2FibGVlZGl0c2VjdGlvbiA9IHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGRhdGEgPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cdFx0XHRpZiAoIWRhdGE/LlsncGFyc2UnXT8udGV4dCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHBhcnNlZFdpa2l0ZXh0OiBzdHJpbmcgPSAoZGF0YVsncGFyc2UnXS50ZXh0IGFzIHN0cmluZykudHJpbSgpO1xuXG5cdFx0XHRpZiAoIXBhcnNlZFdpa2l0ZXh0KSB7XG5cdFx0XHRcdHJlbW92ZUxvYWRpbmdOb3RpY2UoKTtcblx0XHRcdFx0Ly8g6Iul5Zyo6L+Z5Liq5Li05pe25qih5Z2X5Lit5Ye66ZSZ5YiZ5Y+W5raIXG5cdFx0XHR9IGVsc2UgaWYgKCQocGFyc2VkV2lraXRleHQpLmZpbmQoJy5zY3JpYnVudG8tZXJyb3InKS50ZXh0KCkuc2VhcmNoKHRlbXBNb2R1bGVOYW1lKSkge1xuXHRcdFx0XHRyZW1vdmVMb2FkaW5nTm90aWNlKCk7XG5cdFx0XHR9IGVsc2UgaWYgKHR5cGVvZiBjYWxsQmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRjYWxsQmFjayhwYXJzZWRXaWtpdGV4dCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRhZGRQYXJzZWRXaWtpdGV4dChwYXJzZWRXaWtpdGV4dCk7XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHRsb2FkaW5nRmFpbE5vdGljZSgpO1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRyZW1vdmVMb2FkaW5nTm90aWNlKCk7XG5cdH1cbn07XG5cbmV4cG9ydCB7bXdBZGRMdWFUZXh0LCBtd0FkZFdpa2lUZXh0fTtcbiIsICJpbXBvcnQge2x1YUdldENTU3dpa2l0ZXh0LCBsdWFHZXRKU09Od2lraXRleHQsIGx1YUdldEpTd2lraXRleHR9IGZyb20gJy4vbHVhR2V0VGV4dCc7XG5cbmNvbnN0IHt3Z1BhZ2VDb250ZW50TW9kZWx9ID0gbXcuY29uZmlnLmdldCgpO1xuXG4vLyDliKTmlq3mmK/lkKbkuLpMdWFcbmNvbnN0IGx1YUNoZWNrID0gKGlucHV0U3RyaW5nOiBzdHJpbmcgPSAnJywgY29udGVudE1vZGVsOiBzdHJpbmcgPSB3Z1BhZ2VDb250ZW50TW9kZWwpOiBzdHJpbmcgPT4ge1xuXHQvLyDmoLnmja7pobXpnaLlhoXlrrnmqKHlnovpgInnlKjpgILlvZPnmoTop6PmnpDmqKHlvI9cblx0c3dpdGNoIChjb250ZW50TW9kZWwudG9Mb3dlckNhc2UoKSkge1xuXHRcdGNhc2UgJ2pzb24nOlxuXHRcdFx0cmV0dXJuIGx1YUdldEpTT053aWtpdGV4dChpbnB1dFN0cmluZyk7XG5cdFx0Y2FzZSAnanMnOlxuXHRcdGNhc2UgJ2phdmFzY3JpcHQnOlxuXHRcdGNhc2UgJ3RleHQnOlxuXHRcdFx0cmV0dXJuIGx1YUdldEpTd2lraXRleHQoaW5wdXRTdHJpbmcpO1xuXHRcdGNhc2UgJ2Nzcyc6XG5cdFx0Y2FzZSAnc2FuaXRpemVkLWNzcyc6XG5cdFx0XHRyZXR1cm4gbHVhR2V0Q1NTd2lraXRleHQoaW5wdXRTdHJpbmcpO1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gJyc7XG5cdH1cbn07XG5cbmV4cG9ydCB7bHVhQ2hlY2t9O1xuIiwgImltcG9ydCB7YWRkUGFyc2VkV2lraXRleHR9IGZyb20gJy4uL3V0aWwvYWRkUGFyc2VkV2lraXRleHQnO1xuaW1wb3J0IHthcGl9IGZyb20gJy4uL2FwaSc7XG5pbXBvcnQge2NoZWNrRWxlbWVudEV4aXN0fSBmcm9tICcuLi91dGlsL2NoZWNrRWxlbWVudEV4aXN0JztcbmltcG9ydCB7Z2V0TGFuZ3VhZ2V9IGZyb20gJy4uL3V0aWwvZ2V0TGFuZ3VhZ2UnO1xuaW1wb3J0IHtsdWFDaGVja30gZnJvbSAnLi4vbHVhL2x1YUNoZWNrJztcbmltcG9ydCB7bXdBZGRXaWtpVGV4dH0gZnJvbSAnLi9td0FkZFRleHQnO1xuaW1wb3J0IHtyZW1vdmVMb2FkaW5nTm90aWNlfSBmcm9tICcuLi9ub3RpY2UnO1xuXG5jb25zdCB7c2tpbiwgd2dSZXZpc2lvbklkfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuLy8g5Yqg5YWl57yW6L6R5o+Q56S677yI6Iul5a2Y5Zyo77yJXG5jb25zdCBtd0FwcGx5Tm90aWNlID0gYXN5bmMgKGN1cnJlbnRQYWdlTmFtZTogc3RyaW5nLCBwYWdlU3ViTmFtZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdHRyeSB7XG5cdFx0Y29uc3QgcGFyYW1zOiBBcGlQYXJzZVBhcmFtcyA9IHtcblx0XHRcdGFjdGlvbjogJ3BhcnNlJyxcblx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0Ly8gZ2V0IHRoZSBvcmlnaW5hbCB3aWtpdGV4dCBjb250ZW50IG9mIGEgcGFnZVxuXHRcdFx0dGl0bGU6IGN1cnJlbnRQYWdlTmFtZSArIHBhZ2VTdWJOYW1lLFxuXHRcdFx0dGV4dDogYHt7I2ludm9rZTpTcGVjaWFsIHdpa2l0ZXh0L1RlbXBsYXRlfGdldE5vdGljZXN8JHtjdXJyZW50UGFnZU5hbWV9fCR7cGFnZVN1Yk5hbWV9fX1gLFxuXHRcdFx0cHJvcDogJ3RleHQnLFxuXHRcdFx0dXNlbGFuZzogZ2V0TGFuZ3VhZ2UoKSxcblx0XHRcdHVzZXNraW46IHNraW4sXG5cdFx0XHRzbWF4YWdlOiA2MDAsXG5cdFx0XHRtYXhhZ2U6IDYwMCxcblx0XHR9O1xuXG5cdFx0Y29uc3QgZGF0YSA9IGF3YWl0IGFwaS5nZXQocGFyYW1zKTtcblx0XHRpZiAoIWRhdGE/LlsncGFyc2UnXT8udGV4dCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IGh0bWwgPSBkYXRhWydwYXJzZSddLnRleHQgYXMgc3RyaW5nO1xuXHRcdGlmICgkKGh0bWwpLnRleHQoKS50cmltKCkpIHtcblx0XHRcdGFkZFBhcnNlZFdpa2l0ZXh0KGh0bWwpO1xuXHRcdH1cblx0fSBjYXRjaCB7fVxufTtcblxuLy8g5LuO6aG16Z2i5b2T5YmN5Y6G5Y+y54mI5pys5Y+W5Ye6IDx7T1BUSU9OUy53aWtpVGV4dEtleX0+XG5jb25zdCBtd0FwcGx5UmV2aXNpb24gPSBhc3luYyAoY3VycmVudFBhZ2VOYW1lOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0dHJ5IHtcblx0XHRjb25zdCBwYXJhbXM6IEFwaVBhcnNlUGFyYW1zID0ge1xuXHRcdFx0YWN0aW9uOiAncGFyc2UnLFxuXHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHQvLyBnZXQgdGhlIG9yaWdpbmFsIHdpa2l0ZXh0IGNvbnRlbnQgb2YgYSBwYWdlXG5cdFx0XHRvbGRpZDogd2dSZXZpc2lvbklkLFxuXHRcdFx0cHJvcDogJ3dpa2l0ZXh0Jyxcblx0XHRcdHNtYXhhZ2U6IDYwMCxcblx0XHRcdG1heGFnZTogNjAwLFxuXHRcdH07XG5cblx0XHRjb25zdCBkYXRhID0gYXdhaXQgYXBpLmdldChwYXJhbXMpO1xuXHRcdGlmICghZGF0YT8uWydwYXJzZSddPy53aWtpdGV4dCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGxldCBwYWdlQ29udGVudDogc3RyaW5nID0gbHVhQ2hlY2soKGRhdGFbJ3BhcnNlJ10ud2lraXRleHQgYXMgc3RyaW5nKS50cmltKCkpO1xuXHRcdHBhZ2VDb250ZW50ID1cblx0XHRcdChjaGVja0VsZW1lbnRFeGlzdCgnI213LWNsZWFyeW91cmNhY2hlJylcblx0XHRcdFx0PyAne3sjaW52b2tlOlNwZWNpYWwgd2lraXRleHQvVGVtcGxhdGV8aW50fGNsZWFyeW91cmNhY2hlfX0nXG5cdFx0XHRcdDogJycpICsgcGFnZUNvbnRlbnQ7XG5cblx0XHRpZiAocGFnZUNvbnRlbnQudHJpbSgpKSB7XG5cdFx0XHR2b2lkIG13QWRkV2lraVRleHQocGFnZUNvbnRlbnQsIGN1cnJlbnRQYWdlTmFtZSwgdHJ1ZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZUxvYWRpbmdOb3RpY2UoKTtcblx0XHR9XG5cdH0gY2F0Y2gge1xuXHRcdHJlbW92ZUxvYWRpbmdOb3RpY2UoKTtcblx0fVxufTtcblxuZXhwb3J0IHttd0FwcGx5Tm90aWNlLCBtd0FwcGx5UmV2aXNpb259O1xuIiwgImltcG9ydCB7Z2VuZXJhdGVBcnJheX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYWxsTXdDb25maWc6IFJldHVyblR5cGU8dHlwZW9mIG13LmNvbmZpZy5nZXQ+ID0gbXcuY29uZmlnLmdldCgpO1xuXG4vLyDmo4Dmn6VNZWRpYVdpa2nnmoTorr7nva5cbmNvbnN0IGNoZWNrTXdDb25maWcgPSAoY29uZmlnS2V5OiBzdHJpbmcsIGV4cGVjdENvbmZpZzogc3RyaW5nIHwgc3RyaW5nW10pOiBib29sZWFuID0+IHtcblx0bGV0IG13Q29uZmlnOiB1bmtub3duID0gYWxsTXdDb25maWdbY29uZmlnS2V5XTtcblx0aWYgKCFtd0NvbmZpZykge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tYmFzZS10by1zdHJpbmdcblx0bXdDb25maWcgPSBTdHJpbmcobXdDb25maWcpLnRvTG93ZXJDYXNlKCkudHJpbSgpO1xuXHRpZiAoIW13Q29uZmlnKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0cmV0dXJuIGdlbmVyYXRlQXJyYXkoZXhwZWN0Q29uZmlnKS5pbmNsdWRlcyhtd0NvbmZpZyBhcyBzdHJpbmcpO1xufTtcblxuZXhwb3J0IHtjaGVja013Q29uZmlnfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uLy4uL29wdGlvbnMuanNvbic7XG5cbi8vIOajgOafpeaYr+WQpuaciemihOiniOeahOW/heimgeaAp1xuY29uc3QgY2hlY2tOZWVkUHJldmlldyA9ICgpOiBib29sZWFuID0+IHtcblx0cmV0dXJuIGRvY3VtZW50LmJvZHkuaW5uZXJIVE1MLnNlYXJjaChPUFRJT05TLndpa2lUZXh0S2V5KSA+IC0xO1xufTtcblxuZXhwb3J0IHtjaGVja05lZWRQcmV2aWV3fTtcbiIsICJpbXBvcnQge2FkZExvYWRpbmdOb3RpY2UsIG5vdGljZUxvYWRpbmdFbGVtZW50LCByZW1vdmVMb2FkaW5nTm90aWNlfSBmcm9tICcuLi9ub3RpY2UnO1xuaW1wb3J0IHtsdWFHZXRDU1N3aWtpdGV4dCwgbHVhR2V0SlNPTndpa2l0ZXh0fSBmcm9tICcuLi9sdWEvbHVhR2V0VGV4dCc7XG5pbXBvcnQge213QWRkTHVhVGV4dCwgbXdBZGRXaWtpVGV4dH0gZnJvbSAnLi9td0FkZFRleHQnO1xuaW1wb3J0IHttd0FwcGx5Tm90aWNlLCBtd0FwcGx5UmV2aXNpb259IGZyb20gJy4vbXdBcHBseSc7XG5pbXBvcnQge2NoZWNrRWxlbWVudEV4aXN0fSBmcm9tICcuLi91dGlsL2NoZWNrRWxlbWVudEV4aXN0JztcbmltcG9ydCB7Y2hlY2tNd0NvbmZpZ30gZnJvbSAnLi4vdXRpbC9jaGVja013Q29uZmlnJztcbmltcG9ydCB7Y2hlY2tOZWVkUHJldmlld30gZnJvbSAnLi4vdXRpbC9jaGVja05lZWRQcmV2aWV3JztcbmltcG9ydCB7bHVhQ2hlY2t9IGZyb20gJy4uL2x1YS9sdWFDaGVjayc7XG5cbmNvbnN0IHt3Z0Nhbm9uaWNhbE5hbWVzcGFjZSwgd2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUsIHdnUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXG4vLyDnu5npobXpnaLmt7vliqDpooTop4hcbmNvbnN0IG13QWRkUHJldmlldyA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0Ly8g6aKE6KeI5qih5byP5Y+q6YCC55So5LqO5Lul5LiL6aG16Z2i5YaF5a655qih5Z6LXG5cdGlmIChjaGVja013Q29uZmlnKCd3Z1BhZ2VDb250ZW50TW9kZWwnLCBbJ2phdmFzY3JpcHQnLCAnanMnLCAnanNvbicsICd0ZXh0JywgJ2NzcycsICdzYW5pdGl6ZWQtY3NzJ10pKSB7XG5cdFx0Ly8g5qih5byPMe+8mumhtemdoumihOiniFxuXHRcdGlmIChjaGVja0VsZW1lbnRFeGlzdCgnLnByZXZpZXdub3RlJykpIHtcblx0XHRcdC8vIOajgOafpeaYr+WQpuS4uumihOiniOaooeW8j1xuXHRcdFx0Ly8g6aKE6KeI5pyJ5Y+v6IO95piv5Zyo6aKE6KeI5YW25LuW5p2h55uuXG5cdFx0XHRjb25zdCBwYXRoUGF0aDogc3RyaW5nID0gZGVjb2RlVVJJKG13LnV0aWwuZ2V0VXJsKHdnUGFnZU5hbWUpKS5yZXBsYWNlKFxuXHRcdFx0XHRuZXcgUmVnRXhwKGBeXFxcXC8/JHttdy51dGlsLmdldFVybCgnJykubWF0Y2goL1thLXpdKy8pPy5bMF0gPz8gJyd9XFxcXC9gKSxcblx0XHRcdFx0Jydcblx0XHRcdCk7XG5cblx0XHRcdC8vIOiLpemihOiniOeahOmhtemdouW5tumdnuacrOi6q++8jOWImeS4jeaYvuekuumihOiniFxuXHRcdFx0aWYgKHBhdGhQYXRoICE9PSB3Z1BhZ2VOYW1lKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3Qgd2lraXRleHQ6IHN0cmluZyA9IGx1YUNoZWNrKCk7XG5cdFx0XHRpZiAod2lraXRleHQpIHtcblx0XHRcdFx0Ly8g6Iul6Kej5p6Q57uT5p6c6Z2e56m65omN5pS+572u6aKE6KeIXG5cdFx0XHRcdGFkZExvYWRpbmdOb3RpY2UoKTsgLy8g5pS+572u5o+Q56S677yM5o+Q56S65L2/55So6ICF562J5b6FQUpBWFxuXHRcdFx0XHR2b2lkIG13QWRkV2lraVRleHQod2lraXRleHQsIHdnUGFnZU5hbWUsIHRydWUpOyAvLyDoi6Xlj5blvpcgX2FkZFRleHQg5YiZ5pi+56S66aKE6KeIXG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmICghY2hlY2tFbGVtZW50RXhpc3QoJy5tdy1fYWRkVGV4dC1jb250ZW50JykgJiYgY2hlY2tNd0NvbmZpZygnd2dBY3Rpb24nLCAndmlldycpKSB7XG5cdFx0XHQvLyDmqKHlvI8y77ya5LiN5pSv5oyB5pi+56S655qE54m55q6K6aG16Z2iXG5cdFx0XHQvLyDnu4/mn6XvvIzkuI3mraLmmK/mqKHmnb/moLflvI/vvIzmiYDmnInmnKrltYzlhaUnI213LWNsZWFyeW91cmNhY2hlJ+eahOmhtemdoueahuaXoOazleato+W4uOaYvuekulxuXHRcdFx0aWYgKCFjaGVja05lZWRQcmV2aWV3KCkpIHtcblx0XHRcdFx0cmV0dXJuOyAvLyDmsqHmnInpooTop4jlv4XopoHml7bvvIznm7TmjqXlgZzmraLnqIvluo/vvIzkuI3nu6fnu63liKTmlq3vvIzku6Xmj5Dpq5jmlYjnjodcblx0XHRcdH1cblxuXHRcdFx0Ly8g6Iul5bey5pyJI213LWNsZWFyeW91cmNhY2hl5YiZ5YWI5riF5o6J77yM5ZCm5YiZ5Lya5Ye6546w5Lik5LiqTWVkaWFXaWtpOkNsZWFyeW91cmNhY2hlXG5cdFx0XHQkYm9keS5maW5kKCcjbXctY2xlYXJ5b3VyY2FjaGUnKS5odG1sKCcnKTtcblxuXHRcdFx0aWYgKCFjaGVja0VsZW1lbnRFeGlzdCgndGV4dGFyZWFbbmFtZT13cFRleHRib3gxXScpKSB7XG5cdFx0XHRcdC8vIOmdnue8lui+keaooeW8j+aJjeaJp+ihjCAo6aKE6KeI5L2/55So5LiK5pa555qEaWbljLrlnZcpXG5cdFx0XHRcdGFkZExvYWRpbmdOb3RpY2UoKTsgLy8g5pS+572u5o+Q56S677yM5o+Q56S65L2/55So6ICF562J5b6FQUpBWFxuXHRcdFx0XHR2b2lkIG13QXBwbHlSZXZpc2lvbih3Z1BhZ2VOYW1lKTsgLy8g5Li65LqG6K6p5Y6G5Y+y54mI5pys5q2j5bi45pi+56S677yM5L2/55Sod2dSZXZpc2lvbklk5Y+W5b6X5YaF5a65XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmIChjaGVja0VsZW1lbnRFeGlzdCgnI213LXJldmlzaW9uLWluZm8nKSAmJiBjaGVja013Q29uZmlnKCd3Z0FjdGlvbicsICd2aWV3JykpIHtcblx0XHRcdC8vIOaooeW8jzPvvJrpobXpnaLljoblj7LniYjmnKzmo4Dop4bvvJrlpoLpnIDlpI3mn6XnmoTpobnnm67kuLrpobXpnaLljoblj7LniYjmnKzvvIzmnKzlt6Xlhbfmj5DkvpvpobXpnaLljoblj7LniYjmnKzlhoXlrrnmmL7npLrmlK/mjIFcblx0XHRcdC8vIOacieW1jOWFpScjbXctY2xlYXJ5b3VyY2FjaGUn55qE6aG16Z2i55qE5Y6G5Y+y54mI5pys5Lya5Y+q6IO95pi+56S65pyA5paw54mI55qEIF9hZGRUZXh0IOWboOatpOaJp+ihjOS/ruato1xuXHRcdFx0aWYgKCFjaGVja0VsZW1lbnRFeGlzdCgndGV4dGFyZWFbbmFtZT13cFRleHRib3gxXScpKSB7XG5cdFx0XHRcdC8vIOmdnue8lui+keaooeW8j+aJjeaJp+ihjCAo6aKE6KeI5L2/55So5LiK5pa555qEaWbljLrlnZcpXG5cdFx0XHRcdCRib2R5LmZpbmQoJyNtdy1jbGVhcnlvdXJjYWNoZScpLmh0bWwobm90aWNlTG9hZGluZ0VsZW1lbnQpOyAvLyDlt67lvILmqKHlvI/vvIjlkKvmo4DpmIXkv67orqLniYjmnKzliKDpmaTvvInnmoTmj5LlhaXngrnkuI3lkIxcblx0XHRcdFx0dm9pZCBtd0FwcGx5UmV2aXNpb24od2dQYWdlTmFtZSk7IC8vIOS4uuS6huiuqeeJueWumueJiOacrOato+W4uOaYvuekuu+8jOS9v+eUqHdnUmV2aXNpb25JZOWPluW+l+WGheWuuVxuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmVMb2FkaW5nTm90aWNlKCk7XG5cdFx0fVxuXHR9IGVsc2UgaWYgKGNoZWNrTXdDb25maWcoJ3dnUGFnZUNvbnRlbnRNb2RlbCcsIFsnc2NyaWJ1bnRvJywgJ2x1YSddKSkge1xuXHRcdC8vIOaooeWdl+mihOiniOWKn+iDvVxuXHRcdGlmICghY2hlY2tOZWVkUHJldmlldygpKSB7XG5cdFx0XHRyZXR1cm47IC8vIOayoeaciemihOiniOW/heimgeaXtu+8jOebtOaOpeWBnOatoueoi+W6j++8jOS4jee7p+e7reWIpOaWre+8jOS7peaPkOmrmOaViOeOh1xuXHRcdH1cblxuXHRcdGlmIChcblx0XHRcdGNoZWNrRWxlbWVudEV4aXN0KCd0ZXh0YXJlYVtuYW1lPXdwVGV4dGJveDFdJykgJiZcblx0XHRcdGNoZWNrRWxlbWVudEV4aXN0KCd0YWJsZS5kaWZmJykgJiZcblx0XHRcdCFjaGVja0VsZW1lbnRFeGlzdCgnLnByZXZpZXdub3RlJykgJiZcblx0XHRcdCFjaGVja013Q29uZmlnKCd3Z0FjdGlvbicsICd2aWV3Jylcblx0XHQpIHtcblx0XHRcdCQobm90aWNlTG9hZGluZ0VsZW1lbnQpLmluc2VydEFmdGVyKCcjd2lraURpZmYnKTtcblx0XHRcdHZvaWQgbXdBZGRMdWFUZXh0KFxuXHRcdFx0XHQoJGJvZHkuZmluZCgndGV4dGFyZWFbbmFtZT13cFRleHRib3gxXScpLnZhbCgpIGFzIHN0cmluZyB8IHVuZGVmaW5lZCkgPz8gJycsXG5cdFx0XHRcdHdnUGFnZU5hbWUsXG5cdFx0XHRcdHRydWVcblx0XHRcdCk7XG5cdFx0fVxuXHR9IGVsc2UgaWYgKGNoZWNrRWxlbWVudEV4aXN0KCcubXctdW5kZWxldGUtcmV2aXNpb24nKSkge1xuXHRcdC8vIOaooeW8jzTvvJrlt7LliKDpobXpnaLpooTop4hcblx0XHQvLyDlt7LliKDlhoXlrrnpobXpnaLmmK/nibnmrorpobXpnaLvvIzml6Dms5XnlKjluLjop4TmlrnlvI/liKTmlq3pobXpnaLlhoXlrrnmqKHlnotcblx0XHRpZiAoIWNoZWNrTmVlZFByZXZpZXcoKSkge1xuXHRcdFx0cmV0dXJuOyAvLyDmsqHmnInpooTop4jlv4XopoHml7bvvIznm7TmjqXlgZzmraLnqIvluo/vvIzkuI3nu6fnu63liKTmlq3vvIzku6Xmj5Dpq5jmlYjnjodcblx0XHR9XG5cblx0XHRpZiAoY2hlY2tFbGVtZW50RXhpc3QoWycubXctaGlnaGxpZ2h0JywgJ3ByZScsICcubXctanNvbiddKSkge1xuXHRcdFx0Ly8g56Gu6K6k5q2j5Zyo6aKE6KeI5bey5Yig5YaF5a65XG5cdFx0XHRjb25zdCB0ZXh0YXJlYUNvbnRlbnQ6IHN0cmluZyA9ICRib2R5LmZpbmQoJ3RleHRhcmVhJykudmFsKCkgPz8gJyc7IC8vIOWwneivleWPluW+l+W3suWIoOWGheWuuea6kOS7o+eggVxuXG5cdFx0XHRsZXQgd2lraXRleHQ6IHN0cmluZyA9IGx1YUdldEpTT053aWtpdGV4dCh0ZXh0YXJlYUNvbnRlbnQpO1xuXHRcdFx0d2lraXRleHQgfHw9IGx1YUdldENTU3dpa2l0ZXh0KHRleHRhcmVhQ29udGVudCk7XG5cblx0XHRcdGlmICh3aWtpdGV4dCkge1xuXHRcdFx0XHQvLyDoi6Xlj5blvpcgX2FkZFRleHQg5YiZ5pi+56S66aKE6KeIXG5cdFx0XHRcdGFkZExvYWRpbmdOb3RpY2UoKTtcblx0XHRcdFx0dm9pZCBtd0FkZFdpa2lUZXh0KHdpa2l0ZXh0LCBtdy5jb25maWcuZ2V0KCd3Z1JlbGV2YW50UGFnZU5hbWUnKSwgdHJ1ZSk7XG5cdFx0XHR9IGVsc2UgaWYgKC9tb2R1bGVbIF9dd2lraXRleHQuKl9hZGR0ZXh0L2kudGVzdCgkYm9keS5maW5kKCcubXctcGFyc2VyLW91dHB1dCcpLnRleHQoKSkpIHtcblx0XHRcdFx0Ly8g5bCd6K+VTHVh6Kej5p6QXG5cdFx0XHRcdC8vIOacrOWKn+iDveebruWJjea1i+ivleato+W4uOi/kOS9nFxuXHRcdFx0XHQvLyDoi6Xlk6rlpKnpooTop4jlj4jlpLHmlYjvvIzor7flj5bmtojms6jph4rkuIvmlrnpgqPooYxcblx0XHRcdFx0Ly8gbXdBZGRMdWFUZXh0KHRleHRhcmVhQ29udGVudCwgbXcuY29uZmlnLmdldChcIndnUmVsZXZhbnRQYWdlTmFtZVwiKSwgdHJ1ZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9IGVsc2UgaWYgKCFjaGVja0VsZW1lbnRFeGlzdCgnLm13LWVkaXRub3RpY2UnKSAmJiBjaGVja013Q29uZmlnKCd3Z0Nhbm9uaWNhbE5hbWVzcGFjZScsICdzcGVjaWFsJykpIHtcblx0XHQvLyDoi6XnibnmrorpobXpnaLnvLrkuY/nvJbovpHmj5DnpLrvvIzliJnooaXkuIrnvJbovpHmj5DnpLogKOiLpeWtmOWcqClcblx0XHRjb25zdCBwYWdlU3ViTmFtZTogc3RyaW5nID0gd2dQYWdlTmFtZS5yZXBsYWNlKC9zcGVjaWFsOlteL10rL2ksICcnKTtcblx0XHRpZiAod2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUpIHtcblx0XHRcdGNvbnN0IGZ1bGxQYWdlTmFtZTogc3RyaW5nID0gYCR7d2dDYW5vbmljYWxOYW1lc3BhY2V9OiR7d2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWV9YDtcblx0XHRcdHZvaWQgbXdBcHBseU5vdGljZShmdWxsUGFnZU5hbWUsIHBhZ2VTdWJOYW1lKTtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0cmVtb3ZlTG9hZGluZ05vdGljZSgpOyAvLyDpg73kuI3mmK/nmoTmg4XlhrXliJnkuI3mmL7npLrpooTop4hcblx0fVxufTtcblxuZXhwb3J0IHttd0FkZFByZXZpZXd9O1xuIiwgImltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5pbXBvcnQge2NoZWNrTmVlZFByZXZpZXd9IGZyb20gJy4vdXRpbC9jaGVja05lZWRQcmV2aWV3JztcbmltcG9ydCB7bHVhQ2hlY2t9IGZyb20gJy4vbHVhL2x1YUNoZWNrJztcbmltcG9ydCB7bXdBZGRMdWFUZXh0fSBmcm9tICcuL213L213QWRkVGV4dCc7XG5pbXBvcnQge25vdGljZUxvYWRpbmdFbGVtZW50fSBmcm9tICcuL25vdGljZSc7XG5cbmNvbnN0IHt3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuLy8g5pys6ISa5pys55qEVGVzdGNhc2VcbmNvbnN0IHdpa2l0ZXh0UHJldmlld1Rlc3RjYXNlID0gYXN5bmMgKGlzUHJldmlldzogYm9vbGVhbik6IFByb21pc2U8dm9pZD4gPT4ge1xuXHQvLyDmsqHmnInlj6/pooTop4jlhYPntKDvvIzpgIDlh7rjgIJcblx0aWYgKCFjaGVja05lZWRQcmV2aWV3KCkpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCB0ZXN0Y2FzZUxpc3Q6IE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oXG5cdFx0Jy5zcGVjaWFsLXdpa2l0ZXh0LXByZXZpZXctdGVzdGNhc2UnXG5cdCk7XG5cdC8vIOiLpemhtemdouS4reayoeaciVRlc3RjYXNl77yM6YCA5Ye644CCXG5cdGlmICghdGVzdGNhc2VMaXN0Lmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vIOaUtumbhuS9jeS6jumhtemdouS4reeahFRlc3RjYXNl6aKE6KeI5YWD57SgXG5cdGNvbnN0IHRlc3RjYXNlRGF0YUxpc3Q6IHtcblx0XHRlbGVtZW50OiBIVE1MRWxlbWVudDtcblx0XHRsYW5nOiBzdHJpbmc7XG5cdFx0Y29kZTogc3RyaW5nO1xuXHR9W10gPSBbXTtcblxuXHRsZXQgaTogbnVtYmVyID0gMDtcblx0Zm9yIChpID0gMDsgaSA8IHRlc3RjYXNlTGlzdC5sZW5ndGg7ICsraSkge1xuXHRcdGNvbnN0IGVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgdW5kZWZpbmVkID0gdGVzdGNhc2VMaXN0W2ldO1xuXHRcdGlmICghZWxlbWVudCkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Y29uc3QgY29kZUVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oJy5tdy1oaWdobGlnaHQnKTtcblx0XHRpZiAoIWNvZGVFbGVtZW50KSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjb25zdCB7Y2xhc3NOYW1lfSA9IGNvZGVFbGVtZW50O1xuXHRcdGlmICghY2xhc3NOYW1lKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjb25zdCBbLCBjb2RlSWRdID0gL213LWhpZ2hsaWdodC1sYW5nLShcXFMrKS8uZXhlYyhjbGFzc05hbWUpID8/IFtdO1xuXHRcdGNvbnN0IHtsZW5ndGh9ID0gdGVzdGNhc2VEYXRhTGlzdDtcblxuXHRcdGVsZW1lbnQuc2V0QXR0cmlidXRlKCdwcmV2aWV3LWlkJywgbGVuZ3RoLnRvU3RyaW5nKCkpO1xuXHRcdHRlc3RjYXNlRGF0YUxpc3RbbGVuZ3RoXSA9IHtcblx0XHRcdGVsZW1lbnQsXG5cdFx0XHRsYW5nOiBjb2RlSWQ/LnRvTG93ZXJDYXNlKCkgPz8gJycsXG5cdFx0XHRjb2RlOiBjb2RlRWxlbWVudC50ZXh0Q29udGVudD8udHJpbSgpID8/ICcnLFxuXHRcdH07IC8vIFJlcGxhY2UgQXJyYXkjcHVzaCB0byBhdm9pZCBjb3JlLWpzIHBvbHlmaWxsaW5nXG5cdH1cblxuXHQvLyDmlbTnkIbpobXpnaLkuK3nmoRUZXN0Y2FzZemihOiniOWFg+e0oO+8jOW5tuaUvue9ruKAnFvovb3lhaXkuK1d4oCd5raI5oGvXG5cdGxldCBwYWNrYWdlV2lraXRleHQ6IHN0cmluZyA9ICcnO1xuXHRmb3IgKGNvbnN0IHRlc3RjYXNlSXRlbSBvZiBPYmplY3QudmFsdWVzKHRlc3RjYXNlRGF0YUxpc3QpKSB7XG5cdFx0Y29uc3Qge2NvZGUsIGVsZW1lbnQsIGxhbmd9ID0gdGVzdGNhc2VJdGVtO1xuXG5cdFx0aWYgKCFjb2RlKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjb25zdCAkZWxlbWVudDogSlF1ZXJ5ID0gJChlbGVtZW50KTtcblxuXHRcdGlmIChbJ2phdmFzY3JpcHQnLCAnanMnLCAnY3NzJywgJ2pzb24nLCAndGV4dCddLmluY2x1ZGVzKHRlc3RjYXNlSXRlbS5sYW5nKSkge1xuXHRcdFx0Y29uc3Qgd2lraXRleHQ6IHN0cmluZyA9IGx1YUNoZWNrKGNvZGUsIGxhbmcpO1xuXHRcdFx0aWYgKHdpa2l0ZXh0KSB7XG5cdFx0XHRcdC8vIOiLpeino+aekOe7k+aenOmdnuepuuaJjeaUvue9rumihOiniFxuXHRcdFx0XHQkZWxlbWVudC5wcmVwZW5kKG5vdGljZUxvYWRpbmdFbGVtZW50KTtcblx0XHRcdFx0cGFja2FnZVdpa2l0ZXh0ICs9IGA8ZGl2IGNsYXNzPVwic3BlY2lhbC13aWtpdGV4dC1wcmV2aWV3LXRlc3RjYXNlLSR7aX1cIj5cXG4ke3dpa2l0ZXh0fVxcbjwvZGl2PmA7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmIChbJ2x1YScsICdzY3JpYnVudG8nXS5pbmNsdWRlcyhsYW5nKSkge1xuXHRcdFx0dm9pZCBtd0FkZEx1YVRleHQoXG5cdFx0XHRcdGNvZGUsXG5cdFx0XHRcdHdnUGFnZU5hbWUsXG5cdFx0XHRcdGlzUHJldmlldyxcblx0XHRcdFx0KCgpID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gKHdpa2l0ZXh0OiBzdHJpbmcpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRcdCRlbGVtZW50LnByZXBlbmQod2lraXRleHQpO1xuXHRcdFx0XHRcdH07XG5cdFx0XHRcdH0pKClcblx0XHRcdCk7XG5cdFx0fVxuXHR9XG5cblx0Ly8g5bCG5pW055CG5a6M55qEVGVzdGNhc2XpooTop4jlhYPntKDnu5/kuIDlj5HpgIFBUEnor7fmsYLvvIzlubblsIbov5Tlm57nu5PmnpzliIblj5HliLDlkIRUZXN0Y2FzZVxuXHRpZiAocGFja2FnZVdpa2l0ZXh0KSB7XG5cdFx0cGFja2FnZVdpa2l0ZXh0ID0gYDxkaXYgY2xhc3M9XCJzcGVjaWFsLXdpa2l0ZXh0LXByZXZpZXctdGVzdGNhc2UtdW5kZWZpbmVkXCI+JHtwYWNrYWdlV2lraXRleHR9PC9kaXY+YDtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgcGFyYW1zOiBBcGlQYXJzZVBhcmFtcyA9IHtcblx0XHRcdFx0YWN0aW9uOiAncGFyc2UnLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0XHR0ZXh0OiBwYWNrYWdlV2lraXRleHQsXG5cdFx0XHRcdGNvbnRlbnRtb2RlbDogJ3dpa2l0ZXh0Jyxcblx0XHRcdFx0cHJvcDogJ3RleHQnLFxuXHRcdFx0fTtcblx0XHRcdGlmIChpc1ByZXZpZXcpIHtcblx0XHRcdFx0cGFyYW1zLmRpc2FibGVlZGl0c2VjdGlvbiA9IHRydWU7XG5cdFx0XHRcdHBhcmFtcy5wcmV2aWV3ID0gdHJ1ZTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgZGF0YSA9IGF3YWl0IGFwaS5nZXQocGFyYW1zKTtcblx0XHRcdGlmICghZGF0YT8uWydwYXJzZSddPy50ZXh0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgcGFyc2VkV2lraXRleHQ6IHN0cmluZyA9IChkYXRhWydwYXJzZSddLnRleHQgYXMgc3RyaW5nKS50cmltKCk7XG5cdFx0XHRpZiAocGFyc2VkV2lraXRleHQpIHtcblx0XHRcdFx0Y29uc3QgJHBhcnNlZEVsZW1lbnQ6IEpRdWVyeSA9ICQocGFyc2VkV2lraXRleHQpO1xuXHRcdFx0XHRmb3IgKGNvbnN0IFtrZXksIHRlc3RjYXNlSXRlbV0gb2YgT2JqZWN0LmVudHJpZXModGVzdGNhc2VEYXRhTGlzdCkpIHtcblx0XHRcdFx0XHRjb25zdCB7ZWxlbWVudCwgbGFuZ30gPSB0ZXN0Y2FzZUl0ZW07XG5cblx0XHRcdFx0XHRpZiAoIVsnamF2YXNjcmlwdCcsICdqcycsICd0ZXh0JywgJ2NzcycsICdqc29uJ10uaW5jbHVkZXMobGFuZykpIHtcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGNvbnN0ICRlbGVtZW50OiBKUXVlcnk8SFRNTEVsZW1lbnQ+ID0gJHBhcnNlZEVsZW1lbnQuZmluZChcblx0XHRcdFx0XHRcdGAuc3BlY2lhbC13aWtpdGV4dC1wcmV2aWV3LXRlc3RjYXNlLXVuZGVmaW5lZCA+IC5zcGVjaWFsLXdpa2l0ZXh0LXByZXZpZXctdGVzdGNhc2UtJHtrZXl9YFxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0aWYgKCEkZWxlbWVudC5sZW5ndGgpIHtcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGNvbnN0ICRhZGRUYXJnZXQ6IEpRdWVyeSA9ICQoZWxlbWVudCkuZmluZCgnI3NwZWNpYWx3aWtpdGV4dC1wcmV2aWV3LWxvYWRpbmcnKTtcblx0XHRcdFx0XHQkYWRkVGFyZ2V0Lmh0bWwoJGVsZW1lbnQuaHRtbCgpKTtcblx0XHRcdFx0XHRtdy5ob29rKCd3aWtpcGFnZS5jb250ZW50JykuZmlyZSgkYWRkVGFyZ2V0KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gY2F0Y2gge31cblx0fVxufTtcblxuZXhwb3J0IHt3aWtpdGV4dFByZXZpZXdUZXN0Y2FzZX07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQSw2RkFBQUEsU0FBQTtBQUFBO0FBQ0EsUUFBSSxRQUFRLFNBQVUsSUFBSTtBQUN4QixhQUFPLE1BQU0sR0FBRyxTQUFTLFFBQVE7QUFBQSxJQUNuQztBQUdBLElBQUFBLFFBQU87QUFBQSxJQUVMLE1BQU0sT0FBTyxjQUFjLFlBQVksVUFBVSxLQUNqRCxNQUFNLE9BQU8sVUFBVSxZQUFZLE1BQU07QUFBQSxJQUV6QyxNQUFNLE9BQU8sUUFBUSxZQUFZLElBQUksS0FDckMsTUFBTSxPQUFPLFVBQVUsWUFBWSxNQUFNLEtBQ3pDLE1BQU0sT0FBTyxXQUFRLFlBQVksT0FBSTtBQUFBLElBRXBDLDRCQUFZO0FBQUUsYUFBTztBQUFBLElBQU0sR0FBRyxLQUFLLFNBQVMsYUFBYSxFQUFFO0FBQUE7QUFBQTs7O0FDZjlEO0FBQUEsdUZBQUFDLFNBQUE7QUFBQTtBQUNBLElBQUFBLFFBQU8sVUFBVSxTQUFVLE1BQU07QUFDL0IsVUFBSTtBQUNGLGVBQU8sQ0FBQyxDQUFDLEtBQUs7QUFBQSxNQUNoQixTQUFTLE9BQU87QUFDZCxlQUFPO0FBQUEsTUFDVDtBQUFBLElBQ0Y7QUFBQTtBQUFBOzs7QUNQQTtBQUFBLDZGQUFBQyxTQUFBO0FBQUE7QUFDQSxRQUFJLFFBQVE7QUFHWixJQUFBQSxRQUFPLFVBQVUsQ0FBQyxNQUFNLFdBQVk7QUFFbEMsYUFBTyxPQUFPLGVBQWUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxLQUFLLFdBQVk7QUFBRSxlQUFPO0FBQUEsTUFBRyxFQUFFLENBQUMsRUFBRSxDQUFDLE1BQU07QUFBQSxJQUNqRixDQUFDO0FBQUE7QUFBQTs7O0FDUEQ7QUFBQSxzR0FBQUMsU0FBQTtBQUFBO0FBQ0EsUUFBSSxRQUFRO0FBRVos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R0FBQW9CLE1BQUFDLGlCQUFBOUosUUFBQTZKLE9BQUc7QUFBcEUsa0JBQVcsQ0FBQ2pPLEtBQUs2TixZQUFZLElBQUFLLGlCQUFBRCxHQUFBO0FBQzVCLGtCQUFNO2NBQUNwTDtjQUFTaUU7WUFBSSxJQUFJK0c7QUFFeEIsZ0JBQUksQ0FBQyxDQUFDLGNBQWMsTUFBTSxRQUFRLE9BQU8sTUFBTSxFQUFFOUcsU0FBU0QsSUFBSSxHQUFHO0FBQ2hFO1lBQ0Q7QUFFQSxrQkFBTTFFLFdBQWdDNEwsZUFBZTNMLEtBQUEscUZBQUFxQixPQUNpQzFELEdBQUcsQ0FDekY7QUFDQSxnQkFBSSxDQUFDb0MsU0FBU2dDLFFBQVE7QUFDckI7WUFDRDtBQUVBLGtCQUFNK0osYUFBcUJsTSxFQUFFWSxPQUFPLEVBQUVSLEtBQUssa0NBQWtDO0FBQzdFOEwsdUJBQVdoTSxLQUFLQyxTQUFTRCxLQUFLLENBQUM7QUFDL0JHLGVBQUdDLEtBQUssa0JBQWtCLEVBQUVDLEtBQUsyTCxVQUFVO1VBQzVDO1FBQ0Q7TUFDRCxRQUFRO01BQUM7SUFDVjtFQUNELENBQUE7QUFBQSxTQUFBLFNBL0hNMUIseUJBQUEyQixLQUFBO0FBQUEsV0FBQTFCLE1BQUFuRSxNQUFBLE1BQUFDLFNBQUE7RUFBQTtBQUFBLEdBQUE7O0FsQkxOLE1BQUEsR0FBS3RKLG1CQUFBbVAsU0FBUSxFQUFFQyxLQUFLLFNBQVNDLGdCQUFnQnZNLE9BQXNDO0FBRWxGMEosZUFBYTFKLEtBQUs7QUFFbEIsT0FBS3lLLHdCQUF3QixJQUFJO0FBQ2xDLENBQUM7IiwKICAibmFtZXMiOiBbIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJnbG9iYWxUaGlzIiwgIm1vZHVsZSIsICJnbG9iYWxUaGlzIiwgInZlcnNpb24iLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJnbG9iYWxUaGlzIiwgIm1vZHVsZSIsICJnbG9iYWxUaGlzIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJTeW1ib2wiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJkb2N1bWVudCIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJnbG9iYWxUaGlzIiwgIlR5cGVFcnJvciIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiJCIsICJnbG9iYWxUaGlzIiwgIkpTT04iLCAiU3ludGF4RXJyb3IiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIiQiLCAiaW1wb3J0X2V4dF9nYWRnZXQ2IiwgInJlcXVpcmUiLCAicHJldmlld0xvYWRpbmdDb250ZW50IiwgInByZXZpZXdMb2FkaW5nSW5uZXIiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgIl9fdG9FU00iLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIkZhaWxlZCIsICJsb2NhbGl6ZSIsICJlbiIsICJMb2FkaW5nIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJkZWZhdWx0IiwgImNyZWF0ZUVsZW1lbnQiLCAiRnJhZ21lbnQiLCAic3JjIiwgIkFsZXJ0X2RlZmF1bHQiLCAiZGVjb2RpbmciLCAid2lkdGgiLCAiaGVpZ2h0IiwgImlkIiwgImNsYXNzTmFtZSIsICJMb2FkaW5nX2ljb25fZGVmYXVsdCIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiY2hlY2tFbGVtZW50RXhpc3QiLCAic2VsZWN0b3JzIiwgInNlbGVjdG9yQXJyYXkiLCAiZ2VuZXJhdGVBcnJheSIsICJfaXRlcmF0b3IyIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwMiIsICJzIiwgIm4iLCAiZG9uZSIsICJzZWxlY3RvciIsICJ2YWx1ZSIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yIiwgImVyciIsICJlIiwgImYiLCAiYWRkUGFyc2VkV2lraXRleHQiLCAicGFyc2VkV2lraXRleHQiLCAiJGJvZHkiLCAiJCIsICIkcGFyc2VkV2lraXRleHQiLCAiaHRtbCIsICIkZWxlbWVudCIsICJmaW5kIiwgIm13IiwgImhvb2siLCAiZmlyZSIsICJhcHBlbmQiLCAibm90aWNlRmFpbEVsZW1lbnQiLCAibm90aWNlTG9hZGluZ0VsZW1lbnQiLCAicmVwbGFjZURPTSIsICJlbGVtZW50IiwgImFkZExvYWRpbmdOb3RpY2UiLCAibG9hZGluZ0ZhaWxOb3RpY2UiLCAicmVtb3ZlTG9hZGluZ05vdGljZSIsICJ2ZXJzaW9uIiwgIndpa2lUZXh0S2V5IiwgImx1YUFkZFRleHQiLCAiaW5wdXRTdHJpbmciLCAibmV3U3RyaW5nIiwgImlzRXNjYXBlIiwgImVzY2FwZVN0cmluZyIsICJKU09OIiwgInBhcnNlIiwgImNvbmNhdCIsICJzdHJpbmdpZnkiLCAicmVwbGFjZSIsICJsdWFHZXRTdHJpbmciLCAidGVzdFN0cmluZ0V4ZWNBcnJheSIsICJleGVjIiwgInRlc3RTdHJpbmciLCAic2xpY2UiLCAiTWF0aCIsICJtYXgiLCAibGVuZ3RoIiwgInRyaW1DaGVjayIsICJ0cmltIiwgImZpcnN0Q2hhciIsICJjaGFyQXQiLCAiYXQiLCAibHVhR2V0Q29udGVudFRleHQiLCAid2lraXRleHQiLCAiUmVnRXhwIiwgInN1YnN0cmluZyIsICJ0ZW1wVGV4dCIsICJsdWFHZXRPYmpUZXh0IiwgImx1YUdldENTU3dpa2l0ZXh0IiwgIl9yZWYiLCAiX2RvY3VtZW50JHF1ZXJ5U2VsZWN0IiwgImNzc1RleHQiLCAibHVhR2V0SlNPTndpa2l0ZXh0IiwgIl9yZWYyIiwgIl9kb2N1bWVudCRxdWVyeVNlbGVjdDIiLCAiSlNPTlRleHQiLCAianNvbkRhdGEiLCAiX2kiLCAiX09iamVjdCRlbnRyaWVzIiwgIk9iamVjdCIsICJlbnRyaWVzIiwgInRlc3QiLCAiX2kyIiwgIl9PYmplY3QkZW50cmllczIiLCAiayIsICJ2IiwgImx1YUdldEpTd2lraXRleHQiLCAiX3JlZjMiLCAiX2RvY3VtZW50JHF1ZXJ5U2VsZWN0MyIsICJqc1RleHQiLCAiaW1wb3J0X2V4dF9nYWRnZXQ0IiwgImFwaSIsICJpbml0TXdBcGkiLCAid2dVc2VyTGFuZ3VhZ2UiLCAid2dVc2VyVmFyaWFudCIsICJjb25maWciLCAiZ2V0IiwgImdldExhbmd1YWdlIiwgImxhbmciLCAiaW5jbHVkZXMiLCAic2tpbiIsICJtd0FkZFdpa2lUZXh0IiwgIl9yZWY0IiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgInBhZ2VOYW1lIiwgImlzUHJldmlldyIsICJwYXJhbXMiLCAiYWN0aW9uIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgInRpdGxlIiwgImNvbnRlbnRtb2RlbCIsICJ0ZXh0IiwgInByb3AiLCAidXNlbGFuZyIsICJ1c2Vza2luIiwgImRpc2FibGVlZGl0c2VjdGlvbiIsICJwcmV2aWV3IiwgIl9kYXRhJHBhcnNlIiwgImRhdGEiLCAiX3giLCAiX3gyIiwgIl94MyIsICJhcHBseSIsICJhcmd1bWVudHMiLCAibXdBZGRMdWFUZXh0IiwgIl9yZWY1IiwgImNhbGxCYWNrIiwgInRlbXBNb2R1bGVOYW1lIiwgIm1vZHVsZUNhbGwiLCAiX2RhdGEkcGFyc2UyIiwgInRlbXBsYXRlc2FuZGJveHRpdGxlIiwgInRlbXBsYXRlc2FuZGJveHRleHQiLCAidGVtcGxhdGVzYW5kYm94Y29udGVudG1vZGVsIiwgInRlbXBsYXRlc2FuZGJveGNvbnRlbnRmb3JtYXQiLCAic2VhcmNoIiwgIl94NCIsICJfeDUiLCAiX3g2IiwgIl94NyIsICJ3Z1BhZ2VDb250ZW50TW9kZWwiLCAibHVhQ2hlY2siLCAiY29udGVudE1vZGVsIiwgInRvTG93ZXJDYXNlIiwgInNraW4yIiwgIndnUmV2aXNpb25JZCIsICJtd0FwcGx5Tm90aWNlIiwgIl9yZWY2IiwgImN1cnJlbnRQYWdlTmFtZSIsICJwYWdlU3ViTmFtZSIsICJfZGF0YSRwYXJzZTMiLCAic21heGFnZSIsICJtYXhhZ2UiLCAiX3g4IiwgIl94OSIsICJtd0FwcGx5UmV2aXNpb24iLCAiX3JlZjciLCAiX2RhdGEkcGFyc2U0IiwgIm9sZGlkIiwgInBhZ2VDb250ZW50IiwgIl94MCIsICJpbXBvcnRfZXh0X2dhZGdldDUiLCAiYWxsTXdDb25maWciLCAiY2hlY2tNd0NvbmZpZyIsICJjb25maWdLZXkiLCAiZXhwZWN0Q29uZmlnIiwgIm13Q29uZmlnIiwgIlN0cmluZyIsICJjaGVja05lZWRQcmV2aWV3IiwgImJvZHkiLCAiaW5uZXJIVE1MIiwgIndnQ2Fub25pY2FsTmFtZXNwYWNlIiwgIndnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lIiwgIndnUGFnZU5hbWUiLCAibXdBZGRQcmV2aWV3IiwgIl9tdyR1dGlsJGdldFVybCRtYXRjaCIsICJfbXckdXRpbCRnZXRVcmwkbWF0Y2gyIiwgInBhdGhQYXRoIiwgImRlY29kZVVSSSIsICJ1dGlsIiwgImdldFVybCIsICJtYXRjaCIsICJfJGJvZHkkZmluZCR2YWwiLCAiaW5zZXJ0QWZ0ZXIiLCAidmFsIiwgIl8kYm9keSRmaW5kJHZhbDIiLCAidGV4dGFyZWFDb250ZW50IiwgImZ1bGxQYWdlTmFtZSIsICJ3Z1BhZ2VOYW1lMiIsICJ3aWtpdGV4dFByZXZpZXdUZXN0Y2FzZSIsICJfcmVmOCIsICJ0ZXN0Y2FzZUxpc3QiLCAicXVlcnlTZWxlY3RvckFsbCIsICJ0ZXN0Y2FzZURhdGFMaXN0IiwgImkiLCAiX2V4ZWMiLCAiX2NvZGVJZCR0b0xvd2VyQ2FzZSIsICJfY29kZUVsZW1lbnQkdGV4dENvbnQiLCAiX2NvZGVFbGVtZW50JHRleHRDb250MiIsICJjb2RlRWxlbWVudCIsICJjb2RlSWQiLCAic2V0QXR0cmlidXRlIiwgInRvU3RyaW5nIiwgImNvZGUiLCAidGV4dENvbnRlbnQiLCAicGFja2FnZVdpa2l0ZXh0IiwgIl9pMyIsICJfT2JqZWN0JHZhbHVlcyIsICJ2YWx1ZXMiLCAidGVzdGNhc2VJdGVtIiwgInByZXBlbmQiLCAiX2RhdGEkcGFyc2U1IiwgIiRwYXJzZWRFbGVtZW50IiwgIl9pNCIsICJfT2JqZWN0JGVudHJpZXMzIiwgIiRhZGRUYXJnZXQiLCAiX3gxIiwgImdldEJvZHkiLCAidGhlbiIsICJzcGVjaWFsV2lraXRleHQiXQp9Cg==
