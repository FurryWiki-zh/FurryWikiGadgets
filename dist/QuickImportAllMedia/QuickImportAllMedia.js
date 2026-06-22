/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://github.com/FurryWiki-zh/FurryWikiGadgets/tree/master/src/QuickImport}
 * @source {@link https://github.com/FurryWiki-zh/FurryWikiGadgets/tree/master/src/QuickImportAllMedia}
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

// dist/QuickImportAllMedia/QuickImportAllMedia.js
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
//! src/QuickImportAllMedia/QuickImportAllMedia.ts
var import_ext_gadget4 = require("ext.gadget.QuickImport");
//! src/QuickImportAllMedia/modules/core.ts
var import_ext_gadget = require("ext.gadget.Util");
var import_ext_gadget2 = require("ext.gadget.QuickImport");
var import_ext_gadget3 = require("ext.gadget.Toastify");
var toastifyInstance = {
  hideToast: () => {
  }
};
var parse = /* @__PURE__ */ (function() {
  var _ref = _asyncToGenerator(function* (page) {
    const params = {
      page,
      action: "parse",
      format: "json",
      formatversion: "2",
      prop: ["links", "images"],
      redirects: true,
      disabletoc: true
    };
    const response = yield import_ext_gadget2.api.get(params);
    return response;
  });
  return function parse2(_x) {
    return _ref.apply(this, arguments);
  };
})();
var getElements = (element) => {
  return [...element.querySelectorAll("a[href^='/wiki/File:']"), ...element.querySelectorAll("a[href*='title=File:']")];
};
var getElementsFromParse = /* @__PURE__ */ (function() {
  var _ref2 = _asyncToGenerator(function* (titles) {
    const fileNamesFromParse = [];
    titles = (0, import_ext_gadget.uniqueArray)(titles);
    var _iterator = _createForOfIteratorHelper(titles), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        const title = _step.value;
        try {
          const response = yield parse(title);
          if (!response["parse"] || !response["parse"].links && !response["parse"].images) {
            continue;
          }
          if (response["parse"].links) {
            const regex = /(File:[^#]+)/;
            var _iterator2 = _createForOfIteratorHelper(response["parse"].links), _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                const {
                  title: titleName
                } = _step2.value;
                if (regex.test(titleName)) {
                  const match = regex.exec(titleName);
                  let [fileName] = match;
                  fileName = decodeURIComponent(fileName).replace(/((File|Image):)((File|Image):)?/i, "File:");
                  fileNamesFromParse[fileNamesFromParse.length] = fileName;
                  if (fileName.includes("+")) {
                    fileNamesFromParse[fileNamesFromParse.length] = fileName.replace("+", " ");
                  }
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }
          if (response["parse"].images) {
            var _iterator3 = _createForOfIteratorHelper(response["parse"].images), _step3;
            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
                const fileName = _step3.value;
                fileNamesFromParse[fileNamesFromParse.length] = "File:".concat(fileName);
                if ("".concat(fileName).includes("+")) {
                  fileNamesFromParse[fileNamesFromParse.length] = "File:".concat(fileName).replace("+", " ");
                }
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          }
        } catch {
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return (0, import_ext_gadget.uniqueArray)(fileNamesFromParse);
  });
  return function getElementsFromParse2(_x2) {
    return _ref2.apply(this, arguments);
  };
})();
var queryImages = /* @__PURE__ */ (function() {
  var _ref3 = _asyncToGenerator(function* (titles) {
    const params = {
      titles,
      action: "query",
      format: "json",
      formatversion: "2",
      prop: "images",
      imlimit: 5e3
    };
    const response = yield import_ext_gadget2.api.get(params);
    return response;
  });
  return function queryImages2(_x3) {
    return _ref3.apply(this, arguments);
  };
})();
var getImagesFromElements = (fileLinkElements) => {
  const fileNames = [];
  fileLinkElements = (0, import_ext_gadget.uniqueArray)(fileLinkElements);
  const {
    wgArticlePath,
    wgScript
  } = mw.config.get();
  const articleRegex = new RegExp("".concat(wgArticlePath.replace("$1", ""), "(File:[^#]+)"));
  const scriptRegex = new RegExp("".concat(wgScript, "\\?title=(File:[^#&]+)"));
  var _iterator4 = _createForOfIteratorHelper(fileLinkElements), _step4;
  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
      const element = _step4.value;
      const {
        href,
        classList
      } = element;
      if (!href || href.includes("redlink=1")) {
        continue;
      }
      if (classList.contains("new")) {
        continue;
      }
      let fileName;
      if (articleRegex.test(href)) {
        const match = articleRegex.exec(href);
        fileName = match[1];
        if (fileName) {
          fileName = decodeURIComponent(fileName).replace(/((File|Image):)((File|Image):)?/i, "File:");
          fileNames[fileNames.length] = fileName;
          if (fileName.includes("+")) {
            fileNames[fileNames.length] = fileName.replace("+", " ");
          }
        }
      }
      if (scriptRegex.test(href)) {
        const match = scriptRegex.exec(href);
        fileName = match[1];
        if (fileName) {
          fileName = decodeURIComponent(fileName).replace(/((File|Image):)((File|Image):)?/i, "File:");
          fileNames[fileNames.length] = fileName;
          if (fileName.includes("+")) {
            fileNames[fileNames.length] = fileName.replace("+", " ");
          }
        }
      }
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
  return (0, import_ext_gadget.uniqueArray)(fileNames);
};
var getImages = /* @__PURE__ */ (function() {
  var _ref4 = _asyncToGenerator(function* (titles) {
    const fileNames = [];
    titles = (0, import_ext_gadget.uniqueArray)((0, import_ext_gadget.generateArray)(titles));
    for (let i = 0; i < titles.length; i++) {
      const querytitles = titles.splice(0, 25);
      if (!querytitles.length) {
        continue;
      }
      try {
        const response = yield queryImages(querytitles);
        if (!response["query"] || !response["query"].pages) {
          continue;
        }
        var _iterator5 = _createForOfIteratorHelper(response["query"].pages), _step5;
        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
            const page = _step5.value;
            if (!page.images) {
              continue;
            }
            var _iterator6 = _createForOfIteratorHelper(page.images), _step6;
            try {
              for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
                const {
                  title
                } = _step6.value;
                if (!title) {
                  continue;
                }
                fileNames[fileNames.length] = title;
              }
            } catch (err) {
              _iterator6.e(err);
            } finally {
              _iterator6.f();
            }
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
      } catch {
      }
    }
    return (0, import_ext_gadget.uniqueArray)(fileNames);
  });
  return function getImages2(_x4) {
    return _ref4.apply(this, arguments);
  };
})();
var getAllImages = /* @__PURE__ */ (function() {
  var _ref5 = _asyncToGenerator(function* (titles) {
    toastifyInstance.hideToast();
    (0, import_ext_gadget3.toastify)({
      text: "正在获取迁移目标",
      duration: -1
    }, "info");
    let fileNames = [];
    const {
      wgNamespaceNumber,
      wgPageName
    } = mw.config.get();
    if (!titles || !titles.length) {
      titles = wgNamespaceNumber < 0 ? [] : [wgPageName];
    }
    const elementsFromPage = getElements(document);
    const fileNamesFromPage = getImagesFromElements(elementsFromPage);
    const fileNamesFromParse = yield getElementsFromParse(fileNamesFromPage);
    fileNames = (0, import_ext_gadget.uniqueArray)([...fileNamesFromPage, ...fileNamesFromParse, ...yield getImages([...titles, ...fileNamesFromPage])]);
    toastifyInstance.hideToast();
    toastifyInstance = (0, import_ext_gadget3.toastify)({
      text: "获取迁移目标完成",
      duration: -1
    }, "success");
    return (0, import_ext_gadget.uniqueArray)(fileNames);
  });
  return function getAllImages2(_x5) {
    return _ref5.apply(this, arguments);
  };
})();
//! src/QuickImportAllMedia/QuickImportAllMedia.ts
(function quickImportAllMedia() {
  const {
    wgCanonicalSpecialPageName,
    wgCurRevisionId
  } = mw.config.get();
  if (!(wgCurRevisionId || ["Prefixindex", "BrokenRedirects", "Wantedfiles"].includes(wgCanonicalSpecialPageName || ""))) {
    return;
  }
  const portletId = document.querySelector("#p-cactions") ? "p-cactions" : "p-tb";
  const element = mw.util.addPortletLink(portletId, "#", "导入此页面所有文件", "t-import");
  if (!element) {
    return;
  }
  element.addEventListener("click", () => {
    void _asyncToGenerator(function* () {
      const fileNames = yield getAllImages();
      if (!fileNames.length) {
        return;
      }
      yield (0, import_ext_gadget4.detectIfFileRedirect)(fileNames, true);
    })().then(() => {
      (0, import_ext_gadget4.refreshPage)();
    });
  });
})();
window.getAllImages = getAllImages;

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1F1aWNrSW1wb3J0QWxsTWVkaWEvUXVpY2tJbXBvcnRBbGxNZWRpYS50cyIsICJzcmMvUXVpY2tJbXBvcnRBbGxNZWRpYS9tb2R1bGVzL2NvcmUudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7ZGV0ZWN0SWZGaWxlUmVkaXJlY3QsIHJlZnJlc2hQYWdlfSBmcm9tICdleHQuZ2FkZ2V0LlF1aWNrSW1wb3J0JztcbmltcG9ydCB7Z2V0QWxsSW1hZ2VzfSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG5cbihmdW5jdGlvbiBxdWlja0ltcG9ydEFsbE1lZGlhKCk6IHZvaWQge1xuXHRjb25zdCB7d2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUsIHdnQ3VyUmV2aXNpb25JZH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGlmIChcblx0XHQhKFxuXHRcdFx0d2dDdXJSZXZpc2lvbklkIHx8XG5cdFx0XHRbJ1ByZWZpeGluZGV4JywgJ0Jyb2tlblJlZGlyZWN0cycsICdXYW50ZWRmaWxlcyddLmluY2x1ZGVzKHdnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lIHx8ICcnKVxuXHRcdClcblx0KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgcG9ydGxldElkOiAncC1jYWN0aW9ucycgfCAncC10YicgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcC1jYWN0aW9ucycpID8gJ3AtY2FjdGlvbnMnIDogJ3AtdGInO1xuXHRjb25zdCBlbGVtZW50OiBIVE1MTElFbGVtZW50IHwgbnVsbCA9IG13LnV0aWwuYWRkUG9ydGxldExpbmsocG9ydGxldElkLCAnIycsICflr7zlhaXmraTpobXpnaLmiYDmnInmlofku7YnLCAndC1pbXBvcnQnKTtcblx0aWYgKCFlbGVtZW50KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpOiB2b2lkID0+IHtcblx0XHR2b2lkIChhc3luYyAoKSA9PiB7XG5cdFx0XHRjb25zdCBmaWxlTmFtZXMgPSBhd2FpdCBnZXRBbGxJbWFnZXMoKTtcblx0XHRcdGlmICghZmlsZU5hbWVzLmxlbmd0aCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRhd2FpdCBkZXRlY3RJZkZpbGVSZWRpcmVjdChmaWxlTmFtZXMsIHRydWUpO1xuXHRcdH0pKCkudGhlbigoKSA9PiB7XG5cdFx0XHRyZWZyZXNoUGFnZSgpO1xuXHRcdH0pO1xuXHR9KTtcbn0pKCk7XG5cbndpbmRvdy5nZXRBbGxJbWFnZXMgPSBnZXRBbGxJbWFnZXM7XG4iLCAiaW1wb3J0IHtnZW5lcmF0ZUFycmF5LCB1bmlxdWVBcnJheX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7YXBpfSBmcm9tICdleHQuZ2FkZ2V0LlF1aWNrSW1wb3J0JztcbmltcG9ydCB7dG9hc3RpZnl9IGZyb20gJ2V4dC5nYWRnZXQuVG9hc3RpZnknO1xuXG5sZXQgdG9hc3RpZnlJbnN0YW5jZTogVG9hc3RpZnlJbnN0YW5jZSA9IHtcblx0aGlkZVRvYXN0OiAoKSA9PiB7fSxcbn07XG5cbmNvbnN0IHBhcnNlID0gYXN5bmMgKHBhZ2U6IHN0cmluZykgPT4ge1xuXHRjb25zdCBwYXJhbXM6IEFwaVBhcnNlUGFyYW1zID0ge1xuXHRcdHBhZ2UsXG5cdFx0YWN0aW9uOiAncGFyc2UnLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRwcm9wOiBbJ2xpbmtzJywgJ2ltYWdlcyddLFxuXHRcdHJlZGlyZWN0czogdHJ1ZSxcblx0XHRkaXNhYmxldG9jOiB0cnVlLFxuXHR9O1xuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5nZXQocGFyYW1zKTtcblxuXHRyZXR1cm4gcmVzcG9uc2U7XG59O1xuXG5jb25zdCBnZXRFbGVtZW50cyA9IChlbGVtZW50OiBEb2N1bWVudCB8IEhUTUxFbGVtZW50KSA9PiB7XG5cdHJldHVybiBbXG5cdFx0Li4uZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxBbmNob3JFbGVtZW50PihcImFbaHJlZl49Jy93aWtpL0ZpbGU6J11cIiksXG5cdFx0Li4uZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxBbmNob3JFbGVtZW50PihcImFbaHJlZio9J3RpdGxlPUZpbGU6J11cIiksXG5cdF07XG59O1xuXG5jb25zdCBnZXRFbGVtZW50c0Zyb21QYXJzZSA9IGFzeW5jICh0aXRsZXM6IHN0cmluZ1tdKSA9PiB7XG5cdGNvbnN0IGZpbGVOYW1lc0Zyb21QYXJzZTogc3RyaW5nW10gPSBbXTtcblx0dGl0bGVzID0gdW5pcXVlQXJyYXkodGl0bGVzKTtcblxuXHRmb3IgKGNvbnN0IHRpdGxlIG9mIHRpdGxlcykge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IHBhcnNlKHRpdGxlKTtcblx0XHRcdGlmICghcmVzcG9uc2VbJ3BhcnNlJ10gfHwgKCFyZXNwb25zZVsncGFyc2UnXS5saW5rcyAmJiAhcmVzcG9uc2VbJ3BhcnNlJ10uaW1hZ2VzKSkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHJlc3BvbnNlWydwYXJzZSddLmxpbmtzKSB7XG5cdFx0XHRcdGNvbnN0IHJlZ2V4OiBSZWdFeHAgPSAvKEZpbGU6W14jXSspLztcblxuXHRcdFx0XHRmb3IgKGNvbnN0IHt0aXRsZTogdGl0bGVOYW1lfSBvZiByZXNwb25zZVsncGFyc2UnXS5saW5rcyBhcyB7dGl0bGU6IHN0cmluZ31bXSkge1xuXHRcdFx0XHRcdGlmIChyZWdleC50ZXN0KHRpdGxlTmFtZSkpIHtcblx0XHRcdFx0XHRcdGNvbnN0IG1hdGNoOiBSZWdFeHBFeGVjQXJyYXkgPSByZWdleC5leGVjKHRpdGxlTmFtZSkgYXMgUmVnRXhwRXhlY0FycmF5O1xuXHRcdFx0XHRcdFx0bGV0IFtmaWxlTmFtZV0gPSBtYXRjaDtcblx0XHRcdFx0XHRcdGZpbGVOYW1lID0gZGVjb2RlVVJJQ29tcG9uZW50KGZpbGVOYW1lKS5yZXBsYWNlKC8oKEZpbGV8SW1hZ2UpOikoKEZpbGV8SW1hZ2UpOik/L2ksICdGaWxlOicpO1xuXHRcdFx0XHRcdFx0ZmlsZU5hbWVzRnJvbVBhcnNlW2ZpbGVOYW1lc0Zyb21QYXJzZS5sZW5ndGhdID0gZmlsZU5hbWU7XG5cdFx0XHRcdFx0XHRpZiAoZmlsZU5hbWUuaW5jbHVkZXMoJysnKSkge1xuXHRcdFx0XHRcdFx0XHRmaWxlTmFtZXNGcm9tUGFyc2VbZmlsZU5hbWVzRnJvbVBhcnNlLmxlbmd0aF0gPSBmaWxlTmFtZS5yZXBsYWNlKCcrJywgJyAnKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYgKHJlc3BvbnNlWydwYXJzZSddLmltYWdlcykge1xuXHRcdFx0XHRmb3IgKGNvbnN0IGZpbGVOYW1lIG9mIHJlc3BvbnNlWydwYXJzZSddLmltYWdlcykge1xuXHRcdFx0XHRcdGZpbGVOYW1lc0Zyb21QYXJzZVtmaWxlTmFtZXNGcm9tUGFyc2UubGVuZ3RoXSA9IGBGaWxlOiR7ZmlsZU5hbWV9YDtcblx0XHRcdFx0XHRpZiAoYCR7ZmlsZU5hbWV9YC5pbmNsdWRlcygnKycpKSB7XG5cdFx0XHRcdFx0XHRmaWxlTmFtZXNGcm9tUGFyc2VbZmlsZU5hbWVzRnJvbVBhcnNlLmxlbmd0aF0gPSBgRmlsZToke2ZpbGVOYW1lfWAucmVwbGFjZSgnKycsICcgJyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCB7fVxuXHR9XG5cblx0cmV0dXJuIHVuaXF1ZUFycmF5KGZpbGVOYW1lc0Zyb21QYXJzZSk7XG59O1xuXG5jb25zdCBxdWVyeUltYWdlcyA9IGFzeW5jICh0aXRsZXM6IHN0cmluZyB8IHN0cmluZ1tdKSA9PiB7XG5cdGNvbnN0IHBhcmFtczogQXBpUXVlcnlJbWFnZXNQYXJhbXMgPSB7XG5cdFx0dGl0bGVzLFxuXHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0cHJvcDogJ2ltYWdlcycsXG5cdFx0aW1saW1pdDogNTAwMCxcblx0fTtcblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cblx0cmV0dXJuIHJlc3BvbnNlO1xufTtcblxuY29uc3QgZ2V0SW1hZ2VzRnJvbUVsZW1lbnRzID0gKGZpbGVMaW5rRWxlbWVudHM6IEhUTUxBbmNob3JFbGVtZW50W10pID0+IHtcblx0Y29uc3QgZmlsZU5hbWVzOiBzdHJpbmdbXSA9IFtdO1xuXHRmaWxlTGlua0VsZW1lbnRzID0gdW5pcXVlQXJyYXkoZmlsZUxpbmtFbGVtZW50cyk7XG5cdGNvbnN0IHt3Z0FydGljbGVQYXRoLCB3Z1NjcmlwdH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGNvbnN0IGFydGljbGVSZWdleDogUmVnRXhwID0gbmV3IFJlZ0V4cChgJHt3Z0FydGljbGVQYXRoLnJlcGxhY2UoJyQxJywgJycpfShGaWxlOlteI10rKWApO1xuXHRjb25zdCBzY3JpcHRSZWdleDogUmVnRXhwID0gbmV3IFJlZ0V4cChgJHt3Z1NjcmlwdH1cXFxcP3RpdGxlPShGaWxlOlteIyZdKylgKTtcblxuXHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgZmlsZUxpbmtFbGVtZW50cykge1xuXHRcdC8vIFJlcGxhY2UgU2V0IHdpdGggdW5pcXVlQXJyYXksIGF2b2lkaW5nIGNvcmUtanMgcG9seWZpbGxpbmdcblx0XHRjb25zdCB7aHJlZiwgY2xhc3NMaXN0fSA9IGVsZW1lbnQ7XG5cblx0XHRpZiAoIWhyZWYgfHwgaHJlZi5pbmNsdWRlcygncmVkbGluaz0xJykpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGlmIChjbGFzc0xpc3QuY29udGFpbnMoJ25ldycpKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRsZXQgZmlsZU5hbWU6IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0XHRpZiAoYXJ0aWNsZVJlZ2V4LnRlc3QoaHJlZikpIHtcblx0XHRcdGNvbnN0IG1hdGNoOiBSZWdFeHBFeGVjQXJyYXkgPSBhcnRpY2xlUmVnZXguZXhlYyhocmVmKSBhcyBSZWdFeHBFeGVjQXJyYXk7XG5cdFx0XHRmaWxlTmFtZSA9IG1hdGNoWzFdO1xuXHRcdFx0aWYgKGZpbGVOYW1lKSB7XG5cdFx0XHRcdGZpbGVOYW1lID0gZGVjb2RlVVJJQ29tcG9uZW50KGZpbGVOYW1lKS5yZXBsYWNlKC8oKEZpbGV8SW1hZ2UpOikoKEZpbGV8SW1hZ2UpOik/L2ksICdGaWxlOicpO1xuXHRcdFx0XHRmaWxlTmFtZXNbZmlsZU5hbWVzLmxlbmd0aF0gPSBmaWxlTmFtZTtcblx0XHRcdFx0aWYgKGZpbGVOYW1lLmluY2x1ZGVzKCcrJykpIHtcblx0XHRcdFx0XHRmaWxlTmFtZXNbZmlsZU5hbWVzLmxlbmd0aF0gPSBmaWxlTmFtZS5yZXBsYWNlKCcrJywgJyAnKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChzY3JpcHRSZWdleC50ZXN0KGhyZWYpKSB7XG5cdFx0XHRjb25zdCBtYXRjaDogUmVnRXhwRXhlY0FycmF5ID0gc2NyaXB0UmVnZXguZXhlYyhocmVmKSBhcyBSZWdFeHBFeGVjQXJyYXk7XG5cdFx0XHRmaWxlTmFtZSA9IG1hdGNoWzFdO1xuXHRcdFx0aWYgKGZpbGVOYW1lKSB7XG5cdFx0XHRcdGZpbGVOYW1lID0gZGVjb2RlVVJJQ29tcG9uZW50KGZpbGVOYW1lKS5yZXBsYWNlKC8oKEZpbGV8SW1hZ2UpOikoKEZpbGV8SW1hZ2UpOik/L2ksICdGaWxlOicpO1xuXHRcdFx0XHRmaWxlTmFtZXNbZmlsZU5hbWVzLmxlbmd0aF0gPSBmaWxlTmFtZTtcblx0XHRcdFx0aWYgKGZpbGVOYW1lLmluY2x1ZGVzKCcrJykpIHtcblx0XHRcdFx0XHRmaWxlTmFtZXNbZmlsZU5hbWVzLmxlbmd0aF0gPSBmaWxlTmFtZS5yZXBsYWNlKCcrJywgJyAnKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB1bmlxdWVBcnJheShmaWxlTmFtZXMpO1xufTtcblxuY29uc3QgZ2V0SW1hZ2VzID0gYXN5bmMgKHRpdGxlczogc3RyaW5nIHwgc3RyaW5nW10pID0+IHtcblx0Y29uc3QgZmlsZU5hbWVzOiBzdHJpbmdbXSA9IFtdO1xuXHR0aXRsZXMgPSB1bmlxdWVBcnJheShnZW5lcmF0ZUFycmF5KHRpdGxlcykpO1xuXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgdGl0bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y29uc3QgcXVlcnl0aXRsZXMgPSB0aXRsZXMuc3BsaWNlKDAsIDI1KTtcblx0XHRpZiAoIXF1ZXJ5dGl0bGVzLmxlbmd0aCkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcXVlcnlJbWFnZXMocXVlcnl0aXRsZXMpO1xuXHRcdFx0aWYgKCFyZXNwb25zZVsncXVlcnknXSB8fCAhcmVzcG9uc2VbJ3F1ZXJ5J10ucGFnZXMpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdGZvciAoY29uc3QgcGFnZSBvZiByZXNwb25zZVsncXVlcnknXS5wYWdlcykge1xuXHRcdFx0XHRpZiAoIXBhZ2UuaW1hZ2VzKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRmb3IgKGNvbnN0IHt0aXRsZX0gb2YgcGFnZS5pbWFnZXMgYXMge1xuXHRcdFx0XHRcdG5zOiBudW1iZXI7XG5cdFx0XHRcdFx0dGl0bGU6IHN0cmluZztcblx0XHRcdFx0fVtdKSB7XG5cdFx0XHRcdFx0aWYgKCF0aXRsZSkge1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0ZmlsZU5hbWVzW2ZpbGVOYW1lcy5sZW5ndGhdID0gdGl0bGU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGNhdGNoIHt9XG5cdH1cblxuXHRyZXR1cm4gdW5pcXVlQXJyYXkoZmlsZU5hbWVzKTtcbn07XG5cbmNvbnN0IGdldEFsbEltYWdlcyA9IGFzeW5jICh0aXRsZXM/OiBzdHJpbmcgfCBzdHJpbmdbXSk6IFByb21pc2U8c3RyaW5nW10+ID0+IHtcblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogJ+ato+WcqOiOt+WPlui/geenu+ebruaghycsXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnaW5mbydcblx0KTtcblxuXHRsZXQgZmlsZU5hbWVzOiBzdHJpbmdbXSA9IFtdO1xuXHRjb25zdCB7d2dOYW1lc3BhY2VOdW1iZXIsIHdnUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGlmICghdGl0bGVzIHx8ICF0aXRsZXMubGVuZ3RoKSB7XG5cdFx0dGl0bGVzID0gd2dOYW1lc3BhY2VOdW1iZXIgPCAwID8gW10gOiBbd2dQYWdlTmFtZV07XG5cdH1cblxuXHRjb25zdCBlbGVtZW50c0Zyb21QYWdlID0gZ2V0RWxlbWVudHMoZG9jdW1lbnQpO1xuXHRjb25zdCBmaWxlTmFtZXNGcm9tUGFnZSA9IGdldEltYWdlc0Zyb21FbGVtZW50cyhlbGVtZW50c0Zyb21QYWdlKTtcblx0Y29uc3QgZmlsZU5hbWVzRnJvbVBhcnNlID0gYXdhaXQgZ2V0RWxlbWVudHNGcm9tUGFyc2UoZmlsZU5hbWVzRnJvbVBhZ2UpO1xuXG5cdGZpbGVOYW1lcyA9IHVuaXF1ZUFycmF5KFtcblx0XHQuLi5maWxlTmFtZXNGcm9tUGFnZSxcblx0XHQuLi5maWxlTmFtZXNGcm9tUGFyc2UsXG5cdFx0Li4uKGF3YWl0IGdldEltYWdlcyhbLi4udGl0bGVzLCAuLi5maWxlTmFtZXNGcm9tUGFnZV0pKSxcblx0XSk7XG5cblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdHtcblx0XHRcdHRleHQ6ICfojrflj5bov4Hnp7vnm67moIflrozmiJAnLFxuXHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdH0sXG5cdFx0J3N1Y2Nlc3MnXG5cdCk7XG5cblx0cmV0dXJuIHVuaXF1ZUFycmF5KGZpbGVOYW1lcyk7IC8vIFJlcGxhY2UgU2V0IHdpdGggdW5pcXVlQXJyYXksIGF2b2lkaW5nIGNvcmUtanMgcG9seWZpbGxpbmdcbn07XG5cbmV4cG9ydCB7Z2V0QWxsSW1hZ2VzfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHFCQUFnREMsUUFBQSx3QkFBQTs7QUNBaEQsSUFBQUMsb0JBQXlDRCxRQUFBLGlCQUFBO0FBQ3pDLElBQUFFLHFCQUFrQkYsUUFBQSx3QkFBQTtBQUNsQixJQUFBRyxxQkFBdUJILFFBQUEscUJBQUE7QUFFdkIsSUFBSUksbUJBQXFDO0VBQ3hDQyxXQUFXQSxNQUFNO0VBQUM7QUFDbkI7QUFFQSxJQUFNQyxRQUFBLDRCQUFBO0FBQUEsTUFBQUMsT0FBQUMsa0JBQVEsV0FBT0MsTUFBaUI7QUFDckMsVUFBTUMsU0FBeUI7TUFDOUJEO01BQ0FFLFFBQVE7TUFDUkMsUUFBUTtNQUNSQyxlQUFlO01BQ2ZDLE1BQU0sQ0FBQyxTQUFTLFFBQVE7TUFDeEJDLFdBQVc7TUFDWEMsWUFBWTtJQUNiO0FBQ0EsVUFBTUMsV0FBQSxNQUFpQmYsbUJBQUFnQixJQUFJQyxJQUFJVCxNQUFNO0FBRXJDLFdBQU9PO0VBQ1IsQ0FBQTtBQUFBLFNBQUEsU0FiTVgsT0FBQWMsSUFBQTtBQUFBLFdBQUFiLEtBQUFjLE1BQUEsTUFBQUMsU0FBQTtFQUFBO0FBQUEsR0FBQTtBQWVOLElBQU1DLGNBQWVDLGFBQW9DO0FBQ3hELFNBQU8sQ0FDTixHQUFHQSxRQUFRQyxpQkFBb0Msd0JBQXdCLEdBQ3ZFLEdBQUdELFFBQVFDLGlCQUFvQyx3QkFBd0IsQ0FBQTtBQUV6RTtBQUVBLElBQU1DLHVCQUFBLDRCQUFBO0FB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LEtBQUtDLGVBQWVILFdBQVcsS0FBSyxhQUFhLFVBQVU7QUFDcEcsTUFBSSxDQUFDakYsU0FBUztBQUNiO0VBQ0Q7QUFFQUEsVUFBUXFGLGlCQUFpQixTQUFTLE1BQVk7QUFDN0MsU0FBQXJHLGtCQUFNLGFBQVk7QUFDakIsWUFBTTBELFlBQUEsTUFBa0J5QixhQUFhO0FBQ3JDLFVBQUksQ0FBQ3pCLFVBQVVmLFFBQVE7QUFDdEI7TUFDRDtBQUNBLGFBQUEsR0FBTXBELG1CQUFBK0csc0JBQXFCNUMsV0FBVyxJQUFJO0lBQzNDLENBQUEsRUFBRyxFQUFFNkMsS0FBSyxNQUFNO0FBQ2YsT0FBQSxHQUFBaEgsbUJBQUFpSCxhQUFZO0lBQ2IsQ0FBQztFQUNGLENBQUM7QUFDRixHQUFHO0FBRUhDLE9BQU90QixlQUFlQTsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2V4dF9nYWRnZXQ0IiwgInJlcXVpcmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJ0b2FzdGlmeUluc3RhbmNlIiwgImhpZGVUb2FzdCIsICJwYXJzZSIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgInBhZ2UiLCAicGFyYW1zIiwgImFjdGlvbiIsICJmb3JtYXQiLCAiZm9ybWF0dmVyc2lvbiIsICJwcm9wIiwgInJlZGlyZWN0cyIsICJkaXNhYmxldG9jIiwgInJlc3BvbnNlIiwgImFwaSIsICJnZXQiLCAiX3giLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgImdldEVsZW1lbnRzIiwgImVsZW1lbnQiLCAicXVlcnlTZWxlY3RvckFsbCIsICJnZXRFbGVtZW50c0Zyb21QYXJzZSIsICJfcmVmMiIsICJ0aXRsZXMiLCAiZmlsZU5hbWVzRnJvbVBhcnNlIiwgInVuaXF1ZUFycmF5IiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcCIsICJzIiwgIm4iLCAiZG9uZSIsICJ0aXRsZSIsICJ2YWx1ZSIsICJsaW5rcyIsICJpbWFnZXMiLCAicmVnZXgiLCAiX2l0ZXJhdG9yMiIsICJfc3RlcDIiLCAidGl0bGVOYW1lIiwgInRlc3QiLCAibWF0Y2giLCAiZXhlYyIsICJmaWxlTmFtZSIsICJkZWNvZGVVUklDb21wb25lbnQiLCAicmVwbGFjZSIsICJsZW5ndGgiLCAiaW5jbHVkZXMiLCAiZXJyIiwgImUiLCAiZiIsICJfaXRlcmF0b3IzIiwgIl9zdGVwMyIsICJjb25jYXQiLCAiX3gyIiwgInF1ZXJ5SW1hZ2VzIiwgIl9yZWYzIiwgImltbGltaXQiLCAiX3gzIiwgImdldEltYWdlc0Zyb21FbGVtZW50cyIsICJmaWxlTGlua0VsZW1lbnRzIiwgImZpbGVOYW1lcyIsICJ3Z0FydGljbGVQYXRoIiwgIndnU2NyaXB0IiwgIm13IiwgImNvbmZpZyIsICJhcnRpY2xlUmVnZXgiLCAiUmVnRXhwIiwgInNjcmlwdFJlZ2V4IiwgIl9pdGVyYXRvcjQiLCAiX3N0ZXA0IiwgImhyZWYiLCAiY2xhc3NMaXN0IiwgImNvbnRhaW5zIiwgImdldEltYWdlcyIsICJfcmVmNCIsICJnZW5lcmF0ZUFycmF5IiwgImkiLCAicXVlcnl0aXRsZXMiLCAic3BsaWNlIiwgInBhZ2VzIiwgIl9pdGVyYXRvcjUiLCAiX3N0ZXA1IiwgIl9pdGVyYXRvcjYiLCAiX3N0ZXA2IiwgIl94NCIsICJnZXRBbGxJbWFnZXMiLCAiX3JlZjUiLCAidG9hc3RpZnkiLCAidGV4dCIsICJkdXJhdGlvbiIsICJ3Z05hbWVzcGFjZU51bWJlciIsICJ3Z1BhZ2VOYW1lIiwgImVsZW1lbnRzRnJvbVBhZ2UiLCAiZG9jdW1lbnQiLCAiZmlsZU5hbWVzRnJvbVBhZ2UiLCAiX3g1IiwgInF1aWNrSW1wb3J0QWxsTWVkaWEiLCAid2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUiLCAid2dDdXJSZXZpc2lvbklkIiwgInBvcnRsZXRJZCIsICJxdWVyeVNlbGVjdG9yIiwgInV0aWwiLCAiYWRkUG9ydGxldExpbmsiLCAiYWRkRXZlbnRMaXN0ZW5lciIsICJkZXRlY3RJZkZpbGVSZWRpcmVjdCIsICJ0aGVuIiwgInJlZnJlc2hQYWdlIiwgIndpbmRvdyJdCn0K
