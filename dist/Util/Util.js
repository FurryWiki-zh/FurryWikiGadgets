/**
 * SPDX-License-Identifier: GPL-3.0-or-later
 * _addText: '{{Gadget Header|license=GPL-3.0-or-later}}'
 *
 * @source {@link https://github.com/FurryWiki-zh/FurryWikiGadgets/tree/master/src/Util}
 * @author 安忆 <i@anyi.in>
 * @license GPL-3.0-or-later {@link https://furrywiki.org.cn/wiki/H:GPLV3}
 */

/**
 * Copyright (C)  安忆
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
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

// dist/Util/Util.js
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
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all) __defProp(target, name, {
    get: all[name],
    enumerable: true
  });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    var _iterator = _createForOfIteratorHelper(__getOwnPropNames(from)), _step;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);
//! src/Util/Util.ts
var Util_exports = {};
__export(Util_exports, {
  MwUri: () => MwUri,
  addEventListenerWithRemover: () => addEventListenerWithRemover,
  changeOpacityWhenMouseEnterOrLeave: () => changeOpacityWhenMouseEnterOrLeave,
  checkA11yConfirmKey: () => checkA11yConfirmKey,
  checkDependencies: () => checkDependencies,
  delay: () => delay,
  findVariants: () => findVariants,
  generateArray: () => generateArray,
  generateSvgDataUrl: () => generateSvgDataUrl,
  getBody: () => getBody,
  getWpSummaryContent: () => getWpSummaryContent,
  getWpTextbox1Content: () => getWpTextbox1Content,
  initMwApi: () => initMwApi,
  isValidKey: () => isValidKey,
  oouiConfirmWithStyle: () => oouiConfirmWithStyle,
  queryGlobalUserGroups: () => queryGlobalUserGroups,
  queryUserGroups: () => queryUserGroups,
  scrollTop: () => scrollTop,
  setWpSummaryContent: () => setWpSummaryContent,
  setWpTextbox1Content: () => setWpTextbox1Content,
  uniqueArray: () => uniqueArray,
  userIsInGroup: () => userIsInGroup
});
module.exports = __toCommonJS(Util_exports);
//! src/Util/modules/addEventListenerWithRemover.ts
var addEventListenerWithRemover = ({
  target,
  type,
  listener,
  options = {}
}) => {
  target.addEventListener(type, listener, options);
  return {
    remove: () => {
      target.removeEventListener(type, listener, options);
    }
  };
};
//! src/Util/modules/changeOpacityWhenMouseEnterOrLeave.ts
var changeOpacityWhenMouseEnterOrLeave = (event, opacity = 0.7) => {
  event.currentTarget.style.opacity = event.type === "mouseenter" ? "1" : opacity.toString();
};
//! src/Util/modules/checkA11yConfirmKey.ts
var checkA11yConfirmKey = (event) => {
  if (["click", "keydown"].includes(event.type)) {
    if (event.type === "keydown") {
      return ["Enter", " "].includes(event.key);
    }
    return true;
  }
  return false;
};
//! src/Util/modules/generateArray.ts
function generateArray(...args) {
  return args.flatMap((arg) => {
    if (Array.isArray(arg)) {
      return arg;
    }
    if (arg instanceof NodeList) {
      return [...arg];
    }
    return [arg];
  });
}
//! src/Util/modules/initMwApi.ts
function initMwApi(userAgent, apiUri) {
  const apiOptions = {
    ajax: {
      headers: {
        "Api-User-Agent": userAgent ? "FurryWiki/1.1 (".concat(userAgent, ")") : "FurryWiki/1.1"
      }
    }
  };
  if (apiUri) {
    return new mw.ForeignApi(apiUri, apiOptions);
  }
  return new mw.Api(apiOptions);
}
//! src/Util/modules/uniqueArray.ts
var uniqueArray = function uniqueArray2(args) {
  /**!
   * SPDX-License-Identifier: CC-BY-SA-4.0
   *
   * @source {@link https://stackoverflow.com/questions/9229645/remove-duplicate-values-from-js-array/922982}
   * @license CC-BY-SA-4.0
   */
  const result = [];
  var _iterator2 = _createForOfIteratorHelper(args), _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
      const item = _step2.value;
      if (!result.includes(item)) {
        result[result.length] = item;
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  return result;
};
//! src/Util/modules/checkDependencies.ts
function checkDependencies(_x, _x2) {
  return _checkDependencies.apply(this, arguments);
}
//! src/Util/modules/delay.ts
function _checkDependencies() {
  _checkDependencies = _asyncToGenerator(function* (gadgetNames, option) {
    const api = initMwApi("Util-CheckDependencies");
    const gadgets = uniqueArray(generateArray(gadgetNames));
    option || (option = 1);
    var _iterator3 = _createForOfIteratorHelper(gadgets), _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
        const gadget = _step3.value;
        if (option === "0" && mw.user.options.get("gadget-".concat(gadget)) || option === "1" && !mw.user.options.get("gadget-".concat(gadget))) {
          yield api.postWithEditToken({
            action: "options",
            change: "gadget-".concat(gadget, "=").concat(option)
          });
          yield mw.loader.using("ext.gadget.".concat(gadget));
        }
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
  });
  return _checkDependencies.apply(this, arguments);
}
var delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};
//! src/Util/modules/findVariants.ts
function findVariants(_x3) {
  return _findVariants.apply(this, arguments);
}
//! src/Util/modules/generateSvgDataUrl.ts
function _findVariants() {
  _findVariants = _asyncToGenerator(function* (text) {
    const api = initMwApi("Util-FindVariants");
    const VARIANTS = ["zh-hans", "zh-hant", "zh-cn", "zh-hk", "zh-mo", "zh-sg", "zh-my", "zh-tw"];
    const allVariants = [];
    const params = {
      action: "parse",
      contentmodel: "wikitext",
      format: "json",
      formatversion: "2",
      prop: ["displaytitle"],
      title: "temp",
      text
    };
    for (var _i2 = 0, _VARIANTS = VARIANTS; _i2 < _VARIANTS.length; _i2++) {
      var _response$query;
      const variant = _VARIANTS[_i2];
      params.uselang = variant;
      params.variant = variant;
      const response = yield api.post(params);
      const displaytitle = response === null || response === void 0 || (_response$query = response["query"]) === null || _response$query === void 0 ? void 0 : _response$query.displaytitle;
      const variantElement = document.createElement("variant");
      variantElement.innerHTML = displaytitle;
      if (variantElement.textContent) {
        allVariants[allVariants.length] = variantElement.textContent;
      }
    }
    return uniqueArray(allVariants);
  });
  return _findVariants.apply(this, arguments);
}
var generateSvgDataUrl = (svg) => {
  /**!
   * SPDX-License-Identifier: MIT
   *
   * @source svg-to-data-uri.js {@link https://github.com/heyallan/svg-to-data-uri/}
   * @author Allan Moreno
   * @license MIT {@link https://github.com/heyallan/svg-to-data-uri/blob/master/LICENSE}
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   */
  svg = svg.trim();
  svg = svg.slice(svg.indexOf("<svg"));
  if (!svg.startsWith("<svg") || !svg.endsWith("svg>")) {
    return "";
  }
  if (!svg.includes("http://www.w3.org/2000/svg")) {
    svg = svg.replace(/<svg/g, "<svg xmlns='http://www.w3.org/2000/svg'");
  }
  svg = svg.replace(/<!--.{1,}-->/g, "");
  svg = svg.replace(/version=["'](.{0,}?)["'](?=[\s>])/g, "");
  svg = svg.replace(/"'(.{1,})'"/g, "'$1'");
  svg = svg.replace(/"/g, "'");
  svg = svg.replace(/>\s{1,}</g, "><");
  svg = svg.replace(/\s{2,}/g, " ");
  svg = svg.trim();
  if (!svg.startsWith("<svg") || !svg.endsWith("svg>")) {
    return "";
  }
  svg = svg.replace(/&/g, "&amp;");
  svg = svg.replace(/[%#<>?[\\\]^`{|}]/g, encodeURIComponent);
  svg = "data:image/svg+xml,".concat(svg);
  return svg;
};
//! src/Util/modules/getBody.ts
var getBody = () => {
  return $.ready.then(() => {
    const $body = $("body");
    return $body;
  });
};
//! src/Util/modules/isValidKey.ts
var isValidKey = (object, key) => {
  return key in object;
};
//! src/Util/modules/mwUri.ts
var MwUri = class extends URL {
  extend(object) {
    for (var _i = 0, _Object$entries = Object.entries(object); _i < _Object$entries.length; _i++) {
      const [key, value] = _Object$entries[_i];
      this.searchParams.set(key, value);
    }
    return this;
  }
  getRelativePath() {
    return this.pathname + this.search + this.hash;
  }
};
//! src/Util/modules/oouiConfirmWithStyle.tsx
var import_ext_gadget = __toESM(require("ext.gadget.JSX"), 1);
var oouiConfirmWithStyle = (message) => OO.ui.confirm($(/* @__PURE__ */ import_ext_gadget.default.createElement("div", {
  className: "oo-ui-window-foot",
  style: {
    border: ".1rem solid #0645ad",
    display: "flex",
    justifyContent: "space-evenly"
  }
}, /* @__PURE__ */ import_ext_gadget.default.createElement("span", {
  style: {
    fontSize: "1.2rem",
    fontWeight: "500",
    lineHeight: "1.8",
    padding: ".4em 0"
  }
}, message)))).then((isConfirm) => isConfirm);
//! src/Util/modules/queryGlobalUserGroups.ts
function queryGlobalUserGroups(_x4) {
  return _queryGlobalUserGroups.apply(this, arguments);
}
//! src/Util/modules/queryUserGroups.ts
function _queryGlobalUserGroups() {
  _queryGlobalUserGroups = _asyncToGenerator(function* (guiuser) {
    const api = initMwApi("Util-QueryGlobalUserGroups");
    const CACHE_KEY_PREFIX = "ext.gadget.Util_queryGlobalUserGroups-";
    let groups = [];
    if (mw.storage.getObject(CACHE_KEY_PREFIX + guiuser)) {
      groups = mw.storage.getObject(CACHE_KEY_PREFIX + guiuser);
      groups = groups.filter((element) => {
        return element !== "*";
      });
    } else {
      const params = {
        action: "query",
        format: "json",
        formatversion: "2",
        meta: "globaluserinfo",
        guiuser,
        guiprop: "groups",
        smaxage: 600,
        maxage: 600
      };
      const response = yield api.get(params);
      const query = response["query"];
      if (query !== null && query !== void 0 && query.globaluserinfo) {
        var _query$globaluserinfo, _query$globaluserinfo2;
        groups = (_query$globaluserinfo = (_query$globaluserinfo2 = query.globaluserinfo) === null || _query$globaluserinfo2 === void 0 ? void 0 : _query$globaluserinfo2.groups) !== null && _query$globaluserinfo !== void 0 ? _query$globaluserinfo : [];
        groups = groups.filter((element) => {
          return element !== "*";
        });
        mw.storage.setObject(CACHE_KEY_PREFIX + guiuser, groups, 60 * 60);
      }
    }
    return {
      query: {
        globaluserinfo: {
          name: guiuser,
          groups
        }
      }
    };
  });
  return _queryGlobalUserGroups.apply(this, arguments);
}
function queryUserGroups(_x5) {
  return _queryUserGroups.apply(this, arguments);
}
//! src/Util/modules/scrollTop.ts
function _queryUserGroups() {
  _queryUserGroups = _asyncToGenerator(function* (users) {
    var _query$users;
    const api = initMwApi("Util-QueryUserGroups");
    const CACHE_KEY_PREFIX = "ext.gadget.Util_queryUserGroups-";
    const cachedQueryUsers = [];
    var _iterator4 = _createForOfIteratorHelper(users), _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
        const user = _step4.value;
        if (mw.storage.getObject(CACHE_KEY_PREFIX + user)) {
          let groups = mw.storage.getObject(CACHE_KEY_PREFIX + user);
          groups = groups.filter((element) => {
            return element !== "*";
          });
          cachedQueryUsers[cachedQueryUsers.length] = {
            name: user,
            groups
          };
        }
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    const ususers = users.filter((v) => {
      return !mw.storage.getObject(CACHE_KEY_PREFIX + v);
    });
    const params = {
      ususers,
      action: "query",
      format: "json",
      formatversion: "2",
      list: "users",
      usprop: "groups",
      smaxage: 600,
      maxage: 600
    };
    const response = yield api.get(params);
    const query = response["query"];
    const queryUsers = [...(_query$users = query === null || query === void 0 ? void 0 : query.users) !== null && _query$users !== void 0 ? _query$users : [], ...cachedQueryUsers];
    for (var _i3 = 0, _queryUsers = queryUsers; _i3 < _queryUsers.length; _i3++) {
      const user = _queryUsers[_i3];
      if (user !== null && user !== void 0 && user.groups && user !== null && user !== void 0 && user.name) {
        let {
          groups
        } = user;
        groups = groups.filter((element) => {
          return element !== "*";
        });
        mw.storage.setObject(CACHE_KEY_PREFIX + user.name, groups, 60 * 60);
      }
    }
    return {
      query: {
        users: queryUsers
      }
    };
  });
  return _queryUserGroups.apply(this, arguments);
}
var scrollTop = (targetHeight, effectsOptionsOrDuration = {}) => {
  const options = typeof effectsOptionsOrDuration === "number" || typeof effectsOptionsOrDuration === "string" ? {
    duration: effectsOptionsOrDuration,
    easing: "linear"
  } : {
    duration: "slow",
    easing: "linear",
    ...effectsOptionsOrDuration
  };
  $(document).find("html, body").animate({
    scrollTop: targetHeight
  }, options);
};
//! src/Util/modules/userIsInGroup.ts
var userIsInGroup = (groups) => {
  const {
    wgUserGroups,
    wgGlobalGroups
  } = mw.config.get();
  return [...wgUserGroups || [], ...wgGlobalGroups || []].some((element) => {
    return generateArray(groups).includes(element);
  });
};
//! src/Util/modules/wpSummaryContent.ts
var getWpSummaryContent = ({
  $editForm
}) => {
  var _$editForm$find$val, _$editForm$find;
  return (_$editForm$find$val = (_$editForm$find = $editForm.find("#wpSummary")) === null || _$editForm$find === void 0 ? void 0 : _$editForm$find.val()) !== null && _$editForm$find$val !== void 0 ? _$editForm$find$val : "";
};
var setWpSummaryContent = ({
  $editForm,
  content
}) => {
  $editForm.find("#wpSummary").val(content);
};
//! src/Util/modules/wpTextbox1Content.ts
var getWpTextbox1Content = ({
  $editForm
}) => {
  var _$editForm$find$textS;
  return (_$editForm$find$textS = $editForm.find("#wpTextbox1").textSelection("getContents")) !== null && _$editForm$find$textS !== void 0 ? _$editForm$find$textS : "";
};
var setWpTextbox1Content = ({
  $editForm,
  content
}) => {
  $editForm.find("#wpTextbox1").textSelection("setContents", content);
};

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1V0aWwvVXRpbC50cyIsICJzcmMvVXRpbC9tb2R1bGVzL2FkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3Zlci50cyIsICJzcmMvVXRpbC9tb2R1bGVzL2NoYW5nZU9wYWNpdHlXaGVuTW91c2VFbnRlck9yTGVhdmUudHMiLCAic3JjL1V0aWwvbW9kdWxlcy9jaGVja0ExMXlDb25maXJtS2V5LnRzIiwgInNyYy9VdGlsL21vZHVsZXMvZ2VuZXJhdGVBcnJheS50cyIsICJzcmMvVXRpbC9tb2R1bGVzL2luaXRNd0FwaS50cyIsICJzcmMvVXRpbC9tb2R1bGVzL3VuaXF1ZUFycmF5LnRzIiwgInNyYy9VdGlsL21vZHVsZXMvY2hlY2tEZXBlbmRlbmNpZXMudHMiLCAic3JjL1V0aWwvbW9kdWxlcy9kZWxheS50cyIsICJzcmMvVXRpbC9tb2R1bGVzL2ZpbmRWYXJpYW50cy50cyIsICJzcmMvVXRpbC9tb2R1bGVzL2dlbmVyYXRlU3ZnRGF0YVVybC50cyIsICJzcmMvVXRpbC9tb2R1bGVzL2dldEJvZHkudHMiLCAic3JjL1V0aWwvbW9kdWxlcy9pc1ZhbGlkS2V5LnRzIiwgInNyYy9VdGlsL21vZHVsZXMvbXdVcmkudHMiLCAic3JjL1V0aWwvbW9kdWxlcy9vb3VpQ29uZmlybVdpdGhTdHlsZS50c3giLCAic3JjL1V0aWwvbW9kdWxlcy9xdWVyeUdsb2JhbFVzZXJHcm91cHMudHMiLCAic3JjL1V0aWwvbW9kdWxlcy9xdWVyeVVzZXJHcm91cHMudHMiLCAic3JjL1V0aWwvbW9kdWxlcy9zY3JvbGxUb3AudHMiLCAic3JjL1V0aWwvbW9kdWxlcy91c2VySXNJbkdyb3VwLnRzIiwgInNyYy9VdGlsL21vZHVsZXMvd3BTdW1tYXJ5Q29udGVudC50cyIsICJzcmMvVXRpbC9tb2R1bGVzL3dwVGV4dGJveDFDb250ZW50LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJleHBvcnQge2FkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3Zlcn0gZnJvbSAnLi9tb2R1bGVzL2FkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3Zlcic7XG5leHBvcnQge2NoYW5nZU9wYWNpdHlXaGVuTW91c2VFbnRlck9yTGVhdmV9IGZyb20gJy4vbW9kdWxlcy9jaGFuZ2VPcGFjaXR5V2hlbk1vdXNlRW50ZXJPckxlYXZlJztcbmV4cG9ydCB7Y2hlY2tBMTF5Q29uZmlybUtleX0gZnJvbSAnLi9tb2R1bGVzL2NoZWNrQTExeUNvbmZpcm1LZXknO1xuZXhwb3J0IHtjaGVja0RlcGVuZGVuY2llc30gZnJvbSAnLi9tb2R1bGVzL2NoZWNrRGVwZW5kZW5jaWVzLnRzJztcbmV4cG9ydCB7ZGVsYXl9IGZyb20gJy4vbW9kdWxlcy9kZWxheSc7XG5leHBvcnQge2ZpbmRWYXJpYW50c30gZnJvbSAnLi9tb2R1bGVzL2ZpbmRWYXJpYW50cyc7XG5leHBvcnQge2dlbmVyYXRlQXJyYXl9IGZyb20gJy4vbW9kdWxlcy9nZW5lcmF0ZUFycmF5JztcbmV4cG9ydCB7Z2VuZXJhdGVTdmdEYXRhVXJsfSBmcm9tICcuL21vZHVsZXMvZ2VuZXJhdGVTdmdEYXRhVXJsJztcbmV4cG9ydCB7Z2V0Qm9keX0gZnJvbSAnLi9tb2R1bGVzL2dldEJvZHknO1xuZXhwb3J0IHtpbml0TXdBcGl9IGZyb20gJy4vbW9kdWxlcy9pbml0TXdBcGknO1xuZXhwb3J0IHtpc1ZhbGlkS2V5fSBmcm9tICcuL21vZHVsZXMvaXNWYWxpZEtleSc7XG5leHBvcnQge013VXJpfSBmcm9tICcuL21vZHVsZXMvbXdVcmknO1xuZXhwb3J0IHtvb3VpQ29uZmlybVdpdGhTdHlsZX0gZnJvbSAnLi9tb2R1bGVzL29vdWlDb25maXJtV2l0aFN0eWxlJztcbmV4cG9ydCB7cXVlcnlHbG9iYWxVc2VyR3JvdXBzfSBmcm9tICcuL21vZHVsZXMvcXVlcnlHbG9iYWxVc2VyR3JvdXBzJztcbmV4cG9ydCB7cXVlcnlVc2VyR3JvdXBzfSBmcm9tICcuL21vZHVsZXMvcXVlcnlVc2VyR3JvdXBzJztcbmV4cG9ydCB7c2Nyb2xsVG9wfSBmcm9tICcuL21vZHVsZXMvc2Nyb2xsVG9wJztcbmV4cG9ydCB7dXNlcklzSW5Hcm91cH0gZnJvbSAnLi9tb2R1bGVzL3VzZXJJc0luR3JvdXAnO1xuZXhwb3J0IHt1bmlxdWVBcnJheX0gZnJvbSAnLi9tb2R1bGVzL3VuaXF1ZUFycmF5JztcbmV4cG9ydCB7Z2V0V3BTdW1tYXJ5Q29udGVudCwgc2V0V3BTdW1tYXJ5Q29udGVudH0gZnJvbSAnLi9tb2R1bGVzL3dwU3VtbWFyeUNvbnRlbnQnO1xuZXhwb3J0IHtnZXRXcFRleHRib3gxQ29udGVudCwgc2V0V3BUZXh0Ym94MUNvbnRlbnR9IGZyb20gJy4vbW9kdWxlcy93cFRleHRib3gxQ29udGVudCc7XG4iLCAidHlwZSBBZGRFdmVudExpc3RlbmVyV2l0aFJlbW92ZXIgPSA8XG5cdFRhcmdldCBleHRlbmRzIERvY3VtZW50IHwgSFRNTEVsZW1lbnQgfCBFbGVtZW50IHwgTWVkaWFRdWVyeUxpc3QgfCBXaW5kb3csXG5cdFR5cGUgZXh0ZW5kcyBUYXJnZXQgZXh0ZW5kcyBEb2N1bWVudFxuXHRcdD8ga2V5b2YgRG9jdW1lbnRFdmVudE1hcFxuXHRcdDogVGFyZ2V0IGV4dGVuZHMgSFRNTEVsZW1lbnRcblx0XHRcdD8ga2V5b2YgSFRNTEVsZW1lbnRFdmVudE1hcFxuXHRcdFx0OiBUYXJnZXQgZXh0ZW5kcyBNZWRpYVF1ZXJ5TGlzdFxuXHRcdFx0XHQ/IGtleW9mIE1lZGlhUXVlcnlMaXN0RXZlbnRNYXBcblx0XHRcdFx0OiBUYXJnZXQgZXh0ZW5kcyBXaW5kb3dcblx0XHRcdFx0XHQ/IGtleW9mIFdpbmRvd0V2ZW50TWFwXG5cdFx0XHRcdFx0OiBrZXlvZiBHbG9iYWxFdmVudEhhbmRsZXJzRXZlbnRNYXAsXG5cdExpc3RlbmVyIGV4dGVuZHMgVGFyZ2V0IGV4dGVuZHMgRG9jdW1lbnRcblx0XHQ/IFR5cGUgZXh0ZW5kcyBrZXlvZiBEb2N1bWVudEV2ZW50TWFwXG5cdFx0XHQ/ICh0aGlzOiBUYXJnZXQsIGV2ZW50OiBEb2N1bWVudEV2ZW50TWFwW1R5cGVdKSA9PiB1bmtub3duXG5cdFx0XHQ6ICh0aGlzOiBUYXJnZXQsIGV2ZW50OiBFdmVudCkgPT4gdW5rbm93blxuXHRcdDogVGFyZ2V0IGV4dGVuZHMgSFRNTEVsZW1lbnRcblx0XHRcdD8gVHlwZSBleHRlbmRzIGtleW9mIEhUTUxFbGVtZW50RXZlbnRNYXBcblx0XHRcdFx0PyAodGhpczogVGFyZ2V0LCBldmVudDogSFRNTEVsZW1lbnRFdmVudE1hcFtUeXBlXSkgPT4gdW5rbm93blxuXHRcdFx0XHQ6ICh0aGlzOiBUYXJnZXQsIGV2ZW50OiBFdmVudCkgPT4gdW5rbm93blxuXHRcdFx0OiBUYXJnZXQgZXh0ZW5kcyBFbGVtZW50XG5cdFx0XHRcdD8gVHlwZSBleHRlbmRzIGtleW9mIEVsZW1lbnRFdmVudE1hcFxuXHRcdFx0XHRcdD8gKHRoaXM6IFRhcmdldCwgZXZlbnQ6IEVsZW1lbnRFdmVudE1hcFtUeXBlXSkgPT4gdW5rbm93blxuXHRcdFx0XHRcdDogKHRoaXM6IFRhcmdldCwgZXZlbnQ6IEV2ZW50KSA9PiB1bmtub3duXG5cdFx0XHRcdDogVGFyZ2V0IGV4dGVuZHMgTWVkaWFRdWVyeUxpc3Rcblx0XHRcdFx0XHQ/IFR5cGUgZXh0ZW5kcyBrZXlvZiBNZWRpYVF1ZXJ5TGlzdEV2ZW50TWFwXG5cdFx0XHRcdFx0XHQ/ICh0aGlzOiBUYXJnZXQsIGV2ZW50OiBNZWRpYVF1ZXJ5TGlzdEV2ZW50TWFwW1R5cGVdKSA9PiB1bmtub3duXG5cdFx0XHRcdFx0XHQ6ICh0aGlzOiBUYXJnZXQsIGV2ZW50OiBFdmVudCkgPT4gdW5rbm93blxuXHRcdFx0XHRcdDogVGFyZ2V0IGV4dGVuZHMgV2luZG93XG5cdFx0XHRcdFx0XHQ/IFR5cGUgZXh0ZW5kcyBrZXlvZiBXaW5kb3dFdmVudE1hcFxuXHRcdFx0XHRcdFx0XHQ/ICh0aGlzOiBUYXJnZXQsIGV2ZW50OiBXaW5kb3dFdmVudE1hcFtUeXBlXSkgPT4gdW5rbm93blxuXHRcdFx0XHRcdFx0XHQ6ICh0aGlzOiBUYXJnZXQsIGV2ZW50OiBFdmVudCkgPT4gdW5rbm93blxuXHRcdFx0XHRcdFx0OiAodGhpczogVGFyZ2V0LCBldmVudDogRXZlbnQpID0+IHVua25vd24sXG4+KHtcblx0dGFyZ2V0LFxuXHR0eXBlLFxuXHRsaXN0ZW5lcixcblx0b3B0aW9ucyxcbn06IHtcblx0dGFyZ2V0OiBUYXJnZXQ7XG5cdHR5cGU6IFR5cGU7XG5cdGxpc3RlbmVyOiBMaXN0ZW5lcjtcblx0b3B0aW9ucz86IEFkZEV2ZW50TGlzdGVuZXJPcHRpb25zO1xufSkgPT4ge1xuXHRyZW1vdmU6ICgpID0+IHZvaWQ7XG59O1xuXG5jb25zdCBhZGRFdmVudExpc3RlbmVyV2l0aFJlbW92ZXI6IEFkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3ZlciA9ICh7dGFyZ2V0LCB0eXBlLCBsaXN0ZW5lciwgb3B0aW9ucyA9IHt9fSkgPT4ge1xuXHR0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lciBhcyBFdmVudExpc3RlbmVyT3JFdmVudExpc3RlbmVyT2JqZWN0LCBvcHRpb25zKTtcblx0cmV0dXJuIHtcblx0XHRyZW1vdmU6ICgpOiB2b2lkID0+IHtcblx0XHRcdHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyIGFzIEV2ZW50TGlzdGVuZXJPckV2ZW50TGlzdGVuZXJPYmplY3QsIG9wdGlvbnMpO1xuXHRcdH0sXG5cdH07XG59O1xuXG5leHBvcnQge3R5cGUgQWRkRXZlbnRMaXN0ZW5lcldpdGhSZW1vdmVyLCBhZGRFdmVudExpc3RlbmVyV2l0aFJlbW92ZXJ9O1xuIiwgInR5cGUgQ2hhbmdlT3BhY2l0eVdoZW5Nb3VzZUVudGVyT3JMZWF2ZSA9IChldmVudDogTW91c2VFdmVudCB8IEpRdWVyeS5UcmlnZ2VyZWRFdmVudCwgb3BhY2l0eT86IG51bWJlcikgPT4gdm9pZDtcblxuY29uc3QgY2hhbmdlT3BhY2l0eVdoZW5Nb3VzZUVudGVyT3JMZWF2ZTogQ2hhbmdlT3BhY2l0eVdoZW5Nb3VzZUVudGVyT3JMZWF2ZSA9IChldmVudCwgb3BhY2l0eSA9IDAuNykgPT4ge1xuXHQoZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MRWxlbWVudCkuc3R5bGUub3BhY2l0eSA9IGV2ZW50LnR5cGUgPT09ICdtb3VzZWVudGVyJyA/ICcxJyA6IG9wYWNpdHkudG9TdHJpbmcoKTtcbn07XG5cbmV4cG9ydCB7dHlwZSBDaGFuZ2VPcGFjaXR5V2hlbk1vdXNlRW50ZXJPckxlYXZlLCBjaGFuZ2VPcGFjaXR5V2hlbk1vdXNlRW50ZXJPckxlYXZlfTtcbiIsICJ0eXBlIENoZWNrQTExeUNvbmZpcm1LZXkgPSAoZXZlbnQ6IEtleWJvYXJkRXZlbnQgfCBNb3VzZUV2ZW50IHwgSlF1ZXJ5LkNsaWNrRXZlbnQgfCBKUXVlcnkuS2V5RG93bkV2ZW50KSA9PiBib29sZWFuO1xuXG5jb25zdCBjaGVja0ExMXlDb25maXJtS2V5OiBDaGVja0ExMXlDb25maXJtS2V5ID0gKGV2ZW50KTogYm9vbGVhbiA9PiB7XG5cdGlmIChbJ2NsaWNrJywgJ2tleWRvd24nXS5pbmNsdWRlcyhldmVudC50eXBlKSkge1xuXHRcdGlmIChldmVudC50eXBlID09PSAna2V5ZG93bicpIHtcblx0XHRcdHJldHVybiBbJ0VudGVyJywgJyAnXS5pbmNsdWRlcygoZXZlbnQgYXMgS2V5Ym9hcmRFdmVudCkua2V5KTtcblx0XHR9XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblx0cmV0dXJuIGZhbHNlO1xufTtcblxuZXhwb3J0IHt0eXBlIENoZWNrQTExeUNvbmZpcm1LZXksIGNoZWNrQTExeUNvbmZpcm1LZXl9O1xuIiwgInR5cGUgR2VuZXJhdGVBcnJheSA9IHR5cGVvZiBnZW5lcmF0ZUFycmF5O1xuXG5mdW5jdGlvbiBnZW5lcmF0ZUFycmF5PFQgZXh0ZW5kcyBbXT4oLi4uYXJnczogKFQgfCBUW10pW10pOiBUW107XG5mdW5jdGlvbiBnZW5lcmF0ZUFycmF5PFQgZXh0ZW5kcyBOb2RlTGlzdD4oLi4uYXJnczogKFQgfCBUW10pW10pOiBOb2RlW107XG5mdW5jdGlvbiBnZW5lcmF0ZUFycmF5PFQgPSB1bmtub3duPiguLi5hcmdzOiAoVCB8IFRbXSlbXSk6IFRbXTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLXN0eWxlXG5mdW5jdGlvbiBnZW5lcmF0ZUFycmF5PFQ+KC4uLmFyZ3M6IChUIHwgVFtdKVtdKTogVFtdIHtcblx0cmV0dXJuIGFyZ3MuZmxhdE1hcCgoYXJnKSA9PiB7XG5cdFx0aWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuXHRcdFx0cmV0dXJuIGFyZztcblx0XHR9XG5cblx0XHRpZiAoYXJnIGluc3RhbmNlb2YgTm9kZUxpc3QpIHtcblx0XHRcdHJldHVybiBbLi4uYXJnXSBhcyBUO1xuXHRcdH1cblxuXHRcdHJldHVybiBbYXJnXTtcblx0fSk7XG59XG5cbmV4cG9ydCB7dHlwZSBHZW5lcmF0ZUFycmF5LCBnZW5lcmF0ZUFycmF5fTtcbiIsICJ0eXBlIEluaXRNd0FwaSA9IHR5cGVvZiBpbml0TXdBcGk7XG5cbi8qKlxuICogQHJlcXVpcmVzIG1lZGlhd2lraS5hcGlcbiAqIEBwYXJhbSB7c3RyaW5nfSBbdXNlckFnZW50XVxuICogQHBhcmFtIHtzdHJpbmd9IFthcGlVcmldXG4gKiBAcmV0dXJuIHttdy5BcGl8bXcuRm9yZWlnbkFwaX1cbiAqL1xuZnVuY3Rpb24gaW5pdE13QXBpKHVzZXJBZ2VudD86IHN0cmluZyk6IG13LkFwaTtcbmZ1bmN0aW9uIGluaXRNd0FwaSh1c2VyQWdlbnQ6IHN0cmluZywgYXBpVXJpOiBzdHJpbmcpOiBtdy5Gb3JlaWduQXBpO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtc3R5bGVcbmZ1bmN0aW9uIGluaXRNd0FwaSh1c2VyQWdlbnQ/OiBzdHJpbmcsIGFwaVVyaT86IHN0cmluZyk6IG13LkFwaSB8IG13LkZvcmVpZ25BcGkge1xuXHRjb25zdCBhcGlPcHRpb25zID0ge1xuXHRcdGFqYXg6IHtcblx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0J0FwaS1Vc2VyLUFnZW50JzogdXNlckFnZW50ID8gYEZ1cnJ5V2lraS8xLjEgKCR7dXNlckFnZW50fSlgIDogJ0Z1cnJ5V2lraS8xLjEnLFxuXHRcdFx0fSxcblx0XHR9LFxuXHR9O1xuXG5cdGlmIChhcGlVcmkpIHtcblx0XHRyZXR1cm4gbmV3IG13LkZvcmVpZ25BcGkoYXBpVXJpLCBhcGlPcHRpb25zKTtcblx0fVxuXG5cdHJldHVybiBuZXcgbXcuQXBpKGFwaU9wdGlvbnMpO1xufVxuXG5leHBvcnQge3R5cGUgSW5pdE13QXBpLCBpbml0TXdBcGl9O1xuIiwgInR5cGUgVW5pcXVlQXJyYXkgPSB0eXBlb2YgdW5pcXVlQXJyYXk7XG5cbmNvbnN0IHVuaXF1ZUFycmF5ID0gZnVuY3Rpb24gdW5pcXVlQXJyYXk8VD4oYXJnczogVFtdKTogVFtdIHtcblx0LyoqIVxuXHQgKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQ0MtQlktU0EtNC4wXG5cdCAqXG5cdCAqIEBzb3VyY2Uge0BsaW5rIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzkyMjk2NDUvcmVtb3ZlLWR1cGxpY2F0ZS12YWx1ZXMtZnJvbS1qcy1hcnJheS85MjI5ODJ9XG5cdCAqIEBsaWNlbnNlIENDLUJZLVNBLTQuMFxuXHQgKi9cblx0Y29uc3QgcmVzdWx0OiB0eXBlb2YgYXJncyA9IFtdO1xuXHRmb3IgKGNvbnN0IGl0ZW0gb2YgYXJncykge1xuXHRcdGlmICghcmVzdWx0LmluY2x1ZGVzKGl0ZW0pKSB7XG5cdFx0XHRyZXN1bHRbcmVzdWx0Lmxlbmd0aF0gPSBpdGVtOyAvLyBSZXBsYWNlIEFycmF5I3B1c2ggdG8gYXZvaWQgY29yZS1qcyBwb2x5ZmlsbGluZ1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0IHt0eXBlIFVuaXF1ZUFycmF5LCB1bmlxdWVBcnJheX07XG4iLCAiaW1wb3J0IHtnZW5lcmF0ZUFycmF5fSBmcm9tICcuL2dlbmVyYXRlQXJyYXknO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJy4vaW5pdE13QXBpJztcbmltcG9ydCB7dW5pcXVlQXJyYXl9IGZyb20gJy4vdW5pcXVlQXJyYXknO1xuXG50eXBlIEJvb2xlYW4gPSAnMCcgfCAnMScgfCAwIHwgMTtcbnR5cGUgQ2hlY2tEZXBlbmRlbmNpZXMgPSB0eXBlb2YgY2hlY2tEZXBlbmRlbmNpZXM7XG5cbmZ1bmN0aW9uIGNoZWNrRGVwZW5kZW5jaWVzKGdhZGdldE5hbWVzOiBzdHJpbmcgfCBzdHJpbmdbXSk6IFByb21pc2U8dm9pZD47XG5mdW5jdGlvbiBjaGVja0RlcGVuZGVuY2llcyhnYWRnZXROYW1lczogc3RyaW5nLCBvcHRpb246IEJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+O1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtc3R5bGVcbmFzeW5jIGZ1bmN0aW9uIGNoZWNrRGVwZW5kZW5jaWVzKGdhZGdldE5hbWVzOiBzdHJpbmcgfCBzdHJpbmdbXSwgb3B0aW9uPzogQm9vbGVhbik6IFByb21pc2U8dm9pZD4ge1xuXHRjb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaSgnVXRpbC1DaGVja0RlcGVuZGVuY2llcycpO1xuXHRjb25zdCBnYWRnZXRzID0gdW5pcXVlQXJyYXkoZ2VuZXJhdGVBcnJheShnYWRnZXROYW1lcykpO1xuXHRvcHRpb24gfHw9IDE7XG5cblx0Zm9yIChjb25zdCBnYWRnZXQgb2YgZ2FkZ2V0cykge1xuXHRcdGlmIChcblx0XHRcdChvcHRpb24gPT09ICcwJyAmJiBtdy51c2VyLm9wdGlvbnMuZ2V0KGBnYWRnZXQtJHtnYWRnZXR9YCkpIHx8XG5cdFx0XHQob3B0aW9uID09PSAnMScgJiYgIW13LnVzZXIub3B0aW9ucy5nZXQoYGdhZGdldC0ke2dhZGdldH1gKSlcblx0XHQpIHtcblx0XHRcdGF3YWl0IGFwaS5wb3N0V2l0aEVkaXRUb2tlbih7XG5cdFx0XHRcdGFjdGlvbjogJ29wdGlvbnMnLFxuXHRcdFx0XHRjaGFuZ2U6IGBnYWRnZXQtJHtnYWRnZXR9PSR7b3B0aW9ufWAsXG5cdFx0XHR9KTtcblx0XHRcdGF3YWl0IG13LmxvYWRlci51c2luZyhgZXh0LmdhZGdldC4ke2dhZGdldH1gKTtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IHt0eXBlIENoZWNrRGVwZW5kZW5jaWVzLCBjaGVja0RlcGVuZGVuY2llc307XG4iLCAidHlwZSBEZWxheSA9IChtczogbnVtYmVyKSA9PiBQcm9taXNlPHZvaWQ+O1xuXG5jb25zdCBkZWxheTogRGVsYXkgPSAobXMpID0+IHtcblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlOiAoKSA9PiB2b2lkKTogdm9pZCA9PiB7XG5cdFx0c2V0VGltZW91dChyZXNvbHZlLCBtcyk7XG5cdH0pO1xufTtcblxuZXhwb3J0IHt0eXBlIERlbGF5LCBkZWxheX07XG4iLCAiaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJy4vaW5pdE13QXBpJztcbmltcG9ydCB7dW5pcXVlQXJyYXl9IGZyb20gJy4vdW5pcXVlQXJyYXknO1xuXG50eXBlIEZpbmRWYXJpYW50cyA9IHR5cGVvZiBmaW5kVmFyaWFudHM7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLXN0eWxlXG5hc3luYyBmdW5jdGlvbiBmaW5kVmFyaWFudHModGV4dDogc3RyaW5nKSB7XG5cdGNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKCdVdGlsLUZpbmRWYXJpYW50cycpO1xuXG5cdGNvbnN0IFZBUklBTlRTID0gWyd6aC1oYW5zJywgJ3poLWhhbnQnLCAnemgtY24nLCAnemgtaGsnLCAnemgtbW8nLCAnemgtc2cnLCAnemgtbXknLCAnemgtdHcnXTtcblxuXHRjb25zdCBhbGxWYXJpYW50czogc3RyaW5nW10gPSBbXTtcblxuXHRjb25zdCBwYXJhbXM6IEFwaVBhcnNlUGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ3BhcnNlJyxcblx0XHRjb250ZW50bW9kZWw6ICd3aWtpdGV4dCcsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdHByb3A6IFsnZGlzcGxheXRpdGxlJ10sXG5cdFx0dGl0bGU6ICd0ZW1wJyxcblx0XHR0ZXh0LFxuXHR9O1xuXG5cdGZvciAoY29uc3QgdmFyaWFudCBvZiBWQVJJQU5UUykge1xuXHRcdHBhcmFtcy51c2VsYW5nID0gdmFyaWFudDtcblx0XHRwYXJhbXMudmFyaWFudCA9IHZhcmlhbnQ7XG5cdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkucG9zdChwYXJhbXMpO1xuXG5cdFx0Y29uc3QgZGlzcGxheXRpdGxlID0gcmVzcG9uc2U/LlsncXVlcnknXT8uZGlzcGxheXRpdGxlIGFzIHN0cmluZztcblx0XHRjb25zdCB2YXJpYW50RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ZhcmlhbnQnKTtcblx0XHR2YXJpYW50RWxlbWVudC5pbm5lckhUTUwgPSBkaXNwbGF5dGl0bGU7XG5cblx0XHRpZiAodmFyaWFudEVsZW1lbnQudGV4dENvbnRlbnQpIHtcblx0XHRcdGFsbFZhcmlhbnRzW2FsbFZhcmlhbnRzLmxlbmd0aF0gPSB2YXJpYW50RWxlbWVudC50ZXh0Q29udGVudDtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdW5pcXVlQXJyYXkoYWxsVmFyaWFudHMpO1xufVxuXG5leHBvcnQge3R5cGUgRmluZFZhcmlhbnRzLCBmaW5kVmFyaWFudHN9O1xuIiwgInR5cGUgR2VuZXJhdGVTdmdEYXRhVXJsID0gKHN2Zzogc3RyaW5nKSA9PiBzdHJpbmc7XG5cbmNvbnN0IGdlbmVyYXRlU3ZnRGF0YVVybDogR2VuZXJhdGVTdmdEYXRhVXJsID0gKHN2ZykgPT4ge1xuXHQvKiohXG5cdCAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBNSVRcblx0ICpcblx0ICogQHNvdXJjZSBzdmctdG8tZGF0YS11cmkuanMge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9oZXlhbGxhbi9zdmctdG8tZGF0YS11cmkvfVxuXHQgKiBAYXV0aG9yIEFsbGFuIE1vcmVub1xuXHQgKiBAbGljZW5zZSBNSVQge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9oZXlhbGxhbi9zdmctdG8tZGF0YS11cmkvYmxvYi9tYXN0ZXIvTElDRU5TRX1cblx0ICpcblx0ICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHQgKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdCAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0ICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHQgKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0ICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblx0ICpcblx0ICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdCAqIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cdCAqXG5cdCAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0ICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdCAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHQgKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdCAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdCAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdCAqIFNPRlRXQVJFLlxuXHQgKi9cblx0c3ZnID0gc3ZnLnRyaW0oKTtcblx0Ly8gcmVtb3ZlIHhtbCwgZG9jdHlwZSwgZ2VuZXJhdG9yLi4uXG5cdHN2ZyA9IHN2Zy5zbGljZShzdmcuaW5kZXhPZignPHN2ZycpKTtcblx0Ly8gc29mdCB2YWxpZGF0ZVxuXHRpZiAoIXN2Zy5zdGFydHNXaXRoKCc8c3ZnJykgfHwgIXN2Zy5lbmRzV2l0aCgnc3ZnPicpKSB7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cdC8vIGFkZCBuYW1lc3BhY2UgaWYgbmVjZXNzYXJ5XG5cdGlmICghc3ZnLmluY2x1ZGVzKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycpKSB7XG5cdFx0c3ZnID0gc3ZnLnJlcGxhY2UoLzxzdmcvZywgXCI8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcIik7XG5cdH1cblx0Ly8gcmVtb3ZlIGNvbW1lbnRzXG5cdHN2ZyA9IHN2Zy5yZXBsYWNlKC88IS0tLnsxLH0tLT4vZywgJycpO1xuXHQvLyByZW1vdmUgdW5uZWNlc3NhcnkgYXR0cmlidXRlc1xuXHRzdmcgPSBzdmcucmVwbGFjZSgvdmVyc2lvbj1bXCInXSguezAsfT8pW1wiJ10oPz1bXFxzPl0pL2csICcnKTtcblx0Ly8gcmVwbGFjZSBuZXN0ZWQgcXVvdGVzXG5cdHN2ZyA9IHN2Zy5yZXBsYWNlKC9cIicoLnsxLH0pJ1wiL2csIFwiJyQxJ1wiKTtcblx0Ly8gcmVwbGFjZSBkb3VibGUgcXVvdGVzXG5cdHN2ZyA9IHN2Zy5yZXBsYWNlKC9cIi9nLCBcIidcIik7XG5cdC8vIHJlbW92ZSBlbXB0eSBzcGFjZXMgYmV0d2VlbiB0YWdzXG5cdHN2ZyA9IHN2Zy5yZXBsYWNlKC8+XFxzezEsfTwvZywgJz48Jyk7XG5cdC8vIHJlbW92ZSBkdXBsaWNhdGUgc3BhY2VzXG5cdHN2ZyA9IHN2Zy5yZXBsYWNlKC9cXHN7Mix9L2csICcgJyk7XG5cdC8vIHRyaW0gYWdhaW5cblx0c3ZnID0gc3ZnLnRyaW0oKTtcblx0Ly8gc29mdCB2YWxpZGF0ZSBhZ2FpblxuXHRpZiAoIXN2Zy5zdGFydHNXaXRoKCc8c3ZnJykgfHwgIXN2Zy5lbmRzV2l0aCgnc3ZnPicpKSB7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cdC8vIHJlcGxhY2UgYW1wZXJzYW5kXG5cdHN2ZyA9IHN2Zy5yZXBsYWNlKC8mL2csICcmYW1wOycpO1xuXHQvLyBlbmNvZGUgb25seSB1bnNhZmUgc3ltYm9sc1xuXHRzdmcgPSBzdmcucmVwbGFjZSgvWyUjPD4/W1xcXFxcXF1eYHt8fV0vZywgZW5jb2RlVVJJQ29tcG9uZW50KTtcblx0Ly8gYnVpbGQgZGF0YSB1cmlcblx0c3ZnID0gYGRhdGE6aW1hZ2Uvc3ZnK3htbCwke3N2Z31gO1xuXHQvLyBvaywgc2hpcCBpdCFcblx0cmV0dXJuIHN2Zztcbn07XG5cbmV4cG9ydCB7dHlwZSBHZW5lcmF0ZVN2Z0RhdGFVcmwsIGdlbmVyYXRlU3ZnRGF0YVVybH07XG4iLCAidHlwZSBHZXRCb2R5ID0gKCkgPT4gSlF1ZXJ5LlRoZW5hYmxlPEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+PjtcblxuY29uc3QgZ2V0Qm9keSA9ICgpID0+IHtcblx0cmV0dXJuICQucmVhZHkudGhlbigoKTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4gPT4ge1xuXHRcdGNvbnN0ICRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50PiA9ICQoJ2JvZHknKTtcblxuXHRcdHJldHVybiAkYm9keTtcblx0fSk7XG59O1xuXG5leHBvcnQge3R5cGUgR2V0Qm9keSwgZ2V0Qm9keX07XG4iLCAidHlwZSBJc1ZhbGlkS2V5ID0gdHlwZW9mIGlzVmFsaWRLZXk7XG5cbmNvbnN0IGlzVmFsaWRLZXkgPSAob2JqZWN0OiBvYmplY3QsIGtleTogc3RyaW5nIHwgbnVtYmVyIHwgc3ltYm9sKToga2V5IGlzIGtleW9mIHR5cGVvZiBvYmplY3QgPT4ge1xuXHRyZXR1cm4ga2V5IGluIG9iamVjdDtcbn07XG5cbmV4cG9ydCB7dHlwZSBJc1ZhbGlkS2V5LCBpc1ZhbGlkS2V5fTtcbiIsICJ0eXBlIENsYXNzTXdVcmkgPSB0eXBlb2YgTXdVcmk7XG5cbmNsYXNzIE13VXJpIGV4dGVuZHMgVVJMIHtcblx0ZXh0ZW5kKG9iamVjdDoge1trZXk6IHN0cmluZ106IHN0cmluZ30pIHtcblx0XHRmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhvYmplY3QpKSB7XG5cdFx0XHR0aGlzLnNlYXJjaFBhcmFtcy5zZXQoa2V5LCB2YWx1ZSk7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cdGdldFJlbGF0aXZlUGF0aCgpIHtcblx0XHRyZXR1cm4gdGhpcy5wYXRobmFtZSArIHRoaXMuc2VhcmNoICsgdGhpcy5oYXNoO1xuXHR9XG59XG5cbmV4cG9ydCB7dHlwZSBDbGFzc013VXJpLCBNd1VyaX07XG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuSlNYJztcblxudHlwZSBPb3VpQ29uZmlybVdpdGhTdHlsZSA9IChtZXNzYWdlOiBzdHJpbmcpID0+IEpRdWVyeS5Qcm9taXNlPGJvb2xlYW4+O1xuXG4vKipcbiAqIEByZXF1aXJlcyBvb2pzLXVpLXdpbmRvd3NcbiAqIEBwYXJhbSB7c3RyaW5nfSBbbWVzc2FnZV1cbiAqIEByZXR1cm4ge0pRdWVyeS5Qcm9taXNlPGJvb2xlYW4+fVxuICovXG5jb25zdCBvb3VpQ29uZmlybVdpdGhTdHlsZTogT291aUNvbmZpcm1XaXRoU3R5bGUgPSAobWVzc2FnZSkgPT5cblx0T08udWlcblx0XHQuY29uZmlybShcblx0XHRcdCQoXG5cdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJvby11aS13aW5kb3ctZm9vdFwiXG5cdFx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHRcdGJvcmRlcjogJy4xcmVtIHNvbGlkICMwNjQ1YWQnLFxuXHRcdFx0XHRcdFx0ZGlzcGxheTogJ2ZsZXgnLFxuXHRcdFx0XHRcdFx0anVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1ldmVubHknLFxuXHRcdFx0XHRcdH19XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8c3BhblxuXHRcdFx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHRcdFx0Zm9udFNpemU6ICcxLjJyZW0nLFxuXHRcdFx0XHRcdFx0XHRmb250V2VpZ2h0OiAnNTAwJyxcblx0XHRcdFx0XHRcdFx0bGluZUhlaWdodDogJzEuOCcsXG5cdFx0XHRcdFx0XHRcdHBhZGRpbmc6ICcuNGVtIDAnLFxuXHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHR7bWVzc2FnZX1cblx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KSBhcyBKUXVlcnlcblx0XHQpXG5cdFx0LnRoZW4oKGlzQ29uZmlybTogYm9vbGVhbik6IGJvb2xlYW4gPT4gaXNDb25maXJtKTtcblxuZXhwb3J0IHt0eXBlIE9vdWlDb25maXJtV2l0aFN0eWxlLCBvb3VpQ29uZmlybVdpdGhTdHlsZX07XG4iLCAiaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJy4vaW5pdE13QXBpJztcblxudHlwZSBRdWVyeUdsb2JhbFVzZXJHcm91cHMgPSB0eXBlb2YgcXVlcnlHbG9iYWxVc2VyR3JvdXBzO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1zdHlsZVxuYXN5bmMgZnVuY3Rpb24gcXVlcnlHbG9iYWxVc2VyR3JvdXBzKGd1aXVzZXI6IHN0cmluZykge1xuXHRjb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaSgnVXRpbC1RdWVyeUdsb2JhbFVzZXJHcm91cHMnKTtcblxuXHRjb25zdCBDQUNIRV9LRVlfUFJFRklYID0gJ2V4dC5nYWRnZXQuVXRpbF9xdWVyeUdsb2JhbFVzZXJHcm91cHMtJztcblxuXHRsZXQgZ3JvdXBzOiBzdHJpbmdbXSA9IFtdO1xuXG5cdC8vIFF1ZXJ5IGZyb20gY2FjaGVcblx0Ly8gQ2hlY2sgaWYgdXNlciBncm91cCBpbmZvIGlzIGNhY2hlZCBpbiBMb2NhbFN0b3JhZ2Vcblx0Ly8gSWYgY2FjaGVkLCBnZXQgdGhlbSBmcm9tIExvY2FsU3RvcmFnZVxuXHRpZiAobXcuc3RvcmFnZS5nZXRPYmplY3QoQ0FDSEVfS0VZX1BSRUZJWCArIGd1aXVzZXIpKSB7XG5cdFx0Z3JvdXBzID0gbXcuc3RvcmFnZS5nZXRPYmplY3QoQ0FDSEVfS0VZX1BSRUZJWCArIGd1aXVzZXIpIGFzIHN0cmluZ1tdO1xuXHRcdC8vIFJlbW92ZSAnKicgZnJvbSBncm91cHNcblx0XHRncm91cHMgPSBncm91cHMuZmlsdGVyKChlbGVtZW50KSA9PiB7XG5cdFx0XHRyZXR1cm4gZWxlbWVudCAhPT0gJyonO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdC8vIFF1ZXJ5IGZyb20gd2ViXG5cdFx0Ly8gUXVlcnkgcGFyYW1zXG5cdFx0Y29uc3QgcGFyYW1zID0ge1xuXHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRtZXRhOiAnZ2xvYmFsdXNlcmluZm8nLFxuXHRcdFx0Z3VpdXNlcixcblx0XHRcdGd1aXByb3A6ICdncm91cHMnLFxuXHRcdFx0c21heGFnZTogNjAwLFxuXHRcdFx0bWF4YWdlOiA2MDAsXG5cdFx0fTtcblx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5nZXQocGFyYW1zKTtcblxuXHRcdC8vIERlLWNvbnN0cnVjdCB0aGUgcmVzcG9uc2Ugb2JqZWN0XG5cdFx0Y29uc3QgcXVlcnkgPSByZXNwb25zZVsncXVlcnknXSBhcyB7XG5cdFx0XHRnbG9iYWx1c2VyaW5mbzoge2dyb3Vwczogc3RyaW5nW107IG5hbWU6IHN0cmluZ307XG5cdFx0fTtcblxuXHRcdGlmIChxdWVyeT8uZ2xvYmFsdXNlcmluZm8pIHtcblx0XHRcdGdyb3VwcyA9IHF1ZXJ5Lmdsb2JhbHVzZXJpbmZvPy5ncm91cHMgPz8gW107XG5cdFx0XHQvLyBSZW1vdmUgJyonIGZyb20gZ3JvdXBzXG5cdFx0XHRncm91cHMgPSBncm91cHMuZmlsdGVyKChlbGVtZW50KSA9PiB7XG5cdFx0XHRcdHJldHVybiBlbGVtZW50ICE9PSAnKic7XG5cdFx0XHR9KTtcblxuXHRcdFx0Ly8gQ2FjaGUgZm9yIDEgaG91clxuXHRcdFx0bXcuc3RvcmFnZS5zZXRPYmplY3QoQ0FDSEVfS0VZX1BSRUZJWCArIGd1aXVzZXIsIGdyb3VwcywgNjAgKiA2MCk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHtxdWVyeToge2dsb2JhbHVzZXJpbmZvOiB7bmFtZTogZ3VpdXNlciwgZ3JvdXBzfX19O1xufVxuXG5leHBvcnQge3R5cGUgUXVlcnlHbG9iYWxVc2VyR3JvdXBzLCBxdWVyeUdsb2JhbFVzZXJHcm91cHN9O1xuIiwgImltcG9ydCB7aW5pdE13QXBpfSBmcm9tICcuL2luaXRNd0FwaSc7XG5cbnR5cGUgUXVlcnlVc2VyR3JvdXBzID0gdHlwZW9mIHF1ZXJ5VXNlckdyb3VwcztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtc3R5bGVcbmFzeW5jIGZ1bmN0aW9uIHF1ZXJ5VXNlckdyb3Vwcyh1c2Vyczogc3RyaW5nW10pIHtcblx0Y29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoJ1V0aWwtUXVlcnlVc2VyR3JvdXBzJyk7XG5cblx0Y29uc3QgQ0FDSEVfS0VZX1BSRUZJWCA9ICdleHQuZ2FkZ2V0LlV0aWxfcXVlcnlVc2VyR3JvdXBzLSc7XG5cblx0Y29uc3QgY2FjaGVkUXVlcnlVc2Vyczoge2dyb3Vwczogc3RyaW5nW107IG5hbWU6IHN0cmluZ31bXSA9IFtdO1xuXG5cdC8vIFF1ZXJ5IGZyb20gY2FjaGVcblx0Zm9yIChjb25zdCB1c2VyIG9mIHVzZXJzKSB7XG5cdFx0Ly8gQ2hlY2sgaWYgdXNlciBncm91cCBpbmZvIGlzIGNhY2hlZCBpbiBMb2NhbFN0b3JhZ2Vcblx0XHQvLyBJZiBjYWNoZWQsIGdldCB0aGVtIGZyb20gTG9jYWxTdG9yYWdlXG5cdFx0aWYgKG13LnN0b3JhZ2UuZ2V0T2JqZWN0KENBQ0hFX0tFWV9QUkVGSVggKyB1c2VyKSkge1xuXHRcdFx0bGV0IGdyb3VwcyA9IG13LnN0b3JhZ2UuZ2V0T2JqZWN0KENBQ0hFX0tFWV9QUkVGSVggKyB1c2VyKSBhcyBzdHJpbmdbXTtcblx0XHRcdC8vIFJlbW92ZSAnKicgZnJvbSBncm91cHNcblx0XHRcdGdyb3VwcyA9IGdyb3Vwcy5maWx0ZXIoKGVsZW1lbnQpID0+IHtcblx0XHRcdFx0cmV0dXJuIGVsZW1lbnQgIT09ICcqJztcblx0XHRcdH0pO1xuXHRcdFx0Ly8gU3RvcmUgaW50byBhcnJheVxuXHRcdFx0Y2FjaGVkUXVlcnlVc2Vyc1tjYWNoZWRRdWVyeVVzZXJzLmxlbmd0aF0gPSB7bmFtZTogdXNlciwgZ3JvdXBzfTtcblx0XHR9XG5cdH1cblxuXHQvLyBRdWVyeSBmcm9tIHdlYlxuXHRjb25zdCB1c3VzZXJzID0gdXNlcnMuZmlsdGVyKCh2KSA9PiB7XG5cdFx0Ly8gUmVtb3ZlIHVzZXIgdGhhdCBoYXZlIGNhY2hlZCB1c2VyIGdyb3VwcyBsb2NhbGx5XG5cdFx0cmV0dXJuICFtdy5zdG9yYWdlLmdldE9iamVjdChDQUNIRV9LRVlfUFJFRklYICsgdik7XG5cdH0pO1xuXG5cdC8vIFF1ZXJ5IHBhcmFtc1xuXHRjb25zdCBwYXJhbXM6IEFwaVF1ZXJ5VXNlcnNQYXJhbXMgPSB7XG5cdFx0dXN1c2Vycyxcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdGxpc3Q6ICd1c2VycycsXG5cdFx0dXNwcm9wOiAnZ3JvdXBzJyxcblx0XHRzbWF4YWdlOiA2MDAsXG5cdFx0bWF4YWdlOiA2MDAsXG5cdH07XG5cdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLmdldChwYXJhbXMpO1xuXG5cdC8vIERlLWNvbnN0cnVjdCB0aGUgcmVzcG9uc2Ugb2JqZWN0XG5cdGNvbnN0IHF1ZXJ5ID0gcmVzcG9uc2VbJ3F1ZXJ5J10gYXMge1xuXHRcdHVzZXJzOiB7Z3JvdXBzOiBzdHJpbmdbXTsgbmFtZTogc3RyaW5nfVtdO1xuXHR9O1xuXHRjb25zdCBxdWVyeVVzZXJzID0gWy4uLihxdWVyeT8udXNlcnMgPz8gW10pLCAuLi5jYWNoZWRRdWVyeVVzZXJzXTtcblxuXHRmb3IgKGNvbnN0IHVzZXIgb2YgcXVlcnlVc2Vycykge1xuXHRcdGlmICh1c2VyPy5ncm91cHMgJiYgdXNlcj8ubmFtZSkge1xuXHRcdFx0bGV0IHtncm91cHN9ID0gdXNlcjtcblx0XHRcdC8vIFJlbW92ZSAnKicgZnJvbSBncm91cHNcblx0XHRcdGdyb3VwcyA9IGdyb3Vwcy5maWx0ZXIoKGVsZW1lbnQpID0+IHtcblx0XHRcdFx0cmV0dXJuIGVsZW1lbnQgIT09ICcqJztcblx0XHRcdH0pO1xuXG5cdFx0XHQvLyBDYWNoZSBmb3IgMSBob3VyXG5cdFx0XHRtdy5zdG9yYWdlLnNldE9iamVjdChDQUNIRV9LRVlfUFJFRklYICsgdXNlci5uYW1lLCBncm91cHMsIDYwICogNjApO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiB7cXVlcnk6IHt1c2VyczogcXVlcnlVc2Vyc319O1xufVxuXG5leHBvcnQge3R5cGUgUXVlcnlVc2VyR3JvdXBzLCBxdWVyeVVzZXJHcm91cHN9O1xuIiwgInR5cGUgU2Nyb2xsVG9wID0gKFxuXHR0YXJnZXRIZWlnaHQ6IG51bWJlciB8IHN0cmluZyxcblx0ZWZmZWN0c09wdGlvbnNPckR1cmF0aW9uPzogSlF1ZXJ5LkVmZmVjdHNPcHRpb25zPEhUTUxFbGVtZW50PiB8IG51bWJlciB8ICdmYXN0JyB8ICdzbG93J1xuKSA9PiB2b2lkO1xuXG5jb25zdCBzY3JvbGxUb3A6IFNjcm9sbFRvcCA9ICh0YXJnZXRIZWlnaHQsIGVmZmVjdHNPcHRpb25zT3JEdXJhdGlvbiA9IHt9KSA9PiB7XG5cdGNvbnN0IG9wdGlvbnM6IEpRdWVyeS5FZmZlY3RzT3B0aW9uczxIVE1MRWxlbWVudD4gPVxuXHRcdHR5cGVvZiBlZmZlY3RzT3B0aW9uc09yRHVyYXRpb24gPT09ICdudW1iZXInIHx8IHR5cGVvZiBlZmZlY3RzT3B0aW9uc09yRHVyYXRpb24gPT09ICdzdHJpbmcnXG5cdFx0XHQ/IHtcblx0XHRcdFx0XHRkdXJhdGlvbjogZWZmZWN0c09wdGlvbnNPckR1cmF0aW9uLFxuXHRcdFx0XHRcdGVhc2luZzogJ2xpbmVhcicsXG5cdFx0XHRcdH1cblx0XHRcdDoge1xuXHRcdFx0XHRcdGR1cmF0aW9uOiAnc2xvdycsXG5cdFx0XHRcdFx0ZWFzaW5nOiAnbGluZWFyJyxcblx0XHRcdFx0XHQuLi5lZmZlY3RzT3B0aW9uc09yRHVyYXRpb24sXG5cdFx0XHRcdH07XG5cdCQoZG9jdW1lbnQpLmZpbmQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKFxuXHRcdHtcblx0XHRcdHNjcm9sbFRvcDogdGFyZ2V0SGVpZ2h0LFxuXHRcdH0sXG5cdFx0b3B0aW9uc1xuXHQpO1xufTtcblxuZXhwb3J0IHt0eXBlIFNjcm9sbFRvcCwgc2Nyb2xsVG9wfTtcbiIsICJpbXBvcnQge2dlbmVyYXRlQXJyYXl9IGZyb20gJy4vZ2VuZXJhdGVBcnJheSc7XG5cbnR5cGUgVXNlcklzSW5Hcm91cCA9IHR5cGVvZiB1c2VySXNJbkdyb3VwO1xuXG5jb25zdCB1c2VySXNJbkdyb3VwID0gKGdyb3Vwczogc3RyaW5nIHwgc3RyaW5nW10pID0+IHtcblx0Y29uc3Qge3dnVXNlckdyb3Vwcywgd2dHbG9iYWxHcm91cHN9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRyZXR1cm4gWy4uLih3Z1VzZXJHcm91cHMgfHwgW10pLCAuLi4oKHdnR2xvYmFsR3JvdXBzIGFzIHN0cmluZ1tdKSB8fCBbXSldLnNvbWUoKGVsZW1lbnQ6IHN0cmluZyk6IGJvb2xlYW4gPT4ge1xuXHRcdHJldHVybiBnZW5lcmF0ZUFycmF5KGdyb3VwcykuaW5jbHVkZXMoZWxlbWVudCk7XG5cdH0pO1xufTtcblxuZXhwb3J0IHt0eXBlIFVzZXJJc0luR3JvdXAsIHVzZXJJc0luR3JvdXB9O1xuIiwgInR5cGUgR2V0V3BTdW1tYXJ5Q29udGVudCA9IHR5cGVvZiBnZXRXcFN1bW1hcnlDb250ZW50O1xudHlwZSBTZXRXcFN1bW1hcnlDb250ZW50ID0gdHlwZW9mIHNldFdwU3VtbWFyeUNvbnRlbnQ7XG5cbmNvbnN0IGdldFdwU3VtbWFyeUNvbnRlbnQgPSAoeyRlZGl0Rm9ybX06IHskZWRpdEZvcm06IEpRdWVyeTxIVE1MRWxlbWVudD59KTogc3RyaW5nID0+IHtcblx0cmV0dXJuICRlZGl0Rm9ybS5maW5kPEhUTUxJbnB1dEVsZW1lbnQ+KCcjd3BTdW1tYXJ5Jyk/LnZhbCgpID8/ICcnO1xufTtcblxuY29uc3Qgc2V0V3BTdW1tYXJ5Q29udGVudCA9ICh7JGVkaXRGb3JtLCBjb250ZW50fTogeyRlZGl0Rm9ybTogSlF1ZXJ5PEhUTUxFbGVtZW50PjsgY29udGVudDogc3RyaW5nfSk6IHZvaWQgPT4ge1xuXHQkZWRpdEZvcm0uZmluZDxIVE1MSW5wdXRFbGVtZW50PignI3dwU3VtbWFyeScpLnZhbChjb250ZW50KTtcbn07XG5cbmV4cG9ydCB7Z2V0V3BTdW1tYXJ5Q29udGVudCwgdHlwZSBHZXRXcFN1bW1hcnlDb250ZW50LCBzZXRXcFN1bW1hcnlDb250ZW50LCB0eXBlIFNldFdwU3VtbWFyeUNvbnRlbnR9O1xuIiwgInR5cGUgR2V0V3BUZXh0Ym94MUNvbnRlbnQgPSB0eXBlb2YgZ2V0V3BUZXh0Ym94MUNvbnRlbnQ7XG50eXBlIFNldFdwVGV4dGJveDFDb250ZW50ID0gdHlwZW9mIHNldFdwVGV4dGJveDFDb250ZW50O1xuXG5jb25zdCBnZXRXcFRleHRib3gxQ29udGVudCA9ICh7JGVkaXRGb3JtfTogeyRlZGl0Rm9ybTogSlF1ZXJ5PEhUTUxFbGVtZW50Pn0pOiBzdHJpbmcgPT4ge1xuXHRyZXR1cm4gJGVkaXRGb3JtLmZpbmQ8SFRNTFRleHRBcmVhRWxlbWVudD4oJyN3cFRleHRib3gxJykudGV4dFNlbGVjdGlvbignZ2V0Q29udGVudHMnKSA/PyAnJztcbn07XG5cbmNvbnN0IHNldFdwVGV4dGJveDFDb250ZW50ID0gKHskZWRpdEZvcm0sIGNvbnRlbnR9OiB7JGVkaXRGb3JtOiBKUXVlcnk8SFRNTEVsZW1lbnQ+OyBjb250ZW50OiBzdHJpbmd9KTogdm9pZCA9PiB7XG5cdCRlZGl0Rm9ybS5maW5kPEhUTUxUZXh0QXJlYUVsZW1lbnQ+KCcjd3BUZXh0Ym94MScpLnRleHRTZWxlY3Rpb24oJ3NldENvbnRlbnRzJywgY29udGVudCk7XG59O1xuXG5leHBvcnQge2dldFdwVGV4dGJveDFDb250ZW50LCB0eXBlIEdldFdwVGV4dGJveDFDb250ZW50LCBzZXRXcFRleHRib3gxQ29udGVudCwgdHlwZSBTZXRXcFRleHRib3gxQ29udGVudH07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLGVBQUEsQ0FBQTtBQUFBQyxTQUFBRCxjQUFBO0VBQUFFLE9BQUFBLE1BQUFBO0VBQUFDLDZCQUFBQSxNQUFBQTtFQUFBQyxvQ0FBQUEsTUFBQUE7RUFBQUMscUJBQUFBLE1BQUFBO0VBQUFDLG1CQUFBQSxNQUFBQTtFQUFBQyxPQUFBQSxNQUFBQTtFQUFBQyxjQUFBQSxNQUFBQTtFQUFBQyxlQUFBQSxNQUFBQTtFQUFBQyxvQkFBQUEsTUFBQUE7RUFBQUMsU0FBQUEsTUFBQUE7RUFBQUMscUJBQUFBLE1BQUFBO0VBQUFDLHNCQUFB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QVVOLEtBQTBCLGFBQWEsRUFBRVksY0FBYyxlQUFlRixPQUFPO0FBQ3hGOyIsCiAgIm5hbWVzIjogWyJVdGlsX2V4cG9ydHMiLCAiX19leHBvcnQiLCAiTXdVcmkiLCAiYWRkRXZlbnRMaXN0ZW5lcldpdGhSZW1vdmVyIiwgImNoYW5nZU9wYWNpdHlXaGVuTW91c2VFbnRlck9yTGVhdmUiLCAiY2hlY2tBMTF5Q29uZmlybUtleSIsICJjaGVja0RlcGVuZGVuY2llcyIsICJkZWxheSIsICJmaW5kVmFyaWFudHMiLCAiZ2VuZXJhdGVBcnJheSIsICJnZW5lcmF0ZVN2Z0RhdGFVcmwiLCAiZ2V0Qm9keSIsICJnZXRXcFN1bW1hcnlDb250ZW50IiwgImdldFdwVGV4dGJveDFDb250ZW50IiwgImluaXRNd0FwaSIsICJpc1ZhbGlkS2V5IiwgIm9vdWlDb25maXJtV2l0aFN0eWxlIiwgInF1ZXJ5R2xvYmFsVXNlckdyb3VwcyIsICJxdWVyeVVzZXJHcm91cHMiLCAic2Nyb2xsVG9wIiwgInNldFdwU3VtbWFyeUNvbnRlbnQiLCAic2V0V3BUZXh0Ym94MUNvbnRlbnQiLCAidW5pcXVlQXJyYXkiLCAidXNlcklzSW5Hcm91cCIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJfX3RvQ29tbW9uSlMiLCAidGFyZ2V0IiwgInR5cGUiLCAibGlzdGVuZXIiLCAib3B0aW9ucyIsICJhZGRFdmVudExpc3RlbmVyIiwgInJlbW92ZSIsICJyZW1vdmVFdmVudExpc3RlbmVyIiwgImV2ZW50IiwgIm9wYWNpdHkiLCAiY3VycmVudFRhcmdldCIsICJzdHlsZSIsICJ0b1N0cmluZyIsICJpbmNsdWRlcyIsICJrZXkiLCAiYXJncyIsICJmbGF0TWFwIiwgImFyZyIsICJBcnJheSIsICJpc0FycmF5IiwgIk5vZGVMaXN0IiwgInVzZXJBZ2VudCIsICJhcGlVcmkiLCAiYXBpT3B0aW9ucyIsICJhamF4IiwgImhlYWRlcnMiLCAiY29uY2F0IiwgIm13IiwgIkZvcmVpZ25BcGkiLCAiQXBpIiwgInVuaXF1ZUFycmF5MiIsICJyZXN1bHQiLCAiX2l0ZXJhdG9yMiIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcDIiLCAicyIsICJuIiwgImRvbmUiLCAiaXRlbSIsICJ2YWx1ZSIsICJsZW5ndGgiLCAiZXJyIiwgImUiLCAiZiIsICJfeCIsICJfeDIiLCAiX2NoZWNrRGVwZW5kZW5jaWVzIiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJnYWRnZXROYW1lcyIsICJvcHRpb24iLCAiYXBpIiwgImdhZGdldHMiLCAiX2l0ZXJhdG9yMyIsICJfc3RlcDMiLCAiZ2FkZ2V0IiwgInVzZXIiLCAiZ2V0IiwgInBvc3RXaXRoRWRpdFRva2VuIiwgImFjdGlvbiIsICJjaGFuZ2UiLCAibG9hZGVyIiwgInVzaW5nIiwgIm1zIiwgIlByb21pc2UiLCAicmVzb2x2ZSIsICJzZXRUaW1lb3V0IiwgIl94MyIsICJfZmluZFZhcmlhbnRzIiwgInRleHQiLCAiVkFSSUFOVFMiLCAiYWxsVmFyaWFudHMiLCAicGFyYW1zIiwgImNvbnRlbnRtb2RlbCIsICJmb3JtYXQiLCAiZm9ybWF0dmVyc2lvbiIsICJwcm9wIiwgInRpdGxlIiwgIl9pMiIsICJfVkFSSUFOVFMiLCAiX3Jlc3BvbnNlJHF1ZXJ5IiwgInZhcmlhbnQiLCAidXNlbGFuZyIsICJyZXNwb25zZSIsICJwb3N0IiwgImRpc3BsYXl0aXRsZSIsICJ2YXJpYW50RWxlbWVudCIsICJkb2N1bWVudCIsICJjcmVhdGVFbGVtZW50IiwgImlubmVySFRNTCIsICJ0ZXh0Q29udGVudCIsICJzdmciLCAidHJpbSIsICJzbGljZSIsICJpbmRleE9mIiwgInN0YXJ0c1dpdGgiLCAiZW5kc1dpdGgiLCAicmVwbGFjZSIsICJlbmNvZGVVUklDb21wb25lbnQiLCAiJCIsICJyZWFkeSIsICJ0aGVuIiwgIiRib2R5IiwgIm9iamVjdCIsICJVUkwiLCAiZXh0ZW5kIiwgIl9pIiwgIl9PYmplY3QkZW50cmllcyIsICJPYmplY3QiLCAiZW50cmllcyIsICJzZWFyY2hQYXJhbXMiLCAic2V0IiwgImdldFJlbGF0aXZlUGF0aCIsICJwYXRobmFtZSIsICJzZWFyY2giLCAiaGFzaCIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJfX3RvRVNNIiwgInJlcXVpcmUiLCAibWVzc2FnZSIsICJPTyIsICJ1aSIsICJjb25maXJtIiwgImRlZmF1bHQiLCAiY2xhc3NOYW1lIiwgImJvcmRlciIsICJkaXNwbGF5IiwgImp1c3RpZnlDb250ZW50IiwgImZvbnRTaXplIiwgImZvbnRXZWlnaHQiLCAibGluZUhlaWdodCIsICJwYWRkaW5nIiwgImlzQ29uZmlybSIsICJfeDQiLCAiX3F1ZXJ5R2xvYmFsVXNlckdyb3VwcyIsICJndWl1c2VyIiwgIkNBQ0hFX0tFWV9QUkVGSVgiLCAiZ3JvdXBzIiwgInN0b3JhZ2UiLCAiZ2V0T2JqZWN0IiwgImZpbHRlciIsICJlbGVtZW50IiwgIm1ldGEiLCAiZ3VpcHJvcCIsICJzbWF4YWdlIiwgIm1heGFnZSIsICJxdWVyeSIsICJnbG9iYWx1c2VyaW5mbyIsICJfcXVlcnkkZ2xvYmFsdXNlcmluZm8iLCAiX3F1ZXJ5JGdsb2JhbHVzZXJpbmZvMiIsICJzZXRPYmplY3QiLCAibmFtZSIsICJfeDUiLCAiX3F1ZXJ5VXNlckdyb3VwcyIsICJ1c2VycyIsICJfcXVlcnkkdXNlcnMiLCAiY2FjaGVkUXVlcnlVc2VycyIsICJfaXRlcmF0b3I0IiwgIl9zdGVwNCIsICJ1c3VzZXJzIiwgInYiLCAibGlzdCIsICJ1c3Byb3AiLCAicXVlcnlVc2VycyIsICJfaTMiLCAiX3F1ZXJ5VXNlcnMiLCAidGFyZ2V0SGVpZ2h0IiwgImVmZmVjdHNPcHRpb25zT3JEdXJhdGlvbiIsICJkdXJhdGlvbiIsICJlYXNpbmciLCAiZmluZCIsICJhbmltYXRlIiwgIndnVXNlckdyb3VwcyIsICJ3Z0dsb2JhbEdyb3VwcyIsICJjb25maWciLCAic29tZSIsICIkZWRpdEZvcm0iLCAiXyRlZGl0Rm9ybSRmaW5kJHZhbCIsICJfJGVkaXRGb3JtJGZpbmQiLCAidmFsIiwgImNvbnRlbnQiLCAiXyRlZGl0Rm9ybSRmaW5kJHRleHRTIiwgInRleHRTZWxlY3Rpb24iXQp9Cg==
