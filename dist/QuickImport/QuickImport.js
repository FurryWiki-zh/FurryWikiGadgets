/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source {@link https://github.com/FurryWiki/FurryWikiGadgets/tree/master/src/QuickImport}
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

// dist/QuickImport/QuickImport.js
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
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);
//! src/QuickImport/QuickImport.ts
var QuickImport_exports = {};
__export(QuickImport_exports, {
  api: () => api,
  detectIfFileRedirect: () => _detectIfFileRedirect,
  refreshPage: () => refreshPage
});
module.exports = __toCommonJS(QuickImport_exports);
//! src/QuickImport/modules/core.ts
var import_ext_gadget2 = require("ext.gadget.Util");
//! src/QuickImport/options.json
var version = "2.0";
//! src/QuickImport/modules/api.ts
var import_ext_gadget = require("ext.gadget.Util");
var api = (0, import_ext_gadget.initMwApi)("QuickImport/".concat(version));
//! src/QuickImport/modules/core.ts
var import_ext_gadget3 = require("ext.gadget.Toastify");
var toastifyInstance = {
  hideToast: () => {
  }
};
var refreshPage = (title) => {
  toastifyInstance.hideToast();
  (0, import_ext_gadget3.toastify)({
    text: "正在刷新页面",
    duration: -1
  }, "info");
  if (title) {
    location.replace(mw.util.getUrl(title));
  } else {
    location.reload();
  }
};
var importPage = /* @__PURE__ */ function() {
  var _ref = _asyncToGenerator(function* (pageName, isFileNS = false) {
    const iwprefix = "ysarchives";
    toastifyInstance.hideToast();
    toastifyInstance = (0, import_ext_gadget3.toastify)({
      text: "导入页面中：".concat(iwprefix, ":").concat(pageName),
      duration: -1
    }, "info");
    let summary = "页面文字原许可：[[cc-by-sa:4.0|CC BY-SA 4.0]]；作者请参见来源页面历史";
    if (isFileNS) {
      summary += "；文件作者请参见此页面及来源页面记载";
    }
    const params = {
      action: "import",
      format: "json",
      assignknownusers: true,
      interwikipage: pageName,
      interwikiprefix: iwprefix,
      interwikisource: iwprefix,
      summary: "［".concat(summary, "］")
    };
    const result = yield api.postWithEditToken(params);
    if (result["import"] && result["import"][0] && result["import"].revisions) {
      toastifyInstance.hideToast();
      toastifyInstance = (0, import_ext_gadget3.toastify)({
        text: "页面导入完成：".concat(pageName),
        duration: 3 * 1e3
      }, "success");
      return true;
    }
    toastifyInstance.hideToast();
    toastifyInstance = (0, import_ext_gadget3.toastify)({
      text: "页面导入失败：".concat(iwprefix, ":").concat(pageName),
      duration: 3 * 1e3
    }, "warning");
    return false;
  });
  return function importPage2(_x) {
    return _ref.apply(this, arguments);
  };
}();
var uploadFile = /* @__PURE__ */ function() {
  var _ref2 = _asyncToGenerator(function* (target, url) {
    toastifyInstance.hideToast();
    toastifyInstance = (0, import_ext_gadget3.toastify)({
      text: "迁移文件中：".concat(target),
      duration: -1
    }, "info");
    const params = {
      url: url !== null && url !== void 0 ? url : "https://youshou.wiki/wiki/Special:Redirect/file/".concat(mw.util.rawurlencode(target)),
      action: "upload",
      format: "json",
      filename: target,
      comment: "自有兽档案馆导入文件",
      ignorewarnings: true
    };
    yield api.postWithEditToken(params);
    toastifyInstance.hideToast();
    toastifyInstance = (0, import_ext_gadget3.toastify)({
      text: "文件迁移完成：".concat(target),
      duration: 3 * 1e3
    }, "success");
  });
  return function uploadFile2(_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();
var queryImageInfo = /* @__PURE__ */ function() {
  var _ref3 = _asyncToGenerator(function* (titles) {
    const params = {
      titles,
      action: "query",
      format: "json",
      formatversion: "2",
      prop: ["imageinfo", "info"],
      iiprop: ["url"],
      redirects: true
    };
    const response = yield api.get(params);
    return response;
  });
  return function queryImageInfo2(_x4) {
    return _ref3.apply(this, arguments);
  };
}();
var _detectIfFileRedirect = /* @__PURE__ */ function() {
  var _ref4 = _asyncToGenerator(function* (pageNames, isFileNS = false) {
    const titlesArray = (0, import_ext_gadget2.uniqueArray)((0, import_ext_gadget2.generateArray)(pageNames));
    const promises = [];
    while (titlesArray.length) {
      let titles = titlesArray.splice(0, 25);
      if (!titles.length) {
        continue;
      }
      promises[promises.length] = /* @__PURE__ */ _asyncToGenerator(function* () {
        const tos = [];
        const response = yield queryImageInfo(titles);
        if (response["query"]) {
          if (response["query"].normalized) {
            var _iterator2 = _createForOfIteratorHelper(response["query"].normalized), _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                const {
                  from,
                  to
                } = _step2.value;
                titles = titles.map((element) => {
                  return element === from ? to : element;
                });
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }
          if (response["query"].pages) {
            var _iterator3 = _createForOfIteratorHelper(response["query"].pages), _step3;
            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
                const page1 = _step3.value;
                const {
                  title
                } = page1;
                if (!page1.missing) {
                  continue;
                }
                yield importPage(title, isFileNS);
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          }
          if (response["query"].redirects) {
            var _iterator4 = _createForOfIteratorHelper(response["query"].redirects), _step4;
            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
                const {
                  to
                } = _step4.value;
                tos[tos.length] = to;
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }
          }
        }
        if (isFileNS) {
          const response2 = yield queryImageInfo(titles);
          if (response2.query) {
            if (response2.query.normalized) {
              var _iterator5 = _createForOfIteratorHelper(response2.query.normalized), _step5;
              try {
                for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
                  const {
                    from,
                    to
                  } = _step5.value;
                  titles = titles.map((element) => {
                    return element === from ? to : element;
                  });
                }
              } catch (err) {
                _iterator5.e(err);
              } finally {
                _iterator5.f();
              }
            }
            if (response2.query.pages) {
              var _iterator6 = _createForOfIteratorHelper(response2.query.pages), _step6;
              try {
                for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
                  const page2 = _step6.value;
                  const {
                    title
                  } = page2;
                  if (page2.missing || page2.redirect) {
                    continue;
                  }
                  const isSharedFile = page2.imagerepository && page2.imagerepository !== "local";
                  const isMissingContent = (!page2.imagerepository || page2.imagerepository === "local") && (!page2.imageinfo || !page2.imageinfo.length);
                  if (isSharedFile || isMissingContent) {
                    const urlToUse = isSharedFile && page2.imageinfo && page2.imageinfo[0] ? page2.imageinfo[0].url : void 0;
                    yield uploadFile(title, urlToUse);
                  }
                }
              } catch (err) {
                _iterator6.e(err);
              } finally {
                _iterator6.f();
              }
            }
            if (response2.query.redirects) {
              var _iterator7 = _createForOfIteratorHelper(response2.query.redirects), _step7;
              try {
                for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
                  const {
                    to
                  } = _step7.value;
                  tos[tos.length] = to;
                }
              } catch (err) {
                _iterator7.e(err);
              } finally {
                _iterator7.f();
              }
            }
          }
        }
        if (tos.length) {
          yield _detectIfFileRedirect((0, import_ext_gadget2.uniqueArray)(tos));
        }
      });
    }
    for (var _i = 0, _promises = promises; _i < _promises.length; _i++) {
      const promise = _promises[_i];
      try {
        yield promise();
      } catch {
      }
    }
  });
  return function detectIfFileRedirect(_x5) {
    return _ref4.apply(this, arguments);
  };
}();
//! src/QuickImport/QuickImport.ts
(function quickImport() {
  const {
    wgNamespaceNumber,
    wgPageName
  } = mw.config.get();
  const redirectTextA = document.querySelector('.redirectText a[href*="youshou.wiki"]');
  const isFileNS = wgNamespaceNumber === 6;
  const hasMwNoarticletext = !!document.querySelector("#mw-noarticletext");
  const iwprefix = "ysarchives";
  const label = isFileNS && !hasMwNoarticletext ? iwprefix : "";
  const buttonLabel = isFileNS ? label ? "文件（".concat(label, "）") : "页面" : redirectTextA ? "重定向目标" : "页面";
  if (wgNamespaceNumber < 0) {
    return;
  }
  const portletId = document.querySelector("#p-cactions") ? "p-cactions" : "p-tb";
  const element = mw.util.addPortletLink(portletId, "#", "导入".concat(buttonLabel), "t-import");
  if (!element) {
    return;
  }
  let wgPageName2;
  let wgPageName3;
  if (!isFileNS) {
    const disamRegExpFW = /^(.*)（(.*?)）$/;
    const matchFW = wgPageName.match(disamRegExpFW);
    const disamRegExpHW = /^(.*)[_ ]\((.*?)\)$/;
    const matchHW = wgPageName.match(disamRegExpHW);
    try {
      let rootPageName, disamKey;
      if (matchFW) {
        [, rootPageName, disamKey] = matchFW;
      } else if (matchHW) {
        [, rootPageName, disamKey] = matchHW;
      }
      if (rootPageName && disamKey) {
        wgPageName2 = "".concat(rootPageName, "_(").concat(disamKey, ")");
        if (disamKey === "消歧义") {
          wgPageName3 = "".concat(rootPageName, "_(消歧義)");
        } else if (disamKey === "消歧義") {
          wgPageName3 = "".concat(rootPageName, "_(消歧义)");
        }
      }
    } catch {
    }
  }
  element.addEventListener("click", () => {
    void _asyncToGenerator(function* () {
      const pageName = redirectTextA ? redirectTextA.textContent || wgPageName : wgPageName;
      const pageNames = [pageName];
      if (wgPageName2) {
        pageNames[pageNames.length] = wgPageName2;
      }
      if (wgPageName3) {
        pageNames[pageNames.length] = wgPageName3;
      }
      yield _detectIfFileRedirect(pageNames, isFileNS);
    })().then(() => {
      var _ref7;
      refreshPage((_ref7 = wgPageName3 !== null && wgPageName3 !== void 0 ? wgPageName3 : wgPageName2) !== null && _ref7 !== void 0 ? _ref7 : wgPageName);
    });
  });
})();
window.detectIfFileRedirect = _detectIfFileRedirect;

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1F1aWNrSW1wb3J0L1F1aWNrSW1wb3J0LnRzIiwgInNyYy9RdWlja0ltcG9ydC9tb2R1bGVzL2NvcmUudHMiLCAic3JjL1F1aWNrSW1wb3J0L29wdGlvbnMuanNvbiIsICJzcmMvUXVpY2tJbXBvcnQvbW9kdWxlcy9hcGkudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7ZGV0ZWN0SWZGaWxlUmVkaXJlY3QsIHJlZnJlc2hQYWdlfSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG5cbihmdW5jdGlvbiBxdWlja0ltcG9ydCgpOiB2b2lkIHtcblx0Y29uc3Qge3dnTmFtZXNwYWNlTnVtYmVyLCB3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHQvLyDkv67mlLnmo4DmtYvlmajvvIzmn6Xmib7mjIflkJF5b3VzaG91Lndpa2nnmoTlpJbpg6jpk77mjqVcblx0Y29uc3QgcmVkaXJlY3RUZXh0QSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWRpcmVjdFRleHQgYVtocmVmKj1cInlvdXNob3Uud2lraVwiXScpO1xuXG5cdGNvbnN0IGlzRmlsZU5TOiBib29sZWFuID0gd2dOYW1lc3BhY2VOdW1iZXIgPT09IDY7XG5cdGNvbnN0IGhhc013Tm9hcnRpY2xldGV4dDogYm9vbGVhbiA9ICEhZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI213LW5vYXJ0aWNsZXRleHQnKTtcblxuXHQvLyDlsIblr7zlhaXmupDmlLnkuLp5c2FyY2hpdmVzXG5cdGNvbnN0IGl3cHJlZml4OiBzdHJpbmcgPSAneXNhcmNoaXZlcyc7XG5cblx0Y29uc3QgbGFiZWw6IHN0cmluZyA9IGlzRmlsZU5TICYmICFoYXNNd05vYXJ0aWNsZXRleHQgPyBpd3ByZWZpeCA6ICcnO1xuXHRjb25zdCBidXR0b25MYWJlbDogc3RyaW5nID0gaXNGaWxlTlNcblx0XHQ/IGxhYmVsXG5cdFx0XHQ/IGDmlofku7bvvIgke2xhYmVsfe+8iWBcblx0XHRcdDogJ+mhtemdoidcblx0XHQ6IHJlZGlyZWN0VGV4dEFcblx0XHRcdD8gJ+mHjeWumuWQkeebruaghydcblx0XHRcdDogJ+mhtemdoic7XG5cblx0aWYgKHdnTmFtZXNwYWNlTnVtYmVyIDwgMCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHBvcnRsZXRJZDogJ3AtY2FjdGlvbnMnIHwgJ3AtdGInID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3AtY2FjdGlvbnMnKSA/ICdwLWNhY3Rpb25zJyA6ICdwLXRiJztcblx0Y29uc3QgZWxlbWVudDogSFRNTExJRWxlbWVudCB8IG51bGwgPSBtdy51dGlsLmFkZFBvcnRsZXRMaW5rKHBvcnRsZXRJZCwgJyMnLCBg5a+85YWlJHtidXR0b25MYWJlbH1gLCAndC1pbXBvcnQnKTtcblx0aWYgKCFlbGVtZW50KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0bGV0IHdnUGFnZU5hbWUyOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdGxldCB3Z1BhZ2VOYW1lMzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdGlmICghaXNGaWxlTlMpIHtcblx0XHQvLyBNYXRjaGluZyBkaXNhbWlnLWVkIHBhZ2VzIHdpdGggZnVsbC13aWR0aCBwYXJlbnRoZXNlc1xuXHRcdGNvbnN0IGRpc2FtUmVnRXhwRlcgPSAvXiguKinvvIgoLio/Ke+8iSQvO1xuXHRcdGNvbnN0IG1hdGNoRlcgPSB3Z1BhZ2VOYW1lLm1hdGNoKGRpc2FtUmVnRXhwRlcpO1xuXHRcdC8vIE1hdGNoaW5nIGRpc2FtaWctZWQgcGFnZXMgd2l0aCBoYWxmLXdpZHRoIHBhcmVudGhlc2VzXG5cdFx0Y29uc3QgZGlzYW1SZWdFeHBIVyA9IC9eKC4qKVtfIF1cXCgoLio/KVxcKSQvO1xuXHRcdGNvbnN0IG1hdGNoSFcgPSB3Z1BhZ2VOYW1lLm1hdGNoKGRpc2FtUmVnRXhwSFcpO1xuXG5cdFx0dHJ5IHtcblx0XHRcdC8vIHJvb3QgcGFnZSBuYW1lIGFuZCBkaXNhbWJpZy1rZXlcblx0XHRcdGxldCByb290UGFnZU5hbWU6IHN0cmluZyB8IHVuZGVmaW5lZCwgZGlzYW1LZXk6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHRcdFx0aWYgKG1hdGNoRlcpIHtcblx0XHRcdFx0Wywgcm9vdFBhZ2VOYW1lLCBkaXNhbUtleV0gPSBtYXRjaEZXO1xuXHRcdFx0fSBlbHNlIGlmIChtYXRjaEhXKSB7XG5cdFx0XHRcdFssIHJvb3RQYWdlTmFtZSwgZGlzYW1LZXldID0gbWF0Y2hIVztcblx0XHRcdH1cblxuXHRcdFx0aWYgKHJvb3RQYWdlTmFtZSAmJiBkaXNhbUtleSkge1xuXHRcdFx0XHR3Z1BhZ2VOYW1lMiA9IGAke3Jvb3RQYWdlTmFtZX1fKCR7ZGlzYW1LZXl9KWA7XG5cdFx0XHRcdGlmIChkaXNhbUtleSA9PT0gJ+a2iOatp+S5iScpIHtcblx0XHRcdFx0XHR3Z1BhZ2VOYW1lMyA9IGAke3Jvb3RQYWdlTmFtZX1fKOa2iOatp+e+qSlgO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGRpc2FtS2V5ID09PSAn5raI5q2n576pJykge1xuXHRcdFx0XHRcdHdnUGFnZU5hbWUzID0gYCR7cm9vdFBhZ2VOYW1lfV8o5raI5q2n5LmJKWA7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGNhdGNoIHt9XG5cdH1cblxuXHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk6IHZvaWQgPT4ge1xuXHRcdHZvaWQgKGFzeW5jICgpID0+IHtcblx0XHRcdGNvbnN0IHBhZ2VOYW1lOiBzdHJpbmcgPSByZWRpcmVjdFRleHRBID8gcmVkaXJlY3RUZXh0QS50ZXh0Q29udGVudCB8fCB3Z1BhZ2VOYW1lIDogd2dQYWdlTmFtZTtcblx0XHRcdGNvbnN0IHBhZ2VOYW1lcyA9IFtwYWdlTmFtZV07XG5cdFx0XHRpZiAod2dQYWdlTmFtZTIpIHtcblx0XHRcdFx0cGFnZU5hbWVzW3BhZ2VOYW1lcy5sZW5ndGhdID0gd2dQYWdlTmFtZTI7XG5cdFx0XHR9XG5cdFx0XHRpZiAod2dQYWdlTmFtZTMpIHtcblx0XHRcdFx0cGFnZU5hbWVzW3BhZ2VOYW1lcy5sZW5ndGhdID0gd2dQYWdlTmFtZTM7XG5cdFx0XHR9XG5cdFx0XHRhd2FpdCBkZXRlY3RJZkZpbGVSZWRpcmVjdChwYWdlTmFtZXMsIGlzRmlsZU5TKTtcblx0XHR9KSgpLnRoZW4oKCkgPT4ge1xuXHRcdFx0cmVmcmVzaFBhZ2Uod2dQYWdlTmFtZTMgPz8gd2dQYWdlTmFtZTIgPz8gd2dQYWdlTmFtZSk7XG5cdFx0fSk7XG5cdH0pO1xufSkoKTtcblxud2luZG93LmRldGVjdElmRmlsZVJlZGlyZWN0ID0gZGV0ZWN0SWZGaWxlUmVkaXJlY3Q7XG5cbmV4cG9ydCB7YXBpfSBmcm9tICcuL21vZHVsZXMvYXBpJztcbmV4cG9ydCB7ZGV0ZWN0SWZGaWxlUmVkaXJlY3QsIHJlZnJlc2hQYWdlfSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG4iLCAiaW1wb3J0IHtnZW5lcmF0ZUFycmF5LCB1bmlxdWVBcnJheX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5pbXBvcnQge3RvYXN0aWZ5fSBmcm9tICdleHQuZ2FkZ2V0LlRvYXN0aWZ5JztcblxudHlwZSBEZXRlY3RJZkZpbGVSZWRpcmVjdCA9IChwYWdlTmFtZXM6IHN0cmluZyB8IHN0cmluZ1tdLCBpc0ZpbGVOUz86IGJvb2xlYW4pID0+IFByb21pc2U8dm9pZD47XG50eXBlIFJlZnJlc2hQYWdlID0gKHRpdGxlPzogc3RyaW5nKSA9PiB2b2lkO1xuXG50eXBlIFF1ZXJ5SW1hZ2VJbmZvUmVzcG9uc2UgPSB7XG5cdHF1ZXJ5Pzoge1xuXHRcdG5vcm1hbGl6ZWQ/OiB7ZnJvbTogc3RyaW5nOyB0bzogc3RyaW5nfVtdO1xuXHRcdHJlZGlyZWN0cz86IHtmcm9tOiBzdHJpbmc7IHRvOiBzdHJpbmd9W107XG5cdFx0cGFnZXM/OiB7XG5cdFx0XHR0aXRsZTogc3RyaW5nO1xuXHRcdFx0bWlzc2luZz86IGJvb2xlYW47XG5cdFx0XHRyZWRpcmVjdD86IGJvb2xlYW47XG5cdFx0XHRpbWFnZXJlcG9zaXRvcnk/OiBzdHJpbmc7XG5cdFx0XHRpbWFnZWluZm8/OiB7XG5cdFx0XHRcdHVybDogc3RyaW5nO1xuXHRcdFx0fVtdO1xuXHRcdH1bXTtcblx0fTtcbn07XG5cbmxldCB0b2FzdGlmeUluc3RhbmNlOiBUb2FzdGlmeUluc3RhbmNlID0ge1xuXHRoaWRlVG9hc3Q6ICgpID0+IHt9LFxufTtcblxuY29uc3QgcmVmcmVzaFBhZ2U6IFJlZnJlc2hQYWdlID0gKHRpdGxlKSA9PiB7XG5cdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdHRvYXN0aWZ5KFxuXHRcdHtcblx0XHRcdHRleHQ6ICfmraPlnKjliLfmlrDpobXpnaInLFxuXHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdH0sXG5cdFx0J2luZm8nXG5cdCk7XG5cblx0aWYgKHRpdGxlKSB7XG5cdFx0bG9jYXRpb24ucmVwbGFjZShtdy51dGlsLmdldFVybCh0aXRsZSkpO1xuXHR9IGVsc2Uge1xuXHRcdGxvY2F0aW9uLnJlbG9hZCgpO1xuXHR9XG59O1xuXG5jb25zdCBpbXBvcnRQYWdlID0gYXN5bmMgKHBhZ2VOYW1lOiBzdHJpbmcsIGlzRmlsZU5TOiBib29sZWFuID0gZmFsc2UpOiBQcm9taXNlPGJvb2xlYW4+ID0+IHtcblx0Ly8g5bCG5a+85YWl5rqQ57uf5LiA5Li6eXNhcmNoaXZlc1xuXHRjb25zdCBpd3ByZWZpeDogc3RyaW5nID0gJ3lzYXJjaGl2ZXMnO1xuXG5cdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdHRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeShcblx0XHR7XG5cdFx0XHR0ZXh0OiBg5a+85YWl6aG16Z2i5Lit77yaJHtpd3ByZWZpeH06JHtwYWdlTmFtZX1gLFxuXHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdH0sXG5cdFx0J2luZm8nXG5cdCk7XG5cblx0bGV0IHN1bW1hcnk6IHN0cmluZyA9ICfpobXpnaLmloflrZfljp/orrjlj6/vvJpbW2NjLWJ5LXNhOjQuMHxDQyBCWS1TQSA0LjBdXe+8m+S9nOiAheivt+WPguingeadpea6kOmhtemdouWOhuWPsic7XG5cdGlmIChpc0ZpbGVOUykge1xuXHRcdHN1bW1hcnkgKz0gJ++8m+aWh+S7tuS9nOiAheivt+WPguingeatpOmhtemdouWPiuadpea6kOmhtemdouiusOi9vSc7XG5cdH1cblxuXHRjb25zdCBwYXJhbXM6IEFwaUltcG9ydFBhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdpbXBvcnQnLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGFzc2lnbmtub3dudXNlcnM6IHRydWUsXG5cdFx0aW50ZXJ3aWtpcGFnZTogcGFnZU5hbWUsXG5cdFx0aW50ZXJ3aWtpcHJlZml4OiBpd3ByZWZpeCxcblx0XHRpbnRlcndpa2lzb3VyY2U6IGl3cHJlZml4LFxuXHRcdHN1bW1hcnk6IGDvvLske3N1bW1hcnl977y9YCxcblx0fTtcblx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgYXBpLnBvc3RXaXRoRWRpdFRva2VuKHBhcmFtcyk7XG5cblx0aWYgKHJlc3VsdFsnaW1wb3J0J10gJiYgcmVzdWx0WydpbXBvcnQnXVswXSAmJiByZXN1bHRbJ2ltcG9ydCddLnJldmlzaW9ucykge1xuXHRcdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdFx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdFx0e1xuXHRcdFx0XHR0ZXh0OiBg6aG16Z2i5a+85YWl5a6M5oiQ77yaJHtwYWdlTmFtZX1gLFxuXHRcdFx0XHRkdXJhdGlvbjogMyAqIDEwMDAsXG5cdFx0XHR9LFxuXHRcdFx0J3N1Y2Nlc3MnXG5cdFx0KTtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdHRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeShcblx0XHR7XG5cdFx0XHR0ZXh0OiBg6aG16Z2i5a+85YWl5aSx6LSl77yaJHtpd3ByZWZpeH06JHtwYWdlTmFtZX1gLFxuXHRcdFx0ZHVyYXRpb246IDMgKiAxMDAwLFxuXHRcdH0sXG5cdFx0J3dhcm5pbmcnXG5cdCk7XG5cdHJldHVybiBmYWxzZTtcbn07XG5cbmNvbnN0IHVwbG9hZEZpbGUgPSBhc3luYyAodGFyZ2V0OiBzdHJpbmcsIHVybD86IHN0cmluZyk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogYOi/geenu+aWh+S7tuS4re+8miR7dGFyZ2V0fWAsXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnaW5mbydcblx0KTtcblxuXHRjb25zdCBwYXJhbXM6IEFwaVVwbG9hZFBhcmFtcyA9IHtcblx0XHR1cmw6IHVybCA/PyBgaHR0cHM6Ly95b3VzaG91Lndpa2kvd2lraS9TcGVjaWFsOlJlZGlyZWN0L2ZpbGUvJHttdy51dGlsLnJhd3VybGVuY29kZSh0YXJnZXQpfWAsXG5cdFx0YWN0aW9uOiAndXBsb2FkJyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmaWxlbmFtZTogdGFyZ2V0LFxuXHRcdGNvbW1lbnQ6ICfoh6rmnInlhb3moaPmoYjppoblr7zlhaXmlofku7YnLFxuXHRcdGlnbm9yZXdhcm5pbmdzOiB0cnVlLFxuXHR9O1xuXHRhd2FpdCBhcGkucG9zdFdpdGhFZGl0VG9rZW4ocGFyYW1zKTtcblxuXHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogYOaWh+S7tui/geenu+WujOaIkO+8miR7dGFyZ2V0fWAsXG5cdFx0XHRkdXJhdGlvbjogMyAqIDEwMDAsXG5cdFx0fSxcblx0XHQnc3VjY2Vzcydcblx0KTtcbn07XG5cbmNvbnN0IHF1ZXJ5SW1hZ2VJbmZvID0gYXN5bmMgKHRpdGxlczogc3RyaW5nIHwgc3RyaW5nW10pID0+IHtcblx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeUluZm9QYXJhbXMgJiBBcGlRdWVyeUltYWdlSW5mb1BhcmFtcyA9IHtcblx0XHR0aXRsZXMsXG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRwcm9wOiBbJ2ltYWdlaW5mbycsICdpbmZvJ10sXG5cdFx0aWlwcm9wOiBbJ3VybCddLFxuXHRcdHJlZGlyZWN0czogdHJ1ZSxcblx0fTtcblx0Y29uc3QgcmVzcG9uc2UgPSAoYXdhaXQgYXBpLmdldChwYXJhbXMpKSBhcyBRdWVyeUltYWdlSW5mb1Jlc3BvbnNlO1xuXG5cdHJldHVybiByZXNwb25zZTtcbn07XG5cbmNvbnN0IGRldGVjdElmRmlsZVJlZGlyZWN0OiBEZXRlY3RJZkZpbGVSZWRpcmVjdCA9IGFzeW5jIChwYWdlTmFtZXMsIGlzRmlsZU5TID0gZmFsc2UpID0+IHtcblx0Ly8gZ2VuZXJhdGVBcnJheS91bmlxdWVBcnJheSDlnKjmraTlpITkv53or4Hlj6rkuqfnlJ/lrZfnrKbkuLLmoIfpopjvvIzlt7Lkurrlt6Xnoa7orqTlronlhahcblxuXHRjb25zdCB0aXRsZXNBcnJheSA9IHVuaXF1ZUFycmF5KGdlbmVyYXRlQXJyYXkocGFnZU5hbWVzKSk7XG5cdGNvbnN0IHByb21pc2VzOiAoKCkgPT4gUHJvbWlzZTx2b2lkPilbXSA9IFtdO1xuXG5cdHdoaWxlICh0aXRsZXNBcnJheS5sZW5ndGgpIHtcblx0XHRsZXQgdGl0bGVzOiBzdHJpbmdbXSA9IHRpdGxlc0FycmF5LnNwbGljZSgwLCAyNSk7XG5cdFx0aWYgKCF0aXRsZXMubGVuZ3RoKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRwcm9taXNlc1twcm9taXNlcy5sZW5ndGhdID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRcdFx0Ly8gUmVkaXJlY3QgdGFyZ2V0KHMpXG5cdFx0XHRjb25zdCB0b3M6IHN0cmluZ1tdID0gW107XG5cblx0XHRcdC8vIEFuYWx5emUgc3RlcCAxOiBpbXBvcnQgcGFnZXMgaXRzZWxmXG5cdFx0XHQvLy8vIFF1ZXJ5XG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IHF1ZXJ5SW1hZ2VJbmZvKHRpdGxlcyk7XG5cdFx0XHRpZiAocmVzcG9uc2VbJ3F1ZXJ5J10pIHtcblx0XHRcdFx0Ly8vLyBOb3JtYWxpemVcblx0XHRcdFx0aWYgKHJlc3BvbnNlWydxdWVyeSddLm5vcm1hbGl6ZWQpIHtcblx0XHRcdFx0XHRmb3IgKGNvbnN0IHtmcm9tLCB0b30gb2YgcmVzcG9uc2VbJ3F1ZXJ5J10ubm9ybWFsaXplZCBhcyB7ZnJvbTogc3RyaW5nOyB0bzogc3RyaW5nfVtdKSB7XG5cdFx0XHRcdFx0XHR0aXRsZXMgPSB0aXRsZXMubWFwKChlbGVtZW50KSA9PiB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBlbGVtZW50ID09PSBmcm9tID8gdG8gOiBlbGVtZW50O1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8vLyBJbXBvcnRcblx0XHRcdFx0aWYgKHJlc3BvbnNlWydxdWVyeSddLnBhZ2VzKSB7XG5cdFx0XHRcdFx0Zm9yIChjb25zdCBwYWdlMSBvZiByZXNwb25zZVsncXVlcnknXS5wYWdlcykge1xuXHRcdFx0XHRcdFx0Y29uc3Qge3RpdGxlfSA9IHBhZ2UxO1xuXG5cdFx0XHRcdFx0XHRpZiAoIXBhZ2UxLm1pc3NpbmcpIHtcblx0XHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC8vIOWwhuWvvOWFpea6kOe7n+S4gOS4unlzYXJjaGl2ZXNcblx0XHRcdFx0XHRcdGF3YWl0IGltcG9ydFBhZ2UodGl0bGUsIGlzRmlsZU5TKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLy8vIFB1c2ggcmVkaXJlY3QgdGFyZ2V0cyBpbnRvIGFycmF5XG5cdFx0XHRcdGlmIChyZXNwb25zZVsncXVlcnknXS5yZWRpcmVjdHMpIHtcblx0XHRcdFx0XHRmb3IgKGNvbnN0IHt0b30gb2YgcmVzcG9uc2VbJ3F1ZXJ5J10ucmVkaXJlY3RzIGFzIHtmcm9tOiBzdHJpbmc7IHRvOiBzdHJpbmd9W10pIHtcblx0XHRcdFx0XHRcdHRvc1t0b3MubGVuZ3RoXSA9IHRvO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBBbmFseXplIHN0ZXAgMjogZm9yIGZpbGVzLCBjaGVjayBpZiBpdCBpcyBhIHJlZGlyZWN0XG5cdFx0XHRpZiAoaXNGaWxlTlMpIHtcblx0XHRcdFx0Ly8vLyBRdWVyeVxuXHRcdFx0XHRjb25zdCByZXNwb25zZTIgPSBhd2FpdCBxdWVyeUltYWdlSW5mbyh0aXRsZXMpO1xuXHRcdFx0XHRpZiAocmVzcG9uc2UyLnF1ZXJ5KSB7XG5cdFx0XHRcdFx0Ly8vLyBOb3JtYWxpemVcblx0XHRcdFx0XHRpZiAocmVzcG9uc2UyLnF1ZXJ5Lm5vcm1hbGl6ZWQpIHtcblx0XHRcdFx0XHRcdGZvciAoY29uc3Qge2Zyb20sIHRvfSBvZiByZXNwb25zZTIucXVlcnkubm9ybWFsaXplZCkge1xuXHRcdFx0XHRcdFx0XHR0aXRsZXMgPSB0aXRsZXMubWFwKChlbGVtZW50KSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGVsZW1lbnQgPT09IGZyb20gPyB0byA6IGVsZW1lbnQ7XG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vLy8gdXBsb2FkXG5cdFx0XHRcdFx0aWYgKHJlc3BvbnNlMi5xdWVyeS5wYWdlcykge1xuXHRcdFx0XHRcdFx0Zm9yIChjb25zdCBwYWdlMiBvZiByZXNwb25zZTIucXVlcnkucGFnZXMpIHtcblx0XHRcdFx0XHRcdFx0Y29uc3Qge3RpdGxlfSA9IHBhZ2UyO1xuXG5cdFx0XHRcdFx0XHRcdGlmIChwYWdlMi5taXNzaW5nIHx8IHBhZ2UyLnJlZGlyZWN0KSB7XG5cdFx0XHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRjb25zdCBpc1NoYXJlZEZpbGUgPSBwYWdlMi5pbWFnZXJlcG9zaXRvcnkgJiYgcGFnZTIuaW1hZ2VyZXBvc2l0b3J5ICE9PSAnbG9jYWwnO1xuXHRcdFx0XHRcdFx0XHRjb25zdCBpc01pc3NpbmdDb250ZW50ID1cblx0XHRcdFx0XHRcdFx0XHQoIXBhZ2UyLmltYWdlcmVwb3NpdG9yeSB8fCBwYWdlMi5pbWFnZXJlcG9zaXRvcnkgPT09ICdsb2NhbCcpICYmXG5cdFx0XHRcdFx0XHRcdFx0KCFwYWdlMi5pbWFnZWluZm8gfHwgIXBhZ2UyLmltYWdlaW5mby5sZW5ndGgpO1xuXG5cdFx0XHRcdFx0XHRcdGlmIChpc1NoYXJlZEZpbGUgfHwgaXNNaXNzaW5nQ29udGVudCkge1xuXHRcdFx0XHRcdFx0XHRcdC8vIOWmguaenOaYr+WFseS6q+aWh+S7tu+8jOS9v+eUqOW3suefpeeahCBVUkzvvJvlpoLmnpzmmK/nvLrlpLHmlofku7bvvIzkvKAgdW5kZWZpbmVkIOiuqSB1cGxvYWRGaWxlIOS9v+eUqOm7mOiupOeahCBTcGVjaWFsOlJlZGlyZWN0IFVSTFxuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IHVybFRvVXNlID1cblx0XHRcdFx0XHRcdFx0XHRcdGlzU2hhcmVkRmlsZSAmJiBwYWdlMi5pbWFnZWluZm8gJiYgcGFnZTIuaW1hZ2VpbmZvWzBdXG5cdFx0XHRcdFx0XHRcdFx0XHRcdD8gcGFnZTIuaW1hZ2VpbmZvWzBdLnVybFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ6IHVuZGVmaW5lZDtcblx0XHRcdFx0XHRcdFx0XHRhd2FpdCB1cGxvYWRGaWxlKHRpdGxlLCB1cmxUb1VzZSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAocmVzcG9uc2UyLnF1ZXJ5LnJlZGlyZWN0cykge1xuXHRcdFx0XHRcdFx0Zm9yIChjb25zdCB7dG99IG9mIHJlc3BvbnNlMi5xdWVyeS5yZWRpcmVjdHMpIHtcblx0XHRcdFx0XHRcdFx0dG9zW3Rvcy5sZW5ndGhdID0gdG87XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIEFuYWx5emUgc3RlcCAzOiBpbXBvcnQgcGFnZXMgYXMgcmVkaXJlY3QgdGFyZ2V0XG5cdFx0XHQvLy8vIFF1ZXVlIHJlcXVlc3RzIHRvIGltcG9ydCByZWRpcmVjdCB0YXJnZXRzXG5cdFx0XHRpZiAodG9zLmxlbmd0aCkge1xuXHRcdFx0XHRhd2FpdCBkZXRlY3RJZkZpbGVSZWRpcmVjdCh1bmlxdWVBcnJheSh0b3MpKTsgLy8gUmVwbGFjZSBTZXQgd2l0aCB1bmlxdWVBcnJheSwgYXZvaWRpbmcgY29yZS1qcyBwb2x5ZmlsbGluZ1xuXHRcdFx0fVxuXHRcdH07XG5cdH1cblxuXHRmb3IgKGNvbnN0IHByb21pc2Ugb2YgcHJvbWlzZXMpIHtcblx0XHR0cnkge1xuXHRcdFx0YXdhaXQgcHJvbWlzZSgpO1xuXHRcdH0gY2F0Y2gge31cblx0fVxufTtcblxuZXhwb3J0IHt0eXBlIERldGVjdElmRmlsZVJlZGlyZWN0LCBkZXRlY3RJZkZpbGVSZWRpcmVjdCwgdHlwZSBSZWZyZXNoUGFnZSwgcmVmcmVzaFBhZ2V9O1xuIiwgIntcblx0XCJ2ZXJzaW9uXCI6IFwiMi4wXCJcbn1cbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoYFF1aWNrSW1wb3J0LyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsc0JB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QUdJLGNBQWNDLFFBQVEsSUFBSUw7TUFDOUIsV0FBV0csU0FBUztBQUNuQixTQUFBLEVBQUdDLGNBQWNDLFFBQVEsSUFBSUY7TUFDOUI7QUFFQSxVQUFJQyxnQkFBZ0JDLFVBQVU7QUFDN0JSLHNCQUFBLEdBQUFwSCxPQUFpQjJILGNBQVksSUFBQSxFQUFBM0gsT0FBSzRILFVBQVEsR0FBQTtBQUMxQyxZQUFJQSxhQUFhLE9BQU87QUFDdkJQLHdCQUFBLEdBQUFySCxPQUFpQjJILGNBQVksUUFBQTtRQUM5QixXQUFXQyxhQUFhLE9BQU87QUFDOUJQLHdCQUFBLEdBQUFySCxPQUFpQjJILGNBQVksUUFBQTtRQUM5QjtNQUNEO0lBQ0QsUUFBUTtJQUFDO0VBQ1Y7QUFFQWpELFVBQVFtRCxpQkFBaUIsU0FBUyxNQUFZO0FBQzdDLFNBQUE3RyxrQkFBTSxhQUFZO0FBQ2pCLFlBQU1DLFdBQW1CMkYsZ0JBQWdCQSxjQUFja0IsZUFBZXBCLGFBQWFBO0FBQ25GLFlBQU1uRCxZQUFZLENBQUN0QyxRQUFRO0FBQzNCLFVBQUltRyxhQUFhO0FBQ2hCN0Qsa0JBQVVBLFVBQVVLLE1BQU0sSUFBSXdEO01BQy9CO0FBQ0EsVUFBSUMsYUFBYTtBQUNoQjlELGtCQUFVQSxVQUFVSyxNQUFNLElBQUl5RDtNQUMvQjtBQUNBLFlBQU0vSCxzQkFBcUJpRSxXQUFXckMsUUFBUTtJQUMvQyxDQUFBLEVBQUcsRUFBRTZHLEtBQUssTUFBTTtBQUFBLFVBQUFDO0FBQ2Z6SSxtQkFBQXlJLFFBQVlYLGdCQUFBLFFBQUFBLGdCQUFBLFNBQUFBLGNBQWVELGlCQUFBLFFBQUFZLFVBQUEsU0FBQUEsUUFBZXRCLFVBQVU7SUFDckQsQ0FBQztFQUNGLENBQUM7QUFDRixHQUFHO0FBRUh1QixPQUFPM0ksdUJBQXVCQTsiLAogICJuYW1lcyI6IFsiUXVpY2tJbXBvcnRfZXhwb3J0cyIsICJfX2V4cG9ydCIsICJhcGkiLCAiZGV0ZWN0SWZGaWxlUmVkaXJlY3QiLCAicmVmcmVzaFBhZ2UiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAiX190b0NvbW1vbkpTIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJyZXF1aXJlIiwgInZlcnNpb24iLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiaW5pdE13QXBpIiwgImNvbmNhdCIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAidG9hc3RpZnlJbnN0YW5jZSIsICJoaWRlVG9hc3QiLCAidGl0bGUiLCAidG9hc3RpZnkiLCAidGV4dCIsICJkdXJhdGlvbiIsICJsb2NhdGlvbiIsICJyZXBsYWNlIiwgIm13IiwgInV0aWwiLCAiZ2V0VXJsIiwgInJlbG9hZCIsICJpbXBvcnRQYWdlIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAicGFnZU5hbWUiLCAiaXNGaWxlTlMiLCAiaXdwcmVmaXgiLCAic3VtbWFyeSIsICJwYXJhbXMiLCAiYWN0aW9uIiwgImZvcm1hdCIsICJhc3NpZ25rbm93bnVzZXJzIiwgImludGVyd2lraXBhZ2UiLCAiaW50ZXJ3aWtpcHJlZml4IiwgImludGVyd2lraXNvdXJjZSIsICJyZXN1bHQiLCAicG9zdFdpdGhFZGl0VG9rZW4iLCAicmV2aXNpb25zIiwgIl94IiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJ1cGxvYWRGaWxlIiwgIl9yZWYyIiwgInRhcmdldCIsICJ1cmwiLCAicmF3dXJsZW5jb2RlIiwgImZpbGVuYW1lIiwgImNvbW1lbnQiLCAiaWdub3Jld2FybmluZ3MiLCAiX3gyIiwgIl94MyIsICJxdWVyeUltYWdlSW5mbyIsICJfcmVmMyIsICJ0aXRsZXMiLCAiZm9ybWF0dmVyc2lvbiIsICJwcm9wIiwgImlpcHJvcCIsICJyZWRpcmVjdHMiLCAicmVzcG9uc2UiLCAiZ2V0IiwgIl94NCIsICJfcmVmNCIsICJwYWdlTmFtZXMiLCAidGl0bGVzQXJyYXkiLCAidW5pcXVlQXJyYXkiLCAiZ2VuZXJhdGVBcnJheSIsICJwcm9taXNlcyIsICJsZW5ndGgiLCAic3BsaWNlIiwgInRvcyIsICJub3JtYWxpemVkIiwgIl9pdGVyYXRvcjIiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAyIiwgInMiLCAibiIsICJkb25lIiwgImZyb20iLCAidG8iLCAidmFsdWUiLCAibWFwIiwgImVsZW1lbnQiLCAiZXJyIiwgImUiLCAiZiIsICJwYWdlcyIsICJfaXRlcmF0b3IzIiwgIl9zdGVwMyIsICJwYWdlMSIsICJtaXNzaW5nIiwgIl9pdGVyYXRvcjQiLCAiX3N0ZXA0IiwgInJlc3BvbnNlMiIsICJxdWVyeSIsICJfaXRlcmF0b3I1IiwgIl9zdGVwNSIsICJfaXRlcmF0b3I2IiwgIl9zdGVwNiIsICJwYWdlMiIsICJyZWRpcmVjdCIsICJpc1NoYXJlZEZpbGUiLCAiaW1hZ2VyZXBvc2l0b3J5IiwgImlzTWlzc2luZ0NvbnRlbnQiLCAiaW1hZ2VpbmZvIiwgInVybFRvVXNlIiwgIl9pdGVyYXRvcjciLCAiX3N0ZXA3IiwgIl9pIiwgIl9wcm9taXNlcyIsICJwcm9taXNlIiwgIl94NSIsICJxdWlja0ltcG9ydCIsICJ3Z05hbWVzcGFjZU51bWJlciIsICJ3Z1BhZ2VOYW1lIiwgImNvbmZpZyIsICJyZWRpcmVjdFRleHRBIiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3IiLCAiaGFzTXdOb2FydGljbGV0ZXh0IiwgImxhYmVsIiwgImJ1dHRvbkxhYmVsIiwgInBvcnRsZXRJZCIsICJhZGRQb3J0bGV0TGluayIsICJ3Z1BhZ2VOYW1lMiIsICJ3Z1BhZ2VOYW1lMyIsICJkaXNhbVJlZ0V4cEZXIiwgIm1hdGNoRlciLCAibWF0Y2giLCAiZGlzYW1SZWdFeHBIVyIsICJtYXRjaEhXIiwgInJvb3RQYWdlTmFtZSIsICJkaXNhbUtleSIsICJhZGRFdmVudExpc3RlbmVyIiwgInRleHRDb250ZW50IiwgInRoZW4iLCAiX3JlZjciLCAid2luZG93Il0KfQo=
