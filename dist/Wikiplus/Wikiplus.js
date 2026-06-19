/**
 * SPDX-License-Identifier: CC-BY-SA-4.0 OR Apache-2.0
 * _addText: '{{Gadget Header|title=Wikiplus|license=CC-BY-SA-4.0|license2=Apache-2.0}}'
 *
 * Wikiplus
 *
 * @base {@link https://github.com/Wikiplus/Wikiplus}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/Wikiplus}
 * @source {@link https://github.com/FurryWiki-zh/FurryWikiGadgets/tree/master/src/Wikiplus/}
 * @author Eridanus Sora (妹空酱)
 * @license CC-BY-SA-4.0 {@link https://furrywiki.org.cn/wiki/H:CC-BY-SA-4.0} OR Apache-2.0 {@link http://www.apache.org/licenses/LICENSE-2.0}
 */

/**
 * Copyright 2014-2024 Eridanus Sora (妹空酱)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
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
    var navigator2 = globalThis2.navigator;
    var userAgent = navigator2 && navigator2.userAgent;
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
    var version;
    if (v8) {
      match = v8.split(".");
      version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
    }
    if (!version && userAgent) {
      match = userAgent.match(/Edge\/(\d+)/);
      if (!match || match[1] >= 74) {
        match = userAgent.match(/Chrome\/(\d+)/);
        if (match) version = +match[1];
      }
    }
    module2.exports = version;
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

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/object-keys.js
var require_object_keys = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/object-keys.js"(exports, module2) {
    "use strict";
    var internalObjectKeys = require_object_keys_internal();
    var enumBugKeys = require_enum_bug_keys();
    module2.exports = Object.keys || function keys(O) {
      return internalObjectKeys(O, enumBugKeys);
    };
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/object-define-properties.js
var require_object_define_properties = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/object-define-properties.js"(exports) {
    "use strict";
    var DESCRIPTORS = require_descriptors();
    var V8_PROTOTYPE_DEFINE_BUG = require_v8_prototype_define_bug();
    var definePropertyModule = require_object_define_property();
    var anObject = require_an_object();
    var toIndexedObject = require_to_indexed_object();
    var objectKeys = require_object_keys();
    exports.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
      anObject(O);
      var props = toIndexedObject(Properties);
      var keys = objectKeys(Properties);
      var length = keys.length;
      var index = 0;
      var key;
      while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
      return O;
    };
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/html.js
var require_html = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/html.js"(exports, module2) {
    "use strict";
    var getBuiltIn = require_get_built_in();
    module2.exports = getBuiltIn("document", "documentElement");
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/object-create.js
var require_object_create = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/object-create.js"(exports, module2) {
    "use strict";
    var anObject = require_an_object();
    var definePropertiesModule = require_object_define_properties();
    var enumBugKeys = require_enum_bug_keys();
    var hiddenKeys = require_hidden_keys();
    var html = require_html();
    var documentCreateElement = require_document_create_element();
    var sharedKey = require_shared_key();
    var GT = ">";
    var LT = "<";
    var PROTOTYPE = "prototype";
    var SCRIPT = "script";
    var IE_PROTO = sharedKey("IE_PROTO");
    var EmptyConstructor = function() {
    };
    var scriptTag = function(content) {
      return LT + SCRIPT + GT + content + LT + "/" + SCRIPT + GT;
    };
    var NullProtoObjectViaActiveX = function(activeXDocument2) {
      activeXDocument2.write(scriptTag(""));
      activeXDocument2.close();
      var temp = activeXDocument2.parentWindow.Object;
      activeXDocument2 = null;
      return temp;
    };
    var NullProtoObjectViaIFrame = function() {
      var iframe = documentCreateElement("iframe");
      var JS = "java" + SCRIPT + ":";
      var iframeDocument;
      iframe.style.display = "none";
      html.appendChild(iframe);
      iframe.src = String(JS);
      iframeDocument = iframe.contentWindow.document;
      iframeDocument.open();
      iframeDocument.write(scriptTag("document.F=Object"));
      iframeDocument.close();
      return iframeDocument.F;
    };
    var activeXDocument;
    var NullProtoObject = function() {
      try {
        activeXDocument = new ActiveXObject("htmlfile");
      } catch (error) {
      }
      NullProtoObject = typeof document != "undefined" ? document.domain && activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame() : NullProtoObjectViaActiveX(activeXDocument);
      var length = enumBugKeys.length;
      while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
      return NullProtoObject();
    };
    hiddenKeys[IE_PROTO] = true;
    module2.exports = Object.create || function create(O, Properties) {
      var result;
      if (O !== null) {
        EmptyConstructor[PROTOTYPE] = anObject(O);
        result = new EmptyConstructor();
        EmptyConstructor[PROTOTYPE] = null;
        result[IE_PROTO] = O;
      } else result = NullProtoObject();
      return Properties === void 0 ? result : definePropertiesModule.f(result, Properties);
    };
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/add-to-unscopables.js
var require_add_to_unscopables = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/internals/add-to-unscopables.js"(exports, module2) {
    "use strict";
    var wellKnownSymbol = require_well_known_symbol();
    var create = require_object_create();
    var defineProperty = require_object_define_property().f;
    var UNSCOPABLES = wellKnownSymbol("unscopables");
    var ArrayPrototype = Array.prototype;
    if (ArrayPrototype[UNSCOPABLES] === void 0) {
      defineProperty(ArrayPrototype, UNSCOPABLES, {
        configurable: true,
        value: create(null)
      });
    }
    module2.exports = function(key) {
      ArrayPrototype[UNSCOPABLES][key] = true;
    };
  }
});

// node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/modules/es.array.includes.js
var require_es_array_includes = __commonJS({
  "node_modules/.pnpm/core-js@3.49.0/node_modules/core-js/modules/es.array.includes.js"() {
    "use strict";
    var $2 = require_export();
    var $includes = require_array_includes().includes;
    var fails = require_fails();
    var addToUnscopables = require_add_to_unscopables();
    var BROKEN_ON_SPARSE = fails(function() {
      return !Array(1).includes();
    });
    var BROKEN_ON_SPARSE_WITH_FROM_INDEX = fails(function() {
      return [, 1].includes(void 0, 1);
    });
    $2({ target: "Array", proto: true, forced: BROKEN_ON_SPARSE || BROKEN_ON_SPARSE_WITH_FROM_INDEX }, {
      includes: function includes(el) {
        return $includes(this, el, arguments.length > 1 ? arguments[1] : void 0);
      }
    });
    addToUnscopables("includes");
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

// dist/Wikiplus/Wikiplus.js
require_es_array_includes();
require_es_json_parse();
require_es_json_stringify();
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
var __getOwnPropNames2 = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames2(fn)[0]])(fn = 0)), res;
};
//! src/Wikiplus/modules/utils/constants.js
var Constants;
var constants_default;
var init_constants = __esm({
  "src/Wikiplus/modules/utils/constants.js"() {
    "use strict";
    Constants = class {
      version = "4.1.0";
      get isArticle() {
        return window.mw.config.get("wgIsArticle");
      }
      get currentPageName() {
        return window.mw.config.get("wgPageName").replace(/ /g, "_");
      }
      get articleId() {
        return window.mw.config.get("wgArticleId");
      }
      get revisionId() {
        return window.mw.config.get("wgRevisionId");
      }
      get latestRevisionId() {
        return window.mw.config.get("wgCurRevisionId");
      }
      get articlePath() {
        return window.mw.config.get("wgArticlePath");
      }
      get scriptPath() {
        return window.mw.config.get("wgScriptPath");
      }
      get action() {
        return window.mw.config.get("wgAction");
      }
      get skin() {
        return window.mw.config.get("skin");
      }
      get userGroups() {
        return window.mw.config.get("wgUserGroups");
      }
      get wikiId() {
        return window.mw.config.get("wgWikiID");
      }
      userAgent = "FurryWiki/1.1 Wikiplus/".concat(this.version, " (").concat(this.wikiId, ")");
    };
    constants_default = new Constants();
  }
});
//! src/Wikiplus/modules/utils/requests.js
var Requests;
var requests_default;
var init_requests = __esm({
  "src/Wikiplus/modules/utils/requests.js"() {
    "use strict";
    init_constants();
    Requests = {
      base: "".concat(location.protocol, "//").concat(location.host).concat(constants_default.scriptPath, "/api.php"),
      get(query) {
        return _asyncToGenerator(function* () {
          const url = new URL(Requests.base);
          for (var _i = 0, _Object$keys = Object.keys(query); _i < _Object$keys.length; _i++) {
            const key = _Object$keys[_i];
            url.searchParams.append(key, query[key]);
          }
          const response = yield fetch(url, {
            credentials: "same-origin",
            headers: {
              "Api-User-Agent": constants_default.userAgent
            }
          });
          return yield response.json();
        })();
      },
      post(payload) {
        return _asyncToGenerator(function* () {
          const url = new URL(Requests.base);
          const form = new FormData();
          for (var _i2 = 0, _Object$entries = Object.entries(payload); _i2 < _Object$entries.length; _i2++) {
            const [key, value] = _Object$entries[_i2];
            form.append(key, value);
          }
          const response = yield fetch(url, {
            method: "POST",
            body: form,
            credentials: "same-origin",
            headers: {
              "Api-User-Agent": constants_default.userAgent
            }
          });
          return yield response.json();
        })();
      }
    };
    requests_default = Requests;
  }
});
//! src/Wikiplus/modules/utils/i18n.js
var I18n;
var i18n_default;
var init_i18n = __esm({
  "src/Wikiplus/modules/utils/i18n.js"() {
    "use strict";
    I18n = class {
      language;
      i18nData = {};
      sessionUpdateLog = [];
      constructor() {
        let language;
        try {
          language = JSON.parse(localStorage["Wikiplus_Settings"])["language"] || navigator.language.toLowerCase();
        } catch {
          language = (navigator.language || navigator.browserLanguage).replace(/han[st]-?/i, "").toLowerCase();
        }
        this.language = language;
        try {
          const i18nCache = JSON.parse(localStorage.getItem("Wikiplus_i18nCache"));
          for (var _i3 = 0, _Object$keys2 = Object.keys(i18nCache); _i3 < _Object$keys2.length; _i3++) {
            const key = _Object$keys2[_i3];
            this.i18nData[key] = i18nCache[key];
          }
        } catch {
          localStorage.setItem("Wikiplus_i18nCache", "{}");
        }
      }
      translate(key, placeholders = []) {
        let result = "";
        if (this.language in this.i18nData) {
          if (key in this.i18nData[this.language]) {
            result = this.i18nData[this.language][key];
          } else {
            this.loadLanguage(this.language);
            if (key in this.i18nData["en-us"]) {
              result = this.i18nData["en-us"][key];
            } else {
              result = key;
            }
          }
        } else {
          this.loadLanguage(this.language);
        }
        if (placeholders.length > 0) {
          var _iterator = _createForOfIteratorHelper(placeholders.entries()), _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done; ) {
              const [index, placeholder] = _step.value;
              result = result.replace("$".concat(index + 1), placeholder);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
        return result;
      }
      loadLanguage(language) {
        var _this = this;
        return _asyncToGenerator(function* () {
          if (_this.sessionUpdateLog.includes(language)) {
            return;
          }
          try {
            const response = yield (yield fetch("https://gitcdn.qiuwen.net.cn/InterfaceAdmin/Wikiplus/raw/branch/dev/languages/".concat(language, ".json"))).json();
            const nowVersion = localStorage.getItem("Wikiplus_LanguageVersion") || "000";
            _this.sessionUpdateLog.push(language);
            if (response.__version !== nowVersion || !(language in _this.i18nData)) {
              console.info("Update ".concat(language, " support to version ").concat(response.__version));
              _this.i18nData[language] = response;
              localStorage.setItem("Wikiplus_i18nCache", JSON.stringify(_this.i18nData));
            }
          } catch {
          }
        })();
      }
    };
    i18n_default = new I18n();
  }
});
//! src/Wikiplus/modules/utils/log.js
var WikiplusError;
var Log;
var log_default;
var init_log = __esm({
  "src/Wikiplus/modules/utils/log.js"() {
    "use strict";
    init_i18n();
    WikiplusError = class extends Error {
      constructor(message, code) {
        super(message);
        this.code = code;
      }
    };
    Log = {
      debug(message = "") {
        console.debug("[Wikiplus-DEBUG] ".concat(message));
      },
      info(message = "") {
        console.info("[Wikiplus-INFO] ".concat(message));
      },
      error(errorCode, payloads = []) {
        let template = i18n_default.translate(errorCode);
        if (payloads.length > 0) {
          var _iterator2 = _createForOfIteratorHelper(payloads.entries()), _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
              const [i, v] = _step2.value;
              template = template.replace(new RegExp("\\".concat(i + 1), "ig"), v);
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
        console.error("[Wikiplus-ERROR] ".concat(template));
        throw new WikiplusError("".concat(template), errorCode);
      }
    };
    log_default = Log;
  }
});
//! src/Wikiplus/modules/services/wiki.js
var Wiki;
var wiki_default;
var init_wiki = __esm({
  "src/Wikiplus/modules/services/wiki.js"() {
    "use strict";
    init_requests();
    init_log();
    init_i18n();
    Wiki = class {
      pageInfoCache = {};
      /**
       * 获得 Edit Token
       * Get Edit Token
       *
       * @returns {Promise<string>}
       */
      getEditToken() {
        return _asyncToGenerator(function* () {
          const response = yield requests_default.get({
            action: "query",
            meta: "tokens",
            format: "json"
          });
          if (response.query && response.query.tokens && response.query.tokens.csrftoken && response.query.tokens.csrftoken !== "+\\") {
            return response.query.tokens.csrftoken;
          }
          return log_default.error("fail_to_get_edittoken");
        })();
      }
      /**
       * 获得页面上一版本时间戳
       * Get the timestamp of the last revision of page specified.
       *
       * @param {params.string} title 页面名 / Pagename
       * @param {params.revisionId} revisionId 修订版本号 / Revision ID
       * @param {params.contentmodel} contentmodel 内容模型 / Content Model
       * @returns {Promise<string>}
       */
      getPageInfo(_x) {
        var _this2 = this;
        return _asyncToGenerator(function* ({
          title,
          revisionId
        }) {
          try {
            const params = {
              action: "query",
              prop: "revisions|info",
              rvprop: "timestamp|ids",
              format: "json"
            };
            if (revisionId) {
              params.revids = revisionId;
            } else if (title) {
              if (_this2.pageInfoCache[title]) {
                return {
                  timestamp: _this2.pageInfoCache[title].timestamp,
                  revisionId: _this2.pageInfoCache[title].revid,
                  contentmodel: _this2.pageInfoCache[title].contentmodel
                };
              }
              params.titles = title;
            }
            const response = yield requests_default.get(params);
            if (response.query && response.query.pages) {
              const contentmodel = response.query.pages[Object.keys(response.query.pages)[0]].contentmodel;
              if (Object.keys(response.query.pages)[0] === "-1") {
                _this2.pageInfoCache[title] = {
                  contentmodel
                };
                return {
                  contentmodel
                };
              }
              const pageInfo = response.query.pages[Object.keys(response.query.pages)[0]].revisions[0];
              if (title) {
                _this2.pageInfoCache[title] = pageInfo;
                _this2.pageInfoCache[title].contentmodel = contentmodel;
              }
              return {
                timestamp: pageInfo.timestamp,
                revisionId: pageInfo.revid,
                contentmodel
              };
            }
          } catch {
            log_default.error("fail_to_get_edittoken");
          }
        }).apply(this, arguments);
      }
      /**
       * 获得页面的 Wikitext
       * Get wikitext of the page.
       *
       * @param {string} title title
       * @param {Object} config
       * @param {string} config.revisionId 版本号
       * @param {string} config.section 段落号
       * @return {Promise<string>} wikitext内容
       */
      getWikiText(_x2) {
        return _asyncToGenerator(function* ({
          section,
          revisionId
        }) {
          try {
            const params = {
              action: "query",
              prop: "revisions",
              rvprop: "content",
              format: "json",
              revids: revisionId
            };
            if (revisionId) {
              params.revids = revisionId;
            }
            if (section) {
              params.rvsection = section;
            }
            const response = yield requests_default.get(params);
            if (response.query && response.query.pages) {
              if (Object.keys(response.query.pages)[0] === "-1") {
                return "";
              }
              const pageInfo = response.query.pages[Object.keys(response.query.pages)[0]].revisions[0];
              return pageInfo["*"];
            }
          } catch {
            log_default.error("fail_to_get_wikitext");
          }
        }).apply(this, arguments);
      }
      /**
       * 解析 Wikitext
       *
       * @param {string} wikitext wikitext
       * @param {string} title 页面标题
       * @param {Object} config 设置
       * @return {Promise<string>} 解析结果 HTML
       */
      parseWikiText(_x3) {
        return _asyncToGenerator(function* (wikitext, title = "", config = {}) {
          try {
            const response = yield requests_default.post({
              format: "json",
              action: "parse",
              text: wikitext,
              title,
              pst: "true"
            });
            if (response.parse && response.parse.text) {
              return response.parse.text["*"];
            }
          } catch {
            log_default.error("cant_parse_wikitext");
          }
        }).apply(this, arguments);
      }
      /**
       * 编辑页面
       *
       * @param root0
       * @param root0.title
       * @param root0.content
       * @param root0.editToken
       * @param root0.timestamp
       * @param root0.config
       * @param root0.additionalConfig
       */
      edit() {
        return _asyncToGenerator(function* ({
          title,
          content,
          editToken,
          timestamp,
          config = {},
          additionalConfig = {}
        } = {}) {
          let response;
          try {
            response = yield requests_default.post({
              action: "edit",
              format: "json",
              text: content,
              title,
              token: editToken,
              ...timestamp ? {
                basetimestamp: timestamp
              } : {},
              ...config,
              ...additionalConfig
            });
          } catch {
            log_default.error("network_edit_error");
          }
          if (response.edit) {
            if (response.edit.result === "Success") {
              return true;
            }
            if (response.edit.code) {
              throw new Error("\n                        ".concat(i18n_default.translate("hit_abusefilter"), ":").concat(response.edit.info.replace("/Hit AbuseFilter: /ig", ""), '\n                        <br>\n                        <div style="font-size: smaller;">').concat(response.edit.warning, "</div>\n                    "));
            } else {
              log_default.error("unknown_edit_error");
            }
          } else if (response.error && response.error.code) {
            log_default.error(response.error.code);
          } else if (response.code) {
            log_default.error(response.code);
          } else {
            log_default.error("unknown_edit_error");
          }
        }).apply(this, arguments);
      }
      /**
       * 获得指定页面最新修订编号
       * Get latest revisionId of a page.
       *
       * @param {*} title
       */
      getLatestRevisionIdForPage(title) {
        var _this3 = this;
        return _asyncToGenerator(function* () {
          const {
            revisionId
          } = yield _this3.getPageInfo({
            title
          });
          return revisionId;
        })();
      }
    };
    wiki_default = new Wiki();
  }
});
//! src/Wikiplus/modules/core/page.js
var Page;
var page_default;
var init_page = __esm({
  "src/Wikiplus/modules/core/page.js"() {
    "use strict";
    init_wiki();
    init_log();
    Page = class {
      timestamp;
      editToken;
      title;
      revisionId;
      inited = false;
      isNewPage = false;
      contentmodel = "wikitext";
      sectionCache = {};
      /**
       * @param {params.title} 页面标题 Page Name (optional)
       * @param {params.revisionId} 页面修订编号 Revision Id
       * @param {params.contentmodel} 页面内容模型 Content Model
       */
      constructor({
        title,
        revisionId
      }) {
        this.title = title;
        this.revisionId = revisionId;
        this.isNewPage = !revisionId;
      }
      /**
       * 初始化 获得页面EditToken和初始TimeStamp
       * Initialization.
       *
       * @param {string} editToken (optional) 如果提供了editToken，将不会再获取
       */
      init() {
        var _this4 = this;
        return _asyncToGenerator(function* ({
          editToken = ""
        } = {}) {
          const promiseArr = [_this4.getTimestamp(), _this4.getContentModel()];
          if (!editToken) {
            promiseArr.push(_this4.getEditToken());
          }
          yield Promise.all(promiseArr);
          _this4.inited = true;
          log_default.info("Page initialization for ".concat(_this4.title, "#").concat(_this4.revisionId, " finished."));
        }).apply(this, arguments);
      }
      /**
       * 获得 EditToken
       * Get EditToken
       */
      getEditToken() {
        var _this5 = this;
        return _asyncToGenerator(function* () {
          yield mw.loader.using("mediawiki.user");
          if (mw.user.tokens.get("csrfToken") && mw.user.tokens.get("csrfToken") !== "+\\") {
            _this5.editToken = mw.user.tokens.get("csrfToken");
            return;
          }
          _this5.editToken = yield wiki_default.getEditToken();
        })();
      }
      /**
       * 获得编辑基准时间戳
       * Get Base Timestamp
       */
      getTimestamp() {
        var _this6 = this;
        return _asyncToGenerator(function* () {
          const {
            timestamp,
            revisionId
          } = yield wiki_default.getPageInfo({
            revisionId: _this6.revisionId,
            title: _this6.title
          });
          _this6.timestamp = timestamp;
          if (revisionId) {
            _this6.revisionId = revisionId;
            _this6.isNewPage = false;
          }
        })();
      }
      /**
       * 获得页面内容模型
       *
       * @param {Object} config
       * @param {string} config.revisionId
       */
      getContentModel() {
        var _this7 = this;
        return _asyncToGenerator(function* () {
          const {
            contentmodel
          } = yield wiki_default.getPageInfo({
            revisionId: _this7.revisionId,
            title: _this7.title
          });
          _this7.contentmodel = contentmodel || "wikitext";
        })();
      }
      /**
       * 获得 WikiText
       *
       * @param {Object} config
       * @param {string} config.section
       * @param {string} config.revisionId
       */
      getWikiText() {
        var _this8 = this;
        return _asyncToGenerator(function* ({
          section = ""
        } = {}) {
          const sec = section === -1 ? "" : section;
          if (_this8.sectionCache[sec]) {
            return _this8.sectionCache[sec];
          }
          const wikiText = yield wiki_default.getWikiText({
            section: sec,
            revisionId: _this8.revisionId
          });
          log_default.info("Wikitext of ".concat(_this8.title, "#").concat(section, " fetched."));
          _this8.sectionCache[sec] = wikiText;
          return wikiText;
        }).apply(this, arguments);
      }
      /**
       * 解析 WikiText
       *
       * @param {string} wikitext
       */
      parseWikiText(wikitext) {
        var _this9 = this;
        return _asyncToGenerator(function* () {
          return wiki_default.parseWikiText(wikitext, _this9.title);
        })();
      }
      /**
       * 编辑页面
       *
       * @param {*} config
       * @param payload
       */
      edit(payload) {
        var _this0 = this;
        return _asyncToGenerator(function* () {
          if (!_this0.editToken) {
            log_default.error("fail_to_get_edittoken");
            return;
          }
          if (!_this0.timestamp && !_this0.isNewPage) {
            log_default.error("fail_to_get_timestamp");
            return;
          }
          return wiki_default.edit({
            title: _this0.title,
            editToken: _this0.editToken,
            ..._this0.timestamp ? {
              timestamp: _this0.timestamp
            } : {},
            ...payload,
            additionalConfig: {
              ..._this0.isNewPage ? {
                createonly: _this0.isNewPage
              } : {}
            }
          });
        })();
      }
    };
    page_default = Page;
  }
});
//! src/Wikiplus/modules/core/notification.js
var Notification;
var notification_default;
var init_notification = __esm({
  "src/Wikiplus/modules/core/notification.js"() {
    "use strict";
    Notification = class {
      constructor() {
        this.init();
      }
      init() {
        $("body").append('<div id="MoeNotification"></div>');
      }
      display(text = "喵~", type = "success", callback = () => {
      }) {
        $("#MoeNotification").append($("<div>").addClass("MoeNotification-notice").addClass("MoeNotification-notice-".concat(type)).append("<span>".concat(text, "</span>")));
        $("#MoeNotification").find(".MoeNotification-notice").last().fadeIn(300);
        this.bind();
        this.clear();
        callback($("#MoeNotification").find(".MoeNotification-notice").last());
      }
      bind() {
        const self2 = this;
        $(".MoeNotification-notice").on("mouseover", function() {
          self2.slideLeft($(this));
        });
      }
      success(text, callback) {
        this.display(text, "success", callback);
      }
      warning(text, callback) {
        this.display(text, "warning", callback);
      }
      error(text, callback) {
        this.display(text, "error", callback);
      }
      clear() {
        if ($(".MoeNotification-notice").length >= 10) {
          $("#MoeNotification").children().first().fadeOut(150, function() {
            $(this).remove();
          });
          setTimeout(this.clear, 300);
        }
      }
      empty(f) {
        $(".MoeNotification-notice").each(function(i) {
          if (typeof f === "function") {
            const ele = $(this);
            setTimeout(() => {
              f(ele);
            }, 200 * i);
          } else {
            $(this).delay(i * 200).fadeOut("fast", function() {
              $(this).remove();
            });
          }
        });
      }
      slideLeft(ele, speed) {
        ele.css("position", "relative");
        ele.animate({
          left: "-200%"
        }, speed || 150, function() {
          $(this).fadeOut("fast", function() {
            $(this).remove();
          });
        });
      }
    };
    notification_default = new Notification();
  }
});
//! src/Wikiplus/modules/utils/sleep.js
var sleep;
var sleep_default;
var init_sleep = __esm({
  "src/Wikiplus/modules/utils/sleep.js"() {
    "use strict";
    sleep = (time) => {
      return new Promise((resolve) => {
        return setTimeout(resolve, time);
      });
    };
    sleep_default = sleep;
  }
});
//! src/Wikiplus/modules/utils/helpers.js
function parseQuery(url) {
  const reg = /(([^?&=]+)(?:=([^?&=]*))*)/g;
  const params = {};
  let match;
  while (match = reg.exec(url)) {
    try {
      params[match[2]] = decodeURIComponent(match[3]);
    } catch {
      params[match[2]] = match[3];
    }
  }
  return params;
}
var init_helpers = __esm({
  "src/Wikiplus/modules/utils/helpers.js"() {
    "use strict";
  }
});
//! src/Wikiplus/modules/core/ui.js
var UI;
var ui_default;
var init_ui = __esm({
  "src/Wikiplus/modules/core/ui.js"() {
    "use strict";
    init_constants();
    init_notification();
    init_i18n();
    init_log();
    init_sleep();
    init_helpers();
    UI = class {
      quickEditPanelVisible = false;
      scrollTop = 0;
      /**
       * 创建居中对话框
       *
       * @param {string} title 窗口标题
       * @param {string | JQuery<HTMLElement>} content 内容
       * @param {*} width 宽度
       * @param {*} callback 回调函数
       */
      createDialogBox(title = "Wikiplus", content = "", width = 600, callback = () => {
      }) {
        if ($(".Wikiplus-InterBox").length > 0) {
          $(".Wikiplus-InterBox").each(function() {
            $(this).remove();
          });
        }
        const clientWidth = window.innerWidth;
        const clientHeight = window.innerHeight;
        const dialogWidth = Math.min(clientWidth, width);
        const dialogBox = $("<div>").addClass("Wikiplus-InterBox").css({
          "margin-left": clientWidth / 2 - dialogWidth / 2,
          top: $(document).scrollTop() + clientHeight * 0.2,
          display: "none"
        }).append($("<div>").addClass("Wikiplus-InterBox-Header").html(title)).append($("<div>").addClass("Wikiplus-InterBox-Content").append(content)).append($("<span>").text("×").addClass("Wikiplus-InterBox-Close"));
        $("body").append(dialogBox);
        $(".Wikiplus-InterBox").width(dialogWidth);
        $(".Wikiplus-InterBox-Close").on("click", function() {
          $(this).parent().fadeOut("fast", function() {
            window.addEventListener("close", window.onbeforeunload = void 0);
            $(this).remove();
          });
        });
        const bindDragging = function(element) {
          element.mousedown((e) => {
            const baseX = e.clientX;
            const baseY = e.clientY;
            const baseOffsetX = element.parent().offset().left;
            const baseOffsetY = element.parent().offset().top;
            $(document).on("mousemove", (e2) => {
              element.parent().css({
                "margin-left": baseOffsetX + e2.clientX - baseX,
                top: baseOffsetY + e2.clientY - baseY
              });
            });
            $(document).on("mouseup", () => {
              element.unbind("mousedown");
              $(document).off("mousemove");
              $(document).off("mouseup");
              bindDragging(element);
            });
          });
        };
        bindDragging($(".Wikiplus-InterBox-Header"));
        $(".Wikiplus-InterBox").fadeIn(500);
        callback();
        return dialogBox;
      }
      /**
       * 在搜索框左侧「更多」菜单内添加按钮
       * Add a button in "More" menu (left of the search bar)
       *
       * @param {string} text 按钮名 Button text
       * @param {string} id 按钮id Button id
       * @return {JQuery<HTMLElement>} button
       */
      addFunctionButton(text, id) {
        let button;
        switch (constants_default.skin) {
          case "minerva":
            button = $("<li>").attr("id", id).addClass("toggle-list-item").append($("<a>").addClass("mw-ui-icon mw-ui-icon-before toggle-list-item__anchor").append($("<span>").attr("href", "javascript:void(0);").addClass("toggle-list-item__label").text(text)));
            break;
          case "moeskin":
            button = $("<li>").addClass("Wikiplus-More-Function-Button").attr("id", id).append($("<a>").attr("href", "javascript:void(0);").text(text));
            break;
          default:
            button = $("<li>").addClass("mw-list-item").addClass("vector-tab-noicon").attr("id", id).append($("<a>").attr("href", "javascript:void(0);").text(text));
        }
        if (constants_default.skin === "minerva" && $("#p-tb").length > 0) {
          $("#p-tb").append(button);
          return $("#".concat(id));
        } else if (constants_default.skin === "moeskin") {
          $(".more-actions-list").first().append(button);
          return $("#".concat(id));
        } else if ($("#p-cactions").length > 0) {
          $("#p-cactions ul").append(button);
          return $("#".concat(id));
        }
        log_default.info(i18n_default.translate("cant_add_funcbtn"));
      }
      /**
       * 插入快速重定向按钮
       *
       * @param {*} onClick
       */
      insertSimpleRedirectButton(onClick = () => {
      }) {
        const button = this.addFunctionButton(i18n_default.translate("redirect_from"), "Wikiplus-SR-Intro");
        if (button) {
          button.on("click", onClick);
        }
      }
      /**
       * 插入设置面板按钮
       *
       * @param {*} onClick
       */
      insertSettingsPanelButton(onClick = () => {
      }) {
        const button = this.addFunctionButton(i18n_default.translate("wikiplus_settings"), "Wikiplus-Settings-Intro");
        if (button) {
          button.on("click", onClick);
        }
      }
      /**
       * 插入顶部快速编辑按钮
       * Insert QuickEdit button besides page edit button.
       *
       * @param onClick
       */
      insertTopQuickEditEntry(onClick) {
        const topBtn = $("<li>").attr("id", "Wikiplus-Edit-TopBtn").attr("class", "mw-list-item");
        const topBtnLink = $("<a>").attr("href", "javascript:void(0)").text("".concat(i18n_default.translate("quickedit_topbtn")));
        topBtn.append(topBtnLink);
        switch (constants_default.skin) {
          case "minerva":
            topBtn.css({
              "align-items": "center",
              display: "flex"
            });
            topBtn.find("span").addClass("page-actions-menu__list-item");
            topBtn.find("a").addClass("mw-ui-icon mw-ui-icon-element mw-ui-icon-wikimedia-edit-base20 mw-ui-icon-with-label-desktop").css("vertical-align", "middle");
            break;
          case "vector-2022":
            topBtn.addClass("vector-tab-noicon");
            break;
          case "vector":
            topBtn.append($("<span>").append(topBtnLink));
            break;
          default:
        }
        $(topBtn).on("click", () => {
          onClick({
            sectionNumber: -1,
            targetPageName: constants_default.currentPageName
          });
        });
        if ($("#ca-edit").length > 0 && $("#Wikiplus-Edit-TopBtn").length === 0) {
          constants_default.skin === "minerva" ? $("#ca-edit").parent().after(topBtn) : $("#ca-edit").after(topBtn);
        }
      }
      /**
       * 插入段落快速编辑按钮
       * Insert QuickEdit buttons for each section.
       *
       * @param onClick
       */
      insertSectionQuickEditEntries(onClick = () => {
      }) {
        const sectionBtn = constants_default.skin === "minerva" ? $("<span>").append($("<a>").addClass("Wikiplus-Edit-SectionBtn mw-ui-icon mw-ui-icon-element mw-ui-icon-wikimedia-edit-base20 edit-page mw-ui-icon-flush-right").css("margin-left", "0.75em").attr("href", "javascript:void(0)").attr("title", i18n_default.translate("quickedit_sectionbtn"))) : $("<span>").append($("<span>").addClass("mw-editsection-divider").text(" | ")).append($("<a>").addClass("Wikiplus-Edit-SectionBtn").attr("href", "javascript:void(0)").text(i18n_default.translate("quickedit_sectionbtn")));
        $(".mw-editsection").each(function(i) {
          try {
            const editURL = $(this).find("a[href*='action=edit']").first().attr("href");
            const sectionNumber = editURL.match(/&[ve]*section\=([^&]+)/)[1].replace(/T-/gi, "");
            const sectionTargetName = decodeURIComponent(editURL.match(/title=(.+?)&/)[1]);
            const cloneNode = $(this).prev().clone();
            cloneNode.find(".mw-headline-number").remove();
            const sectionName = cloneNode.text().trim();
            const _sectionBtn = sectionBtn.clone();
            _sectionBtn.find(".Wikiplus-Edit-SectionBtn").on("click", () => {
              onClick({
                sectionNumber,
                sectionName,
                targetPageName: sectionTargetName
              });
            });
            constants_default.skin === "minerva" ? $(this).append(_sectionBtn) : $(this).find(".mw-editsection-bracket").last().before(_sectionBtn);
          } catch {
            log_default.error("fail_to_init_quickedit");
          }
        });
      }
      /**
       * 插入任意链接编辑入口
       *
       * @param {*} onClick
       */
      insertLinkEditEntries(onClick = () => {
      }) {
        $("#mw-content-text a.external").each(function(i) {
          const url = $(this).attr("href");
          const params = parseQuery(url);
          if (params.action === "edit" && params.title !== void 0 && params.section !== "new") {
            $(this).after($("<a>").attr({
              href: "javascript:void(0)",
              class: "Wikiplus-Edit-EveryWhereBtn"
            }).text("(".concat(i18n_default.translate("quickedit_sectionbtn"), ")")).on("click", () => {
              var _params$section;
              onClick({
                targetPageName: params.title,
                sectionNumber: (_params$section = params.section) !== null && _params$section !== void 0 ? _params$section : -1
              });
            }));
          }
        });
      }
      showQuickEditPanel({
        title = "",
        content = "",
        summary = "",
        onBack = () => {
        },
        onParse = () => {
        },
        onEdit = () => {
        },
        escExit = false
      }) {
        const self2 = this;
        this.scrollTop = $(document).scrollTop();
        if (this.quickEditPanelVisible) {
          this.hideQuickEditPanel();
        }
        this.quickEditPanelVisible = true;
        window.addEventListener("close", window.onbeforeunload = function() {
          return "".concat(i18n_default.translate("onclose_confirm"));
        });
        const isNewPage = $(".noarticletext").length > 0;
        const backBtn = $("<span>").attr("id", "Wikiplus-Quickedit-Back").addClass("Wikiplus-Btn").text("".concat(i18n_default.translate("back")));
        const jumpBtn = $("<span>").attr("id", "Wikiplus-Quickedit-Jump").addClass("Wikiplus-Btn").append($("<a>").attr("href", "#Wikiplus-Quickedit").text("".concat(i18n_default.translate("goto_editbox"))));
        const inputBox = $("<textarea>").attr("id", "Wikiplus-Quickedit");
        const previewBox = $("<div>").attr("id", "Wikiplus-Quickedit-Preview-Output");
        const summaryBox = $("<input>").attr("id", "Wikiplus-Quickedit-Summary-Input").attr("placeholder", "".concat(i18n_default.translate("summary_placehold")));
        const editSubmitBtn = $("<button>").attr("id", "Wikiplus-Quickedit-Submit").text("".concat(i18n_default.translate(isNewPage ? "publish_page" : "publish_change"), "(Ctrl+S)"));
        const previewSubmitBtn = $("<button>").attr("id", "Wikiplus-Quickedit-Preview-Submit").text("".concat(i18n_default.translate("preview")));
        const isMinorEdit = $("<div>").append($("<input>").attr({
          type: "checkbox",
          id: "Wikiplus-Quickedit-MinorEdit"
        })).append($("<label>").attr("for", "Wikiplus-Quickedit-MinorEdit").text("".concat(i18n_default.translate("mark_minoredit"), "(Ctrl+Shift+S)"))).css({
          margin: "5px 5px 5px -3px",
          display: "inline"
        });
        const editBody = $("<div>").append(backBtn, jumpBtn, previewBox, inputBox, summaryBox, $("<br>"), isMinorEdit, editSubmitBtn, previewSubmitBtn);
        this.createDialogBox(title, editBody, 1e3, () => {
          $("#Wikiplus-Quickedit").val(content);
          $("#Wikiplus-Quickedit-Summary-Input").val(summary);
        });
        $("#Wikiplus-Quickedit-Back").on("click", onBack);
        $("#Wikiplus-Quickedit-Preview-Submit").on("click", /* @__PURE__ */ _asyncToGenerator(function* () {
          const preloadBanner = $("<div>").addClass("Wikiplus-Banner").text("".concat(i18n_default.translate("loading_preview")));
          const wikiText = $("#Wikiplus-Quickedit").val();
          $(this).attr("disabled", "disabled");
          $("#Wikiplus-Quickedit-Preview-Output").fadeOut(100, () => {
            $("#Wikiplus-Quickedit-Preview-Output").html("").append(preloadBanner);
            $("#Wikiplus-Quickedit-Preview-Output").fadeIn(100);
          });
          $("html, body").animate({
            scrollTop: self2.scrollTop
          }, 200);
          const result = yield onParse(wikiText);
          $("#Wikiplus-Quickedit-Preview-Output").fadeOut("100", () => {
            $("#Wikiplus-Quickedit-Preview-Output").html('<hr><div class="mw-body-content">'.concat(result, "</div><hr>"));
            $("#Wikiplus-Quickedit-Preview-Output").fadeIn("100");
            $("#Wikiplus-Quickedit-Preview-Submit").prop("disabled", false);
          });
        }));
        $("#Wikiplus-Quickedit-Submit").on("click", /* @__PURE__ */ _asyncToGenerator(function* () {
          const timer = Date.now();
          const editBanner = $("<div>").addClass("Wikiplus-Banner").text("".concat(i18n_default.translate("submitting_edit")));
          const payload = {
            summary: $("#Wikiplus-Quickedit-Summary-Input").val(),
            content: $("#Wikiplus-Quickedit").val(),
            isMinorEdit: $("#Wikiplus-Quickedit-MinorEdit").is(":checked")
          };
          $("#Wikiplus-Quickedit-Submit,#Wikiplus-Quickedit,#Wikiplus-Quickedit-Preview-Submit").attr("disabled", "disabled");
          $("html, body").animate({
            scrollTop: self2.scrollTop
          }, 200);
          $("#Wikiplus-Quickedit-Preview-Output").fadeOut(100, () => {
            $("#Wikiplus-Quickedit-Preview-Output").html("").append(editBanner);
            $("#Wikiplus-Quickedit-Preview-Output").fadeIn(100);
          });
          try {
            yield onEdit(payload);
            const useTime = Date.now() - timer;
            $("#Wikiplus-Quickedit-Preview-Output").find(".Wikiplus-Banner").css("background", "rgba(6, 239, 92, 0.44)");
            $("#Wikiplus-Quickedit-Preview-Output").find(".Wikiplus-Banner").text("".concat(i18n_default.translate("edit_success", [useTime.toString()])));
            window.addEventListener("close", window.onbeforeunload = void 0);
            setTimeout(() => {
              location.reload();
            }, 500);
          } catch (error) {
            console.log(error);
            $(".Wikiplus-Banner").css("background", "rgba(218, 142, 167, 0.65)");
            $(".Wikiplus-Banner").html(error.message);
          } finally {
            $("#Wikiplus-Quickedit-Submit,#Wikiplus-Quickedit,#Wikiplus-Quickedit-Preview-Submit").prop("disabled", false);
          }
        }));
        $("#Wikiplus-Quickedit,#Wikiplus-Quickedit-Summary-Input,#Wikiplus-Quickedit-MinorEdit").on("keydown", (e) => {
          if (e.ctrlKey && e.which === 83) {
            if (e.shiftKey) {
              $("#Wikiplus-Quickedit-MinorEdit").trigger("click");
            }
            $("#Wikiplus-Quickedit-Submit").trigger("click");
            e.preventDefault();
            e.stopPropagation();
          }
        });
        if (escExit) {
          $(document).on("keydown", (e) => {
            if (e.which === 27) {
              $("#Wikiplus-Quickedit-Back").trigger("click");
            }
          });
        }
      }
      hideQuickEditPanel() {
        this.quickEditPanelVisible = false;
        $(".Wikiplus-InterBox").fadeOut("fast", function() {
          window.addEventListener("close", window.onbeforeunload = void 0);
          $(this).remove();
        });
      }
      /**
       * 显示快速重定向弹窗
       *
       * @param root0
       * @param root0.onEdit
       * @param root0.onSuccess
       */
      showSimpleRedirectPanel({
        onEdit = () => {
        },
        onSuccess = () => {
        }
      } = {}) {
        var _this1 = this;
        const input = $("<input>").addClass("Wikiplus-InterBox-Input").attr("id", "Wikiplus-SR-Title");
        const templateTitle = $("<p>").text("在下方输入附加模板（可选，只对wikitext内容模型生效）");
        const template = $("<input>").addClass("Wikiplus-InterBox-Input").attr("id", "Wikiplus-SR-Template");
        const summaryInputTitle = $("<p>").text(i18n_default.translate("redirect_summary_desc"));
        const summaryInput = $("<input>").addClass("Wikiplus-InterBox-Input").attr("id", "Wikiplus-SR-Summary");
        const applyBtn = $("<div>").addClass("Wikiplus-InterBox-Btn").attr("id", "Wikiplus-SR-Apply").text(i18n_default.translate("submit"));
        const cancelBtn = $("<div>").addClass("Wikiplus-InterBox-Btn").attr("id", "Wikiplus-SR-Cancel").text(i18n_default.translate("cancel"));
        const continueBtn = $("<div>").addClass("Wikiplus-InterBox-Btn").attr("id", "Wikiplus-SR-Continue").text(i18n_default.translate("continue"));
        const content = $("<div>").append(input).append(summaryInputTitle).append(summaryInput).append($("<hr>")).append(applyBtn).append(cancelBtn);
        const dialog = this.createDialogBox(i18n_default.translate("redirect_desc"), content, 600);
        applyBtn.on("click", /* @__PURE__ */ _asyncToGenerator(function* () {
          const title = $("#Wikiplus-SR-Title").val();
          const template2 = $("#Wikiplus-SR-Template").val();
          const summary = $("#Wikiplus-SR-Summary").val();
          $(".Wikiplus-InterBox-Content").html('<div class="Wikiplus-Banner">'.concat(i18n_default.translate("submitting_edit"), "</div>"));
          try {
            yield onEdit({
              title,
              summary,
              forceOverwrite: false
            });
            $(".Wikiplus-Banner").text(i18n_default.translate("redirect_saved"));
            _this1.hideSimpleRedirectPanel(dialog);
            onSuccess({
              title
            });
          } catch (error) {
            $(".Wikiplus-Banner").css("background", "rgba(218, 142, 167, 0.65)");
            $(".Wikiplus-Banner").text(error.message);
            if (error.code === "articleexists") {
              $(".Wikiplus-InterBox-Content").append($("<hr>")).append(continueBtn).append(cancelBtn);
              cancelBtn.on("click", () => {
                _this1.hideSimpleRedirectPanel(dialog);
              });
              continueBtn.on("click", /* @__PURE__ */ _asyncToGenerator(function* () {
                $(".Wikiplus-InterBox-Content").html('<div class="Wikiplus-Banner">'.concat(i18n_default.translate("submitting_edit"), "</div>"));
                try {
                  yield onEdit({
                    title,
                    summary,
                    forceOverwrite: true
                  });
                  $(".Wikiplus-Banner").text(i18n_default.translate("redirect_saved"));
                  _this1.hideSimpleRedirectPanel(dialog);
                  onSuccess({
                    title
                  });
                } catch (error2) {
                  $(".Wikiplus-Banner").css("background", "rgba(218, 142, 167, 0.65)");
                  $(".Wikiplus-Banner").text(error2.message);
                }
              }));
            }
          }
        }));
        cancelBtn.on("click", () => {
          this.hideSimpleRedirectPanel(dialog);
        });
      }
      /**
       * 隐藏快速重定向弹窗
       *
       * @param {*} dialog
       */
      hideSimpleRedirectPanel(dialog = $("body")) {
        dialog.find(".Wikiplus-InterBox-Close").trigger("click");
      }
      showSettingsPanel({
        onSubmit = () => {
        }
      } = {}) {
        var _this10 = this;
        const input = $("<textarea>").attr("id", "Wikiplus-Setting-Input").attr("rows", "10");
        const applyBtn = $("<div>").addClass("Wikiplus-InterBox-Btn").attr("id", "Wikiplus-Setting-Apply").text(i18n_default.translate("submit"));
        const cancelBtn = $("<div>").addClass("Wikiplus-InterBox-Btn").attr("id", "Wikiplus-Setting-Cancel").text(i18n_default.translate("cancel"));
        const content = $("<div>").append(input).append($("<hr>")).append(applyBtn).append(cancelBtn);
        const dialog = this.createDialogBox(i18n_default.translate("wikiplus_settings_desc"), content, 600, () => {
          if (localStorage.Wikiplus_Settings) {
            $("#Wikiplus-Setting-Input").val(localStorage.Wikiplus_Settings);
            try {
              const settings = JSON.parse(localStorage.Wikiplus_Settings);
              $("#Wikiplus-Setting-Input").val(JSON.stringify(settings, null, 2));
            } catch {
            }
          } else {
            $("#Wikiplus-Setting-Input").attr("placeholder", i18n_default.translate("wikiplus_settings_placeholder"));
          }
        });
        applyBtn.on("click", /* @__PURE__ */ _asyncToGenerator(function* () {
          const savedBanner = $("<div>").addClass("Wikiplus-Banner").text(i18n_default.translate("wikiplus_settings_saved"));
          const settings = $("#Wikiplus-Setting-Input").val();
          try {
            onSubmit({
              settings
            });
            $(".Wikiplus-InterBox-Content").html("").append(savedBanner);
            yield sleep_default(1500);
            _this10.hideSettingsPanel(dialog);
          } catch {
            notification_default.error(i18n_default.translate("wikiplus_settings_grammar_error"));
          }
        }));
        cancelBtn.on("click", () => {
          this.hideSettingsPanel(dialog);
        });
      }
      hideSettingsPanel(dialog = $("body")) {
        dialog.find(".Wikiplus-InterBox-Close").trigger("click");
      }
      bindPreloadEvents(onPreload) {
        $("#toc").children("ul").find("a").each(function(i) {
          $(this).on("mouseover", function() {
            $(this).off("mouseover");
            onPreload({
              sectionNumber: i + 1
            });
          });
        });
      }
    };
    ui_default = new UI();
  }
});
//! src/Wikiplus/modules/utils/settings.js
var Settings;
var settings_default;
var init_settings = __esm({
  "src/Wikiplus/modules/utils/settings.js"() {
    "use strict";
    Settings = class {
      getSetting(key, object = {}) {
        const w = object;
        let settings;
        try {
          settings = JSON.parse(localStorage["Wikiplus_Settings"]);
        } catch {
          return;
        }
        try {
          const customSettingFunction = new Function("return ".concat(settings[key]));
          if (typeof customSettingFunction === "function") {
            try {
              if (customSettingFunction()(w) === true) {
              } else {
                return customSettingFunction()(w) || settings[key];
              }
            } catch {
              return settings[key];
            }
          } else {
            return settings[key];
          }
        } catch {
          try {
            let result = settings[key];
            for (var _i4 = 0, _Object$keys3 = Object.keys(object); _i4 < _Object$keys3.length; _i4++) {
              const key2 = _Object$keys3[_i4];
              result = result.replace("${".concat(key2, "}"), object[key2]);
            }
            return result;
          } catch {
          }
        }
      }
    };
    settings_default = new Settings();
  }
});
//! src/Wikiplus/modules/wikiplus.less
var init_wikiplus = __esm({
  "src/Wikiplus/modules/wikiplus.less"() {
  }
});
//! src/Wikiplus/modules/index.js
var modules_exports = {};
var init_modules = __esm({
  "src/Wikiplus/modules/index.js"() {
    "use strict";
    init_page();
    init_ui();
    init_notification();
    init_wiki();
    init_settings();
    init_log();
    init_constants();
    init_i18n();
    init_wikiplus();
    $(/* @__PURE__ */ _asyncToGenerator(function* () {
      const Pages = {};
      const isCurrentPageEmpty = $(".noarticletext").length > 0 && constants_default.articleId === 0;
      const getPage = /* @__PURE__ */ (function() {
        var _ref7 = _asyncToGenerator(function* ({
          revisionId: revisionId2,
          title
        }) {
          if (Pages[revisionId2]) {
            return Pages[revisionId2];
          }
          const newPage = new page_default({
            revisionId: revisionId2,
            title
          });
          yield newPage.init();
          Pages[revisionId2] = newPage;
          return Pages[revisionId2];
        });
        return function getPage2(_x4) {
          return _ref7.apply(this, arguments);
        };
      })();
      log_default.info("Wikiplus now loading. Version: ".concat(constants_default.version));
      if (!window.mw) {
        console.log("Mediawiki JavaScript not loaded or not a Mediawiki website.");
        return;
      }
      if (!constants_default.userGroups.includes("autoconfirmed") && !constants_default.userGroups.includes("confirmed")) {
        notification_default.error(i18n_default.translate("not_autoconfirmed_user"));
        log_default.info(i18n_default.translate("not_autoconfirmed_user"));
        return;
      }
      if (!constants_default.isArticle || constants_default.action !== "view") {
        log_default.info("Not an editable page. Stop initialization.");
        return;
      }
      window._WikiplusPages = Pages;
      const currentPageName = constants_default.currentPageName;
      const revisionId = constants_default.revisionId;
      const currentPage = yield getPage({
        revisionId,
        title: currentPageName
      });
      const handleQuickEditButtonClicked = /* @__PURE__ */ (function() {
        var _ref8 = _asyncToGenerator(function* ({
          sectionNumber,
          sectionName,
          targetPageName
        } = {}) {
          const isOtherPage = targetPageName !== currentPageName;
          if (isOtherPage && constants_default.latestRevisionId !== constants_default.revisionId) {
            log_default.error("cross_page_history_revision_edit_warning");
            return;
          }
          const revisionId2 = isOtherPage ? yield wiki_default.getLatestRevisionIdForPage(targetPageName) : constants_default.revisionId;
          const page = yield getPage({
            revisionId: revisionId2,
            title: targetPageName
          });
          const customSummary = settings_default.getSetting("defaultSummary", {
            sectionName,
            sectionNumber,
            sectionTargetName: targetPageName
          });
          const summary = customSummary || (sectionName ? "/* ".concat(sectionName, " */ ").concat(i18n_default.translate("default_summary_suffix")) : i18n_default.translate("default_summary_suffix"));
          const timer = setTimeout(() => {
            notification_default.success(i18n_default.translate("loading"));
          }, 200);
          const sectionContent = yield page.getWikiText({
            section: sectionNumber
          });
          const isEditHistoryRevision = !isOtherPage && constants_default.latestRevisionId !== constants_default.revisionId;
          const escToExit = settings_default.getSetting("esc_to_exit_quickedit") === true || // 兼容老设置key
          settings_default.getSetting("esc_to_exit_quickedit") === "true" || settings_default.getSetting("escToExitQuickEdit") === true || settings_default.getSetting("escToExitQuickEdit") === "true";
          const customEditTags = settings_default.getSetting("custom_edit_tags");
          const defaultEditTags = [];
          const editTags = customEditTags !== null && customEditTags !== void 0 && customEditTags.length ? customEditTags : defaultEditTags;
          clearTimeout(timer);
          notification_default.empty();
          if (isEditHistoryRevision) {
            notification_default.warning(i18n_default.translate("history_edit_warning"));
          }
          const shouldShowCreatePageTip = isOtherPage ? !revisionId2 : isCurrentPageEmpty;
          ui_default.showQuickEditPanel({
            title: "".concat(i18n_default.translate("quickedit_topbtn")).concat(isEditHistoryRevision ? i18n_default.translate("history_edit_warning") : ""),
            content: shouldShowCreatePageTip ? i18n_default.translate("create_page_tip") : sectionContent,
            summary,
            onBack: ui_default.hideQuickEditPanel,
            onParse: (wikiText) => {
              return page.parseWikiText(wikiText);
            },
            onEdit: (function() {
              var _ref9 = _asyncToGenerator(function* ({
                content,
                summary: summary2,
                isMinorEdit
              }) {
                const editPayload = {
                  content,
                  config: {
                    summary: summary2,
                    ...sectionNumber === -1 ? {} : {
                      section: sectionNumber
                    },
                    ...editTags.length ? {
                      tags: editTags.join("|")
                    } : {}
                  }
                };
                if (isMinorEdit) {
                  editPayload.config.minor = "true";
                } else {
                  editPayload.config.notminor = "true";
                }
                yield page.edit(editPayload);
              });
              return function onEdit(_x5) {
                return _ref9.apply(this, arguments);
              };
            })(),
            escExit: escToExit
          });
        });
        return function handleQuickEditButtonClicked2() {
          return _ref8.apply(this, arguments);
        };
      })();
      const handleSimpleRedirectButtonClicked = /* @__PURE__ */ (function() {
        var _ref0 = _asyncToGenerator(function* () {
          ui_default.showSimpleRedirectPanel({
            onEdit: (function() {
              var _ref1 = _asyncToGenerator(function* ({
                title,
                summary,
                forceOverwrite = false
              }) {
                const page = yield getPage({
                  title
                });
                const template = yield getPage({
                  template
                });
                const currentPageName2 = constants_default.currentPageName;
                const contentmodel = page.contentmodel;
                if (summary == "") {
                  summary = i18n_default.translate("redirect_from_summary", [title, currentPageName2]);
                }
                const content = (() => {
                  let content2;
                  switch (contentmodel) {
                    case "javascript":
                      content2 = '/* #REDIRECT */mw.loader.load("'.concat(location.protocol, "//").concat(location.host).concat(constants_default.scriptPath, "/index.php?title=").concat(mw.util.wikiUrlencode(currentPageName2), '&action=raw&ctype=text/javascript");');
                      break;
                    case "css":
                      content2 = "/* #REDIRECT */@import url(".concat(location.protocol, "//").concat(location.host).concat(constants_default.scriptPath, "/index.php?title=").concat(mw.util.wikiUrlencode(currentPageName2), "&action=raw&ctype=text/css);");
                      break;
                    case "Scribunto":
                      content2 = "return require [[".concat(currentPageName2, "]]");
                      break;
                    case "wikitext":
                    default:
                      content2 = "#REDIRECT [[".concat(currentPageName2, "]]\n{{").concat(template, "}}");
                      break;
                  }
                  return content2;
                })();
                const payload = {
                  content,
                  config: {
                    summary
                  }
                };
                if (!forceOverwrite) {
                  payload.config.createonly = "true";
                }
                yield page.edit(payload);
              });
              return function onEdit(_x6) {
                return _ref1.apply(this, arguments);
              };
            })(),
            onSuccess: ({
              title
            }) => {
              location.href = constants_default.articlePath.replace(/\$1/gi, title);
            }
          });
        });
        return function handleSimpleRedirectButtonClicked2() {
          return _ref0.apply(this, arguments);
        };
      })();
      const handleSettingsButtonClicked = /* @__PURE__ */ (function() {
        var _ref10 = _asyncToGenerator(function* () {
          ui_default.showSettingsPanel({
            onSubmit: ({
              settings
            }) => {
              JSON.parse(settings);
              localStorage.setItem("Wikiplus_Settings", settings);
            }
          });
        });
        return function handleSettingsButtonClicked2() {
          return _ref10.apply(this, arguments);
        };
      })();
      const handlePreload = /* @__PURE__ */ (function() {
        var _ref11 = _asyncToGenerator(function* ({
          sectionNumber
        }) {
          yield currentPage.getWikiText({
            section: sectionNumber
          });
        });
        return function handlePreload2(_x7) {
          return _ref11.apply(this, arguments);
        };
      })();
      ui_default.insertTopQuickEditEntry(handleQuickEditButtonClicked);
      ui_default.insertSectionQuickEditEntries(handleQuickEditButtonClicked);
      ui_default.insertLinkEditEntries(handleQuickEditButtonClicked);
      ui_default.insertSimpleRedirectButton(handleSimpleRedirectButtonClicked);
      ui_default.insertSettingsPanelButton(handleSettingsButtonClicked);
      ui_default.bindPreloadEvents(handlePreload);
    }));
  }
});
//! src/Wikiplus/resize.ts
var resize_exports = {};
var import_ext_gadget;
var init_resize = __esm({
  "src/Wikiplus/resize.ts"() {
    "use strict";
    import_ext_gadget = require("ext.gadget.Util");
    void (0, import_ext_gadget.getBody)().then(($body) => {
      $(window).on("resize", () => {
        const windowWidth = $(window).width();
        const $wikiplusInterbox = $body.find(".Wikiplus-InterBox");
        if ($wikiplusInterbox) {
          $wikiplusInterbox.css("max-width", "calc(".concat(windowWidth, "px - 2em)"));
        }
      });
    });
  }
});
//! src/Wikiplus/Wikiplus.ts
(function Wikiplus() {
  const {
    wgAction,
    wgIsArticle
  } = mw.config.get();
  if (wgAction !== "view" || !wgIsArticle) {
    return;
  }
  const loader = /* @__PURE__ */ (function() {
    var _ref12 = _asyncToGenerator(function* () {
      const {
        "visualeditor-enable": isVeEnable
      } = mw.user.options.get();
      if (isVeEnable) {
        yield mw.loader.using("ext.visualEditor.core");
      }
      yield Promise.resolve().then(() => (init_modules(), modules_exports));
      yield Promise.resolve().then(() => (init_resize(), resize_exports));
    });
    return function loader2() {
      return _ref12.apply(this, arguments);
    };
  })();
  void loader();
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nbG9iYWwtdGhpcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2ZhaWxzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZGVzY3JpcHRvcnMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLW5hdGl2ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtcHJvcGVydHktaXMtZW51bWVyYWJsZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY2xhc3NvZi1yYXcuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbmRleGVkLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLW51bGwtb3ItdW5kZWZpbmVkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1jYWxsYWJsZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dldC1idWlsdC1pbi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1pcy1wcm90b3R5cGUtb2YuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9lbnZpcm9ubWVudC11c2VyLWFnZW50LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW52aXJvbm1lbnQtdjgtdmVyc2lvbi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3N5bWJvbC1jb25zdHJ1Y3Rvci1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXN5bWJvbC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RyeS10by1zdHJpbmcuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hLWNhbGxhYmxlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2V0LW1ldGhvZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29yZGluYXJ5LXRvLXByaW1pdGl2ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXB1cmUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tb2JqZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3VpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJvcGVydHkta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pZTgtZG9tLWRlZmluZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy92OC1wcm90b3R5cGUtZGVmaW5lLWJ1Zy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FuLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1uYW1lLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW5zcGVjdC1zb3VyY2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy93ZWFrLW1hcC1iYXNpYy1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zaGFyZWQta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGlkZGVuLWtleXMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL21ha2UtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9tYXRoLXRydW5jLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tbGVuZ3RoLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1pbmNsdWRlcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW51bS1idWcta2V5cy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL293bi1rZXlzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtZm9yY2VkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZXhwb3J0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWtleXMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnRpZXMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9odG1sLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWNyZWF0ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FkZC10by11bnNjb3BhYmxlcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5pbmNsdWRlcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLWFycmF5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tc3RyaW5nLXRhZy1zdXBwb3J0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY2xhc3NvZi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLXN0cmluZy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3BhcnNlLWpzb24tc3RyaW5nLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmpzb24ucGFyc2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1hcHBseS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXJhdy1qc29uLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktc2xpY2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9uYXRpdmUtcmF3LWpzb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuanNvbi5zdHJpbmdpZnkuanMiLCAic3JjL1dpa2lwbHVzL21vZHVsZXMvdXRpbHMvY29uc3RhbnRzLmpzIiwgInNyYy9XaWtpcGx1cy9tb2R1bGVzL3V0aWxzL3JlcXVlc3RzLmpzIiwgInNyYy9XaWtpcGx1cy9tb2R1bGVzL3V0aWxzL2kxOG4uanMiLCAic3JjL1dpa2lwbHVzL21vZHVsZXMvdXRpbHMvbG9nLmpzIiwgInNyYy9XaWtpcGx1cy9tb2R1bGVzL3NlcnZpY2VzL3dpa2kuanMiLCAic3JjL1dpa2lwbHVzL21vZHVsZXMvY29yZS9wYWdlLmpzIiwgInNyYy9XaWtpcGx1cy9tb2R1bGVzL2NvcmUvbm90aWZpY2F0aW9uLmpzIiwgInNyYy9XaWtpcGx1cy9tb2R1bGVzL3V0aWxzL3NsZWVwLmpzIiwgInNyYy9XaWtpcGx1cy9tb2R1bGVzL3V0aWxzL2hlbHBlcnMuanMiLCAic3JjL1dpa2lwbHVzL21vZHVsZXMvY29yZS91aS5qcyIsICJzcmMvV2lraXBsdXMvbW9kdWxlcy91dGlscy9zZXR0aW5ncy5qcyIsICJzcmMvV2lraXBsdXMvbW9kdWxlcy93aWtpcGx1cy5sZXNzIiwgInNyYy9XaWtpcGx1cy9tb2R1bGVzL2luZGV4LmpzIiwgInNyYy9XaWtpcGx1cy9yZXNpemUudHMiLCAic3JjL1dpa2lwbHVzL1dpa2lwbHVzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIndXNlIHN0cmljdCc7XG52YXIgY2hlY2sgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ICYmIGl0Lk1hdGggPT09IE1hdGggJiYgaXQ7XG59O1xuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxubW9kdWxlLmV4cG9ydHMgPVxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tZ2xvYmFsLXRoaXMgLS0gc2FmZVxuICBjaGVjayh0eXBlb2YgZ2xvYmFsVGhpcyA9PSAnb2JqZWN0JyAmJiBnbG9iYWxUaGlzKSB8fFxuICBjaGVjayh0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdykgfHxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtZ2xvYmFscyAtLSBzYWZlXG4gIGNoZWNrKHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYpIHx8XG4gIGNoZWNrKHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsKSB8fFxuICBjaGVjayh0eXBlb2YgdGhpcyA9PSAnb2JqZWN0JyAmJiB0aGlzKSB8fFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmMgLS0gZmFsbGJhY2tcbiAgKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0pKCkgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG4vLyBEZXRlY3QgSUU4J3MgaW5jb21wbGV0ZSBkZWZpbmVQcm9wZXJ0eSBpbXBsZW1lbnRhdGlvblxubW9kdWxlLmV4cG9ydHMgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sIDEsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pWzFdICE9PSA3O1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWZ1bmN0aW9uLXByb3RvdHlwZS1iaW5kIC0tIHNhZmVcbiAgdmFyIHRlc3QgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH0uYmluZCgpO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zIC0tIHNhZmVcbiAgcmV0dXJuIHR5cGVvZiB0ZXN0ICE9ICdmdW5jdGlvbicgfHwgdGVzdC5oYXNPd25Qcm9wZXJ0eSgncHJvdG90eXBlJyk7XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgTkFUSVZFX0JJTkQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1uYXRpdmUnKTtcblxudmFyIGNhbGwgPSBGdW5jdGlvbi5wcm90b3R5cGUuY2FsbDtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1mdW5jdGlvbi1wcm90b3R5cGUtYmluZCAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IE5BVElWRV9CSU5EID8gY2FsbC5iaW5kKGNhbGwpIDogZnVuY3Rpb24gKCkge1xuICByZXR1cm4gY2FsbC5hcHBseShjYWxsLCBhcmd1bWVudHMpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJHByb3BlcnR5SXNFbnVtZXJhYmxlID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuLy8gTmFzaG9ybiB+IEpESzggYnVnXG52YXIgTkFTSE9STl9CVUcgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgJiYgISRwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHsgMTogMiB9LCAxKTtcblxuLy8gYE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGVgIG1ldGhvZCBpbXBsZW1lbnRhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QucHJvdG90eXBlLnByb3BlcnR5aXNlbnVtZXJhYmxlXG5leHBvcnRzLmYgPSBOQVNIT1JOX0JVRyA/IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKFYpIHtcbiAgdmFyIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGhpcywgVik7XG4gIHJldHVybiAhIWRlc2NyaXB0b3IgJiYgZGVzY3JpcHRvci5lbnVtZXJhYmxlO1xufSA6ICRwcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChiaXRtYXAsIHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZTogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGU6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWU6IHZhbHVlXG4gIH07XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBOQVRJVkVfQklORCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLW5hdGl2ZScpO1xuXG52YXIgRnVuY3Rpb25Qcm90b3R5cGUgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG52YXIgY2FsbCA9IEZ1bmN0aW9uUHJvdG90eXBlLmNhbGw7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tZnVuY3Rpb24tcHJvdG90eXBlLWJpbmQgLS0gc2FmZVxudmFyIHVuY3VycnlUaGlzV2l0aEJpbmQgPSBOQVRJVkVfQklORCAmJiBGdW5jdGlvblByb3RvdHlwZS5iaW5kLmJpbmQoY2FsbCwgY2FsbCk7XG5cbm1vZHVsZS5leHBvcnRzID0gTkFUSVZFX0JJTkQgPyB1bmN1cnJ5VGhpc1dpdGhCaW5kIDogZnVuY3Rpb24gKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGNhbGwuYXBwbHkoZm4sIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcblxudmFyIHRvU3RyaW5nID0gdW5jdXJyeVRoaXMoe30udG9TdHJpbmcpO1xudmFyIHN0cmluZ1NsaWNlID0gdW5jdXJyeVRoaXMoJycuc2xpY2UpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gc3RyaW5nU2xpY2UodG9TdHJpbmcoaXQpLCA4LCAtMSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcblxudmFyICRPYmplY3QgPSBPYmplY3Q7XG52YXIgc3BsaXQgPSB1bmN1cnJ5VGhpcygnJy5zcGxpdCk7XG5cbi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG5tb2R1bGUuZXhwb3J0cyA9IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gdGhyb3dzIGFuIGVycm9yIGluIHJoaW5vLCBzZWUgaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvcmhpbm8vaXNzdWVzLzM0NlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zIC0tIHNhZmVcbiAgcmV0dXJuICEkT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCk7XG59KSA/IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gY2xhc3NvZihpdCkgPT09ICdTdHJpbmcnID8gc3BsaXQoaXQsICcnKSA6ICRPYmplY3QoaXQpO1xufSA6ICRPYmplY3Q7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gd2UgY2FuJ3QgdXNlIGp1c3QgYGl0ID09IG51bGxgIHNpbmNlIG9mIGBkb2N1bWVudC5hbGxgIHNwZWNpYWwgY2FzZVxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1Jc0hUTUxEREEtaW50ZXJuYWwtc2xvdC1hZWNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCA9PT0gbnVsbCB8fCBpdCA9PT0gdW5kZWZpbmVkO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaXNOdWxsT3JVbmRlZmluZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtbnVsbC1vci11bmRlZmluZWQnKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbi8vIGBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcmVxdWlyZW9iamVjdGNvZXJjaWJsZVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGlzTnVsbE9yVW5kZWZpbmVkKGl0KSkgdGhyb3cgbmV3ICRUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG4vLyB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIEluZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QnKTtcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gSW5kZXhlZE9iamVjdChyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGl0KSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtSXNIVE1MRERBLWludGVybmFsLXNsb3RcbnZhciBkb2N1bWVudEFsbCA9IHR5cGVvZiBkb2N1bWVudCA9PSAnb2JqZWN0JyAmJiBkb2N1bWVudC5hbGw7XG5cbi8vIGBJc0NhbGxhYmxlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtaXNjYWxsYWJsZVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHVuaWNvcm4vbm8tdHlwZW9mLXVuZGVmaW5lZCAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xubW9kdWxlLmV4cG9ydHMgPSB0eXBlb2YgZG9jdW1lbnRBbGwgPT0gJ3VuZGVmaW5lZCcgJiYgZG9jdW1lbnRBbGwgIT09IHVuZGVmaW5lZCA/IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gdHlwZW9mIGFyZ3VtZW50ID09ICdmdW5jdGlvbicgfHwgYXJndW1lbnQgPT09IGRvY3VtZW50QWxsO1xufSA6IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gdHlwZW9mIGFyZ3VtZW50ID09ICdmdW5jdGlvbic7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IGlzQ2FsbGFibGUoaXQpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcblxudmFyIGFGdW5jdGlvbiA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gaXNDYWxsYWJsZShhcmd1bWVudCkgPyBhcmd1bWVudCA6IHVuZGVmaW5lZDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWVzcGFjZSwgbWV0aG9kKSB7XG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoIDwgMiA/IGFGdW5jdGlvbihnbG9iYWxUaGlzW25hbWVzcGFjZV0pIDogZ2xvYmFsVGhpc1tuYW1lc3BhY2VdICYmIGdsb2JhbFRoaXNbbmFtZXNwYWNlXVttZXRob2RdO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gdW5jdXJyeVRoaXMoe30uaXNQcm90b3R5cGVPZik7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcblxudmFyIG5hdmlnYXRvciA9IGdsb2JhbFRoaXMubmF2aWdhdG9yO1xudmFyIHVzZXJBZ2VudCA9IG5hdmlnYXRvciAmJiBuYXZpZ2F0b3IudXNlckFnZW50O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHVzZXJBZ2VudCA/IFN0cmluZyh1c2VyQWdlbnQpIDogJyc7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcbnZhciB1c2VyQWdlbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW52aXJvbm1lbnQtdXNlci1hZ2VudCcpO1xuXG52YXIgcHJvY2VzcyA9IGdsb2JhbFRoaXMucHJvY2VzcztcbnZhciBEZW5vID0gZ2xvYmFsVGhpcy5EZW5vO1xudmFyIHZlcnNpb25zID0gcHJvY2VzcyAmJiBwcm9jZXNzLnZlcnNpb25zIHx8IERlbm8gJiYgRGVuby52ZXJzaW9uO1xudmFyIHY4ID0gdmVyc2lvbnMgJiYgdmVyc2lvbnMudjg7XG52YXIgbWF0Y2gsIHZlcnNpb247XG5cbmlmICh2OCkge1xuICBtYXRjaCA9IHY4LnNwbGl0KCcuJyk7XG4gIC8vIGluIG9sZCBDaHJvbWUsIHZlcnNpb25zIG9mIFY4IGlzbid0IFY4ID0gQ2hyb21lIC8gMTBcbiAgLy8gYnV0IHRoZWlyIGNvcnJlY3QgdmVyc2lvbnMgYXJlIG5vdCBpbnRlcmVzdGluZyBmb3IgdXNcbiAgdmVyc2lvbiA9IG1hdGNoWzBdID4gMCAmJiBtYXRjaFswXSA8IDQgPyAxIDogKyhtYXRjaFswXSArIG1hdGNoWzFdKTtcbn1cblxuLy8gQnJvd3NlckZTIE5vZGVKUyBgcHJvY2Vzc2AgcG9seWZpbGwgaW5jb3JyZWN0bHkgc2V0IGAudjhgIHRvIGAwLjBgXG4vLyBzbyBjaGVjayBgdXNlckFnZW50YCBldmVuIGlmIGAudjhgIGV4aXN0cywgYnV0IDBcbmlmICghdmVyc2lvbiAmJiB1c2VyQWdlbnQpIHtcbiAgbWF0Y2ggPSB1c2VyQWdlbnQubWF0Y2goL0VkZ2VcXC8oXFxkKykvKTtcbiAgaWYgKCFtYXRjaCB8fCBtYXRjaFsxXSA+PSA3NCkge1xuICAgIG1hdGNoID0gdXNlckFnZW50Lm1hdGNoKC9DaHJvbWVcXC8oXFxkKykvKTtcbiAgICBpZiAobWF0Y2gpIHZlcnNpb24gPSArbWF0Y2hbMV07XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB2ZXJzaW9uO1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIGVzL25vLXN5bWJvbCAtLSByZXF1aXJlZCBmb3IgdGVzdGluZyAqL1xudmFyIFY4X1ZFUlNJT04gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW52aXJvbm1lbnQtdjgtdmVyc2lvbicpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xuXG52YXIgJFN0cmluZyA9IGdsb2JhbFRoaXMuU3RyaW5nO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5c3ltYm9scyAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xubW9kdWxlLmV4cG9ydHMgPSAhIU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHN5bWJvbCA9IFN5bWJvbCgnc3ltYm9sIGRldGVjdGlvbicpO1xuICAvLyBDaHJvbWUgMzggU3ltYm9sIGhhcyBpbmNvcnJlY3QgdG9TdHJpbmcgY29udmVyc2lvblxuICAvLyBgZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzYCBwb2x5ZmlsbCBzeW1ib2xzIGNvbnZlcnRlZCB0byBvYmplY3QgYXJlIG5vdCBTeW1ib2wgaW5zdGFuY2VzXG4gIC8vIG5iOiBEbyBub3QgY2FsbCBgU3RyaW5nYCBkaXJlY3RseSB0byBhdm9pZCB0aGlzIGJlaW5nIG9wdGltaXplZCBvdXQgdG8gYHN5bWJvbCsnJ2Agd2hpY2ggd2lsbCxcbiAgLy8gb2YgY291cnNlLCBmYWlsLlxuICByZXR1cm4gISRTdHJpbmcoc3ltYm9sKSB8fCAhKE9iamVjdChzeW1ib2wpIGluc3RhbmNlb2YgU3ltYm9sKSB8fFxuICAgIC8vIENocm9tZSAzOC00MCBzeW1ib2xzIGFyZSBub3QgaW5oZXJpdGVkIGZyb20gRE9NIGNvbGxlY3Rpb25zIHByb3RvdHlwZXMgdG8gaW5zdGFuY2VzXG4gICAgIVN5bWJvbC5zaGFtICYmIFY4X1ZFUlNJT04gJiYgVjhfVkVSU0lPTiA8IDQxO1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgZXMvbm8tc3ltYm9sIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nICovXG52YXIgTkFUSVZFX1NZTUJPTCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zeW1ib2wtY29uc3RydWN0b3ItZGV0ZWN0aW9uJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gTkFUSVZFX1NZTUJPTCAmJlxuICAhU3ltYm9sLnNoYW0gJiZcbiAgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PSAnc3ltYm9sJztcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgaXNQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtaXMtcHJvdG90eXBlLW9mJyk7XG52YXIgVVNFX1NZTUJPTF9BU19VSUQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdXNlLXN5bWJvbC1hcy11aWQnKTtcblxudmFyICRPYmplY3QgPSBPYmplY3Q7XG5cbm1vZHVsZS5leHBvcnRzID0gVVNFX1NZTUJPTF9BU19VSUQgPyBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJztcbn0gOiBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyICRTeW1ib2wgPSBnZXRCdWlsdEluKCdTeW1ib2wnKTtcbiAgcmV0dXJuIGlzQ2FsbGFibGUoJFN5bWJvbCkgJiYgaXNQcm90b3R5cGVPZigkU3ltYm9sLnByb3RvdHlwZSwgJE9iamVjdChpdCkpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJFN0cmluZyA9IFN0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gJFN0cmluZyhhcmd1bWVudCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuICdPYmplY3QnO1xuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgdHJ5VG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdHJ5LXRvLXN0cmluZycpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gYEFzc2VydDogSXNDYWxsYWJsZShhcmd1bWVudCkgaXMgdHJ1ZWBcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIGlmIChpc0NhbGxhYmxlKGFyZ3VtZW50KSkgcmV0dXJuIGFyZ3VtZW50O1xuICB0aHJvdyBuZXcgJFR5cGVFcnJvcih0cnlUb1N0cmluZyhhcmd1bWVudCkgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBhQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1jYWxsYWJsZScpO1xudmFyIGlzTnVsbE9yVW5kZWZpbmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW51bGwtb3ItdW5kZWZpbmVkJyk7XG5cbi8vIGBHZXRNZXRob2RgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1nZXRtZXRob2Rcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFYsIFApIHtcbiAgdmFyIGZ1bmMgPSBWW1BdO1xuICByZXR1cm4gaXNOdWxsT3JVbmRlZmluZWQoZnVuYykgPyB1bmRlZmluZWQgOiBhQ2FsbGFibGUoZnVuYyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG4vLyBgT3JkaW5hcnlUb1ByaW1pdGl2ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9yZGluYXJ5dG9wcmltaXRpdmVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGlucHV0LCBwcmVmKSB7XG4gIHZhciBmbiwgdmFsO1xuICBpZiAocHJlZiA9PT0gJ3N0cmluZycgJiYgaXNDYWxsYWJsZShmbiA9IGlucHV0LnRvU3RyaW5nKSAmJiAhaXNPYmplY3QodmFsID0gY2FsbChmbiwgaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKGlzQ2FsbGFibGUoZm4gPSBpbnB1dC52YWx1ZU9mKSAmJiAhaXNPYmplY3QodmFsID0gY2FsbChmbiwgaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKHByZWYgIT09ICdzdHJpbmcnICYmIGlzQ2FsbGFibGUoZm4gPSBpbnB1dC50b1N0cmluZykgJiYgIWlzT2JqZWN0KHZhbCA9IGNhbGwoZm4sIGlucHV0KSkpIHJldHVybiB2YWw7XG4gIHRocm93IG5ldyAkVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZhbHNlO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxudmFyIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIHRyeSB7XG4gICAgZGVmaW5lUHJvcGVydHkoZ2xvYmFsVGhpcywga2V5LCB7IHZhbHVlOiB2YWx1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBnbG9iYWxUaGlzW2tleV0gPSB2YWx1ZTtcbiAgfSByZXR1cm4gdmFsdWU7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBJU19QVVJFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXB1cmUnKTtcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgZGVmaW5lR2xvYmFsUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWdsb2JhbC1wcm9wZXJ0eScpO1xuXG52YXIgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXyc7XG52YXIgc3RvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IGdsb2JhbFRoaXNbU0hBUkVEXSB8fCBkZWZpbmVHbG9iYWxQcm9wZXJ0eShTSEFSRUQsIHt9KTtcblxuKHN0b3JlLnZlcnNpb25zIHx8IChzdG9yZS52ZXJzaW9ucyA9IFtdKSkucHVzaCh7XG4gIHZlcnNpb246ICczLjQ5LjAnLFxuICBtb2RlOiBJU19QVVJFID8gJ3B1cmUnIDogJ2dsb2JhbCcsXG4gIGNvcHlyaWdodDogJ8KpIDIwMTPigJMyMDI1IERlbmlzIFB1c2hrYXJldiAoemxvaXJvY2sucnUpLCAyMDI14oCTMjAyNiBDb3JlSlMgQ29tcGFueSAoY29yZS1qcy5pbykuIEFsbCByaWdodHMgcmVzZXJ2ZWQuJyxcbiAgbGljZW5zZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2Jsb2IvdjMuNDkuMC9MSUNFTlNFJyxcbiAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMnXG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgc3RvcmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB2YWx1ZSB8fCB7fSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xuXG52YXIgJE9iamVjdCA9IE9iamVjdDtcblxuLy8gYFRvT2JqZWN0YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9vYmplY3Rcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiAkT2JqZWN0KHJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xuXG52YXIgaGFzT3duUHJvcGVydHkgPSB1bmN1cnJ5VGhpcyh7fS5oYXNPd25Qcm9wZXJ0eSk7XG5cbi8vIGBIYXNPd25Qcm9wZXJ0eWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWhhc293bnByb3BlcnR5XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWhhc293biAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5oYXNPd24gfHwgZnVuY3Rpb24gaGFzT3duKGl0LCBrZXkpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5KHRvT2JqZWN0KGl0KSwga2V5KTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xuXG52YXIgaWQgPSAwO1xudmFyIHBvc3RmaXggPSBNYXRoLnJhbmRvbSgpO1xudmFyIHRvU3RyaW5nID0gdW5jdXJyeVRoaXMoMS4xLnRvU3RyaW5nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiAnU3ltYm9sKCcgKyAoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSkgKyAnKV8nICsgdG9TdHJpbmcoKytpZCArIHBvc3RmaXgsIDM2KTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkJyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdWlkJyk7XG52YXIgTkFUSVZFX1NZTUJPTCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zeW1ib2wtY29uc3RydWN0b3ItZGV0ZWN0aW9uJyk7XG52YXIgVVNFX1NZTUJPTF9BU19VSUQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdXNlLXN5bWJvbC1hcy11aWQnKTtcblxudmFyIFN5bWJvbCA9IGdsb2JhbFRoaXMuU3ltYm9sO1xudmFyIFdlbGxLbm93blN5bWJvbHNTdG9yZSA9IHNoYXJlZCgnd2tzJyk7XG52YXIgY3JlYXRlV2VsbEtub3duU3ltYm9sID0gVVNFX1NZTUJPTF9BU19VSUQgPyBTeW1ib2xbJ2ZvciddIHx8IFN5bWJvbCA6IFN5bWJvbCAmJiBTeW1ib2wud2l0aG91dFNldHRlciB8fCB1aWQ7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgaWYgKCFoYXNPd24oV2VsbEtub3duU3ltYm9sc1N0b3JlLCBuYW1lKSkge1xuICAgIFdlbGxLbm93blN5bWJvbHNTdG9yZVtuYW1lXSA9IE5BVElWRV9TWU1CT0wgJiYgaGFzT3duKFN5bWJvbCwgbmFtZSlcbiAgICAgID8gU3ltYm9sW25hbWVdXG4gICAgICA6IGNyZWF0ZVdlbGxLbm93blN5bWJvbCgnU3ltYm9sLicgKyBuYW1lKTtcbiAgfSByZXR1cm4gV2VsbEtub3duU3ltYm9sc1N0b3JlW25hbWVdO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgaXNTeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtc3ltYm9sJyk7XG52YXIgZ2V0TWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1tZXRob2QnKTtcbnZhciBvcmRpbmFyeVRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29yZGluYXJ5LXRvLXByaW1pdGl2ZScpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcbnZhciBUT19QUklNSVRJVkUgPSB3ZWxsS25vd25TeW1ib2woJ3RvUHJpbWl0aXZlJyk7XG5cbi8vIGBUb1ByaW1pdGl2ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvcHJpbWl0aXZlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbnB1dCwgcHJlZikge1xuICBpZiAoIWlzT2JqZWN0KGlucHV0KSB8fCBpc1N5bWJvbChpbnB1dCkpIHJldHVybiBpbnB1dDtcbiAgdmFyIGV4b3RpY1RvUHJpbSA9IGdldE1ldGhvZChpbnB1dCwgVE9fUFJJTUlUSVZFKTtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKGV4b3RpY1RvUHJpbSkge1xuICAgIGlmIChwcmVmID09PSB1bmRlZmluZWQpIHByZWYgPSAnZGVmYXVsdCc7XG4gICAgcmVzdWx0ID0gY2FsbChleG90aWNUb1ByaW0sIGlucHV0LCBwcmVmKTtcbiAgICBpZiAoIWlzT2JqZWN0KHJlc3VsdCkgfHwgaXNTeW1ib2wocmVzdWx0KSkgcmV0dXJuIHJlc3VsdDtcbiAgICB0aHJvdyBuZXcgJFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbiAgfVxuICBpZiAocHJlZiA9PT0gdW5kZWZpbmVkKSBwcmVmID0gJ251bWJlcic7XG4gIHJldHVybiBvcmRpbmFyeVRvUHJpbWl0aXZlKGlucHV0LCBwcmVmKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByaW1pdGl2ZScpO1xudmFyIGlzU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXN5bWJvbCcpO1xuXG4vLyBgVG9Qcm9wZXJ0eUtleWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvcHJvcGVydHlrZXlcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHZhciBrZXkgPSB0b1ByaW1pdGl2ZShhcmd1bWVudCwgJ3N0cmluZycpO1xuICByZXR1cm4gaXNTeW1ib2woa2V5KSA/IGtleSA6IGtleSArICcnO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG52YXIgZG9jdW1lbnQgPSBnbG9iYWxUaGlzLmRvY3VtZW50O1xuLy8gdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCcgaW4gb2xkIElFXG52YXIgRVhJU1RTID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gRVhJU1RTID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBjcmVhdGVFbGVtZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvY3VtZW50LWNyZWF0ZS1lbGVtZW50Jyk7XG5cbi8vIFRoYW5rcyB0byBJRTggZm9yIGl0cyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhREVTQ1JJUFRPUlMgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGNyZWF0ZUVsZW1lbnQoJ2RpdicpLCAnYScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH1cbiAgfSkuYSAhPT0gNztcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1wcm9wZXJ0eS1pcy1lbnVtZXJhYmxlJyk7XG52YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgdG9Qcm9wZXJ0eUtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1wcm9wZXJ0eS1rZXknKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2llOC1kb20tZGVmaW5lJyk7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuLy8gYE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yXG5leHBvcnRzLmYgPSBERVNDUklQVE9SUyA/ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCkge1xuICBPID0gdG9JbmRleGVkT2JqZWN0KE8pO1xuICBQID0gdG9Qcm9wZXJ0eUtleShQKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gIGlmIChoYXNPd24oTywgUCkpIHJldHVybiBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoIWNhbGwocHJvcGVydHlJc0VudW1lcmFibGVNb2R1bGUuZiwgTywgUCksIE9bUF0pO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG4vLyBWOCB+IENocm9tZSAzNi1cbi8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMzMzRcbm1vZHVsZS5leHBvcnRzID0gREVTQ1JJUFRPUlMgJiYgZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9LCAncHJvdG90eXBlJywge1xuICAgIHZhbHVlOiA0MixcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSkucHJvdG90eXBlICE9PSA0Mjtcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcblxudmFyICRTdHJpbmcgPSBTdHJpbmc7XG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gYEFzc2VydDogVHlwZShhcmd1bWVudCkgaXMgT2JqZWN0YFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgaWYgKGlzT2JqZWN0KGFyZ3VtZW50KSkgcmV0dXJuIGFyZ3VtZW50O1xuICB0aHJvdyBuZXcgJFR5cGVFcnJvcigkU3RyaW5nKGFyZ3VtZW50KSArICcgaXMgbm90IGFuIG9iamVjdCcpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pZTgtZG9tLWRlZmluZScpO1xudmFyIFY4X1BST1RPVFlQRV9ERUZJTkVfQlVHID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3Y4LXByb3RvdHlwZS1kZWZpbmUtYnVnJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgdG9Qcm9wZXJ0eUtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1wcm9wZXJ0eS1rZXknKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHNhZmVcbnZhciAkZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG52YXIgRU5VTUVSQUJMRSA9ICdlbnVtZXJhYmxlJztcbnZhciBDT05GSUdVUkFCTEUgPSAnY29uZmlndXJhYmxlJztcbnZhciBXUklUQUJMRSA9ICd3cml0YWJsZSc7XG5cbi8vIGBPYmplY3QuZGVmaW5lUHJvcGVydHlgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuZGVmaW5lcHJvcGVydHlcbmV4cG9ydHMuZiA9IERFU0NSSVBUT1JTID8gVjhfUFJPVE9UWVBFX0RFRklORV9CVUcgPyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9Qcm9wZXJ0eUtleShQKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmICh0eXBlb2YgTyA9PT0gJ2Z1bmN0aW9uJyAmJiBQID09PSAncHJvdG90eXBlJyAmJiAndmFsdWUnIGluIEF0dHJpYnV0ZXMgJiYgV1JJVEFCTEUgaW4gQXR0cmlidXRlcyAmJiAhQXR0cmlidXRlc1tXUklUQUJMRV0pIHtcbiAgICB2YXIgY3VycmVudCA9ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCk7XG4gICAgaWYgKGN1cnJlbnQgJiYgY3VycmVudFtXUklUQUJMRV0pIHtcbiAgICAgIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICAgICAgQXR0cmlidXRlcyA9IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiBDT05GSUdVUkFCTEUgaW4gQXR0cmlidXRlcyA/IEF0dHJpYnV0ZXNbQ09ORklHVVJBQkxFXSA6IGN1cnJlbnRbQ09ORklHVVJBQkxFXSxcbiAgICAgICAgZW51bWVyYWJsZTogRU5VTUVSQUJMRSBpbiBBdHRyaWJ1dGVzID8gQXR0cmlidXRlc1tFTlVNRVJBQkxFXSA6IGN1cnJlbnRbRU5VTUVSQUJMRV0sXG4gICAgICAgIHdyaXRhYmxlOiBmYWxzZVxuICAgICAgfTtcbiAgICB9XG4gIH0gcmV0dXJuICRkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKTtcbn0gOiAkZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9Qcm9wZXJ0eUtleShQKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gJGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gIGlmICgnZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpIHRocm93IG5ldyAkVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCcpO1xuICBpZiAoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKSBPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBERVNDUklQVE9SUyA/IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIGRlZmluZVByb3BlcnR5TW9kdWxlLmYob2JqZWN0LCBrZXksIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcigxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcblxudmFyIEZ1bmN0aW9uUHJvdG90eXBlID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyIGdldERlc2NyaXB0b3IgPSBERVNDUklQVE9SUyAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG52YXIgRVhJU1RTID0gaGFzT3duKEZ1bmN0aW9uUHJvdG90eXBlLCAnbmFtZScpO1xuLy8gYWRkaXRpb25hbCBwcm90ZWN0aW9uIGZyb20gbWluaWZpZWQgLyBtYW5nbGVkIC8gZHJvcHBlZCBmdW5jdGlvbiBuYW1lc1xudmFyIFBST1BFUiA9IEVYSVNUUyAmJiBmdW5jdGlvbiBzb21ldGhpbmcoKSB7IC8qIGVtcHR5ICovIH0ubmFtZSA9PT0gJ3NvbWV0aGluZyc7XG52YXIgQ09ORklHVVJBQkxFID0gRVhJU1RTICYmICghREVTQ1JJUFRPUlMgfHwgKERFU0NSSVBUT1JTICYmIGdldERlc2NyaXB0b3IoRnVuY3Rpb25Qcm90b3R5cGUsICduYW1lJykuY29uZmlndXJhYmxlKSk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBFWElTVFM6IEVYSVNUUyxcbiAgUFJPUEVSOiBQUk9QRVIsXG4gIENPTkZJR1VSQUJMRTogQ09ORklHVVJBQkxFXG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgc3RvcmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlJyk7XG5cbnZhciBmdW5jdGlvblRvU3RyaW5nID0gdW5jdXJyeVRoaXMoRnVuY3Rpb24udG9TdHJpbmcpO1xuXG4vLyB0aGlzIGhlbHBlciBicm9rZW4gaW4gYGNvcmUtanNAMy40LjEtMy40LjRgLCBzbyB3ZSBjYW4ndCB1c2UgYHNoYXJlZGAgaGVscGVyXG5pZiAoIWlzQ2FsbGFibGUoc3RvcmUuaW5zcGVjdFNvdXJjZSkpIHtcbiAgc3RvcmUuaW5zcGVjdFNvdXJjZSA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBmdW5jdGlvblRvU3RyaW5nKGl0KTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdG9yZS5pbnNwZWN0U291cmNlO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xuXG52YXIgV2Vha01hcCA9IGdsb2JhbFRoaXMuV2Vha01hcDtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0NhbGxhYmxlKFdlYWtNYXApICYmIC9uYXRpdmUgY29kZS8udGVzdChTdHJpbmcoV2Vha01hcCkpO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VpZCcpO1xuXG52YXIga2V5cyA9IHNoYXJlZCgna2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIGtleXNba2V5XSB8fCAoa2V5c1trZXldID0gdWlkKGtleSkpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBOQVRJVkVfV0VBS19NQVAgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2Vhay1tYXAtYmFzaWMtZGV0ZWN0aW9uJyk7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQtc3RvcmUnKTtcbnZhciBzaGFyZWRLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLWtleScpO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGlkZGVuLWtleXMnKTtcblxudmFyIE9CSkVDVF9BTFJFQURZX0lOSVRJQUxJWkVEID0gJ09iamVjdCBhbHJlYWR5IGluaXRpYWxpemVkJztcbnZhciBUeXBlRXJyb3IgPSBnbG9iYWxUaGlzLlR5cGVFcnJvcjtcbnZhciBXZWFrTWFwID0gZ2xvYmFsVGhpcy5XZWFrTWFwO1xudmFyIHNldCwgZ2V0LCBoYXM7XG5cbnZhciBlbmZvcmNlID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBoYXMoaXQpID8gZ2V0KGl0KSA6IHNldChpdCwge30pO1xufTtcblxudmFyIGdldHRlckZvciA9IGZ1bmN0aW9uIChUWVBFKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoaXQpIHtcbiAgICB2YXIgc3RhdGU7XG4gICAgaWYgKCFpc09iamVjdChpdCkgfHwgKHN0YXRlID0gZ2V0KGl0KSkudHlwZSAhPT0gVFlQRSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW5jb21wYXRpYmxlIHJlY2VpdmVyLCAnICsgVFlQRSArICcgcmVxdWlyZWQnKTtcbiAgICB9IHJldHVybiBzdGF0ZTtcbiAgfTtcbn07XG5cbmlmIChOQVRJVkVfV0VBS19NQVAgfHwgc2hhcmVkLnN0YXRlKSB7XG4gIHZhciBzdG9yZSA9IHNoYXJlZC5zdGF0ZSB8fCAoc2hhcmVkLnN0YXRlID0gbmV3IFdlYWtNYXAoKSk7XG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLXNlbGYtYXNzaWduIC0tIHByb3RvdHlwZSBtZXRob2RzIHByb3RlY3Rpb24gKi9cbiAgc3RvcmUuZ2V0ID0gc3RvcmUuZ2V0O1xuICBzdG9yZS5oYXMgPSBzdG9yZS5oYXM7XG4gIHN0b3JlLnNldCA9IHN0b3JlLnNldDtcbiAgLyogZXNsaW50LWVuYWJsZSBuby1zZWxmLWFzc2lnbiAtLSBwcm90b3R5cGUgbWV0aG9kcyBwcm90ZWN0aW9uICovXG4gIHNldCA9IGZ1bmN0aW9uIChpdCwgbWV0YWRhdGEpIHtcbiAgICBpZiAoc3RvcmUuaGFzKGl0KSkgdGhyb3cgbmV3IFR5cGVFcnJvcihPQkpFQ1RfQUxSRUFEWV9JTklUSUFMSVpFRCk7XG4gICAgbWV0YWRhdGEuZmFjYWRlID0gaXQ7XG4gICAgc3RvcmUuc2V0KGl0LCBtZXRhZGF0YSk7XG4gICAgcmV0dXJuIG1ldGFkYXRhO1xuICB9O1xuICBnZXQgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gc3RvcmUuZ2V0KGl0KSB8fCB7fTtcbiAgfTtcbiAgaGFzID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIHN0b3JlLmhhcyhpdCk7XG4gIH07XG59IGVsc2Uge1xuICB2YXIgU1RBVEUgPSBzaGFyZWRLZXkoJ3N0YXRlJyk7XG4gIGhpZGRlbktleXNbU1RBVEVdID0gdHJ1ZTtcbiAgc2V0ID0gZnVuY3Rpb24gKGl0LCBtZXRhZGF0YSkge1xuICAgIGlmIChoYXNPd24oaXQsIFNUQVRFKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihPQkpFQ1RfQUxSRUFEWV9JTklUSUFMSVpFRCk7XG4gICAgbWV0YWRhdGEuZmFjYWRlID0gaXQ7XG4gICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KGl0LCBTVEFURSwgbWV0YWRhdGEpO1xuICAgIHJldHVybiBtZXRhZGF0YTtcbiAgfTtcbiAgZ2V0ID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIGhhc093bihpdCwgU1RBVEUpID8gaXRbU1RBVEVdIDoge307XG4gIH07XG4gIGhhcyA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBoYXNPd24oaXQsIFNUQVRFKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogc2V0LFxuICBnZXQ6IGdldCxcbiAgaGFzOiBoYXMsXG4gIGVuZm9yY2U6IGVuZm9yY2UsXG4gIGdldHRlckZvcjogZ2V0dGVyRm9yXG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgQ09ORklHVVJBQkxFX0ZVTkNUSU9OX05BTUUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tbmFtZScpLkNPTkZJR1VSQUJMRTtcbnZhciBpbnNwZWN0U291cmNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luc3BlY3Qtc291cmNlJyk7XG52YXIgSW50ZXJuYWxTdGF0ZU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZScpO1xuXG52YXIgZW5mb3JjZUludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmVuZm9yY2U7XG52YXIgZ2V0SW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuZ2V0O1xudmFyICRTdHJpbmcgPSBTdHJpbmc7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHNhZmVcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBzdHJpbmdTbGljZSA9IHVuY3VycnlUaGlzKCcnLnNsaWNlKTtcbnZhciByZXBsYWNlID0gdW5jdXJyeVRoaXMoJycucmVwbGFjZSk7XG52YXIgam9pbiA9IHVuY3VycnlUaGlzKFtdLmpvaW4pO1xuXG52YXIgQ09ORklHVVJBQkxFX0xFTkdUSCA9IERFU0NSSVBUT1JTICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBkZWZpbmVQcm9wZXJ0eShmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH0sICdsZW5ndGgnLCB7IHZhbHVlOiA4IH0pLmxlbmd0aCAhPT0gODtcbn0pO1xuXG52YXIgVEVNUExBVEUgPSBTdHJpbmcoU3RyaW5nKS5zcGxpdCgnU3RyaW5nJyk7XG5cbnZhciBtYWtlQnVpbHRJbiA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHZhbHVlLCBuYW1lLCBvcHRpb25zKSB7XG4gIGlmIChzdHJpbmdTbGljZSgkU3RyaW5nKG5hbWUpLCAwLCA3KSA9PT0gJ1N5bWJvbCgnKSB7XG4gICAgbmFtZSA9ICdbJyArIHJlcGxhY2UoJFN0cmluZyhuYW1lKSwgL15TeW1ib2xcXCgoW14pXSopXFwpLiokLywgJyQxJykgKyAnXSc7XG4gIH1cbiAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5nZXR0ZXIpIG5hbWUgPSAnZ2V0ICcgKyBuYW1lO1xuICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLnNldHRlcikgbmFtZSA9ICdzZXQgJyArIG5hbWU7XG4gIGlmICghaGFzT3duKHZhbHVlLCAnbmFtZScpIHx8IChDT05GSUdVUkFCTEVfRlVOQ1RJT05fTkFNRSAmJiB2YWx1ZS5uYW1lICE9PSBuYW1lKSkge1xuICAgIGlmIChERVNDUklQVE9SUykgZGVmaW5lUHJvcGVydHkodmFsdWUsICduYW1lJywgeyB2YWx1ZTogbmFtZSwgY29uZmlndXJhYmxlOiB0cnVlIH0pO1xuICAgIGVsc2UgdmFsdWUubmFtZSA9IG5hbWU7XG4gIH1cbiAgaWYgKENPTkZJR1VSQUJMRV9MRU5HVEggJiYgb3B0aW9ucyAmJiBoYXNPd24ob3B0aW9ucywgJ2FyaXR5JykgJiYgdmFsdWUubGVuZ3RoICE9PSBvcHRpb25zLmFyaXR5KSB7XG4gICAgZGVmaW5lUHJvcGVydHkodmFsdWUsICdsZW5ndGgnLCB7IHZhbHVlOiBvcHRpb25zLmFyaXR5IH0pO1xuICB9XG4gIHRyeSB7XG4gICAgaWYgKG9wdGlvbnMgJiYgaGFzT3duKG9wdGlvbnMsICdjb25zdHJ1Y3RvcicpICYmIG9wdGlvbnMuY29uc3RydWN0b3IpIHtcbiAgICAgIGlmIChERVNDUklQVE9SUykgZGVmaW5lUHJvcGVydHkodmFsdWUsICdwcm90b3R5cGUnLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTtcbiAgICAvLyBpbiBWOCB+IENocm9tZSA1MywgcHJvdG90eXBlcyBvZiBzb21lIG1ldGhvZHMsIGxpa2UgYEFycmF5LnByb3RvdHlwZS52YWx1ZXNgLCBhcmUgbm9uLXdyaXRhYmxlXG4gICAgfSBlbHNlIGlmICh2YWx1ZS5wcm90b3R5cGUpIHZhbHVlLnByb3RvdHlwZSA9IHVuZGVmaW5lZDtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICB2YXIgc3RhdGUgPSBlbmZvcmNlSW50ZXJuYWxTdGF0ZSh2YWx1ZSk7XG4gIGlmICghaGFzT3duKHN0YXRlLCAnc291cmNlJykpIHtcbiAgICBzdGF0ZS5zb3VyY2UgPSBqb2luKFRFTVBMQVRFLCB0eXBlb2YgbmFtZSA9PSAnc3RyaW5nJyA/IG5hbWUgOiAnJyk7XG4gIH0gcmV0dXJuIHZhbHVlO1xufTtcblxuLy8gYWRkIGZha2UgRnVuY3Rpb24jdG9TdHJpbmcgZm9yIGNvcnJlY3Qgd29yayB3cmFwcGVkIG1ldGhvZHMgLyBjb25zdHJ1Y3RvcnMgd2l0aCBtZXRob2RzIGxpa2UgTG9EYXNoIGlzTmF0aXZlXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZXh0ZW5kLW5hdGl2ZSAtLSByZXF1aXJlZFxuRnVuY3Rpb24ucHJvdG90eXBlLnRvU3RyaW5nID0gbWFrZUJ1aWx0SW4oZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gIHJldHVybiBpc0NhbGxhYmxlKHRoaXMpICYmIGdldEludGVybmFsU3RhdGUodGhpcykuc291cmNlIHx8IGluc3BlY3RTb3VyY2UodGhpcyk7XG59LCAndG9TdHJpbmcnKTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcbnZhciBtYWtlQnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9tYWtlLWJ1aWx0LWluJyk7XG52YXIgZGVmaW5lR2xvYmFsUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWdsb2JhbC1wcm9wZXJ0eScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChPLCBrZXksIHZhbHVlLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykgb3B0aW9ucyA9IHt9O1xuICB2YXIgc2ltcGxlID0gb3B0aW9ucy5lbnVtZXJhYmxlO1xuICB2YXIgbmFtZSA9IG9wdGlvbnMubmFtZSAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5uYW1lIDoga2V5O1xuICBpZiAoaXNDYWxsYWJsZSh2YWx1ZSkpIG1ha2VCdWlsdEluKHZhbHVlLCBuYW1lLCBvcHRpb25zKTtcbiAgaWYgKG9wdGlvbnMuZ2xvYmFsKSB7XG4gICAgaWYgKHNpbXBsZSkgT1trZXldID0gdmFsdWU7XG4gICAgZWxzZSBkZWZpbmVHbG9iYWxQcm9wZXJ0eShrZXksIHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFvcHRpb25zLnVuc2FmZSkgZGVsZXRlIE9ba2V5XTtcbiAgICAgIGVsc2UgaWYgKE9ba2V5XSkgc2ltcGxlID0gdHJ1ZTtcbiAgICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gICAgaWYgKHNpbXBsZSkgT1trZXldID0gdmFsdWU7XG4gICAgZWxzZSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mKE8sIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICBjb25maWd1cmFibGU6ICFvcHRpb25zLm5vbkNvbmZpZ3VyYWJsZSxcbiAgICAgIHdyaXRhYmxlOiAhb3B0aW9ucy5ub25Xcml0YWJsZVxuICAgIH0pO1xuICB9IHJldHVybiBPO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgY2VpbCA9IE1hdGguY2VpbDtcbnZhciBmbG9vciA9IE1hdGguZmxvb3I7XG5cbi8vIGBNYXRoLnRydW5jYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtbWF0aC50cnVuY1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW1hdGgtdHJ1bmMgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBNYXRoLnRydW5jIHx8IGZ1bmN0aW9uIHRydW5jKHgpIHtcbiAgdmFyIG4gPSAreDtcbiAgcmV0dXJuIChuID4gMCA/IGZsb29yIDogY2VpbCkobik7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0cnVuYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9tYXRoLXRydW5jJyk7XG5cbi8vIGBUb0ludGVnZXJPckluZmluaXR5YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9pbnRlZ2Vyb3JpbmZpbml0eVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdmFyIG51bWJlciA9ICthcmd1bWVudDtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcbiAgcmV0dXJuIG51bWJlciAhPT0gbnVtYmVyIHx8IG51bWJlciA9PT0gMCA/IDAgOiB0cnVuYyhudW1iZXIpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdG9JbnRlZ2VyT3JJbmZpbml0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbnRlZ2VyLW9yLWluZmluaXR5Jyk7XG5cbnZhciBtYXggPSBNYXRoLm1heDtcbnZhciBtaW4gPSBNYXRoLm1pbjtcblxuLy8gSGVscGVyIGZvciBhIHBvcHVsYXIgcmVwZWF0aW5nIGNhc2Ugb2YgdGhlIHNwZWM6XG4vLyBMZXQgaW50ZWdlciBiZSA/IFRvSW50ZWdlcihpbmRleCkuXG4vLyBJZiBpbnRlZ2VyIDwgMCwgbGV0IHJlc3VsdCBiZSBtYXgoKGxlbmd0aCArIGludGVnZXIpLCAwKTsgZWxzZSBsZXQgcmVzdWx0IGJlIG1pbihpbnRlZ2VyLCBsZW5ndGgpLlxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5kZXgsIGxlbmd0aCkge1xuICB2YXIgaW50ZWdlciA9IHRvSW50ZWdlck9ySW5maW5pdHkoaW5kZXgpO1xuICByZXR1cm4gaW50ZWdlciA8IDAgPyBtYXgoaW50ZWdlciArIGxlbmd0aCwgMCkgOiBtaW4oaW50ZWdlciwgbGVuZ3RoKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRvSW50ZWdlck9ySW5maW5pdHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eScpO1xuXG52YXIgbWluID0gTWF0aC5taW47XG5cbi8vIGBUb0xlbmd0aGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvbGVuZ3RoXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICB2YXIgbGVuID0gdG9JbnRlZ2VyT3JJbmZpbml0eShhcmd1bWVudCk7XG4gIHJldHVybiBsZW4gPiAwID8gbWluKGxlbiwgMHgxRkZGRkZGRkZGRkZGRikgOiAwOyAvLyAyICoqIDUzIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1sZW5ndGgnKTtcblxuLy8gYExlbmd0aE9mQXJyYXlMaWtlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtbGVuZ3Rob2ZhcnJheWxpa2Vcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gdG9MZW5ndGgob2JqLmxlbmd0aCk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciB0b0Fic29sdXRlSW5kZXggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tYWJzb2x1dGUtaW5kZXgnKTtcbnZhciBsZW5ndGhPZkFycmF5TGlrZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9sZW5ndGgtb2YtYXJyYXktbGlrZScpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLnsgaW5kZXhPZiwgaW5jbHVkZXMgfWAgbWV0aG9kcyBpbXBsZW1lbnRhdGlvblxudmFyIGNyZWF0ZU1ldGhvZCA9IGZ1bmN0aW9uIChJU19JTkNMVURFUykge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBlbCwgZnJvbUluZGV4KSB7XG4gICAgdmFyIE8gPSB0b0luZGV4ZWRPYmplY3QoJHRoaXMpO1xuICAgIHZhciBsZW5ndGggPSBsZW5ndGhPZkFycmF5TGlrZShPKTtcbiAgICBpZiAobGVuZ3RoID09PSAwKSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICAgIHZhciBpbmRleCA9IHRvQWJzb2x1dGVJbmRleChmcm9tSW5kZXgsIGxlbmd0aCk7XG4gICAgdmFyIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIE5hTiBjaGVja1xuICAgIGlmIChJU19JTkNMVURFUyAmJiBlbCAhPT0gZWwpIHdoaWxlIChsZW5ndGggPiBpbmRleCkge1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcbiAgICAgIGlmICh2YWx1ZSAhPT0gdmFsdWUpIHJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I2luZGV4T2YgaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yICg7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIHtcbiAgICAgIGlmICgoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTykgJiYgT1tpbmRleF0gPT09IGVsKSByZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5pbmNsdWRlc2AgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmluY2x1ZGVzXG4gIGluY2x1ZGVzOiBjcmVhdGVNZXRob2QodHJ1ZSksXG4gIC8vIGBBcnJheS5wcm90b3R5cGUuaW5kZXhPZmAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmluZGV4b2ZcbiAgaW5kZXhPZjogY3JlYXRlTWV0aG9kKGZhbHNlKVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciBpbmRleE9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWluY2x1ZGVzJykuaW5kZXhPZjtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hpZGRlbi1rZXlzJyk7XG5cbnZhciBwdXNoID0gdW5jdXJyeVRoaXMoW10ucHVzaCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwgbmFtZXMpIHtcbiAgdmFyIE8gPSB0b0luZGV4ZWRPYmplY3Qob2JqZWN0KTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBrZXk7XG4gIGZvciAoa2V5IGluIE8pICFoYXNPd24oaGlkZGVuS2V5cywga2V5KSAmJiBoYXNPd24oTywga2V5KSAmJiBwdXNoKHJlc3VsdCwga2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkgaWYgKGhhc093bihPLCBrZXkgPSBuYW1lc1tpKytdKSkge1xuICAgIH5pbmRleE9mKHJlc3VsdCwga2V5KSB8fCBwdXNoKHJlc3VsdCwga2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG4vLyBJRTgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gW1xuICAnY29uc3RydWN0b3InLFxuICAnaGFzT3duUHJvcGVydHknLFxuICAnaXNQcm90b3R5cGVPZicsXG4gICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsXG4gICd0b0xvY2FsZVN0cmluZycsXG4gICd0b1N0cmluZycsXG4gICd2YWx1ZU9mJ1xuXTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaW50ZXJuYWxPYmplY3RLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW51bS1idWcta2V5cycpO1xuXG52YXIgaGlkZGVuS2V5cyA9IGVudW1CdWdLZXlzLmNvbmNhdCgnbGVuZ3RoJywgJ3Byb3RvdHlwZScpO1xuXG4vLyBgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuZ2V0b3ducHJvcGVydHluYW1lc1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eW5hbWVzIC0tIHNhZmVcbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoTykge1xuICByZXR1cm4gaW50ZXJuYWxPYmplY3RLZXlzKE8sIGhpZGRlbktleXMpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5c3ltYm9scyAtLSBzYWZlXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnZXRCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1idWlsdC1pbicpO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGdldE93blByb3BlcnR5TmFtZXNNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktbmFtZXMnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHNNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scycpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xuXG52YXIgY29uY2F0ID0gdW5jdXJyeVRoaXMoW10uY29uY2F0KTtcblxuLy8gYWxsIG9iamVjdCBrZXlzLCBpbmNsdWRlcyBub24tZW51bWVyYWJsZSBhbmQgc3ltYm9sc1xubW9kdWxlLmV4cG9ydHMgPSBnZXRCdWlsdEluKCdSZWZsZWN0JywgJ293bktleXMnKSB8fCBmdW5jdGlvbiBvd25LZXlzKGl0KSB7XG4gIHZhciBrZXlzID0gZ2V0T3duUHJvcGVydHlOYW1lc01vZHVsZS5mKGFuT2JqZWN0KGl0KSk7XG4gIHZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHNNb2R1bGUuZjtcbiAgcmV0dXJuIGdldE93blByb3BlcnR5U3ltYm9scyA/IGNvbmNhdChrZXlzLCBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoaXQpKSA6IGtleXM7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIG93bktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb3duLWtleXMnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcicpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UsIGV4Y2VwdGlvbnMpIHtcbiAgdmFyIGtleXMgPSBvd25LZXlzKHNvdXJjZSk7XG4gIHZhciBkZWZpbmVQcm9wZXJ0eSA9IGRlZmluZVByb3BlcnR5TW9kdWxlLmY7XG4gIHZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JNb2R1bGUuZjtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgaWYgKCFoYXNPd24odGFyZ2V0LCBrZXkpICYmICEoZXhjZXB0aW9ucyAmJiBoYXNPd24oZXhjZXB0aW9ucywga2V5KSkpIHtcbiAgICAgIGRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTtcbiAgICB9XG4gIH1cbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xuXG52YXIgcmVwbGFjZW1lbnQgPSAvI3xcXC5wcm90b3R5cGVcXC4vO1xuXG52YXIgaXNGb3JjZWQgPSBmdW5jdGlvbiAoZmVhdHVyZSwgZGV0ZWN0aW9uKSB7XG4gIHZhciB2YWx1ZSA9IGRhdGFbbm9ybWFsaXplKGZlYXR1cmUpXTtcbiAgcmV0dXJuIHZhbHVlID09PSBQT0xZRklMTCA/IHRydWVcbiAgICA6IHZhbHVlID09PSBOQVRJVkUgPyBmYWxzZVxuICAgIDogaXNDYWxsYWJsZShkZXRlY3Rpb24pID8gZmFpbHMoZGV0ZWN0aW9uKVxuICAgIDogISFkZXRlY3Rpb247XG59O1xuXG52YXIgbm9ybWFsaXplID0gaXNGb3JjZWQubm9ybWFsaXplID0gZnVuY3Rpb24gKHN0cmluZykge1xuICByZXR1cm4gU3RyaW5nKHN0cmluZykucmVwbGFjZShyZXBsYWNlbWVudCwgJy4nKS50b0xvd2VyQ2FzZSgpO1xufTtcblxudmFyIGRhdGEgPSBpc0ZvcmNlZC5kYXRhID0ge307XG52YXIgTkFUSVZFID0gaXNGb3JjZWQuTkFUSVZFID0gJ04nO1xudmFyIFBPTFlGSUxMID0gaXNGb3JjZWQuUE9MWUZJTEwgPSAnUCc7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNGb3JjZWQ7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcicpLmY7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xudmFyIGRlZmluZUJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWJ1aWx0LWluJyk7XG52YXIgZGVmaW5lR2xvYmFsUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWdsb2JhbC1wcm9wZXJ0eScpO1xudmFyIGNvcHlDb25zdHJ1Y3RvclByb3BlcnRpZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzJyk7XG52YXIgaXNGb3JjZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtZm9yY2VkJyk7XG5cbi8qXG4gIG9wdGlvbnMudGFyZ2V0ICAgICAgICAgLSBuYW1lIG9mIHRoZSB0YXJnZXQgb2JqZWN0XG4gIG9wdGlvbnMuZ2xvYmFsICAgICAgICAgLSB0YXJnZXQgaXMgdGhlIGdsb2JhbCBvYmplY3RcbiAgb3B0aW9ucy5zdGF0ICAgICAgICAgICAtIGV4cG9ydCBhcyBzdGF0aWMgbWV0aG9kcyBvZiB0YXJnZXRcbiAgb3B0aW9ucy5wcm90byAgICAgICAgICAtIGV4cG9ydCBhcyBwcm90b3R5cGUgbWV0aG9kcyBvZiB0YXJnZXRcbiAgb3B0aW9ucy5yZWFsICAgICAgICAgICAtIHJlYWwgcHJvdG90eXBlIG1ldGhvZCBmb3IgdGhlIGBwdXJlYCB2ZXJzaW9uXG4gIG9wdGlvbnMuZm9yY2VkICAgICAgICAgLSBleHBvcnQgZXZlbiBpZiB0aGUgbmF0aXZlIGZlYXR1cmUgaXMgYXZhaWxhYmxlXG4gIG9wdGlvbnMuYmluZCAgICAgICAgICAgLSBiaW5kIG1ldGhvZHMgdG8gdGhlIHRhcmdldCwgcmVxdWlyZWQgZm9yIHRoZSBgcHVyZWAgdmVyc2lvblxuICBvcHRpb25zLndyYXAgICAgICAgICAgIC0gd3JhcCBjb25zdHJ1Y3RvcnMgdG8gcHJldmVudGluZyBnbG9iYWwgcG9sbHV0aW9uLCByZXF1aXJlZCBmb3IgdGhlIGBwdXJlYCB2ZXJzaW9uXG4gIG9wdGlvbnMudW5zYWZlICAgICAgICAgLSB1c2UgdGhlIHNpbXBsZSBhc3NpZ25tZW50IG9mIHByb3BlcnR5IGluc3RlYWQgb2YgZGVsZXRlICsgZGVmaW5lUHJvcGVydHlcbiAgb3B0aW9ucy5zaGFtICAgICAgICAgICAtIGFkZCBhIGZsYWcgdG8gbm90IGNvbXBsZXRlbHkgZnVsbCBwb2x5ZmlsbHNcbiAgb3B0aW9ucy5lbnVtZXJhYmxlICAgICAtIGV4cG9ydCBhcyBlbnVtZXJhYmxlIHByb3BlcnR5XG4gIG9wdGlvbnMuZG9udENhbGxHZXRTZXQgLSBwcmV2ZW50IGNhbGxpbmcgYSBnZXR0ZXIgb24gdGFyZ2V0XG4gIG9wdGlvbnMubmFtZSAgICAgICAgICAgLSB0aGUgLm5hbWUgb2YgdGhlIGZ1bmN0aW9uIGlmIGl0IGRvZXMgbm90IG1hdGNoIHRoZSBrZXlcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvcHRpb25zLCBzb3VyY2UpIHtcbiAgdmFyIFRBUkdFVCA9IG9wdGlvbnMudGFyZ2V0O1xuICB2YXIgR0xPQkFMID0gb3B0aW9ucy5nbG9iYWw7XG4gIHZhciBTVEFUSUMgPSBvcHRpb25zLnN0YXQ7XG4gIHZhciBGT1JDRUQsIHRhcmdldCwga2V5LCB0YXJnZXRQcm9wZXJ0eSwgc291cmNlUHJvcGVydHksIGRlc2NyaXB0b3I7XG4gIGlmIChHTE9CQUwpIHtcbiAgICB0YXJnZXQgPSBnbG9iYWxUaGlzO1xuICB9IGVsc2UgaWYgKFNUQVRJQykge1xuICAgIHRhcmdldCA9IGdsb2JhbFRoaXNbVEFSR0VUXSB8fCBkZWZpbmVHbG9iYWxQcm9wZXJ0eShUQVJHRVQsIHt9KTtcbiAgfSBlbHNlIHtcbiAgICB0YXJnZXQgPSBnbG9iYWxUaGlzW1RBUkdFVF0gJiYgZ2xvYmFsVGhpc1tUQVJHRVRdLnByb3RvdHlwZTtcbiAgfVxuICBpZiAodGFyZ2V0KSBmb3IgKGtleSBpbiBzb3VyY2UpIHtcbiAgICBzb3VyY2VQcm9wZXJ0eSA9IHNvdXJjZVtrZXldO1xuICAgIGlmIChvcHRpb25zLmRvbnRDYWxsR2V0U2V0KSB7XG4gICAgICBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KTtcbiAgICAgIHRhcmdldFByb3BlcnR5ID0gZGVzY3JpcHRvciAmJiBkZXNjcmlwdG9yLnZhbHVlO1xuICAgIH0gZWxzZSB0YXJnZXRQcm9wZXJ0eSA9IHRhcmdldFtrZXldO1xuICAgIEZPUkNFRCA9IGlzRm9yY2VkKEdMT0JBTCA/IGtleSA6IFRBUkdFVCArIChTVEFUSUMgPyAnLicgOiAnIycpICsga2V5LCBvcHRpb25zLmZvcmNlZCk7XG4gICAgLy8gY29udGFpbmVkIGluIHRhcmdldFxuICAgIGlmICghRk9SQ0VEICYmIHRhcmdldFByb3BlcnR5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmICh0eXBlb2Ygc291cmNlUHJvcGVydHkgPT0gdHlwZW9mIHRhcmdldFByb3BlcnR5KSBjb250aW51ZTtcbiAgICAgIGNvcHlDb25zdHJ1Y3RvclByb3BlcnRpZXMoc291cmNlUHJvcGVydHksIHRhcmdldFByb3BlcnR5KTtcbiAgICB9XG4gICAgLy8gYWRkIGEgZmxhZyB0byBub3QgY29tcGxldGVseSBmdWxsIHBvbHlmaWxsc1xuICAgIGlmIChvcHRpb25zLnNoYW0gfHwgKHRhcmdldFByb3BlcnR5ICYmIHRhcmdldFByb3BlcnR5LnNoYW0pKSB7XG4gICAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoc291cmNlUHJvcGVydHksICdzaGFtJywgdHJ1ZSk7XG4gICAgfVxuICAgIGRlZmluZUJ1aWx0SW4odGFyZ2V0LCBrZXksIHNvdXJjZVByb3BlcnR5LCBvcHRpb25zKTtcbiAgfVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaW50ZXJuYWxPYmplY3RLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW51bS1idWcta2V5cycpO1xuXG4vLyBgT2JqZWN0LmtleXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3Qua2V5c1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1rZXlzIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKSB7XG4gIHJldHVybiBpbnRlcm5hbE9iamVjdEtleXMoTywgZW51bUJ1Z0tleXMpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBWOF9QUk9UT1RZUEVfREVGSU5FX0JVRyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy92OC1wcm90b3R5cGUtZGVmaW5lLWJ1ZycpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciBvYmplY3RLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1rZXlzJyk7XG5cbi8vIGBPYmplY3QuZGVmaW5lUHJvcGVydGllc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5kZWZpbmVwcm9wZXJ0aWVzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnRpZXMgLS0gc2FmZVxuZXhwb3J0cy5mID0gREVTQ1JJUFRPUlMgJiYgIVY4X1BST1RPVFlQRV9ERUZJTkVfQlVHID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBwcm9wcyA9IHRvSW5kZXhlZE9iamVjdChQcm9wZXJ0aWVzKTtcbiAgdmFyIGtleXMgPSBvYmplY3RLZXlzKFByb3BlcnRpZXMpO1xuICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIHZhciBpbmRleCA9IDA7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChsZW5ndGggPiBpbmRleCkgZGVmaW5lUHJvcGVydHlNb2R1bGUuZihPLCBrZXkgPSBrZXlzW2luZGV4KytdLCBwcm9wc1trZXldKTtcbiAgcmV0dXJuIE87XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnZXRCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1idWlsdC1pbicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdldEJ1aWx0SW4oJ2RvY3VtZW50JywgJ2RvY3VtZW50RWxlbWVudCcpO1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8qIGdsb2JhbCBBY3RpdmVYT2JqZWN0IC0tIG9sZCBJRSwgV1NIICovXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgZGVmaW5lUHJvcGVydGllc01vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnRpZXMnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnVtLWJ1Zy1rZXlzJyk7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oaWRkZW4ta2V5cycpO1xudmFyIGh0bWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaHRtbCcpO1xudmFyIGRvY3VtZW50Q3JlYXRlRWxlbWVudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb2N1bWVudC1jcmVhdGUtZWxlbWVudCcpO1xudmFyIHNoYXJlZEtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQta2V5Jyk7XG5cbnZhciBHVCA9ICc+JztcbnZhciBMVCA9ICc8JztcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcbnZhciBTQ1JJUFQgPSAnc2NyaXB0JztcbnZhciBJRV9QUk9UTyA9IHNoYXJlZEtleSgnSUVfUFJPVE8nKTtcblxudmFyIEVtcHR5Q29uc3RydWN0b3IgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG5cbnZhciBzY3JpcHRUYWcgPSBmdW5jdGlvbiAoY29udGVudCkge1xuICByZXR1cm4gTFQgKyBTQ1JJUFQgKyBHVCArIGNvbnRlbnQgKyBMVCArICcvJyArIFNDUklQVCArIEdUO1xufTtcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIEFjdGl2ZVggT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBOdWxsUHJvdG9PYmplY3RWaWFBY3RpdmVYID0gZnVuY3Rpb24gKGFjdGl2ZVhEb2N1bWVudCkge1xuICBhY3RpdmVYRG9jdW1lbnQud3JpdGUoc2NyaXB0VGFnKCcnKSk7XG4gIGFjdGl2ZVhEb2N1bWVudC5jbG9zZSgpO1xuICB2YXIgdGVtcCA9IGFjdGl2ZVhEb2N1bWVudC5wYXJlbnRXaW5kb3cuT2JqZWN0O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlbGVzcy1hc3NpZ25tZW50IC0tIGF2b2lkIG1lbW9yeSBsZWFrXG4gIGFjdGl2ZVhEb2N1bWVudCA9IG51bGw7XG4gIHJldHVybiB0ZW1wO1xufTtcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIGlmcmFtZSBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxudmFyIE51bGxQcm90b09iamVjdFZpYUlGcmFtZSA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcbiAgdmFyIGlmcmFtZSA9IGRvY3VtZW50Q3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XG4gIHZhciBKUyA9ICdqYXZhJyArIFNDUklQVCArICc6JztcbiAgdmFyIGlmcmFtZURvY3VtZW50O1xuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgaHRtbC5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICAvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvNDc1XG4gIGlmcmFtZS5zcmMgPSBTdHJpbmcoSlMpO1xuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG4gIGlmcmFtZURvY3VtZW50LndyaXRlKHNjcmlwdFRhZygnZG9jdW1lbnQuRj1PYmplY3QnKSk7XG4gIGlmcmFtZURvY3VtZW50LmNsb3NlKCk7XG4gIHJldHVybiBpZnJhbWVEb2N1bWVudC5GO1xufTtcblxuLy8gQ2hlY2sgZm9yIGRvY3VtZW50LmRvbWFpbiBhbmQgYWN0aXZlIHggc3VwcG9ydFxuLy8gTm8gbmVlZCB0byB1c2UgYWN0aXZlIHggYXBwcm9hY2ggd2hlbiBkb2N1bWVudC5kb21haW4gaXMgbm90IHNldFxuLy8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9lcy1zaGltcy9lczUtc2hpbS9pc3N1ZXMvMTUwXG4vLyB2YXJpYXRpb24gb2YgaHR0cHM6Ly9naXRodWIuY29tL2tpdGNhbWJyaWRnZS9lczUtc2hpbS9jb21taXQvNGY3MzhhYzA2NjM0NlxuLy8gYXZvaWQgSUUgR0MgYnVnXG52YXIgYWN0aXZlWERvY3VtZW50O1xudmFyIE51bGxQcm90b09iamVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgdHJ5IHtcbiAgICBhY3RpdmVYRG9jdW1lbnQgPSBuZXcgQWN0aXZlWE9iamVjdCgnaHRtbGZpbGUnKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogaWdub3JlICovIH1cbiAgTnVsbFByb3RvT2JqZWN0ID0gdHlwZW9mIGRvY3VtZW50ICE9ICd1bmRlZmluZWQnXG4gICAgPyBkb2N1bWVudC5kb21haW4gJiYgYWN0aXZlWERvY3VtZW50XG4gICAgICA/IE51bGxQcm90b09iamVjdFZpYUFjdGl2ZVgoYWN0aXZlWERvY3VtZW50KSAvLyBvbGQgSUVcbiAgICAgIDogTnVsbFByb3RvT2JqZWN0VmlhSUZyYW1lKClcbiAgICA6IE51bGxQcm90b09iamVjdFZpYUFjdGl2ZVgoYWN0aXZlWERvY3VtZW50KTsgLy8gV1NIXG4gIHZhciBsZW5ndGggPSBlbnVtQnVnS2V5cy5sZW5ndGg7XG4gIHdoaWxlIChsZW5ndGgtLSkgZGVsZXRlIE51bGxQcm90b09iamVjdFtQUk9UT1RZUEVdW2VudW1CdWdLZXlzW2xlbmd0aF1dO1xuICByZXR1cm4gTnVsbFByb3RvT2JqZWN0KCk7XG59O1xuXG5oaWRkZW5LZXlzW0lFX1BST1RPXSA9IHRydWU7XG5cbi8vIGBPYmplY3QuY3JlYXRlYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmNyZWF0ZVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1jcmVhdGUgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmIChPICE9PSBudWxsKSB7XG4gICAgRW1wdHlDb25zdHJ1Y3RvcltQUk9UT1RZUEVdID0gYW5PYmplY3QoTyk7XG4gICAgcmVzdWx0ID0gbmV3IEVtcHR5Q29uc3RydWN0b3IoKTtcbiAgICBFbXB0eUNvbnN0cnVjdG9yW1BST1RPVFlQRV0gPSBudWxsO1xuICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcbiAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcbiAgfSBlbHNlIHJlc3VsdCA9IE51bGxQcm90b09iamVjdCgpO1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZGVmaW5lUHJvcGVydGllc01vZHVsZS5mKHJlc3VsdCwgUHJvcGVydGllcyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWNyZWF0ZScpO1xudmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKS5mO1xuXG52YXIgVU5TQ09QQUJMRVMgPSB3ZWxsS25vd25TeW1ib2woJ3Vuc2NvcGFibGVzJyk7XG52YXIgQXJyYXlQcm90b3R5cGUgPSBBcnJheS5wcm90b3R5cGU7XG5cbi8vIEFycmF5LnByb3RvdHlwZVtAQHVuc2NvcGFibGVzXVxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUtQEB1bnNjb3BhYmxlc1xuaWYgKEFycmF5UHJvdG90eXBlW1VOU0NPUEFCTEVTXSA9PT0gdW5kZWZpbmVkKSB7XG4gIGRlZmluZVByb3BlcnR5KEFycmF5UHJvdG90eXBlLCBVTlNDT1BBQkxFUywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICB2YWx1ZTogY3JlYXRlKG51bGwpXG4gIH0pO1xufVxuXG4vLyBhZGQgYSBrZXkgdG8gQXJyYXkucHJvdG90eXBlW0BAdW5zY29wYWJsZXNdXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgQXJyYXlQcm90b3R5cGVbVU5TQ09QQUJMRVNdW2tleV0gPSB0cnVlO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkaW5jbHVkZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaW5jbHVkZXMnKS5pbmNsdWRlcztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYWRkLXRvLXVuc2NvcGFibGVzJyk7XG5cbi8vIEZGOTkrIGJ1Z1xudmFyIEJST0tFTl9PTl9TUEFSU0UgPSBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1hcnJheS1wcm90b3R5cGUtaW5jbHVkZXMgLS0gZGV0ZWN0aW9uXG4gIHJldHVybiAhQXJyYXkoMSkuaW5jbHVkZXMoKTtcbn0pO1xuXG4vLyBTYWZhcmkgMjYuNC0gYnVnXG52YXIgQlJPS0VOX09OX1NQQVJTRV9XSVRIX0ZST01fSU5ERVggPSBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zcGFyc2UtYXJyYXlzLCBlcy9uby1hcnJheS1wcm90b3R5cGUtaW5jbHVkZXMgLS0gZGV0ZWN0aW9uXG4gIHJldHVybiBbLCAxXS5pbmNsdWRlcyh1bmRlZmluZWQsIDEpO1xufSk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuaW5jbHVkZXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuaW5jbHVkZXNcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IEJST0tFTl9PTl9TUEFSU0UgfHwgQlJPS0VOX09OX1NQQVJTRV9XSVRIX0ZST01fSU5ERVggfSwge1xuICBpbmNsdWRlczogZnVuY3Rpb24gaW5jbHVkZXMoZWwgLyogLCBmcm9tSW5kZXggPSAwICovKSB7XG4gICAgcmV0dXJuICRpbmNsdWRlcyh0aGlzLCBlbCwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUtQEB1bnNjb3BhYmxlc1xuYWRkVG9VbnNjb3BhYmxlcygnaW5jbHVkZXMnKTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xuXG4vLyBgSXNBcnJheWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWlzYXJyYXlcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1hcnJheS1pc2FycmF5IC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiBpc0FycmF5KGFyZ3VtZW50KSB7XG4gIHJldHVybiBjbGFzc29mKGFyZ3VtZW50KSA9PT0gJ0FycmF5Jztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgVE9fU1RSSU5HX1RBRyA9IHdlbGxLbm93blN5bWJvbCgndG9TdHJpbmdUYWcnKTtcbnZhciB0ZXN0ID0ge307XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW5pY29ybi9uby1pbW1lZGlhdGUtbXV0YXRpb24gLS0gRVMzIHN5bnRheCBsaW1pdGF0aW9uXG50ZXN0W1RPX1NUUklOR19UQUddID0gJ3onO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN0cmluZyh0ZXN0KSA9PT0gJ1tvYmplY3Qgel0nO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBUT19TVFJJTkdfVEFHX1NVUFBPUlQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tc3RyaW5nLXRhZy1zdXBwb3J0Jyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGNsYXNzb2ZSYXcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIFRPX1NUUklOR19UQUcgPSB3ZWxsS25vd25TeW1ib2woJ3RvU3RyaW5nVGFnJyk7XG52YXIgJE9iamVjdCA9IE9iamVjdDtcblxuLy8gRVMzIHdyb25nIGhlcmVcbnZhciBDT1JSRUNUX0FSR1VNRU5UUyA9IGNsYXNzb2ZSYXcoZnVuY3Rpb24gKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID09PSAnQXJndW1lbnRzJztcblxuLy8gZmFsbGJhY2sgZm9yIElFMTEgU2NyaXB0IEFjY2VzcyBEZW5pZWQgZXJyb3JcbnZhciB0cnlHZXQgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICB0cnkge1xuICAgIHJldHVybiBpdFtrZXldO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG59O1xuXG4vLyBnZXR0aW5nIHRhZyBmcm9tIEVTNisgYE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdgXG5tb2R1bGUuZXhwb3J0cyA9IFRPX1NUUklOR19UQUdfU1VQUE9SVCA/IGNsYXNzb2ZSYXcgOiBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIE8sIHRhZywgcmVzdWx0O1xuICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/ICdVbmRlZmluZWQnIDogaXQgPT09IG51bGwgPyAnTnVsbCdcbiAgICAvLyBAQHRvU3RyaW5nVGFnIGNhc2VcbiAgICA6IHR5cGVvZiAodGFnID0gdHJ5R2V0KE8gPSAkT2JqZWN0KGl0KSwgVE9fU1RSSU5HX1RBRykpID09ICdzdHJpbmcnID8gdGFnXG4gICAgLy8gYnVpbHRpblRhZyBjYXNlXG4gICAgOiBDT1JSRUNUX0FSR1VNRU5UUyA/IGNsYXNzb2ZSYXcoTylcbiAgICAvLyBFUzMgYXJndW1lbnRzIGZhbGxiYWNrXG4gICAgOiAocmVzdWx0ID0gY2xhc3NvZlJhdyhPKSkgPT09ICdPYmplY3QnICYmIGlzQ2FsbGFibGUoTy5jYWxsZWUpID8gJ0FyZ3VtZW50cycgOiByZXN1bHQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YnKTtcblxudmFyICRTdHJpbmcgPSBTdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIGlmIChjbGFzc29mKGFyZ3VtZW50KSA9PT0gJ1N5bWJvbCcpIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0IGEgU3ltYm9sIHZhbHVlIHRvIGEgc3RyaW5nJyk7XG4gIHJldHVybiAkU3RyaW5nKGFyZ3VtZW50KTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgaWYgKERFU0NSSVBUT1JTKSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mKG9iamVjdCwga2V5LCBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoMCwgdmFsdWUpKTtcbiAgZWxzZSBvYmplY3Rba2V5XSA9IHZhbHVlO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcblxudmFyICRTeW50YXhFcnJvciA9IFN5bnRheEVycm9yO1xudmFyICRwYXJzZUludCA9IHBhcnNlSW50O1xudmFyIGZyb21DaGFyQ29kZSA9IFN0cmluZy5mcm9tQ2hhckNvZGU7XG52YXIgYXQgPSB1bmN1cnJ5VGhpcygnJy5jaGFyQXQpO1xudmFyIHNsaWNlID0gdW5jdXJyeVRoaXMoJycuc2xpY2UpO1xudmFyIGV4ZWMgPSB1bmN1cnJ5VGhpcygvLi8uZXhlYyk7XG5cbnZhciBjb2RlUG9pbnRzID0ge1xuICAnXFxcXFwiJzogJ1wiJyxcbiAgJ1xcXFxcXFxcJzogJ1xcXFwnLFxuICAnXFxcXC8nOiAnLycsXG4gICdcXFxcYic6ICdcXGInLFxuICAnXFxcXGYnOiAnXFxmJyxcbiAgJ1xcXFxuJzogJ1xcbicsXG4gICdcXFxccic6ICdcXHInLFxuICAnXFxcXHQnOiAnXFx0J1xufTtcblxudmFyIElTXzRfSEVYX0RJR0lUUyA9IC9eW1xcZGEtZl17NH0kL2k7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVnZXhwL25vLWNvbnRyb2wtY2hhcmFjdGVyIC0tIHNhZmVcbnZhciBJU19DMF9DT05UUk9MX0NPREUgPSAvXltcXHUwMDAwLVxcdTAwMUZdJC87XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHNvdXJjZSwgaSkge1xuICB2YXIgdW50ZXJtaW5hdGVkID0gdHJ1ZTtcbiAgdmFyIHZhbHVlID0gJyc7XG4gIHdoaWxlIChpIDwgc291cmNlLmxlbmd0aCkge1xuICAgIHZhciBjaHIgPSBhdChzb3VyY2UsIGkpO1xuICAgIGlmIChjaHIgPT09ICdcXFxcJykge1xuICAgICAgdmFyIHR3b0NoYXJzID0gc2xpY2Uoc291cmNlLCBpLCBpICsgMik7XG4gICAgICBpZiAoaGFzT3duKGNvZGVQb2ludHMsIHR3b0NoYXJzKSkge1xuICAgICAgICB2YWx1ZSArPSBjb2RlUG9pbnRzW3R3b0NoYXJzXTtcbiAgICAgICAgaSArPSAyO1xuICAgICAgfSBlbHNlIGlmICh0d29DaGFycyA9PT0gJ1xcXFx1Jykge1xuICAgICAgICBpICs9IDI7XG4gICAgICAgIHZhciBmb3VySGV4RGlnaXRzID0gc2xpY2Uoc291cmNlLCBpLCBpICsgNCk7XG4gICAgICAgIGlmICghZXhlYyhJU180X0hFWF9ESUdJVFMsIGZvdXJIZXhEaWdpdHMpKSB0aHJvdyBuZXcgJFN5bnRheEVycm9yKCdCYWQgVW5pY29kZSBlc2NhcGUgYXQ6ICcgKyBpKTtcbiAgICAgICAgdmFsdWUgKz0gZnJvbUNoYXJDb2RlKCRwYXJzZUludChmb3VySGV4RGlnaXRzLCAxNikpO1xuICAgICAgICBpICs9IDQ7XG4gICAgICB9IGVsc2UgdGhyb3cgbmV3ICRTeW50YXhFcnJvcignVW5rbm93biBlc2NhcGUgc2VxdWVuY2U6IFwiJyArIHR3b0NoYXJzICsgJ1wiJyk7XG4gICAgfSBlbHNlIGlmIChjaHIgPT09ICdcIicpIHtcbiAgICAgIHVudGVybWluYXRlZCA9IGZhbHNlO1xuICAgICAgaSsrO1xuICAgICAgYnJlYWs7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChleGVjKElTX0MwX0NPTlRST0xfQ09ERSwgY2hyKSkgdGhyb3cgbmV3ICRTeW50YXhFcnJvcignQmFkIGNvbnRyb2wgY2hhcmFjdGVyIGluIHN0cmluZyBsaXRlcmFsIGF0OiAnICsgaSk7XG4gICAgICB2YWx1ZSArPSBjaHI7XG4gICAgICBpKys7XG4gICAgfVxuICB9XG4gIGlmICh1bnRlcm1pbmF0ZWQpIHRocm93IG5ldyAkU3ludGF4RXJyb3IoJ1VudGVybWluYXRlZCBzdHJpbmcgYXQ6ICcgKyBpKTtcbiAgcmV0dXJuIHsgdmFsdWU6IHZhbHVlLCBlbmQ6IGkgfTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1hcnJheScpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgdG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tc3RyaW5nJyk7XG52YXIgbGVuZ3RoT2ZBcnJheUxpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHknKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIHBhcnNlSlNPTlN0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9wYXJzZS1qc29uLXN0cmluZycpO1xudmFyIE5BVElWRV9TWU1CT0wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3ltYm9sLWNvbnN0cnVjdG9yLWRldGVjdGlvbicpO1xuXG52YXIgSlNPTiA9IGdsb2JhbFRoaXMuSlNPTjtcbnZhciBOdW1iZXIgPSBnbG9iYWxUaGlzLk51bWJlcjtcbnZhciBTeW50YXhFcnJvciA9IGdsb2JhbFRoaXMuU3ludGF4RXJyb3I7XG52YXIgbmF0aXZlUGFyc2UgPSBKU09OICYmIEpTT04ucGFyc2U7XG52YXIgZW51bWVyYWJsZU93blByb3BlcnRpZXMgPSBnZXRCdWlsdEluKCdPYmplY3QnLCAna2V5cycpO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG52YXIgYXQgPSB1bmN1cnJ5VGhpcygnJy5jaGFyQXQpO1xudmFyIHNsaWNlID0gdW5jdXJyeVRoaXMoJycuc2xpY2UpO1xudmFyIGV4ZWMgPSB1bmN1cnJ5VGhpcygvLi8uZXhlYyk7XG52YXIgcHVzaCA9IHVuY3VycnlUaGlzKFtdLnB1c2gpO1xuXG52YXIgSVNfRElHSVQgPSAvXlxcZCQvO1xudmFyIElTX05PTl9aRVJPX0RJR0lUID0gL15bMS05XSQvO1xudmFyIElTX05VTUJFUl9TVEFSVCA9IC9eW1xcZC1dJC87XG52YXIgSVNfV0hJVEVTUEFDRSA9IC9eW1xcdFxcblxcciBdJC87XG5cbnZhciBQUklNSVRJVkUgPSAwO1xudmFyIE9CSkVDVCA9IDE7XG5cbnZhciAkcGFyc2UgPSBmdW5jdGlvbiAoc291cmNlLCByZXZpdmVyKSB7XG4gIHNvdXJjZSA9IHRvU3RyaW5nKHNvdXJjZSk7XG4gIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQoc291cmNlLCAwLCAnJyk7XG4gIHZhciByb290ID0gY29udGV4dC5wYXJzZSgpO1xuICB2YXIgdmFsdWUgPSByb290LnZhbHVlO1xuICB2YXIgZW5kSW5kZXggPSBjb250ZXh0LnNraXAoSVNfV0hJVEVTUEFDRSwgcm9vdC5lbmQpO1xuICBpZiAoZW5kSW5kZXggPCBzb3VyY2UubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKCdVbmV4cGVjdGVkIGV4dHJhIGNoYXJhY3RlcjogXCInICsgYXQoc291cmNlLCBlbmRJbmRleCkgKyAnXCIgYWZ0ZXIgdGhlIHBhcnNlZCBkYXRhIGF0OiAnICsgZW5kSW5kZXgpO1xuICB9XG4gIHJldHVybiBpc0NhbGxhYmxlKHJldml2ZXIpID8gaW50ZXJuYWxpemUoeyAnJzogdmFsdWUgfSwgJycsIHJldml2ZXIsIHJvb3QpIDogdmFsdWU7XG59O1xuXG52YXIgaW50ZXJuYWxpemUgPSBmdW5jdGlvbiAoaG9sZGVyLCBuYW1lLCByZXZpdmVyLCBub2RlKSB7XG4gIHZhciB2YWwgPSBob2xkZXJbbmFtZV07XG4gIHZhciB1bm1vZGlmaWVkID0gbm9kZSAmJiB2YWwgPT09IG5vZGUudmFsdWU7XG4gIHZhciBjb250ZXh0ID0gdW5tb2RpZmllZCAmJiB0eXBlb2Ygbm9kZS5zb3VyY2UgPT0gJ3N0cmluZycgPyB7IHNvdXJjZTogbm9kZS5zb3VyY2UgfSA6IHt9O1xuICB2YXIgZWxlbWVudFJlY29yZHNMZW4sIGtleXMsIGxlbiwgaSwgUDtcbiAgaWYgKGlzT2JqZWN0KHZhbCkpIHtcbiAgICB2YXIgbm9kZUlzQXJyYXkgPSBpc0FycmF5KHZhbCk7XG4gICAgdmFyIG5vZGVzID0gdW5tb2RpZmllZCA/IG5vZGUubm9kZXMgOiBub2RlSXNBcnJheSA/IFtdIDoge307XG4gICAgaWYgKG5vZGVJc0FycmF5KSB7XG4gICAgICBlbGVtZW50UmVjb3Jkc0xlbiA9IG5vZGVzLmxlbmd0aDtcbiAgICAgIGxlbiA9IGxlbmd0aE9mQXJyYXlMaWtlKHZhbCk7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgaW50ZXJuYWxpemVQcm9wZXJ0eSh2YWwsIGksIGludGVybmFsaXplKHZhbCwgJycgKyBpLCByZXZpdmVyLCBpIDwgZWxlbWVudFJlY29yZHNMZW4gPyBub2Rlc1tpXSA6IHVuZGVmaW5lZCkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBrZXlzID0gZW51bWVyYWJsZU93blByb3BlcnRpZXModmFsKTtcbiAgICAgIGxlbiA9IGxlbmd0aE9mQXJyYXlMaWtlKGtleXMpO1xuICAgICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIFAgPSBrZXlzW2ldO1xuICAgICAgICBpbnRlcm5hbGl6ZVByb3BlcnR5KHZhbCwgUCwgaW50ZXJuYWxpemUodmFsLCBQLCByZXZpdmVyLCBoYXNPd24obm9kZXMsIFApID8gbm9kZXNbUF0gOiB1bmRlZmluZWQpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNhbGwocmV2aXZlciwgaG9sZGVyLCBuYW1lLCB2YWwsIGNvbnRleHQpO1xufTtcblxudmFyIGludGVybmFsaXplUHJvcGVydHkgPSBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIGlmIChERVNDUklQVE9SUykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwga2V5KTtcbiAgICBpZiAoZGVzY3JpcHRvciAmJiAhZGVzY3JpcHRvci5jb25maWd1cmFibGUpIHJldHVybjtcbiAgfVxuICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkgZGVsZXRlIG9iamVjdFtrZXldO1xuICBlbHNlIGNyZWF0ZVByb3BlcnR5KG9iamVjdCwga2V5LCB2YWx1ZSk7XG59O1xuXG52YXIgTm9kZSA9IGZ1bmN0aW9uICh2YWx1ZSwgZW5kLCBzb3VyY2UsIG5vZGVzKSB7XG4gIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgdGhpcy5lbmQgPSBlbmQ7XG4gIHRoaXMuc291cmNlID0gc291cmNlO1xuICB0aGlzLm5vZGVzID0gbm9kZXM7XG59O1xuXG52YXIgQ29udGV4dCA9IGZ1bmN0aW9uIChzb3VyY2UsIGluZGV4KSB7XG4gIHRoaXMuc291cmNlID0gc291cmNlO1xuICB0aGlzLmluZGV4ID0gaW5kZXg7XG59O1xuXG4vLyBodHRwczovL3d3dy5qc29uLm9yZy9qc29uLWVuLmh0bWxcbkNvbnRleHQucHJvdG90eXBlID0ge1xuICBmb3JrOiBmdW5jdGlvbiAobmV4dEluZGV4KSB7XG4gICAgcmV0dXJuIG5ldyBDb250ZXh0KHRoaXMuc291cmNlLCBuZXh0SW5kZXgpO1xuICB9LFxuICBwYXJzZTogZnVuY3Rpb24gKCkge1xuICAgIHZhciBzb3VyY2UgPSB0aGlzLnNvdXJjZTtcbiAgICB2YXIgaSA9IHRoaXMuc2tpcChJU19XSElURVNQQUNFLCB0aGlzLmluZGV4KTtcbiAgICB2YXIgZm9yayA9IHRoaXMuZm9yayhpKTtcbiAgICB2YXIgY2hyID0gYXQoc291cmNlLCBpKTtcbiAgICBpZiAoZXhlYyhJU19OVU1CRVJfU1RBUlQsIGNocikpIHJldHVybiBmb3JrLm51bWJlcigpO1xuICAgIHN3aXRjaCAoY2hyKSB7XG4gICAgICBjYXNlICd7JzpcbiAgICAgICAgcmV0dXJuIGZvcmsub2JqZWN0KCk7XG4gICAgICBjYXNlICdbJzpcbiAgICAgICAgcmV0dXJuIGZvcmsuYXJyYXkoKTtcbiAgICAgIGNhc2UgJ1wiJzpcbiAgICAgICAgcmV0dXJuIGZvcmsuc3RyaW5nKCk7XG4gICAgICBjYXNlICd0JzpcbiAgICAgICAgcmV0dXJuIGZvcmsua2V5d29yZCh0cnVlKTtcbiAgICAgIGNhc2UgJ2YnOlxuICAgICAgICByZXR1cm4gZm9yay5rZXl3b3JkKGZhbHNlKTtcbiAgICAgIGNhc2UgJ24nOlxuICAgICAgICByZXR1cm4gZm9yay5rZXl3b3JkKG51bGwpO1xuICAgIH0gdGhyb3cgbmV3IFN5bnRheEVycm9yKCdVbmV4cGVjdGVkIGNoYXJhY3RlcjogXCInICsgY2hyICsgJ1wiIGF0OiAnICsgaSk7XG4gIH0sXG4gIG5vZGU6IGZ1bmN0aW9uICh0eXBlLCB2YWx1ZSwgc3RhcnQsIGVuZCwgbm9kZXMpIHtcbiAgICByZXR1cm4gbmV3IE5vZGUodmFsdWUsIGVuZCwgdHlwZSA/IG51bGwgOiBzbGljZSh0aGlzLnNvdXJjZSwgc3RhcnQsIGVuZCksIG5vZGVzKTtcbiAgfSxcbiAgb2JqZWN0OiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNvdXJjZSA9IHRoaXMuc291cmNlO1xuICAgIHZhciBpID0gdGhpcy5pbmRleCArIDE7XG4gICAgdmFyIGV4cGVjdEtleXBhaXIgPSBmYWxzZTtcbiAgICB2YXIgb2JqZWN0ID0ge307XG4gICAgdmFyIG5vZGVzID0ge307XG4gICAgdmFyIGNsb3NlZCA9IGZhbHNlO1xuICAgIHdoaWxlIChpIDwgc291cmNlLmxlbmd0aCkge1xuICAgICAgaSA9IHRoaXMudW50aWwoWydcIicsICd9J10sIGkpO1xuICAgICAgaWYgKGF0KHNvdXJjZSwgaSkgPT09ICd9JyAmJiAhZXhwZWN0S2V5cGFpcikge1xuICAgICAgICBpKys7XG4gICAgICAgIGNsb3NlZCA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgLy8gUGFyc2luZyB0aGUga2V5XG4gICAgICB2YXIgcmVzdWx0ID0gdGhpcy5mb3JrKGkpLnN0cmluZygpO1xuICAgICAgdmFyIGtleSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgIGkgPSByZXN1bHQuZW5kO1xuICAgICAgaSA9IHRoaXMudW50aWwoWyc6J10sIGkpICsgMTtcbiAgICAgIC8vIFBhcnNpbmcgdmFsdWVcbiAgICAgIGkgPSB0aGlzLnNraXAoSVNfV0hJVEVTUEFDRSwgaSk7XG4gICAgICByZXN1bHQgPSB0aGlzLmZvcmsoaSkucGFyc2UoKTtcbiAgICAgIGNyZWF0ZVByb3BlcnR5KG5vZGVzLCBrZXksIHJlc3VsdCk7XG4gICAgICBjcmVhdGVQcm9wZXJ0eShvYmplY3QsIGtleSwgcmVzdWx0LnZhbHVlKTtcbiAgICAgIGkgPSB0aGlzLnVudGlsKFsnLCcsICd9J10sIHJlc3VsdC5lbmQpO1xuICAgICAgdmFyIGNociA9IGF0KHNvdXJjZSwgaSk7XG4gICAgICBpZiAoY2hyID09PSAnLCcpIHtcbiAgICAgICAgZXhwZWN0S2V5cGFpciA9IHRydWU7XG4gICAgICAgIGkrKztcbiAgICAgIH0gZWxzZSBpZiAoY2hyID09PSAnfScpIHtcbiAgICAgICAgaSsrO1xuICAgICAgICBjbG9zZWQgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFjbG9zZWQpIHRocm93IG5ldyBTeW50YXhFcnJvcignVW50ZXJtaW5hdGVkIG9iamVjdCBhdDogJyArIGkpO1xuICAgIHJldHVybiB0aGlzLm5vZGUoT0JKRUNULCBvYmplY3QsIHRoaXMuaW5kZXgsIGksIG5vZGVzKTtcbiAgfSxcbiAgYXJyYXk6IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc291cmNlID0gdGhpcy5zb3VyY2U7XG4gICAgdmFyIGkgPSB0aGlzLmluZGV4ICsgMTtcbiAgICB2YXIgZXhwZWN0RWxlbWVudCA9IGZhbHNlO1xuICAgIHZhciBhcnJheSA9IFtdO1xuICAgIHZhciBub2RlcyA9IFtdO1xuICAgIHZhciBjbG9zZWQgPSBmYWxzZTtcbiAgICB3aGlsZSAoaSA8IHNvdXJjZS5sZW5ndGgpIHtcbiAgICAgIGkgPSB0aGlzLnNraXAoSVNfV0hJVEVTUEFDRSwgaSk7XG4gICAgICBpZiAoYXQoc291cmNlLCBpKSA9PT0gJ10nICYmICFleHBlY3RFbGVtZW50KSB7XG4gICAgICAgIGkrKztcbiAgICAgICAgY2xvc2VkID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICB2YXIgcmVzdWx0ID0gdGhpcy5mb3JrKGkpLnBhcnNlKCk7XG4gICAgICBwdXNoKG5vZGVzLCByZXN1bHQpO1xuICAgICAgcHVzaChhcnJheSwgcmVzdWx0LnZhbHVlKTtcbiAgICAgIGkgPSB0aGlzLnVudGlsKFsnLCcsICddJ10sIHJlc3VsdC5lbmQpO1xuICAgICAgaWYgKGF0KHNvdXJjZSwgaSkgPT09ICcsJykge1xuICAgICAgICBleHBlY3RFbGVtZW50ID0gdHJ1ZTtcbiAgICAgICAgaSsrO1xuICAgICAgfSBlbHNlIGlmIChhdChzb3VyY2UsIGkpID09PSAnXScpIHtcbiAgICAgICAgaSsrO1xuICAgICAgICBjbG9zZWQgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFjbG9zZWQpIHRocm93IG5ldyBTeW50YXhFcnJvcignVW50ZXJtaW5hdGVkIGFycmF5IGF0OiAnICsgaSk7XG4gICAgcmV0dXJuIHRoaXMubm9kZShPQkpFQ1QsIGFycmF5LCB0aGlzLmluZGV4LCBpLCBub2Rlcyk7XG4gIH0sXG4gIHN0cmluZzogZnVuY3Rpb24gKCkge1xuICAgIHZhciBpbmRleCA9IHRoaXMuaW5kZXg7XG4gICAgdmFyIHBhcnNlZCA9IHBhcnNlSlNPTlN0cmluZyh0aGlzLnNvdXJjZSwgdGhpcy5pbmRleCArIDEpO1xuICAgIHJldHVybiB0aGlzLm5vZGUoUFJJTUlUSVZFLCBwYXJzZWQudmFsdWUsIGluZGV4LCBwYXJzZWQuZW5kKTtcbiAgfSxcbiAgbnVtYmVyOiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNvdXJjZSA9IHRoaXMuc291cmNlO1xuICAgIHZhciBzdGFydEluZGV4ID0gdGhpcy5pbmRleDtcbiAgICB2YXIgaSA9IHN0YXJ0SW5kZXg7XG4gICAgaWYgKGF0KHNvdXJjZSwgaSkgPT09ICctJykgaSsrO1xuICAgIGlmIChhdChzb3VyY2UsIGkpID09PSAnMCcpIGkrKztcbiAgICBlbHNlIGlmIChleGVjKElTX05PTl9aRVJPX0RJR0lULCBhdChzb3VyY2UsIGkpKSkgaSA9IHRoaXMuc2tpcChJU19ESUdJVCwgaSArIDEpO1xuICAgIGVsc2UgdGhyb3cgbmV3IFN5bnRheEVycm9yKCdGYWlsZWQgdG8gcGFyc2UgbnVtYmVyIGF0OiAnICsgaSk7XG4gICAgaWYgKGF0KHNvdXJjZSwgaSkgPT09ICcuJykge1xuICAgICAgdmFyIGZyYWN0aW9uU3RhcnRJbmRleCA9IGkgKyAxO1xuICAgICAgaSA9IHRoaXMuc2tpcChJU19ESUdJVCwgZnJhY3Rpb25TdGFydEluZGV4KTtcbiAgICAgIGlmIChmcmFjdGlvblN0YXJ0SW5kZXggPT09IGkpIHRocm93IG5ldyBTeW50YXhFcnJvcihcIkZhaWxlZCB0byBwYXJzZSBudW1iZXIncyBmcmFjdGlvbiBhdDogXCIgKyBpKTtcbiAgICB9XG4gICAgaWYgKGF0KHNvdXJjZSwgaSkgPT09ICdlJyB8fCBhdChzb3VyY2UsIGkpID09PSAnRScpIHtcbiAgICAgIGkrKztcbiAgICAgIGlmIChhdChzb3VyY2UsIGkpID09PSAnKycgfHwgYXQoc291cmNlLCBpKSA9PT0gJy0nKSBpKys7XG4gICAgICB2YXIgZXhwb25lbnRTdGFydEluZGV4ID0gaTtcbiAgICAgIGkgPSB0aGlzLnNraXAoSVNfRElHSVQsIGkpO1xuICAgICAgaWYgKGV4cG9uZW50U3RhcnRJbmRleCA9PT0gaSkgdGhyb3cgbmV3IFN5bnRheEVycm9yKFwiRmFpbGVkIHRvIHBhcnNlIG51bWJlcidzIGV4cG9uZW50IHZhbHVlIGF0OiBcIiArIGkpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5ub2RlKFBSSU1JVElWRSwgTnVtYmVyKHNsaWNlKHNvdXJjZSwgc3RhcnRJbmRleCwgaSkpLCBzdGFydEluZGV4LCBpKTtcbiAgfSxcbiAga2V5d29yZDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgdmFyIGtleXdvcmQgPSAnJyArIHZhbHVlO1xuICAgIHZhciBpbmRleCA9IHRoaXMuaW5kZXg7XG4gICAgdmFyIGVuZEluZGV4ID0gaW5kZXggKyBrZXl3b3JkLmxlbmd0aDtcbiAgICBpZiAoc2xpY2UodGhpcy5zb3VyY2UsIGluZGV4LCBlbmRJbmRleCkgIT09IGtleXdvcmQpIHRocm93IG5ldyBTeW50YXhFcnJvcignRmFpbGVkIHRvIHBhcnNlIHZhbHVlIGF0OiAnICsgaW5kZXgpO1xuICAgIHJldHVybiB0aGlzLm5vZGUoUFJJTUlUSVZFLCB2YWx1ZSwgaW5kZXgsIGVuZEluZGV4KTtcbiAgfSxcbiAgc2tpcDogZnVuY3Rpb24gKHJlZ2V4LCBpKSB7XG4gICAgdmFyIHNvdXJjZSA9IHRoaXMuc291cmNlO1xuICAgIGZvciAoOyBpIDwgc291cmNlLmxlbmd0aDsgaSsrKSBpZiAoIWV4ZWMocmVnZXgsIGF0KHNvdXJjZSwgaSkpKSBicmVhaztcbiAgICByZXR1cm4gaTtcbiAgfSxcbiAgdW50aWw6IGZ1bmN0aW9uIChhcnJheSwgaSkge1xuICAgIGkgPSB0aGlzLnNraXAoSVNfV0hJVEVTUEFDRSwgaSk7XG4gICAgdmFyIGNociA9IGF0KHRoaXMuc291cmNlLCBpKTtcbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IGFycmF5Lmxlbmd0aDsgaisrKSBpZiAoYXJyYXlbal0gPT09IGNocikgcmV0dXJuIGk7XG4gICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKCdVbmV4cGVjdGVkIGNoYXJhY3RlcjogXCInICsgY2hyICsgJ1wiIGF0OiAnICsgaSk7XG4gIH1cbn07XG5cbnZhciBOT19TT1VSQ0VfU1VQUE9SVCA9IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHVuc2FmZUludCA9ICc5MDA3MTk5MjU0NzQwOTkzJztcbiAgdmFyIHNvdXJjZTtcbiAgbmF0aXZlUGFyc2UodW5zYWZlSW50LCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSwgY29udGV4dCkge1xuICAgIHNvdXJjZSA9IGNvbnRleHQuc291cmNlO1xuICB9KTtcbiAgcmV0dXJuIHNvdXJjZSAhPT0gdW5zYWZlSW50O1xufSk7XG5cbnZhciBQUk9QRVJfQkFTRV9QQVJTRSA9IE5BVElWRV9TWU1CT0wgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gU2FmYXJpIDkgYnVnXG4gIHJldHVybiAxIC8gbmF0aXZlUGFyc2UoJy0wIFxcdCcpICE9PSAtSW5maW5pdHk7XG59KTtcblxuLy8gYEpTT04ucGFyc2VgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1qc29uLnBhcnNlXG4vLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1qc29uLXBhcnNlLXdpdGgtc291cmNlXG4kKHsgdGFyZ2V0OiAnSlNPTicsIHN0YXQ6IHRydWUsIGZvcmNlZDogTk9fU09VUkNFX1NVUFBPUlQgfSwge1xuICBwYXJzZTogZnVuY3Rpb24gcGFyc2UodGV4dCwgcmV2aXZlcikge1xuICAgIHJldHVybiBQUk9QRVJfQkFTRV9QQVJTRSAmJiAhaXNDYWxsYWJsZShyZXZpdmVyKSA/IG5hdGl2ZVBhcnNlKHRleHQpIDogJHBhcnNlKHRleHQsIHJldml2ZXIpO1xuICB9XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgTkFUSVZFX0JJTkQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1uYXRpdmUnKTtcblxudmFyIEZ1bmN0aW9uUHJvdG90eXBlID0gRnVuY3Rpb24ucHJvdG90eXBlO1xudmFyIGFwcGx5ID0gRnVuY3Rpb25Qcm90b3R5cGUuYXBwbHk7XG52YXIgY2FsbCA9IEZ1bmN0aW9uUHJvdG90eXBlLmNhbGw7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1mdW5jdGlvbi1wcm90b3R5cGUtYmluZCwgZXMvbm8tcmVmbGVjdCAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiBSZWZsZWN0ID09ICdvYmplY3QnICYmIFJlZmxlY3QuYXBwbHkgfHwgKE5BVElWRV9CSU5EID8gY2FsbC5iaW5kKGFwcGx5KSA6IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGNhbGwuYXBwbHkoYXBwbHksIGFyZ3VtZW50cyk7XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgZ2V0SW50ZXJuYWxTdGF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZScpLmdldDtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc1Jhd0pTT04oTykge1xuICBpZiAoIWlzT2JqZWN0KE8pKSByZXR1cm4gZmFsc2U7XG4gIHZhciBzdGF0ZSA9IGdldEludGVybmFsU3RhdGUoTyk7XG4gIHJldHVybiAhIXN0YXRlICYmIHN0YXRlLnR5cGUgPT09ICdSYXdKU09OJztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHVuY3VycnlUaGlzKFtdLnNsaWNlKTtcbiIsICIndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBlcy9uby1qc29uIC0tIHNhZmUgKi9cbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHZhciB1bnNhZmVJbnQgPSAnOTAwNzE5OTI1NDc0MDk5Myc7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1qc29uLXJhd2pzb24gLS0gZmVhdHVyZSBkZXRlY3Rpb25cbiAgdmFyIHJhdyA9IEpTT04ucmF3SlNPTih1bnNhZmVJbnQpO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tanNvbi1pc3Jhd2pzb24gLS0gZmVhdHVyZSBkZXRlY3Rpb25cbiAgcmV0dXJuICFKU09OLmlzUmF3SlNPTihyYXcpIHx8IEpTT04uc3RyaW5naWZ5KHJhdykgIT09IHVuc2FmZUludDtcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG52YXIgYXBwbHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYXBwbHknKTtcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtYXJyYXknKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgaXNSYXdKU09OID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXJhdy1qc29uJyk7XG52YXIgaXNTeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtc3ltYm9sJyk7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xudmFyIHRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXN0cmluZycpO1xudmFyIGFycmF5U2xpY2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktc2xpY2UnKTtcbnZhciBwYXJzZUpTT05TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcGFyc2UtanNvbi1zdHJpbmcnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdWlkJyk7XG52YXIgTkFUSVZFX1NZTUJPTCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zeW1ib2wtY29uc3RydWN0b3ItZGV0ZWN0aW9uJyk7XG52YXIgTkFUSVZFX1JBV19KU09OID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL25hdGl2ZS1yYXctanNvbicpO1xuXG52YXIgJFN0cmluZyA9IFN0cmluZztcbnZhciAkc3RyaW5naWZ5ID0gZ2V0QnVpbHRJbignSlNPTicsICdzdHJpbmdpZnknKTtcbnZhciBleGVjID0gdW5jdXJyeVRoaXMoLy4vLmV4ZWMpO1xudmFyIGNoYXJBdCA9IHVuY3VycnlUaGlzKCcnLmNoYXJBdCk7XG52YXIgY2hhckNvZGVBdCA9IHVuY3VycnlUaGlzKCcnLmNoYXJDb2RlQXQpO1xudmFyIHJlcGxhY2UgPSB1bmN1cnJ5VGhpcygnJy5yZXBsYWNlKTtcbnZhciBzbGljZSA9IHVuY3VycnlUaGlzKCcnLnNsaWNlKTtcbnZhciBwdXNoID0gdW5jdXJyeVRoaXMoW10ucHVzaCk7XG52YXIgbnVtYmVyVG9TdHJpbmcgPSB1bmN1cnJ5VGhpcygxLjEudG9TdHJpbmcpO1xuXG52YXIgc3Vycm9nYXRlcyA9IC9bXFx1RDgwMC1cXHVERkZGXS9nO1xudmFyIGxlYWRpbmdTdXJyb2dhdGVzID0gL15bXFx1RDgwMC1cXHVEQkZGXSQvO1xudmFyIHRyYWlsaW5nU3Vycm9nYXRlcyA9IC9eW1xcdURDMDAtXFx1REZGRl0kLztcblxudmFyIE1BUksgPSB1aWQoKTtcbnZhciBNQVJLX0xFTkdUSCA9IE1BUksubGVuZ3RoO1xuXG52YXIgV1JPTkdfU1lNQk9MU19DT05WRVJTSU9OID0gIU5BVElWRV9TWU1CT0wgfHwgZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgc3ltYm9sID0gZ2V0QnVpbHRJbignU3ltYm9sJykoJ3N0cmluZ2lmeSBkZXRlY3Rpb24nKTtcbiAgLy8gTVMgRWRnZSBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMge31cbiAgcmV0dXJuICRzdHJpbmdpZnkoW3N5bWJvbF0pICE9PSAnW251bGxdJ1xuICAgIC8vIFdlYktpdCBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMgbnVsbFxuICAgIHx8ICRzdHJpbmdpZnkoeyBhOiBzeW1ib2wgfSkgIT09ICd7fSdcbiAgICAvLyBWOCB0aHJvd3Mgb24gYm94ZWQgc3ltYm9sc1xuICAgIHx8ICRzdHJpbmdpZnkoT2JqZWN0KHN5bWJvbCkpICE9PSAne30nO1xufSk7XG5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLXdlbGwtZm9ybWVkLXN0cmluZ2lmeVxudmFyIElMTF9GT1JNRURfVU5JQ09ERSA9IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuICRzdHJpbmdpZnkoJ1xcdURGMDZcXHVEODM0JykgIT09ICdcIlxcXFx1ZGYwNlxcXFx1ZDgzNFwiJ1xuICAgIHx8ICRzdHJpbmdpZnkoJ1xcdURFQUQnKSAhPT0gJ1wiXFxcXHVkZWFkXCInO1xufSk7XG5cbnZhciBzdHJpbmdpZnlXaXRoUHJvcGVyU3ltYm9sc0NvbnZlcnNpb24gPSBXUk9OR19TWU1CT0xTX0NPTlZFUlNJT04gPyBmdW5jdGlvbiAoaXQsIHJlcGxhY2VyKSB7XG4gIHZhciBhcmdzID0gYXJyYXlTbGljZShhcmd1bWVudHMpO1xuICB2YXIgJHJlcGxhY2VyID0gZ2V0UmVwbGFjZXJGdW5jdGlvbihyZXBsYWNlcik7XG4gIGlmICghaXNDYWxsYWJsZSgkcmVwbGFjZXIpICYmIChpdCA9PT0gdW5kZWZpbmVkIHx8IGlzU3ltYm9sKGl0KSkpIHJldHVybjsgLy8gSUU4IHJldHVybnMgc3RyaW5nIG9uIHVuZGVmaW5lZFxuICBhcmdzWzFdID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAvLyBzb21lIG9sZCBpbXBsZW1lbnRhdGlvbnMgKGxpa2UgV2ViS2l0KSBjb3VsZCBwYXNzIG51bWJlcnMgYXMga2V5c1xuICAgIGlmIChpc0NhbGxhYmxlKCRyZXBsYWNlcikpIHZhbHVlID0gY2FsbCgkcmVwbGFjZXIsIHRoaXMsICRTdHJpbmcoa2V5KSwgdmFsdWUpO1xuICAgIGlmICghaXNTeW1ib2wodmFsdWUpKSByZXR1cm4gdmFsdWU7XG4gIH07XG4gIHJldHVybiBhcHBseSgkc3RyaW5naWZ5LCBudWxsLCBhcmdzKTtcbn0gOiAkc3RyaW5naWZ5O1xuXG52YXIgZml4SWxsRm9ybWVkSlNPTiA9IGZ1bmN0aW9uIChtYXRjaCwgb2Zmc2V0LCBzdHJpbmcpIHtcbiAgdmFyIHByZXYgPSBjaGFyQXQoc3RyaW5nLCBvZmZzZXQgLSAxKTtcbiAgdmFyIG5leHQgPSBjaGFyQXQoc3RyaW5nLCBvZmZzZXQgKyAxKTtcbiAgaWYgKFxuICAgIChleGVjKGxlYWRpbmdTdXJyb2dhdGVzLCBtYXRjaCkgJiYgIWV4ZWModHJhaWxpbmdTdXJyb2dhdGVzLCBuZXh0KSkgfHxcbiAgICAoZXhlYyh0cmFpbGluZ1N1cnJvZ2F0ZXMsIG1hdGNoKSAmJiAhZXhlYyhsZWFkaW5nU3Vycm9nYXRlcywgcHJldikpXG4gICkge1xuICAgIHJldHVybiAnXFxcXHUnICsgbnVtYmVyVG9TdHJpbmcoY2hhckNvZGVBdChtYXRjaCwgMCksIDE2KTtcbiAgfSByZXR1cm4gbWF0Y2g7XG59O1xuXG52YXIgZ2V0UmVwbGFjZXJGdW5jdGlvbiA9IGZ1bmN0aW9uIChyZXBsYWNlcikge1xuICBpZiAoaXNDYWxsYWJsZShyZXBsYWNlcikpIHJldHVybiByZXBsYWNlcjtcbiAgaWYgKCFpc0FycmF5KHJlcGxhY2VyKSkgcmV0dXJuO1xuICB2YXIgcmF3TGVuZ3RoID0gcmVwbGFjZXIubGVuZ3RoO1xuICB2YXIga2V5cyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHJhd0xlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGVsZW1lbnQgPSByZXBsYWNlcltpXTtcbiAgICBpZiAodHlwZW9mIGVsZW1lbnQgPT0gJ3N0cmluZycpIHB1c2goa2V5cywgZWxlbWVudCk7XG4gICAgZWxzZSBpZiAodHlwZW9mIGVsZW1lbnQgPT0gJ251bWJlcicgfHwgY2xhc3NvZihlbGVtZW50KSA9PT0gJ051bWJlcicgfHwgY2xhc3NvZihlbGVtZW50KSA9PT0gJ1N0cmluZycpIHB1c2goa2V5cywgdG9TdHJpbmcoZWxlbWVudCkpO1xuICB9XG4gIHZhciBrZXlzTGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIHZhciByb290ID0gdHJ1ZTtcbiAgcmV0dXJuIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgaWYgKHJvb3QpIHtcbiAgICAgIHJvb3QgPSBmYWxzZTtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgaWYgKGlzQXJyYXkodGhpcykpIHJldHVybiB2YWx1ZTtcbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IGtleXNMZW5ndGg7IGorKykgaWYgKGtleXNbal0gPT09IGtleSkgcmV0dXJuIHZhbHVlO1xuICB9O1xufTtcblxuLy8gYEpTT04uc3RyaW5naWZ5YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtanNvbi5zdHJpbmdpZnlcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLWpzb24tcGFyc2Utd2l0aC1zb3VyY2VcbmlmICgkc3RyaW5naWZ5KSAkKHsgdGFyZ2V0OiAnSlNPTicsIHN0YXQ6IHRydWUsIGFyaXR5OiAzLCBmb3JjZWQ6IFdST05HX1NZTUJPTFNfQ09OVkVSU0lPTiB8fCBJTExfRk9STUVEX1VOSUNPREUgfHwgIU5BVElWRV9SQVdfSlNPTiB9LCB7XG4gIHN0cmluZ2lmeTogZnVuY3Rpb24gc3RyaW5naWZ5KHRleHQsIHJlcGxhY2VyLCBzcGFjZSkge1xuICAgIHZhciByZXBsYWNlckZ1bmN0aW9uID0gZ2V0UmVwbGFjZXJGdW5jdGlvbihyZXBsYWNlcik7XG4gICAgdmFyIHJhd1N0cmluZ3MgPSBbXTtcblxuICAgIHZhciBqc29uID0gc3RyaW5naWZ5V2l0aFByb3BlclN5bWJvbHNDb252ZXJzaW9uKHRleHQsIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAvLyBzb21lIG9sZCBpbXBsZW1lbnRhdGlvbnMgKGxpa2UgV2ViS2l0KSBjb3VsZCBwYXNzIG51bWJlcnMgYXMga2V5c1xuICAgICAgdmFyIHYgPSBpc0NhbGxhYmxlKHJlcGxhY2VyRnVuY3Rpb24pID8gY2FsbChyZXBsYWNlckZ1bmN0aW9uLCB0aGlzLCAkU3RyaW5nKGtleSksIHZhbHVlKSA6IHZhbHVlO1xuICAgICAgcmV0dXJuICFOQVRJVkVfUkFXX0pTT04gJiYgaXNSYXdKU09OKHYpID8gTUFSSyArIChwdXNoKHJhd1N0cmluZ3MsIHYucmF3SlNPTikgLSAxKSA6IHY7XG4gICAgfSwgc3BhY2UpO1xuXG4gICAgaWYgKHR5cGVvZiBqc29uICE9ICdzdHJpbmcnKSByZXR1cm4ganNvbjtcblxuICAgIGlmIChJTExfRk9STUVEX1VOSUNPREUpIGpzb24gPSByZXBsYWNlKGpzb24sIHN1cnJvZ2F0ZXMsIGZpeElsbEZvcm1lZEpTT04pO1xuXG4gICAgaWYgKE5BVElWRV9SQVdfSlNPTikgcmV0dXJuIGpzb247XG5cbiAgICB2YXIgcmVzdWx0ID0gJyc7XG4gICAgdmFyIGxlbmd0aCA9IGpzb24ubGVuZ3RoO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGNociA9IGNoYXJBdChqc29uLCBpKTtcbiAgICAgIGlmIChjaHIgPT09ICdcIicpIHtcbiAgICAgICAgdmFyIGVuZCA9IHBhcnNlSlNPTlN0cmluZyhqc29uLCArK2kpLmVuZCAtIDE7XG4gICAgICAgIHZhciBzdHJpbmcgPSBzbGljZShqc29uLCBpLCBlbmQpO1xuICAgICAgICByZXN1bHQgKz0gc2xpY2Uoc3RyaW5nLCAwLCBNQVJLX0xFTkdUSCkgPT09IE1BUktcbiAgICAgICAgICA/IHJhd1N0cmluZ3Nbc2xpY2Uoc3RyaW5nLCBNQVJLX0xFTkdUSCldXG4gICAgICAgICAgOiAnXCInICsgc3RyaW5nICsgJ1wiJztcbiAgICAgICAgaSA9IGVuZDtcbiAgICAgIH0gZWxzZSByZXN1bHQgKz0gY2hyO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn0pO1xuIiwgImNsYXNzIENvbnN0YW50cyB7XG5cdHZlcnNpb24gPSAnNC4xLjAnO1xuXHRnZXQgaXNBcnRpY2xlKCkge1xuXHRcdHJldHVybiB3aW5kb3cubXcuY29uZmlnLmdldCgnd2dJc0FydGljbGUnKTtcblx0fVxuXHRnZXQgY3VycmVudFBhZ2VOYW1lKCkge1xuXHRcdHJldHVybiB3aW5kb3cubXcuY29uZmlnLmdldCgnd2dQYWdlTmFtZScpLnJlcGxhY2UoLyAvZywgJ18nKTtcblx0fVxuXHRnZXQgYXJ0aWNsZUlkKCkge1xuXHRcdHJldHVybiB3aW5kb3cubXcuY29uZmlnLmdldCgnd2dBcnRpY2xlSWQnKTtcblx0fVxuXHRnZXQgcmV2aXNpb25JZCgpIHtcblx0XHRyZXR1cm4gd2luZG93Lm13LmNvbmZpZy5nZXQoJ3dnUmV2aXNpb25JZCcpO1xuXHR9XG5cdGdldCBsYXRlc3RSZXZpc2lvbklkKCkge1xuXHRcdHJldHVybiB3aW5kb3cubXcuY29uZmlnLmdldCgnd2dDdXJSZXZpc2lvbklkJyk7XG5cdH1cblx0Z2V0IGFydGljbGVQYXRoKCkge1xuXHRcdHJldHVybiB3aW5kb3cubXcuY29uZmlnLmdldCgnd2dBcnRpY2xlUGF0aCcpO1xuXHR9XG5cdGdldCBzY3JpcHRQYXRoKCkge1xuXHRcdHJldHVybiB3aW5kb3cubXcuY29uZmlnLmdldCgnd2dTY3JpcHRQYXRoJyk7XG5cdH1cblx0Z2V0IGFjdGlvbigpIHtcblx0XHRyZXR1cm4gd2luZG93Lm13LmNvbmZpZy5nZXQoJ3dnQWN0aW9uJyk7XG5cdH1cblx0Z2V0IHNraW4oKSB7XG5cdFx0cmV0dXJuIHdpbmRvdy5tdy5jb25maWcuZ2V0KCdza2luJyk7XG5cdH1cblx0Z2V0IHVzZXJHcm91cHMoKSB7XG5cdFx0cmV0dXJuIHdpbmRvdy5tdy5jb25maWcuZ2V0KCd3Z1VzZXJHcm91cHMnKTtcblx0fVxuXHRnZXQgd2lraUlkKCkge1xuXHRcdHJldHVybiB3aW5kb3cubXcuY29uZmlnLmdldCgnd2dXaWtpSUQnKTtcblx0fVxuXHR1c2VyQWdlbnQgPSBgRnVycnlXaWtpLzEuMSBXaWtpcGx1cy8ke3RoaXMudmVyc2lvbn0gKCR7dGhpcy53aWtpSWR9KWA7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBDb25zdGFudHMoKTtcbiIsICIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4vLyBAdHMtbm9jaGVja1xuaW1wb3J0IENvbnN0YW50cyBmcm9tICcuLi91dGlscy9jb25zdGFudHMnO1xuXG5jb25zdCBSZXF1ZXN0cyA9IHtcblx0YmFzZTogYCR7bG9jYXRpb24ucHJvdG9jb2x9Ly8ke2xvY2F0aW9uLmhvc3R9JHtDb25zdGFudHMuc2NyaXB0UGF0aH0vYXBpLnBocGAsXG5cdGFzeW5jIGdldChxdWVyeSkge1xuXHRcdGNvbnN0IHVybCA9IG5ldyBVUkwoUmVxdWVzdHMuYmFzZSk7XG5cdFx0Zm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMocXVlcnkpKSB7XG5cdFx0XHR1cmwuc2VhcmNoUGFyYW1zLmFwcGVuZChrZXksIHF1ZXJ5W2tleV0pO1xuXHRcdH1cblx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xuXHRcdFx0Y3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG5cdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdCdBcGktVXNlci1BZ2VudCc6IENvbnN0YW50cy51c2VyQWdlbnQsXG5cdFx0XHR9LFxuXHRcdH0pO1xuXHRcdHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cdH0sXG5cdGFzeW5jIHBvc3QocGF5bG9hZCkge1xuXHRcdGNvbnN0IHVybCA9IG5ldyBVUkwoUmVxdWVzdHMuYmFzZSk7XG5cdFx0Y29uc3QgZm9ybSA9IG5ldyBGb3JtRGF0YSgpO1xuXHRcdGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHBheWxvYWQpKSB7XG5cdFx0XHRmb3JtLmFwcGVuZChrZXksIHZhbHVlKTtcblx0XHR9XG5cdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcblx0XHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdFx0Ym9keTogZm9ybSxcblx0XHRcdGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuXHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHQnQXBpLVVzZXItQWdlbnQnOiBDb25zdGFudHMudXNlckFnZW50LFxuXHRcdFx0fSxcblx0XHR9KTtcblx0XHRyZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXHR9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVxdWVzdHM7XG4iLCAiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuLy8gQHRzLW5vY2hlY2tcbmNsYXNzIEkxOG4ge1xuXHRsYW5ndWFnZTtcblx0aTE4bkRhdGEgPSB7fTtcblx0c2Vzc2lvblVwZGF0ZUxvZyA9IFtdO1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRsZXQgbGFuZ3VhZ2U7XG5cdFx0dHJ5IHtcblx0XHRcdGxhbmd1YWdlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2VbJ1dpa2lwbHVzX1NldHRpbmdzJ10pWydsYW5ndWFnZSddIHx8IG5hdmlnYXRvci5sYW5ndWFnZS50b0xvd2VyQ2FzZSgpO1xuXHRcdH0gY2F0Y2gge1xuXHRcdFx0bGFuZ3VhZ2UgPSAobmF2aWdhdG9yLmxhbmd1YWdlIHx8IG5hdmlnYXRvci5icm93c2VyTGFuZ3VhZ2UpXG5cdFx0XHRcdC5yZXBsYWNlKC9oYW5bc3RdLT8vaSwgJycpIC8vIGZvciBsYW5ndWFnZXMgbGlrZSB6aC1IYW5zLUNOXG5cdFx0XHRcdC50b0xvd2VyQ2FzZSgpO1xuXHRcdH1cblx0XHR0aGlzLmxhbmd1YWdlID0gbGFuZ3VhZ2U7XG5cdFx0Ly8gTWVyZ2Ugd2l0aCBsb2NhbFN0b3JhZ2UgaTE4biBjYWNoZVxuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCBpMThuQ2FjaGUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdXaWtpcGx1c19pMThuQ2FjaGUnKSk7XG5cdFx0XHRmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhpMThuQ2FjaGUpKSB7XG5cdFx0XHRcdHRoaXMuaTE4bkRhdGFba2V5XSA9IGkxOG5DYWNoZVtrZXldO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2gge1xuXHRcdFx0Ly8gRmFpbCB0byBwYXJzZSBpMThuIGNhY2hlLCByZXNldFxuXHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1dpa2lwbHVzX2kxOG5DYWNoZScsICd7fScpO1xuXHRcdH1cblx0fVxuXHR0cmFuc2xhdGUoa2V5LCBwbGFjZWhvbGRlcnMgPSBbXSkge1xuXHRcdGxldCByZXN1bHQgPSAnJztcblx0XHRpZiAodGhpcy5sYW5ndWFnZSBpbiB0aGlzLmkxOG5EYXRhKSB7XG5cdFx0XHRpZiAoa2V5IGluIHRoaXMuaTE4bkRhdGFbdGhpcy5sYW5ndWFnZV0pIHtcblx0XHRcdFx0cmVzdWx0ID0gdGhpcy5pMThuRGF0YVt0aGlzLmxhbmd1YWdlXVtrZXldO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gdHJ5IHVwZGF0ZSBsYW5ndWFnZSB2ZXJpc29uXG5cdFx0XHRcdHRoaXMubG9hZExhbmd1YWdlKHRoaXMubGFuZ3VhZ2UpO1xuXHRcdFx0XHRpZiAoa2V5IGluIHRoaXMuaTE4bkRhdGFbJ2VuLXVzJ10pIHtcblx0XHRcdFx0XHQvLyBGYWxsYmFjayB0byBFbmdsaXNoXG5cdFx0XHRcdFx0cmVzdWx0ID0gdGhpcy5pMThuRGF0YVsnZW4tdXMnXVtrZXldO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJlc3VsdCA9IGtleTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmxvYWRMYW5ndWFnZSh0aGlzLmxhbmd1YWdlKTtcblx0XHR9XG5cblx0XHRpZiAocGxhY2Vob2xkZXJzLmxlbmd0aCA+IDApIHtcblx0XHRcdGZvciAoY29uc3QgW2luZGV4LCBwbGFjZWhvbGRlcl0gb2YgcGxhY2Vob2xkZXJzLmVudHJpZXMoKSkge1xuXHRcdFx0XHRyZXN1bHQgPSByZXN1bHQucmVwbGFjZShgJCR7aW5kZXggKyAxfWAsIHBsYWNlaG9sZGVyKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXHRhc3luYyBsb2FkTGFuZ3VhZ2UobGFuZ3VhZ2UpIHtcblx0XHRpZiAodGhpcy5zZXNzaW9uVXBkYXRlTG9nLmluY2x1ZGVzKGxhbmd1YWdlKSkge1xuXHRcdFx0Ly8gSGFzIGJlZW4gdXBkYXRlZCB0aGlzIHNlc3Npb24uXG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IChcblx0XHRcdFx0YXdhaXQgZmV0Y2goXG5cdFx0XHRcdFx0YGh0dHBzOi8vZ2l0Y2RuLnFpdXdlbi5uZXQuY24vSW50ZXJmYWNlQWRtaW4vV2lraXBsdXMvcmF3L2JyYW5jaC9kZXYvbGFuZ3VhZ2VzLyR7bGFuZ3VhZ2V9Lmpzb25gXG5cdFx0XHRcdClcblx0XHRcdCkuanNvbigpO1xuXHRcdFx0Y29uc3Qgbm93VmVyc2lvbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdXaWtpcGx1c19MYW5ndWFnZVZlcnNpb24nKSB8fCAnMDAwJztcblx0XHRcdHRoaXMuc2Vzc2lvblVwZGF0ZUxvZy5wdXNoKGxhbmd1YWdlKTtcblx0XHRcdGlmIChyZXNwb25zZS5fX3ZlcnNpb24gIT09IG5vd1ZlcnNpb24gfHwgIShsYW5ndWFnZSBpbiB0aGlzLmkxOG5EYXRhKSkge1xuXHRcdFx0XHQvLyBMYW5ndWFnZSBnZXQgdXBkYXRlZFxuXHRcdFx0XHRjb25zb2xlLmluZm8oYFVwZGF0ZSAke2xhbmd1YWdlfSBzdXBwb3J0IHRvIHZlcnNpb24gJHtyZXNwb25zZS5fX3ZlcnNpb259YCk7XG5cdFx0XHRcdHRoaXMuaTE4bkRhdGFbbGFuZ3VhZ2VdID0gcmVzcG9uc2U7XG5cdFx0XHRcdC8vIFVwZGF0ZSBsb2NhbFN0b3JhZ2UgY2FjaGVcblx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1dpa2lwbHVzX2kxOG5DYWNoZScsIEpTT04uc3RyaW5naWZ5KHRoaXMuaTE4bkRhdGEpKTtcblx0XHRcdH1cblx0XHR9IGNhdGNoIHtcblx0XHRcdC8vIFVuc3VwcG9ydGVkIGxhbmd1YWdlXG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBJMThuKCk7XG4iLCAiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuLy8gQHRzLW5vY2hlY2tcbmltcG9ydCBpMThuIGZyb20gJy4vaTE4bic7XG5cbmNsYXNzIFdpa2lwbHVzRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG5cdGNvbnN0cnVjdG9yKG1lc3NhZ2UsIGNvZGUpIHtcblx0XHRzdXBlcihtZXNzYWdlKTtcblx0XHR0aGlzLmNvZGUgPSBjb2RlO1xuXHR9XG59XG5cbmNvbnN0IExvZyA9IHtcblx0ZGVidWcobWVzc2FnZSA9ICcnKSB7XG5cdFx0Y29uc29sZS5kZWJ1ZyhgW1dpa2lwbHVzLURFQlVHXSAke21lc3NhZ2V9YCk7XG5cdH0sXG5cdGluZm8obWVzc2FnZSA9ICcnKSB7XG5cdFx0Y29uc29sZS5pbmZvKGBbV2lraXBsdXMtSU5GT10gJHttZXNzYWdlfWApO1xuXHR9LFxuXHRlcnJvcihlcnJvckNvZGUsIHBheWxvYWRzID0gW10pIHtcblx0XHRsZXQgdGVtcGxhdGUgPSBpMThuLnRyYW5zbGF0ZShlcnJvckNvZGUpO1xuXHRcdGlmIChwYXlsb2Fkcy5sZW5ndGggPiAwKSB7XG5cdFx0XHQvLyBGaWxsXG5cdFx0XHRmb3IgKGNvbnN0IFtpLCB2XSBvZiBwYXlsb2Fkcy5lbnRyaWVzKCkpIHtcblx0XHRcdFx0dGVtcGxhdGUgPSB0ZW1wbGF0ZS5yZXBsYWNlKG5ldyBSZWdFeHAoYFxcXFwke2kgKyAxfWAsICdpZycpLCB2KTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Y29uc29sZS5lcnJvcihgW1dpa2lwbHVzLUVSUk9SXSAke3RlbXBsYXRlfWApO1xuXHRcdHRocm93IG5ldyBXaWtpcGx1c0Vycm9yKGAke3RlbXBsYXRlfWAsIGVycm9yQ29kZSk7XG5cdH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBMb2c7XG4iLCAiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuLy8gQHRzLW5vY2hlY2tcbmltcG9ydCByZXF1ZXN0cyBmcm9tICcuLi91dGlscy9yZXF1ZXN0cyc7XG5pbXBvcnQgTG9nIGZyb20gJy4uL3V0aWxzL2xvZyc7XG5pbXBvcnQgaTE4biBmcm9tICcuLi91dGlscy9pMThuJztcblxuY2xhc3MgV2lraSB7XG5cdHBhZ2VJbmZvQ2FjaGUgPSB7fTtcblx0LyoqXG5cdCAqIOiOt+W+lyBFZGl0IFRva2VuXG5cdCAqIEdldCBFZGl0IFRva2VuXG5cdCAqXG5cdCAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59XG5cdCAqL1xuXHRhc3luYyBnZXRFZGl0VG9rZW4oKSB7XG5cdFx0Ly8g5bCd6K+V5LuOIEFQSSDojrflvpcgRWRpdFRva2VuXG5cdFx0Ly8gVHJ5IHRvIGdldCBFZGl0VG9rZW4gZnJvbSBBUElcblx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlcXVlc3RzLmdldCh7XG5cdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRtZXRhOiAndG9rZW5zJyxcblx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdH0pO1xuXHRcdGlmIChcblx0XHRcdHJlc3BvbnNlLnF1ZXJ5ICYmXG5cdFx0XHRyZXNwb25zZS5xdWVyeS50b2tlbnMgJiZcblx0XHRcdHJlc3BvbnNlLnF1ZXJ5LnRva2Vucy5jc3JmdG9rZW4gJiZcblx0XHRcdHJlc3BvbnNlLnF1ZXJ5LnRva2Vucy5jc3JmdG9rZW4gIT09ICcrXFxcXCdcblx0XHQpIHtcblx0XHRcdHJldHVybiByZXNwb25zZS5xdWVyeS50b2tlbnMuY3NyZnRva2VuO1xuXHRcdH1cblx0XHRyZXR1cm4gTG9nLmVycm9yKCdmYWlsX3RvX2dldF9lZGl0dG9rZW4nKTtcblx0fVxuXHQvKipcblx0ICog6I635b6X6aG16Z2i5LiK5LiA54mI5pys5pe26Ze05oizXG5cdCAqIEdldCB0aGUgdGltZXN0YW1wIG9mIHRoZSBsYXN0IHJldmlzaW9uIG9mIHBhZ2Ugc3BlY2lmaWVkLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3BhcmFtcy5zdHJpbmd9IHRpdGxlIOmhtemdouWQjSAvIFBhZ2VuYW1lXG5cdCAqIEBwYXJhbSB7cGFyYW1zLnJldmlzaW9uSWR9IHJldmlzaW9uSWQg5L+u6K6i54mI5pys5Y+3IC8gUmV2aXNpb24gSURcblx0ICogQHBhcmFtIHtwYXJhbXMuY29udGVudG1vZGVsfSBjb250ZW50bW9kZWwg5YaF5a655qih5Z6LIC8gQ29udGVudCBNb2RlbFxuXHQgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fVxuXHQgKi9cblx0YXN5bmMgZ2V0UGFnZUluZm8oe3RpdGxlLCByZXZpc2lvbklkfSkge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCBwYXJhbXMgPSB7XG5cdFx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdFx0cHJvcDogJ3JldmlzaW9uc3xpbmZvJyxcblx0XHRcdFx0cnZwcm9wOiAndGltZXN0YW1wfGlkcycsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0fTtcblx0XHRcdGlmIChyZXZpc2lvbklkKSB7XG5cdFx0XHRcdHBhcmFtcy5yZXZpZHMgPSByZXZpc2lvbklkO1xuXHRcdFx0fSBlbHNlIGlmICh0aXRsZSkge1xuXHRcdFx0XHRpZiAodGhpcy5wYWdlSW5mb0NhY2hlW3RpdGxlXSkge1xuXHRcdFx0XHRcdC8vIEhpdCBjYWNoZVxuXHRcdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0XHR0aW1lc3RhbXA6IHRoaXMucGFnZUluZm9DYWNoZVt0aXRsZV0udGltZXN0YW1wLFxuXHRcdFx0XHRcdFx0cmV2aXNpb25JZDogdGhpcy5wYWdlSW5mb0NhY2hlW3RpdGxlXS5yZXZpZCxcblx0XHRcdFx0XHRcdGNvbnRlbnRtb2RlbDogdGhpcy5wYWdlSW5mb0NhY2hlW3RpdGxlXS5jb250ZW50bW9kZWwsXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fVxuXHRcdFx0XHRwYXJhbXMudGl0bGVzID0gdGl0bGU7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlcXVlc3RzLmdldChwYXJhbXMpO1xuXHRcdFx0aWYgKHJlc3BvbnNlLnF1ZXJ5ICYmIHJlc3BvbnNlLnF1ZXJ5LnBhZ2VzKSB7XG5cdFx0XHRcdGNvbnN0IGNvbnRlbnRtb2RlbCA9IHJlc3BvbnNlLnF1ZXJ5LnBhZ2VzW09iamVjdC5rZXlzKHJlc3BvbnNlLnF1ZXJ5LnBhZ2VzKVswXV0uY29udGVudG1vZGVsO1xuXHRcdFx0XHRpZiAoT2JqZWN0LmtleXMocmVzcG9uc2UucXVlcnkucGFnZXMpWzBdID09PSAnLTEnKSB7XG5cdFx0XHRcdFx0Ly8g5LiN5a2Y5Zyo6L+Z5LiA6aG16Z2iXG5cdFx0XHRcdFx0Ly8gUGFnZSBub3QgZm91bmQuXG5cdFx0XHRcdFx0dGhpcy5wYWdlSW5mb0NhY2hlW3RpdGxlXSA9IHtjb250ZW50bW9kZWw6IGNvbnRlbnRtb2RlbH07XG5cdFx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRcdGNvbnRlbnRtb2RlbDogY29udGVudG1vZGVsLFxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgcGFnZUluZm8gPSByZXNwb25zZS5xdWVyeS5wYWdlc1tPYmplY3Qua2V5cyhyZXNwb25zZS5xdWVyeS5wYWdlcylbMF1dLnJldmlzaW9uc1swXTtcblx0XHRcdFx0aWYgKHRpdGxlKSB7XG5cdFx0XHRcdFx0dGhpcy5wYWdlSW5mb0NhY2hlW3RpdGxlXSA9IHBhZ2VJbmZvO1xuXHRcdFx0XHRcdHRoaXMucGFnZUluZm9DYWNoZVt0aXRsZV0uY29udGVudG1vZGVsID0gY29udGVudG1vZGVsO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0dGltZXN0YW1wOiBwYWdlSW5mby50aW1lc3RhbXAsXG5cdFx0XHRcdFx0cmV2aXNpb25JZDogcGFnZUluZm8ucmV2aWQsXG5cdFx0XHRcdFx0Y29udGVudG1vZGVsOiBjb250ZW50bW9kZWwsXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHRMb2cuZXJyb3IoJ2ZhaWxfdG9fZ2V0X2VkaXR0b2tlbicpO1xuXHRcdH1cblx0fVxuXHQvKipcblx0ICog6I635b6X6aG16Z2i55qEIFdpa2l0ZXh0XG5cdCAqIEdldCB3aWtpdGV4dCBvZiB0aGUgcGFnZS5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IHRpdGxlIHRpdGxlXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcblx0ICogQHBhcmFtIHtzdHJpbmd9IGNvbmZpZy5yZXZpc2lvbklkIOeJiOacrOWPt1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gY29uZmlnLnNlY3Rpb24g5q616JC95Y+3XG5cdCAqIEByZXR1cm4ge1Byb21pc2U8c3RyaW5nPn0gd2lraXRleHTlhoXlrrlcblx0ICovXG5cdGFzeW5jIGdldFdpa2lUZXh0KHtzZWN0aW9uLCByZXZpc2lvbklkfSkge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCBwYXJhbXMgPSB7XG5cdFx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdFx0cHJvcDogJ3JldmlzaW9ucycsXG5cdFx0XHRcdHJ2cHJvcDogJ2NvbnRlbnQnLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0cmV2aWRzOiByZXZpc2lvbklkLFxuXHRcdFx0fTtcblx0XHRcdGlmIChyZXZpc2lvbklkKSB7XG5cdFx0XHRcdHBhcmFtcy5yZXZpZHMgPSByZXZpc2lvbklkO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHNlY3Rpb24pIHtcblx0XHRcdFx0cGFyYW1zLnJ2c2VjdGlvbiA9IHNlY3Rpb247XG5cdFx0XHR9XG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlcXVlc3RzLmdldChwYXJhbXMpO1xuXHRcdFx0aWYgKHJlc3BvbnNlLnF1ZXJ5ICYmIHJlc3BvbnNlLnF1ZXJ5LnBhZ2VzKSB7XG5cdFx0XHRcdGlmIChPYmplY3Qua2V5cyhyZXNwb25zZS5xdWVyeS5wYWdlcylbMF0gPT09ICctMScpIHtcblx0XHRcdFx0XHQvLyDkuI3lrZjlnKjov5nkuIDpobXpnaJcblx0XHRcdFx0XHQvLyBQYWdlIG5vdCBmb3VuZC5cblx0XHRcdFx0XHRyZXR1cm4gJyc7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgcGFnZUluZm8gPSByZXNwb25zZS5xdWVyeS5wYWdlc1tPYmplY3Qua2V5cyhyZXNwb25zZS5xdWVyeS5wYWdlcylbMF1dLnJldmlzaW9uc1swXTtcblx0XHRcdFx0cmV0dXJuIHBhZ2VJbmZvWycqJ107XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHRMb2cuZXJyb3IoJ2ZhaWxfdG9fZ2V0X3dpa2l0ZXh0Jyk7XG5cdFx0fVxuXHR9XG5cdC8qKlxuXHQgKiDop6PmnpAgV2lraXRleHRcblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IHdpa2l0ZXh0IHdpa2l0ZXh0XG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0aXRsZSDpobXpnaLmoIfpophcblx0ICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyDorr7nva5cblx0ICogQHJldHVybiB7UHJvbWlzZTxzdHJpbmc+fSDop6PmnpDnu5PmnpwgSFRNTFxuXHQgKi9cblx0YXN5bmMgcGFyc2VXaWtpVGV4dCh3aWtpdGV4dCwgdGl0bGUgPSAnJywgY29uZmlnID0ge30pIHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXF1ZXN0cy5wb3N0KHtcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdGFjdGlvbjogJ3BhcnNlJyxcblx0XHRcdFx0dGV4dDogd2lraXRleHQsXG5cdFx0XHRcdHRpdGxlLFxuXHRcdFx0XHRwc3Q6ICd0cnVlJyxcblx0XHRcdH0pO1xuXHRcdFx0aWYgKHJlc3BvbnNlLnBhcnNlICYmIHJlc3BvbnNlLnBhcnNlLnRleHQpIHtcblx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLnBhcnNlLnRleHRbJyonXTtcblx0XHRcdH1cblx0XHR9IGNhdGNoIHtcblx0XHRcdExvZy5lcnJvcignY2FudF9wYXJzZV93aWtpdGV4dCcpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiDnvJbovpHpobXpnaJcblx0ICpcblx0ICogQHBhcmFtIHJvb3QwXG5cdCAqIEBwYXJhbSByb290MC50aXRsZVxuXHQgKiBAcGFyYW0gcm9vdDAuY29udGVudFxuXHQgKiBAcGFyYW0gcm9vdDAuZWRpdFRva2VuXG5cdCAqIEBwYXJhbSByb290MC50aW1lc3RhbXBcblx0ICogQHBhcmFtIHJvb3QwLmNvbmZpZ1xuXHQgKiBAcGFyYW0gcm9vdDAuYWRkaXRpb25hbENvbmZpZ1xuXHQgKi9cblx0YXN5bmMgZWRpdCh7dGl0bGUsIGNvbnRlbnQsIGVkaXRUb2tlbiwgdGltZXN0YW1wLCBjb25maWcgPSB7fSwgYWRkaXRpb25hbENvbmZpZyA9IHt9fSA9IHt9KSB7XG5cdFx0bGV0IHJlc3BvbnNlO1xuXHRcdHRyeSB7XG5cdFx0XHRyZXNwb25zZSA9IGF3YWl0IHJlcXVlc3RzLnBvc3Qoe1xuXHRcdFx0XHRhY3Rpb246ICdlZGl0Jyxcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdHRleHQ6IGNvbnRlbnQsXG5cdFx0XHRcdHRpdGxlLFxuXHRcdFx0XHR0b2tlbjogZWRpdFRva2VuLFxuXHRcdFx0XHQuLi4odGltZXN0YW1wID8ge2Jhc2V0aW1lc3RhbXA6IHRpbWVzdGFtcH0gOiB7fSksXG5cdFx0XHRcdC4uLmNvbmZpZyxcblx0XHRcdFx0Li4uYWRkaXRpb25hbENvbmZpZyxcblx0XHRcdH0pO1xuXHRcdH0gY2F0Y2gge1xuXHRcdFx0TG9nLmVycm9yKCduZXR3b3JrX2VkaXRfZXJyb3InKTtcblx0XHR9XG5cdFx0aWYgKHJlc3BvbnNlLmVkaXQpIHtcblx0XHRcdGlmIChyZXNwb25zZS5lZGl0LnJlc3VsdCA9PT0gJ1N1Y2Nlc3MnKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHJlc3BvbnNlLmVkaXQuY29kZSkge1xuXHRcdFx0XHQvLyBBYnVzZSBGaWx0ZXJcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKGBcbiAgICAgICAgICAgICAgICAgICAgICAgICR7aTE4bi50cmFuc2xhdGUoJ2hpdF9hYnVzZWZpbHRlcicpfToke3Jlc3BvbnNlLmVkaXQuaW5mby5yZXBsYWNlKCcvSGl0IEFidXNlRmlsdGVyOiAvaWcnLCAnJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVwiZm9udC1zaXplOiBzbWFsbGVyO1wiPiR7cmVzcG9uc2UuZWRpdC53YXJuaW5nfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICBgKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdExvZy5lcnJvcigndW5rbm93bl9lZGl0X2Vycm9yJyk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmIChyZXNwb25zZS5lcnJvciAmJiByZXNwb25zZS5lcnJvci5jb2RlKSB7XG5cdFx0XHRMb2cuZXJyb3IocmVzcG9uc2UuZXJyb3IuY29kZSk7XG5cdFx0fSBlbHNlIGlmIChyZXNwb25zZS5jb2RlKSB7XG5cdFx0XHRMb2cuZXJyb3IocmVzcG9uc2UuY29kZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdExvZy5lcnJvcigndW5rbm93bl9lZGl0X2Vycm9yJyk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIOiOt+W+l+aMh+WumumhtemdouacgOaWsOS/ruiuoue8luWPt1xuXHQgKiBHZXQgbGF0ZXN0IHJldmlzaW9uSWQgb2YgYSBwYWdlLlxuXHQgKlxuXHQgKiBAcGFyYW0geyp9IHRpdGxlXG5cdCAqL1xuXHRhc3luYyBnZXRMYXRlc3RSZXZpc2lvbklkRm9yUGFnZSh0aXRsZSkge1xuXHRcdGNvbnN0IHtyZXZpc2lvbklkfSA9IGF3YWl0IHRoaXMuZ2V0UGFnZUluZm8oe3RpdGxlfSk7XG5cdFx0cmV0dXJuIHJldmlzaW9uSWQ7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFdpa2koKTtcbiIsICIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4vLyBAdHMtbm9jaGVja1xuaW1wb3J0IFdpa2kgZnJvbSAnLi4vc2VydmljZXMvd2lraSc7XG5pbXBvcnQgTG9nIGZyb20gJy4uL3V0aWxzL2xvZyc7XG5cbmNsYXNzIFBhZ2Uge1xuXHR0aW1lc3RhbXA7XG5cdGVkaXRUb2tlbjtcblx0dGl0bGU7XG5cdHJldmlzaW9uSWQ7XG5cblx0aW5pdGVkID0gZmFsc2U7XG5cdGlzTmV3UGFnZSA9IGZhbHNlO1xuXG5cdGNvbnRlbnRtb2RlbCA9ICd3aWtpdGV4dCc7XG5cblx0c2VjdGlvbkNhY2hlID0ge307XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7cGFyYW1zLnRpdGxlfSDpobXpnaLmoIfpopggUGFnZSBOYW1lIChvcHRpb25hbClcblx0ICogQHBhcmFtIHtwYXJhbXMucmV2aXNpb25JZH0g6aG16Z2i5L+u6K6i57yW5Y+3IFJldmlzaW9uIElkXG5cdCAqIEBwYXJhbSB7cGFyYW1zLmNvbnRlbnRtb2RlbH0g6aG16Z2i5YaF5a655qih5Z6LIENvbnRlbnQgTW9kZWxcblx0ICovXG5cdGNvbnN0cnVjdG9yKHt0aXRsZSwgcmV2aXNpb25JZH0pIHtcblx0XHR0aGlzLnRpdGxlID0gdGl0bGU7XG5cdFx0dGhpcy5yZXZpc2lvbklkID0gcmV2aXNpb25JZDtcblx0XHR0aGlzLmlzTmV3UGFnZSA9ICFyZXZpc2lvbklkO1xuXHR9XG5cblx0LyoqXG5cdCAqIOWIneWni+WMliDojrflvpfpobXpnaJFZGl0VG9rZW7lkozliJ3lp4tUaW1lU3RhbXBcblx0ICogSW5pdGlhbGl6YXRpb24uXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBlZGl0VG9rZW4gKG9wdGlvbmFsKSDlpoLmnpzmj5DkvpvkuoZlZGl0VG9rZW7vvIzlsIbkuI3kvJrlho3ojrflj5Zcblx0ICovXG5cdGFzeW5jIGluaXQoe2VkaXRUb2tlbiA9ICcnfSA9IHt9KSB7XG5cdFx0Y29uc3QgcHJvbWlzZUFyciA9IFt0aGlzLmdldFRpbWVzdGFtcCgpLCB0aGlzLmdldENvbnRlbnRNb2RlbCgpXTtcblx0XHRpZiAoIWVkaXRUb2tlbikge1xuXHRcdFx0cHJvbWlzZUFyci5wdXNoKHRoaXMuZ2V0RWRpdFRva2VuKCkpO1xuXHRcdH1cblx0XHRhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlQXJyKTtcblx0XHR0aGlzLmluaXRlZCA9IHRydWU7XG5cdFx0TG9nLmluZm8oYFBhZ2UgaW5pdGlhbGl6YXRpb24gZm9yICR7dGhpcy50aXRsZX0jJHt0aGlzLnJldmlzaW9uSWR9IGZpbmlzaGVkLmApO1xuXHR9XG5cblx0LyoqXG5cdCAqIOiOt+W+lyBFZGl0VG9rZW5cblx0ICogR2V0IEVkaXRUb2tlblxuXHQgKi9cblx0YXN5bmMgZ2V0RWRpdFRva2VuKCkge1xuXHRcdGF3YWl0IG13LmxvYWRlci51c2luZygnbWVkaWF3aWtpLnVzZXInKTtcblx0XHRpZiAobXcudXNlci50b2tlbnMuZ2V0KCdjc3JmVG9rZW4nKSAmJiBtdy51c2VyLnRva2Vucy5nZXQoJ2NzcmZUb2tlbicpICE9PSAnK1xcXFwnKSB7XG5cdFx0XHQvLyDlpoLmnpwgTWVkaWFXaWtpIEphdmFTY3JpcHQgQVBJIOWPr+S7peebtOaOpeiOt+W+lyBFZGl0VG9rZW4g5YiZ55u05o6l6L+U5ZueXG5cdFx0XHQvLyBSZXR1cm4gRWRpdFRva2VuIHJldHJpZXZlZCBmcm9tIE1lZGlhV2lraSBKYXZhU2NyaXB0IEFQSSBpZiBhY2Nlc3NpYmxlXG5cdFx0XHR0aGlzLmVkaXRUb2tlbiA9IG13LnVzZXIudG9rZW5zLmdldCgnY3NyZlRva2VuJyk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdC8vIOS7jkFQSeiOt+W+l0VkaXRUb2tlblxuXHRcdC8vIEdldCBFZGl0VG9rZW4gZnJvbSBNZWRpYVdpa2kgQVBJXG5cdFx0dGhpcy5lZGl0VG9rZW4gPSBhd2FpdCBXaWtpLmdldEVkaXRUb2tlbigpO1xuXHR9XG5cblx0LyoqXG5cdCAqIOiOt+W+l+e8lui+keWfuuWHhuaXtumXtOaIs1xuXHQgKiBHZXQgQmFzZSBUaW1lc3RhbXBcblx0ICovXG5cdGFzeW5jIGdldFRpbWVzdGFtcCgpIHtcblx0XHRjb25zdCB7dGltZXN0YW1wLCByZXZpc2lvbklkfSA9IGF3YWl0IFdpa2kuZ2V0UGFnZUluZm8oe1xuXHRcdFx0cmV2aXNpb25JZDogdGhpcy5yZXZpc2lvbklkLFxuXHRcdFx0dGl0bGU6IHRoaXMudGl0bGUsXG5cdFx0fSk7XG5cdFx0dGhpcy50aW1lc3RhbXAgPSB0aW1lc3RhbXA7XG5cdFx0aWYgKHJldmlzaW9uSWQpIHtcblx0XHRcdHRoaXMucmV2aXNpb25JZCA9IHJldmlzaW9uSWQ7XG5cdFx0XHR0aGlzLmlzTmV3UGFnZSA9IGZhbHNlO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiDojrflvpfpobXpnaLlhoXlrrnmqKHlnotcblx0ICpcblx0ICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gY29uZmlnLnJldmlzaW9uSWRcblx0ICovXG5cdGFzeW5jIGdldENvbnRlbnRNb2RlbCgpIHtcblx0XHRjb25zdCB7Y29udGVudG1vZGVsfSA9IGF3YWl0IFdpa2kuZ2V0UGFnZUluZm8oe1xuXHRcdFx0cmV2aXNpb25JZDogdGhpcy5yZXZpc2lvbklkLFxuXHRcdFx0dGl0bGU6IHRoaXMudGl0bGUsXG5cdFx0fSk7XG5cdFx0dGhpcy5jb250ZW50bW9kZWwgPSBjb250ZW50bW9kZWwgfHwgJ3dpa2l0ZXh0Jztcblx0fVxuXG5cdC8qKlxuXHQgKiDojrflvpcgV2lraVRleHRcblx0ICpcblx0ICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gY29uZmlnLnNlY3Rpb25cblx0ICogQHBhcmFtIHtzdHJpbmd9IGNvbmZpZy5yZXZpc2lvbklkXG5cdCAqL1xuXHRhc3luYyBnZXRXaWtpVGV4dCh7c2VjdGlvbiA9ICcnfSA9IHt9KSB7XG5cdFx0Y29uc3Qgc2VjID0gc2VjdGlvbiA9PT0gLTEgPyAnJyA6IHNlY3Rpb247XG5cdFx0aWYgKHRoaXMuc2VjdGlvbkNhY2hlW3NlY10pIHtcblx0XHRcdHJldHVybiB0aGlzLnNlY3Rpb25DYWNoZVtzZWNdO1xuXHRcdH1cblx0XHRjb25zdCB3aWtpVGV4dCA9IGF3YWl0IFdpa2kuZ2V0V2lraVRleHQoe1xuXHRcdFx0c2VjdGlvbjogc2VjLFxuXHRcdFx0cmV2aXNpb25JZDogdGhpcy5yZXZpc2lvbklkLFxuXHRcdH0pO1xuXHRcdExvZy5pbmZvKGBXaWtpdGV4dCBvZiAke3RoaXMudGl0bGV9IyR7c2VjdGlvbn0gZmV0Y2hlZC5gKTtcblx0XHR0aGlzLnNlY3Rpb25DYWNoZVtzZWNdID0gd2lraVRleHQ7XG5cdFx0cmV0dXJuIHdpa2lUZXh0O1xuXHR9XG5cblx0LyoqXG5cdCAqIOino+aekCBXaWtpVGV4dFxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gd2lraXRleHRcblx0ICovXG5cdGFzeW5jIHBhcnNlV2lraVRleHQod2lraXRleHQpIHtcblx0XHRyZXR1cm4gV2lraS5wYXJzZVdpa2lUZXh0KHdpa2l0ZXh0LCB0aGlzLnRpdGxlKTtcblx0fVxuXG5cdC8qKlxuXHQgKiDnvJbovpHpobXpnaJcblx0ICpcblx0ICogQHBhcmFtIHsqfSBjb25maWdcblx0ICogQHBhcmFtIHBheWxvYWRcblx0ICovXG5cdGFzeW5jIGVkaXQocGF5bG9hZCkge1xuXHRcdGlmICghdGhpcy5lZGl0VG9rZW4pIHtcblx0XHRcdExvZy5lcnJvcignZmFpbF90b19nZXRfZWRpdHRva2VuJyk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGlmICghdGhpcy50aW1lc3RhbXAgJiYgIXRoaXMuaXNOZXdQYWdlKSB7XG5cdFx0XHQvLyDlpoLmnpzkuI3mmK/liJvlu7rmlrDpobXpnaIg5Y+I5rKh5pyJ5Z+65YeG5pe26Ze05oizIOWImeacieWPr+iDvemAoOaIkOe8lui+keimhuebliDkv53pmanotbfop4Hnm7TmjqXmi5Lnu51cblx0XHRcdExvZy5lcnJvcignZmFpbF90b19nZXRfdGltZXN0YW1wJyk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHJldHVybiBXaWtpLmVkaXQoe1xuXHRcdFx0dGl0bGU6IHRoaXMudGl0bGUsXG5cdFx0XHRlZGl0VG9rZW46IHRoaXMuZWRpdFRva2VuLFxuXHRcdFx0Li4uKHRoaXMudGltZXN0YW1wID8ge3RpbWVzdGFtcDogdGhpcy50aW1lc3RhbXB9IDoge30pLFxuXHRcdFx0Li4ucGF5bG9hZCxcblx0XHRcdGFkZGl0aW9uYWxDb25maWc6IHtcblx0XHRcdFx0Li4uKHRoaXMuaXNOZXdQYWdlID8ge2NyZWF0ZW9ubHk6IHRoaXMuaXNOZXdQYWdlfSA6IHt9KSxcblx0XHRcdH0sXG5cdFx0fSk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFnZTtcbiIsICIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4vLyBAdHMtbm9jaGVja1xuY2xhc3MgTm90aWZpY2F0aW9uIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5pbml0KCk7XG5cdH1cblx0aW5pdCgpIHtcblx0XHQkKCdib2R5JykuYXBwZW5kKCc8ZGl2IGlkPVwiTW9lTm90aWZpY2F0aW9uXCI+PC9kaXY+Jyk7XG5cdH1cblx0ZGlzcGxheSh0ZXh0ID0gJ+WWtX4nLCB0eXBlID0gJ3N1Y2Nlc3MnLCBjYWxsYmFjayA9ICgpID0+IHt9KSB7XG5cdFx0JCgnI01vZU5vdGlmaWNhdGlvbicpLmFwcGVuZChcblx0XHRcdCQoJzxkaXY+Jylcblx0XHRcdFx0LmFkZENsYXNzKCdNb2VOb3RpZmljYXRpb24tbm90aWNlJylcblx0XHRcdFx0LmFkZENsYXNzKGBNb2VOb3RpZmljYXRpb24tbm90aWNlLSR7dHlwZX1gKVxuXHRcdFx0XHQuYXBwZW5kKGA8c3Bhbj4ke3RleHR9PC9zcGFuPmApXG5cdFx0KTtcblx0XHQkKCcjTW9lTm90aWZpY2F0aW9uJykuZmluZCgnLk1vZU5vdGlmaWNhdGlvbi1ub3RpY2UnKS5sYXN0KCkuZmFkZUluKDMwMCk7XG5cdFx0dGhpcy5iaW5kKCk7XG5cdFx0dGhpcy5jbGVhcigpO1xuXHRcdGNhbGxiYWNrKCQoJyNNb2VOb3RpZmljYXRpb24nKS5maW5kKCcuTW9lTm90aWZpY2F0aW9uLW5vdGljZScpLmxhc3QoKSk7XG5cdH1cblx0YmluZCgpIHtcblx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHQkKCcuTW9lTm90aWZpY2F0aW9uLW5vdGljZScpLm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRzZWxmLnNsaWRlTGVmdCgkKHRoaXMpKTtcblx0XHR9KTtcblx0fVxuXHRzdWNjZXNzKHRleHQsIGNhbGxiYWNrKSB7XG5cdFx0dGhpcy5kaXNwbGF5KHRleHQsICdzdWNjZXNzJywgY2FsbGJhY2spO1xuXHR9XG5cdHdhcm5pbmcodGV4dCwgY2FsbGJhY2spIHtcblx0XHR0aGlzLmRpc3BsYXkodGV4dCwgJ3dhcm5pbmcnLCBjYWxsYmFjayk7XG5cdH1cblx0ZXJyb3IodGV4dCwgY2FsbGJhY2spIHtcblx0XHR0aGlzLmRpc3BsYXkodGV4dCwgJ2Vycm9yJywgY2FsbGJhY2spO1xuXHR9XG5cdGNsZWFyKCkge1xuXHRcdGlmICgkKCcuTW9lTm90aWZpY2F0aW9uLW5vdGljZScpLmxlbmd0aCA+PSAxMCkge1xuXHRcdFx0JCgnI01vZU5vdGlmaWNhdGlvbicpXG5cdFx0XHRcdC5jaGlsZHJlbigpXG5cdFx0XHRcdC5maXJzdCgpXG5cdFx0XHRcdC5mYWRlT3V0KDE1MCwgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdCQodGhpcykucmVtb3ZlKCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0c2V0VGltZW91dCh0aGlzLmNsZWFyLCAzMDApO1xuXHRcdH1cblx0fVxuXHRlbXB0eShmKSB7XG5cdFx0JCgnLk1vZU5vdGlmaWNhdGlvbi1ub3RpY2UnKS5lYWNoKGZ1bmN0aW9uIChpKSB7XG5cdFx0XHRpZiAodHlwZW9mIGYgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0Y29uc3QgZWxlID0gJCh0aGlzKTtcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0ZihlbGUpO1xuXHRcdFx0XHR9LCAyMDAgKiBpKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdCQodGhpcylcblx0XHRcdFx0XHQuZGVsYXkoaSAqIDIwMClcblx0XHRcdFx0XHQuZmFkZU91dCgnZmFzdCcsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdCQodGhpcykucmVtb3ZlKCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblx0c2xpZGVMZWZ0KGVsZSwgc3BlZWQpIHtcblx0XHRlbGUuY3NzKCdwb3NpdGlvbicsICdyZWxhdGl2ZScpO1xuXHRcdGVsZS5hbmltYXRlKFxuXHRcdFx0e1xuXHRcdFx0XHRsZWZ0OiAnLTIwMCUnLFxuXHRcdFx0fSxcblx0XHRcdHNwZWVkIHx8IDE1MCxcblx0XHRcdGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0JCh0aGlzKS5mYWRlT3V0KCdmYXN0JywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdCQodGhpcykucmVtb3ZlKCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IE5vdGlmaWNhdGlvbigpO1xuIiwgIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbi8vIEB0cy1ub2NoZWNrXG5jb25zdCBzbGVlcCA9ICh0aW1lKSA9PiB7XG5cdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuXHRcdHJldHVybiBzZXRUaW1lb3V0KHJlc29sdmUsIHRpbWUpO1xuXHR9KTtcbn07XG5leHBvcnQgZGVmYXVsdCBzbGVlcDtcbiIsICIvKipcbiAqIOino+aekFVSTOWPguaVsOWIl+ihqFxuICogUGFyc2UgVVJMIHF1ZXJ5LlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfX0gdXJsXG4gKiBAcGFyYW0gdXJsXG4gKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbi8vIEB0cy1ub2NoZWNrXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VRdWVyeSh1cmwpIHtcblx0Y29uc3QgcmVnID0gLygoW14/Jj1dKykoPzo9KFtePyY9XSopKSopL2c7XG5cdGNvbnN0IHBhcmFtcyA9IHt9O1xuXHRsZXQgbWF0Y2g7XG5cdHdoaWxlICgobWF0Y2ggPSByZWcuZXhlYyh1cmwpKSkge1xuXHRcdHRyeSB7XG5cdFx0XHRwYXJhbXNbbWF0Y2hbMl1dID0gZGVjb2RlVVJJQ29tcG9uZW50KG1hdGNoWzNdKTtcblx0XHR9IGNhdGNoIHtcblx0XHRcdHBhcmFtc1ttYXRjaFsyXV0gPSBtYXRjaFszXTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHBhcmFtcztcbn1cbiIsICIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4vLyBAdHMtbm9jaGVja1xuaW1wb3J0IENvbnN0YW50cyBmcm9tICcuLi91dGlscy9jb25zdGFudHMnO1xuaW1wb3J0IE5vdGlmaWNhdGlvbiBmcm9tICcuL25vdGlmaWNhdGlvbic7XG5pbXBvcnQgaTE4biBmcm9tICcuLi91dGlscy9pMThuJztcbmltcG9ydCBMb2cgZnJvbSAnLi4vdXRpbHMvbG9nJztcbmltcG9ydCBzbGVlcCBmcm9tICcuLi91dGlscy9zbGVlcCc7XG5pbXBvcnQge3BhcnNlUXVlcnl9IGZyb20gJy4uL3V0aWxzL2hlbHBlcnMnO1xuXG5jbGFzcyBVSSB7XG5cdHF1aWNrRWRpdFBhbmVsVmlzaWJsZSA9IGZhbHNlO1xuXHRzY3JvbGxUb3AgPSAwO1xuXG5cdC8qKlxuXHQgKiDliJvlu7rlsYXkuK3lr7nor53moYZcblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IHRpdGxlIOeql+WPo+agh+mimFxuXHQgKiBAcGFyYW0ge3N0cmluZyB8IEpRdWVyeTxIVE1MRWxlbWVudD59IGNvbnRlbnQg5YaF5a65XG5cdCAqIEBwYXJhbSB7Kn0gd2lkdGgg5a695bqmXG5cdCAqIEBwYXJhbSB7Kn0gY2FsbGJhY2sg5Zue6LCD5Ye95pWwXG5cdCAqL1xuXHRjcmVhdGVEaWFsb2dCb3godGl0bGUgPSAnV2lraXBsdXMnLCBjb250ZW50ID0gJycsIHdpZHRoID0gNjAwLCBjYWxsYmFjayA9ICgpID0+IHt9KSB7XG5cdFx0aWYgKCQoJy5XaWtpcGx1cy1JbnRlckJveCcpLmxlbmd0aCA+IDApIHtcblx0XHRcdCQoJy5XaWtpcGx1cy1JbnRlckJveCcpLmVhY2goZnVuY3Rpb24gKCkge1xuXHRcdFx0XHQkKHRoaXMpLnJlbW92ZSgpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdGNvbnN0IGNsaWVudFdpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG5cdFx0Y29uc3QgY2xpZW50SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuXHRcdGNvbnN0IGRpYWxvZ1dpZHRoID0gTWF0aC5taW4oY2xpZW50V2lkdGgsIHdpZHRoKTtcblx0XHRjb25zdCBkaWFsb2dCb3ggPSAkKCc8ZGl2PicpXG5cdFx0XHQuYWRkQ2xhc3MoJ1dpa2lwbHVzLUludGVyQm94Jylcblx0XHRcdC5jc3Moe1xuXHRcdFx0XHQnbWFyZ2luLWxlZnQnOiBjbGllbnRXaWR0aCAvIDIgLSBkaWFsb2dXaWR0aCAvIDIsXG5cdFx0XHRcdHRvcDogJChkb2N1bWVudCkuc2Nyb2xsVG9wKCkgKyBjbGllbnRIZWlnaHQgKiAwLjIsXG5cdFx0XHRcdGRpc3BsYXk6ICdub25lJyxcblx0XHRcdH0pXG5cdFx0XHQuYXBwZW5kKCQoJzxkaXY+JykuYWRkQ2xhc3MoJ1dpa2lwbHVzLUludGVyQm94LUhlYWRlcicpLmh0bWwodGl0bGUpKVxuXHRcdFx0LmFwcGVuZCgkKCc8ZGl2PicpLmFkZENsYXNzKCdXaWtpcGx1cy1JbnRlckJveC1Db250ZW50JykuYXBwZW5kKGNvbnRlbnQpKVxuXHRcdFx0LmFwcGVuZCgkKCc8c3Bhbj4nKS50ZXh0KCfDlycpLmFkZENsYXNzKCdXaWtpcGx1cy1JbnRlckJveC1DbG9zZScpKTtcblx0XHQkKCdib2R5JykuYXBwZW5kKGRpYWxvZ0JveCk7XG5cdFx0JCgnLldpa2lwbHVzLUludGVyQm94Jykud2lkdGgoZGlhbG9nV2lkdGgpO1xuXHRcdCQoJy5XaWtpcGx1cy1JbnRlckJveC1DbG9zZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcblx0XHRcdCQodGhpcylcblx0XHRcdFx0LnBhcmVudCgpXG5cdFx0XHRcdC5mYWRlT3V0KCdmYXN0JywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbG9zZScsICh3aW5kb3cub25iZWZvcmV1bmxvYWQgPSB1bmRlZmluZWQpKTsgLy8g5Y+W5raI6aG16Z2i5YWz6Zet56Gu6K6kXG5cdFx0XHRcdFx0JCh0aGlzKS5yZW1vdmUoKTtcblx0XHRcdFx0fSk7XG5cdFx0fSk7XG5cdFx0Ly/mi5bmm7Ncblx0XHRjb25zdCBiaW5kRHJhZ2dpbmcgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuXHRcdFx0ZWxlbWVudC5tb3VzZWRvd24oKGUpID0+IHtcblx0XHRcdFx0Y29uc3QgYmFzZVggPSBlLmNsaWVudFg7XG5cdFx0XHRcdGNvbnN0IGJhc2VZID0gZS5jbGllbnRZO1xuXHRcdFx0XHRjb25zdCBiYXNlT2Zmc2V0WCA9IGVsZW1lbnQucGFyZW50KCkub2Zmc2V0KCkubGVmdDtcblx0XHRcdFx0Y29uc3QgYmFzZU9mZnNldFkgPSBlbGVtZW50LnBhcmVudCgpLm9mZnNldCgpLnRvcDtcblx0XHRcdFx0JChkb2N1bWVudCkub24oJ21vdXNlbW92ZScsIChlKSA9PiB7XG5cdFx0XHRcdFx0ZWxlbWVudC5wYXJlbnQoKS5jc3Moe1xuXHRcdFx0XHRcdFx0J21hcmdpbi1sZWZ0JzogYmFzZU9mZnNldFggKyBlLmNsaWVudFggLSBiYXNlWCxcblx0XHRcdFx0XHRcdHRvcDogYmFzZU9mZnNldFkgKyBlLmNsaWVudFkgLSBiYXNlWSxcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdCQoZG9jdW1lbnQpLm9uKCdtb3VzZXVwJywgKCkgPT4ge1xuXHRcdFx0XHRcdGVsZW1lbnQudW5iaW5kKCdtb3VzZWRvd24nKTtcblx0XHRcdFx0XHQkKGRvY3VtZW50KS5vZmYoJ21vdXNlbW92ZScpO1xuXHRcdFx0XHRcdCQoZG9jdW1lbnQpLm9mZignbW91c2V1cCcpO1xuXHRcdFx0XHRcdGJpbmREcmFnZ2luZyhlbGVtZW50KTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9O1xuXHRcdGJpbmREcmFnZ2luZygkKCcuV2lraXBsdXMtSW50ZXJCb3gtSGVhZGVyJykpO1xuXHRcdCQoJy5XaWtpcGx1cy1JbnRlckJveCcpLmZhZGVJbig1MDApO1xuXHRcdGNhbGxiYWNrKCk7XG5cdFx0cmV0dXJuIGRpYWxvZ0JveDtcblx0fVxuXG5cdC8qKlxuXHQgKiDlnKjmkJzntKLmoYblt6bkvqfjgIzmm7TlpJrjgI3oj5zljZXlhoXmt7vliqDmjInpkq5cblx0ICogQWRkIGEgYnV0dG9uIGluIFwiTW9yZVwiIG1lbnUgKGxlZnQgb2YgdGhlIHNlYXJjaCBiYXIpXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IOaMiemSruWQjSBCdXR0b24gdGV4dFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gaWQg5oyJ6ZKuaWQgQnV0dG9uIGlkXG5cdCAqIEByZXR1cm4ge0pRdWVyeTxIVE1MRWxlbWVudD59IGJ1dHRvblxuXHQgKi9cblx0YWRkRnVuY3Rpb25CdXR0b24odGV4dCwgaWQpIHtcblx0XHRsZXQgYnV0dG9uO1xuXHRcdHN3aXRjaCAoQ29uc3RhbnRzLnNraW4pIHtcblx0XHRcdGNhc2UgJ21pbmVydmEnOlxuXHRcdFx0XHRidXR0b24gPSAkKCc8bGk+Jylcblx0XHRcdFx0XHQuYXR0cignaWQnLCBpZClcblx0XHRcdFx0XHQuYWRkQ2xhc3MoJ3RvZ2dsZS1saXN0LWl0ZW0nKVxuXHRcdFx0XHRcdC5hcHBlbmQoXG5cdFx0XHRcdFx0XHQkKCc8YT4nKVxuXHRcdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ213LXVpLWljb24gbXctdWktaWNvbi1iZWZvcmUgdG9nZ2xlLWxpc3QtaXRlbV9fYW5jaG9yJylcblx0XHRcdFx0XHRcdFx0LmFwcGVuZChcblx0XHRcdFx0XHRcdFx0XHQkKCc8c3Bhbj4nKVxuXHRcdFx0XHRcdFx0XHRcdFx0LmF0dHIoJ2hyZWYnLCAnamF2YXNjcmlwdDp2b2lkKDApOycpXG5cdFx0XHRcdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ3RvZ2dsZS1saXN0LWl0ZW1fX2xhYmVsJylcblx0XHRcdFx0XHRcdFx0XHRcdC50ZXh0KHRleHQpXG5cdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAnbW9lc2tpbic6XG5cdFx0XHRcdGJ1dHRvbiA9ICQoJzxsaT4nKVxuXHRcdFx0XHRcdC5hZGRDbGFzcygnV2lraXBsdXMtTW9yZS1GdW5jdGlvbi1CdXR0b24nKVxuXHRcdFx0XHRcdC5hdHRyKCdpZCcsIGlkKVxuXHRcdFx0XHRcdC5hcHBlbmQoJCgnPGE+JykuYXR0cignaHJlZicsICdqYXZhc2NyaXB0OnZvaWQoMCk7JykudGV4dCh0ZXh0KSk7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRidXR0b24gPSAkKCc8bGk+Jylcblx0XHRcdFx0XHQuYWRkQ2xhc3MoJ213LWxpc3QtaXRlbScpXG5cdFx0XHRcdFx0LmFkZENsYXNzKCd2ZWN0b3ItdGFiLW5vaWNvbicpXG5cdFx0XHRcdFx0LmF0dHIoJ2lkJywgaWQpXG5cdFx0XHRcdFx0LmFwcGVuZCgkKCc8YT4nKS5hdHRyKCdocmVmJywgJ2phdmFzY3JpcHQ6dm9pZCgwKTsnKS50ZXh0KHRleHQpKTtcblx0XHR9XG5cdFx0aWYgKENvbnN0YW50cy5za2luID09PSAnbWluZXJ2YScgJiYgJCgnI3AtdGInKS5sZW5ndGggPiAwKSB7XG5cdFx0XHQkKCcjcC10YicpLmFwcGVuZChidXR0b24pO1xuXHRcdFx0cmV0dXJuICQoYCMke2lkfWApO1xuXHRcdH0gZWxzZSBpZiAoQ29uc3RhbnRzLnNraW4gPT09ICdtb2Vza2luJykge1xuXHRcdFx0JCgnLm1vcmUtYWN0aW9ucy1saXN0JykuZmlyc3QoKS5hcHBlbmQoYnV0dG9uKTtcblx0XHRcdHJldHVybiAkKGAjJHtpZH1gKTtcblx0XHR9IGVsc2UgaWYgKCQoJyNwLWNhY3Rpb25zJykubGVuZ3RoID4gMCkge1xuXHRcdFx0JCgnI3AtY2FjdGlvbnMgdWwnKS5hcHBlbmQoYnV0dG9uKTtcblx0XHRcdHJldHVybiAkKGAjJHtpZH1gKTtcblx0XHR9XG5cdFx0TG9nLmluZm8oaTE4bi50cmFuc2xhdGUoJ2NhbnRfYWRkX2Z1bmNidG4nKSk7XG5cdH1cblxuXHQvKipcblx0ICog5o+S5YWl5b+r6YCf6YeN5a6a5ZCR5oyJ6ZKuXG5cdCAqXG5cdCAqIEBwYXJhbSB7Kn0gb25DbGlja1xuXHQgKi9cblx0aW5zZXJ0U2ltcGxlUmVkaXJlY3RCdXR0b24ob25DbGljayA9ICgpID0+IHt9KSB7XG5cdFx0Y29uc3QgYnV0dG9uID0gdGhpcy5hZGRGdW5jdGlvbkJ1dHRvbihpMThuLnRyYW5zbGF0ZSgncmVkaXJlY3RfZnJvbScpLCAnV2lraXBsdXMtU1ItSW50cm8nKTtcblx0XHRpZiAoYnV0dG9uKSB7XG5cdFx0XHRidXR0b24ub24oJ2NsaWNrJywgb25DbGljayk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIOaPkuWFpeiuvue9rumdouadv+aMiemSrlxuXHQgKlxuXHQgKiBAcGFyYW0geyp9IG9uQ2xpY2tcblx0ICovXG5cdGluc2VydFNldHRpbmdzUGFuZWxCdXR0b24ob25DbGljayA9ICgpID0+IHt9KSB7XG5cdFx0Y29uc3QgYnV0dG9uID0gdGhpcy5hZGRGdW5jdGlvbkJ1dHRvbihpMThuLnRyYW5zbGF0ZSgnd2lraXBsdXNfc2V0dGluZ3MnKSwgJ1dpa2lwbHVzLVNldHRpbmdzLUludHJvJyk7XG5cdFx0aWYgKGJ1dHRvbikge1xuXHRcdFx0YnV0dG9uLm9uKCdjbGljaycsIG9uQ2xpY2spO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiDmj5LlhaXpobbpg6jlv6vpgJ/nvJbovpHmjInpkq5cblx0ICogSW5zZXJ0IFF1aWNrRWRpdCBidXR0b24gYmVzaWRlcyBwYWdlIGVkaXQgYnV0dG9uLlxuXHQgKlxuXHQgKiBAcGFyYW0gb25DbGlja1xuXHQgKi9cblx0aW5zZXJ0VG9wUXVpY2tFZGl0RW50cnkob25DbGljaykge1xuXHRcdGNvbnN0IHRvcEJ0biA9ICQoJzxsaT4nKS5hdHRyKCdpZCcsICdXaWtpcGx1cy1FZGl0LVRvcEJ0bicpLmF0dHIoJ2NsYXNzJywgJ213LWxpc3QtaXRlbScpO1xuXHRcdGNvbnN0IHRvcEJ0bkxpbmsgPSAkKCc8YT4nKVxuXHRcdFx0LmF0dHIoJ2hyZWYnLCAnamF2YXNjcmlwdDp2b2lkKDApJylcblx0XHRcdC50ZXh0KGAke2kxOG4udHJhbnNsYXRlKCdxdWlja2VkaXRfdG9wYnRuJyl9YCk7XG5cdFx0dG9wQnRuLmFwcGVuZCh0b3BCdG5MaW5rKTtcblx0XHRzd2l0Y2ggKENvbnN0YW50cy5za2luKSB7XG5cdFx0XHRjYXNlICdtaW5lcnZhJzpcblx0XHRcdFx0dG9wQnRuLmNzcyh7J2FsaWduLWl0ZW1zJzogJ2NlbnRlcicsIGRpc3BsYXk6ICdmbGV4J30pO1xuXHRcdFx0XHR0b3BCdG4uZmluZCgnc3BhbicpLmFkZENsYXNzKCdwYWdlLWFjdGlvbnMtbWVudV9fbGlzdC1pdGVtJyk7XG5cdFx0XHRcdHRvcEJ0blxuXHRcdFx0XHRcdC5maW5kKCdhJylcblx0XHRcdFx0XHQuYWRkQ2xhc3MoXG5cdFx0XHRcdFx0XHQnbXctdWktaWNvbiBtdy11aS1pY29uLWVsZW1lbnQgbXctdWktaWNvbi13aWtpbWVkaWEtZWRpdC1iYXNlMjAgbXctdWktaWNvbi13aXRoLWxhYmVsLWRlc2t0b3AnXG5cdFx0XHRcdFx0KVxuXHRcdFx0XHRcdC5jc3MoJ3ZlcnRpY2FsLWFsaWduJywgJ21pZGRsZScpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAndmVjdG9yLTIwMjInOlxuXHRcdFx0XHR0b3BCdG4uYWRkQ2xhc3MoJ3ZlY3Rvci10YWItbm9pY29uJyk7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlICd2ZWN0b3InOlxuXHRcdFx0XHR0b3BCdG4uYXBwZW5kKCQoJzxzcGFuPicpLmFwcGVuZCh0b3BCdG5MaW5rKSk7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRkZWZhdWx0OlxuXHRcdH1cblx0XHQkKHRvcEJ0bikub24oJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0b25DbGljayh7XG5cdFx0XHRcdHNlY3Rpb25OdW1iZXI6IC0xLFxuXHRcdFx0XHR0YXJnZXRQYWdlTmFtZTogQ29uc3RhbnRzLmN1cnJlbnRQYWdlTmFtZSxcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHRcdGlmICgkKCcjY2EtZWRpdCcpLmxlbmd0aCA+IDAgJiYgJCgnI1dpa2lwbHVzLUVkaXQtVG9wQnRuJykubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRDb25zdGFudHMuc2tpbiA9PT0gJ21pbmVydmEnID8gJCgnI2NhLWVkaXQnKS5wYXJlbnQoKS5hZnRlcih0b3BCdG4pIDogJCgnI2NhLWVkaXQnKS5hZnRlcih0b3BCdG4pO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiDmj5LlhaXmrrXokL3lv6vpgJ/nvJbovpHmjInpkq5cblx0ICogSW5zZXJ0IFF1aWNrRWRpdCBidXR0b25zIGZvciBlYWNoIHNlY3Rpb24uXG5cdCAqXG5cdCAqIEBwYXJhbSBvbkNsaWNrXG5cdCAqL1xuXHRpbnNlcnRTZWN0aW9uUXVpY2tFZGl0RW50cmllcyhvbkNsaWNrID0gKCkgPT4ge30pIHtcblx0XHRjb25zdCBzZWN0aW9uQnRuID1cblx0XHRcdENvbnN0YW50cy5za2luID09PSAnbWluZXJ2YSdcblx0XHRcdFx0PyAkKCc8c3Bhbj4nKS5hcHBlbmQoXG5cdFx0XHRcdFx0XHQkKCc8YT4nKVxuXHRcdFx0XHRcdFx0XHQuYWRkQ2xhc3MoXG5cdFx0XHRcdFx0XHRcdFx0J1dpa2lwbHVzLUVkaXQtU2VjdGlvbkJ0biBtdy11aS1pY29uIG13LXVpLWljb24tZWxlbWVudCBtdy11aS1pY29uLXdpa2ltZWRpYS1lZGl0LWJhc2UyMCBlZGl0LXBhZ2UgbXctdWktaWNvbi1mbHVzaC1yaWdodCdcblx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0XHQuY3NzKCdtYXJnaW4tbGVmdCcsICcwLjc1ZW0nKVxuXHRcdFx0XHRcdFx0XHQuYXR0cignaHJlZicsICdqYXZhc2NyaXB0OnZvaWQoMCknKVxuXHRcdFx0XHRcdFx0XHQuYXR0cigndGl0bGUnLCBpMThuLnRyYW5zbGF0ZSgncXVpY2tlZGl0X3NlY3Rpb25idG4nKSlcblx0XHRcdFx0XHQpXG5cdFx0XHRcdDogJCgnPHNwYW4+Jylcblx0XHRcdFx0XHRcdC5hcHBlbmQoJCgnPHNwYW4+JykuYWRkQ2xhc3MoJ213LWVkaXRzZWN0aW9uLWRpdmlkZXInKS50ZXh0KCcgfCAnKSlcblx0XHRcdFx0XHRcdC5hcHBlbmQoXG5cdFx0XHRcdFx0XHRcdCQoJzxhPicpXG5cdFx0XHRcdFx0XHRcdFx0LmFkZENsYXNzKCdXaWtpcGx1cy1FZGl0LVNlY3Rpb25CdG4nKVxuXHRcdFx0XHRcdFx0XHRcdC5hdHRyKCdocmVmJywgJ2phdmFzY3JpcHQ6dm9pZCgwKScpXG5cdFx0XHRcdFx0XHRcdFx0LnRleHQoaTE4bi50cmFuc2xhdGUoJ3F1aWNrZWRpdF9zZWN0aW9uYnRuJykpXG5cdFx0XHRcdFx0XHQpO1xuXHRcdCQoJy5tdy1lZGl0c2VjdGlvbicpLmVhY2goZnVuY3Rpb24gKGkpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGNvbnN0IGVkaXRVUkwgPSAkKHRoaXMpLmZpbmQoXCJhW2hyZWYqPSdhY3Rpb249ZWRpdCddXCIpLmZpcnN0KCkuYXR0cignaHJlZicpO1xuXHRcdFx0XHRjb25zdCBzZWN0aW9uTnVtYmVyID0gZWRpdFVSTFxuXHRcdFx0XHRcdC5tYXRjaCgvJlt2ZV0qc2VjdGlvblxcPShbXiZdKykvKVsxXSAvLyBgdmVgIGZvciB2aXN1YWwgZWRpdG9yXG5cdFx0XHRcdFx0LnJlcGxhY2UoL1QtL2dpLCAnJyk7IC8vIGVtYmVkZGVkIHBhZ2VzIHVzZSBULXNlcmllcyBzZWN0aW9uIG51bWJlclxuXHRcdFx0XHRjb25zdCBzZWN0aW9uVGFyZ2V0TmFtZSA9IGRlY29kZVVSSUNvbXBvbmVudChlZGl0VVJMLm1hdGNoKC90aXRsZT0oLis/KSYvKVsxXSk7XG5cdFx0XHRcdGNvbnN0IGNsb25lTm9kZSA9ICQodGhpcykucHJldigpLmNsb25lKCk7XG5cdFx0XHRcdGNsb25lTm9kZS5maW5kKCcubXctaGVhZGxpbmUtbnVtYmVyJykucmVtb3ZlKCk7XG5cdFx0XHRcdGNvbnN0IHNlY3Rpb25OYW1lID0gY2xvbmVOb2RlLnRleHQoKS50cmltKCk7XG5cdFx0XHRcdGNvbnN0IF9zZWN0aW9uQnRuID0gc2VjdGlvbkJ0bi5jbG9uZSgpO1xuXHRcdFx0XHRfc2VjdGlvbkJ0bi5maW5kKCcuV2lraXBsdXMtRWRpdC1TZWN0aW9uQnRuJykub24oJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0XHRcdG9uQ2xpY2soe1xuXHRcdFx0XHRcdFx0c2VjdGlvbk51bWJlcixcblx0XHRcdFx0XHRcdHNlY3Rpb25OYW1lLFxuXHRcdFx0XHRcdFx0dGFyZ2V0UGFnZU5hbWU6IHNlY3Rpb25UYXJnZXROYW1lLFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0Q29uc3RhbnRzLnNraW4gPT09ICdtaW5lcnZhJ1xuXHRcdFx0XHRcdD8gJCh0aGlzKS5hcHBlbmQoX3NlY3Rpb25CdG4pXG5cdFx0XHRcdFx0OiAkKHRoaXMpLmZpbmQoJy5tdy1lZGl0c2VjdGlvbi1icmFja2V0JykubGFzdCgpLmJlZm9yZShfc2VjdGlvbkJ0bik7XG5cdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0TG9nLmVycm9yKCdmYWlsX3RvX2luaXRfcXVpY2tlZGl0Jyk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICog5o+S5YWl5Lu75oSP6ZO+5o6l57yW6L6R5YWl5Y+jXG5cdCAqXG5cdCAqIEBwYXJhbSB7Kn0gb25DbGlja1xuXHQgKi9cblx0aW5zZXJ0TGlua0VkaXRFbnRyaWVzKG9uQ2xpY2sgPSAoKSA9PiB7fSkge1xuXHRcdCQoJyNtdy1jb250ZW50LXRleHQgYS5leHRlcm5hbCcpLmVhY2goZnVuY3Rpb24gKGkpIHtcblx0XHRcdGNvbnN0IHVybCA9ICQodGhpcykuYXR0cignaHJlZicpO1xuXHRcdFx0Y29uc3QgcGFyYW1zID0gcGFyc2VRdWVyeSh1cmwpO1xuXHRcdFx0aWYgKHBhcmFtcy5hY3Rpb24gPT09ICdlZGl0JyAmJiBwYXJhbXMudGl0bGUgIT09IHVuZGVmaW5lZCAmJiBwYXJhbXMuc2VjdGlvbiAhPT0gJ25ldycpIHtcblx0XHRcdFx0JCh0aGlzKS5hZnRlcihcblx0XHRcdFx0XHQkKCc8YT4nKVxuXHRcdFx0XHRcdFx0LmF0dHIoe1xuXHRcdFx0XHRcdFx0XHRocmVmOiAnamF2YXNjcmlwdDp2b2lkKDApJyxcblx0XHRcdFx0XHRcdFx0Y2xhc3M6ICdXaWtpcGx1cy1FZGl0LUV2ZXJ5V2hlcmVCdG4nLFxuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdC50ZXh0KGAoJHtpMThuLnRyYW5zbGF0ZSgncXVpY2tlZGl0X3NlY3Rpb25idG4nKX0pYClcblx0XHRcdFx0XHRcdC5vbignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2soe1xuXHRcdFx0XHRcdFx0XHRcdHRhcmdldFBhZ2VOYW1lOiBwYXJhbXMudGl0bGUsXG5cdFx0XHRcdFx0XHRcdFx0c2VjdGlvbk51bWJlcjogcGFyYW1zLnNlY3Rpb24gPz8gLTEsXG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdHNob3dRdWlja0VkaXRQYW5lbCh7XG5cdFx0dGl0bGUgPSAnJyxcblx0XHRjb250ZW50ID0gJycsXG5cdFx0c3VtbWFyeSA9ICcnLFxuXHRcdG9uQmFjayA9ICgpID0+IHt9LFxuXHRcdG9uUGFyc2UgPSAoKSA9PiB7fSxcblx0XHRvbkVkaXQgPSAoKSA9PiB7fSxcblx0XHRlc2NFeGl0ID0gZmFsc2UsXG5cdH0pIHtcblx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHR0aGlzLnNjcm9sbFRvcCA9ICQoZG9jdW1lbnQpLnNjcm9sbFRvcCgpO1xuXHRcdGlmICh0aGlzLnF1aWNrRWRpdFBhbmVsVmlzaWJsZSkge1xuXHRcdFx0dGhpcy5oaWRlUXVpY2tFZGl0UGFuZWwoKTtcblx0XHR9XG5cdFx0dGhpcy5xdWlja0VkaXRQYW5lbFZpc2libGUgPSB0cnVlO1xuXHRcdC8vIOmYsuatouaJi+a7keWFs+mXremhtemdolxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFxuXHRcdFx0J2Nsb3NlJyxcblx0XHRcdCh3aW5kb3cub25iZWZvcmV1bmxvYWQgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHJldHVybiBgJHtpMThuLnRyYW5zbGF0ZSgnb25jbG9zZV9jb25maXJtJyl9YDtcblx0XHRcdH0pXG5cdFx0KTtcblx0XHRjb25zdCBpc05ld1BhZ2UgPSAkKCcubm9hcnRpY2xldGV4dCcpLmxlbmd0aCA+IDA7XG5cdFx0Ly8gRE9NIOWumuS5ieW8gOWni1xuXHRcdGNvbnN0IGJhY2tCdG4gPSAkKCc8c3Bhbj4nKVxuXHRcdFx0LmF0dHIoJ2lkJywgJ1dpa2lwbHVzLVF1aWNrZWRpdC1CYWNrJylcblx0XHRcdC5hZGRDbGFzcygnV2lraXBsdXMtQnRuJylcblx0XHRcdC50ZXh0KGAke2kxOG4udHJhbnNsYXRlKCdiYWNrJyl9YCk7IC8vIOi/lOWbnuaMiemSrlxuXHRcdGNvbnN0IGp1bXBCdG4gPSAkKCc8c3Bhbj4nKVxuXHRcdFx0LmF0dHIoJ2lkJywgJ1dpa2lwbHVzLVF1aWNrZWRpdC1KdW1wJylcblx0XHRcdC5hZGRDbGFzcygnV2lraXBsdXMtQnRuJylcblx0XHRcdC5hcHBlbmQoXG5cdFx0XHRcdCQoJzxhPicpXG5cdFx0XHRcdFx0LmF0dHIoJ2hyZWYnLCAnI1dpa2lwbHVzLVF1aWNrZWRpdCcpXG5cdFx0XHRcdFx0LnRleHQoYCR7aTE4bi50cmFuc2xhdGUoJ2dvdG9fZWRpdGJveCcpfWApXG5cdFx0XHQpOyAvLyDliLDnvJbovpHmoYZcblx0XHRjb25zdCBpbnB1dEJveCA9ICQoJzx0ZXh0YXJlYT4nKS5hdHRyKCdpZCcsICdXaWtpcGx1cy1RdWlja2VkaXQnKTsgLy8g5Li757yW6L6R5qGGXG5cdFx0Y29uc3QgcHJldmlld0JveCA9ICQoJzxkaXY+JykuYXR0cignaWQnLCAnV2lraXBsdXMtUXVpY2tlZGl0LVByZXZpZXctT3V0cHV0Jyk7IC8vIOmihOiniOi+k+WHulxuXHRcdGNvbnN0IHN1bW1hcnlCb3ggPSAkKCc8aW5wdXQ+Jylcblx0XHRcdC5hdHRyKCdpZCcsICdXaWtpcGx1cy1RdWlja2VkaXQtU3VtbWFyeS1JbnB1dCcpXG5cdFx0XHQuYXR0cigncGxhY2Vob2xkZXInLCBgJHtpMThuLnRyYW5zbGF0ZSgnc3VtbWFyeV9wbGFjZWhvbGQnKX1gKTsgLy8g57yW6L6R5pGY6KaB6L6T5YWlXG5cdFx0Y29uc3QgZWRpdFN1Ym1pdEJ0biA9ICQoJzxidXR0b24+Jylcblx0XHRcdC5hdHRyKCdpZCcsICdXaWtpcGx1cy1RdWlja2VkaXQtU3VibWl0Jylcblx0XHRcdC50ZXh0KGAke2kxOG4udHJhbnNsYXRlKGlzTmV3UGFnZSA/ICdwdWJsaXNoX3BhZ2UnIDogJ3B1Ymxpc2hfY2hhbmdlJyl9KEN0cmwrUylgKTsgLy8g5o+Q5Lqk5oyJ6ZKuXG5cdFx0Y29uc3QgcHJldmlld1N1Ym1pdEJ0biA9ICQoJzxidXR0b24+Jylcblx0XHRcdC5hdHRyKCdpZCcsICdXaWtpcGx1cy1RdWlja2VkaXQtUHJldmlldy1TdWJtaXQnKVxuXHRcdFx0LnRleHQoYCR7aTE4bi50cmFuc2xhdGUoJ3ByZXZpZXcnKX1gKTsgLy8g6aKE6KeI5oyJ6ZKuXG5cdFx0Y29uc3QgaXNNaW5vckVkaXQgPSAkKCc8ZGl2PicpXG5cdFx0XHQuYXBwZW5kKCQoJzxpbnB1dD4nKS5hdHRyKHt0eXBlOiAnY2hlY2tib3gnLCBpZDogJ1dpa2lwbHVzLVF1aWNrZWRpdC1NaW5vckVkaXQnfSkpXG5cdFx0XHQuYXBwZW5kKFxuXHRcdFx0XHQkKCc8bGFiZWw+Jylcblx0XHRcdFx0XHQuYXR0cignZm9yJywgJ1dpa2lwbHVzLVF1aWNrZWRpdC1NaW5vckVkaXQnKVxuXHRcdFx0XHRcdC50ZXh0KGAke2kxOG4udHJhbnNsYXRlKCdtYXJrX21pbm9yZWRpdCcpfShDdHJsK1NoaWZ0K1MpYClcblx0XHRcdClcblx0XHRcdC5jc3Moe21hcmdpbjogJzVweCA1cHggNXB4IC0zcHgnLCBkaXNwbGF5OiAnaW5saW5lJ30pO1xuXHRcdC8vIERPTeWumuS5iee7k+adn1xuXHRcdGNvbnN0IGVkaXRCb2R5ID0gJCgnPGRpdj4nKS5hcHBlbmQoXG5cdFx0XHRiYWNrQnRuLFxuXHRcdFx0anVtcEJ0bixcblx0XHRcdHByZXZpZXdCb3gsXG5cdFx0XHRpbnB1dEJveCxcblx0XHRcdHN1bW1hcnlCb3gsXG5cdFx0XHQkKCc8YnI+JyksXG5cdFx0XHRpc01pbm9yRWRpdCxcblx0XHRcdGVkaXRTdWJtaXRCdG4sXG5cdFx0XHRwcmV2aWV3U3VibWl0QnRuXG5cdFx0KTtcblx0XHR0aGlzLmNyZWF0ZURpYWxvZ0JveCh0aXRsZSwgZWRpdEJvZHksIDEwMDAsICgpID0+IHtcblx0XHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQnKS52YWwoY29udGVudCk7XG5cdFx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LVN1bW1hcnktSW5wdXQnKS52YWwoc3VtbWFyeSk7XG5cdFx0fSk7XG5cdFx0Ly8gQmFja1xuXHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtQmFjaycpLm9uKCdjbGljaycsIG9uQmFjayk7XG5cdFx0Ly8gUHJldmlld1xuXHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtUHJldmlldy1TdWJtaXQnKS5vbignY2xpY2snLCBhc3luYyBmdW5jdGlvbiAoKSB7XG5cdFx0XHRjb25zdCBwcmVsb2FkQmFubmVyID0gJCgnPGRpdj4nKVxuXHRcdFx0XHQuYWRkQ2xhc3MoJ1dpa2lwbHVzLUJhbm5lcicpXG5cdFx0XHRcdC50ZXh0KGAke2kxOG4udHJhbnNsYXRlKCdsb2FkaW5nX3ByZXZpZXcnKX1gKTtcblx0XHRcdGNvbnN0IHdpa2lUZXh0ID0gJCgnI1dpa2lwbHVzLVF1aWNrZWRpdCcpLnZhbCgpO1xuXHRcdFx0JCh0aGlzKS5hdHRyKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xuXHRcdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1QcmV2aWV3LU91dHB1dCcpLmZhZGVPdXQoMTAwLCAoKSA9PiB7XG5cdFx0XHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtUHJldmlldy1PdXRwdXQnKS5odG1sKCcnKS5hcHBlbmQocHJlbG9hZEJhbm5lcik7XG5cdFx0XHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtUHJldmlldy1PdXRwdXQnKS5mYWRlSW4oMTAwKTtcblx0XHRcdH0pO1xuXHRcdFx0JCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe3Njcm9sbFRvcDogc2VsZi5zY3JvbGxUb3B9LCAyMDApOyAvL+i/lOWbnumhtumDqFxuXHRcdFx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgb25QYXJzZSh3aWtpVGV4dCk7XG5cdFx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LVByZXZpZXctT3V0cHV0JykuZmFkZU91dCgnMTAwJywgKCkgPT4ge1xuXHRcdFx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LVByZXZpZXctT3V0cHV0JykuaHRtbChgPGhyPjxkaXYgY2xhc3M9XCJtdy1ib2R5LWNvbnRlbnRcIj4ke3Jlc3VsdH08L2Rpdj48aHI+YCk7XG5cdFx0XHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtUHJldmlldy1PdXRwdXQnKS5mYWRlSW4oJzEwMCcpO1xuXHRcdFx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LVByZXZpZXctU3VibWl0JykucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0XHQvLyBFZGl0XG5cdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1TdWJtaXQnKS5vbignY2xpY2snLCBhc3luYyAoKSA9PiB7XG5cdFx0XHRjb25zdCB0aW1lciA9IERhdGUubm93KCk7XG5cdFx0XHRjb25zdCBlZGl0QmFubmVyID0gJCgnPGRpdj4nKVxuXHRcdFx0XHQuYWRkQ2xhc3MoJ1dpa2lwbHVzLUJhbm5lcicpXG5cdFx0XHRcdC50ZXh0KGAke2kxOG4udHJhbnNsYXRlKCdzdWJtaXR0aW5nX2VkaXQnKX1gKTtcblx0XHRcdGNvbnN0IHBheWxvYWQgPSB7XG5cdFx0XHRcdHN1bW1hcnk6ICQoJyNXaWtpcGx1cy1RdWlja2VkaXQtU3VtbWFyeS1JbnB1dCcpLnZhbCgpLFxuXHRcdFx0XHRjb250ZW50OiAkKCcjV2lraXBsdXMtUXVpY2tlZGl0JykudmFsKCksXG5cdFx0XHRcdGlzTWlub3JFZGl0OiAkKCcjV2lraXBsdXMtUXVpY2tlZGl0LU1pbm9yRWRpdCcpLmlzKCc6Y2hlY2tlZCcpLFxuXHRcdFx0fTtcblx0XHRcdC8vIOWHhuWkh+e8lui+kSDnpoHnlKjmjInpkq4g5omn6KGM5Yqo55S7XG5cdFx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LVN1Ym1pdCwjV2lraXBsdXMtUXVpY2tlZGl0LCNXaWtpcGx1cy1RdWlja2VkaXQtUHJldmlldy1TdWJtaXQnKS5hdHRyKFxuXHRcdFx0XHQnZGlzYWJsZWQnLFxuXHRcdFx0XHQnZGlzYWJsZWQnXG5cdFx0XHQpO1xuXHRcdFx0JCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe3Njcm9sbFRvcDogc2VsZi5zY3JvbGxUb3B9LCAyMDApO1xuXHRcdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1QcmV2aWV3LU91dHB1dCcpLmZhZGVPdXQoMTAwLCAoKSA9PiB7XG5cdFx0XHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtUHJldmlldy1PdXRwdXQnKS5odG1sKCcnKS5hcHBlbmQoZWRpdEJhbm5lcik7XG5cdFx0XHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtUHJldmlldy1PdXRwdXQnKS5mYWRlSW4oMTAwKTtcblx0XHRcdH0pO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0YXdhaXQgb25FZGl0KHBheWxvYWQpO1xuXHRcdFx0XHRjb25zdCB1c2VUaW1lID0gRGF0ZS5ub3coKSAtIHRpbWVyO1xuXHRcdFx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LVByZXZpZXctT3V0cHV0Jylcblx0XHRcdFx0XHQuZmluZCgnLldpa2lwbHVzLUJhbm5lcicpXG5cdFx0XHRcdFx0LmNzcygnYmFja2dyb3VuZCcsICdyZ2JhKDYsIDIzOSwgOTIsIDAuNDQpJyk7XG5cdFx0XHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtUHJldmlldy1PdXRwdXQnKVxuXHRcdFx0XHRcdC5maW5kKCcuV2lraXBsdXMtQmFubmVyJylcblx0XHRcdFx0XHQudGV4dChgJHtpMThuLnRyYW5zbGF0ZSgnZWRpdF9zdWNjZXNzJywgW3VzZVRpbWUudG9TdHJpbmcoKV0pfWApO1xuXHRcdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xvc2UnLCAod2luZG93Lm9uYmVmb3JldW5sb2FkID0gdW5kZWZpbmVkKSk7IC8v5Y+W5raI6aG16Z2i5YWz6Zet56Gu6K6kXG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdGxvY2F0aW9uLnJlbG9hZCgpO1xuXHRcdFx0XHR9LCA1MDApO1xuXHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xuXHRcdFx0XHQkKCcuV2lraXBsdXMtQmFubmVyJykuY3NzKCdiYWNrZ3JvdW5kJywgJ3JnYmEoMjE4LCAxNDIsIDE2NywgMC42NSknKTtcblx0XHRcdFx0JCgnLldpa2lwbHVzLUJhbm5lcicpLmh0bWwoZXJyb3IubWVzc2FnZSk7XG5cdFx0XHR9IGZpbmFsbHkge1xuXHRcdFx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LVN1Ym1pdCwjV2lraXBsdXMtUXVpY2tlZGl0LCNXaWtpcGx1cy1RdWlja2VkaXQtUHJldmlldy1TdWJtaXQnKS5wcm9wKFxuXHRcdFx0XHRcdCdkaXNhYmxlZCcsXG5cdFx0XHRcdFx0ZmFsc2Vcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHQvL0N0cmwrU+aPkOS6pCBDdHJsK1NoaWZ0K1PlsI/nvJbovpFcblx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LCNXaWtpcGx1cy1RdWlja2VkaXQtU3VtbWFyeS1JbnB1dCwjV2lraXBsdXMtUXVpY2tlZGl0LU1pbm9yRWRpdCcpLm9uKCdrZXlkb3duJywgKGUpID0+IHtcblx0XHRcdGlmIChlLmN0cmxLZXkgJiYgZS53aGljaCA9PT0gODMpIHtcblx0XHRcdFx0aWYgKGUuc2hpZnRLZXkpIHtcblx0XHRcdFx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LU1pbm9yRWRpdCcpLnRyaWdnZXIoJ2NsaWNrJyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1TdWJtaXQnKS50cmlnZ2VyKCdjbGljaycpO1xuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0Ly9Fc2PpgIDlh7pcblx0XHRpZiAoZXNjRXhpdCkge1xuXHRcdFx0JChkb2N1bWVudCkub24oJ2tleWRvd24nLCAoZSkgPT4ge1xuXHRcdFx0XHRpZiAoZS53aGljaCA9PT0gMjcpIHtcblx0XHRcdFx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LUJhY2snKS50cmlnZ2VyKCdjbGljaycpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHRoaWRlUXVpY2tFZGl0UGFuZWwoKSB7XG5cdFx0dGhpcy5xdWlja0VkaXRQYW5lbFZpc2libGUgPSBmYWxzZTtcblx0XHQkKCcuV2lraXBsdXMtSW50ZXJCb3gnKS5mYWRlT3V0KCdmYXN0JywgZnVuY3Rpb24gKCkge1xuXHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2Nsb3NlJywgKHdpbmRvdy5vbmJlZm9yZXVubG9hZCA9IHVuZGVmaW5lZCkpOyAvL+WPlua2iOmhtemdouWFs+mXreehruiupFxuXHRcdFx0JCh0aGlzKS5yZW1vdmUoKTtcblx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiDmmL7npLrlv6vpgJ/ph43lrprlkJHlvLnnqpdcblx0ICpcblx0ICogQHBhcmFtIHJvb3QwXG5cdCAqIEBwYXJhbSByb290MC5vbkVkaXRcblx0ICogQHBhcmFtIHJvb3QwLm9uU3VjY2Vzc1xuXHQgKi9cblx0c2hvd1NpbXBsZVJlZGlyZWN0UGFuZWwoe29uRWRpdCA9ICgpID0+IHt9LCBvblN1Y2Nlc3MgPSAoKSA9PiB7fX0gPSB7fSkge1xuXHRcdGNvbnN0IGlucHV0ID0gJCgnPGlucHV0PicpLmFkZENsYXNzKCdXaWtpcGx1cy1JbnRlckJveC1JbnB1dCcpLmF0dHIoJ2lkJywgJ1dpa2lwbHVzLVNSLVRpdGxlJyk7XG5cdFx0Ly8gV29ya2Fyb3VuZCBhcyB0aGlzIGZ1bmN0aW9uIGlzIGRvd25zdHJlYW0gb25seVxuXHRcdGNvbnN0IHRlbXBsYXRlVGl0bGUgPSAkKCc8cD4nKS50ZXh0KCflnKjkuIvmlrnovpPlhaXpmYTliqDmqKHmnb/vvIjlj6/pgInvvIzlj6rlr7l3aWtpdGV4dOWGheWuueaooeWei+eUn+aViO+8iScpO1xuXHRcdGNvbnN0IHRlbXBsYXRlID0gJCgnPGlucHV0PicpLmFkZENsYXNzKCdXaWtpcGx1cy1JbnRlckJveC1JbnB1dCcpLmF0dHIoJ2lkJywgJ1dpa2lwbHVzLVNSLVRlbXBsYXRlJyk7XG5cdFx0Y29uc3Qgc3VtbWFyeUlucHV0VGl0bGUgPSAkKCc8cD4nKS50ZXh0KGkxOG4udHJhbnNsYXRlKCdyZWRpcmVjdF9zdW1tYXJ5X2Rlc2MnKSk7XG5cdFx0Y29uc3Qgc3VtbWFyeUlucHV0ID0gJCgnPGlucHV0PicpLmFkZENsYXNzKCdXaWtpcGx1cy1JbnRlckJveC1JbnB1dCcpLmF0dHIoJ2lkJywgJ1dpa2lwbHVzLVNSLVN1bW1hcnknKTtcblx0XHRjb25zdCBhcHBseUJ0biA9ICQoJzxkaXY+Jylcblx0XHRcdC5hZGRDbGFzcygnV2lraXBsdXMtSW50ZXJCb3gtQnRuJylcblx0XHRcdC5hdHRyKCdpZCcsICdXaWtpcGx1cy1TUi1BcHBseScpXG5cdFx0XHQudGV4dChpMThuLnRyYW5zbGF0ZSgnc3VibWl0JykpO1xuXHRcdGNvbnN0IGNhbmNlbEJ0biA9ICQoJzxkaXY+Jylcblx0XHRcdC5hZGRDbGFzcygnV2lraXBsdXMtSW50ZXJCb3gtQnRuJylcblx0XHRcdC5hdHRyKCdpZCcsICdXaWtpcGx1cy1TUi1DYW5jZWwnKVxuXHRcdFx0LnRleHQoaTE4bi50cmFuc2xhdGUoJ2NhbmNlbCcpKTtcblx0XHRjb25zdCBjb250aW51ZUJ0biA9ICQoJzxkaXY+Jylcblx0XHRcdC5hZGRDbGFzcygnV2lraXBsdXMtSW50ZXJCb3gtQnRuJylcblx0XHRcdC5hdHRyKCdpZCcsICdXaWtpcGx1cy1TUi1Db250aW51ZScpXG5cdFx0XHQudGV4dChpMThuLnRyYW5zbGF0ZSgnY29udGludWUnKSk7XG5cdFx0Y29uc3QgY29udGVudCA9ICQoJzxkaXY+Jylcblx0XHRcdC5hcHBlbmQoaW5wdXQpXG5cdFx0XHQuYXBwZW5kKHN1bW1hcnlJbnB1dFRpdGxlKVxuXHRcdFx0LmFwcGVuZChzdW1tYXJ5SW5wdXQpXG5cdFx0XHQuYXBwZW5kKCQoJzxocj4nKSlcblx0XHRcdC5hcHBlbmQoYXBwbHlCdG4pXG5cdFx0XHQuYXBwZW5kKGNhbmNlbEJ0bik7IC8v5ou85o6lXG5cdFx0Y29uc3QgZGlhbG9nID0gdGhpcy5jcmVhdGVEaWFsb2dCb3goaTE4bi50cmFuc2xhdGUoJ3JlZGlyZWN0X2Rlc2MnKSwgY29udGVudCwgNjAwKTtcblx0XHRhcHBseUJ0bi5vbignY2xpY2snLCBhc3luYyAoKSA9PiB7XG5cdFx0XHRjb25zdCB0aXRsZSA9ICQoJyNXaWtpcGx1cy1TUi1UaXRsZScpLnZhbCgpO1xuXHRcdFx0Y29uc3QgdGVtcGxhdGUgPSAkKCcjV2lraXBsdXMtU1ItVGVtcGxhdGUnKS52YWwoKTtcblx0XHRcdGNvbnN0IHN1bW1hcnkgPSAkKCcjV2lraXBsdXMtU1ItU3VtbWFyeScpLnZhbCgpO1xuXHRcdFx0JCgnLldpa2lwbHVzLUludGVyQm94LUNvbnRlbnQnKS5odG1sKFxuXHRcdFx0XHRgPGRpdiBjbGFzcz1cIldpa2lwbHVzLUJhbm5lclwiPiR7aTE4bi50cmFuc2xhdGUoJ3N1Ym1pdHRpbmdfZWRpdCcpfTwvZGl2PmBcblx0XHRcdCk7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRhd2FpdCBvbkVkaXQoe1xuXHRcdFx0XHRcdHRpdGxlLFxuXHRcdFx0XHRcdHN1bW1hcnksXG5cdFx0XHRcdFx0Zm9yY2VPdmVyd3JpdGU6IGZhbHNlLFxuXHRcdFx0XHR9KTtcblx0XHRcdFx0JCgnLldpa2lwbHVzLUJhbm5lcicpLnRleHQoaTE4bi50cmFuc2xhdGUoJ3JlZGlyZWN0X3NhdmVkJykpO1xuXHRcdFx0XHR0aGlzLmhpZGVTaW1wbGVSZWRpcmVjdFBhbmVsKGRpYWxvZyk7XG5cdFx0XHRcdG9uU3VjY2Vzcyh7dGl0bGV9KTtcblx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdCQoJy5XaWtpcGx1cy1CYW5uZXInKS5jc3MoJ2JhY2tncm91bmQnLCAncmdiYSgyMTgsIDE0MiwgMTY3LCAwLjY1KScpO1xuXHRcdFx0XHQkKCcuV2lraXBsdXMtQmFubmVyJykudGV4dChlcnJvci5tZXNzYWdlKTtcblx0XHRcdFx0aWYgKGVycm9yLmNvZGUgPT09ICdhcnRpY2xlZXhpc3RzJykge1xuXHRcdFx0XHRcdCQoJy5XaWtpcGx1cy1JbnRlckJveC1Db250ZW50JykuYXBwZW5kKCQoJzxocj4nKSkuYXBwZW5kKGNvbnRpbnVlQnRuKS5hcHBlbmQoY2FuY2VsQnRuKTtcblx0XHRcdFx0XHRjYW5jZWxCdG4ub24oJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0XHRcdFx0dGhpcy5oaWRlU2ltcGxlUmVkaXJlY3RQYW5lbChkaWFsb2cpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdGNvbnRpbnVlQnRuLm9uKCdjbGljaycsIGFzeW5jICgpID0+IHtcblx0XHRcdFx0XHRcdCQoJy5XaWtpcGx1cy1JbnRlckJveC1Db250ZW50JykuaHRtbChcblx0XHRcdFx0XHRcdFx0YDxkaXYgY2xhc3M9XCJXaWtpcGx1cy1CYW5uZXJcIj4ke2kxOG4udHJhbnNsYXRlKCdzdWJtaXR0aW5nX2VkaXQnKX08L2Rpdj5gXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdFx0YXdhaXQgb25FZGl0KHtcblx0XHRcdFx0XHRcdFx0XHR0aXRsZSxcblx0XHRcdFx0XHRcdFx0XHRzdW1tYXJ5LFxuXHRcdFx0XHRcdFx0XHRcdGZvcmNlT3ZlcndyaXRlOiB0cnVlLFxuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0JCgnLldpa2lwbHVzLUJhbm5lcicpLnRleHQoaTE4bi50cmFuc2xhdGUoJ3JlZGlyZWN0X3NhdmVkJykpO1xuXHRcdFx0XHRcdFx0XHR0aGlzLmhpZGVTaW1wbGVSZWRpcmVjdFBhbmVsKGRpYWxvZyk7XG5cdFx0XHRcdFx0XHRcdG9uU3VjY2Vzcyh7dGl0bGV9KTtcblx0XHRcdFx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdFx0XHRcdCQoJy5XaWtpcGx1cy1CYW5uZXInKS5jc3MoJ2JhY2tncm91bmQnLCAncmdiYSgyMTgsIDE0MiwgMTY3LCAwLjY1KScpO1xuXHRcdFx0XHRcdFx0XHQkKCcuV2lraXBsdXMtQmFubmVyJykudGV4dChlcnJvci5tZXNzYWdlKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdGNhbmNlbEJ0bi5vbignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHR0aGlzLmhpZGVTaW1wbGVSZWRpcmVjdFBhbmVsKGRpYWxvZyk7XG5cdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICog6ZqQ6JeP5b+r6YCf6YeN5a6a5ZCR5by556qXXG5cdCAqXG5cdCAqIEBwYXJhbSB7Kn0gZGlhbG9nXG5cdCAqL1xuXHRoaWRlU2ltcGxlUmVkaXJlY3RQYW5lbChkaWFsb2cgPSAkKCdib2R5JykpIHtcblx0XHRkaWFsb2cuZmluZCgnLldpa2lwbHVzLUludGVyQm94LUNsb3NlJykudHJpZ2dlcignY2xpY2snKTtcblx0fVxuXG5cdHNob3dTZXR0aW5nc1BhbmVsKHtvblN1Ym1pdCA9ICgpID0+IHt9fSA9IHt9KSB7XG5cdFx0Y29uc3QgaW5wdXQgPSAkKCc8dGV4dGFyZWE+JykuYXR0cignaWQnLCAnV2lraXBsdXMtU2V0dGluZy1JbnB1dCcpLmF0dHIoJ3Jvd3MnLCAnMTAnKTtcblx0XHRjb25zdCBhcHBseUJ0biA9ICQoJzxkaXY+Jylcblx0XHRcdC5hZGRDbGFzcygnV2lraXBsdXMtSW50ZXJCb3gtQnRuJylcblx0XHRcdC5hdHRyKCdpZCcsICdXaWtpcGx1cy1TZXR0aW5nLUFwcGx5Jylcblx0XHRcdC50ZXh0KGkxOG4udHJhbnNsYXRlKCdzdWJtaXQnKSk7XG5cdFx0Y29uc3QgY2FuY2VsQnRuID0gJCgnPGRpdj4nKVxuXHRcdFx0LmFkZENsYXNzKCdXaWtpcGx1cy1JbnRlckJveC1CdG4nKVxuXHRcdFx0LmF0dHIoJ2lkJywgJ1dpa2lwbHVzLVNldHRpbmctQ2FuY2VsJylcblx0XHRcdC50ZXh0KGkxOG4udHJhbnNsYXRlKCdjYW5jZWwnKSk7XG5cdFx0Y29uc3QgY29udGVudCA9ICQoJzxkaXY+JykuYXBwZW5kKGlucHV0KS5hcHBlbmQoJCgnPGhyPicpKS5hcHBlbmQoYXBwbHlCdG4pLmFwcGVuZChjYW5jZWxCdG4pOyAvL+aLvOaOpVxuXG5cdFx0Y29uc3QgZGlhbG9nID0gdGhpcy5jcmVhdGVEaWFsb2dCb3goaTE4bi50cmFuc2xhdGUoJ3dpa2lwbHVzX3NldHRpbmdzX2Rlc2MnKSwgY29udGVudCwgNjAwLCAoKSA9PiB7XG5cdFx0XHRpZiAobG9jYWxTdG9yYWdlLldpa2lwbHVzX1NldHRpbmdzKSB7XG5cdFx0XHRcdCQoJyNXaWtpcGx1cy1TZXR0aW5nLUlucHV0JykudmFsKGxvY2FsU3RvcmFnZS5XaWtpcGx1c19TZXR0aW5ncyk7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Y29uc3Qgc2V0dGluZ3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5XaWtpcGx1c19TZXR0aW5ncyk7XG5cdFx0XHRcdFx0JCgnI1dpa2lwbHVzLVNldHRpbmctSW5wdXQnKS52YWwoSlNPTi5zdHJpbmdpZnkoc2V0dGluZ3MsIG51bGwsIDIpKTtcblx0XHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdFx0Ly8gaWdub3JlXG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdCQoJyNXaWtpcGx1cy1TZXR0aW5nLUlucHV0JykuYXR0cigncGxhY2Vob2xkZXInLCBpMThuLnRyYW5zbGF0ZSgnd2lraXBsdXNfc2V0dGluZ3NfcGxhY2Vob2xkZXInKSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0YXBwbHlCdG4ub24oJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuXHRcdFx0Y29uc3Qgc2F2ZWRCYW5uZXIgPSAkKCc8ZGl2PicpLmFkZENsYXNzKCdXaWtpcGx1cy1CYW5uZXInKS50ZXh0KGkxOG4udHJhbnNsYXRlKCd3aWtpcGx1c19zZXR0aW5nc19zYXZlZCcpKTtcblx0XHRcdGNvbnN0IHNldHRpbmdzID0gJCgnI1dpa2lwbHVzLVNldHRpbmctSW5wdXQnKS52YWwoKTtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdG9uU3VibWl0KHtzZXR0aW5nc30pO1xuXHRcdFx0XHQkKCcuV2lraXBsdXMtSW50ZXJCb3gtQ29udGVudCcpLmh0bWwoJycpLmFwcGVuZChzYXZlZEJhbm5lcik7XG5cdFx0XHRcdGF3YWl0IHNsZWVwKDE1MDApO1xuXHRcdFx0XHR0aGlzLmhpZGVTZXR0aW5nc1BhbmVsKGRpYWxvZyk7XG5cdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0Tm90aWZpY2F0aW9uLmVycm9yKGkxOG4udHJhbnNsYXRlKCd3aWtpcGx1c19zZXR0aW5nc19ncmFtbWFyX2Vycm9yJykpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdGNhbmNlbEJ0bi5vbignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHR0aGlzLmhpZGVTZXR0aW5nc1BhbmVsKGRpYWxvZyk7XG5cdFx0fSk7XG5cdH1cblxuXHRoaWRlU2V0dGluZ3NQYW5lbChkaWFsb2cgPSAkKCdib2R5JykpIHtcblx0XHRkaWFsb2cuZmluZCgnLldpa2lwbHVzLUludGVyQm94LUNsb3NlJykudHJpZ2dlcignY2xpY2snKTtcblx0fVxuXG5cdGJpbmRQcmVsb2FkRXZlbnRzKG9uUHJlbG9hZCkge1xuXHRcdCQoJyN0b2MnKVxuXHRcdFx0LmNoaWxkcmVuKCd1bCcpXG5cdFx0XHQuZmluZCgnYScpXG5cdFx0XHQuZWFjaChmdW5jdGlvbiAoaSkge1xuXHRcdFx0XHQkKHRoaXMpLm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0JCh0aGlzKS5vZmYoJ21vdXNlb3ZlcicpO1xuXHRcdFx0XHRcdG9uUHJlbG9hZCh7XG5cdFx0XHRcdFx0XHRzZWN0aW9uTnVtYmVyOiBpICsgMSxcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgVUkoKTtcbiIsICIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4vLyBAdHMtbm9jaGVja1xuY2xhc3MgU2V0dGluZ3Mge1xuXHRnZXRTZXR0aW5nKGtleSwgb2JqZWN0ID0ge30pIHtcblx0XHRjb25zdCB3ID0gb2JqZWN0O1xuXHRcdGxldCBzZXR0aW5ncztcblx0XHR0cnkge1xuXHRcdFx0c2V0dGluZ3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZVsnV2lraXBsdXNfU2V0dGluZ3MnXSk7XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCBjdXN0b21TZXR0aW5nRnVuY3Rpb24gPSBuZXcgRnVuY3Rpb24oYHJldHVybiAke3NldHRpbmdzW2tleV19YCk7XG5cdFx0XHRpZiAodHlwZW9mIGN1c3RvbVNldHRpbmdGdW5jdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdGlmIChjdXN0b21TZXR0aW5nRnVuY3Rpb24oKSh3KSA9PT0gdHJ1ZSkge1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gY3VzdG9tU2V0dGluZ0Z1bmN0aW9uKCkodykgfHwgc2V0dGluZ3Nba2V5XTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRcdHJldHVybiBzZXR0aW5nc1trZXldO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gc2V0dGluZ3Nba2V5XTtcblx0XHRcdH1cblx0XHR9IGNhdGNoIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGxldCByZXN1bHQgPSBzZXR0aW5nc1trZXldO1xuXHRcdFx0XHRmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhvYmplY3QpKSB7XG5cdFx0XHRcdFx0cmVzdWx0ID0gcmVzdWx0LnJlcGxhY2UoYFxcJHske2tleX19YCwgb2JqZWN0W2tleV0pO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0XHR9IGNhdGNoIHt9XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBTZXR0aW5ncygpO1xuIiwgIi8qISBXaWtpcGx1cyAtIDQuMC4xMSB8IEVyaWRhbnVzIFNvcmEgKOWmueepuumFsSkgfCBDQy1CWS1TQS00LjAgPGh0dHBzOi8vcXdiay5jYy9IOkNDLUJZLVNBLTQuMD4gKi9cbiNXaWtpcGx1cy1RdWlja2VkaXQge1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogNTAwcHg7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbn1cbiNXaWtpcGx1cy1RdWlja2VkaXQtU3VtbWFyeS1JbnB1dCB7XG4gIHdpZHRoOiA1MCU7XG59XG4uc2tpbi12ZWN0b3IgI1dpa2lwbHVzLVF1aWNrZWRpdC1TdW1tYXJ5LUlucHV0IHtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuI1dpa2lwbHVzLVF1aWNrZWRpdC1QcmV2aWV3LVN1Ym1pdCxcbiNXaWtpcGx1cy1RdWlja2VkaXQtU3VibWl0IHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBwYWRkaW5nOiByZXZlcnQ7XG59XG4jV2lraXBsdXMtUXVpY2tlZGl0LVByZXZpZXctT3V0cHV0IHtcbiAgY2xlYXI6IGJvdGg7XG4gIG1hcmdpbjogNXB4IDA7XG59XG4uV2lraXBsdXMtQnRuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luOiAzcHggNXB4O1xuICBwYWRkaW5nOiAzcHggMWVtO1xuICB3aWR0aDogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCAxcHggMnB4ICNhYWE7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLldpa2lwbHVzLUJ0biBhIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogIzAwMDtcbiAgLXdlYmtpdC10ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5XaWtpcGx1cy1JbnRlckJveCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMCU7XG4gIHotaW5kZXg6IDIwMDtcbiAgcGFkZGluZzogMjBweCAxMHB4O1xuICB3aWR0aDogNjAwcHg7XG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE2MSwgMTU0LCAyMjAsIDAuNDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRmOWY3O1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xufVxuLldpa2lwbHVzLUludGVyQm94LUhlYWRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAwO1xuICB0b3A6IC04cHg7XG4gIG1hcmdpbjogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNmNmO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgbGluZS1oZWlnaHQ6IDJyZW07XG4gIGN1cnNvcjogbW92ZTtcbn1cbi5XaWtpcGx1cy1JbnRlckJveC1JbnB1dCB7XG4gIG1hcmdpbjogMjBweDtcbiAgd2lkdGg6IDYwJTtcbn1cbi5XaWtpcGx1cy1JbnRlckJveC1CdG4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luOiBhdXRvIDNweDtcbiAgcGFkZGluZzogNnB4IDEycHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZWRlZGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLldpa2lwbHVzLUludGVyQm94LUJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOGU4ZTg7XG59XG4uV2lraXBsdXMtSW50ZXJCb3gtQ2xvc2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbjogM3B4IDdweDtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5XaWtpcGx1cy1JbnRlckJveCBsYWJlbCB7XG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcbn1cbi5XaWtpcGx1cy1JbnRlckJveCB0YWJsZS5kaWZmIHtcbiAgdGFibGUtbGF5b3V0OiBhdXRvO1xufVxuLldpa2lwbHVzLUludGVyQm94IHRhYmxlLmRpZmYgLmRpZmYtYWRkZWRsaW5lLFxuLldpa2lwbHVzLUludGVyQm94IHRhYmxlLmRpZmYgLmRpZmYtZGVsZXRlZGxpbmUsXG4uV2lraXBsdXMtSW50ZXJCb3ggdGFibGUuZGlmZiAuZGlmZi1saW5lbm8ge1xuICB3aWR0aDogNTAlO1xufVxuLldpa2lwbHVzLUludGVyQm94IHRhYmxlLmRpZmYgLmRpZmYtbWFya2VyIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5XaWtpcGx1cy1CYW5uZXIge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDEwcHggNXB4O1xuICBtaW4taGVpZ2h0OiA1MHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDE5MywgMjIyLCAyMTQsIDAuNTEpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250cy1zYW5zLCBzYW5zLXNlcmlmKTtcbn1cbi5Nb2VOb3RpZmljYXRpb24tbm90aWNlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBub25lO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW46IDNweCA1cHg7XG4gIHBhZGRpbmc6IDAgNXB4O1xuICB3aWR0aDogYXV0bztcbiAgYm94LXNoYWRvdzogMCAzcHggM3B4ICNhYWE7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cbi5Nb2VOb3RpZmljYXRpb24tbm90aWNlIHNwYW4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogM3B4IGF1dG8gM3B4IDNweDtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250cy1zYW5zLCBzYW5zLXNlcmlmKTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cbi5Nb2VOb3RpZmljYXRpb24tbm90aWNlLXN1Y2Nlc3Mge1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICM4ZGRhOTM7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDNweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4YTAwO1xufVxuLk1vZU5vdGlmaWNhdGlvbi1ub3RpY2Utd2FybmluZyB7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2ZmZGYwMDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogM3B4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGJkMDA7XG59XG4uTW9lTm90aWZpY2F0aW9uLW5vdGljZS13YXJuaW5nIHNwYW4ge1xuICBjb2xvcjogIzAwMDtcbn1cbi5Nb2VOb3RpZmljYXRpb24tbm90aWNlLWVycm9yIHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjZTcxNzE3O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzcHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2IwMGUwNjtcbn1cbiNNb2VOb3RpZmljYXRpb24ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMzBweDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogNzEzO1xuICBtaW4td2lkdGg6IDIwJTtcbn1cbi5jbGllbnQtZGFya21vZGUgI1dpa2lwbHVzLVF1aWNrZWRpdC1TdW1tYXJ5LUlucHV0LFxuaHRtbC5za2luLXRoZW1lLWNsaWVudHByZWYtbmlnaHQgI1dpa2lwbHVzLVF1aWNrZWRpdC1TdW1tYXJ5LUlucHV0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjEyMjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvci1iYXNlLCAjMjAyMTIyKTtcbiAgY29sb3I6ICNlYWVjZjA7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1iYXNlLCAjZWFlY2YwKTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2EyYTliMTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yLWJhc2UsICNhMmE5YjEpO1xufVxuLmNsaWVudC1kYXJrbW9kZSAuV2lraXBsdXMtSW50ZXJCb3gsXG5odG1sLnNraW4tdGhlbWUtY2xpZW50cHJlZi1uaWdodCAuV2lraXBsdXMtSW50ZXJCb3gge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMTIyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yLWludGVyYWN0aXZlLXN1YnRsZSwgIzIwMjEyMik7XG4gIGJvcmRlci1jb2xvcjogI2EyYTliMTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ib3JkZXItY29sb3ItYmFzZSwgI2EyYTliMSk7XG4gIGNvbG9yOiAjZWFlY2YwO1xuICBjb2xvcjogdmFyKC0tY29sb3ItYmFzZSwgI2VhZWNmMCk7XG4gIC8qIOehruS/nemTvuaOpeminOiJsuWPr+ingSAqL1xufVxuLmNsaWVudC1kYXJrbW9kZSAuV2lraXBsdXMtSW50ZXJCb3gtSGVhZGVyLFxuaHRtbC5za2luLXRoZW1lLWNsaWVudHByZWYtbmlnaHQgLldpa2lwbHVzLUludGVyQm94LUhlYWRlciB7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICMzNmM7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHZhcigtLWNvbG9yLXByb2dyZXNzaXZlLCAjMzZjKTtcbn1cbi5jbGllbnQtZGFya21vZGUgLldpa2lwbHVzLUludGVyQm94LUJ0bixcbmh0bWwuc2tpbi10aGVtZS1jbGllbnRwcmVmLW5pZ2h0IC5XaWtpcGx1cy1JbnRlckJveC1CdG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMTIyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yLWludGVyYWN0aXZlLCAjMjAyMTIyKTtcbiAgYm9yZGVyLWNvbG9yOiAjYTJhOWIxO1xuICBib3JkZXItY29sb3I6IHZhcigtLWJvcmRlci1jb2xvci1iYXNlLCAjYTJhOWIxKTtcbiAgY29sb3I6ICNlYWVjZjA7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1iYXNlLCAjZWFlY2YwKTtcbn1cbi5jbGllbnQtZGFya21vZGUgLldpa2lwbHVzLUludGVyQm94LUJ0bjpob3Zlcixcbmh0bWwuc2tpbi10aGVtZS1jbGllbnRwcmVmLW5pZ2h0IC5XaWtpcGx1cy1JbnRlckJveC1CdG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGQ0ZDRkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yLWludGVyYWN0aXZlLS1ob3ZlciwgIzRkNGQ0ZCk7XG59XG4uY2xpZW50LWRhcmttb2RlIC5XaWtpcGx1cy1JbnRlckJveCB0ZXh0YXJlYSxcbmh0bWwuc2tpbi10aGVtZS1jbGllbnRwcmVmLW5pZ2h0IC5XaWtpcGx1cy1JbnRlckJveCB0ZXh0YXJlYSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMDIxMjI7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3ItYmFzZSwgIzIwMjEyMik7XG4gIGNvbG9yOiAjZWFlY2YwO1xuICBjb2xvcjogdmFyKC0tY29sb3ItYmFzZSwgI2VhZWNmMCk7XG4gIGJvcmRlci1jb2xvcjogI2EyYTliMTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ib3JkZXItY29sb3ItYmFzZSwgI2EyYTliMSk7XG59XG4uY2xpZW50LWRhcmttb2RlIC5XaWtpcGx1cy1JbnRlckJveCBhLFxuaHRtbC5za2luLXRoZW1lLWNsaWVudHByZWYtbmlnaHQgLldpa2lwbHVzLUludGVyQm94IGEge1xuICBjb2xvcjogIzM2YztcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByb2dyZXNzaXZlLCAjMzZjKTtcbn1cbi5jbGllbnQtZGFya21vZGUgLldpa2lwbHVzLUJ0bixcbmh0bWwuc2tpbi10aGVtZS1jbGllbnRwcmVmLW5pZ2h0IC5XaWtpcGx1cy1CdG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMTIyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yLWludGVyYWN0aXZlLCAjMjAyMTIyKTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2EyYTliMTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yLWJhc2UsICNhMmE5YjEpO1xufVxuLmNsaWVudC1kYXJrbW9kZSAuV2lraXBsdXMtQnRuIGEsXG5odG1sLnNraW4tdGhlbWUtY2xpZW50cHJlZi1uaWdodCAuV2lraXBsdXMtQnRuIGEge1xuICBjb2xvcjogI2VhZWNmMDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWJhc2UsICNlYWVjZjApO1xufVxuLmNsaWVudC1kYXJrbW9kZSAuTW9lTm90aWZpY2F0aW9uLW5vdGljZSxcbmh0bWwuc2tpbi10aGVtZS1jbGllbnRwcmVmLW5pZ2h0IC5Nb2VOb3RpZmljYXRpb24tbm90aWNlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjEyMjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvci1pbnRlcmFjdGl2ZS1zdWJ0bGUsICMyMDIxMjIpO1xuICBib3gtc2hhZG93OiAwIDNweCAzcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuLmNsaWVudC1kYXJrbW9kZSAuTW9lTm90aWZpY2F0aW9uLW5vdGljZSBzcGFuLFxuaHRtbC5za2luLXRoZW1lLWNsaWVudHByZWYtbmlnaHQgLk1vZU5vdGlmaWNhdGlvbi1ub3RpY2Ugc3BhbiB7XG4gIGNvbG9yOiAjZWFlY2YwO1xuICBjb2xvcjogdmFyKC0tY29sb3ItYmFzZSwgI2VhZWNmMCk7XG59XG4uY2xpZW50LWRhcmttb2RlIC5Nb2VOb3RpZmljYXRpb24tbm90aWNlLXN1Y2Nlc3MsXG5odG1sLnNraW4tdGhlbWUtY2xpZW50cHJlZi1uaWdodCAuTW9lTm90aWZpY2F0aW9uLW5vdGljZS1zdWNjZXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBhMzMxMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvci1zdWNjZXNzLXN1YnRsZSwgIzBhMzMxMSk7XG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjMDA4YTAwO1xuICBib3JkZXItbGVmdC1jb2xvcjogdmFyKC0tY29sb3Itc3VjY2VzcywgIzAwOGEwMCk7XG59XG4uY2xpZW50LWRhcmttb2RlIC5Nb2VOb3RpZmljYXRpb24tbm90aWNlLXdhcm5pbmcsXG5odG1sLnNraW4tdGhlbWUtY2xpZW50cHJlZi1uaWdodCAuTW9lTm90aWZpY2F0aW9uLW5vdGljZS13YXJuaW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMjcwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvci13YXJuaW5nLXN1YnRsZSwgIzMzMjcwMCk7XG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjZjRiZDAwO1xuICBib3JkZXItbGVmdC1jb2xvcjogdmFyKC0tY29sb3Itd2FybmluZywgI2Y0YmQwMCk7XG59XG4uY2xpZW50LWRhcmttb2RlIC5Nb2VOb3RpZmljYXRpb24tbm90aWNlLXdhcm5pbmcgc3Bhbixcbmh0bWwuc2tpbi10aGVtZS1jbGllbnRwcmVmLW5pZ2h0IC5Nb2VOb3RpZmljYXRpb24tbm90aWNlLXdhcm5pbmcgc3BhbiB7XG4gIGNvbG9yOiAjZWFlY2YwO1xuICBjb2xvcjogdmFyKC0tY29sb3ItYmFzZSwgI2VhZWNmMCk7XG59XG4uY2xpZW50LWRhcmttb2RlIC5Nb2VOb3RpZmljYXRpb24tbm90aWNlLWVycm9yLFxuaHRtbC5za2luLXRoZW1lLWNsaWVudHByZWYtbmlnaHQgLk1vZU5vdGlmaWNhdGlvbi1ub3RpY2UtZXJyb3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMwNTAyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yLWVycm9yLXN1YnRsZSwgIzMzMDUwMik7XG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjYjAwZTA2O1xuICBib3JkZXItbGVmdC1jb2xvcjogdmFyKC0tY29sb3ItZXJyb3IsICNiMDBlMDYpO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XG4gIGh0bWwuc2tpbi10aGVtZS1jbGllbnRwcmVmLW9zICNXaWtpcGx1cy1RdWlja2VkaXQtU3VtbWFyeS1JbnB1dCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjEyMjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yLWJhc2UsICMyMDIxMjIpO1xuICAgIGNvbG9yOiAjZWFlY2YwO1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1iYXNlLCAjZWFlY2YwKTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYTJhOWIxO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvci1iYXNlLCAjYTJhOWIxKTtcbiAgfVxuICBodG1sLnNraW4tdGhlbWUtY2xpZW50cHJlZi1vcyAuV2lraXBsdXMtSW50ZXJCb3gge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMDIxMjI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvci1pbnRlcmFjdGl2ZS1zdWJ0bGUsICMyMDIxMjIpO1xuICAgIGJvcmRlci1jb2xvcjogI2EyYTliMTtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWJvcmRlci1jb2xvci1iYXNlLCAjYTJhOWIxKTtcbiAgICBjb2xvcjogI2VhZWNmMDtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItYmFzZSwgI2VhZWNmMCk7XG4gICAgLyog56Gu5L+d6ZO+5o6l6aKc6Imy5Y+v6KeBICovXG4gIH1cbiAgaHRtbC5za2luLXRoZW1lLWNsaWVudHByZWYtb3MgLldpa2lwbHVzLUludGVyQm94LUhlYWRlciB7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzM2YztcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiB2YXIoLS1jb2xvci1wcm9ncmVzc2l2ZSwgIzM2Yyk7XG4gIH1cbiAgaHRtbC5za2luLXRoZW1lLWNsaWVudHByZWYtb3MgLldpa2lwbHVzLUludGVyQm94LUJ0biB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjEyMjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yLWludGVyYWN0aXZlLCAjMjAyMTIyKTtcbiAgICBib3JkZXItY29sb3I6ICNhMmE5YjE7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ib3JkZXItY29sb3ItYmFzZSwgI2EyYTliMSk7XG4gICAgY29sb3I6ICNlYWVjZjA7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWJhc2UsICNlYWVjZjApO1xuICB9XG4gIGh0bWwuc2tpbi10aGVtZS1jbGllbnRwcmVmLW9zIC5XaWtpcGx1cy1JbnRlckJveC1CdG46aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0ZDRkNGQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvci1pbnRlcmFjdGl2ZS0taG92ZXIsICM0ZDRkNGQpO1xuICB9XG4gIGh0bWwuc2tpbi10aGVtZS1jbGllbnRwcmVmLW9zIC5XaWtpcGx1cy1JbnRlckJveCB0ZXh0YXJlYSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjEyMjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yLWJhc2UsICMyMDIxMjIpO1xuICAgIGNvbG9yOiAjZWFlY2YwO1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1iYXNlLCAjZWFlY2YwKTtcbiAgICBib3JkZXItY29sb3I6ICNhMmE5YjE7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ib3JkZXItY29sb3ItYmFzZSwgI2EyYTliMSk7XG4gIH1cbiAgaHRtbC5za2luLXRoZW1lLWNsaWVudHByZWYtb3MgLldpa2lwbHVzLUludGVyQm94IGEge1xuICAgIGNvbG9yOiAjMzZjO1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1wcm9ncmVzc2l2ZSwgIzM2Yyk7XG4gIH1cbiAgaHRtbC5za2luLXRoZW1lLWNsaWVudHByZWYtb3MgLldpa2lwbHVzLUJ0biB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjEyMjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yLWludGVyYWN0aXZlLCAjMjAyMTIyKTtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNhMmE5YjE7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yLWJhc2UsICNhMmE5YjEpO1xuICB9XG4gIGh0bWwuc2tpbi10aGVtZS1jbGllbnRwcmVmLW9zIC5XaWtpcGx1cy1CdG4gYSB7XG4gICAgY29sb3I6ICNlYWVjZjA7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWJhc2UsICNlYWVjZjApO1xuICB9XG4gIGh0bWwuc2tpbi10aGVtZS1jbGllbnRwcmVmLW9zIC5Nb2VOb3RpZmljYXRpb24tbm90aWNlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMTIyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3ItaW50ZXJhY3RpdmUtc3VidGxlLCAjMjAyMTIyKTtcbiAgICBib3gtc2hhZG93OiAwIDNweCAzcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICB9XG4gIGh0bWwuc2tpbi10aGVtZS1jbGllbnRwcmVmLW9zIC5Nb2VOb3RpZmljYXRpb24tbm90aWNlIHNwYW4ge1xuICAgIGNvbG9yOiAjZWFlY2YwO1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1iYXNlLCAjZWFlY2YwKTtcbiAgfVxuICBodG1sLnNraW4tdGhlbWUtY2xpZW50cHJlZi1vcyAuTW9lTm90aWZpY2F0aW9uLW5vdGljZS1zdWNjZXNzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGEzMzExO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3Itc3VjY2Vzcy1zdWJ0bGUsICMwYTMzMTEpO1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjMDA4YTAwO1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiB2YXIoLS1jb2xvci1zdWNjZXNzLCAjMDA4YTAwKTtcbiAgfVxuICBodG1sLnNraW4tdGhlbWUtY2xpZW50cHJlZi1vcyAuTW9lTm90aWZpY2F0aW9uLW5vdGljZS13YXJuaW5nIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMyNzAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3Itd2FybmluZy1zdWJ0bGUsICMzMzI3MDApO1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjZjRiZDAwO1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiB2YXIoLS1jb2xvci13YXJuaW5nLCAjZjRiZDAwKTtcbiAgfVxuICBodG1sLnNraW4tdGhlbWUtY2xpZW50cHJlZi1vcyAuTW9lTm90aWZpY2F0aW9uLW5vdGljZS13YXJuaW5nIHNwYW4ge1xuICAgIGNvbG9yOiAjZWFlY2YwO1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1iYXNlLCAjZWFlY2YwKTtcbiAgfVxuICBodG1sLnNraW4tdGhlbWUtY2xpZW50cHJlZi1vcyAuTW9lTm90aWZpY2F0aW9uLW5vdGljZS1lcnJvciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMDUwMjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yLWVycm9yLXN1YnRsZSwgIzMzMDUwMik7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6ICNiMDBlMDY7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6IHZhcigtLWNvbG9yLWVycm9yLCAjYjAwZTA2KTtcbiAgfVxufVxuIiwgIi8qKlxuICogV2lraXBsdXNcbiAqIEVyaWRhbnVzIFNvcmEgPHNvcmFAc291bmQubW9lPlxuICovXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4vLyBAdHMtbm9jaGVja1xuaW1wb3J0IFBhZ2UgZnJvbSAnLi9jb3JlL3BhZ2UnO1xuaW1wb3J0IFVJIGZyb20gJy4vY29yZS91aSc7XG5pbXBvcnQgTm90aWZpY2F0aW9uIGZyb20gJy4vY29yZS9ub3RpZmljYXRpb24nO1xuaW1wb3J0IFdpa2kgZnJvbSAnLi9zZXJ2aWNlcy93aWtpJztcbmltcG9ydCBTZXR0aW5ncyBmcm9tICcuL3V0aWxzL3NldHRpbmdzJztcbmltcG9ydCBMb2cgZnJvbSAnLi91dGlscy9sb2cnO1xuaW1wb3J0IENvbnN0YW50cyBmcm9tICcuL3V0aWxzL2NvbnN0YW50cyc7XG5pbXBvcnQgaTE4biBmcm9tICcuL3V0aWxzL2kxOG4nO1xuaW1wb3J0ICcuL3dpa2lwbHVzLmxlc3MnO1xuXG4kKGFzeW5jICgpID0+IHtcblx0Y29uc3QgUGFnZXMgPSB7fTtcblx0Y29uc3QgaXNDdXJyZW50UGFnZUVtcHR5ID0gJCgnLm5vYXJ0aWNsZXRleHQnKS5sZW5ndGggPiAwICYmIENvbnN0YW50cy5hcnRpY2xlSWQgPT09IDA7XG5cblx0LyoqXG5cdCAqIEdldCBwYWdlIGluc3RhbmNlLlxuXHQgKlxuXHQgKiBAcGFyYW0geyp9IHBhcmFtc1xuXHQgKiBAcGFyYW0ge251bWJlcn0gcGFyYW1zLnJldmlzaW9uSWQg6aG16Z2i5L+u6K6i54mI5pys5Y+3XG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMudGl0bGUg6aG16Z2i5qCH6aKYXG5cdCAqL1xuXHRjb25zdCBnZXRQYWdlID0gYXN5bmMgKHtyZXZpc2lvbklkLCB0aXRsZX0pID0+IHtcblx0XHRpZiAoUGFnZXNbcmV2aXNpb25JZF0pIHtcblx0XHRcdHJldHVybiBQYWdlc1tyZXZpc2lvbklkXTtcblx0XHR9XG5cdFx0Y29uc3QgbmV3UGFnZSA9IG5ldyBQYWdlKHtcblx0XHRcdHJldmlzaW9uSWQsXG5cdFx0XHR0aXRsZSxcblx0XHR9KTtcblx0XHRhd2FpdCBuZXdQYWdlLmluaXQoKTtcblx0XHRQYWdlc1tyZXZpc2lvbklkXSA9IG5ld1BhZ2U7XG5cdFx0cmV0dXJuIFBhZ2VzW3JldmlzaW9uSWRdO1xuXHR9O1xuXG5cdExvZy5pbmZvKGBXaWtpcGx1cyBub3cgbG9hZGluZy4gVmVyc2lvbjogJHtDb25zdGFudHMudmVyc2lvbn1gKTtcblxuXHRpZiAoIXdpbmRvdy5tdykge1xuXHRcdGNvbnNvbGUubG9nKCdNZWRpYXdpa2kgSmF2YVNjcmlwdCBub3QgbG9hZGVkIG9yIG5vdCBhIE1lZGlhd2lraSB3ZWJzaXRlLicpO1xuXHRcdHJldHVybjtcblx0fVxuXHRpZiAoIUNvbnN0YW50cy51c2VyR3JvdXBzLmluY2x1ZGVzKCdhdXRvY29uZmlybWVkJykgJiYgIUNvbnN0YW50cy51c2VyR3JvdXBzLmluY2x1ZGVzKCdjb25maXJtZWQnKSkge1xuXHRcdE5vdGlmaWNhdGlvbi5lcnJvcihpMThuLnRyYW5zbGF0ZSgnbm90X2F1dG9jb25maXJtZWRfdXNlcicpKTtcblx0XHRMb2cuaW5mbyhpMThuLnRyYW5zbGF0ZSgnbm90X2F1dG9jb25maXJtZWRfdXNlcicpKTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZiAoIUNvbnN0YW50cy5pc0FydGljbGUgfHwgQ29uc3RhbnRzLmFjdGlvbiAhPT0gJ3ZpZXcnKSB7XG5cdFx0TG9nLmluZm8oJ05vdCBhbiBlZGl0YWJsZSBwYWdlLiBTdG9wIGluaXRpYWxpemF0aW9uLicpO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vIEluaXRpYWxpemUgY3VycmVudCBwYWdlIOm7mOiupOWIneWni+WMluW9k+WJjemhtemdolxuXHR3aW5kb3cuX1dpa2lwbHVzUGFnZXMgPSBQYWdlcztcblx0Y29uc3QgY3VycmVudFBhZ2VOYW1lID0gQ29uc3RhbnRzLmN1cnJlbnRQYWdlTmFtZTtcblx0Y29uc3QgcmV2aXNpb25JZCA9IENvbnN0YW50cy5yZXZpc2lvbklkO1xuXHRjb25zdCBjdXJyZW50UGFnZSA9IGF3YWl0IGdldFBhZ2Uoe1xuXHRcdHJldmlzaW9uSWQsXG5cdFx0dGl0bGU6IGN1cnJlbnRQYWdlTmFtZSxcblx0fSk7XG5cblx0Y29uc3QgaGFuZGxlUXVpY2tFZGl0QnV0dG9uQ2xpY2tlZCA9IGFzeW5jICh7c2VjdGlvbk51bWJlciwgc2VjdGlvbk5hbWUsIHRhcmdldFBhZ2VOYW1lfSA9IHt9KSA9PiB7XG5cdFx0Y29uc3QgaXNPdGhlclBhZ2UgPSB0YXJnZXRQYWdlTmFtZSAhPT0gY3VycmVudFBhZ2VOYW1lO1xuXHRcdGlmIChpc090aGVyUGFnZSAmJiBDb25zdGFudHMubGF0ZXN0UmV2aXNpb25JZCAhPT0gQ29uc3RhbnRzLnJldmlzaW9uSWQpIHtcblx0XHRcdC8vIOWcqOWOhuWPsueJiOacrOe8lui+keWFtuS7lumhtemdouaciemXrumimCDmmoLml7bkuI3mlK/mjIFcblx0XHRcdExvZy5lcnJvcignY3Jvc3NfcGFnZV9oaXN0b3J5X3JldmlzaW9uX2VkaXRfd2FybmluZycpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zdCByZXZpc2lvbklkID0gaXNPdGhlclBhZ2UgPyBhd2FpdCBXaWtpLmdldExhdGVzdFJldmlzaW9uSWRGb3JQYWdlKHRhcmdldFBhZ2VOYW1lKSA6IENvbnN0YW50cy5yZXZpc2lvbklkO1xuXG5cdFx0Y29uc3QgcGFnZSA9IGF3YWl0IGdldFBhZ2Uoe3JldmlzaW9uSWQsIHRpdGxlOiB0YXJnZXRQYWdlTmFtZX0pO1xuXHRcdGNvbnN0IGN1c3RvbVN1bW1hcnkgPSBTZXR0aW5ncy5nZXRTZXR0aW5nKCdkZWZhdWx0U3VtbWFyeScsIHtcblx0XHRcdHNlY3Rpb25OYW1lLFxuXHRcdFx0c2VjdGlvbk51bWJlcixcblx0XHRcdHNlY3Rpb25UYXJnZXROYW1lOiB0YXJnZXRQYWdlTmFtZSxcblx0XHR9KTtcblx0XHRjb25zdCBzdW1tYXJ5ID1cblx0XHRcdGN1c3RvbVN1bW1hcnkgfHxcblx0XHRcdChzZWN0aW9uTmFtZVxuXHRcdFx0XHQ/IGAvKiAke3NlY3Rpb25OYW1lfSAqLyAke2kxOG4udHJhbnNsYXRlKCdkZWZhdWx0X3N1bW1hcnlfc3VmZml4Jyl9YFxuXHRcdFx0XHQ6IGkxOG4udHJhbnNsYXRlKCdkZWZhdWx0X3N1bW1hcnlfc3VmZml4JykpO1xuXHRcdGNvbnN0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHROb3RpZmljYXRpb24uc3VjY2VzcyhpMThuLnRyYW5zbGF0ZSgnbG9hZGluZycpKTtcblx0XHR9LCAyMDApO1xuXHRcdGNvbnN0IHNlY3Rpb25Db250ZW50ID0gYXdhaXQgcGFnZS5nZXRXaWtpVGV4dCh7XG5cdFx0XHRzZWN0aW9uOiBzZWN0aW9uTnVtYmVyLFxuXHRcdH0pO1xuXHRcdGNvbnN0IGlzRWRpdEhpc3RvcnlSZXZpc2lvbiA9ICFpc090aGVyUGFnZSAmJiBDb25zdGFudHMubGF0ZXN0UmV2aXNpb25JZCAhPT0gQ29uc3RhbnRzLnJldmlzaW9uSWQ7XG5cdFx0Y29uc3QgZXNjVG9FeGl0ID1cblx0XHRcdFNldHRpbmdzLmdldFNldHRpbmcoJ2VzY190b19leGl0X3F1aWNrZWRpdCcpID09PSB0cnVlIHx8IC8vIOWFvOWuueiAgeiuvue9rmtleVxuXHRcdFx0U2V0dGluZ3MuZ2V0U2V0dGluZygnZXNjX3RvX2V4aXRfcXVpY2tlZGl0JykgPT09ICd0cnVlJyB8fFxuXHRcdFx0U2V0dGluZ3MuZ2V0U2V0dGluZygnZXNjVG9FeGl0UXVpY2tFZGl0JykgPT09IHRydWUgfHxcblx0XHRcdFNldHRpbmdzLmdldFNldHRpbmcoJ2VzY1RvRXhpdFF1aWNrRWRpdCcpID09PSAndHJ1ZSc7XG5cdFx0Y29uc3QgY3VzdG9tRWRpdFRhZ3MgPSBTZXR0aW5ncy5nZXRTZXR0aW5nKCdjdXN0b21fZWRpdF90YWdzJyk7XG5cdFx0Y29uc3QgZGVmYXVsdEVkaXRUYWdzID0gW107XG5cdFx0Y29uc3QgZWRpdFRhZ3MgPSBjdXN0b21FZGl0VGFncz8ubGVuZ3RoID8gY3VzdG9tRWRpdFRhZ3MgOiBkZWZhdWx0RWRpdFRhZ3M7XG5cdFx0Y2xlYXJUaW1lb3V0KHRpbWVyKTtcblx0XHROb3RpZmljYXRpb24uZW1wdHkoKTtcblxuXHRcdGlmIChpc0VkaXRIaXN0b3J5UmV2aXNpb24pIHtcblx0XHRcdE5vdGlmaWNhdGlvbi53YXJuaW5nKGkxOG4udHJhbnNsYXRlKCdoaXN0b3J5X2VkaXRfd2FybmluZycpKTtcblx0XHR9XG5cblx0XHRjb25zdCBzaG91bGRTaG93Q3JlYXRlUGFnZVRpcCA9IGlzT3RoZXJQYWdlID8gIXJldmlzaW9uSWQgOiBpc0N1cnJlbnRQYWdlRW1wdHk7XG5cblx0XHRVSS5zaG93UXVpY2tFZGl0UGFuZWwoe1xuXHRcdFx0dGl0bGU6IGAke2kxOG4udHJhbnNsYXRlKCdxdWlja2VkaXRfdG9wYnRuJyl9JHtcblx0XHRcdFx0aXNFZGl0SGlzdG9yeVJldmlzaW9uID8gaTE4bi50cmFuc2xhdGUoJ2hpc3RvcnlfZWRpdF93YXJuaW5nJykgOiAnJ1xuXHRcdFx0fWAsXG5cdFx0XHRjb250ZW50OiBzaG91bGRTaG93Q3JlYXRlUGFnZVRpcCA/IGkxOG4udHJhbnNsYXRlKCdjcmVhdGVfcGFnZV90aXAnKSA6IHNlY3Rpb25Db250ZW50LFxuXHRcdFx0c3VtbWFyeSxcblx0XHRcdG9uQmFjazogVUkuaGlkZVF1aWNrRWRpdFBhbmVsLFxuXHRcdFx0b25QYXJzZTogKHdpa2lUZXh0KSA9PiB7XG5cdFx0XHRcdHJldHVybiBwYWdlLnBhcnNlV2lraVRleHQod2lraVRleHQpO1xuXHRcdFx0fSxcblx0XHRcdG9uRWRpdDogYXN5bmMgKHtjb250ZW50LCBzdW1tYXJ5LCBpc01pbm9yRWRpdH0pID0+IHtcblx0XHRcdFx0Y29uc3QgZWRpdFBheWxvYWQgPSB7XG5cdFx0XHRcdFx0Y29udGVudCxcblx0XHRcdFx0XHRjb25maWc6IHtcblx0XHRcdFx0XHRcdHN1bW1hcnksXG5cdFx0XHRcdFx0XHQuLi4oc2VjdGlvbk51bWJlciA9PT0gLTEgPyB7fSA6IHtzZWN0aW9uOiBzZWN0aW9uTnVtYmVyfSksXG5cdFx0XHRcdFx0XHQuLi4oZWRpdFRhZ3MubGVuZ3RoID8ge3RhZ3M6IGVkaXRUYWdzLmpvaW4oJ3wnKX0gOiB7fSksXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fTtcblx0XHRcdFx0aWYgKGlzTWlub3JFZGl0KSB7XG5cdFx0XHRcdFx0ZWRpdFBheWxvYWQuY29uZmlnLm1pbm9yID0gJ3RydWUnO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGVkaXRQYXlsb2FkLmNvbmZpZy5ub3RtaW5vciA9ICd0cnVlJztcblx0XHRcdFx0fVxuXHRcdFx0XHRhd2FpdCBwYWdlLmVkaXQoZWRpdFBheWxvYWQpO1xuXHRcdFx0fSxcblx0XHRcdGVzY0V4aXQ6IGVzY1RvRXhpdCxcblx0XHR9KTtcblx0fTtcblxuXHRjb25zdCBoYW5kbGVTaW1wbGVSZWRpcmVjdEJ1dHRvbkNsaWNrZWQgPSBhc3luYyAoKSA9PiB7XG5cdFx0VUkuc2hvd1NpbXBsZVJlZGlyZWN0UGFuZWwoe1xuXHRcdFx0b25FZGl0OiBhc3luYyAoe3RpdGxlLCBzdW1tYXJ5LCBmb3JjZU92ZXJ3cml0ZSA9IGZhbHNlfSkgPT4ge1xuXHRcdFx0XHRjb25zdCBwYWdlID0gYXdhaXQgZ2V0UGFnZSh7dGl0bGV9KTtcblx0XHRcdFx0Y29uc3QgdGVtcGxhdGUgPSBhd2FpdCBnZXRQYWdlKHt0ZW1wbGF0ZX0pO1xuXHRcdFx0XHRjb25zdCBjdXJyZW50UGFnZU5hbWUgPSBDb25zdGFudHMuY3VycmVudFBhZ2VOYW1lO1xuXHRcdFx0XHRjb25zdCBjb250ZW50bW9kZWwgPSBwYWdlLmNvbnRlbnRtb2RlbDtcblx0XHRcdFx0aWYgKHN1bW1hcnkgPT0gJycpIHtcblx0XHRcdFx0XHRzdW1tYXJ5ID0gaTE4bi50cmFuc2xhdGUoJ3JlZGlyZWN0X2Zyb21fc3VtbWFyeScsIFt0aXRsZSwgY3VycmVudFBhZ2VOYW1lXSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgY29udGVudCA9ICgoKSA9PiB7XG5cdFx0XHRcdFx0bGV0IGNvbnRlbnQ7XG5cdFx0XHRcdFx0c3dpdGNoIChjb250ZW50bW9kZWwpIHtcblx0XHRcdFx0XHRcdGNhc2UgJ2phdmFzY3JpcHQnOlxuXHRcdFx0XHRcdFx0XHRjb250ZW50ID0gYC8qICNSRURJUkVDVCAqL213LmxvYWRlci5sb2FkKFwiJHtsb2NhdGlvbi5wcm90b2NvbH0vLyR7XG5cdFx0XHRcdFx0XHRcdFx0bG9jYXRpb24uaG9zdFxuXHRcdFx0XHRcdFx0XHR9JHtDb25zdGFudHMuc2NyaXB0UGF0aH0vaW5kZXgucGhwP3RpdGxlPSR7bXcudXRpbC53aWtpVXJsZW5jb2RlKFxuXHRcdFx0XHRcdFx0XHRcdGN1cnJlbnRQYWdlTmFtZVxuXHRcdFx0XHRcdFx0XHQpfSZhY3Rpb249cmF3JmN0eXBlPXRleHQvamF2YXNjcmlwdFwiKTtgO1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdGNhc2UgJ2Nzcyc6XG5cdFx0XHRcdFx0XHRcdGNvbnRlbnQgPSBgLyogI1JFRElSRUNUICovQGltcG9ydCB1cmwoJHtsb2NhdGlvbi5wcm90b2NvbH0vLyR7XG5cdFx0XHRcdFx0XHRcdFx0bG9jYXRpb24uaG9zdFxuXHRcdFx0XHRcdFx0XHR9JHtDb25zdGFudHMuc2NyaXB0UGF0aH0vaW5kZXgucGhwP3RpdGxlPSR7bXcudXRpbC53aWtpVXJsZW5jb2RlKFxuXHRcdFx0XHRcdFx0XHRcdGN1cnJlbnRQYWdlTmFtZVxuXHRcdFx0XHRcdFx0XHQpfSZhY3Rpb249cmF3JmN0eXBlPXRleHQvY3NzKTtgO1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdGNhc2UgJ1NjcmlidW50byc6XG5cdFx0XHRcdFx0XHRcdGNvbnRlbnQgPSBgcmV0dXJuIHJlcXVpcmUgW1ske2N1cnJlbnRQYWdlTmFtZX1dXWA7XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0Y2FzZSAnd2lraXRleHQnOlxuXHRcdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdFx0Y29udGVudCA9IGAjUkVESVJFQ1QgW1ske2N1cnJlbnRQYWdlTmFtZX1dXVxcbnt7JHt0ZW1wbGF0ZX19fWA7XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gY29udGVudDtcblx0XHRcdFx0fSkoKTtcblx0XHRcdFx0Y29uc3QgcGF5bG9hZCA9IHtcblx0XHRcdFx0XHRjb250ZW50OiBjb250ZW50LFxuXHRcdFx0XHRcdGNvbmZpZzoge1xuXHRcdFx0XHRcdFx0c3VtbWFyeSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9O1xuXHRcdFx0XHRpZiAoIWZvcmNlT3ZlcndyaXRlKSB7XG5cdFx0XHRcdFx0cGF5bG9hZC5jb25maWcuY3JlYXRlb25seSA9ICd0cnVlJztcblx0XHRcdFx0fVxuXHRcdFx0XHRhd2FpdCBwYWdlLmVkaXQocGF5bG9hZCk7XG5cdFx0XHR9LFxuXHRcdFx0b25TdWNjZXNzOiAoe3RpdGxlfSkgPT4ge1xuXHRcdFx0XHRsb2NhdGlvbi5ocmVmID0gQ29uc3RhbnRzLmFydGljbGVQYXRoLnJlcGxhY2UoL1xcJDEvZ2ksIHRpdGxlKTtcblx0XHRcdH0sXG5cdFx0fSk7XG5cdH07XG5cblx0Y29uc3QgaGFuZGxlU2V0dGluZ3NCdXR0b25DbGlja2VkID0gYXN5bmMgKCkgPT4ge1xuXHRcdFVJLnNob3dTZXR0aW5nc1BhbmVsKHtcblx0XHRcdG9uU3VibWl0OiAoe3NldHRpbmdzfSkgPT4ge1xuXHRcdFx0XHRKU09OLnBhcnNlKHNldHRpbmdzKTtcblx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1dpa2lwbHVzX1NldHRpbmdzJywgc2V0dGluZ3MpO1xuXHRcdFx0fSxcblx0XHR9KTtcblx0fTtcblxuXHRjb25zdCBoYW5kbGVQcmVsb2FkID0gYXN5bmMgKHtzZWN0aW9uTnVtYmVyfSkgPT4ge1xuXHRcdGF3YWl0IGN1cnJlbnRQYWdlLmdldFdpa2lUZXh0KHtcblx0XHRcdHNlY3Rpb246IHNlY3Rpb25OdW1iZXIsXG5cdFx0fSk7XG5cdH07XG5cblx0VUkuaW5zZXJ0VG9wUXVpY2tFZGl0RW50cnkoaGFuZGxlUXVpY2tFZGl0QnV0dG9uQ2xpY2tlZCk7XG5cdFVJLmluc2VydFNlY3Rpb25RdWlja0VkaXRFbnRyaWVzKGhhbmRsZVF1aWNrRWRpdEJ1dHRvbkNsaWNrZWQpO1xuXHRVSS5pbnNlcnRMaW5rRWRpdEVudHJpZXMoaGFuZGxlUXVpY2tFZGl0QnV0dG9uQ2xpY2tlZCk7XG5cdFVJLmluc2VydFNpbXBsZVJlZGlyZWN0QnV0dG9uKGhhbmRsZVNpbXBsZVJlZGlyZWN0QnV0dG9uQ2xpY2tlZCk7XG5cdFVJLmluc2VydFNldHRpbmdzUGFuZWxCdXR0b24oaGFuZGxlU2V0dGluZ3NCdXR0b25DbGlja2VkKTtcblx0VUkuYmluZFByZWxvYWRFdmVudHMoaGFuZGxlUHJlbG9hZCk7XG59KTtcblxuZXhwb3J0IHt9O1xuIiwgImltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxudm9pZCBnZXRCb2R5KCkudGhlbigoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdCQod2luZG93KS5vbigncmVzaXplJywgKCk6IHZvaWQgPT4ge1xuXHRcdGNvbnN0IHdpbmRvd1dpZHRoID0gJCh3aW5kb3cpLndpZHRoKCk7XG5cdFx0Y29uc3QgJHdpa2lwbHVzSW50ZXJib3ggPSAkYm9keS5maW5kKCcuV2lraXBsdXMtSW50ZXJCb3gnKTtcblx0XHRpZiAoJHdpa2lwbHVzSW50ZXJib3gpIHtcblx0XHRcdCR3aWtpcGx1c0ludGVyYm94LmNzcygnbWF4LXdpZHRoJywgYGNhbGMoJHt3aW5kb3dXaWR0aH1weCAtIDJlbSlgKTtcblx0XHR9XG5cdH0pO1xufSk7XG4iLCAiaW1wb3J0ICcuL1dpa2lwbHVzLmxlc3MnO1xuXG4oZnVuY3Rpb24gV2lraXBsdXMoKTogdm9pZCB7XG5cdGNvbnN0IHt3Z0FjdGlvbiwgd2dJc0FydGljbGV9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRpZiAod2dBY3Rpb24gIT09ICd2aWV3JyB8fCAhd2dJc0FydGljbGUpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBsb2FkZXIgPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdFx0Y29uc3Qgeyd2aXN1YWxlZGl0b3ItZW5hYmxlJzogaXNWZUVuYWJsZX0gPSBtdy51c2VyLm9wdGlvbnMuZ2V0KCkgYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj47XG5cblx0XHQvKiBzZWUgPGh0dHBzOi8vZ2l0aHViLmNvbS9XaWtpcGx1cy9XaWtpcGx1cy9pc3N1ZXMvNjU+ICovXG5cdFx0aWYgKGlzVmVFbmFibGUpIHtcblx0XHRcdGF3YWl0IG13LmxvYWRlci51c2luZygnZXh0LnZpc3VhbEVkaXRvci5jb3JlJyk7XG5cdFx0fVxuXG5cdFx0YXdhaXQgaW1wb3J0KCcuL21vZHVsZXMvaW5kZXgnKTtcblx0XHRhd2FpdCBpbXBvcnQoJy4vcmVzaXplJyk7XG5cdH07XG5cblx0dm9pZCBsb2FkZXIoKTtcbn0p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RUFBRWlPLE1BQU07QUFDcEMsY0FBTW1MLG9CQUFvQkYsTUFBTXhOLEtBQUssb0JBQW9CO0FBQ3pELFlBQUkwTixtQkFBbUI7QUFDdEJBLDRCQUFrQnZNLElBQUksYUFBQSxRQUFBN0wsT0FBcUJtWSxhQUFXLFdBQUEsQ0FBVztRQUNsRTtNQUNELENBQUM7SUFDRixDQUFDO0VBQUE7QUFBQSxDQUFBOztDQ1JBLFNBQVNFLFdBQWlCO0FBQzFCLFFBQU07SUFBQ0M7SUFBVUM7RUFBVyxJQUFJdFosR0FBR0MsT0FBT0MsSUFBSTtBQUM5QyxNQUFJbVosYUFBYSxVQUFVLENBQUNDLGFBQWE7QUFDeEM7RUFDRDtBQUVBLFFBQU1oUCxTQUFBLDRCQUFBO0FBQUEsUUFBQWlQLFNBQUEvWCxrQkFBUyxhQUEyQjtBQUN6QyxZQUFNO1FBQUMsdUJBQXVCZ1k7TUFBVSxJQUFJeFosR0FBR3dLLEtBQUtpUCxRQUFRdlosSUFBSTtBQUdoRSxVQUFJc1osWUFBWTtBQUNmLGNBQU14WixHQUFHc0ssT0FBT0MsTUFBTSx1QkFBdUI7TUFDOUM7QUFFQSxZQUFNSixRQUFBZ0QsUUFBQSxFQUFBNkwsS0FBQSxPQUFBakQsYUFBQSxHQUFBRCxnQkFBQTtBQUNOLFlBQU0zTCxRQUFBZ0QsUUFBQSxFQUFBNkwsS0FBQSxPQUFBSCxZQUFBLEdBQUFGLGVBQUE7SUFDUCxDQUFBO0FBQUEsV0FBQSxTQVZNck8sVUFBQTtBQUFBLGFBQUFpUCxPQUFBblIsTUFBQSxNQUFBQyxTQUFBO0lBQUE7RUFBQSxHQUFBO0FBWU4sT0FBS2lDLE9BQU87QUFDYixHQUFHOyIsCiAgIm5hbWVzIjogWyJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJnbG9iYWxUaGlzIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJuYXZpZ2F0b3IiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJnbG9iYWxUaGlzIiwgIm1vZHVsZSIsICJnbG9iYWxUaGlzIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJTeW1ib2wiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJkb2N1bWVudCIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJnbG9iYWxUaGlzIiwgIlR5cGVFcnJvciIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiYWN0aXZlWERvY3VtZW50IiwgIm1vZHVsZSIsICIkIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIiQiLCAiZ2xvYmFsVGhpcyIsICJKU09OIiwgIlN5bnRheEVycm9yIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICIkIiwgIkNvbnN0YW50cyIsICJjb25zdGFudHNfZGVmYXVsdCIsICJpbml0X2NvbnN0YW50cyIsICJfX2VzbSIsICJ2ZXJzaW9uIiwgImlzQXJ0aWNsZSIsICJ3aW5kb3ciLCAibXciLCAiY29uZmlnIiwgImdldCIsICJjdXJyZW50UGFnZU5hbWUiLCAicmVwbGFjZSIsICJhcnRpY2xlSWQiLCAicmV2aXNpb25JZCIsICJsYXRlc3RSZXZpc2lvbklkIiwgImFydGljbGVQYXRoIiwgInNjcmlwdFBhdGgiLCAiYWN0aW9uIiwgInNraW4iLCAidXNlckdyb3VwcyIsICJ3aWtpSWQiLCAidXNlckFnZW50IiwgImNvbmNhdCIsICJSZXF1ZXN0cyIsICJyZXF1ZXN0c19kZWZhdWx0IiwgImluaXRfcmVxdWVzdHMiLCAiYmFzZSIsICJsb2NhdGlvbiIsICJwcm90b2NvbCIsICJob3N0IiwgInF1ZXJ5IiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgInVybCIsICJVUkwiLCAiX2kiLCAiX09iamVjdCRrZXlzIiwgIk9iamVjdCIsICJrZXlzIiwgImxlbmd0aCIsICJrZXkiLCAic2VhcmNoUGFyYW1zIiwgImFwcGVuZCIsICJyZXNwb25zZSIsICJmZXRjaCIsICJjcmVkZW50aWFscyIsICJoZWFkZXJzIiwgImpzb24iLCAicG9zdCIsICJwYXlsb2FkIiwgImZvcm0iLCAiRm9ybURhdGEiLCAiX2kyIiwgIl9PYmplY3QkZW50cmllcyIsICJlbnRyaWVzIiwgInZhbHVlIiwgIm1ldGhvZCIsICJib2R5IiwgIkkxOG4iLCAiaTE4bl9kZWZhdWx0IiwgImluaXRfaTE4biIsICJsYW5ndWFnZSIsICJpMThuRGF0YSIsICJzZXNzaW9uVXBkYXRlTG9nIiwgImNvbnN0cnVjdG9yIiwgIkpTT04iLCAicGFyc2UiLCAibG9jYWxTdG9yYWdlIiwgIm5hdmlnYXRvciIsICJ0b0xvd2VyQ2FzZSIsICJicm93c2VyTGFuZ3VhZ2UiLCAiaTE4bkNhY2hlIiwgImdldEl0ZW0iLCAiX2kzIiwgIl9PYmplY3Qka2V5czIiLCAic2V0SXRlbSIsICJ0cmFuc2xhdGUiLCAicGxhY2Vob2xkZXJzIiwgInJlc3VsdCIsICJsb2FkTGFuZ3VhZ2UiLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwIiwgInMiLCAibiIsICJkb25lIiwgImluZGV4IiwgInBsYWNlaG9sZGVyIiwgImVyciIsICJlIiwgImYiLCAiX3RoaXMiLCAiaW5jbHVkZXMiLCAibm93VmVyc2lvbiIsICJwdXNoIiwgIl9fdmVyc2lvbiIsICJjb25zb2xlIiwgImluZm8iLCAic3RyaW5naWZ5IiwgIldpa2lwbHVzRXJyb3IiLCAiTG9nIiwgImxvZ19kZWZhdWx0IiwgImluaXRfbG9nIiwgIkVycm9yIiwgIm1lc3NhZ2UiLCAiY29kZSIsICJkZWJ1ZyIsICJlcnJvciIsICJlcnJvckNvZGUiLCAicGF5bG9hZHMiLCAidGVtcGxhdGUiLCAiX2l0ZXJhdG9yMiIsICJfc3RlcDIiLCAiaSIsICJ2IiwgIlJlZ0V4cCIsICJXaWtpIiwgIndpa2lfZGVmYXVsdCIsICJpbml0X3dpa2kiLCAicGFnZUluZm9DYWNoZSIsICJnZXRFZGl0VG9rZW4iLCAibWV0YSIsICJmb3JtYXQiLCAidG9rZW5zIiwgImNzcmZ0b2tlbiIsICJnZXRQYWdlSW5mbyIsICJfeCIsICJfdGhpczIiLCAidGl0bGUiLCAicGFyYW1zIiwgInByb3AiLCAicnZwcm9wIiwgInJldmlkcyIsICJ0aW1lc3RhbXAiLCAicmV2aWQiLCAiY29udGVudG1vZGVsIiwgInRpdGxlcyIsICJwYWdlcyIsICJwYWdlSW5mbyIsICJyZXZpc2lvbnMiLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgImdldFdpa2lUZXh0IiwgIl94MiIsICJzZWN0aW9uIiwgInJ2c2VjdGlvbiIsICJwYXJzZVdpa2lUZXh0IiwgIl94MyIsICJ3aWtpdGV4dCIsICJ0ZXh0IiwgInBzdCIsICJlZGl0IiwgImNvbnRlbnQiLCAiZWRpdFRva2VuIiwgImFkZGl0aW9uYWxDb25maWciLCAidG9rZW4iLCAiYmFzZXRpbWVzdGFtcCIsICJ3YXJuaW5nIiwgImdldExhdGVzdFJldmlzaW9uSWRGb3JQYWdlIiwgIl90aGlzMyIsICJQYWdlIiwgInBhZ2VfZGVmYXVsdCIsICJpbml0X3BhZ2UiLCAiaW5pdGVkIiwgImlzTmV3UGFnZSIsICJzZWN0aW9uQ2FjaGUiLCAiaW5pdCIsICJfdGhpczQiLCAicHJvbWlzZUFyciIsICJnZXRUaW1lc3RhbXAiLCAiZ2V0Q29udGVudE1vZGVsIiwgIlByb21pc2UiLCAiYWxsIiwgIl90aGlzNSIsICJsb2FkZXIiLCAidXNpbmciLCAidXNlciIsICJfdGhpczYiLCAiX3RoaXM3IiwgIl90aGlzOCIsICJzZWMiLCAid2lraVRleHQiLCAiX3RoaXM5IiwgIl90aGlzMCIsICJjcmVhdGVvbmx5IiwgIk5vdGlmaWNhdGlvbiIsICJub3RpZmljYXRpb25fZGVmYXVsdCIsICJpbml0X25vdGlmaWNhdGlvbiIsICIkIiwgImRpc3BsYXkiLCAidHlwZSIsICJjYWxsYmFjayIsICJhZGRDbGFzcyIsICJmaW5kIiwgImxhc3QiLCAiZmFkZUluIiwgImJpbmQiLCAiY2xlYXIiLCAic2VsZiIsICJvbiIsICJzbGlkZUxlZnQiLCAic3VjY2VzcyIsICJjaGlsZHJlbiIsICJmaXJzdCIsICJmYWRlT3V0IiwgInJlbW92ZSIsICJzZXRUaW1lb3V0IiwgImVtcHR5IiwgImVhY2giLCAiZWxlIiwgImRlbGF5IiwgInNwZWVkIiwgImNzcyIsICJhbmltYXRlIiwgImxlZnQiLCAic2xlZXAiLCAic2xlZXBfZGVmYXVsdCIsICJpbml0X3NsZWVwIiwgInRpbWUiLCAicmVzb2x2ZSIsICJwYXJzZVF1ZXJ5IiwgInJlZyIsICJtYXRjaCIsICJleGVjIiwgImRlY29kZVVSSUNvbXBvbmVudCIsICJpbml0X2hlbHBlcnMiLCAiVUkiLCAidWlfZGVmYXVsdCIsICJpbml0X3VpIiwgInF1aWNrRWRpdFBhbmVsVmlzaWJsZSIsICJzY3JvbGxUb3AiLCAiY3JlYXRlRGlhbG9nQm94IiwgIndpZHRoIiwgImNsaWVudFdpZHRoIiwgImlubmVyV2lkdGgiLCAiY2xpZW50SGVpZ2h0IiwgImlubmVySGVpZ2h0IiwgImRpYWxvZ1dpZHRoIiwgIk1hdGgiLCAibWluIiwgImRpYWxvZ0JveCIsICJ0b3AiLCAiZG9jdW1lbnQiLCAiaHRtbCIsICJwYXJlbnQiLCAiYWRkRXZlbnRMaXN0ZW5lciIsICJvbmJlZm9yZXVubG9hZCIsICJiaW5kRHJhZ2dpbmciLCAiZWxlbWVudCIsICJtb3VzZWRvd24iLCAiYmFzZVgiLCAiY2xpZW50WCIsICJiYXNlWSIsICJjbGllbnRZIiwgImJhc2VPZmZzZXRYIiwgIm9mZnNldCIsICJiYXNlT2Zmc2V0WSIsICJlMiIsICJ1bmJpbmQiLCAib2ZmIiwgImFkZEZ1bmN0aW9uQnV0dG9uIiwgImlkIiwgImJ1dHRvbiIsICJhdHRyIiwgImluc2VydFNpbXBsZVJlZGlyZWN0QnV0dG9uIiwgIm9uQ2xpY2siLCAiaW5zZXJ0U2V0dGluZ3NQYW5lbEJ1dHRvbiIsICJpbnNlcnRUb3BRdWlja0VkaXRFbnRyeSIsICJ0b3BCdG4iLCAidG9wQnRuTGluayIsICJzZWN0aW9uTnVtYmVyIiwgInRhcmdldFBhZ2VOYW1lIiwgImFmdGVyIiwgImluc2VydFNlY3Rpb25RdWlja0VkaXRFbnRyaWVzIiwgInNlY3Rpb25CdG4iLCAiZWRpdFVSTCIsICJzZWN0aW9uVGFyZ2V0TmFtZSIsICJjbG9uZU5vZGUiLCAicHJldiIsICJjbG9uZSIsICJzZWN0aW9uTmFtZSIsICJ0cmltIiwgIl9zZWN0aW9uQnRuIiwgImJlZm9yZSIsICJpbnNlcnRMaW5rRWRpdEVudHJpZXMiLCAiaHJlZiIsICJjbGFzcyIsICJfcGFyYW1zJHNlY3Rpb24iLCAic2hvd1F1aWNrRWRpdFBhbmVsIiwgInN1bW1hcnkiLCAib25CYWNrIiwgIm9uUGFyc2UiLCAib25FZGl0IiwgImVzY0V4aXQiLCAiaGlkZVF1aWNrRWRpdFBhbmVsIiwgImJhY2tCdG4iLCAianVtcEJ0biIsICJpbnB1dEJveCIsICJwcmV2aWV3Qm94IiwgInN1bW1hcnlCb3giLCAiZWRpdFN1Ym1pdEJ0biIsICJwcmV2aWV3U3VibWl0QnRuIiwgImlzTWlub3JFZGl0IiwgIm1hcmdpbiIsICJlZGl0Qm9keSIsICJ2YWwiLCAicHJlbG9hZEJhbm5lciIsICJ0aW1lciIsICJEYXRlIiwgIm5vdyIsICJlZGl0QmFubmVyIiwgImlzIiwgInVzZVRpbWUiLCAidG9TdHJpbmciLCAicmVsb2FkIiwgImxvZyIsICJjdHJsS2V5IiwgIndoaWNoIiwgInNoaWZ0S2V5IiwgInRyaWdnZXIiLCAicHJldmVudERlZmF1bHQiLCAic3RvcFByb3BhZ2F0aW9uIiwgInNob3dTaW1wbGVSZWRpcmVjdFBhbmVsIiwgIm9uU3VjY2VzcyIsICJfdGhpczEiLCAiaW5wdXQiLCAidGVtcGxhdGVUaXRsZSIsICJzdW1tYXJ5SW5wdXRUaXRsZSIsICJzdW1tYXJ5SW5wdXQiLCAiYXBwbHlCdG4iLCAiY2FuY2VsQnRuIiwgImNvbnRpbnVlQnRuIiwgImRpYWxvZyIsICJ0ZW1wbGF0ZTIiLCAiZm9yY2VPdmVyd3JpdGUiLCAiaGlkZVNpbXBsZVJlZGlyZWN0UGFuZWwiLCAiZXJyb3IyIiwgInNob3dTZXR0aW5nc1BhbmVsIiwgIm9uU3VibWl0IiwgIl90aGlzMTAiLCAiV2lraXBsdXNfU2V0dGluZ3MiLCAic2V0dGluZ3MiLCAic2F2ZWRCYW5uZXIiLCAiaGlkZVNldHRpbmdzUGFuZWwiLCAiYmluZFByZWxvYWRFdmVudHMiLCAib25QcmVsb2FkIiwgIlNldHRpbmdzIiwgInNldHRpbmdzX2RlZmF1bHQiLCAiaW5pdF9zZXR0aW5ncyIsICJnZXRTZXR0aW5nIiwgIm9iamVjdCIsICJ3IiwgImN1c3RvbVNldHRpbmdGdW5jdGlvbiIsICJGdW5jdGlvbiIsICJfaTQiLCAiX09iamVjdCRrZXlzMyIsICJrZXkyIiwgImluaXRfd2lraXBsdXMiLCAibW9kdWxlc19leHBvcnRzIiwgImluaXRfbW9kdWxlcyIsICJQYWdlcyIsICJpc0N1cnJlbnRQYWdlRW1wdHkiLCAiZ2V0UGFnZSIsICJfcmVmNyIsICJyZXZpc2lvbklkMiIsICJuZXdQYWdlIiwgIl94NCIsICJfV2lraXBsdXNQYWdlcyIsICJjdXJyZW50UGFnZSIsICJoYW5kbGVRdWlja0VkaXRCdXR0b25DbGlja2VkIiwgIl9yZWY4IiwgImlzT3RoZXJQYWdlIiwgInBhZ2UiLCAiY3VzdG9tU3VtbWFyeSIsICJzZWN0aW9uQ29udGVudCIsICJpc0VkaXRIaXN0b3J5UmV2aXNpb24iLCAiZXNjVG9FeGl0IiwgImN1c3RvbUVkaXRUYWdzIiwgImRlZmF1bHRFZGl0VGFncyIsICJlZGl0VGFncyIsICJjbGVhclRpbWVvdXQiLCAic2hvdWxkU2hvd0NyZWF0ZVBhZ2VUaXAiLCAiX3JlZjkiLCAic3VtbWFyeTIiLCAiZWRpdFBheWxvYWQiLCAidGFncyIsICJqb2luIiwgIm1pbm9yIiwgIm5vdG1pbm9yIiwgIl94NSIsICJoYW5kbGVTaW1wbGVSZWRpcmVjdEJ1dHRvbkNsaWNrZWQiLCAiX3JlZjAiLCAiX3JlZjEiLCAiY3VycmVudFBhZ2VOYW1lMiIsICJjb250ZW50MiIsICJ1dGlsIiwgIndpa2lVcmxlbmNvZGUiLCAiX3g2IiwgImhhbmRsZVNldHRpbmdzQnV0dG9uQ2xpY2tlZCIsICJfcmVmMTAiLCAiaGFuZGxlUHJlbG9hZCIsICJfcmVmMTEiLCAiX3g3IiwgInJlc2l6ZV9leHBvcnRzIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImluaXRfcmVzaXplIiwgInJlcXVpcmUiLCAiZ2V0Qm9keSIsICJ0aGVuIiwgIiRib2R5IiwgIndpbmRvd1dpZHRoIiwgIiR3aWtpcGx1c0ludGVyYm94IiwgIldpa2lwbHVzIiwgIndnQWN0aW9uIiwgIndnSXNBcnRpY2xlIiwgIl9yZWYxMiIsICJpc1ZlRW5hYmxlIiwgIm9wdGlvbnMiXQp9Cg==
