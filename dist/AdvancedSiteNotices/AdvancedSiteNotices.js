/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-AdvancedSiteNotices.js}
 * @source {@link https://github.com/FurryWiki-zh/FurryWikiGadgets/tree/master/src/AdvancedSiteNotices}
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

// node_modules/.pnpm/broadcastchannel-polyfill@1.0.1/node_modules/broadcastchannel-polyfill/index.js
var require_broadcastchannel_polyfill = __commonJS({
  "node_modules/.pnpm/broadcastchannel-polyfill@1.0.1/node_modules/broadcastchannel-polyfill/index.js"() {
    (function(global) {
      var channels = [];
      function BroadcastChannel2(channel) {
        var $this = this;
        channel = String(channel);
        var id = "$BroadcastChannel$" + channel + "$";
        channels[id] = channels[id] || [];
        channels[id].push(this);
        this._name = channel;
        this._id = id;
        this._closed = false;
        this._mc = new MessageChannel();
        this._mc.port1.start();
        this._mc.port2.start();
        global.addEventListener("storage", function(e) {
          if (e.storageArea !== global.localStorage) return;
          if (e.newValue == null || e.newValue === "") return;
          if (e.key.substring(0, id.length) !== id) return;
          var data = JSON.parse(e.newValue);
          $this._mc.port2.postMessage(data);
        });
      }
      BroadcastChannel2.prototype = {
        // BroadcastChannel API
        get name() {
          return this._name;
        },
        postMessage: function(message) {
          var $this = this;
          if (this._closed) {
            var e = new Error();
            e.name = "InvalidStateError";
            throw e;
          }
          var value = JSON.stringify(message);
          var key = this._id + String(Date.now()) + "$" + String(Math.random());
          global.localStorage.setItem(key, value);
          setTimeout(function() {
            global.localStorage.removeItem(key);
          }, 500);
          channels[this._id].forEach(function(bc) {
            if (bc === $this) return;
            bc._mc.port2.postMessage(JSON.parse(value));
          });
        },
        close: function() {
          if (this._closed) return;
          this._closed = true;
          this._mc.port1.close();
          this._mc.port2.close();
          var index = channels[this._id].indexOf(this);
          channels[this._id].splice(index, 1);
        },
        // EventTarget API
        get onmessage() {
          return this._mc.port1.onmessage;
        },
        set onmessage(value) {
          this._mc.port1.onmessage = value;
        },
        addEventListener: function() {
          return this._mc.port1.addEventListener.apply(this._mc.port1, arguments);
        },
        removeEventListener: function() {
          return this._mc.port1.removeEventListener.apply(this._mc.port1, arguments);
        },
        dispatchEvent: function() {
          return this._mc.port1.dispatchEvent.apply(this._mc.port1, arguments);
        }
      };
      global.BroadcastChannel = global.BroadcastChannel || BroadcastChannel2;
    })(self);
  }
});

// dist/AdvancedSiteNotices/AdvancedSiteNotices.js
require_broadcastchannel_polyfill();
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
//! src/AdvancedSiteNotices/options.json
var ajaxPageTitle = "Template:AdvancedSiteNotices/ajax";
var mountPointSelector = "#siteNotice";
var storageKey = "ext.gadget.AdvancedSiteNotices_dismissASN";
var cacheKey = "ext.gadget.AdvancedSiteNotices_cache";
var version = "4.0";
//! src/AdvancedSiteNotices/AdvancedSiteNotices.ts
var import_ext_gadget7 = require("ext.gadget.Util");
//! src/AdvancedSiteNotices/modules/api.ts
var import_ext_gadget = require("ext.gadget.Util");
var api = (0, import_ext_gadget.initMwApi)("AdvancedSiteNotices/".concat(version));
//! src/AdvancedSiteNotices/modules/util/queryApi.ts
var {
  wgUserLanguage
} = mw.config.get();
var parameters = {
  action: "parse",
  format: "json",
  formatversion: "2",
  prop: "text",
  page: ajaxPageTitle,
  uselang: wgUserLanguage,
  variant: wgUserLanguage,
  smaxage: 600,
  maxage: 600
};
var queryApi = /* @__PURE__ */ function() {
  var _ref = _asyncToGenerator(function* () {
    try {
      let response;
      if (mw.storage.getObject(cacheKey)) {
        response = mw.storage.getObject(cacheKey);
      } else {
        response = yield api.get(parameters);
        mw.storage.setObject(cacheKey, response, 60 * 10);
      }
      return response;
    } catch (error) {
      console.error("[AdvancedSiteNotices] Ajax error:", error);
      return {};
    }
  });
  return function queryApi2() {
    return _ref.apply(this, arguments);
  };
}();
//! src/AdvancedSiteNotices/modules/loadRemoteNotices.tsx
var import_ext_gadget2 = __toESM(require("ext.gadget.JSX"), 1);
var loadRemoteNotices = /* @__PURE__ */ function() {
  var _ref2 = _asyncToGenerator(function* () {
    const response = yield queryApi();
    const responseParse = response["parse"];
    if (!(responseParse !== null && responseParse !== void 0 && responseParse.text)) {
      return {};
    }
    const remoteNotice = (/* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
      innerHTML: responseParse.text
    })).querySelector("ul.sitents");
    if (!remoteNotice) {
      return {};
    }
    const $remoteNotices = $(remoteNotice);
    const $notices2 = $remoteNotices.find("li");
    const remoteNoticesVersion = $remoteNotices.data("asn-version").toString();
    return {
      $notices: $notices2,
      version: remoteNoticesVersion
    };
  });
  return function loadRemoteNotices2() {
    return _ref2.apply(this, arguments);
  };
}();
//! src/AdvancedSiteNotices/modules/constant.ts
var CLASS_NAME = "gadget-advanced_site_notices";
var CLASS_NAME_DISMISS = "".concat(CLASS_NAME, "__dismiss");
var CLASS_NAME_NOTICE = "".concat(CLASS_NAME, "__notice");
var CLASS_NAME_NOTICE_CONTENT = "".concat(CLASS_NAME_NOTICE, "__content");
var CLASS_NAME_TITLE = "".concat(CLASS_NAME, "__title");
//! src/AdvancedSiteNotices/modules/showNotice.tsx
var import_ext_gadget5 = __toESM(require("ext.gadget.JSX"), 1);
//! src/AdvancedSiteNotices/modules/util/generateArea.tsx
var import_ext_gadget4 = __toESM(require("ext.gadget.JSX"), 1);
//! src/AdvancedSiteNotices/modules/i18n.ts
var import_ext_gadget3 = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    Dismiss: (0, import_ext_gadget3.localize)({
      en: "Turn off this notice",
      ja: "ASNをオフにする",
      "zh-hans": "关闭公告",
      "zh-hant": "關閉公告"
    }),
    DismissNotice: (0, import_ext_gadget3.localize)({
      en: "You have chosen to turn off Advanced Site Notices for the next 30 days. <br>If the site-wide announcement is not updated within the next 30 days, it will no longer be displayed; however, if the site-wide announcement is updated, it will be displayed again.",
      ja: "今後30日間、ASNをオフにすることを選択しました。<br>サイト全体の通知が今後30日以内に更新されない場合、表示されなくなります。ただし、サイト全体の通知が更新される場合は、再び表示されます。",
      "zh-hans": "您已选择在接下来30日内关闭“高级站点通告”。<br>若接下来30日内全站公告未有更新，则不再显示；但是，若全站公告内容更新，则将重新显示。",
      "zh-hant": "您已選擇在接下來30日內關閉「高級站點通告」。<br>若接下來30日內全站公告未有更新，則不再顯示；但是，若全站公告內容更新，則將重新顯示。"
    }),
    Title: (0, import_ext_gadget3.localize)({
      en: "Announcement",
      ja: "通知",
      zh: "公告"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/AdvancedSiteNotices/modules/util/generateArea.tsx
var generateArea = () => {
  const area = /* @__PURE__ */ import_ext_gadget4.default.createElement("div", {
    className: [CLASS_NAME, "noprint"]
  }, /* @__PURE__ */ import_ext_gadget4.default.createElement("div", {
    className: CLASS_NAME_TITLE
  }, getMessage("Title")), /* @__PURE__ */ import_ext_gadget4.default.createElement("div", {
    className: CLASS_NAME_NOTICE
  }, /* @__PURE__ */ import_ext_gadget4.default.createElement("div", {
    className: [CLASS_NAME_NOTICE_CONTENT, "center"],
    role: "status",
    "aria-live": "polite",
    "aria-atomic": "true"
  })), /* @__PURE__ */ import_ext_gadget4.default.createElement("div", {
    className: CLASS_NAME_DISMISS
  }, /* @__PURE__ */ import_ext_gadget4.default.createElement("a", {
    role: "button",
    "aria-label": getMessage("Dismiss")
  })));
  return $(area);
};
//! src/AdvancedSiteNotices/modules/util/matchCriteria.ts
var {
  wgUserGroups,
  wgGlobalGroups,
  wgUserLanguage: wgUserLanguage2
} = mw.config.get();
var in_group = (group) => {
  return !!(wgUserGroups !== null && wgUserGroups !== void 0 && wgUserGroups.includes(group) || wgGlobalGroups !== null && wgGlobalGroups !== void 0 && wgGlobalGroups.includes(group));
};
var only_for = (userLanguage) => {
  return userLanguage === wgUserLanguage2;
};
var matchCriteria = ($notice) => {
  var _$notice$data;
  const cache = $notice.data("asn-cache");
  if (cache !== void 0) {
    return cache;
  }
  const testCriteria = (criteria) => {
    try {
      return window.eval(criteria);
    } catch {
      return false;
    }
  };
  let result = false;
  const criteriaData = ((_$notice$data = $notice.data("asn-criteria")) !== null && _$notice$data !== void 0 ? _$notice$data : "").trim();
  if (criteriaData) {
    try {
      result = testCriteria(decodeURIComponent(criteriaData.replace(/\+/g, "%20")));
    } catch {
      result = true;
    }
  } else if ($notice.attr("class")) {
    let criteria;
    if ($notice.hasClass("only_sysop")) {
      criteria || (criteria = in_group("sysop") || in_group("steward"));
    }
    if ($notice.hasClass("only_logged")) {
      criteria || (criteria = in_group("user"));
    }
    if ($notice.hasClass("only_anon")) {
      criteria || (criteria = !in_group("user"));
    }
    if ($notice.hasClass("only_zh_cn")) {
      criteria || (criteria = only_for("zh-cn"));
    }
    if ($notice.hasClass("only_zh_sg")) {
      criteria || (criteria = only_for("zh-sg"));
    }
    if ($notice.hasClass("only_zh_my")) {
      criteria || (criteria = only_for("zh-my"));
    }
    if ($notice.hasClass("only_zh_hk")) {
      criteria || (criteria = only_for("zh-hk"));
    }
    if ($notice.hasClass("only_zh_mo")) {
      criteria || (criteria = only_for("zh-mo"));
    }
    if ($notice.hasClass("only_zh_tw")) {
      criteria || (criteria = only_for("zh-tw"));
    }
    if (criteria === void 0) {
      criteria = true;
    }
    result = criteria;
  } else {
    result = true;
  }
  $notice.data("asn-cache", result);
  return result;
};
//! src/AdvancedSiteNotices/modules/showNotice.tsx
var import_ext_gadget6 = require("ext.gadget.Tippy");
var broadcastChannel = new BroadcastChannel(storageKey);
var currentVersion = "0";
var localVersion = mw.storage.get(storageKey);
var timer;
var contentRefreshTimer;
var NOTICE_ROTATE_INTERVAL_MS = 10 * 1e3;
var NOTICE_CONTENT_REFRESH_DURATION_MS = 700;
var prefersReducedMotion = typeof window.matchMedia === "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
var fadeOutDuration = prefersReducedMotion ? 0 : 140;
var fadeInDuration = prefersReducedMotion ? 0 : 220;
var noticeContentRefreshClass = "".concat(CLASS_NAME_NOTICE_CONTENT, "--refresh");
var $area = generateArea();
var $currentNotice = $area.find(".".concat(CLASS_NAME_NOTICE_CONTENT));
var $dismiss = $area.find(".".concat(CLASS_NAME_DISMISS)).find("a");
var refreshNoticeContent = () => {
  var _$currentNotice$get;
  if (prefersReducedMotion) {
    return;
  }
  clearTimeout(contentRefreshTimer);
  $currentNotice.removeClass(noticeContentRefreshClass);
  void ((_$currentNotice$get = $currentNotice.get(0)) === null || _$currentNotice$get === void 0 ? void 0 : _$currentNotice$get.offsetWidth);
  $currentNotice.addClass(noticeContentRefreshClass);
  contentRefreshTimer = setTimeout(() => {
    $currentNotice.removeClass(noticeContentRefreshClass);
  }, NOTICE_CONTENT_REFRESH_DURATION_MS);
};
var closeNotices = () => {
  broadcastChannel.postMessage("close");
  broadcastChannel.close();
  clearTimeout(timer);
  clearTimeout(contentRefreshTimer);
  $area.remove();
  mw.storage.set(storageKey, currentVersion, 60 * 60 * 24 * 30);
};
broadcastChannel.addEventListener("message", closeNotices);
$dismiss.on("click", () => {
  closeNotices();
  void mw.notify($(/* @__PURE__ */ import_ext_gadget5.default.createElement("span", {
    innerHTML: getMessage("DismissNotice")
  })), {
    tag: "AdvancedSiteNotices"
  });
});
(0, import_ext_gadget6.tippy)($dismiss.get(0), {
  arrow: true,
  content: $dismiss.attr("aria-label"),
  placement: "bottom"
});
var $notices;
var noticeStyles = [];
var showNotices = ($mountPoint, index, remoteNotices) => {
  var _remoteNotices$versio;
  currentVersion = (_remoteNotices$versio = remoteNotices === null || remoteNotices === void 0 ? void 0 : remoteNotices.version) !== null && _remoteNotices$versio !== void 0 ? _remoteNotices$versio : currentVersion;
  if (currentVersion === localVersion) {
    return;
  }
  if (remoteNotices !== null && remoteNotices !== void 0 && remoteNotices.$notices) {
    ({
      $notices
    } = remoteNotices);
  }
  const noticesLength = $notices.length;
  const nextNoticeIndex = (index + 1) % noticesLength;
  let $notice = $();
  let i = 0;
  while (i++ < noticesLength) {
    $notice = $notices.eq(index);
    if (!matchCriteria($notice)) {
      showNotices($mountPoint, nextNoticeIndex);
      return;
    }
    index = index++ % noticesLength;
  }
  if (typeof $notice.data("asn-html") === "string") {
    $notice.data("asn-html-raw", decodeURIComponent($notice.data("asn-html").replace(/\+/g, "%20")));
    $notice.data("asn-html", null);
  }
  if (typeof $notice.data("asn-style") === "string") {
    $notice.data("asn-style-id", noticeStyles.length);
    const style = mw.loader.addStyleTag(decodeURIComponent($notice.data("asn-style").replace(/\+/g, "%20")));
    style.disabled = true;
    noticeStyles[noticeStyles.length] = style;
    $notice.data("asn-style", null);
  }
  const noticeHtml = $notice.data("asn-html-raw") || $notice.html();
  const noticeStyleId = $notice.data("asn-style-id");
  const currentNoticeHtml = $currentNotice.html();
  if (currentNoticeHtml && currentNoticeHtml !== noticeHtml) {
    $currentNotice.stop(true, true).fadeOut(fadeOutDuration, () => {
      for (var _i = 0, _noticeStyles = noticeStyles; _i < _noticeStyles.length; _i++) {
        const style = _noticeStyles[_i];
        style.disabled = true;
      }
      const noticeStyle = noticeStyles[noticeStyleId];
      if (noticeStyle) {
        noticeStyle.disabled = false;
      }
      $currentNotice.html(noticeHtml);
      try {
        $currentNotice.fadeIn(fadeInDuration, () => {
          refreshNoticeContent();
        });
      } catch {
        refreshNoticeContent();
      }
    });
  } else if (!currentNoticeHtml) {
    $mountPoint.append($area);
    const noticeStyle = noticeStyles[noticeStyleId];
    if (noticeStyle) {
      noticeStyle.disabled = false;
    }
    $currentNotice.html(noticeHtml).fadeIn(fadeInDuration, () => {
      refreshNoticeContent();
    });
  }
  timer = setTimeout(() => {
    showNotices($mountPoint, nextNoticeIndex);
  }, NOTICE_ROTATE_INTERVAL_MS);
};
//! src/AdvancedSiteNotices/AdvancedSiteNotices.ts
(function() {
  var _advancedSiteNotices = _asyncToGenerator(function* () {
    var _remoteNotices$$notic;
    const $body = yield (0, import_ext_gadget7.getBody)();
    const $mountPoint = $body.find(mountPointSelector);
    if (!$mountPoint.length) {
      return;
    }
    const remoteNotices = yield loadRemoteNotices();
    if (!((_remoteNotices$$notic = remoteNotices.$notices) !== null && _remoteNotices$$notic !== void 0 && _remoteNotices$$notic.length)) {
      return;
    }
    const randomIndex = Math.floor(Math.random() * remoteNotices.$notices.length);
    showNotices($mountPoint, randomIndex, remoteNotices);
  });
  function advancedSiteNotices() {
    return _advancedSiteNotices.apply(this, arguments);
  }
  return advancedSiteNotices;
})()();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL2Jyb2FkY2FzdGNoYW5uZWwtcG9seWZpbGxAMS4wLjEvbm9kZV9tb2R1bGVzL2Jyb2FkY2FzdGNoYW5uZWwtcG9seWZpbGwvaW5kZXguanMiLCAic3JjL0FkdmFuY2VkU2l0ZU5vdGljZXMvb3B0aW9ucy5qc29uIiwgInNyYy9BZHZhbmNlZFNpdGVOb3RpY2VzL0FkdmFuY2VkU2l0ZU5vdGljZXMudHMiLCAic3JjL0FkdmFuY2VkU2l0ZU5vdGljZXMvbW9kdWxlcy9hcGkudHMiLCAic3JjL0FkdmFuY2VkU2l0ZU5vdGljZXMvbW9kdWxlcy91dGlsL3F1ZXJ5QXBpLnRzIiwgInNyYy9BZHZhbmNlZFNpdGVOb3RpY2VzL21vZHVsZXMvbG9hZFJlbW90ZU5vdGljZXMudHN4IiwgInNyYy9BZHZhbmNlZFNpdGVOb3RpY2VzL21vZHVsZXMvY29uc3RhbnQudHMiLCAic3JjL0FkdmFuY2VkU2l0ZU5vdGljZXMvbW9kdWxlcy9zaG93Tm90aWNlLnRzeCIsICJzcmMvQWR2YW5jZWRTaXRlTm90aWNlcy9tb2R1bGVzL3V0aWwvZ2VuZXJhdGVBcmVhLnRzeCIsICJzcmMvQWR2YW5jZWRTaXRlTm90aWNlcy9tb2R1bGVzL2kxOG4udHMiLCAic3JjL0FkdmFuY2VkU2l0ZU5vdGljZXMvbW9kdWxlcy91dGlsL21hdGNoQ3JpdGVyaWEudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIihmdW5jdGlvbihnbG9iYWwpIHtcbiAgICB2YXIgY2hhbm5lbHMgPSBbXTtcblxuICAgIGZ1bmN0aW9uIEJyb2FkY2FzdENoYW5uZWwoY2hhbm5lbCkge1xuICAgICAgICB2YXIgJHRoaXMgPSB0aGlzO1xuICAgICAgICBjaGFubmVsID0gU3RyaW5nKGNoYW5uZWwpO1xuXG4gICAgICAgIHZhciBpZCA9ICckQnJvYWRjYXN0Q2hhbm5lbCQnICsgY2hhbm5lbCArICckJztcblxuICAgICAgICBjaGFubmVsc1tpZF0gPSBjaGFubmVsc1tpZF0gfHwgW107XG4gICAgICAgIGNoYW5uZWxzW2lkXS5wdXNoKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuX25hbWUgPSBjaGFubmVsO1xuICAgICAgICB0aGlzLl9pZCA9IGlkO1xuICAgICAgICB0aGlzLl9jbG9zZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fbWMgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgICAgICAgdGhpcy5fbWMucG9ydDEuc3RhcnQoKTtcbiAgICAgICAgdGhpcy5fbWMucG9ydDIuc3RhcnQoKTtcblxuICAgICAgICBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcignc3RvcmFnZScsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGlmIChlLnN0b3JhZ2VBcmVhICE9PSBnbG9iYWwubG9jYWxTdG9yYWdlKSByZXR1cm47XG4gICAgICAgICAgICBpZiAoZS5uZXdWYWx1ZSA9PSBudWxsIHx8IGUubmV3VmFsdWUgPT09ICcnKSByZXR1cm47XG4gICAgICAgICAgICBpZiAoZS5rZXkuc3Vic3RyaW5nKDAsIGlkLmxlbmd0aCkgIT09IGlkKSByZXR1cm47XG4gICAgICAgICAgICB2YXIgZGF0YSA9IEpTT04ucGFyc2UoZS5uZXdWYWx1ZSk7XG4gICAgICAgICAgICAkdGhpcy5fbWMucG9ydDIucG9zdE1lc3NhZ2UoZGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIEJyb2FkY2FzdENoYW5uZWwucHJvdG90eXBlID0ge1xuICAgICAgICAvLyBCcm9hZGNhc3RDaGFubmVsIEFQSVxuICAgICAgICBnZXQgbmFtZSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICAgICAgICB9LFxuICAgICAgICBwb3N0TWVzc2FnZTogZnVuY3Rpb24obWVzc2FnZSkge1xuICAgICAgICAgICAgdmFyICR0aGlzID0gdGhpcztcbiAgICAgICAgICAgIGlmICh0aGlzLl9jbG9zZWQpIHtcbiAgICAgICAgICAgICAgICB2YXIgZSA9IG5ldyBFcnJvcigpO1xuICAgICAgICAgICAgICAgIGUubmFtZSA9ICdJbnZhbGlkU3RhdGVFcnJvcic7XG4gICAgICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpO1xuXG4gICAgICAgICAgICAvLyBCcm9hZGNhc3QgdG8gb3RoZXIgY29udGV4dHMgdmlhIHN0b3JhZ2UgZXZlbnRzLi4uXG4gICAgICAgICAgICB2YXIga2V5ID0gdGhpcy5faWQgKyBTdHJpbmcoRGF0ZS5ub3coKSkgKyAnJCcgKyBTdHJpbmcoTWF0aC5yYW5kb20oKSk7XG4gICAgICAgICAgICBnbG9iYWwubG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGdsb2JhbC5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xuICAgICAgICAgICAgfSwgNTAwKTtcblxuICAgICAgICAgICAgLy8gQnJvYWRjYXN0IHRvIGN1cnJlbnQgY29udGV4dCB2aWEgcG9ydHNcbiAgICAgICAgICAgIGNoYW5uZWxzW3RoaXMuX2lkXS5mb3JFYWNoKGZ1bmN0aW9uKGJjKSB7XG4gICAgICAgICAgICAgICAgaWYgKGJjID09PSAkdGhpcykgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGJjLl9tYy5wb3J0Mi5wb3N0TWVzc2FnZShKU09OLnBhcnNlKHZhbHVlKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgY2xvc2U6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2Nsb3NlZCkgcmV0dXJuO1xuICAgICAgICAgICAgdGhpcy5fY2xvc2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuX21jLnBvcnQxLmNsb3NlKCk7XG4gICAgICAgICAgICB0aGlzLl9tYy5wb3J0Mi5jbG9zZSgpO1xuXG4gICAgICAgICAgICB2YXIgaW5kZXggPSBjaGFubmVsc1t0aGlzLl9pZF0uaW5kZXhPZih0aGlzKTtcbiAgICAgICAgICAgIGNoYW5uZWxzW3RoaXMuX2lkXS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8vIEV2ZW50VGFyZ2V0IEFQSVxuICAgICAgICBnZXQgb25tZXNzYWdlKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21jLnBvcnQxLm9ubWVzc2FnZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0IG9ubWVzc2FnZSh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fbWMucG9ydDEub25tZXNzYWdlID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGFkZEV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uKC8qdHlwZSwgbGlzdGVuZXIgLCB1c2VDYXB0dXJlKi8pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tYy5wb3J0MS5hZGRFdmVudExpc3RlbmVyLmFwcGx5KHRoaXMuX21jLnBvcnQxLCBhcmd1bWVudHMpO1xuICAgICAgICB9LFxuICAgICAgICByZW1vdmVFdmVudExpc3RlbmVyOiBmdW5jdGlvbigvKnR5cGUsIGxpc3RlbmVyICwgdXNlQ2FwdHVyZSovKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbWMucG9ydDEucmVtb3ZlRXZlbnRMaXN0ZW5lci5hcHBseSh0aGlzLl9tYy5wb3J0MSwgYXJndW1lbnRzKTtcbiAgICAgICAgfSxcbiAgICAgICAgZGlzcGF0Y2hFdmVudDogZnVuY3Rpb24oLypldmVudCovKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbWMucG9ydDEuZGlzcGF0Y2hFdmVudC5hcHBseSh0aGlzLl9tYy5wb3J0MSwgYXJndW1lbnRzKTtcbiAgICAgICAgfSxcbiAgICB9O1xuXG4gICAgZ2xvYmFsLkJyb2FkY2FzdENoYW5uZWwgPSBnbG9iYWwuQnJvYWRjYXN0Q2hhbm5lbCB8fCBCcm9hZGNhc3RDaGFubmVsO1xufSkoc2VsZik7XG4iLCAie1xuXHRcImFqYXhQYWdlVGl0bGVcIjogXCJUZW1wbGF0ZTpBZHZhbmNlZFNpdGVOb3RpY2VzL2FqYXhcIixcblx0XCJtb3VudFBvaW50U2VsZWN0b3JcIjogXCIjc2l0ZU5vdGljZVwiLFxuXHRcInN0b3JhZ2VLZXlcIjogXCJleHQuZ2FkZ2V0LkFkdmFuY2VkU2l0ZU5vdGljZXNfZGlzbWlzc0FTTlwiLFxuXHRcImNhY2hlS2V5XCI6IFwiZXh0LmdhZGdldC5BZHZhbmNlZFNpdGVOb3RpY2VzX2NhY2hlXCIsXG5cdFwidmVyc2lvblwiOiBcIjQuMFwiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuL29wdGlvbnMuanNvbic7XG5pbXBvcnQge3R5cGUgUmVtb3RlTm90aWNlc30gZnJvbSAnLi9tb2R1bGVzL3V0aWwvcXVlcnlBcGknO1xuaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHtsb2FkUmVtb3RlTm90aWNlc30gZnJvbSAnLi9tb2R1bGVzL2xvYWRSZW1vdGVOb3RpY2VzJztcbmltcG9ydCB7c2hvd05vdGljZXN9IGZyb20gJy4vbW9kdWxlcy9zaG93Tm90aWNlJztcblxuKGFzeW5jIGZ1bmN0aW9uIGFkdmFuY2VkU2l0ZU5vdGljZXMoKTogUHJvbWlzZTx2b2lkPiB7XG5cdGNvbnN0ICRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50PiA9IGF3YWl0IGdldEJvZHkoKTtcblxuXHRjb25zdCAkbW91bnRQb2ludDogSlF1ZXJ5ID0gJGJvZHkuZmluZChPUFRJT05TLm1vdW50UG9pbnRTZWxlY3Rvcik7XG5cdGlmICghJG1vdW50UG9pbnQubGVuZ3RoKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgcmVtb3RlTm90aWNlczogUmVtb3RlTm90aWNlcyA9IGF3YWl0IGxvYWRSZW1vdGVOb3RpY2VzKCk7XG5cdGlmICghcmVtb3RlTm90aWNlcy4kbm90aWNlcz8ubGVuZ3RoKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgcmFuZG9tSW5kZXg6IG51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHJlbW90ZU5vdGljZXMuJG5vdGljZXMubGVuZ3RoKTtcblx0c2hvd05vdGljZXMoJG1vdW50UG9pbnQsIHJhbmRvbUluZGV4LCByZW1vdGVOb3RpY2VzKTtcbn0pKCk7XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBBZHZhbmNlZFNpdGVOb3RpY2VzLyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi8uLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHthcGl9IGZyb20gJy4uL2FwaSc7XG5cbmludGVyZmFjZSBSZW1vdGVOb3RpY2VzIHtcblx0JG5vdGljZXM/OiBKUXVlcnk7XG5cdHZlcnNpb24/OiBzdHJpbmc7XG59XG5cbmNvbnN0IHt3Z1VzZXJMYW5ndWFnZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cbmNvbnN0IHBhcmFtZXRlcnM6IEFwaVBhcnNlUGFyYW1zID0ge1xuXHRhY3Rpb246ICdwYXJzZScsXG5cdGZvcm1hdDogJ2pzb24nLFxuXHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdHByb3A6ICd0ZXh0Jyxcblx0cGFnZTogT1BUSU9OUy5hamF4UGFnZVRpdGxlLFxuXHR1c2VsYW5nOiB3Z1VzZXJMYW5ndWFnZSxcblx0dmFyaWFudDogd2dVc2VyTGFuZ3VhZ2UsXG5cdHNtYXhhZ2U6IDYwMCxcblx0bWF4YWdlOiA2MDAsXG59O1xuXG5jb25zdCBxdWVyeUFwaSA9IGFzeW5jICgpOiBQcm9taXNlPFJldHVyblR5cGU8bXcuQXBpWydnZXQnXT4+ID0+IHtcblx0dHJ5IHtcblx0XHRsZXQgcmVzcG9uc2U7XG5cblx0XHRpZiAobXcuc3RvcmFnZS5nZXRPYmplY3QoT1BUSU9OUy5jYWNoZUtleSkpIHtcblx0XHRcdHJlc3BvbnNlID0gbXcuc3RvcmFnZS5nZXRPYmplY3QoT1BUSU9OUy5jYWNoZUtleSkgYXMgUmV0dXJuVHlwZTxtdy5BcGlbJ2dldCddPjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVzcG9uc2UgPSBhd2FpdCBhcGkuZ2V0KHBhcmFtZXRlcnMpO1xuXHRcdFx0bXcuc3RvcmFnZS5zZXRPYmplY3QoT1BUSU9OUy5jYWNoZUtleSwgcmVzcG9uc2UsIDYwICogMTApO1xuXHRcdH1cblxuXHRcdHJldHVybiByZXNwb25zZTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRjb25zb2xlLmVycm9yKCdbQWR2YW5jZWRTaXRlTm90aWNlc10gQWpheCBlcnJvcjonLCBlcnJvcik7XG5cdFx0cmV0dXJuIHt9O1xuXHR9XG59O1xuXG5leHBvcnQge3R5cGUgUmVtb3RlTm90aWNlcywgcXVlcnlBcGl9O1xuIiwgImltcG9ydCB7dHlwZSBSZW1vdGVOb3RpY2VzLCBxdWVyeUFwaX0gZnJvbSAnLi91dGlsL3F1ZXJ5QXBpJztcbmltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LkpTWCc7XG5cbnR5cGUgQXBpUmVzcG9uc2UgPSB7XG5cdHBhcnNlOiB7XG5cdFx0dGV4dD86IHN0cmluZztcblx0fTtcbn07XG5cbmNvbnN0IGxvYWRSZW1vdGVOb3RpY2VzID0gYXN5bmMgKCk6IFByb21pc2U8UmVtb3RlTm90aWNlcz4gPT4ge1xuXHRjb25zdCByZXNwb25zZTogQXdhaXRlZDxSZXR1cm5UeXBlPHR5cGVvZiBxdWVyeUFwaT4+ID0gYXdhaXQgcXVlcnlBcGkoKTtcblx0Y29uc3QgcmVzcG9uc2VQYXJzZSA9IHJlc3BvbnNlWydwYXJzZSddIGFzIEFwaVJlc3BvbnNlWydwYXJzZSddO1xuXG5cdGlmICghcmVzcG9uc2VQYXJzZT8udGV4dCkge1xuXHRcdHJldHVybiB7fTtcblx0fVxuXG5cdGNvbnN0IHJlbW90ZU5vdGljZSA9ICg8ZGl2IGlubmVySFRNTD17cmVzcG9uc2VQYXJzZS50ZXh0fSAvPikucXVlcnlTZWxlY3RvcigndWwuc2l0ZW50cycpO1xuXHRpZiAoIXJlbW90ZU5vdGljZSkge1xuXHRcdHJldHVybiB7fTtcblx0fVxuXG5cdGNvbnN0ICRyZW1vdGVOb3RpY2VzOiBOb25OdWxsYWJsZTxSZW1vdGVOb3RpY2VzWyckbm90aWNlcyddPiA9ICQocmVtb3RlTm90aWNlKSBhcyBKUXVlcnk7XG5cblx0Y29uc3QgJG5vdGljZXM6IEpRdWVyeSA9ICRyZW1vdGVOb3RpY2VzLmZpbmQoJ2xpJyk7XG5cdGNvbnN0IHJlbW90ZU5vdGljZXNWZXJzaW9uOiBOb25OdWxsYWJsZTxSZW1vdGVOb3RpY2VzWyd2ZXJzaW9uJ10+ID0gKFxuXHRcdCRyZW1vdGVOb3RpY2VzLmRhdGEoJ2Fzbi12ZXJzaW9uJykgYXMgbnVtYmVyXG5cdCkudG9TdHJpbmcoKTtcblxuXHRyZXR1cm4ge1xuXHRcdCRub3RpY2VzLFxuXHRcdHZlcnNpb246IHJlbW90ZU5vdGljZXNWZXJzaW9uLFxuXHR9O1xufTtcblxuZXhwb3J0IHtsb2FkUmVtb3RlTm90aWNlc307XG4iLCAiY29uc3QgQ0xBU1NfTkFNRTogc3RyaW5nID0gJ2dhZGdldC1hZHZhbmNlZF9zaXRlX25vdGljZXMnO1xuY29uc3QgQ0xBU1NfTkFNRV9ESVNNSVNTOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FfV9fZGlzbWlzc2A7XG5jb25zdCBDTEFTU19OQU1FX05PVElDRTogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRX1fX25vdGljZWA7XG5jb25zdCBDTEFTU19OQU1FX05PVElDRV9DT05URU5UOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FX05PVElDRX1fX2NvbnRlbnRgO1xuY29uc3QgQ0xBU1NfTkFNRV9USVRMRTogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRX1fX3RpdGxlYDtcblxuZXhwb3J0IHtDTEFTU19OQU1FLCBDTEFTU19OQU1FX0RJU01JU1MsIENMQVNTX05BTUVfTk9USUNFLCBDTEFTU19OQU1FX05PVElDRV9DT05URU5ULCBDTEFTU19OQU1FX1RJVExFfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge0NMQVNTX05BTUVfRElTTUlTUywgQ0xBU1NfTkFNRV9OT1RJQ0VfQ09OVEVOVH0gZnJvbSAnLi9jb25zdGFudCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5KU1gnO1xuaW1wb3J0IHt0eXBlIFJlbW90ZU5vdGljZXN9IGZyb20gJy4vdXRpbC9xdWVyeUFwaSc7XG5pbXBvcnQge2dlbmVyYXRlQXJlYX0gZnJvbSAnLi91dGlsL2dlbmVyYXRlQXJlYSc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5pbXBvcnQge21hdGNoQ3JpdGVyaWF9IGZyb20gJy4vdXRpbC9tYXRjaENyaXRlcmlhJztcbmltcG9ydCB7dGlwcHl9IGZyb20gJ2V4dC5nYWRnZXQuVGlwcHknO1xuXG5jb25zdCBicm9hZGNhc3RDaGFubmVsOiBCcm9hZGNhc3RDaGFubmVsID0gbmV3IEJyb2FkY2FzdENoYW5uZWwoT1BUSU9OUy5zdG9yYWdlS2V5KTtcblxubGV0IGN1cnJlbnRWZXJzaW9uOiBzdHJpbmcgPSAnMCc7XG5jb25zdCBsb2NhbFZlcnNpb24gPSBtdy5zdG9yYWdlLmdldChPUFRJT05TLnN0b3JhZ2VLZXkpIGFzIHN0cmluZyB8IG51bGw7XG5cbmxldCB0aW1lcjogUmV0dXJuVHlwZTx0eXBlb2Ygc2V0VGltZW91dD47XG5sZXQgY29udGVudFJlZnJlc2hUaW1lcjogUmV0dXJuVHlwZTx0eXBlb2Ygc2V0VGltZW91dD47XG5cbmNvbnN0IE5PVElDRV9ST1RBVEVfSU5URVJWQUxfTVM6IG51bWJlciA9IDEwICogMTAwMDtcbmNvbnN0IE5PVElDRV9DT05URU5UX1JFRlJFU0hfRFVSQVRJT05fTVM6IG51bWJlciA9IDcwMDtcbmNvbnN0IHByZWZlcnNSZWR1Y2VkTW90aW9uOiBib29sZWFuID1cblx0dHlwZW9mIHdpbmRvdy5tYXRjaE1lZGlhID09PSAnZnVuY3Rpb24nICYmIHdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKScpLm1hdGNoZXM7XG5jb25zdCBmYWRlT3V0RHVyYXRpb246IG51bWJlciA9IHByZWZlcnNSZWR1Y2VkTW90aW9uID8gMCA6IDE0MDtcbmNvbnN0IGZhZGVJbkR1cmF0aW9uOiBudW1iZXIgPSBwcmVmZXJzUmVkdWNlZE1vdGlvbiA/IDAgOiAyMjA7XG5jb25zdCBub3RpY2VDb250ZW50UmVmcmVzaENsYXNzOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FX05PVElDRV9DT05URU5UfS0tcmVmcmVzaGA7XG5cbmNvbnN0ICRhcmVhOiBKUXVlcnkgPSBnZW5lcmF0ZUFyZWEoKTtcbmNvbnN0ICRjdXJyZW50Tm90aWNlOiBKUXVlcnkgPSAkYXJlYS5maW5kKGAuJHtDTEFTU19OQU1FX05PVElDRV9DT05URU5UfWApO1xuY29uc3QgJGRpc21pc3M6IEpRdWVyeTxIVE1MQW5jaG9yRWxlbWVudD4gPSAkYXJlYS5maW5kKGAuJHtDTEFTU19OQU1FX0RJU01JU1N9YCkuZmluZCgnYScpO1xuXG5jb25zdCByZWZyZXNoTm90aWNlQ29udGVudCA9ICgpOiB2b2lkID0+IHtcblx0aWYgKHByZWZlcnNSZWR1Y2VkTW90aW9uKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y2xlYXJUaW1lb3V0KGNvbnRlbnRSZWZyZXNoVGltZXIpO1xuXHQkY3VycmVudE5vdGljZS5yZW1vdmVDbGFzcyhub3RpY2VDb250ZW50UmVmcmVzaENsYXNzKTtcblx0Ly8gRm9yY2UgcmVmbG93IHNvIHRoZSBhbmltYXRpb24gY2FuIGJlIHJlcGxheWVkIG9uIGVhY2ggcmVmcmVzaC5cblx0dm9pZCAkY3VycmVudE5vdGljZS5nZXQoMCk/Lm9mZnNldFdpZHRoO1xuXHQkY3VycmVudE5vdGljZS5hZGRDbGFzcyhub3RpY2VDb250ZW50UmVmcmVzaENsYXNzKTtcblx0Y29udGVudFJlZnJlc2hUaW1lciA9IHNldFRpbWVvdXQoKCk6IHZvaWQgPT4ge1xuXHRcdCRjdXJyZW50Tm90aWNlLnJlbW92ZUNsYXNzKG5vdGljZUNvbnRlbnRSZWZyZXNoQ2xhc3MpO1xuXHR9LCBOT1RJQ0VfQ09OVEVOVF9SRUZSRVNIX0RVUkFUSU9OX01TKTtcbn07XG5cbmNvbnN0IGNsb3NlTm90aWNlcyA9ICgpOiB2b2lkID0+IHtcblx0YnJvYWRjYXN0Q2hhbm5lbC5wb3N0TWVzc2FnZSgnY2xvc2UnKTtcblx0YnJvYWRjYXN0Q2hhbm5lbC5jbG9zZSgpO1xuXHRjbGVhclRpbWVvdXQodGltZXIpO1xuXHRjbGVhclRpbWVvdXQoY29udGVudFJlZnJlc2hUaW1lcik7XG5cdCRhcmVhLnJlbW92ZSgpO1xuXHRtdy5zdG9yYWdlLnNldChPUFRJT05TLnN0b3JhZ2VLZXksIGN1cnJlbnRWZXJzaW9uLCA2MCAqIDYwICogMjQgKiAzMCk7XG59O1xuXG5icm9hZGNhc3RDaGFubmVsLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBjbG9zZU5vdGljZXMpO1xuXG4kZGlzbWlzcy5vbignY2xpY2snLCAoKTogdm9pZCA9PiB7XG5cdGNsb3NlTm90aWNlcygpO1xuXHR2b2lkIG13Lm5vdGlmeSgkKCg8c3BhbiBpbm5lckhUTUw9e2dldE1lc3NhZ2UoJ0Rpc21pc3NOb3RpY2UnKX0gLz4pIGFzIEhUTUxFbGVtZW50KSwge1xuXHRcdHRhZzogJ0FkdmFuY2VkU2l0ZU5vdGljZXMnLFxuXHR9KTtcbn0pO1xudGlwcHkoJGRpc21pc3MuZ2V0KDApIGFzIEhUTUxBbmNob3JFbGVtZW50LCB7XG5cdGFycm93OiB0cnVlLFxuXHRjb250ZW50OiAkZGlzbWlzcy5hdHRyKCdhcmlhLWxhYmVsJykgYXMgc3RyaW5nLFxuXHRwbGFjZW1lbnQ6ICdib3R0b20nLFxufSk7XG5cbmxldCAkbm90aWNlczogSlF1ZXJ5O1xuY29uc3Qgbm90aWNlU3R5bGVzOiBIVE1MU3R5bGVFbGVtZW50W10gPSBbXTtcbmNvbnN0IHNob3dOb3RpY2VzID0gKCRtb3VudFBvaW50OiBKUXVlcnksIGluZGV4OiBudW1iZXIsIHJlbW90ZU5vdGljZXM/OiBSZW1vdGVOb3RpY2VzKTogdm9pZCA9PiB7XG5cdGN1cnJlbnRWZXJzaW9uID0gcmVtb3RlTm90aWNlcz8udmVyc2lvbiA/PyBjdXJyZW50VmVyc2lvbjtcblx0aWYgKGN1cnJlbnRWZXJzaW9uID09PSBsb2NhbFZlcnNpb24pIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZiAocmVtb3RlTm90aWNlcz8uJG5vdGljZXMpIHtcblx0XHQoeyRub3RpY2VzfSA9IHJlbW90ZU5vdGljZXMpO1xuXHR9XG5cblx0Y29uc3Qgbm90aWNlc0xlbmd0aDogbnVtYmVyID0gJG5vdGljZXMubGVuZ3RoO1xuXHRjb25zdCBuZXh0Tm90aWNlSW5kZXg6IG51bWJlciA9IChpbmRleCArIDEpICUgbm90aWNlc0xlbmd0aDtcblx0bGV0ICRub3RpY2U6IEpRdWVyeSA9ICQoKTtcblxuXHRsZXQgaTogbnVtYmVyID0gMDtcblx0d2hpbGUgKGkrKyA8IG5vdGljZXNMZW5ndGgpIHtcblx0XHQkbm90aWNlID0gJG5vdGljZXMuZXEoaW5kZXgpO1xuXHRcdGlmICghbWF0Y2hDcml0ZXJpYSgkbm90aWNlKSkge1xuXHRcdFx0c2hvd05vdGljZXMoJG1vdW50UG9pbnQsIG5leHROb3RpY2VJbmRleCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGluZGV4ID0gaW5kZXgrKyAlIG5vdGljZXNMZW5ndGg7XG5cdH1cblxuXHRpZiAodHlwZW9mICRub3RpY2UuZGF0YSgnYXNuLWh0bWwnKSA9PT0gJ3N0cmluZycpIHtcblx0XHQkbm90aWNlLmRhdGEoJ2Fzbi1odG1sLXJhdycsIGRlY29kZVVSSUNvbXBvbmVudCgoJG5vdGljZS5kYXRhKCdhc24taHRtbCcpIGFzIHN0cmluZykucmVwbGFjZSgvXFwrL2csICclMjAnKSkpO1xuXHRcdCRub3RpY2UuZGF0YSgnYXNuLWh0bWwnLCBudWxsKTtcblx0fVxuXHRpZiAodHlwZW9mICRub3RpY2UuZGF0YSgnYXNuLXN0eWxlJykgPT09ICdzdHJpbmcnKSB7XG5cdFx0JG5vdGljZS5kYXRhKCdhc24tc3R5bGUtaWQnLCBub3RpY2VTdHlsZXMubGVuZ3RoKTtcblx0XHRjb25zdCBzdHlsZTogSFRNTFN0eWxlRWxlbWVudCA9IG13LmxvYWRlci5hZGRTdHlsZVRhZyhcblx0XHRcdGRlY29kZVVSSUNvbXBvbmVudCgoJG5vdGljZS5kYXRhKCdhc24tc3R5bGUnKSBhcyBzdHJpbmcpLnJlcGxhY2UoL1xcKy9nLCAnJTIwJykpXG5cdFx0KTtcblx0XHRzdHlsZS5kaXNhYmxlZCA9IHRydWU7XG5cdFx0bm90aWNlU3R5bGVzW25vdGljZVN0eWxlcy5sZW5ndGhdID0gc3R5bGU7IC8vIFJlcGxhY2UgQXJyYXkjcHVzaCB0byBhdm9pZCBjb3JlLWpzIHBvbHlmaWxsaW5nXG5cdFx0JG5vdGljZS5kYXRhKCdhc24tc3R5bGUnLCBudWxsKTtcblx0fVxuXG5cdGNvbnN0IG5vdGljZUh0bWw6IHN0cmluZyA9ICgkbm90aWNlLmRhdGEoJ2Fzbi1odG1sLXJhdycpIGFzIHN0cmluZykgfHwgJG5vdGljZS5odG1sKCk7XG5cdGNvbnN0IG5vdGljZVN0eWxlSWQ6IG51bWJlciA9ICRub3RpY2UuZGF0YSgnYXNuLXN0eWxlLWlkJykgYXMgbnVtYmVyO1xuXHRjb25zdCBjdXJyZW50Tm90aWNlSHRtbDogc3RyaW5nID0gJGN1cnJlbnROb3RpY2UuaHRtbCgpO1xuXHRpZiAoY3VycmVudE5vdGljZUh0bWwgJiYgY3VycmVudE5vdGljZUh0bWwgIT09IG5vdGljZUh0bWwpIHtcblx0XHQkY3VycmVudE5vdGljZS5zdG9wKHRydWUsIHRydWUpLmZhZGVPdXQoZmFkZU91dER1cmF0aW9uLCAoKTogdm9pZCA9PiB7XG5cdFx0XHRmb3IgKGNvbnN0IHN0eWxlIG9mIG5vdGljZVN0eWxlcykge1xuXHRcdFx0XHRzdHlsZS5kaXNhYmxlZCA9IHRydWU7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBub3RpY2VTdHlsZTogSFRNTFN0eWxlRWxlbWVudCB8IHVuZGVmaW5lZCA9IG5vdGljZVN0eWxlc1tub3RpY2VTdHlsZUlkXTtcblx0XHRcdGlmIChub3RpY2VTdHlsZSkge1xuXHRcdFx0XHRub3RpY2VTdHlsZS5kaXNhYmxlZCA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0JGN1cnJlbnROb3RpY2UuaHRtbChub3RpY2VIdG1sKTtcblx0XHRcdC8vIGFuaW1hdGlvbiB0cnkgL2NhdGNoZWQgdG8gYXZvaWQgVHlwZUVycm9yOiAoQW5pbWF0aW9uLnR3ZWVuZXJzW3Byb3BdfHxbXSkuY29uY2F0IGlzIG5vdCBhIGZ1bmN0aW9uIGVycm9yIGJlaW5nIHNlZW4gaW4gcHJvZHVjdGlvblxuXHRcdFx0dHJ5IHtcblx0XHRcdFx0JGN1cnJlbnROb3RpY2UuZmFkZUluKGZhZGVJbkR1cmF0aW9uLCAoKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0cmVmcmVzaE5vdGljZUNvbnRlbnQoKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0cmVmcmVzaE5vdGljZUNvbnRlbnQoKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fSBlbHNlIGlmICghY3VycmVudE5vdGljZUh0bWwpIHtcblx0XHQkbW91bnRQb2ludC5hcHBlbmQoJGFyZWEpO1xuXHRcdGNvbnN0IG5vdGljZVN0eWxlOiBIVE1MU3R5bGVFbGVtZW50IHwgdW5kZWZpbmVkID0gbm90aWNlU3R5bGVzW25vdGljZVN0eWxlSWRdO1xuXHRcdGlmIChub3RpY2VTdHlsZSkge1xuXHRcdFx0bm90aWNlU3R5bGUuZGlzYWJsZWQgPSBmYWxzZTtcblx0XHR9XG5cdFx0JGN1cnJlbnROb3RpY2UuaHRtbChub3RpY2VIdG1sKS5mYWRlSW4oZmFkZUluRHVyYXRpb24sICgpOiB2b2lkID0+IHtcblx0XHRcdHJlZnJlc2hOb3RpY2VDb250ZW50KCk7XG5cdFx0fSk7XG5cdH1cblxuXHR0aW1lciA9IHNldFRpbWVvdXQoKCk6IHZvaWQgPT4ge1xuXHRcdHNob3dOb3RpY2VzKCRtb3VudFBvaW50LCBuZXh0Tm90aWNlSW5kZXgpO1xuXHR9LCBOT1RJQ0VfUk9UQVRFX0lOVEVSVkFMX01TKTtcbn07XG5cbmV4cG9ydCB7c2hvd05vdGljZXN9O1xuIiwgImltcG9ydCB7XG5cdENMQVNTX05BTUUsXG5cdENMQVNTX05BTUVfRElTTUlTUyxcblx0Q0xBU1NfTkFNRV9OT1RJQ0UsXG5cdENMQVNTX05BTUVfTk9USUNFX0NPTlRFTlQsXG5cdENMQVNTX05BTUVfVElUTEUsXG59IGZyb20gJy4uL2NvbnN0YW50JztcbmltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LkpTWCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuXG5jb25zdCBnZW5lcmF0ZUFyZWEgPSAoKTogSlF1ZXJ5ID0+IHtcblx0Y29uc3QgYXJlYTogUmVhY3QuUmVhY3RFbGVtZW50ID0gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPXtbQ0xBU1NfTkFNRSwgJ25vcHJpbnQnXX0+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Q0xBU1NfTkFNRV9USVRMRX0+e2dldE1lc3NhZ2UoJ1RpdGxlJyl9PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Q0xBU1NfTkFNRV9OT1RJQ0V9PlxuXHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXtbQ0xBU1NfTkFNRV9OT1RJQ0VfQ09OVEVOVCwgJ2NlbnRlciddfVxuXHRcdFx0XHRcdHJvbGU9XCJzdGF0dXNcIlxuXHRcdFx0XHRcdGFyaWEtbGl2ZT1cInBvbGl0ZVwiXG5cdFx0XHRcdFx0YXJpYS1hdG9taWM9XCJ0cnVlXCJcblx0XHRcdFx0Lz5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e0NMQVNTX05BTUVfRElTTUlTU30+XG5cdFx0XHRcdDxhIHJvbGU9XCJidXR0b25cIiBhcmlhLWxhYmVsPXtnZXRNZXNzYWdlKCdEaXNtaXNzJyl9IC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcblxuXHRyZXR1cm4gJChhcmVhKSBhcyBKUXVlcnk7XG59O1xuXG5leHBvcnQge2dlbmVyYXRlQXJlYX07XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdERpc21pc3M6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVHVybiBvZmYgdGhpcyBub3RpY2UnLFxuXHRcdFx0amE6ICdBU07jgpLjgqrjg5XjgavjgZnjgosnLFxuXHRcdFx0J3poLWhhbnMnOiAn5YWz6Zet5YWs5ZGKJyxcblx0XHRcdCd6aC1oYW50JzogJ+mXnOmWieWFrOWRiicsXG5cdFx0fSksXG5cdFx0RGlzbWlzc05vdGljZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdZb3UgaGF2ZSBjaG9zZW4gdG8gdHVybiBvZmYgQWR2YW5jZWQgU2l0ZSBOb3RpY2VzIGZvciB0aGUgbmV4dCAzMCBkYXlzLiA8YnI+SWYgdGhlIHNpdGUtd2lkZSBhbm5vdW5jZW1lbnQgaXMgbm90IHVwZGF0ZWQgd2l0aGluIHRoZSBuZXh0IDMwIGRheXMsIGl0IHdpbGwgbm8gbG9uZ2VyIGJlIGRpc3BsYXllZDsgaG93ZXZlciwgaWYgdGhlIHNpdGUtd2lkZSBhbm5vdW5jZW1lbnQgaXMgdXBkYXRlZCwgaXQgd2lsbCBiZSBkaXNwbGF5ZWQgYWdhaW4uJyxcblx0XHRcdGphOiAn5LuK5b6MMzDml6XplpPjgIFBU07jgpLjgqrjg5XjgavjgZnjgovjgZPjgajjgpLpgbjmip7jgZfjgb7jgZfjgZ/jgII8YnI+44K144Kk44OI5YWo5L2T44Gu6YCa55+l44GM5LuK5b6MMzDml6Xku6XlhoXjgavmm7TmlrDjgZXjgozjgarjgYTloLTlkIjjgIHooajnpLrjgZXjgozjgarjgY/jgarjgorjgb7jgZnjgILjgZ/jgaDjgZfjgIHjgrXjgqTjg4jlhajkvZPjga7pgJrnn6XjgYzmm7TmlrDjgZXjgozjgovloLTlkIjjga/jgIHlho3jgbPooajnpLrjgZXjgozjgb7jgZnjgIInLFxuXHRcdFx0J3poLWhhbnMnOlxuXHRcdFx0XHQn5oKo5bey6YCJ5oup5Zyo5o6l5LiL5p2lMzDml6XlhoXlhbPpl63igJzpq5jnuqfnq5nngrnpgJrlkYrigJ3jgII8YnI+6Iul5o6l5LiL5p2lMzDml6XlhoXlhajnq5nlhazlkYrmnKrmnInmm7TmlrDvvIzliJnkuI3lho3mmL7npLrvvJvkvYbmmK/vvIzoi6Xlhajnq5nlhazlkYrlhoXlrrnmm7TmlrDvvIzliJnlsIbph43mlrDmmL7npLrjgIInLFxuXHRcdFx0J3poLWhhbnQnOlxuXHRcdFx0XHQn5oKo5bey6YG45pOH5Zyo5o6l5LiL5L6GMzDml6Xlhafpl5zplonjgIzpq5jntJrnq5npu57pgJrlkYrjgI3jgII8YnI+6Iul5o6l5LiL5L6GMzDml6Xlhaflhajnq5nlhazlkYrmnKrmnInmm7TmlrDvvIzliYfkuI3lho3poa/npLrvvJvkvYbmmK/vvIzoi6Xlhajnq5nlhazlkYrlhaflrrnmm7TmlrDvvIzliYflsIfph43mlrDpoa/npLrjgIInLFxuXHRcdH0pLFxuXHRcdFRpdGxlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0Fubm91bmNlbWVudCcsXG5cdFx0XHRqYTogJ+mAmuefpScsXG5cdFx0XHR6aDogJ+WFrOWRiicsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImNvbnN0IHt3Z1VzZXJHcm91cHMsIHdnR2xvYmFsR3JvdXBzLCB3Z1VzZXJMYW5ndWFnZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjYW1lbGNhc2VcbmNvbnN0IGluX2dyb3VwID0gKGdyb3VwOiBzdHJpbmcpOiBib29sZWFuID0+IHtcblx0cmV0dXJuICEhKHdnVXNlckdyb3Vwcz8uaW5jbHVkZXMoZ3JvdXApIHx8ICh3Z0dsb2JhbEdyb3VwcyBhcyBzdHJpbmdbXSk/LmluY2x1ZGVzKGdyb3VwKSk7XG59O1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2FtZWxjYXNlXG5jb25zdCBvbmx5X2ZvciA9ICh1c2VyTGFuZ3VhZ2U6IHN0cmluZyk6IGJvb2xlYW4gPT4ge1xuXHRyZXR1cm4gdXNlckxhbmd1YWdlID09PSB3Z1VzZXJMYW5ndWFnZTtcbn07XG5cbmNvbnN0IG1hdGNoQ3JpdGVyaWEgPSAoJG5vdGljZTogSlF1ZXJ5KTogYm9vbGVhbiA9PiB7XG5cdGNvbnN0IGNhY2hlID0gJG5vdGljZS5kYXRhKCdhc24tY2FjaGUnKSBhcyBib29sZWFuIHwgdW5kZWZpbmVkO1xuXHRpZiAoY2FjaGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZTtcblx0fVxuXG5cdGNvbnN0IHRlc3RDcml0ZXJpYSA9IChjcml0ZXJpYTogc3RyaW5nKTogYm9vbGVhbiA9PiB7XG5cdFx0Ly8gRklYTUU6IFRoaXMgc2hvdWxkbid0IGJlIHVzaW5nIGV2YWwgb24gZGF0YSBlbnRlcmVkIGluIHdpa2l0ZXh0LlxuXHRcdC8vIElmIHRoYXQgZGF0YSBpcyBtYWxmb3JtZWQgaXQgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gZS5nLiBjcml0ZXJpYSA9IFwiKGZhbHNlKSlcIlxuXHRcdHRyeSB7XG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZXZhbFxuXHRcdFx0cmV0dXJuIHdpbmRvdy5ldmFsKGNyaXRlcmlhKSBhcyBib29sZWFuO1xuXHRcdH0gY2F0Y2gge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fTtcblxuXHRsZXQgcmVzdWx0OiBib29sZWFuID0gZmFsc2U7XG5cblx0Y29uc3QgY3JpdGVyaWFEYXRhOiBzdHJpbmcgPSAoKCRub3RpY2UuZGF0YSgnYXNuLWNyaXRlcmlhJykgYXMgc3RyaW5nIHwgdW5kZWZpbmVkKSA/PyAnJykudHJpbSgpO1xuXHRpZiAoY3JpdGVyaWFEYXRhKSB7XG5cdFx0dHJ5IHtcblx0XHRcdHJlc3VsdCA9IHRlc3RDcml0ZXJpYShkZWNvZGVVUklDb21wb25lbnQoY3JpdGVyaWFEYXRhLnJlcGxhY2UoL1xcKy9nLCAnJTIwJykpKTtcblx0XHR9IGNhdGNoIHtcblx0XHRcdHJlc3VsdCA9IHRydWU7XG5cdFx0fVxuXHR9IGVsc2UgaWYgKCRub3RpY2UuYXR0cignY2xhc3MnKSkge1xuXHRcdGxldCBjcml0ZXJpYTogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuXHRcdGlmICgkbm90aWNlLmhhc0NsYXNzKCdvbmx5X3N5c29wJykpIHtcblx0XHRcdGNyaXRlcmlhIHx8PSBpbl9ncm91cCgnc3lzb3AnKSB8fCBpbl9ncm91cCgnc3Rld2FyZCcpO1xuXHRcdH1cblx0XHRpZiAoJG5vdGljZS5oYXNDbGFzcygnb25seV9sb2dnZWQnKSkge1xuXHRcdFx0Y3JpdGVyaWEgfHw9IGluX2dyb3VwKCd1c2VyJyk7XG5cdFx0fVxuXHRcdGlmICgkbm90aWNlLmhhc0NsYXNzKCdvbmx5X2Fub24nKSkge1xuXHRcdFx0Y3JpdGVyaWEgfHw9ICFpbl9ncm91cCgndXNlcicpO1xuXHRcdH1cblx0XHRpZiAoJG5vdGljZS5oYXNDbGFzcygnb25seV96aF9jbicpKSB7XG5cdFx0XHRjcml0ZXJpYSB8fD0gb25seV9mb3IoJ3poLWNuJyk7XG5cdFx0fVxuXHRcdGlmICgkbm90aWNlLmhhc0NsYXNzKCdvbmx5X3poX3NnJykpIHtcblx0XHRcdGNyaXRlcmlhIHx8PSBvbmx5X2Zvcignemgtc2cnKTtcblx0XHR9XG5cdFx0aWYgKCRub3RpY2UuaGFzQ2xhc3MoJ29ubHlfemhfbXknKSkge1xuXHRcdFx0Y3JpdGVyaWEgfHw9IG9ubHlfZm9yKCd6aC1teScpO1xuXHRcdH1cblx0XHRpZiAoJG5vdGljZS5oYXNDbGFzcygnb25seV96aF9oaycpKSB7XG5cdFx0XHRjcml0ZXJpYSB8fD0gb25seV9mb3IoJ3poLWhrJyk7XG5cdFx0fVxuXHRcdGlmICgkbm90aWNlLmhhc0NsYXNzKCdvbmx5X3poX21vJykpIHtcblx0XHRcdGNyaXRlcmlhIHx8PSBvbmx5X2ZvcignemgtbW8nKTtcblx0XHR9XG5cdFx0aWYgKCRub3RpY2UuaGFzQ2xhc3MoJ29ubHlfemhfdHcnKSkge1xuXHRcdFx0Y3JpdGVyaWEgfHw9IG9ubHlfZm9yKCd6aC10dycpO1xuXHRcdH1cblxuXHRcdGlmIChjcml0ZXJpYSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRjcml0ZXJpYSA9IHRydWU7XG5cdFx0fVxuXG5cdFx0cmVzdWx0ID0gY3JpdGVyaWE7XG5cdH0gZWxzZSB7XG5cdFx0cmVzdWx0ID0gdHJ1ZTtcblx0fVxuXG5cdCRub3RpY2UuZGF0YSgnYXNuLWNhY2hlJywgcmVzdWx0KTtcblxuXHRyZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0IHttYXRjaENyaXRlcmlhfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQSxLQUFDLFNBQVMsUUFBUTtBQUNkLFVBQUksV0FBVyxDQUFDO0FBRWhCLGVBQVNBLGtCQUFpQixTQUFTO0FBQy9CLFlBQUksUUFBUTtBQUNaLGtCQUFVLE9BQU8sT0FBTztBQUV4QixZQUFJLEtBQUssdUJBQXVCLFVBQVU7QUFFMUMsaUJBQVMsRUFBRSxJQUFJLFNBQVMsRUFBRSxLQUFLLENBQUM7QUFDaEMsaUJBQVMsRUFBRSxFQUFFLEtBQUssSUFBSTtBQUV0QixhQUFLLFFBQVE7QUFDYixhQUFLLE1BQU07QUFDWCxhQUFLLFVBQVU7QUFDZixhQUFLLE1BQU0sSUFBSSxlQUFlO0FBQzlCLGFBQUssSUFBSSxNQUFNLE1BQU07QUFDckIsYUFBSyxJQUFJLE1BQU0sTUFBTTtBQUVyQixlQUFPLGlCQUFpQixXQUFXLFNBQVMsR0FBRztBQUMzQyxjQUFJLEVBQUUsZ0JBQWdCLE9BQU8sYUFBYztBQUMzQyxjQUFJLEVBQUUsWUFBWSxRQUFRLEVBQUUsYUFBYSxHQUFJO0FBQzdDLGNBQUks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LGNBQWN6RixTQUFTNEYsTUFBTTtBQUNwRk4sZ0JBQVlDLGFBQWEyQixhQUFhekIsYUFBYTtFQUNwRCxDQUFBO0FBQUEsV0FmZ0I2QixzQkFBQTtBQUFBLFdBQUFDLHFCQUFBM0ksTUFBQSxNQUFBQyxTQUFBO0VBQUE7QUFBQSxTQUFBeUk7QUFBQSxHQUFBLEVBZWI7IiwKICAibmFtZXMiOiBbIkJyb2FkY2FzdENoYW5uZWwiLCAiYWpheFBhZ2VUaXRsZSIsICJtb3VudFBvaW50U2VsZWN0b3IiLCAic3RvcmFnZUtleSIsICJjYWNoZUtleSIsICJ2ZXJzaW9uIiwgImltcG9ydF9leHRfZ2FkZ2V0NyIsICJyZXF1aXJlIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImFwaSIsICJpbml0TXdBcGkiLCAiY29uY2F0IiwgIndnVXNlckxhbmd1YWdlIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAicGFyYW1ldGVycyIsICJhY3Rpb24iLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAicHJvcCIsICJwYWdlIiwgInVzZWxhbmciLCAidmFyaWFudCIsICJzbWF4YWdlIiwgIm1heGFnZSIsICJxdWVyeUFwaSIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgInJlc3BvbnNlIiwgInN0b3JhZ2UiLCAiZ2V0T2JqZWN0IiwgInNldE9iamVjdCIsICJlcnJvciIsICJjb25zb2xlIiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiX190b0VTTSIsICJsb2FkUmVtb3RlTm90aWNlcyIsICJfcmVmMiIsICJyZXNwb25zZVBhcnNlIiwgInRleHQiLCAicmVtb3RlTm90aWNlIiwgImRlZmF1bHQiLCAiY3JlYXRlRWxlbWVudCIsICJpbm5lckhUTUwiLCAicXVlcnlTZWxlY3RvciIsICIkcmVtb3RlTm90aWNlcyIsICIkIiwgIiRub3RpY2VzMiIsICJmaW5kIiwgInJlbW90ZU5vdGljZXNWZXJzaW9uIiwgImRhdGEiLCAidG9TdHJpbmciLCAiJG5vdGljZXMiLCAiQ0xBU1NfTkFNRSIsICJDTEFTU19OQU1FX0RJU01JU1MiLCAiQ0xBU1NfTkFNRV9OT1RJQ0UiLCAiQ0xBU1NfTkFNRV9OT1RJQ0VfQ09OVEVOVCIsICJDTEFTU19OQU1FX1RJVExFIiwgImltcG9ydF9leHRfZ2FkZ2V0NSIsICJpbXBvcnRfZXh0X2dhZGdldDQiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgImdldEkxOG5NZXNzYWdlcyIsICJEaXNtaXNzIiwgImxvY2FsaXplIiwgImVuIiwgImphIiwgIkRpc21pc3NOb3RpY2UiLCAiVGl0bGUiLCAiemgiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImdlbmVyYXRlQXJlYSIsICJhcmVhIiwgImNsYXNzTmFtZSIsICJyb2xlIiwgIndnVXNlckdyb3VwcyIsICJ3Z0dsb2JhbEdyb3VwcyIsICJ3Z1VzZXJMYW5ndWFnZTIiLCAiaW5fZ3JvdXAiLCAiZ3JvdXAiLCAiaW5jbHVkZXMiLCAib25seV9mb3IiLCAidXNlckxhbmd1YWdlIiwgIm1hdGNoQ3JpdGVyaWEiLCAiJG5vdGljZSIsICJfJG5vdGljZSRkYXRhIiwgImNhY2hlIiwgInRlc3RDcml0ZXJpYSIsICJjcml0ZXJpYSIsICJ3aW5kb3ciLCAiZXZhbCIsICJyZXN1bHQiLCAiY3JpdGVyaWFEYXRhIiwgInRyaW0iLCAiZGVjb2RlVVJJQ29tcG9uZW50IiwgInJlcGxhY2UiLCAiYXR0ciIsICJoYXNDbGFzcyIsICJpbXBvcnRfZXh0X2dhZGdldDYiLCAiYnJvYWRjYXN0Q2hhbm5lbCIsICJCcm9hZGNhc3RDaGFubmVsIiwgImN1cnJlbnRWZXJzaW9uIiwgImxvY2FsVmVyc2lvbiIsICJ0aW1lciIsICJjb250ZW50UmVmcmVzaFRpbWVyIiwgIk5PVElDRV9ST1RBVEVfSU5URVJWQUxfTVMiLCAiTk9USUNFX0NPTlRFTlRfUkVGUkVTSF9EVVJBVElPTl9NUyIsICJwcmVmZXJzUmVkdWNlZE1vdGlvbiIsICJtYXRjaE1lZGlhIiwgIm1hdGNoZXMiLCAiZmFkZU91dER1cmF0aW9uIiwgImZhZGVJbkR1cmF0aW9uIiwgIm5vdGljZUNvbnRlbnRSZWZyZXNoQ2xhc3MiLCAiJGFyZWEiLCAiJGN1cnJlbnROb3RpY2UiLCAiJGRpc21pc3MiLCAicmVmcmVzaE5vdGljZUNvbnRlbnQiLCAiXyRjdXJyZW50Tm90aWNlJGdldCIsICJjbGVhclRpbWVvdXQiLCAicmVtb3ZlQ2xhc3MiLCAib2Zmc2V0V2lkdGgiLCAiYWRkQ2xhc3MiLCAic2V0VGltZW91dCIsICJjbG9zZU5vdGljZXMiLCAicG9zdE1lc3NhZ2UiLCAiY2xvc2UiLCAicmVtb3ZlIiwgInNldCIsICJhZGRFdmVudExpc3RlbmVyIiwgIm9uIiwgIm5vdGlmeSIsICJ0YWciLCAidGlwcHkiLCAiYXJyb3ciLCAiY29udGVudCIsICJwbGFjZW1lbnQiLCAibm90aWNlU3R5bGVzIiwgInNob3dOb3RpY2VzIiwgIiRtb3VudFBvaW50IiwgImluZGV4IiwgInJlbW90ZU5vdGljZXMiLCAiX3JlbW90ZU5vdGljZXMkdmVyc2lvIiwgIm5vdGljZXNMZW5ndGgiLCAibGVuZ3RoIiwgIm5leHROb3RpY2VJbmRleCIsICJpIiwgImVxIiwgInN0eWxlIiwgImxvYWRlciIsICJhZGRTdHlsZVRhZyIsICJkaXNhYmxlZCIsICJub3RpY2VIdG1sIiwgImh0bWwiLCAibm90aWNlU3R5bGVJZCIsICJjdXJyZW50Tm90aWNlSHRtbCIsICJzdG9wIiwgImZhZGVPdXQiLCAiX2kiLCAiX25vdGljZVN0eWxlcyIsICJub3RpY2VTdHlsZSIsICJmYWRlSW4iLCAiYXBwZW5kIiwgIl9yZW1vdGVOb3RpY2VzJCRub3RpYyIsICIkYm9keSIsICJnZXRCb2R5IiwgInJhbmRvbUluZGV4IiwgIk1hdGgiLCAiZmxvb3IiLCAicmFuZG9tIiwgImFkdmFuY2VkU2l0ZU5vdGljZXMiLCAiX2FkdmFuY2VkU2l0ZU5vdGljZXMiXQp9Cg==
