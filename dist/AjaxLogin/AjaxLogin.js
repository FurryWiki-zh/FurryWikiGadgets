/**
 * SPDX-License-Identifier: GPL-3.0-or-later
 * _addText: '{{Gadget Header|license=GPL-3.0-or-later}}'
 *
 * @source {@link https://github.com/FurryWiki-zh/FurryWikiGadgets}
 * @author 安忆 <i@anyi.in>
 * @license GPL-3.0-or-later {@link https://furrywiki.org.cn/wiki/Help:GPL-3.0}
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

// dist/AjaxLogin/AjaxLogin.js
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
//! src/AjaxLogin/options.json
var loginElementSelector = 'a:has(.ajaxlogin-mount-point),#pt-login a,#pt-login>a,.vector-user-menu-login>a,#user-tools>a[href*="Special"],#p-personal a[href*="UserLogin"]';
var configKey = "gadget-AjaxLogin__Initialized";
var version = "4.1";
//! src/AjaxLogin/AjaxLogin.ts
var import_ext_gadget14 = require("ext.gadget.Util");
//! src/AjaxLogin/modules/addListener.ts
var import_ext_gadget = require("ext.gadget.FilterAlteredClicks");
var addListener = ($element, eventListener) => {
  $element.on("click", (0, import_ext_gadget.filterAlteredClicks)(eventListener));
  $element.on("keydown", eventListener);
};
//! src/AjaxLogin/modules/api.ts
var import_ext_gadget2 = require("ext.gadget.Util");
var api = (0, import_ext_gadget2.initMwApi)("AjaxLogin/".concat(version));
//! src/AjaxLogin/modules/core.tsx
var import_ext_gadget12 = __toESM(require("ext.gadget.JSX"), 1);
//! src/AjaxLogin/modules/util/checkValid.tsx
var import_ext_gadget4 = __toESM(require("ext.gadget.JSX"), 1);
//! src/AjaxLogin/modules/i18n.ts
var import_ext_gadget3 = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    "6-digit number": (0, import_ext_gadget3.localize)({
      en: "6-digit number",
      ja: "6桁の数字",
      "zh-hans": "6位数字",
      "zh-hant": "6位數字"
    }),
    Cancel: (0, import_ext_gadget3.localize)({
      en: "Cancel",
      ja: "キャンセル",
      zh: "取消"
    }),
    "Enter password": (0, import_ext_gadget3.localize)({
      en: "Enter password",
      ja: "パスワード",
      "zh-hans": "请输入密码",
      "zh-hant": "請輸入密碼"
    }),
    "Enter 2FA verification code": (0, import_ext_gadget3.localize)({
      en: "2FA verification code",
      ja: "2FA認証コード",
      "zh-hans": "请输入2FA验证码",
      "zh-hant": "請輸入2FA驗證碼"
    }),
    "Forgot password?": (0, import_ext_gadget3.localize)({
      en: "Forgot password?",
      ja: "パスワードをお忘れですか？",
      "zh-hans": "忘记密码？",
      "zh-hant": "忘記密碼？"
    }),
    "Getting login token": (0, import_ext_gadget3.localize)({
      en: "Getting login token",
      ja: "ログイントークンを取得しています",
      "zh-hans": "正在获取登录令牌",
      "zh-hant": "正在獲取登入權杖"
    }),
    "help for I agree with the relevant terms": (0, import_ext_gadget3.localize)({
      en: 'When you login, it means that you have carefully read, fully understood and agreed to comply with our <a rel="noopener" target="_blank" href="/wiki/FWIKI:TOS" title="Terms of Service">Terms of Service</a>, <a rel="noopener" target="_blank" href="/wiki/FWIKI:PRIVACY" title="Personal Information Protection Policy">Personal Information Protection Policy</a> and <em>the <a rel="noopener" target="_blank" href="/wiki/FWIKI:BKZC" title="Constitution">Constitution</a></em>.',
      ja: 'ログインをすると、あなたは本サイトの『<a rel="noopener" target="_blank" href="/wiki/FWIKI:TOS" title="利用規約">利用規約</a>』『<a rel="noopener" target="_blank" href="/wiki/FWIKI:PRIVACY" title="個人情報保護方針">個人情報保護方針</a>』『<a rel="noopener" target="_blank" href="/wiki/FWIKI:BKZC" title="百科章程">百科章程</a>』を十分に理解し、同意したことになります。',
      "zh-hans": '登录时，即代表您已仔细阅读、充分了解并同意遵守本网站的《<a rel="noopener" target="_blank" href="/wiki/FWIKI:TOS" title="用户协议">用户协议</a>》、《<a rel="noopener" target="_blank" href="/wiki/FWIKI:PRIVACY" title="个人信息保护条例">个人信息保护条例</a>》及《<a rel="noopener" target="_blank" href="/wiki/FWIKI:BKZC" title="百科章程">百科章程</a>》。',
      "zh-hant": '登錄時，即代表您已仔細閱讀、充分了解並同意遵守本網站的《<a rel="noopener" target="_blank" href="/wiki/FWIKI:TOS" title="用戶協議">用戶協議</a>》、《<a rel="noopener" target="_blank" href="/wiki/FWIKI:PRIVACY" title="個人信息保護條例">個人信息保護條例</a>》及《<a rel="noopener" target="_blank" href="/wiki/FWIKI:BKZC" title="百科章程">百科章程</a>》。'
    }),
    "I agree": (0, import_ext_gadget3.localize)({
      en: "I agree",
      ja: "同意する",
      zh: "我同意"
    }),
    "I agree with the relevant terms": (0, import_ext_gadget3.localize)({
      en: "I agree with the relevant terms",
      ja: "関連する規約を読み、同意",
      "zh-hans": "我已阅读并同意相关条款",
      "zh-hant": "我已閲讀並同意相關條款"
    }),
    "Invalid 2FA verification code": (0, import_ext_gadget3.localize)({
      en: "Invalid 2FA verification code",
      ja: "2FA認証コードが間違っています",
      "zh-hans": "2FA验证码错误",
      "zh-hant": "2FA驗證碼錯誤"
    }),
    "Invalid username or password": (0, import_ext_gadget3.localize)({
      en: "Invalid username or password",
      ja: "利用者名またはパスワードが間違っています",
      "zh-cn": "用户名或密码错误",
      "zh-hk": "用戶名稱或密碼錯誤",
      "zh-tw": "使用者名稱或密碼錯誤"
    }),
    "Keep me logged in": (0, import_ext_gadget3.localize)({
      en: "Keep me logged in",
      ja: "ログイン状態を保持",
      "zh-hans": "记住我的登录状态",
      "zh-hant": "記住我的登入狀態"
    }),
    "Logging in": (0, import_ext_gadget3.localize)({
      en: "Logging in",
      ja: "ログインしています",
      "zh-hans": "正在登录",
      "zh-hant": "正在登入"
    }),
    Login: (0, import_ext_gadget3.localize)({
      en: "Login",
      ja: "ログイン",
      "zh-hans": "登录",
      "zh-hant": "登入"
    }),
    "Login cancelled": (0, import_ext_gadget3.localize)({
      en: "Login cancelled",
      ja: "ログインキャンセル",
      "zh-hans": "登录取消",
      "zh-hant": "登入取消"
    }),
    "Login succeed": (0, import_ext_gadget3.localize)({
      en: "Login succeed",
      ja: "ログインに成功しました",
      "zh-hans": "登录成功",
      "zh-hant": "登入成功"
    }),
    "Login token got": (0, import_ext_gadget3.localize)({
      en: "Login token got",
      ja: "ログイントークンの取得に成功しました",
      "zh-hans": "获取登录令牌成功",
      "zh-hant": "獲取登入權杖成功"
    }),
    "New password": (0, import_ext_gadget3.localize)({
      en: "New password",
      ja: "新しいパスワード",
      "zh-hans": "新密码",
      "zh-hant": "新密碼"
    }),
    "New password is required": (0, import_ext_gadget3.localize)({
      en: "New password is required",
      ja: "新しいパスワードを設定してください",
      "zh-hans": "需要设置新密码",
      "zh-hant": "需要設置新密碼"
    }),
    Password: (0, import_ext_gadget3.localize)({
      en: "Password",
      ja: "パスワード",
      "zh-hans": "密码",
      "zh-hant": "密碼"
    }),
    "Reset password": (0, import_ext_gadget3.localize)({
      en: "Reset password",
      ja: "パスワードをリセット",
      "zh-hans": "重置密码",
      "zh-hant": "重新設定密碼"
    }),
    Username: (0, import_ext_gadget3.localize)({
      en: "Username",
      ja: "利用者名",
      "zh-cn": "用户名",
      "zh-hk": "用戶名稱",
      "zh-tw": "使用者名稱"
    }),
    AgreedOrNot: (0, import_ext_gadget3.localize)({
      en: "Please read the relevant terms. If you agree, check the checkbox to confirm",
      ja: "関連する規約をお読みいただき、同意される場合は、チェックボックスにチェックを入れて確認してください",
      "zh-hans": "请阅读相关条款。若同意，勾选复选框以确认",
      "zh-hant": "請閲讀相關條款。若同意，勾選複選框以確認"
    }),
    DoubleCheckAgreedOrNot: (0, import_ext_gadget3.localize)({
      en: 'You have carefully read, fully understood and agreed to comply with our <a rel="noopener" target="_blank" href="/wiki/FWIKI:TOS" title="Terms of Service">Terms of Service</a>, <a rel="noopener" target="_blank" href="/wiki/FWIKI:PRIVACY" title="Personal Information Protection Policy">Personal Information Protection Policy</a> and <a rel="noopener" target="_blank" href="/wiki/FWIKI:BKZC" title="Constitution">Constitution</a>.',
      ja: 'あなたは本サイトの『<a rel="noopener" target="_blank" href="/wiki/FWIKI:TOS" title="利用規約">利用規約</a>』『<a rel="noopener" target="_blank" href="/wiki/FWIKI:PRIVACY" title="個人情報保護方針">個人情報保護方針</a>』『<a rel="noopener" target="_blank" href="/wiki/FWIKI:BKZC" title="百科章程">百科章程</a>』を十分に理解し、同意したことになります。',
      "zh-hans": '您已仔细阅读、充分了解并同意遵守本网站的《<a rel="noopener" target="_blank" href="/wiki/FWIKI:TOS" title="用户协议">用户协议</a>》《<a rel="noopener" target="_blank" href="/wiki/FWIKI:PRIVACY" title="个人信息保护条例">个人信息保护条例</a>》《<a rel="noopener" target="_blank" href="/wiki/FWIKI:BKZC" title="百科章程">百科章程</a>》。',
      "zh-hant": '您已仔細閱讀、充分了解並同意遵守本網站的《<a rel="noopener" target="_blank" href="/wiki/FWIKI:TOS" title="用戶協議">用戶協議</a>》《<a rel="noopener" target="_blank" href="/wiki/FWIKI:PRIVACY" title="個人信息保護條例">個人信息保護條例</a>》《<a rel="noopener" target="_blank" href="/wiki/FWIKI:BKZC" title="百科章程">百科章程</a>》。'
    }),
    Empty2FA: (0, import_ext_gadget3.localize)({
      en: "The 2FA verification code cannot be empty",
      ja: "2FA認証コードが入力されていません",
      "zh-hans": "2FA验证码不能为空",
      "zh-hant": "2FA驗證碼不能爲空"
    }),
    EmptyPassword: (0, import_ext_gadget3.localize)({
      en: "The password cannot be empty",
      ja: "パスワードが入力されていません",
      "zh-hans": "密码不能为空",
      "zh-hant": "密碼不能爲空"
    }),
    EmptyUsernameOrPassword: (0, import_ext_gadget3.localize)({
      en: "The username or password cannot be empty",
      ja: "利用者名またはパスワードが入力されていません",
      "zh-cn": "用户名或密码不能为空",
      "zh-hk": "用戶名稱或密碼不能爲空",
      "zh-tw": "使用者名稱或密碼不能爲空"
    }),
    "Network error": (0, import_ext_gadget3.localize)({
      en: "Network error. Redirecting...",
      ja: "ネットワークエラー、リダイレクト中...",
      "zh-hans": "网络异常。重定向中……",
      "zh-hant": "網路異常。重新導向中……"
    }),
    SelectedOrNot: (0, import_ext_gadget3.localize)({
      en: "Keep logged in for 6 months if selected; otherwise until the browser closes.",
      ja: "チェックを入れるとログイン状態が6ヶ月間保持され、入れない場合はブラウザを閉じるまで保持されます。",
      "zh-hans": "勾选则保持登录状态6个月，否则将在浏览器关闭时退出登录。",
      "zh-hant": "勾選则保持登入狀態6個月，否則將在瀏覽器關閉時登出。"
    }),
    TooFrequent: (0, import_ext_gadget3.localize)({
      en: "The user login is too frequent, please try again in five minutes",
      ja: "利用者が頻繁すぎるため、5分後に再試行してください",
      "zh-cn": "用户登录过于频繁，请五分钟后再试",
      "zh-hk": "用戶登入過於頻繁，請五分鐘後再試",
      "zh-tw": "使用者登入过于频繁，请五分钟后再试"
    }),
    "Unexpected API response": (0, import_ext_gadget3.localize)({
      en: "Unexpected API response: $1. Redirecting...",
      ja: "予期せぬAPIの応答：$1、リダイレクト中...",
      "zh-hans": "意外的API响应：$1。重定向中……",
      "zh-hant": "意外的API響應：$1。重新導向中……"
    }),
    "Login with QQ": (0, import_ext_gadget3.localize)({
      en: "Login with QQ",
      ja: "QQでログイン",
      "zh-hans": "QQ登录",
      "zh-hant": "QQ登入"
    }),
    Or: (0, import_ext_gadget3.localize)({
      en: "or",
      ja: "または",
      "zh-hans": "或",
      "zh-hant": "或"
    }),
    "QQ login description": (0, import_ext_gadget3.localize)({
      en: "Use your QQ account to log in quickly. You will be redirected to the QQ authorization page.",
      ja: "QQアカウントで素早くログインできます。QQ認証ページにリダイレクトします。",
      "zh-hans": "使用 QQ 账户快捷登录，即将跳转至 QQ 授权页面。",
      "zh-hant": "使用 QQ 賬戶快捷登入，即將跳轉至 QQ 授權頁面。"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/AjaxLogin/modules/initWindowManager.ts
var initWindowManager = () => {
  return new OO.ui.WindowManager();
};
var windowManager = initWindowManager();
//! src/AjaxLogin/modules/util/oouiConfirm.ts
var oouiConfirm = /* @__PURE__ */ (function() {
  var _ref = _asyncToGenerator(function* (options) {
    const messageDialog = new OO.ui.MessageDialog();
    windowManager.addWindows([messageDialog]);
    const instance = windowManager.openWindow(messageDialog, options);
    const data = yield instance.closed;
    const _data = data;
    return !!((_data === null || _data === void 0 ? void 0 : _data.action) === "accept");
  });
  return function oouiConfirm2(_x) {
    return _ref.apply(this, arguments);
  };
})();
//! src/AjaxLogin/modules/util/checkValid.tsx
var import_ext_gadget5 = require("ext.gadget.Toastify");
var checkValid = /* @__PURE__ */ (function() {
  var _ref2 = _asyncToGenerator(function* ([agreeTosCheckbox, nameInput, pwdInput], toastifyInstance) {
    let isAgreeTos = agreeTosCheckbox.isSelected();
    const isFill = ![nameInput.getValue().trim(), pwdInput.getValue().trim()].includes("");
    toastifyInstance.hideToast();
    yield windowManager.clearWindows();
    if (!isAgreeTos) {
      isAgreeTos = yield oouiConfirm({
        message: $(/* @__PURE__ */ import_ext_gadget4.default.createElement("span", {
          innerHTML: getMessage("DoubleCheckAgreedOrNot")
        })),
        actions: [{
          label: $(/* @__PURE__ */ import_ext_gadget4.default.createElement("b", null, getMessage("Cancel"))),
          action: "cancel",
          flags: ["safe", "close"]
        }, {
          label: $(/* @__PURE__ */ import_ext_gadget4.default.createElement("b", null, getMessage("I agree"))),
          action: "accept",
          flags: ["primary", "progressive"]
        }]
      });
      if (!isAgreeTos) {
        toastifyInstance = (0, import_ext_gadget5.toastify)({
          text: getMessage("AgreedOrNot"),
          duration: -1
        }, "info");
      }
    } else if (!isFill) {
      toastifyInstance = (0, import_ext_gadget5.toastify)({
        text: getMessage("EmptyUsernameOrPassword"),
        duration: -1
      }, "info");
    }
    const isValid = isAgreeTos && isFill;
    return {
      isAgreeTos,
      isValid,
      toastifyInstance
    };
  });
  return function checkValid2(_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
})();
//! src/AjaxLogin/modules/util/generateElements.tsx
var import_ext_gadget6 = __toESM(require("ext.gadget.JSX"), 1);
var import_ext_gadget7 = require("ext.gadget.Util");
//! src/AjaxLogin/images/SimpleIconsQq.svg
var SimpleIconsQq_default = '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24"><path fill="currentColor" d="M21.395 15.035a40 40 0 0 0-.803-2.264l-1.079-2.695c.001-.032.014-.562.014-.836C19.526 4.632 17.351 0 12 0S4.474 4.632 4.474 9.241c0 .274.013.804.014.836l-1.08 2.695a39 39 0 0 0-.802 2.264c-1.021 3.283-.69 4.643-.438 4.673.54.065 2.103-2.472 2.103-2.472 0 1.469.756 3.387 2.394 4.771-.612.188-1.363.479-1.845.835-.434.32-.379.646-.301.778.343.578 5.883.369 7.482.189 1.6.18 7.14.389 7.483-.189.078-.132.132-.458-.301-.778-.483-.356-1.233-.646-1.846-.836 1.637-1.384 2.393-3.302 2.393-4.771 0 0 1.563 2.537 2.103 2.472.251-.03.581-1.39-.438-4.673"/></svg>';
//! src/AjaxLogin/modules/util/generateElements.tsx
var generateElements = (isAgreeTos) => {
  const messageDialog = new OO.ui.MessageDialog();
  const nameInput = new OO.ui.TextInputWidget({
    icon: "userAvatar",
    placeholder: getMessage("Username"),
    validate: "non-empty"
  });
  const pwdInput = new OO.ui.TextInputWidget({
    icon: "key",
    placeholder: getMessage("Password"),
    type: "password",
    validate: "non-empty"
  });
  const agreeTosCheckbox = new OO.ui.CheckboxInputWidget({
    selected: isAgreeTos
  });
  const agreeTosLayout = new OO.ui.FieldLayout(agreeTosCheckbox, {
    align: "inline",
    label: getMessage("I agree with the relevant terms")
  });
  const keepLoginCheckbox = new OO.ui.CheckboxInputWidget();
  const keepLoginLayout = new OO.ui.FieldLayout(keepLoginCheckbox, {
    align: "inline",
    help: getMessage("SelectedOrNot"),
    label: getMessage("Keep me logged in")
  });
  const label = /* @__PURE__ */ import_ext_gadget6.default.createElement("label", {
    className: ["oo-ui-labelWidget", "oo-ui-labelElement-label"],
    style: {
      fontSize: "90%",
      textAlign: "justify"
    }
  });
  const $label = $(label);
  const $agreeTos = $label.clone().append(agreeTosLayout.$element);
  const $forgotPassword = $label.clone().css("float", "right").append(/* @__PURE__ */ import_ext_gadget6.default.createElement("a", {
    href: mw.util.getUrl("Special:PasswordReset"),
    title: getMessage("Reset password")
  }, getMessage("Forgot password?")));
  const $inputBox = $label.clone().css({
    display: "block",
    "font-size": "inherit",
    padding: "6px 0"
  }).append(nameInput.$element.css("margin-bottom", "6px"), pwdInput.$element);
  const $tosLabel = $label.clone().html(getMessage("help for I agree with the relevant terms"));
  const $rememberMe = $label.clone().append(keepLoginLayout.$element.css("margin-top", "6px"));
  const qqLoginUrl = "".concat(mw.util.getUrl("Special:Userlogin"), "?returnto=").concat(encodeURIComponent(location.href));
  const qqIconDataUrl = (0, import_ext_gadget7.generateSvgDataUrl)(SimpleIconsQq_default);
  const $qqLoginSection = $label.clone().css({
    display: "block",
    "font-size": "inherit",
    "text-align": "center"
  }).append($("<span>").css({
    color: "#72777d",
    display: "block",
    margin: "4px 0"
  }).text(getMessage("Or")), $("<a>").attr({
    href: qqLoginUrl,
    title: getMessage("QQ login description")
  }).css({
    "background-color": "#12B7F5",
    border: "1px solid #12B7F5",
    "border-radius": "2px",
    color: "#fff",
    cursor: "pointer",
    display: "inline-flex",
    "align-items": "center",
    gap: "6px",
    padding: "5px 12px",
    "font-weight": "bold",
    "font-size": "1em",
    "line-height": "1.42857143",
    "text-decoration": "none",
    "white-space": "nowrap"
  }).append($("<img>").attr({
    src: qqIconDataUrl,
    alt: "QQ",
    width: 20,
    height: 20
  }), getMessage("Login with QQ")));
  return {
    $agreeTos,
    $forgotPassword,
    $inputBox,
    $qqLoginSection,
    $rememberMe,
    $tosLabel,
    agreeTosCheckbox,
    keepLoginCheckbox,
    messageDialog,
    nameInput,
    pwdInput
  };
};
//! src/AjaxLogin/modules/util/oouiPrompt.tsx
var import_ext_gadget8 = __toESM(require("ext.gadget.JSX"), 1);
//! src/AjaxLogin/modules/util/removeWindowResizeHandler.ts
var removeWindowResizeHandler = () => {
  $(window).off({
    "orientationchange resize": windowManager.onWindowResizeHandler
  });
};
//! src/AjaxLogin/modules/util/oouiPrompt.tsx
var oouiPrompt = /* @__PURE__ */ (function() {
  var _ref3 = _asyncToGenerator(function* (retypePassword) {
    const codeDialog = new OO.ui.MessageDialog();
    const codeInput = new OO.ui.TextInputWidget({
      icon: "key",
      placeholder: retypePassword ? getMessage("New password") : getMessage("6-digit number"),
      validate: "integer"
    });
    const codeLayout = new OO.ui.FieldLayout(codeInput, {
      align: "top",
      label: $(/* @__PURE__ */ import_ext_gadget8.default.createElement("b", {
        className: ["oo-ui-messageDialog-title", "oo-ui-window-head"]
      }, retypePassword ? getMessage("Enter password") : getMessage("Enter 2FA verification code")))
    });
    windowManager.addWindows([codeDialog]);
    const instance = windowManager.openWindow(codeDialog, {
      message: codeLayout.$element
    });
    removeWindowResizeHandler();
    void instance.opened.then(() => {
      codeInput.on("enter", () => {
        windowManager.getCurrentWindow().close({
          action: "accept"
        });
      });
      codeInput.focus();
    });
    const data = yield instance.closed;
    const _data = data;
    return (_data === null || _data === void 0 ? void 0 : _data.action) === "accept" ? codeInput.getValue() : null;
  });
  return function oouiPrompt2(_x4) {
    return _ref3.apply(this, arguments);
  };
})();
//! src/AjaxLogin/modules/util/queryLoginToken.ts
var import_ext_gadget9 = require("ext.gadget.Toastify");
var queryLoginToken = /* @__PURE__ */ (function() {
  var _ref4 = _asyncToGenerator(function* (toastifyInstance) {
    toastifyInstance.hideToast();
    toastifyInstance = (0, import_ext_gadget9.toastify)({
      text: getMessage("Getting login token")
    });
    const loginToken = yield api.getToken("login");
    toastifyInstance.hideToast();
    toastifyInstance = (0, import_ext_gadget9.toastify)({
      text: getMessage("Login token got"),
      duration: -1
    });
    return {
      loginToken,
      toastifyInstance
    };
  });
  return function queryLoginToken2(_x5) {
    return _ref4.apply(this, arguments);
  };
})();
//! src/AjaxLogin/modules/util/redirectOriginLoginPage.ts
var import_ext_gadget10 = require("ext.gadget.Util");
var redirectOriginLoginPage = /* @__PURE__ */ (function() {
  var _ref5 = _asyncToGenerator(function* () {
    yield windowManager.clearWindows();
    yield (0, import_ext_gadget10.delay)(3 * 1e3);
    location.href = mw.util.getUrl("Special:Userlogin");
  });
  return function redirectOriginLoginPage2() {
    return _ref5.apply(this, arguments);
  };
})();
//! src/AjaxLogin/modules/util/showError.ts
var import_ext_gadget11 = require("ext.gadget.Toastify");
var showError = (error, toastifyInstance) => {
  console.error("[AjaxLogin] Ajax error:", error);
  toastifyInstance.hideToast();
  (0, import_ext_gadget11.toastify)({
    text: getMessage("Network error"),
    close: true,
    duration: -1
  }, "error");
};
//! src/AjaxLogin/modules/core.tsx
var import_ext_gadget13 = require("ext.gadget.Toastify");
var ajaxLogin = (toastifyInstance, isAgreeTos = false) => {
  const {
    $agreeTos,
    $forgotPassword,
    $inputBox,
    $qqLoginSection,
    $rememberMe,
    $tosLabel,
    agreeTosCheckbox,
    keepLoginCheckbox,
    messageDialog,
    nameInput,
    pwdInput
  } = generateElements(isAgreeTos);
  const hasQqConnect = Boolean(mw.config.get("wgQQConnectAppId"));
  $qqLoginSection.find("a").on("click", (event) => {
    if (!agreeTosCheckbox.isSelected()) {
      event.preventDefault();
      toastifyInstance = (0, import_ext_gadget13.toastify)({
        text: getMessage("AgreedOrNot"),
        duration: -1
      }, "info");
    }
  });
  let loginToken = "";
  const _login = /* @__PURE__ */ (function() {
    var _ref6 = _asyncToGenerator(function* ({
      loginContinue = false,
      retypePassword = false
    } = {}) {
      try {
        var _response$clientlogin, _response$clientlogin2;
        if (!loginContinue) {
          ({
            loginToken,
            toastifyInstance
          } = yield queryLoginToken(toastifyInstance));
        }
        const params = {
          action: "clientlogin",
          format: "json",
          formatversion: "2",
          logintoken: loginToken,
          loginreturnurl: location.href,
          username: nameInput.getValue(),
          password: pwdInput.getValue()
        };
        if (keepLoginCheckbox.isSelected()) {
          params.rememberMe = true;
        }
        if (loginContinue || retypePassword) {
          yield windowManager.clearWindows();
          delete params.loginreturnurl;
          delete params.username;
          delete params.password;
          params.logincontinue = true;
          const value = yield oouiPrompt(retypePassword);
          toastifyInstance.hideToast();
          if (value === null) {
            (0, import_ext_gadget13.toastify)({
              text: getMessage("Login cancelled")
            }, "info");
            void windowManager.clearWindows();
            return;
          } else if (value === "") {
            if (retypePassword) {
              toastifyInstance = (0, import_ext_gadget13.toastify)({
                text: getMessage("EmptyPassword"),
                duration: -1
              }, "warning");
              void _login({
                retypePassword: true
              });
            } else {
              toastifyInstance = (0, import_ext_gadget13.toastify)({
                text: getMessage("Empty2FA"),
                duration: -1
              }, "warning");
              void _login({
                loginContinue: true
              });
            }
            return;
          }
          if (retypePassword) {
            params.password = value;
            params.retype = value;
          } else {
            params.OATHToken = value;
          }
        }
        toastifyInstance.hideToast();
        toastifyInstance = (0, import_ext_gadget13.toastify)({
          text: getMessage("Logging in")
        }, "info");
        const response = yield api.post(params);
        toastifyInstance.hideToast();
        if (((_response$clientlogin = response["clientlogin"]) === null || _response$clientlogin === void 0 ? void 0 : _response$clientlogin.status) === "PASS") {
          (0, import_ext_gadget13.toastify)({
            text: getMessage("Login succeed")
          }, "success");
          location.reload();
        } else if ((_response$clientlogin2 = response["clientlogin"]) !== null && _response$clientlogin2 !== void 0 && _response$clientlogin2.messagecode) {
          const {
            messagecode
          } = response["clientlogin"];
          switch (messagecode) {
            case "login-throttled":
              toastifyInstance = (0, import_ext_gadget13.toastify)({
                text: getMessage("TooFrequent"),
                duration: -1
              }, "error");
              break;
            case "oathauth-auth-ui":
              void _login({
                loginContinue: true
              });
              break;
            case "oathauth-login-failed":
              toastifyInstance = (0, import_ext_gadget13.toastify)({
                text: getMessage("Invalid 2FA verification code"),
                duration: -1
              }, "warning");
              void _login({
                loginContinue: true
              });
              break;
            case "resetpass-temp-emailed":
              toastifyInstance = (0, import_ext_gadget13.toastify)({
                text: getMessage("New password is required"),
                duration: -1
              }, "warning");
              void _login({
                retypePassword: true
              });
              break;
            case "wrongpassword":
              toastifyInstance = (0, import_ext_gadget13.toastify)({
                text: getMessage("Invalid username or password"),
                duration: -1
              }, "warning");
              yield windowManager.clearWindows();
              ajaxLogin(toastifyInstance);
              break;
            default:
              (0, import_ext_gadget13.toastify)({
                text: getMessage("Unexpected API response").replace("$1", messagecode),
                close: true,
                duration: -1
              }, "error");
              void redirectOriginLoginPage();
          }
        }
      } catch (error) {
        showError(error, toastifyInstance);
        void redirectOriginLoginPage();
      }
    });
    return function login() {
      return _ref6.apply(this, arguments);
    };
  })();
  const check = /* @__PURE__ */ (function() {
    var _ref7 = _asyncToGenerator(function* () {
      const {
        isValid,
        isAgreeTos: lastIsAgreeTos,
        toastifyInstance: lastToastifyInstance
      } = yield checkValid([agreeTosCheckbox, nameInput, pwdInput], toastifyInstance);
      toastifyInstance = lastToastifyInstance;
      if (isValid) {
        void _login();
      } else {
        ajaxLogin(toastifyInstance, lastIsAgreeTos);
      }
    });
    return function check2() {
      return _ref7.apply(this, arguments);
    };
  })();
  pwdInput.on("enter", () => {
    void check();
  });
  messageDialog.getActionProcess = (action) => new OO.ui.Process(() => {
    if (action === "login") {
      void check();
    } else {
      toastifyInstance.hideToast();
      void windowManager.clearWindows();
    }
  });
  windowManager.addWindows([messageDialog]);
  void windowManager.openWindow(messageDialog, {
    actions: [{
      action: "login",
      flags: ["primary", "progressive"],
      label: $(/* @__PURE__ */ import_ext_gadget12.default.createElement("b", null, getMessage("Login")))
    }, {
      action: "cancel",
      flags: ["safe", "close"],
      label: $(/* @__PURE__ */ import_ext_gadget12.default.createElement("b", null, getMessage("Cancel")))
    }],
    message: $(/* @__PURE__ */ import_ext_gadget12.default.createElement("div", {
      className: "oo-ui-window-foot"
    }, [$inputBox, $forgotPassword, $rememberMe, $agreeTos, $tosLabel, ...hasQqConnect ? [$qqLoginSection] : []])),
    title: $(/* @__PURE__ */ import_ext_gadget12.default.createElement("b", {
      className: "oo-ui-window-head"
    }, getMessage("Login"))),
    size: "small"
  });
  removeWindowResizeHandler();
};
//! src/AjaxLogin/AjaxLogin.ts
void (0, import_ext_gadget14.getBody)().then(function initAutoLogin($body) {
  if (mw.config.get(configKey)) {
    return;
  }
  const {
    wgUserName
  } = mw.config.get();
  if (wgUserName) {
    return;
  }
  const $loginElement = $body.find(loginElementSelector);
  if (!$loginElement.length) {
    return;
  }
  windowManager.$element.appendTo($body);
  const fakeToastifyInstance = {
    hideToast: () => {
    }
  };
  const eventListener = (event) => {
    if (!(0, import_ext_gadget14.checkA11yConfirmKey)(event)) {
      return;
    }
    event.preventDefault();
    ajaxLogin(fakeToastifyInstance);
  };
  addListener($loginElement, eventListener);
  mw.config.set(configKey, true);
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0FqYXhMb2dpbi9vcHRpb25zLmpzb24iLCAic3JjL0FqYXhMb2dpbi9BamF4TG9naW4udHMiLCAic3JjL0FqYXhMb2dpbi9tb2R1bGVzL2FkZExpc3RlbmVyLnRzIiwgInNyYy9BamF4TG9naW4vbW9kdWxlcy9hcGkudHMiLCAic3JjL0FqYXhMb2dpbi9tb2R1bGVzL2NvcmUudHN4IiwgInNyYy9BamF4TG9naW4vbW9kdWxlcy91dGlsL2NoZWNrVmFsaWQudHN4IiwgInNyYy9BamF4TG9naW4vbW9kdWxlcy9pMThuLnRzIiwgInNyYy9BamF4TG9naW4vbW9kdWxlcy9pbml0V2luZG93TWFuYWdlci50cyIsICJzcmMvQWpheExvZ2luL21vZHVsZXMvdXRpbC9vb3VpQ29uZmlybS50cyIsICJzcmMvQWpheExvZ2luL21vZHVsZXMvdXRpbC9nZW5lcmF0ZUVsZW1lbnRzLnRzeCIsICJzcmMvQWpheExvZ2luL2ltYWdlcy9TaW1wbGVJY29uc1FxLnN2ZyIsICJzcmMvQWpheExvZ2luL21vZHVsZXMvdXRpbC9vb3VpUHJvbXB0LnRzeCIsICJzcmMvQWpheExvZ2luL21vZHVsZXMvdXRpbC9yZW1vdmVXaW5kb3dSZXNpemVIYW5kbGVyLnRzIiwgInNyYy9BamF4TG9naW4vbW9kdWxlcy91dGlsL3F1ZXJ5TG9naW5Ub2tlbi50cyIsICJzcmMvQWpheExvZ2luL21vZHVsZXMvdXRpbC9yZWRpcmVjdE9yaWdpbkxvZ2luUGFnZS50cyIsICJzcmMvQWpheExvZ2luL21vZHVsZXMvdXRpbC9zaG93RXJyb3IudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIntcblx0XCJsb2dpbkVsZW1lbnRTZWxlY3RvclwiOiBcImE6aGFzKC5hamF4bG9naW4tbW91bnQtcG9pbnQpLCNwdC1sb2dpbiBhLCNwdC1sb2dpbj5hLC52ZWN0b3ItdXNlci1tZW51LWxvZ2luPmEsI3VzZXItdG9vbHM+YVtocmVmKj1cXFwiU3BlY2lhbFxcXCJdLCNwLXBlcnNvbmFsIGFbaHJlZio9XFxcIlVzZXJMb2dpblxcXCJdXCIsXG5cdFwiY29uZmlnS2V5XCI6IFwiZ2FkZ2V0LUFqYXhMb2dpbl9fSW5pdGlhbGl6ZWRcIixcblx0XCJ2ZXJzaW9uXCI6IFwiNC4xXCJcbn1cbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7Y2hlY2tBMTF5Q29uZmlybUtleSwgZ2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7YWRkTGlzdGVuZXJ9IGZyb20gJy4vbW9kdWxlcy9hZGRMaXN0ZW5lcic7XG5pbXBvcnQge2FqYXhMb2dpbn0gZnJvbSAnLi9tb2R1bGVzL2NvcmUnO1xuaW1wb3J0IHt3aW5kb3dNYW5hZ2VyfSBmcm9tICcuL21vZHVsZXMvaW5pdFdpbmRvd01hbmFnZXInO1xuXG52b2lkIGdldEJvZHkoKS50aGVuKGZ1bmN0aW9uIGluaXRBdXRvTG9naW4oJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCB7XG5cdC8vIEd1YXJkIGFnYWluc3QgZG91YmxlIGluY2x1c2lvbnNcblx0aWYgKG13LmNvbmZpZy5nZXQoT1BUSU9OUy5jb25maWdLZXkpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3Qge3dnVXNlck5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGlmICh3Z1VzZXJOYW1lKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgJGxvZ2luRWxlbWVudDogSlF1ZXJ5PEhUTUxBbmNob3JFbGVtZW50PiA9ICRib2R5LmZpbmQ8SFRNTEFuY2hvckVsZW1lbnQ+KE9QVElPTlMubG9naW5FbGVtZW50U2VsZWN0b3IpO1xuXHRpZiAoISRsb2dpbkVsZW1lbnQubGVuZ3RoKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0d2luZG93TWFuYWdlci4kZWxlbWVudC5hcHBlbmRUbygkYm9keSk7XG5cblx0Y29uc3QgZmFrZVRvYXN0aWZ5SW5zdGFuY2U6IFRvYXN0aWZ5SW5zdGFuY2UgPSB7XG5cdFx0aGlkZVRvYXN0OiAoKSA9PiB7fSxcblx0fTtcblxuXHRjb25zdCBldmVudExpc3RlbmVyID0gKGV2ZW50OiBKUXVlcnkuQ2xpY2tFdmVudCB8IEpRdWVyeS5LZXlEb3duRXZlbnQpOiB2b2lkID0+IHtcblx0XHRpZiAoIWNoZWNrQTExeUNvbmZpcm1LZXkoZXZlbnQpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRhamF4TG9naW4oZmFrZVRvYXN0aWZ5SW5zdGFuY2UpO1xuXHR9O1xuXHRhZGRMaXN0ZW5lcigkbG9naW5FbGVtZW50LCBldmVudExpc3RlbmVyKTtcblxuXHQvLyBTZXQgZ3VhcmRcblx0bXcuY29uZmlnLnNldChPUFRJT05TLmNvbmZpZ0tleSwgdHJ1ZSk7XG59KTtcbiIsICJpbXBvcnQge2ZpbHRlckFsdGVyZWRDbGlja3N9IGZyb20gJ2V4dC5nYWRnZXQuRmlsdGVyQWx0ZXJlZENsaWNrcyc7XG5cbmNvbnN0IGFkZExpc3RlbmVyID0gKFxuXHQkZWxlbWVudDogSlF1ZXJ5LFxuXHRldmVudExpc3RlbmVyOiAoZXZlbnQ6IEpRdWVyeS5DbGlja0V2ZW50IHwgSlF1ZXJ5LktleURvd25FdmVudCkgPT4gdm9pZFxuKTogdm9pZCA9PiB7XG5cdCRlbGVtZW50Lm9uKCdjbGljaycsIGZpbHRlckFsdGVyZWRDbGlja3MoZXZlbnRMaXN0ZW5lcikpO1xuXHQkZWxlbWVudC5vbigna2V5ZG93bicsIGV2ZW50TGlzdGVuZXIpO1xufTtcblxuZXhwb3J0IHthZGRMaXN0ZW5lcn07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbnR5cGUgQ2xpZW50TG9naW5QYXJhbXMgPSBBcGlDbGllbnRMb2dpblBhcmFtcyAmIHtcblx0dXNlcm5hbWU/OiBzdHJpbmc7XG5cdHBhc3N3b3JkPzogc3RyaW5nO1xuXHRyZW1lbWJlck1lPzogYm9vbGVhbjtcblx0cmV0eXBlPzogc3RyaW5nO1xuXHRPQVRIVG9rZW4/OiBzdHJpbmc7XG59O1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgQWpheExvZ2luLyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge3R5cGUgQ2xpZW50TG9naW5QYXJhbXMsIGFwaX07XG4iLCAiaW1wb3J0IHt0eXBlIENsaWVudExvZ2luUGFyYW1zLCBhcGl9IGZyb20gJy4vYXBpJztcbmltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LkpTWCc7XG5pbXBvcnQge2NoZWNrVmFsaWR9IGZyb20gJy4vdXRpbC9jaGVja1ZhbGlkJztcbmltcG9ydCB7Z2VuZXJhdGVFbGVtZW50c30gZnJvbSAnLi91dGlsL2dlbmVyYXRlRWxlbWVudHMnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuaW1wb3J0IHtvb3VpUHJvbXB0fSBmcm9tICcuL3V0aWwvb291aVByb21wdCc7XG5pbXBvcnQge3F1ZXJ5TG9naW5Ub2tlbn0gZnJvbSAnLi91dGlsL3F1ZXJ5TG9naW5Ub2tlbic7XG5pbXBvcnQge3JlZGlyZWN0T3JpZ2luTG9naW5QYWdlfSBmcm9tICcuL3V0aWwvcmVkaXJlY3RPcmlnaW5Mb2dpblBhZ2UnO1xuaW1wb3J0IHtyZW1vdmVXaW5kb3dSZXNpemVIYW5kbGVyfSBmcm9tICcuL3V0aWwvcmVtb3ZlV2luZG93UmVzaXplSGFuZGxlcic7XG5pbXBvcnQge3Nob3dFcnJvcn0gZnJvbSAnLi91dGlsL3Nob3dFcnJvcic7XG5pbXBvcnQge3RvYXN0aWZ5fSBmcm9tICdleHQuZ2FkZ2V0LlRvYXN0aWZ5JztcbmltcG9ydCB7d2luZG93TWFuYWdlcn0gZnJvbSAnLi9pbml0V2luZG93TWFuYWdlcic7XG5cbmNvbnN0IGFqYXhMb2dpbiA9ICh0b2FzdGlmeUluc3RhbmNlOiBUb2FzdGlmeUluc3RhbmNlLCBpc0FncmVlVG9zOiBib29sZWFuID0gZmFsc2UpOiB2b2lkID0+IHtcblx0Y29uc3Qge1xuXHRcdCRhZ3JlZVRvcyxcblx0XHQkZm9yZ290UGFzc3dvcmQsXG5cdFx0JGlucHV0Qm94LFxuXHRcdCRxcUxvZ2luU2VjdGlvbixcblx0XHQkcmVtZW1iZXJNZSxcblx0XHQkdG9zTGFiZWwsXG5cdFx0YWdyZWVUb3NDaGVja2JveCxcblx0XHRrZWVwTG9naW5DaGVja2JveCxcblx0XHRtZXNzYWdlRGlhbG9nLFxuXHRcdG5hbWVJbnB1dCxcblx0XHRwd2RJbnB1dCxcblx0fSA9IGdlbmVyYXRlRWxlbWVudHMoaXNBZ3JlZVRvcyk7XG5cblx0Ly8gQ2hlY2sgd2hldGhlciBRUUNvbm5lY3QgaXMgYXZhaWxhYmxlIChpdHMgQXBwSWQgaXMgcHVibGljIGluIGV4dGVuc2lvbi5qc29uKVxuXHRjb25zdCBoYXNRcUNvbm5lY3Q6IGJvb2xlYW4gPSBCb29sZWFuKG13LmNvbmZpZy5nZXQoJ3dnUVFDb25uZWN0QXBwSWQnKSk7XG5cblx0Ly8gSW50ZXJjZXB0IFFRIGxvZ2luIGNsaWNrOiByZXF1aXJlIFRvUyBhZ3JlZW1lbnQgYmVmb3JlIHJlZGlyZWN0aW5nXG5cdCRxcUxvZ2luU2VjdGlvbi5maW5kKCdhJykub24oJ2NsaWNrJywgKGV2ZW50OiBKUXVlcnkuQ2xpY2tFdmVudCk6IHZvaWQgPT4ge1xuXHRcdGlmICghYWdyZWVUb3NDaGVja2JveC5pc1NlbGVjdGVkKCkpIHtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0ZXh0OiBnZXRNZXNzYWdlKCdBZ3JlZWRPck5vdCcpLFxuXHRcdFx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHRcdFx0fSxcblx0XHRcdFx0J2luZm8nXG5cdFx0XHQpO1xuXHRcdH1cblx0fSk7XG5cblx0bGV0IGxvZ2luVG9rZW46IHN0cmluZyA9ICcnO1xuXHRjb25zdCBsb2dpbiA9IGFzeW5jICh7bG9naW5Db250aW51ZSA9IGZhbHNlLCByZXR5cGVQYXNzd29yZCA9IGZhbHNlfSA9IHt9KTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdFx0dHJ5IHtcblx0XHRcdGlmICghbG9naW5Db250aW51ZSkge1xuXHRcdFx0XHQoe2xvZ2luVG9rZW4sIHRvYXN0aWZ5SW5zdGFuY2V9ID0gYXdhaXQgcXVlcnlMb2dpblRva2VuKHRvYXN0aWZ5SW5zdGFuY2UpKTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgcGFyYW1zOiBDbGllbnRMb2dpblBhcmFtcyA9IHtcblx0XHRcdFx0YWN0aW9uOiAnY2xpZW50bG9naW4nLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0XHRsb2dpbnRva2VuOiBsb2dpblRva2VuLFxuXHRcdFx0XHRsb2dpbnJldHVybnVybDogbG9jYXRpb24uaHJlZixcblx0XHRcdFx0dXNlcm5hbWU6IG5hbWVJbnB1dC5nZXRWYWx1ZSgpLFxuXHRcdFx0XHRwYXNzd29yZDogcHdkSW5wdXQuZ2V0VmFsdWUoKSxcblx0XHRcdH07XG5cdFx0XHRpZiAoa2VlcExvZ2luQ2hlY2tib3guaXNTZWxlY3RlZCgpKSB7XG5cdFx0XHRcdHBhcmFtcy5yZW1lbWJlck1lID0gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdGlmIChsb2dpbkNvbnRpbnVlIHx8IHJldHlwZVBhc3N3b3JkKSB7XG5cdFx0XHRcdGF3YWl0IHdpbmRvd01hbmFnZXIuY2xlYXJXaW5kb3dzKCk7XG5cdFx0XHRcdGRlbGV0ZSBwYXJhbXMubG9naW5yZXR1cm51cmw7XG5cdFx0XHRcdGRlbGV0ZSBwYXJhbXMudXNlcm5hbWU7XG5cdFx0XHRcdGRlbGV0ZSBwYXJhbXMucGFzc3dvcmQ7XG5cdFx0XHRcdHBhcmFtcy5sb2dpbmNvbnRpbnVlID0gdHJ1ZTtcblxuXHRcdFx0XHRjb25zdCB2YWx1ZTogc3RyaW5nIHwgbnVsbCA9IGF3YWl0IG9vdWlQcm9tcHQocmV0eXBlUGFzc3dvcmQpO1xuXG5cdFx0XHRcdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cblx0XHRcdFx0aWYgKHZhbHVlID09PSBudWxsKSB7XG5cdFx0XHRcdFx0dG9hc3RpZnkoXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ0xvZ2luIGNhbmNlbGxlZCcpLFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdCdpbmZvJ1xuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0dm9pZCB3aW5kb3dNYW5hZ2VyLmNsZWFyV2luZG93cygpO1xuXG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9IGVsc2UgaWYgKHZhbHVlID09PSAnJykge1xuXHRcdFx0XHRcdGlmIChyZXR5cGVQYXNzd29yZCkge1xuXHRcdFx0XHRcdFx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnRW1wdHlQYXNzd29yZCcpLFxuXHRcdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0J3dhcm5pbmcnXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0dm9pZCBsb2dpbih7XG5cdFx0XHRcdFx0XHRcdHJldHlwZVBhc3N3b3JkOiB0cnVlLFxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeShcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ0VtcHR5MkZBJyksXG5cdFx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHQnd2FybmluZydcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHR2b2lkIGxvZ2luKHtcblx0XHRcdFx0XHRcdFx0bG9naW5Db250aW51ZTogdHJ1ZSxcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChyZXR5cGVQYXNzd29yZCkge1xuXHRcdFx0XHRcdHBhcmFtcy5wYXNzd29yZCA9IHZhbHVlO1xuXHRcdFx0XHRcdHBhcmFtcy5yZXR5cGUgPSB2YWx1ZTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRwYXJhbXMuT0FUSFRva2VuID0gdmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0XHRcdHRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeShcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ0xvZ2dpbmcgaW4nKSxcblx0XHRcdFx0fSxcblx0XHRcdFx0J2luZm8nXG5cdFx0XHQpO1xuXG5cdFx0XHRjb25zdCByZXNwb25zZSA9IChhd2FpdCBhcGkucG9zdChwYXJhbXMpKSBhcyB7XG5cdFx0XHRcdGNsaWVudGxvZ2luOiB7XG5cdFx0XHRcdFx0c3RhdHVzPzogc3RyaW5nO1xuXHRcdFx0XHRcdG1lc3NhZ2Vjb2RlPzogc3RyaW5nO1xuXHRcdFx0XHR9O1xuXHRcdFx0fTtcblxuXHRcdFx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblxuXHRcdFx0aWYgKHJlc3BvbnNlWydjbGllbnRsb2dpbiddPy5zdGF0dXMgPT09ICdQQVNTJykge1xuXHRcdFx0XHR0b2FzdGlmeShcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0ZXh0OiBnZXRNZXNzYWdlKCdMb2dpbiBzdWNjZWVkJyksXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHQnc3VjY2Vzcydcblx0XHRcdFx0KTtcblx0XHRcdFx0bG9jYXRpb24ucmVsb2FkKCk7XG5cdFx0XHR9IGVsc2UgaWYgKHJlc3BvbnNlWydjbGllbnRsb2dpbiddPy5tZXNzYWdlY29kZSkge1xuXHRcdFx0XHRjb25zdCB7bWVzc2FnZWNvZGV9ID0gcmVzcG9uc2VbJ2NsaWVudGxvZ2luJ107XG5cdFx0XHRcdHN3aXRjaCAobWVzc2FnZWNvZGUpIHtcblx0XHRcdFx0XHRjYXNlICdsb2dpbi10aHJvdHRsZWQnOlxuXHRcdFx0XHRcdFx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnVG9vRnJlcXVlbnQnKSxcblx0XHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdCdlcnJvcidcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlICdvYXRoYXV0aC1hdXRoLXVpJzpcblx0XHRcdFx0XHRcdHZvaWQgbG9naW4oe1xuXHRcdFx0XHRcdFx0XHRsb2dpbkNvbnRpbnVlOiB0cnVlLFxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlICdvYXRoYXV0aC1sb2dpbi1mYWlsZWQnOlxuXHRcdFx0XHRcdFx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnSW52YWxpZCAyRkEgdmVyaWZpY2F0aW9uIGNvZGUnKSxcblx0XHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdCd3YXJuaW5nJ1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdHZvaWQgbG9naW4oe1xuXHRcdFx0XHRcdFx0XHRsb2dpbkNvbnRpbnVlOiB0cnVlLFxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlICdyZXNldHBhc3MtdGVtcC1lbWFpbGVkJzpcblx0XHRcdFx0XHRcdHRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeShcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ05ldyBwYXNzd29yZCBpcyByZXF1aXJlZCcpLFxuXHRcdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0J3dhcm5pbmcnXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0dm9pZCBsb2dpbih7XG5cdFx0XHRcdFx0XHRcdHJldHlwZVBhc3N3b3JkOiB0cnVlLFxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlICd3cm9uZ3Bhc3N3b3JkJzpcblx0XHRcdFx0XHRcdHRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeShcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ0ludmFsaWQgdXNlcm5hbWUgb3IgcGFzc3dvcmQnKSxcblx0XHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdCd3YXJuaW5nJ1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdGF3YWl0IHdpbmRvd01hbmFnZXIuY2xlYXJXaW5kb3dzKCk7XG5cdFx0XHRcdFx0XHRhamF4TG9naW4odG9hc3RpZnlJbnN0YW5jZSk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0dG9hc3RpZnkoXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHR0ZXh0OiBnZXRNZXNzYWdlKCdVbmV4cGVjdGVkIEFQSSByZXNwb25zZScpLnJlcGxhY2UoJyQxJywgbWVzc2FnZWNvZGUpLFxuXHRcdFx0XHRcdFx0XHRcdGNsb3NlOiB0cnVlLFxuXHRcdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0J2Vycm9yJ1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdHZvaWQgcmVkaXJlY3RPcmlnaW5Mb2dpblBhZ2UoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRzaG93RXJyb3IoZXJyb3IsIHRvYXN0aWZ5SW5zdGFuY2UpO1xuXHRcdFx0dm9pZCByZWRpcmVjdE9yaWdpbkxvZ2luUGFnZSgpO1xuXHRcdH1cblx0fTtcblxuXHRjb25zdCBjaGVjayA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0XHRjb25zdCB7XG5cdFx0XHRpc1ZhbGlkLFxuXHRcdFx0aXNBZ3JlZVRvczogbGFzdElzQWdyZWVUb3MsXG5cdFx0XHR0b2FzdGlmeUluc3RhbmNlOiBsYXN0VG9hc3RpZnlJbnN0YW5jZSxcblx0XHR9ID0gYXdhaXQgY2hlY2tWYWxpZChbYWdyZWVUb3NDaGVja2JveCwgbmFtZUlucHV0LCBwd2RJbnB1dF0sIHRvYXN0aWZ5SW5zdGFuY2UpO1xuXG5cdFx0dG9hc3RpZnlJbnN0YW5jZSA9IGxhc3RUb2FzdGlmeUluc3RhbmNlO1xuXG5cdFx0aWYgKGlzVmFsaWQpIHtcblx0XHRcdHZvaWQgbG9naW4oKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0YWpheExvZ2luKHRvYXN0aWZ5SW5zdGFuY2UsIGxhc3RJc0FncmVlVG9zKTtcblx0XHR9XG5cdH07XG5cblx0cHdkSW5wdXQub24oJ2VudGVyJywgKCk6IHZvaWQgPT4ge1xuXHRcdHZvaWQgY2hlY2soKTtcblx0fSk7XG5cdG1lc3NhZ2VEaWFsb2cuZ2V0QWN0aW9uUHJvY2VzcyA9IChhY3Rpb24pOiBPTy51aS5Qcm9jZXNzID0+XG5cdFx0bmV3IE9PLnVpLlByb2Nlc3MoKCk6IHZvaWQgPT4ge1xuXHRcdFx0aWYgKGFjdGlvbiA9PT0gJ2xvZ2luJykge1xuXHRcdFx0XHR2b2lkIGNoZWNrKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHRcdFx0XHR2b2lkIHdpbmRvd01hbmFnZXIuY2xlYXJXaW5kb3dzKCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0d2luZG93TWFuYWdlci5hZGRXaW5kb3dzKFttZXNzYWdlRGlhbG9nXSk7XG5cdHZvaWQgd2luZG93TWFuYWdlci5vcGVuV2luZG93KG1lc3NhZ2VEaWFsb2csIHtcblx0XHRhY3Rpb25zOiBbXG5cdFx0XHR7XG5cdFx0XHRcdGFjdGlvbjogJ2xvZ2luJyxcblx0XHRcdFx0ZmxhZ3M6IFsncHJpbWFyeScsICdwcm9ncmVzc2l2ZSddLFxuXHRcdFx0XHRsYWJlbDogJCg8Yj57Z2V0TWVzc2FnZSgnTG9naW4nKX08L2I+KSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGFjdGlvbjogJ2NhbmNlbCcsXG5cdFx0XHRcdGZsYWdzOiBbJ3NhZmUnLCAnY2xvc2UnXSxcblx0XHRcdFx0bGFiZWw6ICQoPGI+e2dldE1lc3NhZ2UoJ0NhbmNlbCcpfTwvYj4pLFxuXHRcdFx0fSxcblx0XHRdLFxuXHRcdG1lc3NhZ2U6ICQoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm9vLXVpLXdpbmRvdy1mb290XCI+XG5cdFx0XHRcdHtbXG5cdFx0XHRcdFx0JGlucHV0Qm94LFxuXHRcdFx0XHRcdCRmb3Jnb3RQYXNzd29yZCxcblx0XHRcdFx0XHQkcmVtZW1iZXJNZSxcblx0XHRcdFx0XHQkYWdyZWVUb3MsXG5cdFx0XHRcdFx0JHRvc0xhYmVsLFxuXHRcdFx0XHRcdC4uLihoYXNRcUNvbm5lY3QgPyBbJHFxTG9naW5TZWN0aW9uXSA6IFtdKSxcblx0XHRcdFx0XX1cblx0XHRcdDwvZGl2PlxuXHRcdCksXG5cdFx0dGl0bGU6ICQoPGIgY2xhc3NOYW1lPVwib28tdWktd2luZG93LWhlYWRcIj57Z2V0TWVzc2FnZSgnTG9naW4nKX08L2I+KSxcblx0XHRzaXplOiAnc21hbGwnLFxuXHR9KTtcblx0cmVtb3ZlV2luZG93UmVzaXplSGFuZGxlcigpO1xufTtcblxuZXhwb3J0IHthamF4TG9naW59O1xuIiwgImltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LkpTWCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuaW1wb3J0IHtvb3VpQ29uZmlybX0gZnJvbSAnLi9vb3VpQ29uZmlybSc7XG5pbXBvcnQge3RvYXN0aWZ5fSBmcm9tICdleHQuZ2FkZ2V0LlRvYXN0aWZ5JztcbmltcG9ydCB7d2luZG93TWFuYWdlcn0gZnJvbSAnLi4vaW5pdFdpbmRvd01hbmFnZXInO1xuXG5jb25zdCBjaGVja1ZhbGlkID0gYXN5bmMgKFxuXHRbYWdyZWVUb3NDaGVja2JveCwgbmFtZUlucHV0LCBwd2RJbnB1dF06IFtPTy51aS5DaGVja2JveElucHV0V2lkZ2V0LCBPTy51aS5UZXh0SW5wdXRXaWRnZXQsIE9PLnVpLlRleHRJbnB1dFdpZGdldF0sXG5cdHRvYXN0aWZ5SW5zdGFuY2U6IFRvYXN0aWZ5SW5zdGFuY2Vcbik6IFByb21pc2U8e1xuXHRpc0FncmVlVG9zOiBib29sZWFuO1xuXHRpc1ZhbGlkOiBib29sZWFuO1xuXHR0b2FzdGlmeUluc3RhbmNlOiBUb2FzdGlmeUluc3RhbmNlO1xufT4gPT4ge1xuXHRsZXQgaXNBZ3JlZVRvczogYm9vbGVhbiA9IGFncmVlVG9zQ2hlY2tib3guaXNTZWxlY3RlZCgpO1xuXHRjb25zdCBpc0ZpbGw6IGJvb2xlYW4gPSAhW25hbWVJbnB1dC5nZXRWYWx1ZSgpLnRyaW0oKSwgcHdkSW5wdXQuZ2V0VmFsdWUoKS50cmltKCldLmluY2x1ZGVzKCcnKTtcblxuXHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHRhd2FpdCB3aW5kb3dNYW5hZ2VyLmNsZWFyV2luZG93cygpO1xuXG5cdGlmICghaXNBZ3JlZVRvcykge1xuXHRcdGlzQWdyZWVUb3MgPSBhd2FpdCBvb3VpQ29uZmlybSh7XG5cdFx0XHRtZXNzYWdlOiAkKDxzcGFuIGlubmVySFRNTD17Z2V0TWVzc2FnZSgnRG91YmxlQ2hlY2tBZ3JlZWRPck5vdCcpfSAvPikgYXMgSlF1ZXJ5LFxuXHRcdFx0YWN0aW9uczogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0bGFiZWw6ICQoPGI+e2dldE1lc3NhZ2UoJ0NhbmNlbCcpfTwvYj4pLFxuXHRcdFx0XHRcdGFjdGlvbjogJ2NhbmNlbCcsXG5cdFx0XHRcdFx0ZmxhZ3M6IFsnc2FmZScsICdjbG9zZSddLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0bGFiZWw6ICQoPGI+e2dldE1lc3NhZ2UoJ0kgYWdyZWUnKX08L2I+KSxcblx0XHRcdFx0XHRhY3Rpb246ICdhY2NlcHQnLFxuXHRcdFx0XHRcdGZsYWdzOiBbJ3ByaW1hcnknLCAncHJvZ3Jlc3NpdmUnXSxcblx0XHRcdFx0fSxcblx0XHRcdF0sXG5cdFx0fSk7XG5cblx0XHRpZiAoIWlzQWdyZWVUb3MpIHtcblx0XHRcdHRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeShcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ0FncmVlZE9yTm90JyksXG5cdFx0XHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHQnaW5mbydcblx0XHRcdCk7XG5cdFx0fVxuXHR9IGVsc2UgaWYgKCFpc0ZpbGwpIHtcblx0XHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0XHR7XG5cdFx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ0VtcHR5VXNlcm5hbWVPclBhc3N3b3JkJyksXG5cdFx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHRcdH0sXG5cdFx0XHQnaW5mbydcblx0XHQpO1xuXHR9XG5cblx0Y29uc3QgaXNWYWxpZDogYm9vbGVhbiA9IGlzQWdyZWVUb3MgJiYgaXNGaWxsO1xuXG5cdHJldHVybiB7XG5cdFx0aXNBZ3JlZVRvcyxcblx0XHRpc1ZhbGlkLFxuXHRcdHRvYXN0aWZ5SW5zdGFuY2UsXG5cdH07XG59O1xuXG5leHBvcnQge2NoZWNrVmFsaWR9O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHQnNi1kaWdpdCBudW1iZXInOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJzYtZGlnaXQgbnVtYmVyJyxcblx0XHRcdGphOiAnNuahgeOBruaVsOWtlycsXG5cdFx0XHQnemgtaGFucyc6ICc25L2N5pWw5a2XJyxcblx0XHRcdCd6aC1oYW50JzogJzbkvY3mlbjlrZcnLFxuXHRcdH0pLFxuXHRcdENhbmNlbDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdDYW5jZWwnLFxuXHRcdFx0amE6ICfjgq3jg6Pjg7Pjgrvjg6snLFxuXHRcdFx0emg6ICflj5bmtognLFxuXHRcdH0pLFxuXHRcdCdFbnRlciBwYXNzd29yZCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRW50ZXIgcGFzc3dvcmQnLFxuXHRcdFx0amE6ICfjg5Hjgrnjg6/jg7zjg4knLFxuXHRcdFx0J3poLWhhbnMnOiAn6K+36L6T5YWl5a+G56CBJyxcblx0XHRcdCd6aC1oYW50JzogJ+iri+i8uOWFpeWvhueivCcsXG5cdFx0fSksXG5cdFx0J0VudGVyIDJGQSB2ZXJpZmljYXRpb24gY29kZSc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnMkZBIHZlcmlmaWNhdGlvbiBjb2RlJyxcblx0XHRcdGphOiAnMkZB6KqN6Ki844Kz44O844OJJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ivt+i+k+WFpTJGQemqjOivgeeggScsXG5cdFx0XHQnemgtaGFudCc6ICfoq4vovLjlhaUyRkHpqZforYnnorwnLFxuXHRcdH0pLFxuXHRcdCdGb3Jnb3QgcGFzc3dvcmQ/JzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdGb3Jnb3QgcGFzc3dvcmQ/Jyxcblx0XHRcdGphOiAn44OR44K544Ov44O844OJ44KS44GK5b+Y44KM44Gn44GZ44GL77yfJyxcblx0XHRcdCd6aC1oYW5zJzogJ+W/mOiusOWvhuegge+8nycsXG5cdFx0XHQnemgtaGFudCc6ICflv5joqJjlr4bnorzvvJ8nLFxuXHRcdH0pLFxuXHRcdCdHZXR0aW5nIGxvZ2luIHRva2VuJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdHZXR0aW5nIGxvZ2luIHRva2VuJyxcblx0XHRcdGphOiAn44Ot44Kw44Kk44Oz44OI44O844Kv44Oz44KS5Y+W5b6X44GX44Gm44GE44G+44GZJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ato+WcqOiOt+WPlueZu+W9leS7pOeJjCcsXG5cdFx0XHQnemgtaGFudCc6ICfmraPlnKjnjbLlj5bnmbvlhaXmrIrmnZYnLFxuXHRcdH0pLFxuXHRcdCdoZWxwIGZvciBJIGFncmVlIHdpdGggdGhlIHJlbGV2YW50IHRlcm1zJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdXaGVuIHlvdSBsb2dpbiwgaXQgbWVhbnMgdGhhdCB5b3UgaGF2ZSBjYXJlZnVsbHkgcmVhZCwgZnVsbHkgdW5kZXJzdG9vZCBhbmQgYWdyZWVkIHRvIGNvbXBseSB3aXRoIG91ciA8YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9GV0lLSTpUT1NcIiB0aXRsZT1cIlRlcm1zIG9mIFNlcnZpY2VcIj5UZXJtcyBvZiBTZXJ2aWNlPC9hPiwgPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvRldJS0k6UFJJVkFDWVwiIHRpdGxlPVwiUGVyc29uYWwgSW5mb3JtYXRpb24gUHJvdGVjdGlvbiBQb2xpY3lcIj5QZXJzb25hbCBJbmZvcm1hdGlvbiBQcm90ZWN0aW9uIFBvbGljeTwvYT4gYW5kIDxlbT50aGUgPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvRldJS0k6QktaQ1wiIHRpdGxlPVwiQ29uc3RpdHV0aW9uXCI+Q29uc3RpdHV0aW9uPC9hPjwvZW0+LicsXG5cdFx0XHRqYTogJ+ODreOCsOOCpOODs+OCkuOBmeOCi+OBqOOAgeOBguOBquOBn+OBr+acrOOCteOCpOODiOOBruOAjjxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL0ZXSUtJOlRPU1wiIHRpdGxlPVwi5Yip55So6KaP57SEXCI+5Yip55So6KaP57SEPC9hPuOAj+OAjjxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL0ZXSUtJOlBSSVZBQ1lcIiB0aXRsZT1cIuWAi+S6uuaDheWgseS/neitt+aWuemHnVwiPuWAi+S6uuaDheWgseS/neitt+aWuemHnTwvYT7jgI/jgI48YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9GV0lLSTpCS1pDXCIgdGl0bGU9XCLnmb7np5Hnq6DnqItcIj7nmb7np5Hnq6DnqIs8L2E+44CP44KS5Y2B5YiG44Gr55CG6Kej44GX44CB5ZCM5oSP44GX44Gf44GT44Go44Gr44Gq44KK44G+44GZ44CCJyxcblx0XHRcdCd6aC1oYW5zJzpcblx0XHRcdFx0J+eZu+W9leaXtu+8jOWNs+S7o+ihqOaCqOW3suS7lOe7humYheivu+OAgeWFheWIhuS6huino+W5tuWQjOaEj+mBteWuiOacrOe9keermeeahOOAijxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL0ZXSUtJOlRPU1wiIHRpdGxlPVwi55So5oi35Y2P6K6uXCI+55So5oi35Y2P6K6uPC9hPuOAi+OAgeOAijxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL0ZXSUtJOlBSSVZBQ1lcIiB0aXRsZT1cIuS4quS6uuS/oeaBr+S/neaKpOadoeS+i1wiPuS4quS6uuS/oeaBr+S/neaKpOadoeS+izwvYT7jgIvlj4rjgIo8YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9GV0lLSTpCS1pDXCIgdGl0bGU9XCLnmb7np5Hnq6DnqItcIj7nmb7np5Hnq6DnqIs8L2E+44CL44CCJyxcblx0XHRcdCd6aC1oYW50Jzpcblx0XHRcdFx0J+eZu+mMhOaZgu+8jOWNs+S7o+ihqOaCqOW3suS7lOe0sOmWseiugOOAgeWFheWIhuS6huino+S4puWQjOaEj+mBteWuiOacrOe2suermeeahOOAijxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL0ZXSUtJOlRPU1wiIHRpdGxlPVwi55So5oi25Y2U6K2wXCI+55So5oi25Y2U6K2wPC9hPuOAi+OAgeOAijxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL0ZXSUtJOlBSSVZBQ1lcIiB0aXRsZT1cIuWAi+S6uuS/oeaBr+S/neitt+aineS+i1wiPuWAi+S6uuS/oeaBr+S/neitt+aineS+izwvYT7jgIvlj4rjgIo8YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9GV0lLSTpCS1pDXCIgdGl0bGU9XCLnmb7np5Hnq6DnqItcIj7nmb7np5Hnq6DnqIs8L2E+44CL44CCJyxcblx0XHR9KSxcblx0XHQnSSBhZ3JlZSc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnSSBhZ3JlZScsXG5cdFx0XHRqYTogJ+WQjOaEj+OBmeOCiycsXG5cdFx0XHR6aDogJ+aIkeWQjOaEjycsXG5cdFx0fSksXG5cdFx0J0kgYWdyZWUgd2l0aCB0aGUgcmVsZXZhbnQgdGVybXMnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0kgYWdyZWUgd2l0aCB0aGUgcmVsZXZhbnQgdGVybXMnLFxuXHRcdFx0amE6ICfplqLpgKPjgZnjgovopo/ntITjgpLoqq3jgb/jgIHlkIzmhI8nLFxuXHRcdFx0J3poLWhhbnMnOiAn5oiR5bey6ZiF6K+75bm25ZCM5oSP55u45YWz5p2h5qy+Jyxcblx0XHRcdCd6aC1oYW50JzogJ+aIkeW3sumWsuiugOS4puWQjOaEj+ebuOmXnOaineasvicsXG5cdFx0fSksXG5cdFx0J0ludmFsaWQgMkZBIHZlcmlmaWNhdGlvbiBjb2RlJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdJbnZhbGlkIDJGQSB2ZXJpZmljYXRpb24gY29kZScsXG5cdFx0XHRqYTogJzJGQeiqjeiovOOCs+ODvOODieOBjOmWk+mBleOBo+OBpuOBhOOBvuOBmScsXG5cdFx0XHQnemgtaGFucyc6ICcyRkHpqozor4HnoIHplJnor68nLFxuXHRcdFx0J3poLWhhbnQnOiAnMkZB6amX6K2J56K86Yyv6KqkJyxcblx0XHR9KSxcblx0XHQnSW52YWxpZCB1c2VybmFtZSBvciBwYXNzd29yZCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnSW52YWxpZCB1c2VybmFtZSBvciBwYXNzd29yZCcsXG5cdFx0XHRqYTogJ+WIqeeUqOiAheWQjeOBvuOBn+OBr+ODkeOCueODr+ODvOODieOBjOmWk+mBleOBo+OBpuOBhOOBvuOBmScsXG5cdFx0XHQnemgtY24nOiAn55So5oi35ZCN5oiW5a+G56CB6ZSZ6K+vJyxcblx0XHRcdCd6aC1oayc6ICfnlKjmiLblkI3nqLHmiJblr4bnorzpjK/oqqQnLFxuXHRcdFx0J3poLXR3JzogJ+S9v+eUqOiAheWQjeeoseaIluWvhueivOmMr+iqpCcsXG5cdFx0fSksXG5cdFx0J0tlZXAgbWUgbG9nZ2VkIGluJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdLZWVwIG1lIGxvZ2dlZCBpbicsXG5cdFx0XHRqYTogJ+ODreOCsOOCpOODs+eKtuaFi+OCkuS/neaMgScsXG5cdFx0XHQnemgtaGFucyc6ICforrDkvY/miJHnmoTnmbvlvZXnirbmgIEnLFxuXHRcdFx0J3poLWhhbnQnOiAn6KiY5L2P5oiR55qE55m75YWl54uA5oWLJyxcblx0XHR9KSxcblx0XHQnTG9nZ2luZyBpbic6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTG9nZ2luZyBpbicsXG5cdFx0XHRqYTogJ+ODreOCsOOCpOODs+OBl+OBpuOBhOOBvuOBmScsXG5cdFx0XHQnemgtaGFucyc6ICfmraPlnKjnmbvlvZUnLFxuXHRcdFx0J3poLWhhbnQnOiAn5q2j5Zyo55m75YWlJyxcblx0XHR9KSxcblx0XHRMb2dpbjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdMb2dpbicsXG5cdFx0XHRqYTogJ+ODreOCsOOCpOODsycsXG5cdFx0XHQnemgtaGFucyc6ICfnmbvlvZUnLFxuXHRcdFx0J3poLWhhbnQnOiAn55m75YWlJyxcblx0XHR9KSxcblx0XHQnTG9naW4gY2FuY2VsbGVkJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdMb2dpbiBjYW5jZWxsZWQnLFxuXHRcdFx0amE6ICfjg63jgrDjgqTjg7Pjgq3jg6Pjg7Pjgrvjg6snLFxuXHRcdFx0J3poLWhhbnMnOiAn55m75b2V5Y+W5raIJyxcblx0XHRcdCd6aC1oYW50JzogJ+eZu+WFpeWPlua2iCcsXG5cdFx0fSksXG5cdFx0J0xvZ2luIHN1Y2NlZWQnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0xvZ2luIHN1Y2NlZWQnLFxuXHRcdFx0amE6ICfjg63jgrDjgqTjg7PjgavmiJDlip/jgZfjgb7jgZfjgZ8nLFxuXHRcdFx0J3poLWhhbnMnOiAn55m75b2V5oiQ5YqfJyxcblx0XHRcdCd6aC1oYW50JzogJ+eZu+WFpeaIkOWKnycsXG5cdFx0fSksXG5cdFx0J0xvZ2luIHRva2VuIGdvdCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTG9naW4gdG9rZW4gZ290Jyxcblx0XHRcdGphOiAn44Ot44Kw44Kk44Oz44OI44O844Kv44Oz44Gu5Y+W5b6X44Gr5oiQ5Yqf44GX44G+44GX44GfJyxcblx0XHRcdCd6aC1oYW5zJzogJ+iOt+WPlueZu+W9leS7pOeJjOaIkOWKnycsXG5cdFx0XHQnemgtaGFudCc6ICfnjbLlj5bnmbvlhaXmrIrmnZbmiJDlip8nLFxuXHRcdH0pLFxuXHRcdCdOZXcgcGFzc3dvcmQnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ05ldyBwYXNzd29yZCcsXG5cdFx0XHRqYTogJ+aWsOOBl+OBhOODkeOCueODr+ODvOODiScsXG5cdFx0XHQnemgtaGFucyc6ICfmlrDlr4bnoIEnLFxuXHRcdFx0J3poLWhhbnQnOiAn5paw5a+G56K8Jyxcblx0XHR9KSxcblx0XHQnTmV3IHBhc3N3b3JkIGlzIHJlcXVpcmVkJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdOZXcgcGFzc3dvcmQgaXMgcmVxdWlyZWQnLFxuXHRcdFx0amE6ICfmlrDjgZfjgYTjg5Hjgrnjg6/jg7zjg4njgpLoqK3lrprjgZfjgabjgY/jgaDjgZXjgYQnLFxuXHRcdFx0J3poLWhhbnMnOiAn6ZyA6KaB6K6+572u5paw5a+G56CBJyxcblx0XHRcdCd6aC1oYW50JzogJ+mcgOimgeioree9ruaWsOWvhueivCcsXG5cdFx0fSksXG5cdFx0UGFzc3dvcmQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUGFzc3dvcmQnLFxuXHRcdFx0amE6ICfjg5Hjgrnjg6/jg7zjg4knLFxuXHRcdFx0J3poLWhhbnMnOiAn5a+G56CBJyxcblx0XHRcdCd6aC1oYW50JzogJ+WvhueivCcsXG5cdFx0fSksXG5cdFx0J1Jlc2V0IHBhc3N3b3JkJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdSZXNldCBwYXNzd29yZCcsXG5cdFx0XHRqYTogJ+ODkeOCueODr+ODvOODieOCkuODquOCu+ODg+ODiCcsXG5cdFx0XHQnemgtaGFucyc6ICfph43nva7lr4bnoIEnLFxuXHRcdFx0J3poLWhhbnQnOiAn6YeN5paw6Kit5a6a5a+G56K8Jyxcblx0XHR9KSxcblx0XHRVc2VybmFtZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdVc2VybmFtZScsXG5cdFx0XHRqYTogJ+WIqeeUqOiAheWQjScsXG5cdFx0XHQnemgtY24nOiAn55So5oi35ZCNJyxcblx0XHRcdCd6aC1oayc6ICfnlKjmiLblkI3nqLEnLFxuXHRcdFx0J3poLXR3JzogJ+S9v+eUqOiAheWQjeeosScsXG5cdFx0fSksXG5cdFx0QWdyZWVkT3JOb3Q6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUGxlYXNlIHJlYWQgdGhlIHJlbGV2YW50IHRlcm1zLiBJZiB5b3UgYWdyZWUsIGNoZWNrIHRoZSBjaGVja2JveCB0byBjb25maXJtJyxcblx0XHRcdGphOiAn6Zai6YCj44GZ44KL6KaP57SE44KS44GK6Kqt44G/44GE44Gf44Gg44GN44CB5ZCM5oSP44GV44KM44KL5aC05ZCI44Gv44CB44OB44Kn44OD44Kv44Oc44OD44Kv44K544Gr44OB44Kn44OD44Kv44KS5YWl44KM44Gm56K66KqN44GX44Gm44GP44Gg44GV44GEJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ivt+mYheivu+ebuOWFs+adoeasvuOAguiLpeWQjOaEj++8jOWLvumAieWkjemAieahhuS7peehruiupCcsXG5cdFx0XHQnemgtaGFudCc6ICfoq4vplrLoroDnm7jpl5zmop3mrL7jgILoi6XlkIzmhI/vvIzli77pgbjopIfpgbjmoYbku6Xnorroqo0nLFxuXHRcdH0pLFxuXHRcdERvdWJsZUNoZWNrQWdyZWVkT3JOb3Q6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnWW91IGhhdmUgY2FyZWZ1bGx5IHJlYWQsIGZ1bGx5IHVuZGVyc3Rvb2QgYW5kIGFncmVlZCB0byBjb21wbHkgd2l0aCBvdXIgPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvRldJS0k6VE9TXCIgdGl0bGU9XCJUZXJtcyBvZiBTZXJ2aWNlXCI+VGVybXMgb2YgU2VydmljZTwvYT4sIDxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL0ZXSUtJOlBSSVZBQ1lcIiB0aXRsZT1cIlBlcnNvbmFsIEluZm9ybWF0aW9uIFByb3RlY3Rpb24gUG9saWN5XCI+UGVyc29uYWwgSW5mb3JtYXRpb24gUHJvdGVjdGlvbiBQb2xpY3k8L2E+IGFuZCA8YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9GV0lLSTpCS1pDXCIgdGl0bGU9XCJDb25zdGl0dXRpb25cIj5Db25zdGl0dXRpb248L2E+LicsXG5cdFx0XHRqYTogJ+OBguOBquOBn+OBr+acrOOCteOCpOODiOOBruOAjjxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL0ZXSUtJOlRPU1wiIHRpdGxlPVwi5Yip55So6KaP57SEXCI+5Yip55So6KaP57SEPC9hPuOAj+OAjjxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL0ZXSUtJOlBSSVZBQ1lcIiB0aXRsZT1cIuWAi+S6uuaDheWgseS/neitt+aWuemHnVwiPuWAi+S6uuaDheWgseS/neitt+aWuemHnTwvYT7jgI/jgI48YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9GV0lLSTpCS1pDXCIgdGl0bGU9XCLnmb7np5Hnq6DnqItcIj7nmb7np5Hnq6DnqIs8L2E+44CP44KS5Y2B5YiG44Gr55CG6Kej44GX44CB5ZCM5oSP44GX44Gf44GT44Go44Gr44Gq44KK44G+44GZ44CCJyxcblx0XHRcdCd6aC1oYW5zJzpcblx0XHRcdFx0J+aCqOW3suS7lOe7humYheivu+OAgeWFheWIhuS6huino+W5tuWQjOaEj+mBteWuiOacrOe9keermeeahOOAijxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL0ZXSUtJOlRPU1wiIHRpdGxlPVwi55So5oi35Y2P6K6uXCI+55So5oi35Y2P6K6uPC9hPuOAi+OAijxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL0ZXSUtJOlBSSVZBQ1lcIiB0aXRsZT1cIuS4quS6uuS/oeaBr+S/neaKpOadoeS+i1wiPuS4quS6uuS/oeaBr+S/neaKpOadoeS+izwvYT7jgIvjgIo8YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9GV0lLSTpCS1pDXCIgdGl0bGU9XCLnmb7np5Hnq6DnqItcIj7nmb7np5Hnq6DnqIs8L2E+44CL44CCJyxcblx0XHRcdCd6aC1oYW50Jzpcblx0XHRcdFx0J+aCqOW3suS7lOe0sOmWseiugOOAgeWFheWIhuS6huino+S4puWQjOaEj+mBteWuiOacrOe2suermeeahOOAijxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL0ZXSUtJOlRPU1wiIHRpdGxlPVwi55So5oi25Y2U6K2wXCI+55So5oi25Y2U6K2wPC9hPuOAi+OAijxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL0ZXSUtJOlBSSVZBQ1lcIiB0aXRsZT1cIuWAi+S6uuS/oeaBr+S/neitt+aineS+i1wiPuWAi+S6uuS/oeaBr+S/neitt+aineS+izwvYT7jgIvjgIo8YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9GV0lLSTpCS1pDXCIgdGl0bGU9XCLnmb7np5Hnq6DnqItcIj7nmb7np5Hnq6DnqIs8L2E+44CL44CCJyxcblx0XHR9KSxcblx0XHRFbXB0eTJGQTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdUaGUgMkZBIHZlcmlmaWNhdGlvbiBjb2RlIGNhbm5vdCBiZSBlbXB0eScsXG5cdFx0XHRqYTogJzJGQeiqjeiovOOCs+ODvOODieOBjOWFpeWKm+OBleOCjOOBpuOBhOOBvuOBm+OCkycsXG5cdFx0XHQnemgtaGFucyc6ICcyRkHpqozor4HnoIHkuI3og73kuLrnqbonLFxuXHRcdFx0J3poLWhhbnQnOiAnMkZB6amX6K2J56K85LiN6IO954iy56m6Jyxcblx0XHR9KSxcblx0XHRFbXB0eVBhc3N3b3JkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1RoZSBwYXNzd29yZCBjYW5ub3QgYmUgZW1wdHknLFxuXHRcdFx0amE6ICfjg5Hjgrnjg6/jg7zjg4njgYzlhaXlipvjgZXjgozjgabjgYTjgb7jgZvjgpMnLFxuXHRcdFx0J3poLWhhbnMnOiAn5a+G56CB5LiN6IO95Li656m6Jyxcblx0XHRcdCd6aC1oYW50JzogJ+WvhueivOS4jeiDveeIsuepuicsXG5cdFx0fSksXG5cdFx0RW1wdHlVc2VybmFtZU9yUGFzc3dvcmQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVGhlIHVzZXJuYW1lIG9yIHBhc3N3b3JkIGNhbm5vdCBiZSBlbXB0eScsXG5cdFx0XHRqYTogJ+WIqeeUqOiAheWQjeOBvuOBn+OBr+ODkeOCueODr+ODvOODieOBjOWFpeWKm+OBleOCjOOBpuOBhOOBvuOBm+OCkycsXG5cdFx0XHQnemgtY24nOiAn55So5oi35ZCN5oiW5a+G56CB5LiN6IO95Li656m6Jyxcblx0XHRcdCd6aC1oayc6ICfnlKjmiLblkI3nqLHmiJblr4bnorzkuI3og73niLLnqbonLFxuXHRcdFx0J3poLXR3JzogJ+S9v+eUqOiAheWQjeeoseaIluWvhueivOS4jeiDveeIsuepuicsXG5cdFx0fSksXG5cdFx0J05ldHdvcmsgZXJyb3InOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ05ldHdvcmsgZXJyb3IuIFJlZGlyZWN0aW5nLi4uJyxcblx0XHRcdGphOiAn44ON44OD44OI44Ov44O844Kv44Ko44Op44O844CB44Oq44OA44Kk44Os44Kv44OI5LitLi4uJyxcblx0XHRcdCd6aC1oYW5zJzogJ+e9kee7nOW8guW4uOOAgumHjeWumuWQkeS4reKApuKApicsXG5cdFx0XHQnemgtaGFudCc6ICfntrLot6/nlbDluLjjgILph43mlrDlsI7lkJHkuK3igKbigKYnLFxuXHRcdH0pLFxuXHRcdFNlbGVjdGVkT3JOb3Q6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnS2VlcCBsb2dnZWQgaW4gZm9yIDYgbW9udGhzIGlmIHNlbGVjdGVkOyBvdGhlcndpc2UgdW50aWwgdGhlIGJyb3dzZXIgY2xvc2VzLicsXG5cdFx0XHRqYTogJ+ODgeOCp+ODg+OCr+OCkuWFpeOCjOOCi+OBqOODreOCsOOCpOODs+eKtuaFi+OBjDbjg7bmnIjplpPkv53mjIHjgZXjgozjgIHlhaXjgozjgarjgYTloLTlkIjjga/jg5bjg6njgqbjgrbjgpLplonjgZjjgovjgb7jgafkv53mjIHjgZXjgozjgb7jgZnjgIInLFxuXHRcdFx0J3poLWhhbnMnOiAn5Yu+6YCJ5YiZ5L+d5oyB55m75b2V54q25oCBNuS4quaciO+8jOWQpuWImeWwhuWcqOa1j+iniOWZqOWFs+mXreaXtumAgOWHuueZu+W9leOAgicsXG5cdFx0XHQnemgtaGFudCc6ICfli77pgbjliJnkv53mjIHnmbvlhaXni4DmhYs25YCL5pyI77yM5ZCm5YmH5bCH5Zyo54CP6Ka95Zmo6Zec6ZaJ5pmC55m75Ye644CCJyxcblx0XHR9KSxcblx0XHRUb29GcmVxdWVudDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdUaGUgdXNlciBsb2dpbiBpcyB0b28gZnJlcXVlbnQsIHBsZWFzZSB0cnkgYWdhaW4gaW4gZml2ZSBtaW51dGVzJyxcblx0XHRcdGphOiAn5Yip55So6ICF44GM6aC757mB44GZ44GO44KL44Gf44KB44CBNeWIhuW+jOOBq+WGjeippuihjOOBl+OBpuOBj+OBoOOBleOBhCcsXG5cdFx0XHQnemgtY24nOiAn55So5oi355m75b2V6L+H5LqO6aKR57mB77yM6K+35LqU5YiG6ZKf5ZCO5YaN6K+VJyxcblx0XHRcdCd6aC1oayc6ICfnlKjmiLbnmbvlhaXpgY7mlrzpoLvnuYHvvIzoq4vkupTliIbpkJjlvozlho3oqaYnLFxuXHRcdFx0J3poLXR3JzogJ+S9v+eUqOiAheeZu+WFpei/h+S6jumikee5ge+8jOivt+S6lOWIhumSn+WQjuWGjeivlScsXG5cdFx0fSksXG5cdFx0J1VuZXhwZWN0ZWQgQVBJIHJlc3BvbnNlJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdVbmV4cGVjdGVkIEFQSSByZXNwb25zZTogJDEuIFJlZGlyZWN0aW5nLi4uJyxcblx0XHRcdGphOiAn5LqI5pyf44Gb44GsQVBJ44Gu5b+c562U77yaJDHjgIHjg6rjg4DjgqTjg6zjgq/jg4jkuK0uLi4nLFxuXHRcdFx0J3poLWhhbnMnOiAn5oSP5aSW55qEQVBJ5ZON5bqU77yaJDHjgILph43lrprlkJHkuK3igKbigKYnLFxuXHRcdFx0J3poLWhhbnQnOiAn5oSP5aSW55qEQVBJ6Z+/5oeJ77yaJDHjgILph43mlrDlsI7lkJHkuK3igKbigKYnLFxuXHRcdH0pLFxuXHRcdCdMb2dpbiB3aXRoIFFRJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdMb2dpbiB3aXRoIFFRJyxcblx0XHRcdGphOiAnUVHjgafjg63jgrDjgqTjg7MnLFxuXHRcdFx0J3poLWhhbnMnOiAnUVHnmbvlvZUnLFxuXHRcdFx0J3poLWhhbnQnOiAnUVHnmbvlhaUnLFxuXHRcdH0pLFxuXHRcdE9yOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ29yJyxcblx0XHRcdGphOiAn44G+44Gf44GvJyxcblx0XHRcdCd6aC1oYW5zJzogJ+aIlicsXG5cdFx0XHQnemgtaGFudCc6ICfmiJYnLFxuXHRcdH0pLFxuXHRcdCdRUSBsb2dpbiBkZXNjcmlwdGlvbic6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVXNlIHlvdXIgUVEgYWNjb3VudCB0byBsb2cgaW4gcXVpY2tseS4gWW91IHdpbGwgYmUgcmVkaXJlY3RlZCB0byB0aGUgUVEgYXV0aG9yaXphdGlvbiBwYWdlLicsXG5cdFx0XHRqYTogJ1FR44Ki44Kr44Km44Oz44OI44Gn57Sg5pep44GP44Ot44Kw44Kk44Oz44Gn44GN44G+44GZ44CCUVHoqo3oqLzjg5rjg7zjgrjjgavjg6rjg4DjgqTjg6zjgq/jg4jjgZfjgb7jgZnjgIInLFxuXHRcdFx0J3poLWhhbnMnOiAn5L2/55SoIFFRIOi0puaIt+W/q+aNt+eZu+W9le+8jOWNs+Wwhui3s+i9rOiHsyBRUSDmjojmnYPpobXpnaLjgIInLFxuXHRcdFx0J3poLWhhbnQnOiAn5L2/55SoIFFRIOizrOaItuW/q+aNt+eZu+WFpe+8jOWNs+Wwh+i3s+i9ieiHsyBRUSDmjojmrIrpoIHpnaLjgIInLFxuXHRcdH0pLFxuXHR9O1xufTtcbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiY29uc3QgaW5pdFdpbmRvd01hbmFnZXIgPSAoKTogT08udWkuV2luZG93TWFuYWdlciA9PiB7XG5cdHJldHVybiBuZXcgT08udWkuV2luZG93TWFuYWdlcigpO1xufTtcblxuY29uc3Qgd2luZG93TWFuYWdlcjogT08udWkuV2luZG93TWFuYWdlciA9IGluaXRXaW5kb3dNYW5hZ2VyKCk7XG5cbmV4cG9ydCB7d2luZG93TWFuYWdlcn07XG4iLCAiaW1wb3J0IHt3aW5kb3dNYW5hZ2VyfSBmcm9tICcuLi9pbml0V2luZG93TWFuYWdlcic7XG5cbmNvbnN0IG9vdWlDb25maXJtID0gYXN5bmMgKG9wdGlvbnM6IE9PLnVpLk1lc3NhZ2VEaWFsb2cuU2V0dXBEYXRhTWFwKTogUHJvbWlzZTxib29sZWFuPiA9PiB7XG5cdGNvbnN0IG1lc3NhZ2VEaWFsb2c6IE9PLnVpLk1lc3NhZ2VEaWFsb2cgPSBuZXcgT08udWkuTWVzc2FnZURpYWxvZygpO1xuXHR3aW5kb3dNYW5hZ2VyLmFkZFdpbmRvd3MoW21lc3NhZ2VEaWFsb2ddKTtcblxuXHRjb25zdCBpbnN0YW5jZTogT08udWkuV2luZG93SW5zdGFuY2UgPSB3aW5kb3dNYW5hZ2VyLm9wZW5XaW5kb3cobWVzc2FnZURpYWxvZywgb3B0aW9ucyk7XG5cblx0Y29uc3QgZGF0YTogdm9pZCA9IGF3YWl0IGluc3RhbmNlLmNsb3NlZDtcblx0Y29uc3QgX2RhdGEgPSBkYXRhIGFzIHthY3Rpb246IHN0cmluZ30gfCB2b2lkO1xuXG5cdHJldHVybiAhIShfZGF0YT8uYWN0aW9uID09PSAnYWNjZXB0Jyk7XG59O1xuXG5leHBvcnQge29vdWlDb25maXJtfTtcbiIsICJpbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5KU1gnO1xuaW1wb3J0IHtnZW5lcmF0ZVN2Z0RhdGFVcmx9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuaW1wb3J0IHFxTG9nb1N2ZyBmcm9tICcuLi8uLi9pbWFnZXMvU2ltcGxlSWNvbnNRcS5zdmcnO1xuXG5jb25zdCBnZW5lcmF0ZUVsZW1lbnRzID0gKGlzQWdyZWVUb3M6IGJvb2xlYW4pID0+IHtcblx0Y29uc3QgbWVzc2FnZURpYWxvZzogT08udWkuTWVzc2FnZURpYWxvZyA9IG5ldyBPTy51aS5NZXNzYWdlRGlhbG9nKCk7XG5cblx0Y29uc3QgbmFtZUlucHV0OiBPTy51aS5UZXh0SW5wdXRXaWRnZXQgPSBuZXcgT08udWkuVGV4dElucHV0V2lkZ2V0KHtcblx0XHRpY29uOiAndXNlckF2YXRhcicsXG5cdFx0cGxhY2Vob2xkZXI6IGdldE1lc3NhZ2UoJ1VzZXJuYW1lJyksXG5cdFx0dmFsaWRhdGU6ICdub24tZW1wdHknLFxuXHR9KTtcblxuXHRjb25zdCBwd2RJbnB1dDogT08udWkuVGV4dElucHV0V2lkZ2V0ID0gbmV3IE9PLnVpLlRleHRJbnB1dFdpZGdldCh7XG5cdFx0aWNvbjogJ2tleScsXG5cdFx0cGxhY2Vob2xkZXI6IGdldE1lc3NhZ2UoJ1Bhc3N3b3JkJyksXG5cdFx0dHlwZTogJ3Bhc3N3b3JkJyxcblx0XHR2YWxpZGF0ZTogJ25vbi1lbXB0eScsXG5cdH0pO1xuXG5cdGNvbnN0IGFncmVlVG9zQ2hlY2tib3g6IE9PLnVpLkNoZWNrYm94SW5wdXRXaWRnZXQgPSBuZXcgT08udWkuQ2hlY2tib3hJbnB1dFdpZGdldCh7XG5cdFx0c2VsZWN0ZWQ6IGlzQWdyZWVUb3MsXG5cdH0pO1xuXHRjb25zdCBhZ3JlZVRvc0xheW91dDogT08udWkuRmllbGRMYXlvdXQ8T08udWkuQ2hlY2tib3hJbnB1dFdpZGdldD4gPSBuZXcgT08udWkuRmllbGRMYXlvdXQoYWdyZWVUb3NDaGVja2JveCwge1xuXHRcdGFsaWduOiAnaW5saW5lJyxcblx0XHRsYWJlbDogZ2V0TWVzc2FnZSgnSSBhZ3JlZSB3aXRoIHRoZSByZWxldmFudCB0ZXJtcycpLFxuXHR9KTtcblxuXHRjb25zdCBrZWVwTG9naW5DaGVja2JveDogT08udWkuQ2hlY2tib3hJbnB1dFdpZGdldCA9IG5ldyBPTy51aS5DaGVja2JveElucHV0V2lkZ2V0KCk7XG5cdGNvbnN0IGtlZXBMb2dpbkxheW91dDogT08udWkuRmllbGRMYXlvdXQ8T08udWkuQ2hlY2tib3hJbnB1dFdpZGdldD4gPSBuZXcgT08udWkuRmllbGRMYXlvdXQoa2VlcExvZ2luQ2hlY2tib3gsIHtcblx0XHRhbGlnbjogJ2lubGluZScsXG5cdFx0aGVscDogZ2V0TWVzc2FnZSgnU2VsZWN0ZWRPck5vdCcpLFxuXHRcdGxhYmVsOiBnZXRNZXNzYWdlKCdLZWVwIG1lIGxvZ2dlZCBpbicpLFxuXHR9KTtcblxuXHRjb25zdCBsYWJlbCA9IChcblx0XHQ8bGFiZWxcblx0XHRcdGNsYXNzTmFtZT17Wydvby11aS1sYWJlbFdpZGdldCcsICdvby11aS1sYWJlbEVsZW1lbnQtbGFiZWwnXX1cblx0XHRcdHN0eWxlPXt7Zm9udFNpemU6ICc5MCUnLCB0ZXh0QWxpZ246ICdqdXN0aWZ5J319XG5cdFx0Lz5cblx0KTtcblx0Y29uc3QgJGxhYmVsID0gJChsYWJlbCkgYXMgSlF1ZXJ5O1xuXG5cdGNvbnN0ICRhZ3JlZVRvczogSlF1ZXJ5ID0gJGxhYmVsLmNsb25lKCkuYXBwZW5kKGFncmVlVG9zTGF5b3V0LiRlbGVtZW50KTtcblx0Y29uc3QgJGZvcmdvdFBhc3N3b3JkOiBKUXVlcnkgPSAkbGFiZWxcblx0XHQuY2xvbmUoKVxuXHRcdC5jc3MoJ2Zsb2F0JywgJ3JpZ2h0Jylcblx0XHQuYXBwZW5kKFxuXHRcdFx0PGEgaHJlZj17bXcudXRpbC5nZXRVcmwoJ1NwZWNpYWw6UGFzc3dvcmRSZXNldCcpfSB0aXRsZT17Z2V0TWVzc2FnZSgnUmVzZXQgcGFzc3dvcmQnKX0+XG5cdFx0XHRcdHtnZXRNZXNzYWdlKCdGb3Jnb3QgcGFzc3dvcmQ/Jyl9XG5cdFx0XHQ8L2E+XG5cdFx0KTtcblx0Y29uc3QgJGlucHV0Qm94OiBKUXVlcnkgPSAkbGFiZWxcblx0XHQuY2xvbmUoKVxuXHRcdC5jc3Moe1xuXHRcdFx0ZGlzcGxheTogJ2Jsb2NrJyxcblx0XHRcdCdmb250LXNpemUnOiAnaW5oZXJpdCcsXG5cdFx0XHRwYWRkaW5nOiAnNnB4IDAnLFxuXHRcdH0pXG5cdFx0LmFwcGVuZChuYW1lSW5wdXQuJGVsZW1lbnQuY3NzKCdtYXJnaW4tYm90dG9tJywgJzZweCcpLCBwd2RJbnB1dC4kZWxlbWVudCk7XG5cdGNvbnN0ICR0b3NMYWJlbDogSlF1ZXJ5ID0gJGxhYmVsLmNsb25lKCkuaHRtbChnZXRNZXNzYWdlKCdoZWxwIGZvciBJIGFncmVlIHdpdGggdGhlIHJlbGV2YW50IHRlcm1zJykpO1xuXHRjb25zdCAkcmVtZW1iZXJNZTogSlF1ZXJ5ID0gJGxhYmVsLmNsb25lKCkuYXBwZW5kKGtlZXBMb2dpbkxheW91dC4kZWxlbWVudC5jc3MoJ21hcmdpbi10b3AnLCAnNnB4JykpO1xuXG5cdC8vIFFRIGxvZ2luIGVsZW1lbnQg4oCUIGNvbmRpdGlvbmFsbHkgaW5jbHVkZWQgd2hlbiBRUUNvbm5lY3QgaXMgYXZhaWxhYmxlLlxuXHQvLyBMaW5rcyB0byBTcGVjaWFsOlVzZXJsb2dpbiAobm90IFNwZWNpYWw6UVFDb25uZWN0TG9naW4gZGlyZWN0bHkpIHNvIHRoYXRcblx0Ly8gdGhlIEF1dGhNYW5hZ2VyIGxvZ2luIGZsb3cgaXMgcHJvcGVybHkgaW5pdGlhdGVkLiAgVGhpcyBlbnN1cmVzIHNlY29uZGFyeVxuXHQvLyBhdXRoZW50aWNhdGlvbiBwcm92aWRlcnMgKGUuZy4gT0FUSEF1dGggLyAyRkEpIGFyZSBoYW5kbGVkIGNvcnJlY3RseVxuXHQvLyB0aHJvdWdoIFNwZWNpYWw6VXNlcmxvZ2luJ3MgbmF0aXZlIGZvcm0gY29udGludWF0aW9uIG1lY2hhbmlzbS5cblx0Y29uc3QgcXFMb2dpblVybDogc3RyaW5nID0gYCR7bXcudXRpbC5nZXRVcmwoJ1NwZWNpYWw6VXNlcmxvZ2luJyl9P3JldHVybnRvPSR7ZW5jb2RlVVJJQ29tcG9uZW50KGxvY2F0aW9uLmhyZWYpfWA7XG5cdGNvbnN0IHFxSWNvbkRhdGFVcmw6IHN0cmluZyA9IGdlbmVyYXRlU3ZnRGF0YVVybChxcUxvZ29TdmcgYXMgc3RyaW5nKTtcblx0Y29uc3QgJHFxTG9naW5TZWN0aW9uOiBKUXVlcnkgPSAkbGFiZWxcblx0XHQuY2xvbmUoKVxuXHRcdC5jc3Moe1xuXHRcdFx0ZGlzcGxheTogJ2Jsb2NrJyxcblx0XHRcdCdmb250LXNpemUnOiAnaW5oZXJpdCcsXG5cdFx0XHQndGV4dC1hbGlnbic6ICdjZW50ZXInLFxuXHRcdH0pXG5cdFx0LmFwcGVuZChcblx0XHRcdCQoJzxzcGFuPicpXG5cdFx0XHRcdC5jc3Moe1xuXHRcdFx0XHRcdGNvbG9yOiAnIzcyNzc3ZCcsXG5cdFx0XHRcdFx0ZGlzcGxheTogJ2Jsb2NrJyxcblx0XHRcdFx0XHRtYXJnaW46ICc0cHggMCcsXG5cdFx0XHRcdH0pXG5cdFx0XHRcdC50ZXh0KGdldE1lc3NhZ2UoJ09yJykpLFxuXHRcdFx0JCgnPGE+Jylcblx0XHRcdFx0LmF0dHIoe1xuXHRcdFx0XHRcdGhyZWY6IHFxTG9naW5VcmwsXG5cdFx0XHRcdFx0dGl0bGU6IGdldE1lc3NhZ2UoJ1FRIGxvZ2luIGRlc2NyaXB0aW9uJyksXG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5jc3Moe1xuXHRcdFx0XHRcdCdiYWNrZ3JvdW5kLWNvbG9yJzogJyMxMkI3RjUnLFxuXHRcdFx0XHRcdGJvcmRlcjogJzFweCBzb2xpZCAjMTJCN0Y1Jyxcblx0XHRcdFx0XHQnYm9yZGVyLXJhZGl1cyc6ICcycHgnLFxuXHRcdFx0XHRcdGNvbG9yOiAnI2ZmZicsXG5cdFx0XHRcdFx0Y3Vyc29yOiAncG9pbnRlcicsXG5cdFx0XHRcdFx0ZGlzcGxheTogJ2lubGluZS1mbGV4Jyxcblx0XHRcdFx0XHQnYWxpZ24taXRlbXMnOiAnY2VudGVyJyxcblx0XHRcdFx0XHRnYXA6ICc2cHgnLFxuXHRcdFx0XHRcdHBhZGRpbmc6ICc1cHggMTJweCcsXG5cdFx0XHRcdFx0J2ZvbnQtd2VpZ2h0JzogJ2JvbGQnLFxuXHRcdFx0XHRcdCdmb250LXNpemUnOiAnMWVtJyxcblx0XHRcdFx0XHQnbGluZS1oZWlnaHQnOiAnMS40Mjg1NzE0MycsXG5cdFx0XHRcdFx0J3RleHQtZGVjb3JhdGlvbic6ICdub25lJyxcblx0XHRcdFx0XHQnd2hpdGUtc3BhY2UnOiAnbm93cmFwJyxcblx0XHRcdFx0fSlcblx0XHRcdFx0LmFwcGVuZChcblx0XHRcdFx0XHQkKCc8aW1nPicpLmF0dHIoe1xuXHRcdFx0XHRcdFx0c3JjOiBxcUljb25EYXRhVXJsLFxuXHRcdFx0XHRcdFx0YWx0OiAnUVEnLFxuXHRcdFx0XHRcdFx0d2lkdGg6IDIwLFxuXHRcdFx0XHRcdFx0aGVpZ2h0OiAyMCxcblx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHRnZXRNZXNzYWdlKCdMb2dpbiB3aXRoIFFRJylcblx0XHRcdFx0KVxuXHRcdCk7XG5cblx0cmV0dXJuIHtcblx0XHQkYWdyZWVUb3MsXG5cdFx0JGZvcmdvdFBhc3N3b3JkLFxuXHRcdCRpbnB1dEJveCxcblx0XHQkcXFMb2dpblNlY3Rpb24sXG5cdFx0JHJlbWVtYmVyTWUsXG5cdFx0JHRvc0xhYmVsLFxuXHRcdGFncmVlVG9zQ2hlY2tib3gsXG5cdFx0a2VlcExvZ2luQ2hlY2tib3gsXG5cdFx0bWVzc2FnZURpYWxvZyxcblx0XHRuYW1lSW5wdXQsXG5cdFx0cHdkSW5wdXQsXG5cdH07XG59O1xuXG5leHBvcnQge2dlbmVyYXRlRWxlbWVudHN9O1xuIiwgIjxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTIxLjM5NSAxNS4wMzVhNDAgNDAgMCAwIDAtLjgwMy0yLjI2NGwtMS4wNzktMi42OTVjLjAwMS0uMDMyLjAxNC0uNTYyLjAxNC0uODM2QzE5LjUyNiA0LjYzMiAxNy4zNTEgMCAxMiAwUzQuNDc0IDQuNjMyIDQuNDc0IDkuMjQxYzAgLjI3NC4wMTMuODA0LjAxNC44MzZsLTEuMDggMi42OTVhMzkgMzkgMCAwIDAtLjgwMiAyLjI2NGMtMS4wMjEgMy4yODMtLjY5IDQuNjQzLS40MzggNC42NzMuNTQuMDY1IDIuMTAzLTIuNDcyIDIuMTAzLTIuNDcyIDAgMS40NjkuNzU2IDMuMzg3IDIuMzk0IDQuNzcxLS42MTIuMTg4LTEuMzYzLjQ3OS0xLjg0NS44MzUtLjQzNC4zMi0uMzc5LjY0Ni0uMzAxLjc3OC4zNDMuNTc4IDUuODgzLjM2OSA3LjQ4Mi4xODkgMS42LjE4IDcuMTQuMzg5IDcuNDgzLS4xODkuMDc4LS4xMzIuMTMyLS40NTgtLjMwMS0uNzc4LS40ODMtLjM1Ni0xLjIzMy0uNjQ2LTEuODQ2LS44MzYgMS42MzctMS4zODQgMi4zOTMtMy4zMDIgMi4zOTMtNC43NzEgMCAwIDEuNTYzIDIuNTM3IDIuMTAzIDIuNDcyLjI1MS0uMDMuNTgxLTEuMzktLjQzOC00LjY3M1wiLz48L3N2Zz4iLCAiaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuSlNYJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5pbXBvcnQge3JlbW92ZVdpbmRvd1Jlc2l6ZUhhbmRsZXJ9IGZyb20gJy4vcmVtb3ZlV2luZG93UmVzaXplSGFuZGxlcic7XG5pbXBvcnQge3dpbmRvd01hbmFnZXJ9IGZyb20gJy4uL2luaXRXaW5kb3dNYW5hZ2VyJztcblxuY29uc3Qgb291aVByb21wdCA9IGFzeW5jIChyZXR5cGVQYXNzd29yZDogYm9vbGVhbik6IFByb21pc2U8c3RyaW5nIHwgbnVsbD4gPT4ge1xuXHRjb25zdCBjb2RlRGlhbG9nOiBPTy51aS5NZXNzYWdlRGlhbG9nID0gbmV3IE9PLnVpLk1lc3NhZ2VEaWFsb2coKTtcblx0Y29uc3QgY29kZUlucHV0OiBPTy51aS5UZXh0SW5wdXRXaWRnZXQgPSBuZXcgT08udWkuVGV4dElucHV0V2lkZ2V0KHtcblx0XHRpY29uOiAna2V5Jyxcblx0XHRwbGFjZWhvbGRlcjogcmV0eXBlUGFzc3dvcmQgPyBnZXRNZXNzYWdlKCdOZXcgcGFzc3dvcmQnKSA6IGdldE1lc3NhZ2UoJzYtZGlnaXQgbnVtYmVyJyksXG5cdFx0dmFsaWRhdGU6ICdpbnRlZ2VyJyxcblx0fSk7XG5cblx0Y29uc3QgY29kZUxheW91dDogT08udWkuRmllbGRMYXlvdXQ8T08udWkuVGV4dElucHV0V2lkZ2V0PiA9IG5ldyBPTy51aS5GaWVsZExheW91dChjb2RlSW5wdXQsIHtcblx0XHRhbGlnbjogJ3RvcCcsXG5cdFx0bGFiZWw6ICQoXG5cdFx0XHQ8YiBjbGFzc05hbWU9e1snb28tdWktbWVzc2FnZURpYWxvZy10aXRsZScsICdvby11aS13aW5kb3ctaGVhZCddfT5cblx0XHRcdFx0e3JldHlwZVBhc3N3b3JkID8gZ2V0TWVzc2FnZSgnRW50ZXIgcGFzc3dvcmQnKSA6IGdldE1lc3NhZ2UoJ0VudGVyIDJGQSB2ZXJpZmljYXRpb24gY29kZScpfVxuXHRcdFx0PC9iPlxuXHRcdCksXG5cdH0pO1xuXG5cdHdpbmRvd01hbmFnZXIuYWRkV2luZG93cyhbY29kZURpYWxvZ10pO1xuXG5cdGNvbnN0IGluc3RhbmNlOiBPTy51aS5XaW5kb3dJbnN0YW5jZSA9IHdpbmRvd01hbmFnZXIub3BlbldpbmRvdyhjb2RlRGlhbG9nLCB7XG5cdFx0bWVzc2FnZTogY29kZUxheW91dC4kZWxlbWVudCxcblx0fSk7XG5cblx0cmVtb3ZlV2luZG93UmVzaXplSGFuZGxlcigpO1xuXG5cdHZvaWQgaW5zdGFuY2Uub3BlbmVkLnRoZW4oKCk6IHZvaWQgPT4ge1xuXHRcdGNvZGVJbnB1dC5vbignZW50ZXInLCAoKTogdm9pZCA9PiB7XG5cdFx0XHQod2luZG93TWFuYWdlci5nZXRDdXJyZW50V2luZG93KCkgYXMgT08udWkuV2luZG93KS5jbG9zZSh7XG5cdFx0XHRcdGFjdGlvbjogJ2FjY2VwdCcsXG5cdFx0XHR9KTtcblx0XHR9KTtcblx0XHRjb2RlSW5wdXQuZm9jdXMoKTtcblx0fSk7XG5cblx0Y29uc3QgZGF0YTogdm9pZCA9IGF3YWl0IGluc3RhbmNlLmNsb3NlZDtcblx0Y29uc3QgX2RhdGEgPSBkYXRhIGFzIHthY3Rpb246IHN0cmluZ30gfCB2b2lkO1xuXG5cdHJldHVybiBfZGF0YT8uYWN0aW9uID09PSAnYWNjZXB0JyA/IGNvZGVJbnB1dC5nZXRWYWx1ZSgpIDogbnVsbDtcbn07XG5cbmV4cG9ydCB7b291aVByb21wdH07XG4iLCAiaW1wb3J0IHt3aW5kb3dNYW5hZ2VyfSBmcm9tICcuLi9pbml0V2luZG93TWFuYWdlcic7XG5cbmNvbnN0IHJlbW92ZVdpbmRvd1Jlc2l6ZUhhbmRsZXIgPSAoKTogdm9pZCA9PiB7XG5cdCQod2luZG93KS5vZmYoe1xuXHRcdCdvcmllbnRhdGlvbmNoYW5nZSByZXNpemUnOiAod2luZG93TWFuYWdlciBhcyB1bmtub3duIGFzIHtvbldpbmRvd1Jlc2l6ZUhhbmRsZXI6ICgpID0+IHZvaWR9KVxuXHRcdFx0Lm9uV2luZG93UmVzaXplSGFuZGxlcixcblx0fSk7XG59O1xuXG5leHBvcnQge3JlbW92ZVdpbmRvd1Jlc2l6ZUhhbmRsZXJ9O1xuIiwgImltcG9ydCB7YXBpfSBmcm9tICcuLi9hcGknO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcbmltcG9ydCB7dG9hc3RpZnl9IGZyb20gJ2V4dC5nYWRnZXQuVG9hc3RpZnknO1xuXG5jb25zdCBxdWVyeUxvZ2luVG9rZW4gPSBhc3luYyAoXG5cdHRvYXN0aWZ5SW5zdGFuY2U6IFRvYXN0aWZ5SW5zdGFuY2Vcbik6IFByb21pc2U8e1xuXHRsb2dpblRva2VuOiBzdHJpbmc7XG5cdHRvYXN0aWZ5SW5zdGFuY2U6IFRvYXN0aWZ5SW5zdGFuY2U7XG59PiA9PiB7XG5cdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdHRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeSh7XG5cdFx0dGV4dDogZ2V0TWVzc2FnZSgnR2V0dGluZyBsb2dpbiB0b2tlbicpLFxuXHR9KTtcblxuXHRjb25zdCBsb2dpblRva2VuOiBzdHJpbmcgPSBhd2FpdCBhcGkuZ2V0VG9rZW4oJ2xvZ2luJyk7XG5cblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KHtcblx0XHR0ZXh0OiBnZXRNZXNzYWdlKCdMb2dpbiB0b2tlbiBnb3QnKSxcblx0XHRkdXJhdGlvbjogLTEsXG5cdH0pO1xuXG5cdHJldHVybiB7XG5cdFx0bG9naW5Ub2tlbixcblx0XHR0b2FzdGlmeUluc3RhbmNlLFxuXHR9O1xufTtcblxuZXhwb3J0IHtxdWVyeUxvZ2luVG9rZW59O1xuIiwgImltcG9ydCB7ZGVsYXl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge3dpbmRvd01hbmFnZXJ9IGZyb20gJy4uL2luaXRXaW5kb3dNYW5hZ2VyJztcblxuY29uc3QgcmVkaXJlY3RPcmlnaW5Mb2dpblBhZ2UgPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdGF3YWl0IHdpbmRvd01hbmFnZXIuY2xlYXJXaW5kb3dzKCk7XG5cdGF3YWl0IGRlbGF5KDMgKiAxMDAwKTtcblx0bG9jYXRpb24uaHJlZiA9IG13LnV0aWwuZ2V0VXJsKCdTcGVjaWFsOlVzZXJsb2dpbicpO1xufTtcblxuZXhwb3J0IHtyZWRpcmVjdE9yaWdpbkxvZ2luUGFnZX07XG4iLCAiaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcbmltcG9ydCB7dG9hc3RpZnl9IGZyb20gJ2V4dC5nYWRnZXQuVG9hc3RpZnknO1xuXG5jb25zdCBzaG93RXJyb3IgPSAoZXJyb3I6IHVua25vd24sIHRvYXN0aWZ5SW5zdGFuY2U6IFRvYXN0aWZ5SW5zdGFuY2UpOiB2b2lkID0+IHtcblx0Y29uc29sZS5lcnJvcignW0FqYXhMb2dpbl0gQWpheCBlcnJvcjonLCBlcnJvcik7XG5cdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdHRvYXN0aWZ5KFxuXHRcdHtcblx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ05ldHdvcmsgZXJyb3InKSxcblx0XHRcdGNsb3NlOiB0cnVlLFxuXHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdH0sXG5cdFx0J2Vycm9yJ1xuXHQpO1xufTtcblxuZXhwb3J0IHtzaG93RXJyb3J9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7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VyxPQUFPLENBQUUsQ0FBSTtJQUNuRStLLE1BQU07RUFDUCxDQUFDO0FBQ0RwRSw0QkFBMEI7QUFDM0I7O0FIN1FBLE1BQUEsR0FBSzdJLG9CQUFBa04sU0FBUSxFQUFFMUQsS0FBSyxTQUFTMkQsY0FBY0MsT0FBc0M7QUFFaEYsTUFBSWxHLEdBQUc2RCxPQUFPQyxJQUFZbEwsU0FBUyxHQUFHO0FBQ3JDO0VBQ0Q7QUFFQSxRQUFNO0lBQUN1TjtFQUFVLElBQUluRyxHQUFHNkQsT0FBT0MsSUFBSTtBQUVuQyxNQUFJcUMsWUFBWTtBQUNmO0VBQ0Q7QUFFQSxRQUFNQyxnQkFBMkNGLE1BQU1uQyxLQUFnQ3BMLG9CQUFvQjtBQUMzRyxNQUFJLENBQUN5TixjQUFjQyxRQUFRO0FBQzFCO0VBQ0Q7QUFFQS9LLGdCQUFjcEMsU0FBU29OLFNBQVNKLEtBQUs7QUFFckMsUUFBTUssdUJBQXlDO0lBQzlDbkosV0FBV0EsTUFBTTtJQUFDO0VBQ25CO0FBRUEsUUFBTWpFLGdCQUFpQjZLLFdBQXlEO0FBQy9FLFFBQUksRUFBQSxHQUFDbEwsb0JBQUEwTixxQkFBb0J4QyxLQUFLLEdBQUc7QUFDaEM7SUFDRDtBQUVBQSxVQUFNQyxlQUFlO0FBQ3JCUCxjQUFVNkMsb0JBQW9CO0VBQy9CO0FBQ0F0TixjQUFZbU4sZUFBZWpOLGFBQWE7QUFHeEM2RyxLQUFHNkQsT0FBTzRDLElBQVk3TixXQUFXLElBQUk7QUFDdEMsQ0FBQzsiLAogICJuYW1lcyI6IFsibG9naW5FbGVtZW50U2VsZWN0b3IiLCAiY29uZmlnS2V5IiwgInZlcnNpb24iLCAiaW1wb3J0X2V4dF9nYWRnZXQxNCIsICJyZXF1aXJlIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImFkZExpc3RlbmVyIiwgIiRlbGVtZW50IiwgImV2ZW50TGlzdGVuZXIiLCAib24iLCAiZmlsdGVyQWx0ZXJlZENsaWNrcyIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiYXBpIiwgImluaXRNd0FwaSIsICJjb25jYXQiLCAiaW1wb3J0X2V4dF9nYWRnZXQxMiIsICJfX3RvRVNNIiwgImltcG9ydF9leHRfZ2FkZ2V0NCIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgImxvY2FsaXplIiwgImVuIiwgImphIiwgIkNhbmNlbCIsICJ6aCIsICJMb2dpbiIsICJQYXNzd29yZCIsICJVc2VybmFtZSIsICJBZ3JlZWRPck5vdCIsICJEb3VibGVDaGVja0FncmVlZE9yTm90IiwgIkVtcHR5MkZBIiwgIkVtcHR5UGFzc3dvcmQiLCAiRW1wdHlVc2VybmFtZU9yUGFzc3dvcmQiLCAiU2VsZWN0ZWRPck5vdCIsICJUb29GcmVxdWVudCIsICJPciIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiaW5pdFdpbmRvd01hbmFnZXIiLCAiT08iLCAidWkiLCAiV2luZG93TWFuYWdlciIsICJ3aW5kb3dNYW5hZ2VyIiwgIm9vdWlDb25maXJtIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAib3B0aW9ucyIsICJtZXNzYWdlRGlhbG9nIiwgIk1lc3NhZ2VEaWFsb2ciLCAiYWRkV2luZG93cyIsICJpbnN0YW5jZSIsICJvcGVuV2luZG93IiwgImRhdGEiLCAiY2xvc2VkIiwgIl9kYXRhIiwgImFjdGlvbiIsICJfeCIsICJhcHBseSIsICJhcmd1bWVudHMiLCAiaW1wb3J0X2V4dF9nYWRnZXQ1IiwgImNoZWNrVmFsaWQiLCAiX3JlZjIiLCAiYWdyZWVUb3NDaGVja2JveCIsICJuYW1lSW5wdXQiLCAicHdkSW5wdXQiLCAidG9hc3RpZnlJbnN0YW5jZSIsICJpc0FncmVlVG9zIiwgImlzU2VsZWN0ZWQiLCAiaXNGaWxsIiwgImdldFZhbHVlIiwgInRyaW0iLCAiaW5jbHVkZXMiLCAiaGlkZVRvYXN0IiwgImNsZWFyV2luZG93cyIsICJtZXNzYWdlIiwgIiQiLCAiZGVmYXVsdCIsICJjcmVhdGVFbGVtZW50IiwgImlubmVySFRNTCIsICJhY3Rpb25zIiwgImxhYmVsIiwgImZsYWdzIiwgInRvYXN0aWZ5IiwgInRleHQiLCAiZHVyYXRpb24iLCAiaXNWYWxpZCIsICJfeDIiLCAiX3gzIiwgImltcG9ydF9leHRfZ2FkZ2V0NiIsICJpbXBvcnRfZXh0X2dhZGdldDciLCAiU2ltcGxlSWNvbnNRcV9kZWZhdWx0IiwgImdlbmVyYXRlRWxlbWVudHMiLCAiVGV4dElucHV0V2lkZ2V0IiwgImljb24iLCAicGxhY2Vob2xkZXIiLCAidmFsaWRhdGUiLCAidHlwZSIsICJDaGVja2JveElucHV0V2lkZ2V0IiwgInNlbGVjdGVkIiwgImFncmVlVG9zTGF5b3V0IiwgIkZpZWxkTGF5b3V0IiwgImFsaWduIiwgImtlZXBMb2dpbkNoZWNrYm94IiwgImtlZXBMb2dpbkxheW91dCIsICJoZWxwIiwgImNsYXNzTmFtZSIsICJzdHlsZSIsICJmb250U2l6ZSIsICJ0ZXh0QWxpZ24iLCAiJGxhYmVsIiwgIiRhZ3JlZVRvcyIsICJjbG9uZSIsICJhcHBlbmQiLCAiJGZvcmdvdFBhc3N3b3JkIiwgImNzcyIsICJocmVmIiwgIm13IiwgInV0aWwiLCAiZ2V0VXJsIiwgInRpdGxlIiwgIiRpbnB1dEJveCIsICJkaXNwbGF5IiwgInBhZGRpbmciLCAiJHRvc0xhYmVsIiwgImh0bWwiLCAiJHJlbWVtYmVyTWUiLCAicXFMb2dpblVybCIsICJlbmNvZGVVUklDb21wb25lbnQiLCAibG9jYXRpb24iLCAicXFJY29uRGF0YVVybCIsICJnZW5lcmF0ZVN2Z0RhdGFVcmwiLCAiJHFxTG9naW5TZWN0aW9uIiwgImNvbG9yIiwgIm1hcmdpbiIsICJhdHRyIiwgImJvcmRlciIsICJjdXJzb3IiLCAiZ2FwIiwgInNyYyIsICJhbHQiLCAid2lkdGgiLCAiaGVpZ2h0IiwgImltcG9ydF9leHRfZ2FkZ2V0OCIsICJyZW1vdmVXaW5kb3dSZXNpemVIYW5kbGVyIiwgIndpbmRvdyIsICJvZmYiLCAib25XaW5kb3dSZXNpemVIYW5kbGVyIiwgIm9vdWlQcm9tcHQiLCAiX3JlZjMiLCAicmV0eXBlUGFzc3dvcmQiLCAiY29kZURpYWxvZyIsICJjb2RlSW5wdXQiLCAiY29kZUxheW91dCIsICJvcGVuZWQiLCAidGhlbiIsICJnZXRDdXJyZW50V2luZG93IiwgImNsb3NlIiwgImZvY3VzIiwgIl94NCIsICJpbXBvcnRfZXh0X2dhZGdldDkiLCAicXVlcnlMb2dpblRva2VuIiwgIl9yZWY0IiwgImxvZ2luVG9rZW4iLCAiZ2V0VG9rZW4iLCAiX3g1IiwgImltcG9ydF9leHRfZ2FkZ2V0MTAiLCAicmVkaXJlY3RPcmlnaW5Mb2dpblBhZ2UiLCAiX3JlZjUiLCAiZGVsYXkiLCAiaW1wb3J0X2V4dF9nYWRnZXQxMSIsICJzaG93RXJyb3IiLCAiZXJyb3IiLCAiY29uc29sZSIsICJpbXBvcnRfZXh0X2dhZGdldDEzIiwgImFqYXhMb2dpbiIsICJoYXNRcUNvbm5lY3QiLCAiQm9vbGVhbiIsICJjb25maWciLCAiZ2V0IiwgImZpbmQiLCAiZXZlbnQiLCAicHJldmVudERlZmF1bHQiLCAibG9naW4iLCAiX3JlZjYiLCAibG9naW5Db250aW51ZSIsICJfcmVzcG9uc2UkY2xpZW50bG9naW4iLCAiX3Jlc3BvbnNlJGNsaWVudGxvZ2luMiIsICJwYXJhbXMiLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAibG9naW50b2tlbiIsICJsb2dpbnJldHVybnVybCIsICJ1c2VybmFtZSIsICJwYXNzd29yZCIsICJyZW1lbWJlck1lIiwgImxvZ2luY29udGludWUiLCAidmFsdWUiLCAicmV0eXBlIiwgIk9BVEhUb2tlbiIsICJyZXNwb25zZSIsICJwb3N0IiwgInN0YXR1cyIsICJyZWxvYWQiLCAibWVzc2FnZWNvZGUiLCAicmVwbGFjZSIsICJjaGVjayIsICJfcmVmNyIsICJsYXN0SXNBZ3JlZVRvcyIsICJsYXN0VG9hc3RpZnlJbnN0YW5jZSIsICJnZXRBY3Rpb25Qcm9jZXNzIiwgIlByb2Nlc3MiLCAic2l6ZSIsICJnZXRCb2R5IiwgImluaXRBdXRvTG9naW4iLCAiJGJvZHkiLCAid2dVc2VyTmFtZSIsICIkbG9naW5FbGVtZW50IiwgImxlbmd0aCIsICJhcHBlbmRUbyIsICJmYWtlVG9hc3RpZnlJbnN0YW5jZSIsICJjaGVja0ExMXlDb25maXJtS2V5IiwgInNldCJdCn0K
