/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source {@link https://github.com/FurryWiki/FurryWikiGadgets/tree/master/src/Group-importer_JS}
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

// dist/Group-importer_JS/Group-importer_JS.js
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
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all) __defProp(target, name, {
    get: all[name],
    enumerable: true
  });
};
//! src/Group-importer_JS/options.json
var options_exports = {};
__export(options_exports, {
  configKey: () => configKey,
  default: () => options_default
});
var configKey = "gadget-Group-importer_JS__Initialized";
var options_default = {
  configKey
};
//! src/Group-importer_JS/modules/fixCheckbox.ts
var fixCheckbox = () => {
  const {
    wgCanonicalSpecialPageName,
    wgWikiID
  } = mw.config.get();
  if (wgCanonicalSpecialPageName !== "Import") {
    return;
  }
  const interwikiHistory = document.querySelector("input[name=interwikiHistory]");
  const interwikiTemplates = document.querySelector("input[name=interwikiTemplates]");
  if (interwikiHistory) {
    interwikiHistory.checked = false;
  }
  if (interwikiTemplates) {
    interwikiTemplates.checked = false;
  }
  if (wgWikiID === "furrywiki") {
    if (interwikiHistory) {
      interwikiHistory.disabled = true;
    }
    if (interwikiTemplates) {
      interwikiTemplates.disabled = true;
    }
  }
  const form = document.querySelector("#mw-import-interwiki-form");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      void _asyncToGenerator(function* () {
        if (!interwikiHistory || !interwikiHistory.checked) {
          return;
        }
        const confirmed = yield OO.ui.confirm("您是否要导入此页面的所有版本？");
        if (!confirmed) {
          interwikiHistory.checked = false;
        }
      })().then(/* @__PURE__ */ _asyncToGenerator(function* () {
        if (!interwikiTemplates || !interwikiTemplates.checked) {
          return;
        }
        const confirmed = yield OO.ui.confirm("您是否要导入此页面所包含的所有模板和其他页面？");
        if (!confirmed) {
          interwikiTemplates.checked = false;
        }
      })).then(() => {
        form.submit();
      });
    });
  }
};
//! src/Group-importer_JS/modules/fixSummary.ts
var fixSummary = () => {
  const {
    wgCanonicalSpecialPageName
  } = mw.config.get();
  if (wgCanonicalSpecialPageName === "Import") {
    const defaultSummary = "页面文字原许可：[[cc-by-sa:4.0|CC BY-SA 4.0]]；作者请参见来源页面历史";
    const defaultFileImportSummary = "".concat(defaultSummary, "；文件作者请参见此页面及来源页面记载");
    const userNamePrefixInput = document.querySelector("#mw-import-upload-form input[name=usernamePrefix]");
    if (userNamePrefixInput) {
      userNamePrefixInput.addEventListener("input", () => {
        const uploadLogCommentInput = document.querySelector("#mw-import-upload-form input[name=log-comment]");
        if (!uploadLogCommentInput) {
          return;
        }
        const importUploadPrefix = userNamePrefixInput === null || userNamePrefixInput === void 0 ? void 0 : userNamePrefixInput.value;
        uploadLogCommentInput.value = "导入自[[".concat(importUploadPrefix, ":|此网站]]的同名页面［").concat(importUploadPrefix === "commons" ? defaultFileImportSummary : defaultSummary, "］");
      });
    }
    const interwikiLogCommentInput = document.querySelector("#mw-import-interwiki-form input[name=log-comment]");
    const interwikiPrefixSelect = document.querySelector("#mw-import-interwiki-form select[name=interwiki]");
    if (interwikiLogCommentInput) {
      interwikiLogCommentInput.value = defaultSummary;
      if (interwikiPrefixSelect) {
        interwikiPrefixSelect.addEventListener("change", () => {
          switch (interwikiPrefixSelect.value) {
            case "commons":
              interwikiLogCommentInput.value = "［".concat(defaultFileImportSummary, "］");
              break;
            default:
              interwikiLogCommentInput.value = "［".concat(defaultSummary, "］");
              break;
          }
        });
      }
    }
    const assignKnownUsers = document.querySelectorAll("input[name=assignKnownUsers]");
    if (assignKnownUsers.length) {
      var _iterator = _createForOfIteratorHelper(assignKnownUsers), _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
          const checkBox = _step.value;
          checkBox.checked = true;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }
};
//! src/Group-importer_JS/Group-importer_JS.ts
(function userJS() {
  const {
    configKey: configKey2
  } = options_exports;
  if (mw.config.get(configKey2)) {
    return;
  }
  mw.config.set(configKey2, true);
  fixCheckbox();
  fixSummary();
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0dyb3VwLWltcG9ydGVyX0pTL29wdGlvbnMuanNvbiIsICJzcmMvR3JvdXAtaW1wb3J0ZXJfSlMvbW9kdWxlcy9maXhDaGVja2JveC50cyIsICJzcmMvR3JvdXAtaW1wb3J0ZXJfSlMvbW9kdWxlcy9maXhTdW1tYXJ5LnRzIiwgInNyYy9Hcm91cC1pbXBvcnRlcl9KUy9Hcm91cC1pbXBvcnRlcl9KUy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsie1xuXHRcImNvbmZpZ0tleVwiOiBcImdhZGdldC1Hcm91cC1pbXBvcnRlcl9KU19fSW5pdGlhbGl6ZWRcIlxufVxuIiwgImNvbnN0IGZpeENoZWNrYm94ID0gKCkgPT4ge1xuXHRjb25zdCB7d2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUsIHdnV2lraUlEfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRpZiAod2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUgIT09ICdJbXBvcnQnKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgaW50ZXJ3aWtpSGlzdG9yeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oJ2lucHV0W25hbWU9aW50ZXJ3aWtpSGlzdG9yeV0nKTtcblx0Y29uc3QgaW50ZXJ3aWtpVGVtcGxhdGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MSW5wdXRFbGVtZW50PignaW5wdXRbbmFtZT1pbnRlcndpa2lUZW1wbGF0ZXNdJyk7XG5cblx0aWYgKGludGVyd2lraUhpc3RvcnkpIHtcblx0XHRpbnRlcndpa2lIaXN0b3J5LmNoZWNrZWQgPSBmYWxzZTtcblx0fVxuXG5cdGlmIChpbnRlcndpa2lUZW1wbGF0ZXMpIHtcblx0XHRpbnRlcndpa2lUZW1wbGF0ZXMuY2hlY2tlZCA9IGZhbHNlO1xuXHR9XG5cblx0aWYgKHdnV2lraUlEID09PSAnZnVycnl3aWtpJykge1xuXHRcdGlmIChpbnRlcndpa2lIaXN0b3J5KSB7XG5cdFx0XHRpbnRlcndpa2lIaXN0b3J5LmRpc2FibGVkID0gdHJ1ZTtcblx0XHR9XG5cblx0XHRpZiAoaW50ZXJ3aWtpVGVtcGxhdGVzKSB7XG5cdFx0XHRpbnRlcndpa2lUZW1wbGF0ZXMuZGlzYWJsZWQgPSB0cnVlO1xuXHRcdH1cblx0fVxuXG5cdGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxGb3JtRWxlbWVudD4oJyNtdy1pbXBvcnQtaW50ZXJ3aWtpLWZvcm0nKTtcblxuXHRpZiAoZm9ybSkge1xuXHRcdGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50OiBTdWJtaXRFdmVudCk6IHZvaWQgPT4ge1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdHZvaWQgKGFzeW5jICgpID0+IHtcblx0XHRcdFx0aWYgKCFpbnRlcndpa2lIaXN0b3J5IHx8ICFpbnRlcndpa2lIaXN0b3J5LmNoZWNrZWQpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgY29uZmlybWVkID0gYXdhaXQgT08udWkuY29uZmlybSgn5oKo5piv5ZCm6KaB5a+85YWl5q2k6aG16Z2i55qE5omA5pyJ54mI5pys77yfJyk7XG5cdFx0XHRcdGlmICghY29uZmlybWVkKSB7XG5cdFx0XHRcdFx0aW50ZXJ3aWtpSGlzdG9yeS5jaGVja2VkID0gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH0pKClcblx0XHRcdFx0LnRoZW4oYXN5bmMgKCkgPT4ge1xuXHRcdFx0XHRcdGlmICghaW50ZXJ3aWtpVGVtcGxhdGVzIHx8ICFpbnRlcndpa2lUZW1wbGF0ZXMuY2hlY2tlZCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjb25zdCBjb25maXJtZWQgPSBhd2FpdCBPTy51aS5jb25maXJtKCfmgqjmmK/lkKbopoHlr7zlhaXmraTpobXpnaLmiYDljIXlkKvnmoTmiYDmnInmqKHmnb/lkozlhbbku5bpobXpnaLvvJ8nKTtcblx0XHRcdFx0XHRpZiAoIWNvbmZpcm1lZCkge1xuXHRcdFx0XHRcdFx0aW50ZXJ3aWtpVGVtcGxhdGVzLmNoZWNrZWQgPSBmYWxzZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC50aGVuKCgpID0+IHtcblx0XHRcdFx0XHRmb3JtLnN1Ym1pdCgpO1xuXHRcdFx0XHR9KTtcblx0XHR9KTtcblx0fVxufTtcblxuZXhwb3J0IHtmaXhDaGVja2JveH07XG4iLCAiY29uc3QgZml4U3VtbWFyeSA9ICgpOiB2b2lkID0+IHtcblx0Y29uc3Qge3dnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0aWYgKHdnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lID09PSAnSW1wb3J0Jykge1xuXHRcdGNvbnN0IGRlZmF1bHRTdW1tYXJ5ID0gJ+mhtemdouaWh+Wtl+WOn+iuuOWPr++8mltbY2MtYnktc2E6NC4wfENDIEJZLVNBIDQuMF1d77yb5L2c6ICF6K+35Y+C6KeB5p2l5rqQ6aG16Z2i5Y6G5Y+yJztcblx0XHRjb25zdCBkZWZhdWx0RmlsZUltcG9ydFN1bW1hcnkgPSBgJHtkZWZhdWx0U3VtbWFyeX3vvJvmlofku7bkvZzogIXor7flj4Lop4HmraTpobXpnaLlj4rmnaXmupDpobXpnaLorrDovb1gO1xuXG5cdFx0Ly8gI213LWltcG9ydC11cGxvYWQtZm9ybVxuXHRcdGNvbnN0IHVzZXJOYW1lUHJlZml4SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxJbnB1dEVsZW1lbnQ+KFxuXHRcdFx0JyNtdy1pbXBvcnQtdXBsb2FkLWZvcm0gaW5wdXRbbmFtZT11c2VybmFtZVByZWZpeF0nXG5cdFx0KTtcblx0XHRpZiAodXNlck5hbWVQcmVmaXhJbnB1dCkge1xuXHRcdFx0dXNlck5hbWVQcmVmaXhJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcblx0XHRcdFx0Y29uc3QgdXBsb2FkTG9nQ29tbWVudElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MSW5wdXRFbGVtZW50Pihcblx0XHRcdFx0XHQnI213LWltcG9ydC11cGxvYWQtZm9ybSBpbnB1dFtuYW1lPWxvZy1jb21tZW50XSdcblx0XHRcdFx0KTtcblx0XHRcdFx0aWYgKCF1cGxvYWRMb2dDb21tZW50SW5wdXQpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjb25zdCBpbXBvcnRVcGxvYWRQcmVmaXggPSB1c2VyTmFtZVByZWZpeElucHV0Py52YWx1ZTtcblx0XHRcdFx0dXBsb2FkTG9nQ29tbWVudElucHV0LnZhbHVlID0gYOWvvOWFpeiHqltbJHtpbXBvcnRVcGxvYWRQcmVmaXh9OnzmraTnvZHnq5ldXeeahOWQjOWQjemhtemdou+8uyR7aW1wb3J0VXBsb2FkUHJlZml4ID09PSAnY29tbW9ucycgPyBkZWZhdWx0RmlsZUltcG9ydFN1bW1hcnkgOiBkZWZhdWx0U3VtbWFyeX3vvL1gO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0Ly8gI213LWltcG9ydC1pbnRlcndpa2ktZm9ybVxuXHRcdGNvbnN0IGludGVyd2lraUxvZ0NvbW1lbnRJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oXG5cdFx0XHQnI213LWltcG9ydC1pbnRlcndpa2ktZm9ybSBpbnB1dFtuYW1lPWxvZy1jb21tZW50XSdcblx0XHQpO1xuXHRcdGNvbnN0IGludGVyd2lraVByZWZpeFNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTFNlbGVjdEVsZW1lbnQ+KFxuXHRcdFx0JyNtdy1pbXBvcnQtaW50ZXJ3aWtpLWZvcm0gc2VsZWN0W25hbWU9aW50ZXJ3aWtpXSdcblx0XHQpO1xuXG5cdFx0aWYgKGludGVyd2lraUxvZ0NvbW1lbnRJbnB1dCkge1xuXHRcdFx0aW50ZXJ3aWtpTG9nQ29tbWVudElucHV0LnZhbHVlID0gZGVmYXVsdFN1bW1hcnk7XG5cblx0XHRcdGlmIChpbnRlcndpa2lQcmVmaXhTZWxlY3QpIHtcblx0XHRcdFx0aW50ZXJ3aWtpUHJlZml4U2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcblx0XHRcdFx0XHRzd2l0Y2ggKGludGVyd2lraVByZWZpeFNlbGVjdC52YWx1ZSkge1xuXHRcdFx0XHRcdFx0Y2FzZSAnY29tbW9ucyc6XG5cdFx0XHRcdFx0XHRcdGludGVyd2lraUxvZ0NvbW1lbnRJbnB1dC52YWx1ZSA9IGDvvLske2RlZmF1bHRGaWxlSW1wb3J0U3VtbWFyeX3vvL1gO1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRcdGludGVyd2lraUxvZ0NvbW1lbnRJbnB1dC52YWx1ZSA9IGDvvLske2RlZmF1bHRTdW1tYXJ5fe+8vWA7XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gI2Fzc2lnbktub3duVXNlcnNcblx0XHRjb25zdCBhc3NpZ25Lbm93blVzZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MSW5wdXRFbGVtZW50PignaW5wdXRbbmFtZT1hc3NpZ25Lbm93blVzZXJzXScpO1xuXHRcdGlmIChhc3NpZ25Lbm93blVzZXJzLmxlbmd0aCkge1xuXHRcdFx0Zm9yIChjb25zdCBjaGVja0JveCBvZiBhc3NpZ25Lbm93blVzZXJzKSB7XG5cdFx0XHRcdGNoZWNrQm94LmNoZWNrZWQgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufTtcblxuZXhwb3J0IHtmaXhTdW1tYXJ5fTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7Zml4Q2hlY2tib3h9IGZyb20gJy4vbW9kdWxlcy9maXhDaGVja2JveCc7XG5pbXBvcnQge2ZpeFN1bW1hcnl9IGZyb20gJy4vbW9kdWxlcy9maXhTdW1tYXJ5JztcblxuKGZ1bmN0aW9uIHVzZXJKUygpOiB2b2lkIHtcblx0Y29uc3Qge2NvbmZpZ0tleX0gPSBPUFRJT05TO1xuXG5cdC8vIEd1YXJkIGFnYWluc3QgZG91YmxlIGluY2x1c2lvbnNcblx0aWYgKG13LmNvbmZpZy5nZXQoY29uZmlnS2V5KSkge1xuXHRcdHJldHVybjtcblx0fVxuXHQvLyBTZXQgZ3VhcmRcblx0bXcuY29uZmlnLnNldChjb25maWdLZXksIHRydWUpO1xuXG5cdC8qIOWPlua2iOWkjemAieahhiAqL1xuXHRmaXhDaGVja2JveCgpO1xuXHQvKiDkv67mlLnnvJbovpHmkZjopoEgKi9cblx0Zml4U3VtbWFyeSgpO1xufSkoKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLGtCQUFBLENBQUE7QUFBQUMsU0FBQUQsaUJBQUE7RUFBQUUsV0FBQUEsTUFBQUE7RUFBQUMsU0FBQUEsTUFBQUM7QUFBQSxDQUFBO0FBQ0MsSUFBQUYsWUFBYTtBQURkLElBQUFFLGtCQUFBO0VBQ0NGO0FBQ0Q7O0FDRkEsSUFBTUcsY0FBY0EsTUFBTTtBQUN6QixRQUFNO0lBQUNDO0lBQTRCQztFQUFRLElBQUlDLEdBQUdDLE9BQU9DLElBQUk7QUFFN0QsTUFBSUosK0JBQStCLFVBQVU7QUFDNUM7RUFDRDtBQUVBLFFBQU1LLG1CQUFtQkMsU0FBU0MsY0FBZ0MsOEJBQThCO0FBQ2hHLFFBQU1DLHFCQUFxQkYsU0FBU0MsY0FBZ0MsZ0NBQWdDO0FBRXBHLE1BQUlGLGtCQUFrQjtBQUNyQkEscUJBQWlCSSxVQUFVO0VBQzVCO0FBRUEsTUFBSUQsb0JBQW9CO0FBQ3ZCQSx1QkFBbUJDLFVBQVU7RUFDOUI7QUFFQSxNQUFJUixhQUFhLGFBQWE7QUFDN0IsUUFBSUksa0JBQWtCO0FBQ3JCQSx1QkFBaUJLLFdBQVc7SUFDN0I7QUFFQSxRQUFJRixvQkFBb0I7QUFDdkJB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O0FBRUE1QyxLQUFHQyxPQUFPNEMsSUFBSUQsWUFBVyxJQUFJO0FBRzdCL0MsY0FBWTtBQUVadUIsYUFBVztBQUNaLEdBQUc7IiwKICAibmFtZXMiOiBbIm9wdGlvbnNfZXhwb3J0cyIsICJfX2V4cG9ydCIsICJjb25maWdLZXkiLCAiZGVmYXVsdCIsICJvcHRpb25zX2RlZmF1bHQiLCAiZml4Q2hlY2tib3giLCAid2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUiLCAid2dXaWtpSUQiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJpbnRlcndpa2lIaXN0b3J5IiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3IiLCAiaW50ZXJ3aWtpVGVtcGxhdGVzIiwgImNoZWNrZWQiLCAiZGlzYWJsZWQiLCAiZm9ybSIsICJhZGRFdmVudExpc3RlbmVyIiwgImV2ZW50IiwgInByZXZlbnREZWZhdWx0IiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgImNvbmZpcm1lZCIsICJPTyIsICJ1aSIsICJjb25maXJtIiwgInRoZW4iLCAic3VibWl0IiwgImZpeFN1bW1hcnkiLCAiZGVmYXVsdFN1bW1hcnkiLCAiZGVmYXVsdEZpbGVJbXBvcnRTdW1tYXJ5IiwgImNvbmNhdCIsICJ1c2VyTmFtZVByZWZpeElucHV0IiwgInVwbG9hZExvZ0NvbW1lbnRJbnB1dCIsICJpbXBvcnRVcGxvYWRQcmVmaXgiLCAidmFsdWUiLCAiaW50ZXJ3aWtpTG9nQ29tbWVudElucHV0IiwgImludGVyd2lraVByZWZpeFNlbGVjdCIsICJhc3NpZ25Lbm93blVzZXJzIiwgInF1ZXJ5U2VsZWN0b3JBbGwiLCAibGVuZ3RoIiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcCIsICJzIiwgIm4iLCAiZG9uZSIsICJjaGVja0JveCIsICJlcnIiLCAiZSIsICJmIiwgInVzZXJKUyIsICJjb25maWdLZXkyIiwgInNldCJdCn0K
