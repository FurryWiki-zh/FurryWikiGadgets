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

// dist/Wikiplus/Wikiplus.js
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
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
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
      getPageInfo({
        title,
        revisionId
      }) {
        var _this2 = this;
        return _asyncToGenerator(function* () {
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
        })();
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
      getWikiText({
        section,
        revisionId
      }) {
        return _asyncToGenerator(function* () {
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
        })();
      }
      /**
       * 解析 Wikitext
       *
       * @param {string} wikitext wikitext
       * @param {string} title 页面标题
       * @param {Object} config 设置
       * @return {Promise<string>} 解析结果 HTML
       */
      parseWikiText(wikitext, title = "", config = {}) {
        return _asyncToGenerator(function* () {
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
        })();
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
      edit({
        title,
        content,
        editToken,
        timestamp,
        config = {},
        additionalConfig = {}
      } = {}) {
        return _asyncToGenerator(function* () {
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
        })();
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
      init({
        editToken = ""
      } = {}) {
        var _this4 = this;
        return _asyncToGenerator(function* () {
          const promiseArr = [_this4.getTimestamp(), _this4.getContentModel()];
          if (!editToken) {
            promiseArr.push(_this4.getEditToken());
          }
          yield Promise.all(promiseArr);
          _this4.inited = true;
          log_default.info("Page initialization for ".concat(_this4.title, "#").concat(_this4.revisionId, " finished."));
        })();
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
      getWikiText({
        section = ""
      } = {}) {
        var _this8 = this;
        return _asyncToGenerator(function* () {
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
        })();
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
        var _this10 = this;
        return _asyncToGenerator(function* () {
          if (!_this10.editToken) {
            log_default.error("fail_to_get_edittoken");
            return;
          }
          if (!_this10.timestamp && !_this10.isNewPage) {
            log_default.error("fail_to_get_timestamp");
            return;
          }
          return wiki_default.edit({
            title: _this10.title,
            editToken: _this10.editToken,
            ..._this10.timestamp ? {
              timestamp: _this10.timestamp
            } : {},
            ...payload,
            additionalConfig: {
              ..._this10.isNewPage ? {
                createonly: _this10.isNewPage
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
        const self = this;
        $(".MoeNotification-notice").on("mouseover", function() {
          self.slideLeft($(this));
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
        const self = this;
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
            scrollTop: self.scrollTop
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
            scrollTop: self.scrollTop
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
        var _this11 = this;
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
            _this11.hideSimpleRedirectPanel(dialog);
            onSuccess({
              title
            });
          } catch (error) {
            $(".Wikiplus-Banner").css("background", "rgba(218, 142, 167, 0.65)");
            $(".Wikiplus-Banner").text(error.message);
            if (error.code === "articleexists") {
              $(".Wikiplus-InterBox-Content").append($("<hr>")).append(continueBtn).append(cancelBtn);
              cancelBtn.on("click", () => {
                _this11.hideSimpleRedirectPanel(dialog);
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
                  _this11.hideSimpleRedirectPanel(dialog);
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
        var _this12 = this;
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
            _this12.hideSettingsPanel(dialog);
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
      const getPage = /* @__PURE__ */ function() {
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
        return function getPage2(_x) {
          return _ref7.apply(this, arguments);
        };
      }();
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
      const handleQuickEditButtonClicked = /* @__PURE__ */ function() {
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
            onEdit: function() {
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
              return function onEdit(_x2) {
                return _ref9.apply(this, arguments);
              };
            }(),
            escExit: escToExit
          });
        });
        return function handleQuickEditButtonClicked2() {
          return _ref8.apply(this, arguments);
        };
      }();
      const handleSimpleRedirectButtonClicked = /* @__PURE__ */ function() {
        var _ref10 = _asyncToGenerator(function* () {
          ui_default.showSimpleRedirectPanel({
            onEdit: function() {
              var _ref11 = _asyncToGenerator(function* ({
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
              return function onEdit(_x3) {
                return _ref11.apply(this, arguments);
              };
            }(),
            onSuccess: ({
              title
            }) => {
              location.href = constants_default.articlePath.replace(/\$1/gi, title);
            }
          });
        });
        return function handleSimpleRedirectButtonClicked2() {
          return _ref10.apply(this, arguments);
        };
      }();
      const handleSettingsButtonClicked = /* @__PURE__ */ function() {
        var _ref12 = _asyncToGenerator(function* () {
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
          return _ref12.apply(this, arguments);
        };
      }();
      const handlePreload = /* @__PURE__ */ function() {
        var _ref13 = _asyncToGenerator(function* ({
          sectionNumber
        }) {
          yield currentPage.getWikiText({
            section: sectionNumber
          });
        });
        return function handlePreload2(_x4) {
          return _ref13.apply(this, arguments);
        };
      }();
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
  const loader = /* @__PURE__ */ function() {
    var _ref14 = _asyncToGenerator(function* () {
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
      return _ref14.apply(this, arguments);
    };
  }();
  void loader();
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1dpa2lwbHVzL21vZHVsZXMvdXRpbHMvY29uc3RhbnRzLmpzIiwgInNyYy9XaWtpcGx1cy9tb2R1bGVzL3V0aWxzL3JlcXVlc3RzLmpzIiwgInNyYy9XaWtpcGx1cy9tb2R1bGVzL3V0aWxzL2kxOG4uanMiLCAic3JjL1dpa2lwbHVzL21vZHVsZXMvdXRpbHMvbG9nLmpzIiwgInNyYy9XaWtpcGx1cy9tb2R1bGVzL3NlcnZpY2VzL3dpa2kuanMiLCAic3JjL1dpa2lwbHVzL21vZHVsZXMvY29yZS9wYWdlLmpzIiwgInNyYy9XaWtpcGx1cy9tb2R1bGVzL2NvcmUvbm90aWZpY2F0aW9uLmpzIiwgInNyYy9XaWtpcGx1cy9tb2R1bGVzL3V0aWxzL3NsZWVwLmpzIiwgInNyYy9XaWtpcGx1cy9tb2R1bGVzL3V0aWxzL2hlbHBlcnMuanMiLCAic3JjL1dpa2lwbHVzL21vZHVsZXMvY29yZS91aS5qcyIsICJzcmMvV2lraXBsdXMvbW9kdWxlcy91dGlscy9zZXR0aW5ncy5qcyIsICJzcmMvV2lraXBsdXMvbW9kdWxlcy93aWtpcGx1cy5sZXNzIiwgInNyYy9XaWtpcGx1cy9tb2R1bGVzL2luZGV4LmpzIiwgInNyYy9XaWtpcGx1cy9yZXNpemUudHMiLCAic3JjL1dpa2lwbHVzL1dpa2lwbHVzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjbGFzcyBDb25zdGFudHMge1xuXHR2ZXJzaW9uID0gJzQuMS4wJztcblx0Z2V0IGlzQXJ0aWNsZSgpIHtcblx0XHRyZXR1cm4gd2luZG93Lm13LmNvbmZpZy5nZXQoJ3dnSXNBcnRpY2xlJyk7XG5cdH1cblx0Z2V0IGN1cnJlbnRQYWdlTmFtZSgpIHtcblx0XHRyZXR1cm4gd2luZG93Lm13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKS5yZXBsYWNlKC8gL2csICdfJyk7XG5cdH1cblx0Z2V0IGFydGljbGVJZCgpIHtcblx0XHRyZXR1cm4gd2luZG93Lm13LmNvbmZpZy5nZXQoJ3dnQXJ0aWNsZUlkJyk7XG5cdH1cblx0Z2V0IHJldmlzaW9uSWQoKSB7XG5cdFx0cmV0dXJuIHdpbmRvdy5tdy5jb25maWcuZ2V0KCd3Z1JldmlzaW9uSWQnKTtcblx0fVxuXHRnZXQgbGF0ZXN0UmV2aXNpb25JZCgpIHtcblx0XHRyZXR1cm4gd2luZG93Lm13LmNvbmZpZy5nZXQoJ3dnQ3VyUmV2aXNpb25JZCcpO1xuXHR9XG5cdGdldCBhcnRpY2xlUGF0aCgpIHtcblx0XHRyZXR1cm4gd2luZG93Lm13LmNvbmZpZy5nZXQoJ3dnQXJ0aWNsZVBhdGgnKTtcblx0fVxuXHRnZXQgc2NyaXB0UGF0aCgpIHtcblx0XHRyZXR1cm4gd2luZG93Lm13LmNvbmZpZy5nZXQoJ3dnU2NyaXB0UGF0aCcpO1xuXHR9XG5cdGdldCBhY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHdpbmRvdy5tdy5jb25maWcuZ2V0KCd3Z0FjdGlvbicpO1xuXHR9XG5cdGdldCBza2luKCkge1xuXHRcdHJldHVybiB3aW5kb3cubXcuY29uZmlnLmdldCgnc2tpbicpO1xuXHR9XG5cdGdldCB1c2VyR3JvdXBzKCkge1xuXHRcdHJldHVybiB3aW5kb3cubXcuY29uZmlnLmdldCgnd2dVc2VyR3JvdXBzJyk7XG5cdH1cblx0Z2V0IHdpa2lJZCgpIHtcblx0XHRyZXR1cm4gd2luZG93Lm13LmNvbmZpZy5nZXQoJ3dnV2lraUlEJyk7XG5cdH1cblx0dXNlckFnZW50ID0gYEZ1cnJ5V2lraS8xLjEgV2lraXBsdXMvJHt0aGlzLnZlcnNpb259ICgke3RoaXMud2lraUlkfSlgO1xufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgQ29uc3RhbnRzKCk7XG4iLCAiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuLy8gQHRzLW5vY2hlY2tcbmltcG9ydCBDb25zdGFudHMgZnJvbSAnLi4vdXRpbHMvY29uc3RhbnRzJztcblxuY29uc3QgUmVxdWVzdHMgPSB7XG5cdGJhc2U6IGAke2xvY2F0aW9uLnByb3RvY29sfS8vJHtsb2NhdGlvbi5ob3N0fSR7Q29uc3RhbnRzLnNjcmlwdFBhdGh9L2FwaS5waHBgLFxuXHRhc3luYyBnZXQocXVlcnkpIHtcblx0XHRjb25zdCB1cmwgPSBuZXcgVVJMKFJlcXVlc3RzLmJhc2UpO1xuXHRcdGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKHF1ZXJ5KSkge1xuXHRcdFx0dXJsLnNlYXJjaFBhcmFtcy5hcHBlbmQoa2V5LCBxdWVyeVtrZXldKTtcblx0XHR9XG5cdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcblx0XHRcdGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuXHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHQnQXBpLVVzZXItQWdlbnQnOiBDb25zdGFudHMudXNlckFnZW50LFxuXHRcdFx0fSxcblx0XHR9KTtcblx0XHRyZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXHR9LFxuXHRhc3luYyBwb3N0KHBheWxvYWQpIHtcblx0XHRjb25zdCB1cmwgPSBuZXcgVVJMKFJlcXVlc3RzLmJhc2UpO1xuXHRcdGNvbnN0IGZvcm0gPSBuZXcgRm9ybURhdGEoKTtcblx0XHRmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhwYXlsb2FkKSkge1xuXHRcdFx0Zm9ybS5hcHBlbmQoa2V5LCB2YWx1ZSk7XG5cdFx0fVxuXHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XG5cdFx0XHRtZXRob2Q6ICdQT1NUJyxcblx0XHRcdGJvZHk6IGZvcm0sXG5cdFx0XHRjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcblx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0J0FwaS1Vc2VyLUFnZW50JzogQ29uc3RhbnRzLnVzZXJBZ2VudCxcblx0XHRcdH0sXG5cdFx0fSk7XG5cdFx0cmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblx0fSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlcXVlc3RzO1xuIiwgIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbi8vIEB0cy1ub2NoZWNrXG5jbGFzcyBJMThuIHtcblx0bGFuZ3VhZ2U7XG5cdGkxOG5EYXRhID0ge307XG5cdHNlc3Npb25VcGRhdGVMb2cgPSBbXTtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0bGV0IGxhbmd1YWdlO1xuXHRcdHRyeSB7XG5cdFx0XHRsYW5ndWFnZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlWydXaWtpcGx1c19TZXR0aW5ncyddKVsnbGFuZ3VhZ2UnXSB8fCBuYXZpZ2F0b3IubGFuZ3VhZ2UudG9Mb3dlckNhc2UoKTtcblx0XHR9IGNhdGNoIHtcblx0XHRcdGxhbmd1YWdlID0gKG5hdmlnYXRvci5sYW5ndWFnZSB8fCBuYXZpZ2F0b3IuYnJvd3Nlckxhbmd1YWdlKVxuXHRcdFx0XHQucmVwbGFjZSgvaGFuW3N0XS0/L2ksICcnKSAvLyBmb3IgbGFuZ3VhZ2VzIGxpa2UgemgtSGFucy1DTlxuXHRcdFx0XHQudG9Mb3dlckNhc2UoKTtcblx0XHR9XG5cdFx0dGhpcy5sYW5ndWFnZSA9IGxhbmd1YWdlO1xuXHRcdC8vIE1lcmdlIHdpdGggbG9jYWxTdG9yYWdlIGkxOG4gY2FjaGVcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgaTE4bkNhY2hlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnV2lraXBsdXNfaTE4bkNhY2hlJykpO1xuXHRcdFx0Zm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoaTE4bkNhY2hlKSkge1xuXHRcdFx0XHR0aGlzLmkxOG5EYXRhW2tleV0gPSBpMThuQ2FjaGVba2V5XTtcblx0XHRcdH1cblx0XHR9IGNhdGNoIHtcblx0XHRcdC8vIEZhaWwgdG8gcGFyc2UgaTE4biBjYWNoZSwgcmVzZXRcblx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdXaWtpcGx1c19pMThuQ2FjaGUnLCAne30nKTtcblx0XHR9XG5cdH1cblx0dHJhbnNsYXRlKGtleSwgcGxhY2Vob2xkZXJzID0gW10pIHtcblx0XHRsZXQgcmVzdWx0ID0gJyc7XG5cdFx0aWYgKHRoaXMubGFuZ3VhZ2UgaW4gdGhpcy5pMThuRGF0YSkge1xuXHRcdFx0aWYgKGtleSBpbiB0aGlzLmkxOG5EYXRhW3RoaXMubGFuZ3VhZ2VdKSB7XG5cdFx0XHRcdHJlc3VsdCA9IHRoaXMuaTE4bkRhdGFbdGhpcy5sYW5ndWFnZV1ba2V5XTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIHRyeSB1cGRhdGUgbGFuZ3VhZ2UgdmVyaXNvblxuXHRcdFx0XHR0aGlzLmxvYWRMYW5ndWFnZSh0aGlzLmxhbmd1YWdlKTtcblx0XHRcdFx0aWYgKGtleSBpbiB0aGlzLmkxOG5EYXRhWydlbi11cyddKSB7XG5cdFx0XHRcdFx0Ly8gRmFsbGJhY2sgdG8gRW5nbGlzaFxuXHRcdFx0XHRcdHJlc3VsdCA9IHRoaXMuaTE4bkRhdGFbJ2VuLXVzJ11ba2V5XTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXN1bHQgPSBrZXk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5sb2FkTGFuZ3VhZ2UodGhpcy5sYW5ndWFnZSk7XG5cdFx0fVxuXG5cdFx0aWYgKHBsYWNlaG9sZGVycy5sZW5ndGggPiAwKSB7XG5cdFx0XHRmb3IgKGNvbnN0IFtpbmRleCwgcGxhY2Vob2xkZXJdIG9mIHBsYWNlaG9sZGVycy5lbnRyaWVzKCkpIHtcblx0XHRcdFx0cmVzdWx0ID0gcmVzdWx0LnJlcGxhY2UoYCQke2luZGV4ICsgMX1gLCBwbGFjZWhvbGRlcik7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cblx0YXN5bmMgbG9hZExhbmd1YWdlKGxhbmd1YWdlKSB7XG5cdFx0aWYgKHRoaXMuc2Vzc2lvblVwZGF0ZUxvZy5pbmNsdWRlcyhsYW5ndWFnZSkpIHtcblx0XHRcdC8vIEhhcyBiZWVuIHVwZGF0ZWQgdGhpcyBzZXNzaW9uLlxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCAoXG5cdFx0XHRcdGF3YWl0IGZldGNoKFxuXHRcdFx0XHRcdGBodHRwczovL2dpdGNkbi5xaXV3ZW4ubmV0LmNuL0ludGVyZmFjZUFkbWluL1dpa2lwbHVzL3Jhdy9icmFuY2gvZGV2L2xhbmd1YWdlcy8ke2xhbmd1YWdlfS5qc29uYFxuXHRcdFx0XHQpXG5cdFx0XHQpLmpzb24oKTtcblx0XHRcdGNvbnN0IG5vd1ZlcnNpb24gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnV2lraXBsdXNfTGFuZ3VhZ2VWZXJzaW9uJykgfHwgJzAwMCc7XG5cdFx0XHR0aGlzLnNlc3Npb25VcGRhdGVMb2cucHVzaChsYW5ndWFnZSk7XG5cdFx0XHRpZiAocmVzcG9uc2UuX192ZXJzaW9uICE9PSBub3dWZXJzaW9uIHx8ICEobGFuZ3VhZ2UgaW4gdGhpcy5pMThuRGF0YSkpIHtcblx0XHRcdFx0Ly8gTGFuZ3VhZ2UgZ2V0IHVwZGF0ZWRcblx0XHRcdFx0Y29uc29sZS5pbmZvKGBVcGRhdGUgJHtsYW5ndWFnZX0gc3VwcG9ydCB0byB2ZXJzaW9uICR7cmVzcG9uc2UuX192ZXJzaW9ufWApO1xuXHRcdFx0XHR0aGlzLmkxOG5EYXRhW2xhbmd1YWdlXSA9IHJlc3BvbnNlO1xuXHRcdFx0XHQvLyBVcGRhdGUgbG9jYWxTdG9yYWdlIGNhY2hlXG5cdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdXaWtpcGx1c19pMThuQ2FjaGUnLCBKU09OLnN0cmluZ2lmeSh0aGlzLmkxOG5EYXRhKSk7XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHQvLyBVbnN1cHBvcnRlZCBsYW5ndWFnZVxuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgSTE4bigpO1xuIiwgIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbi8vIEB0cy1ub2NoZWNrXG5pbXBvcnQgaTE4biBmcm9tICcuL2kxOG4nO1xuXG5jbGFzcyBXaWtpcGx1c0Vycm9yIGV4dGVuZHMgRXJyb3Ige1xuXHRjb25zdHJ1Y3RvcihtZXNzYWdlLCBjb2RlKSB7XG5cdFx0c3VwZXIobWVzc2FnZSk7XG5cdFx0dGhpcy5jb2RlID0gY29kZTtcblx0fVxufVxuXG5jb25zdCBMb2cgPSB7XG5cdGRlYnVnKG1lc3NhZ2UgPSAnJykge1xuXHRcdGNvbnNvbGUuZGVidWcoYFtXaWtpcGx1cy1ERUJVR10gJHttZXNzYWdlfWApO1xuXHR9LFxuXHRpbmZvKG1lc3NhZ2UgPSAnJykge1xuXHRcdGNvbnNvbGUuaW5mbyhgW1dpa2lwbHVzLUlORk9dICR7bWVzc2FnZX1gKTtcblx0fSxcblx0ZXJyb3IoZXJyb3JDb2RlLCBwYXlsb2FkcyA9IFtdKSB7XG5cdFx0bGV0IHRlbXBsYXRlID0gaTE4bi50cmFuc2xhdGUoZXJyb3JDb2RlKTtcblx0XHRpZiAocGF5bG9hZHMubGVuZ3RoID4gMCkge1xuXHRcdFx0Ly8gRmlsbFxuXHRcdFx0Zm9yIChjb25zdCBbaSwgdl0gb2YgcGF5bG9hZHMuZW50cmllcygpKSB7XG5cdFx0XHRcdHRlbXBsYXRlID0gdGVtcGxhdGUucmVwbGFjZShuZXcgUmVnRXhwKGBcXFxcJHtpICsgMX1gLCAnaWcnKSwgdik7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNvbnNvbGUuZXJyb3IoYFtXaWtpcGx1cy1FUlJPUl0gJHt0ZW1wbGF0ZX1gKTtcblx0XHR0aHJvdyBuZXcgV2lraXBsdXNFcnJvcihgJHt0ZW1wbGF0ZX1gLCBlcnJvckNvZGUpO1xuXHR9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTG9nO1xuIiwgIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbi8vIEB0cy1ub2NoZWNrXG5pbXBvcnQgcmVxdWVzdHMgZnJvbSAnLi4vdXRpbHMvcmVxdWVzdHMnO1xuaW1wb3J0IExvZyBmcm9tICcuLi91dGlscy9sb2cnO1xuaW1wb3J0IGkxOG4gZnJvbSAnLi4vdXRpbHMvaTE4bic7XG5cbmNsYXNzIFdpa2kge1xuXHRwYWdlSW5mb0NhY2hlID0ge307XG5cdC8qKlxuXHQgKiDojrflvpcgRWRpdCBUb2tlblxuXHQgKiBHZXQgRWRpdCBUb2tlblxuXHQgKlxuXHQgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fVxuXHQgKi9cblx0YXN5bmMgZ2V0RWRpdFRva2VuKCkge1xuXHRcdC8vIOWwneivleS7jiBBUEkg6I635b6XIEVkaXRUb2tlblxuXHRcdC8vIFRyeSB0byBnZXQgRWRpdFRva2VuIGZyb20gQVBJXG5cdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXF1ZXN0cy5nZXQoe1xuXHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0bWV0YTogJ3Rva2VucycsXG5cdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHR9KTtcblx0XHRpZiAoXG5cdFx0XHRyZXNwb25zZS5xdWVyeSAmJlxuXHRcdFx0cmVzcG9uc2UucXVlcnkudG9rZW5zICYmXG5cdFx0XHRyZXNwb25zZS5xdWVyeS50b2tlbnMuY3NyZnRva2VuICYmXG5cdFx0XHRyZXNwb25zZS5xdWVyeS50b2tlbnMuY3NyZnRva2VuICE9PSAnK1xcXFwnXG5cdFx0KSB7XG5cdFx0XHRyZXR1cm4gcmVzcG9uc2UucXVlcnkudG9rZW5zLmNzcmZ0b2tlbjtcblx0XHR9XG5cdFx0cmV0dXJuIExvZy5lcnJvcignZmFpbF90b19nZXRfZWRpdHRva2VuJyk7XG5cdH1cblx0LyoqXG5cdCAqIOiOt+W+l+mhtemdouS4iuS4gOeJiOacrOaXtumXtOaIs1xuXHQgKiBHZXQgdGhlIHRpbWVzdGFtcCBvZiB0aGUgbGFzdCByZXZpc2lvbiBvZiBwYWdlIHNwZWNpZmllZC5cblx0ICpcblx0ICogQHBhcmFtIHtwYXJhbXMuc3RyaW5nfSB0aXRsZSDpobXpnaLlkI0gLyBQYWdlbmFtZVxuXHQgKiBAcGFyYW0ge3BhcmFtcy5yZXZpc2lvbklkfSByZXZpc2lvbklkIOS/ruiuoueJiOacrOWPtyAvIFJldmlzaW9uIElEXG5cdCAqIEBwYXJhbSB7cGFyYW1zLmNvbnRlbnRtb2RlbH0gY29udGVudG1vZGVsIOWGheWuueaooeWeiyAvIENvbnRlbnQgTW9kZWxcblx0ICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn1cblx0ICovXG5cdGFzeW5jIGdldFBhZ2VJbmZvKHt0aXRsZSwgcmV2aXNpb25JZH0pIHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgcGFyYW1zID0ge1xuXHRcdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRcdHByb3A6ICdyZXZpc2lvbnN8aW5mbycsXG5cdFx0XHRcdHJ2cHJvcDogJ3RpbWVzdGFtcHxpZHMnLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdH07XG5cdFx0XHRpZiAocmV2aXNpb25JZCkge1xuXHRcdFx0XHRwYXJhbXMucmV2aWRzID0gcmV2aXNpb25JZDtcblx0XHRcdH0gZWxzZSBpZiAodGl0bGUpIHtcblx0XHRcdFx0aWYgKHRoaXMucGFnZUluZm9DYWNoZVt0aXRsZV0pIHtcblx0XHRcdFx0XHQvLyBIaXQgY2FjaGVcblx0XHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdFx0dGltZXN0YW1wOiB0aGlzLnBhZ2VJbmZvQ2FjaGVbdGl0bGVdLnRpbWVzdGFtcCxcblx0XHRcdFx0XHRcdHJldmlzaW9uSWQ6IHRoaXMucGFnZUluZm9DYWNoZVt0aXRsZV0ucmV2aWQsXG5cdFx0XHRcdFx0XHRjb250ZW50bW9kZWw6IHRoaXMucGFnZUluZm9DYWNoZVt0aXRsZV0uY29udGVudG1vZGVsLFxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdH1cblx0XHRcdFx0cGFyYW1zLnRpdGxlcyA9IHRpdGxlO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXF1ZXN0cy5nZXQocGFyYW1zKTtcblx0XHRcdGlmIChyZXNwb25zZS5xdWVyeSAmJiByZXNwb25zZS5xdWVyeS5wYWdlcykge1xuXHRcdFx0XHRjb25zdCBjb250ZW50bW9kZWwgPSByZXNwb25zZS5xdWVyeS5wYWdlc1tPYmplY3Qua2V5cyhyZXNwb25zZS5xdWVyeS5wYWdlcylbMF1dLmNvbnRlbnRtb2RlbDtcblx0XHRcdFx0aWYgKE9iamVjdC5rZXlzKHJlc3BvbnNlLnF1ZXJ5LnBhZ2VzKVswXSA9PT0gJy0xJykge1xuXHRcdFx0XHRcdC8vIOS4jeWtmOWcqOi/meS4gOmhtemdolxuXHRcdFx0XHRcdC8vIFBhZ2Ugbm90IGZvdW5kLlxuXHRcdFx0XHRcdHRoaXMucGFnZUluZm9DYWNoZVt0aXRsZV0gPSB7Y29udGVudG1vZGVsOiBjb250ZW50bW9kZWx9O1xuXHRcdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0XHRjb250ZW50bW9kZWw6IGNvbnRlbnRtb2RlbCxcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0IHBhZ2VJbmZvID0gcmVzcG9uc2UucXVlcnkucGFnZXNbT2JqZWN0LmtleXMocmVzcG9uc2UucXVlcnkucGFnZXMpWzBdXS5yZXZpc2lvbnNbMF07XG5cdFx0XHRcdGlmICh0aXRsZSkge1xuXHRcdFx0XHRcdHRoaXMucGFnZUluZm9DYWNoZVt0aXRsZV0gPSBwYWdlSW5mbztcblx0XHRcdFx0XHR0aGlzLnBhZ2VJbmZvQ2FjaGVbdGl0bGVdLmNvbnRlbnRtb2RlbCA9IGNvbnRlbnRtb2RlbDtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdHRpbWVzdGFtcDogcGFnZUluZm8udGltZXN0YW1wLFxuXHRcdFx0XHRcdHJldmlzaW9uSWQ6IHBhZ2VJbmZvLnJldmlkLFxuXHRcdFx0XHRcdGNvbnRlbnRtb2RlbDogY29udGVudG1vZGVsLFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2gge1xuXHRcdFx0TG9nLmVycm9yKCdmYWlsX3RvX2dldF9lZGl0dG9rZW4nKTtcblx0XHR9XG5cdH1cblx0LyoqXG5cdCAqIOiOt+W+l+mhtemdoueahCBXaWtpdGV4dFxuXHQgKiBHZXQgd2lraXRleHQgb2YgdGhlIHBhZ2UuXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0aXRsZSB0aXRsZVxuXHQgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBjb25maWcucmV2aXNpb25JZCDniYjmnKzlj7dcblx0ICogQHBhcmFtIHtzdHJpbmd9IGNvbmZpZy5zZWN0aW9uIOauteiQveWPt1xuXHQgKiBAcmV0dXJuIHtQcm9taXNlPHN0cmluZz59IHdpa2l0ZXh05YaF5a65XG5cdCAqL1xuXHRhc3luYyBnZXRXaWtpVGV4dCh7c2VjdGlvbiwgcmV2aXNpb25JZH0pIHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgcGFyYW1zID0ge1xuXHRcdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRcdHByb3A6ICdyZXZpc2lvbnMnLFxuXHRcdFx0XHRydnByb3A6ICdjb250ZW50Jyxcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdHJldmlkczogcmV2aXNpb25JZCxcblx0XHRcdH07XG5cdFx0XHRpZiAocmV2aXNpb25JZCkge1xuXHRcdFx0XHRwYXJhbXMucmV2aWRzID0gcmV2aXNpb25JZDtcblx0XHRcdH1cblx0XHRcdGlmIChzZWN0aW9uKSB7XG5cdFx0XHRcdHBhcmFtcy5ydnNlY3Rpb24gPSBzZWN0aW9uO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXF1ZXN0cy5nZXQocGFyYW1zKTtcblx0XHRcdGlmIChyZXNwb25zZS5xdWVyeSAmJiByZXNwb25zZS5xdWVyeS5wYWdlcykge1xuXHRcdFx0XHRpZiAoT2JqZWN0LmtleXMocmVzcG9uc2UucXVlcnkucGFnZXMpWzBdID09PSAnLTEnKSB7XG5cdFx0XHRcdFx0Ly8g5LiN5a2Y5Zyo6L+Z5LiA6aG16Z2iXG5cdFx0XHRcdFx0Ly8gUGFnZSBub3QgZm91bmQuXG5cdFx0XHRcdFx0cmV0dXJuICcnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0IHBhZ2VJbmZvID0gcmVzcG9uc2UucXVlcnkucGFnZXNbT2JqZWN0LmtleXMocmVzcG9uc2UucXVlcnkucGFnZXMpWzBdXS5yZXZpc2lvbnNbMF07XG5cdFx0XHRcdHJldHVybiBwYWdlSW5mb1snKiddO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2gge1xuXHRcdFx0TG9nLmVycm9yKCdmYWlsX3RvX2dldF93aWtpdGV4dCcpO1xuXHRcdH1cblx0fVxuXHQvKipcblx0ICog6Kej5p6QIFdpa2l0ZXh0XG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB3aWtpdGV4dCB3aWtpdGV4dFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdGl0bGUg6aG16Z2i5qCH6aKYXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcg6K6+572uXG5cdCAqIEByZXR1cm4ge1Byb21pc2U8c3RyaW5nPn0g6Kej5p6Q57uT5p6cIEhUTUxcblx0ICovXG5cdGFzeW5jIHBhcnNlV2lraVRleHQod2lraXRleHQsIHRpdGxlID0gJycsIGNvbmZpZyA9IHt9KSB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdHMucG9zdCh7XG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRhY3Rpb246ICdwYXJzZScsXG5cdFx0XHRcdHRleHQ6IHdpa2l0ZXh0LFxuXHRcdFx0XHR0aXRsZSxcblx0XHRcdFx0cHN0OiAndHJ1ZScsXG5cdFx0XHR9KTtcblx0XHRcdGlmIChyZXNwb25zZS5wYXJzZSAmJiByZXNwb25zZS5wYXJzZS50ZXh0KSB7XG5cdFx0XHRcdHJldHVybiByZXNwb25zZS5wYXJzZS50ZXh0WycqJ107XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHRMb2cuZXJyb3IoJ2NhbnRfcGFyc2Vfd2lraXRleHQnKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICog57yW6L6R6aG16Z2iXG5cdCAqXG5cdCAqIEBwYXJhbSByb290MFxuXHQgKiBAcGFyYW0gcm9vdDAudGl0bGVcblx0ICogQHBhcmFtIHJvb3QwLmNvbnRlbnRcblx0ICogQHBhcmFtIHJvb3QwLmVkaXRUb2tlblxuXHQgKiBAcGFyYW0gcm9vdDAudGltZXN0YW1wXG5cdCAqIEBwYXJhbSByb290MC5jb25maWdcblx0ICogQHBhcmFtIHJvb3QwLmFkZGl0aW9uYWxDb25maWdcblx0ICovXG5cdGFzeW5jIGVkaXQoe3RpdGxlLCBjb250ZW50LCBlZGl0VG9rZW4sIHRpbWVzdGFtcCwgY29uZmlnID0ge30sIGFkZGl0aW9uYWxDb25maWcgPSB7fX0gPSB7fSkge1xuXHRcdGxldCByZXNwb25zZTtcblx0XHR0cnkge1xuXHRcdFx0cmVzcG9uc2UgPSBhd2FpdCByZXF1ZXN0cy5wb3N0KHtcblx0XHRcdFx0YWN0aW9uOiAnZWRpdCcsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHR0ZXh0OiBjb250ZW50LFxuXHRcdFx0XHR0aXRsZSxcblx0XHRcdFx0dG9rZW46IGVkaXRUb2tlbixcblx0XHRcdFx0Li4uKHRpbWVzdGFtcCA/IHtiYXNldGltZXN0YW1wOiB0aW1lc3RhbXB9IDoge30pLFxuXHRcdFx0XHQuLi5jb25maWcsXG5cdFx0XHRcdC4uLmFkZGl0aW9uYWxDb25maWcsXG5cdFx0XHR9KTtcblx0XHR9IGNhdGNoIHtcblx0XHRcdExvZy5lcnJvcignbmV0d29ya19lZGl0X2Vycm9yJyk7XG5cdFx0fVxuXHRcdGlmIChyZXNwb25zZS5lZGl0KSB7XG5cdFx0XHRpZiAocmVzcG9uc2UuZWRpdC5yZXN1bHQgPT09ICdTdWNjZXNzJykge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdGlmIChyZXNwb25zZS5lZGl0LmNvZGUpIHtcblx0XHRcdFx0Ly8gQWJ1c2UgRmlsdGVyXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihgXG4gICAgICAgICAgICAgICAgICAgICAgICAke2kxOG4udHJhbnNsYXRlKCdoaXRfYWJ1c2VmaWx0ZXInKX06JHtyZXNwb25zZS5lZGl0LmluZm8ucmVwbGFjZSgnL0hpdCBBYnVzZUZpbHRlcjogL2lnJywgJycpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cImZvbnQtc2l6ZTogc21hbGxlcjtcIj4ke3Jlc3BvbnNlLmVkaXQud2FybmluZ308L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgYCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRMb2cuZXJyb3IoJ3Vua25vd25fZWRpdF9lcnJvcicpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAocmVzcG9uc2UuZXJyb3IgJiYgcmVzcG9uc2UuZXJyb3IuY29kZSkge1xuXHRcdFx0TG9nLmVycm9yKHJlc3BvbnNlLmVycm9yLmNvZGUpO1xuXHRcdH0gZWxzZSBpZiAocmVzcG9uc2UuY29kZSkge1xuXHRcdFx0TG9nLmVycm9yKHJlc3BvbnNlLmNvZGUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRMb2cuZXJyb3IoJ3Vua25vd25fZWRpdF9lcnJvcicpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiDojrflvpfmjIflrprpobXpnaLmnIDmlrDkv67orqLnvJblj7dcblx0ICogR2V0IGxhdGVzdCByZXZpc2lvbklkIG9mIGEgcGFnZS5cblx0ICpcblx0ICogQHBhcmFtIHsqfSB0aXRsZVxuXHQgKi9cblx0YXN5bmMgZ2V0TGF0ZXN0UmV2aXNpb25JZEZvclBhZ2UodGl0bGUpIHtcblx0XHRjb25zdCB7cmV2aXNpb25JZH0gPSBhd2FpdCB0aGlzLmdldFBhZ2VJbmZvKHt0aXRsZX0pO1xuXHRcdHJldHVybiByZXZpc2lvbklkO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBXaWtpKCk7XG4iLCAiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuLy8gQHRzLW5vY2hlY2tcbmltcG9ydCBXaWtpIGZyb20gJy4uL3NlcnZpY2VzL3dpa2knO1xuaW1wb3J0IExvZyBmcm9tICcuLi91dGlscy9sb2cnO1xuXG5jbGFzcyBQYWdlIHtcblx0dGltZXN0YW1wO1xuXHRlZGl0VG9rZW47XG5cdHRpdGxlO1xuXHRyZXZpc2lvbklkO1xuXG5cdGluaXRlZCA9IGZhbHNlO1xuXHRpc05ld1BhZ2UgPSBmYWxzZTtcblxuXHRjb250ZW50bW9kZWwgPSAnd2lraXRleHQnO1xuXG5cdHNlY3Rpb25DYWNoZSA9IHt9O1xuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge3BhcmFtcy50aXRsZX0g6aG16Z2i5qCH6aKYIFBhZ2UgTmFtZSAob3B0aW9uYWwpXG5cdCAqIEBwYXJhbSB7cGFyYW1zLnJldmlzaW9uSWR9IOmhtemdouS/ruiuoue8luWPtyBSZXZpc2lvbiBJZFxuXHQgKiBAcGFyYW0ge3BhcmFtcy5jb250ZW50bW9kZWx9IOmhtemdouWGheWuueaooeWeiyBDb250ZW50IE1vZGVsXG5cdCAqL1xuXHRjb25zdHJ1Y3Rvcih7dGl0bGUsIHJldmlzaW9uSWR9KSB7XG5cdFx0dGhpcy50aXRsZSA9IHRpdGxlO1xuXHRcdHRoaXMucmV2aXNpb25JZCA9IHJldmlzaW9uSWQ7XG5cdFx0dGhpcy5pc05ld1BhZ2UgPSAhcmV2aXNpb25JZDtcblx0fVxuXG5cdC8qKlxuXHQgKiDliJ3lp4vljJYg6I635b6X6aG16Z2iRWRpdFRva2Vu5ZKM5Yid5aeLVGltZVN0YW1wXG5cdCAqIEluaXRpYWxpemF0aW9uLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gZWRpdFRva2VuIChvcHRpb25hbCkg5aaC5p6c5o+Q5L6b5LqGZWRpdFRva2Vu77yM5bCG5LiN5Lya5YaN6I635Y+WXG5cdCAqL1xuXHRhc3luYyBpbml0KHtlZGl0VG9rZW4gPSAnJ30gPSB7fSkge1xuXHRcdGNvbnN0IHByb21pc2VBcnIgPSBbdGhpcy5nZXRUaW1lc3RhbXAoKSwgdGhpcy5nZXRDb250ZW50TW9kZWwoKV07XG5cdFx0aWYgKCFlZGl0VG9rZW4pIHtcblx0XHRcdHByb21pc2VBcnIucHVzaCh0aGlzLmdldEVkaXRUb2tlbigpKTtcblx0XHR9XG5cdFx0YXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZUFycik7XG5cdFx0dGhpcy5pbml0ZWQgPSB0cnVlO1xuXHRcdExvZy5pbmZvKGBQYWdlIGluaXRpYWxpemF0aW9uIGZvciAke3RoaXMudGl0bGV9IyR7dGhpcy5yZXZpc2lvbklkfSBmaW5pc2hlZC5gKTtcblx0fVxuXG5cdC8qKlxuXHQgKiDojrflvpcgRWRpdFRva2VuXG5cdCAqIEdldCBFZGl0VG9rZW5cblx0ICovXG5cdGFzeW5jIGdldEVkaXRUb2tlbigpIHtcblx0XHRhd2FpdCBtdy5sb2FkZXIudXNpbmcoJ21lZGlhd2lraS51c2VyJyk7XG5cdFx0aWYgKG13LnVzZXIudG9rZW5zLmdldCgnY3NyZlRva2VuJykgJiYgbXcudXNlci50b2tlbnMuZ2V0KCdjc3JmVG9rZW4nKSAhPT0gJytcXFxcJykge1xuXHRcdFx0Ly8g5aaC5p6cIE1lZGlhV2lraSBKYXZhU2NyaXB0IEFQSSDlj6/ku6Xnm7TmjqXojrflvpcgRWRpdFRva2VuIOWImeebtOaOpei/lOWbnlxuXHRcdFx0Ly8gUmV0dXJuIEVkaXRUb2tlbiByZXRyaWV2ZWQgZnJvbSBNZWRpYVdpa2kgSmF2YVNjcmlwdCBBUEkgaWYgYWNjZXNzaWJsZVxuXHRcdFx0dGhpcy5lZGl0VG9rZW4gPSBtdy51c2VyLnRva2Vucy5nZXQoJ2NzcmZUb2tlbicpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHQvLyDku45BUEnojrflvpdFZGl0VG9rZW5cblx0XHQvLyBHZXQgRWRpdFRva2VuIGZyb20gTWVkaWFXaWtpIEFQSVxuXHRcdHRoaXMuZWRpdFRva2VuID0gYXdhaXQgV2lraS5nZXRFZGl0VG9rZW4oKTtcblx0fVxuXG5cdC8qKlxuXHQgKiDojrflvpfnvJbovpHln7rlh4bml7bpl7TmiLNcblx0ICogR2V0IEJhc2UgVGltZXN0YW1wXG5cdCAqL1xuXHRhc3luYyBnZXRUaW1lc3RhbXAoKSB7XG5cdFx0Y29uc3Qge3RpbWVzdGFtcCwgcmV2aXNpb25JZH0gPSBhd2FpdCBXaWtpLmdldFBhZ2VJbmZvKHtcblx0XHRcdHJldmlzaW9uSWQ6IHRoaXMucmV2aXNpb25JZCxcblx0XHRcdHRpdGxlOiB0aGlzLnRpdGxlLFxuXHRcdH0pO1xuXHRcdHRoaXMudGltZXN0YW1wID0gdGltZXN0YW1wO1xuXHRcdGlmIChyZXZpc2lvbklkKSB7XG5cdFx0XHR0aGlzLnJldmlzaW9uSWQgPSByZXZpc2lvbklkO1xuXHRcdFx0dGhpcy5pc05ld1BhZ2UgPSBmYWxzZTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICog6I635b6X6aG16Z2i5YaF5a655qih5Z6LXG5cdCAqXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcblx0ICogQHBhcmFtIHtzdHJpbmd9IGNvbmZpZy5yZXZpc2lvbklkXG5cdCAqL1xuXHRhc3luYyBnZXRDb250ZW50TW9kZWwoKSB7XG5cdFx0Y29uc3Qge2NvbnRlbnRtb2RlbH0gPSBhd2FpdCBXaWtpLmdldFBhZ2VJbmZvKHtcblx0XHRcdHJldmlzaW9uSWQ6IHRoaXMucmV2aXNpb25JZCxcblx0XHRcdHRpdGxlOiB0aGlzLnRpdGxlLFxuXHRcdH0pO1xuXHRcdHRoaXMuY29udGVudG1vZGVsID0gY29udGVudG1vZGVsIHx8ICd3aWtpdGV4dCc7XG5cdH1cblxuXHQvKipcblx0ICog6I635b6XIFdpa2lUZXh0XG5cdCAqXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcblx0ICogQHBhcmFtIHtzdHJpbmd9IGNvbmZpZy5zZWN0aW9uXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBjb25maWcucmV2aXNpb25JZFxuXHQgKi9cblx0YXN5bmMgZ2V0V2lraVRleHQoe3NlY3Rpb24gPSAnJ30gPSB7fSkge1xuXHRcdGNvbnN0IHNlYyA9IHNlY3Rpb24gPT09IC0xID8gJycgOiBzZWN0aW9uO1xuXHRcdGlmICh0aGlzLnNlY3Rpb25DYWNoZVtzZWNdKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5zZWN0aW9uQ2FjaGVbc2VjXTtcblx0XHR9XG5cdFx0Y29uc3Qgd2lraVRleHQgPSBhd2FpdCBXaWtpLmdldFdpa2lUZXh0KHtcblx0XHRcdHNlY3Rpb246IHNlYyxcblx0XHRcdHJldmlzaW9uSWQ6IHRoaXMucmV2aXNpb25JZCxcblx0XHR9KTtcblx0XHRMb2cuaW5mbyhgV2lraXRleHQgb2YgJHt0aGlzLnRpdGxlfSMke3NlY3Rpb259IGZldGNoZWQuYCk7XG5cdFx0dGhpcy5zZWN0aW9uQ2FjaGVbc2VjXSA9IHdpa2lUZXh0O1xuXHRcdHJldHVybiB3aWtpVGV4dDtcblx0fVxuXG5cdC8qKlxuXHQgKiDop6PmnpAgV2lraVRleHRcblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IHdpa2l0ZXh0XG5cdCAqL1xuXHRhc3luYyBwYXJzZVdpa2lUZXh0KHdpa2l0ZXh0KSB7XG5cdFx0cmV0dXJuIFdpa2kucGFyc2VXaWtpVGV4dCh3aWtpdGV4dCwgdGhpcy50aXRsZSk7XG5cdH1cblxuXHQvKipcblx0ICog57yW6L6R6aG16Z2iXG5cdCAqXG5cdCAqIEBwYXJhbSB7Kn0gY29uZmlnXG5cdCAqIEBwYXJhbSBwYXlsb2FkXG5cdCAqL1xuXHRhc3luYyBlZGl0KHBheWxvYWQpIHtcblx0XHRpZiAoIXRoaXMuZWRpdFRva2VuKSB7XG5cdFx0XHRMb2cuZXJyb3IoJ2ZhaWxfdG9fZ2V0X2VkaXR0b2tlbicpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpZiAoIXRoaXMudGltZXN0YW1wICYmICF0aGlzLmlzTmV3UGFnZSkge1xuXHRcdFx0Ly8g5aaC5p6c5LiN5piv5Yib5bu65paw6aG16Z2iIOWPiOayoeacieWfuuWHhuaXtumXtOaIsyDliJnmnInlj6/og73pgKDmiJDnvJbovpHopobnm5Yg5L+d6Zmp6LW36KeB55u05o6l5ouS57udXG5cdFx0XHRMb2cuZXJyb3IoJ2ZhaWxfdG9fZ2V0X3RpbWVzdGFtcCcpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRyZXR1cm4gV2lraS5lZGl0KHtcblx0XHRcdHRpdGxlOiB0aGlzLnRpdGxlLFxuXHRcdFx0ZWRpdFRva2VuOiB0aGlzLmVkaXRUb2tlbixcblx0XHRcdC4uLih0aGlzLnRpbWVzdGFtcCA/IHt0aW1lc3RhbXA6IHRoaXMudGltZXN0YW1wfSA6IHt9KSxcblx0XHRcdC4uLnBheWxvYWQsXG5cdFx0XHRhZGRpdGlvbmFsQ29uZmlnOiB7XG5cdFx0XHRcdC4uLih0aGlzLmlzTmV3UGFnZSA/IHtjcmVhdGVvbmx5OiB0aGlzLmlzTmV3UGFnZX0gOiB7fSksXG5cdFx0XHR9LFxuXHRcdH0pO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2U7XG4iLCAiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuLy8gQHRzLW5vY2hlY2tcbmNsYXNzIE5vdGlmaWNhdGlvbiB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMuaW5pdCgpO1xuXHR9XG5cdGluaXQoKSB7XG5cdFx0JCgnYm9keScpLmFwcGVuZCgnPGRpdiBpZD1cIk1vZU5vdGlmaWNhdGlvblwiPjwvZGl2PicpO1xuXHR9XG5cdGRpc3BsYXkodGV4dCA9ICfllrV+JywgdHlwZSA9ICdzdWNjZXNzJywgY2FsbGJhY2sgPSAoKSA9PiB7fSkge1xuXHRcdCQoJyNNb2VOb3RpZmljYXRpb24nKS5hcHBlbmQoXG5cdFx0XHQkKCc8ZGl2PicpXG5cdFx0XHRcdC5hZGRDbGFzcygnTW9lTm90aWZpY2F0aW9uLW5vdGljZScpXG5cdFx0XHRcdC5hZGRDbGFzcyhgTW9lTm90aWZpY2F0aW9uLW5vdGljZS0ke3R5cGV9YClcblx0XHRcdFx0LmFwcGVuZChgPHNwYW4+JHt0ZXh0fTwvc3Bhbj5gKVxuXHRcdCk7XG5cdFx0JCgnI01vZU5vdGlmaWNhdGlvbicpLmZpbmQoJy5Nb2VOb3RpZmljYXRpb24tbm90aWNlJykubGFzdCgpLmZhZGVJbigzMDApO1xuXHRcdHRoaXMuYmluZCgpO1xuXHRcdHRoaXMuY2xlYXIoKTtcblx0XHRjYWxsYmFjaygkKCcjTW9lTm90aWZpY2F0aW9uJykuZmluZCgnLk1vZU5vdGlmaWNhdGlvbi1ub3RpY2UnKS5sYXN0KCkpO1xuXHR9XG5cdGJpbmQoKSB7XG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0JCgnLk1vZU5vdGlmaWNhdGlvbi1ub3RpY2UnKS5vbignbW91c2VvdmVyJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0c2VsZi5zbGlkZUxlZnQoJCh0aGlzKSk7XG5cdFx0fSk7XG5cdH1cblx0c3VjY2Vzcyh0ZXh0LCBjYWxsYmFjaykge1xuXHRcdHRoaXMuZGlzcGxheSh0ZXh0LCAnc3VjY2VzcycsIGNhbGxiYWNrKTtcblx0fVxuXHR3YXJuaW5nKHRleHQsIGNhbGxiYWNrKSB7XG5cdFx0dGhpcy5kaXNwbGF5KHRleHQsICd3YXJuaW5nJywgY2FsbGJhY2spO1xuXHR9XG5cdGVycm9yKHRleHQsIGNhbGxiYWNrKSB7XG5cdFx0dGhpcy5kaXNwbGF5KHRleHQsICdlcnJvcicsIGNhbGxiYWNrKTtcblx0fVxuXHRjbGVhcigpIHtcblx0XHRpZiAoJCgnLk1vZU5vdGlmaWNhdGlvbi1ub3RpY2UnKS5sZW5ndGggPj0gMTApIHtcblx0XHRcdCQoJyNNb2VOb3RpZmljYXRpb24nKVxuXHRcdFx0XHQuY2hpbGRyZW4oKVxuXHRcdFx0XHQuZmlyc3QoKVxuXHRcdFx0XHQuZmFkZU91dCgxNTAsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHQkKHRoaXMpLnJlbW92ZSgpO1xuXHRcdFx0XHR9KTtcblx0XHRcdHNldFRpbWVvdXQodGhpcy5jbGVhciwgMzAwKTtcblx0XHR9XG5cdH1cblx0ZW1wdHkoZikge1xuXHRcdCQoJy5Nb2VOb3RpZmljYXRpb24tbm90aWNlJykuZWFjaChmdW5jdGlvbiAoaSkge1xuXHRcdFx0aWYgKHR5cGVvZiBmID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdGNvbnN0IGVsZSA9ICQodGhpcyk7XG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdGYoZWxlKTtcblx0XHRcdFx0fSwgMjAwICogaSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQkKHRoaXMpXG5cdFx0XHRcdFx0LmRlbGF5KGkgKiAyMDApXG5cdFx0XHRcdFx0LmZhZGVPdXQoJ2Zhc3QnLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHQkKHRoaXMpLnJlbW92ZSgpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cdHNsaWRlTGVmdChlbGUsIHNwZWVkKSB7XG5cdFx0ZWxlLmNzcygncG9zaXRpb24nLCAncmVsYXRpdmUnKTtcblx0XHRlbGUuYW5pbWF0ZShcblx0XHRcdHtcblx0XHRcdFx0bGVmdDogJy0yMDAlJyxcblx0XHRcdH0sXG5cdFx0XHRzcGVlZCB8fCAxNTAsXG5cdFx0XHRmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdCQodGhpcykuZmFkZU91dCgnZmFzdCcsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHQkKHRoaXMpLnJlbW92ZSgpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHQpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBOb3RpZmljYXRpb24oKTtcbiIsICIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4vLyBAdHMtbm9jaGVja1xuY29uc3Qgc2xlZXAgPSAodGltZSkgPT4ge1xuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcblx0XHRyZXR1cm4gc2V0VGltZW91dChyZXNvbHZlLCB0aW1lKTtcblx0fSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgc2xlZXA7XG4iLCAiLyoqXG4gKiDop6PmnpBVUkzlj4LmlbDliJfooahcbiAqIFBhcnNlIFVSTCBxdWVyeS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ319IHVybFxuICogQHBhcmFtIHVybFxuICovXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4vLyBAdHMtbm9jaGVja1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUXVlcnkodXJsKSB7XG5cdGNvbnN0IHJlZyA9IC8oKFtePyY9XSspKD86PShbXj8mPV0qKSkqKS9nO1xuXHRjb25zdCBwYXJhbXMgPSB7fTtcblx0bGV0IG1hdGNoO1xuXHR3aGlsZSAoKG1hdGNoID0gcmVnLmV4ZWModXJsKSkpIHtcblx0XHR0cnkge1xuXHRcdFx0cGFyYW1zW21hdGNoWzJdXSA9IGRlY29kZVVSSUNvbXBvbmVudChtYXRjaFszXSk7XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHRwYXJhbXNbbWF0Y2hbMl1dID0gbWF0Y2hbM107XG5cdFx0fVxuXHR9XG5cdHJldHVybiBwYXJhbXM7XG59XG4iLCAiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuLy8gQHRzLW5vY2hlY2tcbmltcG9ydCBDb25zdGFudHMgZnJvbSAnLi4vdXRpbHMvY29uc3RhbnRzJztcbmltcG9ydCBOb3RpZmljYXRpb24gZnJvbSAnLi9ub3RpZmljYXRpb24nO1xuaW1wb3J0IGkxOG4gZnJvbSAnLi4vdXRpbHMvaTE4bic7XG5pbXBvcnQgTG9nIGZyb20gJy4uL3V0aWxzL2xvZyc7XG5pbXBvcnQgc2xlZXAgZnJvbSAnLi4vdXRpbHMvc2xlZXAnO1xuaW1wb3J0IHtwYXJzZVF1ZXJ5fSBmcm9tICcuLi91dGlscy9oZWxwZXJzJztcblxuY2xhc3MgVUkge1xuXHRxdWlja0VkaXRQYW5lbFZpc2libGUgPSBmYWxzZTtcblx0c2Nyb2xsVG9wID0gMDtcblxuXHQvKipcblx0ICog5Yib5bu65bGF5Lit5a+56K+d5qGGXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0aXRsZSDnqpflj6PmoIfpophcblx0ICogQHBhcmFtIHtzdHJpbmcgfCBKUXVlcnk8SFRNTEVsZW1lbnQ+fSBjb250ZW50IOWGheWuuVxuXHQgKiBAcGFyYW0geyp9IHdpZHRoIOWuveW6plxuXHQgKiBAcGFyYW0geyp9IGNhbGxiYWNrIOWbnuiwg+WHveaVsFxuXHQgKi9cblx0Y3JlYXRlRGlhbG9nQm94KHRpdGxlID0gJ1dpa2lwbHVzJywgY29udGVudCA9ICcnLCB3aWR0aCA9IDYwMCwgY2FsbGJhY2sgPSAoKSA9PiB7fSkge1xuXHRcdGlmICgkKCcuV2lraXBsdXMtSW50ZXJCb3gnKS5sZW5ndGggPiAwKSB7XG5cdFx0XHQkKCcuV2lraXBsdXMtSW50ZXJCb3gnKS5lYWNoKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0JCh0aGlzKS5yZW1vdmUoKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0XHRjb25zdCBjbGllbnRXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuXHRcdGNvbnN0IGNsaWVudEhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblx0XHRjb25zdCBkaWFsb2dXaWR0aCA9IE1hdGgubWluKGNsaWVudFdpZHRoLCB3aWR0aCk7XG5cdFx0Y29uc3QgZGlhbG9nQm94ID0gJCgnPGRpdj4nKVxuXHRcdFx0LmFkZENsYXNzKCdXaWtpcGx1cy1JbnRlckJveCcpXG5cdFx0XHQuY3NzKHtcblx0XHRcdFx0J21hcmdpbi1sZWZ0JzogY2xpZW50V2lkdGggLyAyIC0gZGlhbG9nV2lkdGggLyAyLFxuXHRcdFx0XHR0b3A6ICQoZG9jdW1lbnQpLnNjcm9sbFRvcCgpICsgY2xpZW50SGVpZ2h0ICogMC4yLFxuXHRcdFx0XHRkaXNwbGF5OiAnbm9uZScsXG5cdFx0XHR9KVxuXHRcdFx0LmFwcGVuZCgkKCc8ZGl2PicpLmFkZENsYXNzKCdXaWtpcGx1cy1JbnRlckJveC1IZWFkZXInKS5odG1sKHRpdGxlKSlcblx0XHRcdC5hcHBlbmQoJCgnPGRpdj4nKS5hZGRDbGFzcygnV2lraXBsdXMtSW50ZXJCb3gtQ29udGVudCcpLmFwcGVuZChjb250ZW50KSlcblx0XHRcdC5hcHBlbmQoJCgnPHNwYW4+JykudGV4dCgnw5cnKS5hZGRDbGFzcygnV2lraXBsdXMtSW50ZXJCb3gtQ2xvc2UnKSk7XG5cdFx0JCgnYm9keScpLmFwcGVuZChkaWFsb2dCb3gpO1xuXHRcdCQoJy5XaWtpcGx1cy1JbnRlckJveCcpLndpZHRoKGRpYWxvZ1dpZHRoKTtcblx0XHQkKCcuV2lraXBsdXMtSW50ZXJCb3gtQ2xvc2UnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHQkKHRoaXMpXG5cdFx0XHRcdC5wYXJlbnQoKVxuXHRcdFx0XHQuZmFkZU91dCgnZmFzdCcsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xvc2UnLCAod2luZG93Lm9uYmVmb3JldW5sb2FkID0gdW5kZWZpbmVkKSk7IC8vIOWPlua2iOmhtemdouWFs+mXreehruiupFxuXHRcdFx0XHRcdCQodGhpcykucmVtb3ZlKCk7XG5cdFx0XHRcdH0pO1xuXHRcdH0pO1xuXHRcdC8v5ouW5puzXG5cdFx0Y29uc3QgYmluZERyYWdnaW5nID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcblx0XHRcdGVsZW1lbnQubW91c2Vkb3duKChlKSA9PiB7XG5cdFx0XHRcdGNvbnN0IGJhc2VYID0gZS5jbGllbnRYO1xuXHRcdFx0XHRjb25zdCBiYXNlWSA9IGUuY2xpZW50WTtcblx0XHRcdFx0Y29uc3QgYmFzZU9mZnNldFggPSBlbGVtZW50LnBhcmVudCgpLm9mZnNldCgpLmxlZnQ7XG5cdFx0XHRcdGNvbnN0IGJhc2VPZmZzZXRZID0gZWxlbWVudC5wYXJlbnQoKS5vZmZzZXQoKS50b3A7XG5cdFx0XHRcdCQoZG9jdW1lbnQpLm9uKCdtb3VzZW1vdmUnLCAoZSkgPT4ge1xuXHRcdFx0XHRcdGVsZW1lbnQucGFyZW50KCkuY3NzKHtcblx0XHRcdFx0XHRcdCdtYXJnaW4tbGVmdCc6IGJhc2VPZmZzZXRYICsgZS5jbGllbnRYIC0gYmFzZVgsXG5cdFx0XHRcdFx0XHR0b3A6IGJhc2VPZmZzZXRZICsgZS5jbGllbnRZIC0gYmFzZVksXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHQkKGRvY3VtZW50KS5vbignbW91c2V1cCcsICgpID0+IHtcblx0XHRcdFx0XHRlbGVtZW50LnVuYmluZCgnbW91c2Vkb3duJyk7XG5cdFx0XHRcdFx0JChkb2N1bWVudCkub2ZmKCdtb3VzZW1vdmUnKTtcblx0XHRcdFx0XHQkKGRvY3VtZW50KS5vZmYoJ21vdXNldXAnKTtcblx0XHRcdFx0XHRiaW5kRHJhZ2dpbmcoZWxlbWVudCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fTtcblx0XHRiaW5kRHJhZ2dpbmcoJCgnLldpa2lwbHVzLUludGVyQm94LUhlYWRlcicpKTtcblx0XHQkKCcuV2lraXBsdXMtSW50ZXJCb3gnKS5mYWRlSW4oNTAwKTtcblx0XHRjYWxsYmFjaygpO1xuXHRcdHJldHVybiBkaWFsb2dCb3g7XG5cdH1cblxuXHQvKipcblx0ICog5Zyo5pCc57Si5qGG5bem5L6n44CM5pu05aSa44CN6I+c5Y2V5YaF5re75Yqg5oyJ6ZKuXG5cdCAqIEFkZCBhIGJ1dHRvbiBpbiBcIk1vcmVcIiBtZW51IChsZWZ0IG9mIHRoZSBzZWFyY2ggYmFyKVxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCDmjInpkq7lkI0gQnV0dG9uIHRleHRcblx0ICogQHBhcmFtIHtzdHJpbmd9IGlkIOaMiemSrmlkIEJ1dHRvbiBpZFxuXHQgKiBAcmV0dXJuIHtKUXVlcnk8SFRNTEVsZW1lbnQ+fSBidXR0b25cblx0ICovXG5cdGFkZEZ1bmN0aW9uQnV0dG9uKHRleHQsIGlkKSB7XG5cdFx0bGV0IGJ1dHRvbjtcblx0XHRzd2l0Y2ggKENvbnN0YW50cy5za2luKSB7XG5cdFx0XHRjYXNlICdtaW5lcnZhJzpcblx0XHRcdFx0YnV0dG9uID0gJCgnPGxpPicpXG5cdFx0XHRcdFx0LmF0dHIoJ2lkJywgaWQpXG5cdFx0XHRcdFx0LmFkZENsYXNzKCd0b2dnbGUtbGlzdC1pdGVtJylcblx0XHRcdFx0XHQuYXBwZW5kKFxuXHRcdFx0XHRcdFx0JCgnPGE+Jylcblx0XHRcdFx0XHRcdFx0LmFkZENsYXNzKCdtdy11aS1pY29uIG13LXVpLWljb24tYmVmb3JlIHRvZ2dsZS1saXN0LWl0ZW1fX2FuY2hvcicpXG5cdFx0XHRcdFx0XHRcdC5hcHBlbmQoXG5cdFx0XHRcdFx0XHRcdFx0JCgnPHNwYW4+Jylcblx0XHRcdFx0XHRcdFx0XHRcdC5hdHRyKCdocmVmJywgJ2phdmFzY3JpcHQ6dm9pZCgwKTsnKVxuXHRcdFx0XHRcdFx0XHRcdFx0LmFkZENsYXNzKCd0b2dnbGUtbGlzdC1pdGVtX19sYWJlbCcpXG5cdFx0XHRcdFx0XHRcdFx0XHQudGV4dCh0ZXh0KVxuXHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgJ21vZXNraW4nOlxuXHRcdFx0XHRidXR0b24gPSAkKCc8bGk+Jylcblx0XHRcdFx0XHQuYWRkQ2xhc3MoJ1dpa2lwbHVzLU1vcmUtRnVuY3Rpb24tQnV0dG9uJylcblx0XHRcdFx0XHQuYXR0cignaWQnLCBpZClcblx0XHRcdFx0XHQuYXBwZW5kKCQoJzxhPicpLmF0dHIoJ2hyZWYnLCAnamF2YXNjcmlwdDp2b2lkKDApOycpLnRleHQodGV4dCkpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0YnV0dG9uID0gJCgnPGxpPicpXG5cdFx0XHRcdFx0LmFkZENsYXNzKCdtdy1saXN0LWl0ZW0nKVxuXHRcdFx0XHRcdC5hZGRDbGFzcygndmVjdG9yLXRhYi1ub2ljb24nKVxuXHRcdFx0XHRcdC5hdHRyKCdpZCcsIGlkKVxuXHRcdFx0XHRcdC5hcHBlbmQoJCgnPGE+JykuYXR0cignaHJlZicsICdqYXZhc2NyaXB0OnZvaWQoMCk7JykudGV4dCh0ZXh0KSk7XG5cdFx0fVxuXHRcdGlmIChDb25zdGFudHMuc2tpbiA9PT0gJ21pbmVydmEnICYmICQoJyNwLXRiJykubGVuZ3RoID4gMCkge1xuXHRcdFx0JCgnI3AtdGInKS5hcHBlbmQoYnV0dG9uKTtcblx0XHRcdHJldHVybiAkKGAjJHtpZH1gKTtcblx0XHR9IGVsc2UgaWYgKENvbnN0YW50cy5za2luID09PSAnbW9lc2tpbicpIHtcblx0XHRcdCQoJy5tb3JlLWFjdGlvbnMtbGlzdCcpLmZpcnN0KCkuYXBwZW5kKGJ1dHRvbik7XG5cdFx0XHRyZXR1cm4gJChgIyR7aWR9YCk7XG5cdFx0fSBlbHNlIGlmICgkKCcjcC1jYWN0aW9ucycpLmxlbmd0aCA+IDApIHtcblx0XHRcdCQoJyNwLWNhY3Rpb25zIHVsJykuYXBwZW5kKGJ1dHRvbik7XG5cdFx0XHRyZXR1cm4gJChgIyR7aWR9YCk7XG5cdFx0fVxuXHRcdExvZy5pbmZvKGkxOG4udHJhbnNsYXRlKCdjYW50X2FkZF9mdW5jYnRuJykpO1xuXHR9XG5cblx0LyoqXG5cdCAqIOaPkuWFpeW/q+mAn+mHjeWumuWQkeaMiemSrlxuXHQgKlxuXHQgKiBAcGFyYW0geyp9IG9uQ2xpY2tcblx0ICovXG5cdGluc2VydFNpbXBsZVJlZGlyZWN0QnV0dG9uKG9uQ2xpY2sgPSAoKSA9PiB7fSkge1xuXHRcdGNvbnN0IGJ1dHRvbiA9IHRoaXMuYWRkRnVuY3Rpb25CdXR0b24oaTE4bi50cmFuc2xhdGUoJ3JlZGlyZWN0X2Zyb20nKSwgJ1dpa2lwbHVzLVNSLUludHJvJyk7XG5cdFx0aWYgKGJ1dHRvbikge1xuXHRcdFx0YnV0dG9uLm9uKCdjbGljaycsIG9uQ2xpY2spO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiDmj5LlhaXorr7nva7pnaLmnb/mjInpkq5cblx0ICpcblx0ICogQHBhcmFtIHsqfSBvbkNsaWNrXG5cdCAqL1xuXHRpbnNlcnRTZXR0aW5nc1BhbmVsQnV0dG9uKG9uQ2xpY2sgPSAoKSA9PiB7fSkge1xuXHRcdGNvbnN0IGJ1dHRvbiA9IHRoaXMuYWRkRnVuY3Rpb25CdXR0b24oaTE4bi50cmFuc2xhdGUoJ3dpa2lwbHVzX3NldHRpbmdzJyksICdXaWtpcGx1cy1TZXR0aW5ncy1JbnRybycpO1xuXHRcdGlmIChidXR0b24pIHtcblx0XHRcdGJ1dHRvbi5vbignY2xpY2snLCBvbkNsaWNrKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICog5o+S5YWl6aG26YOo5b+r6YCf57yW6L6R5oyJ6ZKuXG5cdCAqIEluc2VydCBRdWlja0VkaXQgYnV0dG9uIGJlc2lkZXMgcGFnZSBlZGl0IGJ1dHRvbi5cblx0ICpcblx0ICogQHBhcmFtIG9uQ2xpY2tcblx0ICovXG5cdGluc2VydFRvcFF1aWNrRWRpdEVudHJ5KG9uQ2xpY2spIHtcblx0XHRjb25zdCB0b3BCdG4gPSAkKCc8bGk+JykuYXR0cignaWQnLCAnV2lraXBsdXMtRWRpdC1Ub3BCdG4nKS5hdHRyKCdjbGFzcycsICdtdy1saXN0LWl0ZW0nKTtcblx0XHRjb25zdCB0b3BCdG5MaW5rID0gJCgnPGE+Jylcblx0XHRcdC5hdHRyKCdocmVmJywgJ2phdmFzY3JpcHQ6dm9pZCgwKScpXG5cdFx0XHQudGV4dChgJHtpMThuLnRyYW5zbGF0ZSgncXVpY2tlZGl0X3RvcGJ0bicpfWApO1xuXHRcdHRvcEJ0bi5hcHBlbmQodG9wQnRuTGluayk7XG5cdFx0c3dpdGNoIChDb25zdGFudHMuc2tpbikge1xuXHRcdFx0Y2FzZSAnbWluZXJ2YSc6XG5cdFx0XHRcdHRvcEJ0bi5jc3MoeydhbGlnbi1pdGVtcyc6ICdjZW50ZXInLCBkaXNwbGF5OiAnZmxleCd9KTtcblx0XHRcdFx0dG9wQnRuLmZpbmQoJ3NwYW4nKS5hZGRDbGFzcygncGFnZS1hY3Rpb25zLW1lbnVfX2xpc3QtaXRlbScpO1xuXHRcdFx0XHR0b3BCdG5cblx0XHRcdFx0XHQuZmluZCgnYScpXG5cdFx0XHRcdFx0LmFkZENsYXNzKFxuXHRcdFx0XHRcdFx0J213LXVpLWljb24gbXctdWktaWNvbi1lbGVtZW50IG13LXVpLWljb24td2lraW1lZGlhLWVkaXQtYmFzZTIwIG13LXVpLWljb24td2l0aC1sYWJlbC1kZXNrdG9wJ1xuXHRcdFx0XHRcdClcblx0XHRcdFx0XHQuY3NzKCd2ZXJ0aWNhbC1hbGlnbicsICdtaWRkbGUnKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgJ3ZlY3Rvci0yMDIyJzpcblx0XHRcdFx0dG9wQnRuLmFkZENsYXNzKCd2ZWN0b3ItdGFiLW5vaWNvbicpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAndmVjdG9yJzpcblx0XHRcdFx0dG9wQnRuLmFwcGVuZCgkKCc8c3Bhbj4nKS5hcHBlbmQodG9wQnRuTGluaykpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHR9XG5cdFx0JCh0b3BCdG4pLm9uKCdjbGljaycsICgpID0+IHtcblx0XHRcdG9uQ2xpY2soe1xuXHRcdFx0XHRzZWN0aW9uTnVtYmVyOiAtMSxcblx0XHRcdFx0dGFyZ2V0UGFnZU5hbWU6IENvbnN0YW50cy5jdXJyZW50UGFnZU5hbWUsXG5cdFx0XHR9KTtcblx0XHR9KTtcblx0XHRpZiAoJCgnI2NhLWVkaXQnKS5sZW5ndGggPiAwICYmICQoJyNXaWtpcGx1cy1FZGl0LVRvcEJ0bicpLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0Q29uc3RhbnRzLnNraW4gPT09ICdtaW5lcnZhJyA/ICQoJyNjYS1lZGl0JykucGFyZW50KCkuYWZ0ZXIodG9wQnRuKSA6ICQoJyNjYS1lZGl0JykuYWZ0ZXIodG9wQnRuKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICog5o+S5YWl5q616JC95b+r6YCf57yW6L6R5oyJ6ZKuXG5cdCAqIEluc2VydCBRdWlja0VkaXQgYnV0dG9ucyBmb3IgZWFjaCBzZWN0aW9uLlxuXHQgKlxuXHQgKiBAcGFyYW0gb25DbGlja1xuXHQgKi9cblx0aW5zZXJ0U2VjdGlvblF1aWNrRWRpdEVudHJpZXMob25DbGljayA9ICgpID0+IHt9KSB7XG5cdFx0Y29uc3Qgc2VjdGlvbkJ0biA9XG5cdFx0XHRDb25zdGFudHMuc2tpbiA9PT0gJ21pbmVydmEnXG5cdFx0XHRcdD8gJCgnPHNwYW4+JykuYXBwZW5kKFxuXHRcdFx0XHRcdFx0JCgnPGE+Jylcblx0XHRcdFx0XHRcdFx0LmFkZENsYXNzKFxuXHRcdFx0XHRcdFx0XHRcdCdXaWtpcGx1cy1FZGl0LVNlY3Rpb25CdG4gbXctdWktaWNvbiBtdy11aS1pY29uLWVsZW1lbnQgbXctdWktaWNvbi13aWtpbWVkaWEtZWRpdC1iYXNlMjAgZWRpdC1wYWdlIG13LXVpLWljb24tZmx1c2gtcmlnaHQnXG5cdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdFx0LmNzcygnbWFyZ2luLWxlZnQnLCAnMC43NWVtJylcblx0XHRcdFx0XHRcdFx0LmF0dHIoJ2hyZWYnLCAnamF2YXNjcmlwdDp2b2lkKDApJylcblx0XHRcdFx0XHRcdFx0LmF0dHIoJ3RpdGxlJywgaTE4bi50cmFuc2xhdGUoJ3F1aWNrZWRpdF9zZWN0aW9uYnRuJykpXG5cdFx0XHRcdFx0KVxuXHRcdFx0XHQ6ICQoJzxzcGFuPicpXG5cdFx0XHRcdFx0XHQuYXBwZW5kKCQoJzxzcGFuPicpLmFkZENsYXNzKCdtdy1lZGl0c2VjdGlvbi1kaXZpZGVyJykudGV4dCgnIHwgJykpXG5cdFx0XHRcdFx0XHQuYXBwZW5kKFxuXHRcdFx0XHRcdFx0XHQkKCc8YT4nKVxuXHRcdFx0XHRcdFx0XHRcdC5hZGRDbGFzcygnV2lraXBsdXMtRWRpdC1TZWN0aW9uQnRuJylcblx0XHRcdFx0XHRcdFx0XHQuYXR0cignaHJlZicsICdqYXZhc2NyaXB0OnZvaWQoMCknKVxuXHRcdFx0XHRcdFx0XHRcdC50ZXh0KGkxOG4udHJhbnNsYXRlKCdxdWlja2VkaXRfc2VjdGlvbmJ0bicpKVxuXHRcdFx0XHRcdFx0KTtcblx0XHQkKCcubXctZWRpdHNlY3Rpb24nKS5lYWNoKGZ1bmN0aW9uIChpKSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRjb25zdCBlZGl0VVJMID0gJCh0aGlzKS5maW5kKFwiYVtocmVmKj0nYWN0aW9uPWVkaXQnXVwiKS5maXJzdCgpLmF0dHIoJ2hyZWYnKTtcblx0XHRcdFx0Y29uc3Qgc2VjdGlvbk51bWJlciA9IGVkaXRVUkxcblx0XHRcdFx0XHQubWF0Y2goLyZbdmVdKnNlY3Rpb25cXD0oW14mXSspLylbMV0gLy8gYHZlYCBmb3IgdmlzdWFsIGVkaXRvclxuXHRcdFx0XHRcdC5yZXBsYWNlKC9ULS9naSwgJycpOyAvLyBlbWJlZGRlZCBwYWdlcyB1c2UgVC1zZXJpZXMgc2VjdGlvbiBudW1iZXJcblx0XHRcdFx0Y29uc3Qgc2VjdGlvblRhcmdldE5hbWUgPSBkZWNvZGVVUklDb21wb25lbnQoZWRpdFVSTC5tYXRjaCgvdGl0bGU9KC4rPykmLylbMV0pO1xuXHRcdFx0XHRjb25zdCBjbG9uZU5vZGUgPSAkKHRoaXMpLnByZXYoKS5jbG9uZSgpO1xuXHRcdFx0XHRjbG9uZU5vZGUuZmluZCgnLm13LWhlYWRsaW5lLW51bWJlcicpLnJlbW92ZSgpO1xuXHRcdFx0XHRjb25zdCBzZWN0aW9uTmFtZSA9IGNsb25lTm9kZS50ZXh0KCkudHJpbSgpO1xuXHRcdFx0XHRjb25zdCBfc2VjdGlvbkJ0biA9IHNlY3Rpb25CdG4uY2xvbmUoKTtcblx0XHRcdFx0X3NlY3Rpb25CdG4uZmluZCgnLldpa2lwbHVzLUVkaXQtU2VjdGlvbkJ0bicpLm9uKCdjbGljaycsICgpID0+IHtcblx0XHRcdFx0XHRvbkNsaWNrKHtcblx0XHRcdFx0XHRcdHNlY3Rpb25OdW1iZXIsXG5cdFx0XHRcdFx0XHRzZWN0aW9uTmFtZSxcblx0XHRcdFx0XHRcdHRhcmdldFBhZ2VOYW1lOiBzZWN0aW9uVGFyZ2V0TmFtZSxcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdENvbnN0YW50cy5za2luID09PSAnbWluZXJ2YSdcblx0XHRcdFx0XHQ/ICQodGhpcykuYXBwZW5kKF9zZWN0aW9uQnRuKVxuXHRcdFx0XHRcdDogJCh0aGlzKS5maW5kKCcubXctZWRpdHNlY3Rpb24tYnJhY2tldCcpLmxhc3QoKS5iZWZvcmUoX3NlY3Rpb25CdG4pO1xuXHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdExvZy5lcnJvcignZmFpbF90b19pbml0X3F1aWNrZWRpdCcpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIOaPkuWFpeS7u+aEj+mTvuaOpee8lui+keWFpeWPo1xuXHQgKlxuXHQgKiBAcGFyYW0geyp9IG9uQ2xpY2tcblx0ICovXG5cdGluc2VydExpbmtFZGl0RW50cmllcyhvbkNsaWNrID0gKCkgPT4ge30pIHtcblx0XHQkKCcjbXctY29udGVudC10ZXh0IGEuZXh0ZXJuYWwnKS5lYWNoKGZ1bmN0aW9uIChpKSB7XG5cdFx0XHRjb25zdCB1cmwgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKTtcblx0XHRcdGNvbnN0IHBhcmFtcyA9IHBhcnNlUXVlcnkodXJsKTtcblx0XHRcdGlmIChwYXJhbXMuYWN0aW9uID09PSAnZWRpdCcgJiYgcGFyYW1zLnRpdGxlICE9PSB1bmRlZmluZWQgJiYgcGFyYW1zLnNlY3Rpb24gIT09ICduZXcnKSB7XG5cdFx0XHRcdCQodGhpcykuYWZ0ZXIoXG5cdFx0XHRcdFx0JCgnPGE+Jylcblx0XHRcdFx0XHRcdC5hdHRyKHtcblx0XHRcdFx0XHRcdFx0aHJlZjogJ2phdmFzY3JpcHQ6dm9pZCgwKScsXG5cdFx0XHRcdFx0XHRcdGNsYXNzOiAnV2lraXBsdXMtRWRpdC1FdmVyeVdoZXJlQnRuJyxcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHQudGV4dChgKCR7aTE4bi50cmFuc2xhdGUoJ3F1aWNrZWRpdF9zZWN0aW9uYnRuJyl9KWApXG5cdFx0XHRcdFx0XHQub24oJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRvbkNsaWNrKHtcblx0XHRcdFx0XHRcdFx0XHR0YXJnZXRQYWdlTmFtZTogcGFyYW1zLnRpdGxlLFxuXHRcdFx0XHRcdFx0XHRcdHNlY3Rpb25OdW1iZXI6IHBhcmFtcy5zZWN0aW9uID8/IC0xLFxuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHRzaG93UXVpY2tFZGl0UGFuZWwoe1xuXHRcdHRpdGxlID0gJycsXG5cdFx0Y29udGVudCA9ICcnLFxuXHRcdHN1bW1hcnkgPSAnJyxcblx0XHRvbkJhY2sgPSAoKSA9PiB7fSxcblx0XHRvblBhcnNlID0gKCkgPT4ge30sXG5cdFx0b25FZGl0ID0gKCkgPT4ge30sXG5cdFx0ZXNjRXhpdCA9IGZhbHNlLFxuXHR9KSB7XG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0dGhpcy5zY3JvbGxUb3AgPSAkKGRvY3VtZW50KS5zY3JvbGxUb3AoKTtcblx0XHRpZiAodGhpcy5xdWlja0VkaXRQYW5lbFZpc2libGUpIHtcblx0XHRcdHRoaXMuaGlkZVF1aWNrRWRpdFBhbmVsKCk7XG5cdFx0fVxuXHRcdHRoaXMucXVpY2tFZGl0UGFuZWxWaXNpYmxlID0gdHJ1ZTtcblx0XHQvLyDpmLLmraLmiYvmu5HlhbPpl63pobXpnaJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcblx0XHRcdCdjbG9zZScsXG5cdFx0XHQod2luZG93Lm9uYmVmb3JldW5sb2FkID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRyZXR1cm4gYCR7aTE4bi50cmFuc2xhdGUoJ29uY2xvc2VfY29uZmlybScpfWA7XG5cdFx0XHR9KVxuXHRcdCk7XG5cdFx0Y29uc3QgaXNOZXdQYWdlID0gJCgnLm5vYXJ0aWNsZXRleHQnKS5sZW5ndGggPiAwO1xuXHRcdC8vIERPTSDlrprkuYnlvIDlp4tcblx0XHRjb25zdCBiYWNrQnRuID0gJCgnPHNwYW4+Jylcblx0XHRcdC5hdHRyKCdpZCcsICdXaWtpcGx1cy1RdWlja2VkaXQtQmFjaycpXG5cdFx0XHQuYWRkQ2xhc3MoJ1dpa2lwbHVzLUJ0bicpXG5cdFx0XHQudGV4dChgJHtpMThuLnRyYW5zbGF0ZSgnYmFjaycpfWApOyAvLyDov5Tlm57mjInpkq5cblx0XHRjb25zdCBqdW1wQnRuID0gJCgnPHNwYW4+Jylcblx0XHRcdC5hdHRyKCdpZCcsICdXaWtpcGx1cy1RdWlja2VkaXQtSnVtcCcpXG5cdFx0XHQuYWRkQ2xhc3MoJ1dpa2lwbHVzLUJ0bicpXG5cdFx0XHQuYXBwZW5kKFxuXHRcdFx0XHQkKCc8YT4nKVxuXHRcdFx0XHRcdC5hdHRyKCdocmVmJywgJyNXaWtpcGx1cy1RdWlja2VkaXQnKVxuXHRcdFx0XHRcdC50ZXh0KGAke2kxOG4udHJhbnNsYXRlKCdnb3RvX2VkaXRib3gnKX1gKVxuXHRcdFx0KTsgLy8g5Yiw57yW6L6R5qGGXG5cdFx0Y29uc3QgaW5wdXRCb3ggPSAkKCc8dGV4dGFyZWE+JykuYXR0cignaWQnLCAnV2lraXBsdXMtUXVpY2tlZGl0Jyk7IC8vIOS4u+e8lui+keahhlxuXHRcdGNvbnN0IHByZXZpZXdCb3ggPSAkKCc8ZGl2PicpLmF0dHIoJ2lkJywgJ1dpa2lwbHVzLVF1aWNrZWRpdC1QcmV2aWV3LU91dHB1dCcpOyAvLyDpooTop4jovpPlh7pcblx0XHRjb25zdCBzdW1tYXJ5Qm94ID0gJCgnPGlucHV0PicpXG5cdFx0XHQuYXR0cignaWQnLCAnV2lraXBsdXMtUXVpY2tlZGl0LVN1bW1hcnktSW5wdXQnKVxuXHRcdFx0LmF0dHIoJ3BsYWNlaG9sZGVyJywgYCR7aTE4bi50cmFuc2xhdGUoJ3N1bW1hcnlfcGxhY2Vob2xkJyl9YCk7IC8vIOe8lui+keaRmOimgei+k+WFpVxuXHRcdGNvbnN0IGVkaXRTdWJtaXRCdG4gPSAkKCc8YnV0dG9uPicpXG5cdFx0XHQuYXR0cignaWQnLCAnV2lraXBsdXMtUXVpY2tlZGl0LVN1Ym1pdCcpXG5cdFx0XHQudGV4dChgJHtpMThuLnRyYW5zbGF0ZShpc05ld1BhZ2UgPyAncHVibGlzaF9wYWdlJyA6ICdwdWJsaXNoX2NoYW5nZScpfShDdHJsK1MpYCk7IC8vIOaPkOS6pOaMiemSrlxuXHRcdGNvbnN0IHByZXZpZXdTdWJtaXRCdG4gPSAkKCc8YnV0dG9uPicpXG5cdFx0XHQuYXR0cignaWQnLCAnV2lraXBsdXMtUXVpY2tlZGl0LVByZXZpZXctU3VibWl0Jylcblx0XHRcdC50ZXh0KGAke2kxOG4udHJhbnNsYXRlKCdwcmV2aWV3Jyl9YCk7IC8vIOmihOiniOaMiemSrlxuXHRcdGNvbnN0IGlzTWlub3JFZGl0ID0gJCgnPGRpdj4nKVxuXHRcdFx0LmFwcGVuZCgkKCc8aW5wdXQ+JykuYXR0cih7dHlwZTogJ2NoZWNrYm94JywgaWQ6ICdXaWtpcGx1cy1RdWlja2VkaXQtTWlub3JFZGl0J30pKVxuXHRcdFx0LmFwcGVuZChcblx0XHRcdFx0JCgnPGxhYmVsPicpXG5cdFx0XHRcdFx0LmF0dHIoJ2ZvcicsICdXaWtpcGx1cy1RdWlja2VkaXQtTWlub3JFZGl0Jylcblx0XHRcdFx0XHQudGV4dChgJHtpMThuLnRyYW5zbGF0ZSgnbWFya19taW5vcmVkaXQnKX0oQ3RybCtTaGlmdCtTKWApXG5cdFx0XHQpXG5cdFx0XHQuY3NzKHttYXJnaW46ICc1cHggNXB4IDVweCAtM3B4JywgZGlzcGxheTogJ2lubGluZSd9KTtcblx0XHQvLyBET03lrprkuYnnu5PmnZ9cblx0XHRjb25zdCBlZGl0Qm9keSA9ICQoJzxkaXY+JykuYXBwZW5kKFxuXHRcdFx0YmFja0J0bixcblx0XHRcdGp1bXBCdG4sXG5cdFx0XHRwcmV2aWV3Qm94LFxuXHRcdFx0aW5wdXRCb3gsXG5cdFx0XHRzdW1tYXJ5Qm94LFxuXHRcdFx0JCgnPGJyPicpLFxuXHRcdFx0aXNNaW5vckVkaXQsXG5cdFx0XHRlZGl0U3VibWl0QnRuLFxuXHRcdFx0cHJldmlld1N1Ym1pdEJ0blxuXHRcdCk7XG5cdFx0dGhpcy5jcmVhdGVEaWFsb2dCb3godGl0bGUsIGVkaXRCb2R5LCAxMDAwLCAoKSA9PiB7XG5cdFx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0JykudmFsKGNvbnRlbnQpO1xuXHRcdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1TdW1tYXJ5LUlucHV0JykudmFsKHN1bW1hcnkpO1xuXHRcdH0pO1xuXHRcdC8vIEJhY2tcblx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LUJhY2snKS5vbignY2xpY2snLCBvbkJhY2spO1xuXHRcdC8vIFByZXZpZXdcblx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LVByZXZpZXctU3VibWl0Jykub24oJ2NsaWNrJywgYXN5bmMgZnVuY3Rpb24gKCkge1xuXHRcdFx0Y29uc3QgcHJlbG9hZEJhbm5lciA9ICQoJzxkaXY+Jylcblx0XHRcdFx0LmFkZENsYXNzKCdXaWtpcGx1cy1CYW5uZXInKVxuXHRcdFx0XHQudGV4dChgJHtpMThuLnRyYW5zbGF0ZSgnbG9hZGluZ19wcmV2aWV3Jyl9YCk7XG5cdFx0XHRjb25zdCB3aWtpVGV4dCA9ICQoJyNXaWtpcGx1cy1RdWlja2VkaXQnKS52YWwoKTtcblx0XHRcdCQodGhpcykuYXR0cignZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcblx0XHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtUHJldmlldy1PdXRwdXQnKS5mYWRlT3V0KDEwMCwgKCkgPT4ge1xuXHRcdFx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LVByZXZpZXctT3V0cHV0JykuaHRtbCgnJykuYXBwZW5kKHByZWxvYWRCYW5uZXIpO1xuXHRcdFx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LVByZXZpZXctT3V0cHV0JykuZmFkZUluKDEwMCk7XG5cdFx0XHR9KTtcblx0XHRcdCQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtzY3JvbGxUb3A6IHNlbGYuc2Nyb2xsVG9wfSwgMjAwKTsgLy/ov5Tlm57pobbpg6hcblx0XHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IG9uUGFyc2Uod2lraVRleHQpO1xuXHRcdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1QcmV2aWV3LU91dHB1dCcpLmZhZGVPdXQoJzEwMCcsICgpID0+IHtcblx0XHRcdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1QcmV2aWV3LU91dHB1dCcpLmh0bWwoYDxocj48ZGl2IGNsYXNzPVwibXctYm9keS1jb250ZW50XCI+JHtyZXN1bHR9PC9kaXY+PGhyPmApO1xuXHRcdFx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LVByZXZpZXctT3V0cHV0JykuZmFkZUluKCcxMDAnKTtcblx0XHRcdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1QcmV2aWV3LVN1Ym1pdCcpLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdFx0Ly8gRWRpdFxuXHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtU3VibWl0Jykub24oJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuXHRcdFx0Y29uc3QgdGltZXIgPSBEYXRlLm5vdygpO1xuXHRcdFx0Y29uc3QgZWRpdEJhbm5lciA9ICQoJzxkaXY+Jylcblx0XHRcdFx0LmFkZENsYXNzKCdXaWtpcGx1cy1CYW5uZXInKVxuXHRcdFx0XHQudGV4dChgJHtpMThuLnRyYW5zbGF0ZSgnc3VibWl0dGluZ19lZGl0Jyl9YCk7XG5cdFx0XHRjb25zdCBwYXlsb2FkID0ge1xuXHRcdFx0XHRzdW1tYXJ5OiAkKCcjV2lraXBsdXMtUXVpY2tlZGl0LVN1bW1hcnktSW5wdXQnKS52YWwoKSxcblx0XHRcdFx0Y29udGVudDogJCgnI1dpa2lwbHVzLVF1aWNrZWRpdCcpLnZhbCgpLFxuXHRcdFx0XHRpc01pbm9yRWRpdDogJCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1NaW5vckVkaXQnKS5pcygnOmNoZWNrZWQnKSxcblx0XHRcdH07XG5cdFx0XHQvLyDlh4blpIfnvJbovpEg56aB55So5oyJ6ZKuIOaJp+ihjOWKqOeUu1xuXHRcdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1TdWJtaXQsI1dpa2lwbHVzLVF1aWNrZWRpdCwjV2lraXBsdXMtUXVpY2tlZGl0LVByZXZpZXctU3VibWl0JykuYXR0cihcblx0XHRcdFx0J2Rpc2FibGVkJyxcblx0XHRcdFx0J2Rpc2FibGVkJ1xuXHRcdFx0KTtcblx0XHRcdCQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtzY3JvbGxUb3A6IHNlbGYuc2Nyb2xsVG9wfSwgMjAwKTtcblx0XHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtUHJldmlldy1PdXRwdXQnKS5mYWRlT3V0KDEwMCwgKCkgPT4ge1xuXHRcdFx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LVByZXZpZXctT3V0cHV0JykuaHRtbCgnJykuYXBwZW5kKGVkaXRCYW5uZXIpO1xuXHRcdFx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LVByZXZpZXctT3V0cHV0JykuZmFkZUluKDEwMCk7XG5cdFx0XHR9KTtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGF3YWl0IG9uRWRpdChwYXlsb2FkKTtcblx0XHRcdFx0Y29uc3QgdXNlVGltZSA9IERhdGUubm93KCkgLSB0aW1lcjtcblx0XHRcdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1QcmV2aWV3LU91dHB1dCcpXG5cdFx0XHRcdFx0LmZpbmQoJy5XaWtpcGx1cy1CYW5uZXInKVxuXHRcdFx0XHRcdC5jc3MoJ2JhY2tncm91bmQnLCAncmdiYSg2LCAyMzksIDkyLCAwLjQ0KScpO1xuXHRcdFx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LVByZXZpZXctT3V0cHV0Jylcblx0XHRcdFx0XHQuZmluZCgnLldpa2lwbHVzLUJhbm5lcicpXG5cdFx0XHRcdFx0LnRleHQoYCR7aTE4bi50cmFuc2xhdGUoJ2VkaXRfc3VjY2VzcycsIFt1c2VUaW1lLnRvU3RyaW5nKCldKX1gKTtcblx0XHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2Nsb3NlJywgKHdpbmRvdy5vbmJlZm9yZXVubG9hZCA9IHVuZGVmaW5lZCkpOyAvL+WPlua2iOmhtemdouWFs+mXreehruiupFxuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHRsb2NhdGlvbi5yZWxvYWQoKTtcblx0XHRcdFx0fSwgNTAwKTtcblx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcblx0XHRcdFx0JCgnLldpa2lwbHVzLUJhbm5lcicpLmNzcygnYmFja2dyb3VuZCcsICdyZ2JhKDIxOCwgMTQyLCAxNjcsIDAuNjUpJyk7XG5cdFx0XHRcdCQoJy5XaWtpcGx1cy1CYW5uZXInKS5odG1sKGVycm9yLm1lc3NhZ2UpO1xuXHRcdFx0fSBmaW5hbGx5IHtcblx0XHRcdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1TdWJtaXQsI1dpa2lwbHVzLVF1aWNrZWRpdCwjV2lraXBsdXMtUXVpY2tlZGl0LVByZXZpZXctU3VibWl0JykucHJvcChcblx0XHRcdFx0XHQnZGlzYWJsZWQnLFxuXHRcdFx0XHRcdGZhbHNlXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0Ly9DdHJsK1Pmj5DkuqQgQ3RybCtTaGlmdCtT5bCP57yW6L6RXG5cdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdCwjV2lraXBsdXMtUXVpY2tlZGl0LVN1bW1hcnktSW5wdXQsI1dpa2lwbHVzLVF1aWNrZWRpdC1NaW5vckVkaXQnKS5vbigna2V5ZG93bicsIChlKSA9PiB7XG5cdFx0XHRpZiAoZS5jdHJsS2V5ICYmIGUud2hpY2ggPT09IDgzKSB7XG5cdFx0XHRcdGlmIChlLnNoaWZ0S2V5KSB7XG5cdFx0XHRcdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1NaW5vckVkaXQnKS50cmlnZ2VyKCdjbGljaycpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtU3VibWl0JykudHJpZ2dlcignY2xpY2snKTtcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdC8vRXNj6YCA5Ye6XG5cdFx0aWYgKGVzY0V4aXQpIHtcblx0XHRcdCQoZG9jdW1lbnQpLm9uKCdrZXlkb3duJywgKGUpID0+IHtcblx0XHRcdFx0aWYgKGUud2hpY2ggPT09IDI3KSB7XG5cdFx0XHRcdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1CYWNrJykudHJpZ2dlcignY2xpY2snKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0aGlkZVF1aWNrRWRpdFBhbmVsKCkge1xuXHRcdHRoaXMucXVpY2tFZGl0UGFuZWxWaXNpYmxlID0gZmFsc2U7XG5cdFx0JCgnLldpa2lwbHVzLUludGVyQm94JykuZmFkZU91dCgnZmFzdCcsIGZ1bmN0aW9uICgpIHtcblx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbG9zZScsICh3aW5kb3cub25iZWZvcmV1bmxvYWQgPSB1bmRlZmluZWQpKTsgLy/lj5bmtojpobXpnaLlhbPpl63noa7orqRcblx0XHRcdCQodGhpcykucmVtb3ZlKCk7XG5cdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICog5pi+56S65b+r6YCf6YeN5a6a5ZCR5by556qXXG5cdCAqXG5cdCAqIEBwYXJhbSByb290MFxuXHQgKiBAcGFyYW0gcm9vdDAub25FZGl0XG5cdCAqIEBwYXJhbSByb290MC5vblN1Y2Nlc3Ncblx0ICovXG5cdHNob3dTaW1wbGVSZWRpcmVjdFBhbmVsKHtvbkVkaXQgPSAoKSA9PiB7fSwgb25TdWNjZXNzID0gKCkgPT4ge319ID0ge30pIHtcblx0XHRjb25zdCBpbnB1dCA9ICQoJzxpbnB1dD4nKS5hZGRDbGFzcygnV2lraXBsdXMtSW50ZXJCb3gtSW5wdXQnKS5hdHRyKCdpZCcsICdXaWtpcGx1cy1TUi1UaXRsZScpO1xuXHRcdC8vIFdvcmthcm91bmQgYXMgdGhpcyBmdW5jdGlvbiBpcyBkb3duc3RyZWFtIG9ubHlcblx0XHRjb25zdCB0ZW1wbGF0ZVRpdGxlID0gJCgnPHA+JykudGV4dCgn5Zyo5LiL5pa56L6T5YWl6ZmE5Yqg5qih5p2/77yI5Y+v6YCJ77yM5Y+q5a+5d2lraXRleHTlhoXlrrnmqKHlnovnlJ/mlYjvvIknKTtcblx0XHRjb25zdCB0ZW1wbGF0ZSA9ICQoJzxpbnB1dD4nKS5hZGRDbGFzcygnV2lraXBsdXMtSW50ZXJCb3gtSW5wdXQnKS5hdHRyKCdpZCcsICdXaWtpcGx1cy1TUi1UZW1wbGF0ZScpO1xuXHRcdGNvbnN0IHN1bW1hcnlJbnB1dFRpdGxlID0gJCgnPHA+JykudGV4dChpMThuLnRyYW5zbGF0ZSgncmVkaXJlY3Rfc3VtbWFyeV9kZXNjJykpO1xuXHRcdGNvbnN0IHN1bW1hcnlJbnB1dCA9ICQoJzxpbnB1dD4nKS5hZGRDbGFzcygnV2lraXBsdXMtSW50ZXJCb3gtSW5wdXQnKS5hdHRyKCdpZCcsICdXaWtpcGx1cy1TUi1TdW1tYXJ5Jyk7XG5cdFx0Y29uc3QgYXBwbHlCdG4gPSAkKCc8ZGl2PicpXG5cdFx0XHQuYWRkQ2xhc3MoJ1dpa2lwbHVzLUludGVyQm94LUJ0bicpXG5cdFx0XHQuYXR0cignaWQnLCAnV2lraXBsdXMtU1ItQXBwbHknKVxuXHRcdFx0LnRleHQoaTE4bi50cmFuc2xhdGUoJ3N1Ym1pdCcpKTtcblx0XHRjb25zdCBjYW5jZWxCdG4gPSAkKCc8ZGl2PicpXG5cdFx0XHQuYWRkQ2xhc3MoJ1dpa2lwbHVzLUludGVyQm94LUJ0bicpXG5cdFx0XHQuYXR0cignaWQnLCAnV2lraXBsdXMtU1ItQ2FuY2VsJylcblx0XHRcdC50ZXh0KGkxOG4udHJhbnNsYXRlKCdjYW5jZWwnKSk7XG5cdFx0Y29uc3QgY29udGludWVCdG4gPSAkKCc8ZGl2PicpXG5cdFx0XHQuYWRkQ2xhc3MoJ1dpa2lwbHVzLUludGVyQm94LUJ0bicpXG5cdFx0XHQuYXR0cignaWQnLCAnV2lraXBsdXMtU1ItQ29udGludWUnKVxuXHRcdFx0LnRleHQoaTE4bi50cmFuc2xhdGUoJ2NvbnRpbnVlJykpO1xuXHRcdGNvbnN0IGNvbnRlbnQgPSAkKCc8ZGl2PicpXG5cdFx0XHQuYXBwZW5kKGlucHV0KVxuXHRcdFx0LmFwcGVuZChzdW1tYXJ5SW5wdXRUaXRsZSlcblx0XHRcdC5hcHBlbmQoc3VtbWFyeUlucHV0KVxuXHRcdFx0LmFwcGVuZCgkKCc8aHI+JykpXG5cdFx0XHQuYXBwZW5kKGFwcGx5QnRuKVxuXHRcdFx0LmFwcGVuZChjYW5jZWxCdG4pOyAvL+aLvOaOpVxuXHRcdGNvbnN0IGRpYWxvZyA9IHRoaXMuY3JlYXRlRGlhbG9nQm94KGkxOG4udHJhbnNsYXRlKCdyZWRpcmVjdF9kZXNjJyksIGNvbnRlbnQsIDYwMCk7XG5cdFx0YXBwbHlCdG4ub24oJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuXHRcdFx0Y29uc3QgdGl0bGUgPSAkKCcjV2lraXBsdXMtU1ItVGl0bGUnKS52YWwoKTtcblx0XHRcdGNvbnN0IHRlbXBsYXRlID0gJCgnI1dpa2lwbHVzLVNSLVRlbXBsYXRlJykudmFsKCk7XG5cdFx0XHRjb25zdCBzdW1tYXJ5ID0gJCgnI1dpa2lwbHVzLVNSLVN1bW1hcnknKS52YWwoKTtcblx0XHRcdCQoJy5XaWtpcGx1cy1JbnRlckJveC1Db250ZW50JykuaHRtbChcblx0XHRcdFx0YDxkaXYgY2xhc3M9XCJXaWtpcGx1cy1CYW5uZXJcIj4ke2kxOG4udHJhbnNsYXRlKCdzdWJtaXR0aW5nX2VkaXQnKX08L2Rpdj5gXG5cdFx0XHQpO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0YXdhaXQgb25FZGl0KHtcblx0XHRcdFx0XHR0aXRsZSxcblx0XHRcdFx0XHRzdW1tYXJ5LFxuXHRcdFx0XHRcdGZvcmNlT3ZlcndyaXRlOiBmYWxzZSxcblx0XHRcdFx0fSk7XG5cdFx0XHRcdCQoJy5XaWtpcGx1cy1CYW5uZXInKS50ZXh0KGkxOG4udHJhbnNsYXRlKCdyZWRpcmVjdF9zYXZlZCcpKTtcblx0XHRcdFx0dGhpcy5oaWRlU2ltcGxlUmVkaXJlY3RQYW5lbChkaWFsb2cpO1xuXHRcdFx0XHRvblN1Y2Nlc3Moe3RpdGxlfSk7XG5cdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHQkKCcuV2lraXBsdXMtQmFubmVyJykuY3NzKCdiYWNrZ3JvdW5kJywgJ3JnYmEoMjE4LCAxNDIsIDE2NywgMC42NSknKTtcblx0XHRcdFx0JCgnLldpa2lwbHVzLUJhbm5lcicpLnRleHQoZXJyb3IubWVzc2FnZSk7XG5cdFx0XHRcdGlmIChlcnJvci5jb2RlID09PSAnYXJ0aWNsZWV4aXN0cycpIHtcblx0XHRcdFx0XHQkKCcuV2lraXBsdXMtSW50ZXJCb3gtQ29udGVudCcpLmFwcGVuZCgkKCc8aHI+JykpLmFwcGVuZChjb250aW51ZUJ0bikuYXBwZW5kKGNhbmNlbEJ0bik7XG5cdFx0XHRcdFx0Y2FuY2VsQnRuLm9uKCdjbGljaycsICgpID0+IHtcblx0XHRcdFx0XHRcdHRoaXMuaGlkZVNpbXBsZVJlZGlyZWN0UGFuZWwoZGlhbG9nKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRjb250aW51ZUJ0bi5vbignY2xpY2snLCBhc3luYyAoKSA9PiB7XG5cdFx0XHRcdFx0XHQkKCcuV2lraXBsdXMtSW50ZXJCb3gtQ29udGVudCcpLmh0bWwoXG5cdFx0XHRcdFx0XHRcdGA8ZGl2IGNsYXNzPVwiV2lraXBsdXMtQmFubmVyXCI+JHtpMThuLnRyYW5zbGF0ZSgnc3VibWl0dGluZ19lZGl0Jyl9PC9kaXY+YFxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRcdGF3YWl0IG9uRWRpdCh7XG5cdFx0XHRcdFx0XHRcdFx0dGl0bGUsXG5cdFx0XHRcdFx0XHRcdFx0c3VtbWFyeSxcblx0XHRcdFx0XHRcdFx0XHRmb3JjZU92ZXJ3cml0ZTogdHJ1ZSxcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdCQoJy5XaWtpcGx1cy1CYW5uZXInKS50ZXh0KGkxOG4udHJhbnNsYXRlKCdyZWRpcmVjdF9zYXZlZCcpKTtcblx0XHRcdFx0XHRcdFx0dGhpcy5oaWRlU2ltcGxlUmVkaXJlY3RQYW5lbChkaWFsb2cpO1xuXHRcdFx0XHRcdFx0XHRvblN1Y2Nlc3Moe3RpdGxlfSk7XG5cdFx0XHRcdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRcdFx0XHQkKCcuV2lraXBsdXMtQmFubmVyJykuY3NzKCdiYWNrZ3JvdW5kJywgJ3JnYmEoMjE4LCAxNDIsIDE2NywgMC42NSknKTtcblx0XHRcdFx0XHRcdFx0JCgnLldpa2lwbHVzLUJhbm5lcicpLnRleHQoZXJyb3IubWVzc2FnZSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblx0XHRjYW5jZWxCdG4ub24oJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0dGhpcy5oaWRlU2ltcGxlUmVkaXJlY3RQYW5lbChkaWFsb2cpO1xuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIOmakOiXj+W/q+mAn+mHjeWumuWQkeW8ueeql1xuXHQgKlxuXHQgKiBAcGFyYW0geyp9IGRpYWxvZ1xuXHQgKi9cblx0aGlkZVNpbXBsZVJlZGlyZWN0UGFuZWwoZGlhbG9nID0gJCgnYm9keScpKSB7XG5cdFx0ZGlhbG9nLmZpbmQoJy5XaWtpcGx1cy1JbnRlckJveC1DbG9zZScpLnRyaWdnZXIoJ2NsaWNrJyk7XG5cdH1cblxuXHRzaG93U2V0dGluZ3NQYW5lbCh7b25TdWJtaXQgPSAoKSA9PiB7fX0gPSB7fSkge1xuXHRcdGNvbnN0IGlucHV0ID0gJCgnPHRleHRhcmVhPicpLmF0dHIoJ2lkJywgJ1dpa2lwbHVzLVNldHRpbmctSW5wdXQnKS5hdHRyKCdyb3dzJywgJzEwJyk7XG5cdFx0Y29uc3QgYXBwbHlCdG4gPSAkKCc8ZGl2PicpXG5cdFx0XHQuYWRkQ2xhc3MoJ1dpa2lwbHVzLUludGVyQm94LUJ0bicpXG5cdFx0XHQuYXR0cignaWQnLCAnV2lraXBsdXMtU2V0dGluZy1BcHBseScpXG5cdFx0XHQudGV4dChpMThuLnRyYW5zbGF0ZSgnc3VibWl0JykpO1xuXHRcdGNvbnN0IGNhbmNlbEJ0biA9ICQoJzxkaXY+Jylcblx0XHRcdC5hZGRDbGFzcygnV2lraXBsdXMtSW50ZXJCb3gtQnRuJylcblx0XHRcdC5hdHRyKCdpZCcsICdXaWtpcGx1cy1TZXR0aW5nLUNhbmNlbCcpXG5cdFx0XHQudGV4dChpMThuLnRyYW5zbGF0ZSgnY2FuY2VsJykpO1xuXHRcdGNvbnN0IGNvbnRlbnQgPSAkKCc8ZGl2PicpLmFwcGVuZChpbnB1dCkuYXBwZW5kKCQoJzxocj4nKSkuYXBwZW5kKGFwcGx5QnRuKS5hcHBlbmQoY2FuY2VsQnRuKTsgLy/mi7zmjqVcblxuXHRcdGNvbnN0IGRpYWxvZyA9IHRoaXMuY3JlYXRlRGlhbG9nQm94KGkxOG4udHJhbnNsYXRlKCd3aWtpcGx1c19zZXR0aW5nc19kZXNjJyksIGNvbnRlbnQsIDYwMCwgKCkgPT4ge1xuXHRcdFx0aWYgKGxvY2FsU3RvcmFnZS5XaWtpcGx1c19TZXR0aW5ncykge1xuXHRcdFx0XHQkKCcjV2lraXBsdXMtU2V0dGluZy1JbnB1dCcpLnZhbChsb2NhbFN0b3JhZ2UuV2lraXBsdXNfU2V0dGluZ3MpO1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdGNvbnN0IHNldHRpbmdzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuV2lraXBsdXNfU2V0dGluZ3MpO1xuXHRcdFx0XHRcdCQoJyNXaWtpcGx1cy1TZXR0aW5nLUlucHV0JykudmFsKEpTT04uc3RyaW5naWZ5KHNldHRpbmdzLCBudWxsLCAyKSk7XG5cdFx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRcdC8vIGlnbm9yZVxuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQkKCcjV2lraXBsdXMtU2V0dGluZy1JbnB1dCcpLmF0dHIoJ3BsYWNlaG9sZGVyJywgaTE4bi50cmFuc2xhdGUoJ3dpa2lwbHVzX3NldHRpbmdzX3BsYWNlaG9sZGVyJykpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdGFwcGx5QnRuLm9uKCdjbGljaycsIGFzeW5jICgpID0+IHtcblx0XHRcdGNvbnN0IHNhdmVkQmFubmVyID0gJCgnPGRpdj4nKS5hZGRDbGFzcygnV2lraXBsdXMtQmFubmVyJykudGV4dChpMThuLnRyYW5zbGF0ZSgnd2lraXBsdXNfc2V0dGluZ3Nfc2F2ZWQnKSk7XG5cdFx0XHRjb25zdCBzZXR0aW5ncyA9ICQoJyNXaWtpcGx1cy1TZXR0aW5nLUlucHV0JykudmFsKCk7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRvblN1Ym1pdCh7c2V0dGluZ3N9KTtcblx0XHRcdFx0JCgnLldpa2lwbHVzLUludGVyQm94LUNvbnRlbnQnKS5odG1sKCcnKS5hcHBlbmQoc2F2ZWRCYW5uZXIpO1xuXHRcdFx0XHRhd2FpdCBzbGVlcCgxNTAwKTtcblx0XHRcdFx0dGhpcy5oaWRlU2V0dGluZ3NQYW5lbChkaWFsb2cpO1xuXHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdE5vdGlmaWNhdGlvbi5lcnJvcihpMThuLnRyYW5zbGF0ZSgnd2lraXBsdXNfc2V0dGluZ3NfZ3JhbW1hcl9lcnJvcicpKTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRjYW5jZWxCdG4ub24oJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0dGhpcy5oaWRlU2V0dGluZ3NQYW5lbChkaWFsb2cpO1xuXHRcdH0pO1xuXHR9XG5cblx0aGlkZVNldHRpbmdzUGFuZWwoZGlhbG9nID0gJCgnYm9keScpKSB7XG5cdFx0ZGlhbG9nLmZpbmQoJy5XaWtpcGx1cy1JbnRlckJveC1DbG9zZScpLnRyaWdnZXIoJ2NsaWNrJyk7XG5cdH1cblxuXHRiaW5kUHJlbG9hZEV2ZW50cyhvblByZWxvYWQpIHtcblx0XHQkKCcjdG9jJylcblx0XHRcdC5jaGlsZHJlbigndWwnKVxuXHRcdFx0LmZpbmQoJ2EnKVxuXHRcdFx0LmVhY2goZnVuY3Rpb24gKGkpIHtcblx0XHRcdFx0JCh0aGlzKS5vbignbW91c2VvdmVyJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdCQodGhpcykub2ZmKCdtb3VzZW92ZXInKTtcblx0XHRcdFx0XHRvblByZWxvYWQoe1xuXHRcdFx0XHRcdFx0c2VjdGlvbk51bWJlcjogaSArIDEsXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFVJKCk7XG4iLCAiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuLy8gQHRzLW5vY2hlY2tcbmNsYXNzIFNldHRpbmdzIHtcblx0Z2V0U2V0dGluZyhrZXksIG9iamVjdCA9IHt9KSB7XG5cdFx0Y29uc3QgdyA9IG9iamVjdDtcblx0XHRsZXQgc2V0dGluZ3M7XG5cdFx0dHJ5IHtcblx0XHRcdHNldHRpbmdzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2VbJ1dpa2lwbHVzX1NldHRpbmdzJ10pO1xuXHRcdH0gY2F0Y2gge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgY3VzdG9tU2V0dGluZ0Z1bmN0aW9uID0gbmV3IEZ1bmN0aW9uKGByZXR1cm4gJHtzZXR0aW5nc1trZXldfWApO1xuXHRcdFx0aWYgKHR5cGVvZiBjdXN0b21TZXR0aW5nRnVuY3Rpb24gPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRpZiAoY3VzdG9tU2V0dGluZ0Z1bmN0aW9uKCkodykgPT09IHRydWUpIHtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGN1c3RvbVNldHRpbmdGdW5jdGlvbigpKHcpIHx8IHNldHRpbmdzW2tleV07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0XHRyZXR1cm4gc2V0dGluZ3Nba2V5XTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIHNldHRpbmdzW2tleV07XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRsZXQgcmVzdWx0ID0gc2V0dGluZ3Nba2V5XTtcblx0XHRcdFx0Zm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMob2JqZWN0KSkge1xuXHRcdFx0XHRcdHJlc3VsdCA9IHJlc3VsdC5yZXBsYWNlKGBcXCR7JHtrZXl9fWAsIG9iamVjdFtrZXldKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdFx0fSBjYXRjaCB7fVxuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgU2V0dGluZ3MoKTtcbiIsICIvKiEgV2lraXBsdXMgLSA0LjAuMTEgfCBFcmlkYW51cyBTb3JhICjlprnnqbrphbEpIHwgQ0MtQlktU0EtNC4wIDxodHRwczovL3F3YmsuY2MvSDpDQy1CWS1TQS00LjA+ICovXG4jV2lraXBsdXMtUXVpY2tlZGl0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDUwMHB4O1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG59XG4jV2lraXBsdXMtUXVpY2tlZGl0LVN1bW1hcnktSW5wdXQge1xuICB3aWR0aDogNTAlO1xufVxuLnNraW4tdmVjdG9yICNXaWtpcGx1cy1RdWlja2VkaXQtU3VtbWFyeS1JbnB1dCB7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cbiNXaWtpcGx1cy1RdWlja2VkaXQtUHJldmlldy1TdWJtaXQsXG4jV2lraXBsdXMtUXVpY2tlZGl0LVN1Ym1pdCB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgcGFkZGluZzogcmV2ZXJ0O1xufVxuI1dpa2lwbHVzLVF1aWNrZWRpdC1QcmV2aWV3LU91dHB1dCB7XG4gIGNsZWFyOiBib3RoO1xuICBtYXJnaW46IDVweCAwO1xufVxuLldpa2lwbHVzLUJ0biB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbjogM3B4IDVweDtcbiAgcGFkZGluZzogM3B4IDFlbTtcbiAgd2lkdGg6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDJweCAjYWFhO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5XaWtpcGx1cy1CdG4gYSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6ICMwMDA7XG4gIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uV2lraXBsdXMtSW50ZXJCb3gge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjAlO1xuICB6LWluZGV4OiAyMDA7XG4gIHBhZGRpbmc6IDIwcHggMTBweDtcbiAgd2lkdGg6IDYwMHB4O1xuICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNjEsIDE1NCwgMjIwLCAwLjQxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZjlmNztcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cbi5XaWtpcGx1cy1JbnRlckJveC1IZWFkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMDtcbiAgdG9wOiAtOHB4O1xuICBtYXJnaW46IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzZjZjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xuICBjdXJzb3I6IG1vdmU7XG59XG4uV2lraXBsdXMtSW50ZXJCb3gtSW5wdXQge1xuICBtYXJnaW46IDIwcHg7XG4gIHdpZHRoOiA2MCU7XG59XG4uV2lraXBsdXMtSW50ZXJCb3gtQnRuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbjogYXV0byAzcHg7XG4gIHBhZGRpbmc6IDZweCAxMnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGVkZWRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5XaWtpcGx1cy1JbnRlckJveC1CdG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThlOGU4O1xufVxuLldpa2lwbHVzLUludGVyQm94LUNsb3NlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW46IDNweCA3cHg7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uV2lraXBsdXMtSW50ZXJCb3ggbGFiZWwge1xuICBmb250LXNpemU6IDAuOTVyZW07XG59XG4uV2lraXBsdXMtSW50ZXJCb3ggdGFibGUuZGlmZiB7XG4gIHRhYmxlLWxheW91dDogYXV0bztcbn1cbi5XaWtpcGx1cy1JbnRlckJveCB0YWJsZS5kaWZmIC5kaWZmLWFkZGVkbGluZSxcbi5XaWtpcGx1cy1JbnRlckJveCB0YWJsZS5kaWZmIC5kaWZmLWRlbGV0ZWRsaW5lLFxuLldpa2lwbHVzLUludGVyQm94IHRhYmxlLmRpZmYgLmRpZmYtbGluZW5vIHtcbiAgd2lkdGg6IDUwJTtcbn1cbi5XaWtpcGx1cy1JbnRlckJveCB0YWJsZS5kaWZmIC5kaWZmLW1hcmtlciB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uV2lraXBsdXMtQmFubmVyIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAxMHB4IDVweDtcbiAgbWluLWhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgxOTMsIDIyMiwgMjE0LCAwLjUxKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDJyZW07XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udHMtc2Fucywgc2Fucy1zZXJpZik7XG59XG4uTW9lTm90aWZpY2F0aW9uLW5vdGljZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogbm9uZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luOiAzcHggNXB4O1xuICBwYWRkaW5nOiAwIDVweDtcbiAgd2lkdGg6IGF1dG87XG4gIGJveC1zaGFkb3c6IDAgM3B4IDNweCAjYWFhO1xuICBmb250LXNpemU6IDFyZW07XG59XG4uTW9lTm90aWZpY2F0aW9uLW5vdGljZSBzcGFuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDNweCBhdXRvIDNweCAzcHg7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udHMtc2Fucywgc2Fucy1zZXJpZik7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG4uTW9lTm90aWZpY2F0aW9uLW5vdGljZS1zdWNjZXNzIHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjOGRkYTkzO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzcHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOGEwMDtcbn1cbi5Nb2VOb3RpZmljYXRpb24tbm90aWNlLXdhcm5pbmcge1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNmZmRmMDA7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDNweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRiZDAwO1xufVxuLk1vZU5vdGlmaWNhdGlvbi1ub3RpY2Utd2FybmluZyBzcGFuIHtcbiAgY29sb3I6ICMwMDA7XG59XG4uTW9lTm90aWZpY2F0aW9uLW5vdGljZS1lcnJvciB7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2U3MTcxNztcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogM3B4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiMDBlMDY7XG59XG4jTW9lTm90aWZpY2F0aW9uIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDMwcHg7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDcxMztcbiAgbWluLXdpZHRoOiAyMCU7XG59XG4uY2xpZW50LWRhcmttb2RlICNXaWtpcGx1cy1RdWlja2VkaXQtU3VtbWFyeS1JbnB1dCxcbmh0bWwuc2tpbi10aGVtZS1jbGllbnRwcmVmLW5pZ2h0ICNXaWtpcGx1cy1RdWlja2VkaXQtU3VtbWFyeS1JbnB1dCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMDIxMjI7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3ItYmFzZSwgIzIwMjEyMik7XG4gIGNvbG9yOiAjZWFlY2YwO1xuICBjb2xvcjogdmFyKC0tY29sb3ItYmFzZSwgI2VhZWNmMCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNhMmE5YjE7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvci1iYXNlLCAjYTJhOWIxKTtcbn1cbi5jbGllbnQtZGFya21vZGUgLldpa2lwbHVzLUludGVyQm94LFxuaHRtbC5za2luLXRoZW1lLWNsaWVudHByZWYtbmlnaHQgLldpa2lwbHVzLUludGVyQm94IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjEyMjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvci1pbnRlcmFjdGl2ZS1zdWJ0bGUsICMyMDIxMjIpO1xuICBib3JkZXItY29sb3I6ICNhMmE5YjE7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYm9yZGVyLWNvbG9yLWJhc2UsICNhMmE5YjEpO1xuICBjb2xvcjogI2VhZWNmMDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWJhc2UsICNlYWVjZjApO1xuICAvKiDnoa7kv53pk77mjqXpopzoibLlj6/op4EgKi9cbn1cbi5jbGllbnQtZGFya21vZGUgLldpa2lwbHVzLUludGVyQm94LUhlYWRlcixcbmh0bWwuc2tpbi10aGVtZS1jbGllbnRwcmVmLW5pZ2h0IC5XaWtpcGx1cy1JbnRlckJveC1IZWFkZXIge1xuICBib3JkZXItYm90dG9tLWNvbG9yOiAjMzZjO1xuICBib3JkZXItYm90dG9tLWNvbG9yOiB2YXIoLS1jb2xvci1wcm9ncmVzc2l2ZSwgIzM2Yyk7XG59XG4uY2xpZW50LWRhcmttb2RlIC5XaWtpcGx1cy1JbnRlckJveC1CdG4sXG5odG1sLnNraW4tdGhlbWUtY2xpZW50cHJlZi1uaWdodCAuV2lraXBsdXMtSW50ZXJCb3gtQnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjEyMjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvci1pbnRlcmFjdGl2ZSwgIzIwMjEyMik7XG4gIGJvcmRlci1jb2xvcjogI2EyYTliMTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ib3JkZXItY29sb3ItYmFzZSwgI2EyYTliMSk7XG4gIGNvbG9yOiAjZWFlY2YwO1xuICBjb2xvcjogdmFyKC0tY29sb3ItYmFzZSwgI2VhZWNmMCk7XG59XG4uY2xpZW50LWRhcmttb2RlIC5XaWtpcGx1cy1JbnRlckJveC1CdG46aG92ZXIsXG5odG1sLnNraW4tdGhlbWUtY2xpZW50cHJlZi1uaWdodCAuV2lraXBsdXMtSW50ZXJCb3gtQnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRkNGQ0ZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvci1pbnRlcmFjdGl2ZS0taG92ZXIsICM0ZDRkNGQpO1xufVxuLmNsaWVudC1kYXJrbW9kZSAuV2lraXBsdXMtSW50ZXJCb3ggdGV4dGFyZWEsXG5odG1sLnNraW4tdGhlbWUtY2xpZW50cHJlZi1uaWdodCAuV2lraXBsdXMtSW50ZXJCb3ggdGV4dGFyZWEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMTIyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yLWJhc2UsICMyMDIxMjIpO1xuICBjb2xvcjogI2VhZWNmMDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWJhc2UsICNlYWVjZjApO1xuICBib3JkZXItY29sb3I6ICNhMmE5YjE7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYm9yZGVyLWNvbG9yLWJhc2UsICNhMmE5YjEpO1xufVxuLmNsaWVudC1kYXJrbW9kZSAuV2lraXBsdXMtSW50ZXJCb3ggYSxcbmh0bWwuc2tpbi10aGVtZS1jbGllbnRwcmVmLW5pZ2h0IC5XaWtpcGx1cy1JbnRlckJveCBhIHtcbiAgY29sb3I6ICMzNmM7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcm9ncmVzc2l2ZSwgIzM2Yyk7XG59XG4uY2xpZW50LWRhcmttb2RlIC5XaWtpcGx1cy1CdG4sXG5odG1sLnNraW4tdGhlbWUtY2xpZW50cHJlZi1uaWdodCAuV2lraXBsdXMtQnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjEyMjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvci1pbnRlcmFjdGl2ZSwgIzIwMjEyMik7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNhMmE5YjE7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvci1iYXNlLCAjYTJhOWIxKTtcbn1cbi5jbGllbnQtZGFya21vZGUgLldpa2lwbHVzLUJ0biBhLFxuaHRtbC5za2luLXRoZW1lLWNsaWVudHByZWYtbmlnaHQgLldpa2lwbHVzLUJ0biBhIHtcbiAgY29sb3I6ICNlYWVjZjA7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1iYXNlLCAjZWFlY2YwKTtcbn1cbi5jbGllbnQtZGFya21vZGUgLk1vZU5vdGlmaWNhdGlvbi1ub3RpY2UsXG5odG1sLnNraW4tdGhlbWUtY2xpZW50cHJlZi1uaWdodCAuTW9lTm90aWZpY2F0aW9uLW5vdGljZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMDIxMjI7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3ItaW50ZXJhY3RpdmUtc3VidGxlLCAjMjAyMTIyKTtcbiAgYm94LXNoYWRvdzogMCAzcHggM3B4IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cbi5jbGllbnQtZGFya21vZGUgLk1vZU5vdGlmaWNhdGlvbi1ub3RpY2Ugc3Bhbixcbmh0bWwuc2tpbi10aGVtZS1jbGllbnRwcmVmLW5pZ2h0IC5Nb2VOb3RpZmljYXRpb24tbm90aWNlIHNwYW4ge1xuICBjb2xvcjogI2VhZWNmMDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWJhc2UsICNlYWVjZjApO1xufVxuLmNsaWVudC1kYXJrbW9kZSAuTW9lTm90aWZpY2F0aW9uLW5vdGljZS1zdWNjZXNzLFxuaHRtbC5za2luLXRoZW1lLWNsaWVudHByZWYtbmlnaHQgLk1vZU5vdGlmaWNhdGlvbi1ub3RpY2Utc3VjY2VzcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwYTMzMTE7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3Itc3VjY2Vzcy1zdWJ0bGUsICMwYTMzMTEpO1xuICBib3JkZXItbGVmdC1jb2xvcjogIzAwOGEwMDtcbiAgYm9yZGVyLWxlZnQtY29sb3I6IHZhcigtLWNvbG9yLXN1Y2Nlc3MsICMwMDhhMDApO1xufVxuLmNsaWVudC1kYXJrbW9kZSAuTW9lTm90aWZpY2F0aW9uLW5vdGljZS13YXJuaW5nLFxuaHRtbC5za2luLXRoZW1lLWNsaWVudHByZWYtbmlnaHQgLk1vZU5vdGlmaWNhdGlvbi1ub3RpY2Utd2FybmluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzI3MDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3Itd2FybmluZy1zdWJ0bGUsICMzMzI3MDApO1xuICBib3JkZXItbGVmdC1jb2xvcjogI2Y0YmQwMDtcbiAgYm9yZGVyLWxlZnQtY29sb3I6IHZhcigtLWNvbG9yLXdhcm5pbmcsICNmNGJkMDApO1xufVxuLmNsaWVudC1kYXJrbW9kZSAuTW9lTm90aWZpY2F0aW9uLW5vdGljZS13YXJuaW5nIHNwYW4sXG5odG1sLnNraW4tdGhlbWUtY2xpZW50cHJlZi1uaWdodCAuTW9lTm90aWZpY2F0aW9uLW5vdGljZS13YXJuaW5nIHNwYW4ge1xuICBjb2xvcjogI2VhZWNmMDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWJhc2UsICNlYWVjZjApO1xufVxuLmNsaWVudC1kYXJrbW9kZSAuTW9lTm90aWZpY2F0aW9uLW5vdGljZS1lcnJvcixcbmh0bWwuc2tpbi10aGVtZS1jbGllbnRwcmVmLW5pZ2h0IC5Nb2VOb3RpZmljYXRpb24tbm90aWNlLWVycm9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMDUwMjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvci1lcnJvci1zdWJ0bGUsICMzMzA1MDIpO1xuICBib3JkZXItbGVmdC1jb2xvcjogI2IwMGUwNjtcbiAgYm9yZGVyLWxlZnQtY29sb3I6IHZhcigtLWNvbG9yLWVycm9yLCAjYjAwZTA2KTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xuICBodG1sLnNraW4tdGhlbWUtY2xpZW50cHJlZi1vcyAjV2lraXBsdXMtUXVpY2tlZGl0LVN1bW1hcnktSW5wdXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMDIxMjI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvci1iYXNlLCAjMjAyMTIyKTtcbiAgICBjb2xvcjogI2VhZWNmMDtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItYmFzZSwgI2VhZWNmMCk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2EyYTliMTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3ItYmFzZSwgI2EyYTliMSk7XG4gIH1cbiAgaHRtbC5za2luLXRoZW1lLWNsaWVudHByZWYtb3MgLldpa2lwbHVzLUludGVyQm94IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMTIyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3ItaW50ZXJhY3RpdmUtc3VidGxlLCAjMjAyMTIyKTtcbiAgICBib3JkZXItY29sb3I6ICNhMmE5YjE7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ib3JkZXItY29sb3ItYmFzZSwgI2EyYTliMSk7XG4gICAgY29sb3I6ICNlYWVjZjA7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWJhc2UsICNlYWVjZjApO1xuICAgIC8qIOehruS/nemTvuaOpeminOiJsuWPr+ingSAqL1xuICB9XG4gIGh0bWwuc2tpbi10aGVtZS1jbGllbnRwcmVmLW9zIC5XaWtpcGx1cy1JbnRlckJveC1IZWFkZXIge1xuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICMzNmM7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdmFyKC0tY29sb3ItcHJvZ3Jlc3NpdmUsICMzNmMpO1xuICB9XG4gIGh0bWwuc2tpbi10aGVtZS1jbGllbnRwcmVmLW9zIC5XaWtpcGx1cy1JbnRlckJveC1CdG4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMDIxMjI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvci1pbnRlcmFjdGl2ZSwgIzIwMjEyMik7XG4gICAgYm9yZGVyLWNvbG9yOiAjYTJhOWIxO1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYm9yZGVyLWNvbG9yLWJhc2UsICNhMmE5YjEpO1xuICAgIGNvbG9yOiAjZWFlY2YwO1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1iYXNlLCAjZWFlY2YwKTtcbiAgfVxuICBodG1sLnNraW4tdGhlbWUtY2xpZW50cHJlZi1vcyAuV2lraXBsdXMtSW50ZXJCb3gtQnRuOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGQ0ZDRkO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3ItaW50ZXJhY3RpdmUtLWhvdmVyLCAjNGQ0ZDRkKTtcbiAgfVxuICBodG1sLnNraW4tdGhlbWUtY2xpZW50cHJlZi1vcyAuV2lraXBsdXMtSW50ZXJCb3ggdGV4dGFyZWEge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMDIxMjI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvci1iYXNlLCAjMjAyMTIyKTtcbiAgICBjb2xvcjogI2VhZWNmMDtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItYmFzZSwgI2VhZWNmMCk7XG4gICAgYm9yZGVyLWNvbG9yOiAjYTJhOWIxO1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYm9yZGVyLWNvbG9yLWJhc2UsICNhMmE5YjEpO1xuICB9XG4gIGh0bWwuc2tpbi10aGVtZS1jbGllbnRwcmVmLW9zIC5XaWtpcGx1cy1JbnRlckJveCBhIHtcbiAgICBjb2xvcjogIzM2YztcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItcHJvZ3Jlc3NpdmUsICMzNmMpO1xuICB9XG4gIGh0bWwuc2tpbi10aGVtZS1jbGllbnRwcmVmLW9zIC5XaWtpcGx1cy1CdG4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMDIxMjI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvci1pbnRlcmFjdGl2ZSwgIzIwMjEyMik7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYTJhOWIxO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvci1iYXNlLCAjYTJhOWIxKTtcbiAgfVxuICBodG1sLnNraW4tdGhlbWUtY2xpZW50cHJlZi1vcyAuV2lraXBsdXMtQnRuIGEge1xuICAgIGNvbG9yOiAjZWFlY2YwO1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1iYXNlLCAjZWFlY2YwKTtcbiAgfVxuICBodG1sLnNraW4tdGhlbWUtY2xpZW50cHJlZi1vcyAuTW9lTm90aWZpY2F0aW9uLW5vdGljZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjEyMjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yLWludGVyYWN0aXZlLXN1YnRsZSwgIzIwMjEyMik7XG4gICAgYm94LXNoYWRvdzogMCAzcHggM3B4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgfVxuICBodG1sLnNraW4tdGhlbWUtY2xpZW50cHJlZi1vcyAuTW9lTm90aWZpY2F0aW9uLW5vdGljZSBzcGFuIHtcbiAgICBjb2xvcjogI2VhZWNmMDtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItYmFzZSwgI2VhZWNmMCk7XG4gIH1cbiAgaHRtbC5za2luLXRoZW1lLWNsaWVudHByZWYtb3MgLk1vZU5vdGlmaWNhdGlvbi1ub3RpY2Utc3VjY2VzcyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBhMzMxMTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yLXN1Y2Nlc3Mtc3VidGxlLCAjMGEzMzExKTtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogIzAwOGEwMDtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogdmFyKC0tY29sb3Itc3VjY2VzcywgIzAwOGEwMCk7XG4gIH1cbiAgaHRtbC5za2luLXRoZW1lLWNsaWVudHByZWYtb3MgLk1vZU5vdGlmaWNhdGlvbi1ub3RpY2Utd2FybmluZyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMjcwMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yLXdhcm5pbmctc3VidGxlLCAjMzMyNzAwKTtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogI2Y0YmQwMDtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogdmFyKC0tY29sb3Itd2FybmluZywgI2Y0YmQwMCk7XG4gIH1cbiAgaHRtbC5za2luLXRoZW1lLWNsaWVudHByZWYtb3MgLk1vZU5vdGlmaWNhdGlvbi1ub3RpY2Utd2FybmluZyBzcGFuIHtcbiAgICBjb2xvcjogI2VhZWNmMDtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItYmFzZSwgI2VhZWNmMCk7XG4gIH1cbiAgaHRtbC5za2luLXRoZW1lLWNsaWVudHByZWYtb3MgLk1vZU5vdGlmaWNhdGlvbi1ub3RpY2UtZXJyb3Ige1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzA1MDI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvci1lcnJvci1zdWJ0bGUsICMzMzA1MDIpO1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjYjAwZTA2O1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiB2YXIoLS1jb2xvci1lcnJvciwgI2IwMGUwNik7XG4gIH1cbn1cbiIsICIvKipcbiAqIFdpa2lwbHVzXG4gKiBFcmlkYW51cyBTb3JhIDxzb3JhQHNvdW5kLm1vZT5cbiAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuLy8gQHRzLW5vY2hlY2tcbmltcG9ydCBQYWdlIGZyb20gJy4vY29yZS9wYWdlJztcbmltcG9ydCBVSSBmcm9tICcuL2NvcmUvdWknO1xuaW1wb3J0IE5vdGlmaWNhdGlvbiBmcm9tICcuL2NvcmUvbm90aWZpY2F0aW9uJztcbmltcG9ydCBXaWtpIGZyb20gJy4vc2VydmljZXMvd2lraSc7XG5pbXBvcnQgU2V0dGluZ3MgZnJvbSAnLi91dGlscy9zZXR0aW5ncyc7XG5pbXBvcnQgTG9nIGZyb20gJy4vdXRpbHMvbG9nJztcbmltcG9ydCBDb25zdGFudHMgZnJvbSAnLi91dGlscy9jb25zdGFudHMnO1xuaW1wb3J0IGkxOG4gZnJvbSAnLi91dGlscy9pMThuJztcbmltcG9ydCAnLi93aWtpcGx1cy5sZXNzJztcblxuJChhc3luYyAoKSA9PiB7XG5cdGNvbnN0IFBhZ2VzID0ge307XG5cdGNvbnN0IGlzQ3VycmVudFBhZ2VFbXB0eSA9ICQoJy5ub2FydGljbGV0ZXh0JykubGVuZ3RoID4gMCAmJiBDb25zdGFudHMuYXJ0aWNsZUlkID09PSAwO1xuXG5cdC8qKlxuXHQgKiBHZXQgcGFnZSBpbnN0YW5jZS5cblx0ICpcblx0ICogQHBhcmFtIHsqfSBwYXJhbXNcblx0ICogQHBhcmFtIHtudW1iZXJ9IHBhcmFtcy5yZXZpc2lvbklkIOmhtemdouS/ruiuoueJiOacrOWPt1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1zLnRpdGxlIOmhtemdouagh+mimFxuXHQgKi9cblx0Y29uc3QgZ2V0UGFnZSA9IGFzeW5jICh7cmV2aXNpb25JZCwgdGl0bGV9KSA9PiB7XG5cdFx0aWYgKFBhZ2VzW3JldmlzaW9uSWRdKSB7XG5cdFx0XHRyZXR1cm4gUGFnZXNbcmV2aXNpb25JZF07XG5cdFx0fVxuXHRcdGNvbnN0IG5ld1BhZ2UgPSBuZXcgUGFnZSh7XG5cdFx0XHRyZXZpc2lvbklkLFxuXHRcdFx0dGl0bGUsXG5cdFx0fSk7XG5cdFx0YXdhaXQgbmV3UGFnZS5pbml0KCk7XG5cdFx0UGFnZXNbcmV2aXNpb25JZF0gPSBuZXdQYWdlO1xuXHRcdHJldHVybiBQYWdlc1tyZXZpc2lvbklkXTtcblx0fTtcblxuXHRMb2cuaW5mbyhgV2lraXBsdXMgbm93IGxvYWRpbmcuIFZlcnNpb246ICR7Q29uc3RhbnRzLnZlcnNpb259YCk7XG5cblx0aWYgKCF3aW5kb3cubXcpIHtcblx0XHRjb25zb2xlLmxvZygnTWVkaWF3aWtpIEphdmFTY3JpcHQgbm90IGxvYWRlZCBvciBub3QgYSBNZWRpYXdpa2kgd2Vic2l0ZS4nKTtcblx0XHRyZXR1cm47XG5cdH1cblx0aWYgKCFDb25zdGFudHMudXNlckdyb3Vwcy5pbmNsdWRlcygnYXV0b2NvbmZpcm1lZCcpICYmICFDb25zdGFudHMudXNlckdyb3Vwcy5pbmNsdWRlcygnY29uZmlybWVkJykpIHtcblx0XHROb3RpZmljYXRpb24uZXJyb3IoaTE4bi50cmFuc2xhdGUoJ25vdF9hdXRvY29uZmlybWVkX3VzZXInKSk7XG5cdFx0TG9nLmluZm8oaTE4bi50cmFuc2xhdGUoJ25vdF9hdXRvY29uZmlybWVkX3VzZXInKSk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKCFDb25zdGFudHMuaXNBcnRpY2xlIHx8IENvbnN0YW50cy5hY3Rpb24gIT09ICd2aWV3Jykge1xuXHRcdExvZy5pbmZvKCdOb3QgYW4gZWRpdGFibGUgcGFnZS4gU3RvcCBpbml0aWFsaXphdGlvbi4nKTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBJbml0aWFsaXplIGN1cnJlbnQgcGFnZSDpu5jorqTliJ3lp4vljJblvZPliY3pobXpnaJcblx0d2luZG93Ll9XaWtpcGx1c1BhZ2VzID0gUGFnZXM7XG5cdGNvbnN0IGN1cnJlbnRQYWdlTmFtZSA9IENvbnN0YW50cy5jdXJyZW50UGFnZU5hbWU7XG5cdGNvbnN0IHJldmlzaW9uSWQgPSBDb25zdGFudHMucmV2aXNpb25JZDtcblx0Y29uc3QgY3VycmVudFBhZ2UgPSBhd2FpdCBnZXRQYWdlKHtcblx0XHRyZXZpc2lvbklkLFxuXHRcdHRpdGxlOiBjdXJyZW50UGFnZU5hbWUsXG5cdH0pO1xuXG5cdGNvbnN0IGhhbmRsZVF1aWNrRWRpdEJ1dHRvbkNsaWNrZWQgPSBhc3luYyAoe3NlY3Rpb25OdW1iZXIsIHNlY3Rpb25OYW1lLCB0YXJnZXRQYWdlTmFtZX0gPSB7fSkgPT4ge1xuXHRcdGNvbnN0IGlzT3RoZXJQYWdlID0gdGFyZ2V0UGFnZU5hbWUgIT09IGN1cnJlbnRQYWdlTmFtZTtcblx0XHRpZiAoaXNPdGhlclBhZ2UgJiYgQ29uc3RhbnRzLmxhdGVzdFJldmlzaW9uSWQgIT09IENvbnN0YW50cy5yZXZpc2lvbklkKSB7XG5cdFx0XHQvLyDlnKjljoblj7LniYjmnKznvJbovpHlhbbku5bpobXpnaLmnInpl67popgg5pqC5pe25LiN5pSv5oyBXG5cdFx0XHRMb2cuZXJyb3IoJ2Nyb3NzX3BhZ2VfaGlzdG9yeV9yZXZpc2lvbl9lZGl0X3dhcm5pbmcnKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc3QgcmV2aXNpb25JZCA9IGlzT3RoZXJQYWdlID8gYXdhaXQgV2lraS5nZXRMYXRlc3RSZXZpc2lvbklkRm9yUGFnZSh0YXJnZXRQYWdlTmFtZSkgOiBDb25zdGFudHMucmV2aXNpb25JZDtcblxuXHRcdGNvbnN0IHBhZ2UgPSBhd2FpdCBnZXRQYWdlKHtyZXZpc2lvbklkLCB0aXRsZTogdGFyZ2V0UGFnZU5hbWV9KTtcblx0XHRjb25zdCBjdXN0b21TdW1tYXJ5ID0gU2V0dGluZ3MuZ2V0U2V0dGluZygnZGVmYXVsdFN1bW1hcnknLCB7XG5cdFx0XHRzZWN0aW9uTmFtZSxcblx0XHRcdHNlY3Rpb25OdW1iZXIsXG5cdFx0XHRzZWN0aW9uVGFyZ2V0TmFtZTogdGFyZ2V0UGFnZU5hbWUsXG5cdFx0fSk7XG5cdFx0Y29uc3Qgc3VtbWFyeSA9XG5cdFx0XHRjdXN0b21TdW1tYXJ5IHx8XG5cdFx0XHQoc2VjdGlvbk5hbWVcblx0XHRcdFx0PyBgLyogJHtzZWN0aW9uTmFtZX0gKi8gJHtpMThuLnRyYW5zbGF0ZSgnZGVmYXVsdF9zdW1tYXJ5X3N1ZmZpeCcpfWBcblx0XHRcdFx0OiBpMThuLnRyYW5zbGF0ZSgnZGVmYXVsdF9zdW1tYXJ5X3N1ZmZpeCcpKTtcblx0XHRjb25zdCB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0Tm90aWZpY2F0aW9uLnN1Y2Nlc3MoaTE4bi50cmFuc2xhdGUoJ2xvYWRpbmcnKSk7XG5cdFx0fSwgMjAwKTtcblx0XHRjb25zdCBzZWN0aW9uQ29udGVudCA9IGF3YWl0IHBhZ2UuZ2V0V2lraVRleHQoe1xuXHRcdFx0c2VjdGlvbjogc2VjdGlvbk51bWJlcixcblx0XHR9KTtcblx0XHRjb25zdCBpc0VkaXRIaXN0b3J5UmV2aXNpb24gPSAhaXNPdGhlclBhZ2UgJiYgQ29uc3RhbnRzLmxhdGVzdFJldmlzaW9uSWQgIT09IENvbnN0YW50cy5yZXZpc2lvbklkO1xuXHRcdGNvbnN0IGVzY1RvRXhpdCA9XG5cdFx0XHRTZXR0aW5ncy5nZXRTZXR0aW5nKCdlc2NfdG9fZXhpdF9xdWlja2VkaXQnKSA9PT0gdHJ1ZSB8fCAvLyDlhbzlrrnogIHorr7nva5rZXlcblx0XHRcdFNldHRpbmdzLmdldFNldHRpbmcoJ2VzY190b19leGl0X3F1aWNrZWRpdCcpID09PSAndHJ1ZScgfHxcblx0XHRcdFNldHRpbmdzLmdldFNldHRpbmcoJ2VzY1RvRXhpdFF1aWNrRWRpdCcpID09PSB0cnVlIHx8XG5cdFx0XHRTZXR0aW5ncy5nZXRTZXR0aW5nKCdlc2NUb0V4aXRRdWlja0VkaXQnKSA9PT0gJ3RydWUnO1xuXHRcdGNvbnN0IGN1c3RvbUVkaXRUYWdzID0gU2V0dGluZ3MuZ2V0U2V0dGluZygnY3VzdG9tX2VkaXRfdGFncycpO1xuXHRcdGNvbnN0IGRlZmF1bHRFZGl0VGFncyA9IFtdO1xuXHRcdGNvbnN0IGVkaXRUYWdzID0gY3VzdG9tRWRpdFRhZ3M/Lmxlbmd0aCA/IGN1c3RvbUVkaXRUYWdzIDogZGVmYXVsdEVkaXRUYWdzO1xuXHRcdGNsZWFyVGltZW91dCh0aW1lcik7XG5cdFx0Tm90aWZpY2F0aW9uLmVtcHR5KCk7XG5cblx0XHRpZiAoaXNFZGl0SGlzdG9yeVJldmlzaW9uKSB7XG5cdFx0XHROb3RpZmljYXRpb24ud2FybmluZyhpMThuLnRyYW5zbGF0ZSgnaGlzdG9yeV9lZGl0X3dhcm5pbmcnKSk7XG5cdFx0fVxuXG5cdFx0Y29uc3Qgc2hvdWxkU2hvd0NyZWF0ZVBhZ2VUaXAgPSBpc090aGVyUGFnZSA/ICFyZXZpc2lvbklkIDogaXNDdXJyZW50UGFnZUVtcHR5O1xuXG5cdFx0VUkuc2hvd1F1aWNrRWRpdFBhbmVsKHtcblx0XHRcdHRpdGxlOiBgJHtpMThuLnRyYW5zbGF0ZSgncXVpY2tlZGl0X3RvcGJ0bicpfSR7XG5cdFx0XHRcdGlzRWRpdEhpc3RvcnlSZXZpc2lvbiA/IGkxOG4udHJhbnNsYXRlKCdoaXN0b3J5X2VkaXRfd2FybmluZycpIDogJydcblx0XHRcdH1gLFxuXHRcdFx0Y29udGVudDogc2hvdWxkU2hvd0NyZWF0ZVBhZ2VUaXAgPyBpMThuLnRyYW5zbGF0ZSgnY3JlYXRlX3BhZ2VfdGlwJykgOiBzZWN0aW9uQ29udGVudCxcblx0XHRcdHN1bW1hcnksXG5cdFx0XHRvbkJhY2s6IFVJLmhpZGVRdWlja0VkaXRQYW5lbCxcblx0XHRcdG9uUGFyc2U6ICh3aWtpVGV4dCkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gcGFnZS5wYXJzZVdpa2lUZXh0KHdpa2lUZXh0KTtcblx0XHRcdH0sXG5cdFx0XHRvbkVkaXQ6IGFzeW5jICh7Y29udGVudCwgc3VtbWFyeSwgaXNNaW5vckVkaXR9KSA9PiB7XG5cdFx0XHRcdGNvbnN0IGVkaXRQYXlsb2FkID0ge1xuXHRcdFx0XHRcdGNvbnRlbnQsXG5cdFx0XHRcdFx0Y29uZmlnOiB7XG5cdFx0XHRcdFx0XHRzdW1tYXJ5LFxuXHRcdFx0XHRcdFx0Li4uKHNlY3Rpb25OdW1iZXIgPT09IC0xID8ge30gOiB7c2VjdGlvbjogc2VjdGlvbk51bWJlcn0pLFxuXHRcdFx0XHRcdFx0Li4uKGVkaXRUYWdzLmxlbmd0aCA/IHt0YWdzOiBlZGl0VGFncy5qb2luKCd8Jyl9IDoge30pLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH07XG5cdFx0XHRcdGlmIChpc01pbm9yRWRpdCkge1xuXHRcdFx0XHRcdGVkaXRQYXlsb2FkLmNvbmZpZy5taW5vciA9ICd0cnVlJztcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRlZGl0UGF5bG9hZC5jb25maWcubm90bWlub3IgPSAndHJ1ZSc7XG5cdFx0XHRcdH1cblx0XHRcdFx0YXdhaXQgcGFnZS5lZGl0KGVkaXRQYXlsb2FkKTtcblx0XHRcdH0sXG5cdFx0XHRlc2NFeGl0OiBlc2NUb0V4aXQsXG5cdFx0fSk7XG5cdH07XG5cblx0Y29uc3QgaGFuZGxlU2ltcGxlUmVkaXJlY3RCdXR0b25DbGlja2VkID0gYXN5bmMgKCkgPT4ge1xuXHRcdFVJLnNob3dTaW1wbGVSZWRpcmVjdFBhbmVsKHtcblx0XHRcdG9uRWRpdDogYXN5bmMgKHt0aXRsZSwgc3VtbWFyeSwgZm9yY2VPdmVyd3JpdGUgPSBmYWxzZX0pID0+IHtcblx0XHRcdFx0Y29uc3QgcGFnZSA9IGF3YWl0IGdldFBhZ2Uoe3RpdGxlfSk7XG5cdFx0XHRcdGNvbnN0IHRlbXBsYXRlID0gYXdhaXQgZ2V0UGFnZSh7dGVtcGxhdGV9KTtcblx0XHRcdFx0Y29uc3QgY3VycmVudFBhZ2VOYW1lID0gQ29uc3RhbnRzLmN1cnJlbnRQYWdlTmFtZTtcblx0XHRcdFx0Y29uc3QgY29udGVudG1vZGVsID0gcGFnZS5jb250ZW50bW9kZWw7XG5cdFx0XHRcdGlmIChzdW1tYXJ5ID09ICcnKSB7XG5cdFx0XHRcdFx0c3VtbWFyeSA9IGkxOG4udHJhbnNsYXRlKCdyZWRpcmVjdF9mcm9tX3N1bW1hcnknLCBbdGl0bGUsIGN1cnJlbnRQYWdlTmFtZV0pO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0IGNvbnRlbnQgPSAoKCkgPT4ge1xuXHRcdFx0XHRcdGxldCBjb250ZW50O1xuXHRcdFx0XHRcdHN3aXRjaCAoY29udGVudG1vZGVsKSB7XG5cdFx0XHRcdFx0XHRjYXNlICdqYXZhc2NyaXB0Jzpcblx0XHRcdFx0XHRcdFx0Y29udGVudCA9IGAvKiAjUkVESVJFQ1QgKi9tdy5sb2FkZXIubG9hZChcIiR7bG9jYXRpb24ucHJvdG9jb2x9Ly8ke1xuXHRcdFx0XHRcdFx0XHRcdGxvY2F0aW9uLmhvc3Rcblx0XHRcdFx0XHRcdFx0fSR7Q29uc3RhbnRzLnNjcmlwdFBhdGh9L2luZGV4LnBocD90aXRsZT0ke213LnV0aWwud2lraVVybGVuY29kZShcblx0XHRcdFx0XHRcdFx0XHRjdXJyZW50UGFnZU5hbWVcblx0XHRcdFx0XHRcdFx0KX0mYWN0aW9uPXJhdyZjdHlwZT10ZXh0L2phdmFzY3JpcHRcIik7YDtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRjYXNlICdjc3MnOlxuXHRcdFx0XHRcdFx0XHRjb250ZW50ID0gYC8qICNSRURJUkVDVCAqL0BpbXBvcnQgdXJsKCR7bG9jYXRpb24ucHJvdG9jb2x9Ly8ke1xuXHRcdFx0XHRcdFx0XHRcdGxvY2F0aW9uLmhvc3Rcblx0XHRcdFx0XHRcdFx0fSR7Q29uc3RhbnRzLnNjcmlwdFBhdGh9L2luZGV4LnBocD90aXRsZT0ke213LnV0aWwud2lraVVybGVuY29kZShcblx0XHRcdFx0XHRcdFx0XHRjdXJyZW50UGFnZU5hbWVcblx0XHRcdFx0XHRcdFx0KX0mYWN0aW9uPXJhdyZjdHlwZT10ZXh0L2Nzcyk7YDtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRjYXNlICdTY3JpYnVudG8nOlxuXHRcdFx0XHRcdFx0XHRjb250ZW50ID0gYHJldHVybiByZXF1aXJlIFtbJHtjdXJyZW50UGFnZU5hbWV9XV1gO1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdGNhc2UgJ3dpa2l0ZXh0Jzpcblx0XHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRcdGNvbnRlbnQgPSBgI1JFRElSRUNUIFtbJHtjdXJyZW50UGFnZU5hbWV9XV1cXG57eyR7dGVtcGxhdGV9fX1gO1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdFx0XHRcdH0pKCk7XG5cdFx0XHRcdGNvbnN0IHBheWxvYWQgPSB7XG5cdFx0XHRcdFx0Y29udGVudDogY29udGVudCxcblx0XHRcdFx0XHRjb25maWc6IHtcblx0XHRcdFx0XHRcdHN1bW1hcnksXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fTtcblx0XHRcdFx0aWYgKCFmb3JjZU92ZXJ3cml0ZSkge1xuXHRcdFx0XHRcdHBheWxvYWQuY29uZmlnLmNyZWF0ZW9ubHkgPSAndHJ1ZSc7XG5cdFx0XHRcdH1cblx0XHRcdFx0YXdhaXQgcGFnZS5lZGl0KHBheWxvYWQpO1xuXHRcdFx0fSxcblx0XHRcdG9uU3VjY2VzczogKHt0aXRsZX0pID0+IHtcblx0XHRcdFx0bG9jYXRpb24uaHJlZiA9IENvbnN0YW50cy5hcnRpY2xlUGF0aC5yZXBsYWNlKC9cXCQxL2dpLCB0aXRsZSk7XG5cdFx0XHR9LFxuXHRcdH0pO1xuXHR9O1xuXG5cdGNvbnN0IGhhbmRsZVNldHRpbmdzQnV0dG9uQ2xpY2tlZCA9IGFzeW5jICgpID0+IHtcblx0XHRVSS5zaG93U2V0dGluZ3NQYW5lbCh7XG5cdFx0XHRvblN1Ym1pdDogKHtzZXR0aW5nc30pID0+IHtcblx0XHRcdFx0SlNPTi5wYXJzZShzZXR0aW5ncyk7XG5cdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdXaWtpcGx1c19TZXR0aW5ncycsIHNldHRpbmdzKTtcblx0XHRcdH0sXG5cdFx0fSk7XG5cdH07XG5cblx0Y29uc3QgaGFuZGxlUHJlbG9hZCA9IGFzeW5jICh7c2VjdGlvbk51bWJlcn0pID0+IHtcblx0XHRhd2FpdCBjdXJyZW50UGFnZS5nZXRXaWtpVGV4dCh7XG5cdFx0XHRzZWN0aW9uOiBzZWN0aW9uTnVtYmVyLFxuXHRcdH0pO1xuXHR9O1xuXG5cdFVJLmluc2VydFRvcFF1aWNrRWRpdEVudHJ5KGhhbmRsZVF1aWNrRWRpdEJ1dHRvbkNsaWNrZWQpO1xuXHRVSS5pbnNlcnRTZWN0aW9uUXVpY2tFZGl0RW50cmllcyhoYW5kbGVRdWlja0VkaXRCdXR0b25DbGlja2VkKTtcblx0VUkuaW5zZXJ0TGlua0VkaXRFbnRyaWVzKGhhbmRsZVF1aWNrRWRpdEJ1dHRvbkNsaWNrZWQpO1xuXHRVSS5pbnNlcnRTaW1wbGVSZWRpcmVjdEJ1dHRvbihoYW5kbGVTaW1wbGVSZWRpcmVjdEJ1dHRvbkNsaWNrZWQpO1xuXHRVSS5pbnNlcnRTZXR0aW5nc1BhbmVsQnV0dG9uKGhhbmRsZVNldHRpbmdzQnV0dG9uQ2xpY2tlZCk7XG5cdFVJLmJpbmRQcmVsb2FkRXZlbnRzKGhhbmRsZVByZWxvYWQpO1xufSk7XG5cbmV4cG9ydCB7fTtcbiIsICJpbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbnZvaWQgZ2V0Qm9keSgpLnRoZW4oKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHQkKHdpbmRvdykub24oJ3Jlc2l6ZScsICgpOiB2b2lkID0+IHtcblx0XHRjb25zdCB3aW5kb3dXaWR0aCA9ICQod2luZG93KS53aWR0aCgpO1xuXHRcdGNvbnN0ICR3aWtpcGx1c0ludGVyYm94ID0gJGJvZHkuZmluZCgnLldpa2lwbHVzLUludGVyQm94Jyk7XG5cdFx0aWYgKCR3aWtpcGx1c0ludGVyYm94KSB7XG5cdFx0XHQkd2lraXBsdXNJbnRlcmJveC5jc3MoJ21heC13aWR0aCcsIGBjYWxjKCR7d2luZG93V2lkdGh9cHggLSAyZW0pYCk7XG5cdFx0fVxuXHR9KTtcbn0pO1xuIiwgImltcG9ydCAnLi9XaWtpcGx1cy5sZXNzJztcblxuKGZ1bmN0aW9uIFdpa2lwbHVzKCk6IHZvaWQge1xuXHRjb25zdCB7d2dBY3Rpb24sIHdnSXNBcnRpY2xlfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0aWYgKHdnQWN0aW9uICE9PSAndmlldycgfHwgIXdnSXNBcnRpY2xlKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgbG9hZGVyID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRcdGNvbnN0IHsndmlzdWFsZWRpdG9yLWVuYWJsZSc6IGlzVmVFbmFibGV9ID0gbXcudXNlci5vcHRpb25zLmdldCgpIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+O1xuXG5cdFx0Lyogc2VlIDxodHRwczovL2dpdGh1Yi5jb20vV2lraXBsdXMvV2lraXBsdXMvaXNzdWVzLzY1PiAqL1xuXHRcdGlmIChpc1ZlRW5hYmxlKSB7XG5cdFx0XHRhd2FpdCBtdy5sb2FkZXIudXNpbmcoJ2V4dC52aXN1YWxFZGl0b3IuY29yZScpO1xuXHRcdH1cblxuXHRcdGF3YWl0IGltcG9ydCgnLi9tb2R1bGVzL2luZGV4Jyk7XG5cdFx0YXdhaXQgaW1wb3J0KCcuL3Jlc2l6ZScpO1xuXHR9O1xuXG5cdHZvaWQgbG9hZGVyKCk7XG59KSgpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUE7QUFBTixJQXNDT0M7QUF0Q1AsSUFBQUMsaUJBQUFDLE1BQUE7RUFBQSw0Q0FBQTtBQUFBO0FBQU1ILGdCQUFOLE1BQWdCO01BQ2ZJLFVBQVU7TUFDVixJQUFJQyxZQUFZO0FBQ2YsZUFBT0MsT0FBT0MsR0FBR0MsT0FBT0MsSUFBSSxhQUFhO01BQzFDO01BQ0EsSUFBSUMsa0JBQWtCO0FBQ3JCLGVBQU9KLE9BQU9DLEdBQUdDLE9BQU9DLElBQUksWUFBWSxFQUFFRSxRQUFRLE1BQU0sR0FBRztNQUM1RDtNQUNBLElBQUlDLFlBQVk7QUFDZixlQUFPTixPQUFPQyxHQUFHQyxPQUFPQyxJQUFJLGFBQWE7TUFDMUM7TUFDQSxJQUFJSSxhQUFhO0FBQ2hCLGVBQU9QLE9BQU9DLEdBQUdDLE9BQU9DLElBQUksY0FBYztNQUMzQztNQUNBLElBQUlLLG1CQUFtQjtBQUN0QixlQUFPUixPQUFPQyxHQUFHQyxPQUFPQyxJQUFJLGlCQUFpQjtNQUM5QztNQUNBLElBQUlNLGNBQWM7QUFDakIsZUFB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bVAsU0FBQTVYLGtCQUFTLGFBQTJCO0FBQ3pDLFlBQU07UUFBQyx1QkFBdUI2WDtNQUFVLElBQUlyWixHQUFHbUssS0FBS21QLFFBQVFwWixJQUFJO0FBR2hFLFVBQUltWixZQUFZO0FBQ2YsY0FBTXJaLEdBQUdpSyxPQUFPQyxNQUFNLHVCQUF1QjtNQUM5QztBQUVBLFlBQU1KLFFBQUFnRCxRQUFBLEVBQUErTCxLQUFBLE9BQUFuRCxhQUFBLEdBQUFELGdCQUFBO0FBQ04sWUFBTTNMLFFBQUFnRCxRQUFBLEVBQUErTCxLQUFBLE9BQUFILFlBQUEsR0FBQUYsZUFBQTtJQUNQLENBQUE7QUFBQSxXQUFBLFNBVk12TyxVQUFBO0FBQUEsYUFBQW1QLE9BQUFsRCxNQUFBLE1BQUFDLFNBQUE7SUFBQTtFQUFBLEVBQUE7QUFZTixPQUFLbE0sT0FBTztBQUNiLEdBQUc7IiwKICAibmFtZXMiOiBbIkNvbnN0YW50cyIsICJjb25zdGFudHNfZGVmYXVsdCIsICJpbml0X2NvbnN0YW50cyIsICJfX2VzbSIsICJ2ZXJzaW9uIiwgImlzQXJ0aWNsZSIsICJ3aW5kb3ciLCAibXciLCAiY29uZmlnIiwgImdldCIsICJjdXJyZW50UGFnZU5hbWUiLCAicmVwbGFjZSIsICJhcnRpY2xlSWQiLCAicmV2aXNpb25JZCIsICJsYXRlc3RSZXZpc2lvbklkIiwgImFydGljbGVQYXRoIiwgInNjcmlwdFBhdGgiLCAiYWN0aW9uIiwgInNraW4iLCAidXNlckdyb3VwcyIsICJ3aWtpSWQiLCAidXNlckFnZW50IiwgImNvbmNhdCIsICJSZXF1ZXN0cyIsICJyZXF1ZXN0c19kZWZhdWx0IiwgImluaXRfcmVxdWVzdHMiLCAiYmFzZSIsICJsb2NhdGlvbiIsICJwcm90b2NvbCIsICJob3N0IiwgInF1ZXJ5IiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgInVybCIsICJVUkwiLCAiX2kiLCAiX09iamVjdCRrZXlzIiwgIk9iamVjdCIsICJrZXlzIiwgImxlbmd0aCIsICJrZXkiLCAic2VhcmNoUGFyYW1zIiwgImFwcGVuZCIsICJyZXNwb25zZSIsICJmZXRjaCIsICJjcmVkZW50aWFscyIsICJoZWFkZXJzIiwgImpzb24iLCAicG9zdCIsICJwYXlsb2FkIiwgImZvcm0iLCAiRm9ybURhdGEiLCAiX2kyIiwgIl9PYmplY3QkZW50cmllcyIsICJlbnRyaWVzIiwgInZhbHVlIiwgIm1ldGhvZCIsICJib2R5IiwgIkkxOG4iLCAiaTE4bl9kZWZhdWx0IiwgImluaXRfaTE4biIsICJsYW5ndWFnZSIsICJpMThuRGF0YSIsICJzZXNzaW9uVXBkYXRlTG9nIiwgImNvbnN0cnVjdG9yIiwgIkpTT04iLCAicGFyc2UiLCAibG9jYWxTdG9yYWdlIiwgIm5hdmlnYXRvciIsICJ0b0xvd2VyQ2FzZSIsICJicm93c2VyTGFuZ3VhZ2UiLCAiaTE4bkNhY2hlIiwgImdldEl0ZW0iLCAiX2kzIiwgIl9PYmplY3Qka2V5czIiLCAic2V0SXRlbSIsICJ0cmFuc2xhdGUiLCAicGxhY2Vob2xkZXJzIiwgInJlc3VsdCIsICJsb2FkTGFuZ3VhZ2UiLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwIiwgInMiLCAibiIsICJkb25lIiwgImluZGV4IiwgInBsYWNlaG9sZGVyIiwgImVyciIsICJlIiwgImYiLCAiX3RoaXMiLCAiaW5jbHVkZXMiLCAibm93VmVyc2lvbiIsICJwdXNoIiwgIl9fdmVyc2lvbiIsICJjb25zb2xlIiwgImluZm8iLCAic3RyaW5naWZ5IiwgIldpa2lwbHVzRXJyb3IiLCAiTG9nIiwgImxvZ19kZWZhdWx0IiwgImluaXRfbG9nIiwgIkVycm9yIiwgIm1lc3NhZ2UiLCAiY29kZSIsICJkZWJ1ZyIsICJlcnJvciIsICJlcnJvckNvZGUiLCAicGF5bG9hZHMiLCAidGVtcGxhdGUiLCAiX2l0ZXJhdG9yMiIsICJfc3RlcDIiLCAiaSIsICJ2IiwgIlJlZ0V4cCIsICJXaWtpIiwgIndpa2lfZGVmYXVsdCIsICJpbml0X3dpa2kiLCAicGFnZUluZm9DYWNoZSIsICJnZXRFZGl0VG9rZW4iLCAibWV0YSIsICJmb3JtYXQiLCAidG9rZW5zIiwgImNzcmZ0b2tlbiIsICJnZXRQYWdlSW5mbyIsICJ0aXRsZSIsICJfdGhpczIiLCAicGFyYW1zIiwgInByb3AiLCAicnZwcm9wIiwgInJldmlkcyIsICJ0aW1lc3RhbXAiLCAicmV2aWQiLCAiY29udGVudG1vZGVsIiwgInRpdGxlcyIsICJwYWdlcyIsICJwYWdlSW5mbyIsICJyZXZpc2lvbnMiLCAiZ2V0V2lraVRleHQiLCAic2VjdGlvbiIsICJydnNlY3Rpb24iLCAicGFyc2VXaWtpVGV4dCIsICJ3aWtpdGV4dCIsICJ0ZXh0IiwgInBzdCIsICJlZGl0IiwgImNvbnRlbnQiLCAiZWRpdFRva2VuIiwgImFkZGl0aW9uYWxDb25maWciLCAidG9rZW4iLCAiYmFzZXRpbWVzdGFtcCIsICJ3YXJuaW5nIiwgImdldExhdGVzdFJldmlzaW9uSWRGb3JQYWdlIiwgIl90aGlzMyIsICJQYWdlIiwgInBhZ2VfZGVmYXVsdCIsICJpbml0X3BhZ2UiLCAiaW5pdGVkIiwgImlzTmV3UGFnZSIsICJzZWN0aW9uQ2FjaGUiLCAiaW5pdCIsICJfdGhpczQiLCAicHJvbWlzZUFyciIsICJnZXRUaW1lc3RhbXAiLCAiZ2V0Q29udGVudE1vZGVsIiwgIlByb21pc2UiLCAiYWxsIiwgIl90aGlzNSIsICJsb2FkZXIiLCAidXNpbmciLCAidXNlciIsICJfdGhpczYiLCAiX3RoaXM3IiwgIl90aGlzOCIsICJzZWMiLCAid2lraVRleHQiLCAiX3RoaXM5IiwgIl90aGlzMTAiLCAiY3JlYXRlb25seSIsICJOb3RpZmljYXRpb24iLCAibm90aWZpY2F0aW9uX2RlZmF1bHQiLCAiaW5pdF9ub3RpZmljYXRpb24iLCAiJCIsICJkaXNwbGF5IiwgInR5cGUiLCAiY2FsbGJhY2siLCAiYWRkQ2xhc3MiLCAiZmluZCIsICJsYXN0IiwgImZhZGVJbiIsICJiaW5kIiwgImNsZWFyIiwgInNlbGYiLCAib24iLCAic2xpZGVMZWZ0IiwgInN1Y2Nlc3MiLCAiY2hpbGRyZW4iLCAiZmlyc3QiLCAiZmFkZU91dCIsICJyZW1vdmUiLCAic2V0VGltZW91dCIsICJlbXB0eSIsICJlYWNoIiwgImVsZSIsICJkZWxheSIsICJzcGVlZCIsICJjc3MiLCAiYW5pbWF0ZSIsICJsZWZ0IiwgInNsZWVwIiwgInNsZWVwX2RlZmF1bHQiLCAiaW5pdF9zbGVlcCIsICJ0aW1lIiwgInJlc29sdmUiLCAicGFyc2VRdWVyeSIsICJyZWciLCAibWF0Y2giLCAiZXhlYyIsICJkZWNvZGVVUklDb21wb25lbnQiLCAiaW5pdF9oZWxwZXJzIiwgIlVJIiwgInVpX2RlZmF1bHQiLCAiaW5pdF91aSIsICJxdWlja0VkaXRQYW5lbFZpc2libGUiLCAic2Nyb2xsVG9wIiwgImNyZWF0ZURpYWxvZ0JveCIsICJ3aWR0aCIsICJjbGllbnRXaWR0aCIsICJpbm5lcldpZHRoIiwgImNsaWVudEhlaWdodCIsICJpbm5lckhlaWdodCIsICJkaWFsb2dXaWR0aCIsICJNYXRoIiwgIm1pbiIsICJkaWFsb2dCb3giLCAidG9wIiwgImRvY3VtZW50IiwgImh0bWwiLCAicGFyZW50IiwgImFkZEV2ZW50TGlzdGVuZXIiLCAib25iZWZvcmV1bmxvYWQiLCAiYmluZERyYWdnaW5nIiwgImVsZW1lbnQiLCAibW91c2Vkb3duIiwgImJhc2VYIiwgImNsaWVudFgiLCAiYmFzZVkiLCAiY2xpZW50WSIsICJiYXNlT2Zmc2V0WCIsICJvZmZzZXQiLCAiYmFzZU9mZnNldFkiLCAiZTIiLCAidW5iaW5kIiwgIm9mZiIsICJhZGRGdW5jdGlvbkJ1dHRvbiIsICJpZCIsICJidXR0b24iLCAiYXR0ciIsICJpbnNlcnRTaW1wbGVSZWRpcmVjdEJ1dHRvbiIsICJvbkNsaWNrIiwgImluc2VydFNldHRpbmdzUGFuZWxCdXR0b24iLCAiaW5zZXJ0VG9wUXVpY2tFZGl0RW50cnkiLCAidG9wQnRuIiwgInRvcEJ0bkxpbmsiLCAic2VjdGlvbk51bWJlciIsICJ0YXJnZXRQYWdlTmFtZSIsICJhZnRlciIsICJpbnNlcnRTZWN0aW9uUXVpY2tFZGl0RW50cmllcyIsICJzZWN0aW9uQnRuIiwgImVkaXRVUkwiLCAic2VjdGlvblRhcmdldE5hbWUiLCAiY2xvbmVOb2RlIiwgInByZXYiLCAiY2xvbmUiLCAic2VjdGlvbk5hbWUiLCAidHJpbSIsICJfc2VjdGlvbkJ0biIsICJiZWZvcmUiLCAiaW5zZXJ0TGlua0VkaXRFbnRyaWVzIiwgImhyZWYiLCAiY2xhc3MiLCAiX3BhcmFtcyRzZWN0aW9uIiwgInNob3dRdWlja0VkaXRQYW5lbCIsICJzdW1tYXJ5IiwgIm9uQmFjayIsICJvblBhcnNlIiwgIm9uRWRpdCIsICJlc2NFeGl0IiwgImhpZGVRdWlja0VkaXRQYW5lbCIsICJiYWNrQnRuIiwgImp1bXBCdG4iLCAiaW5wdXRCb3giLCAicHJldmlld0JveCIsICJzdW1tYXJ5Qm94IiwgImVkaXRTdWJtaXRCdG4iLCAicHJldmlld1N1Ym1pdEJ0biIsICJpc01pbm9yRWRpdCIsICJtYXJnaW4iLCAiZWRpdEJvZHkiLCAidmFsIiwgInByZWxvYWRCYW5uZXIiLCAidGltZXIiLCAiRGF0ZSIsICJub3ciLCAiZWRpdEJhbm5lciIsICJpcyIsICJ1c2VUaW1lIiwgInRvU3RyaW5nIiwgInJlbG9hZCIsICJsb2ciLCAiY3RybEtleSIsICJ3aGljaCIsICJzaGlmdEtleSIsICJ0cmlnZ2VyIiwgInByZXZlbnREZWZhdWx0IiwgInN0b3BQcm9wYWdhdGlvbiIsICJzaG93U2ltcGxlUmVkaXJlY3RQYW5lbCIsICJvblN1Y2Nlc3MiLCAiX3RoaXMxMSIsICJpbnB1dCIsICJ0ZW1wbGF0ZVRpdGxlIiwgInN1bW1hcnlJbnB1dFRpdGxlIiwgInN1bW1hcnlJbnB1dCIsICJhcHBseUJ0biIsICJjYW5jZWxCdG4iLCAiY29udGludWVCdG4iLCAiZGlhbG9nIiwgInRlbXBsYXRlMiIsICJmb3JjZU92ZXJ3cml0ZSIsICJoaWRlU2ltcGxlUmVkaXJlY3RQYW5lbCIsICJlcnJvcjIiLCAic2hvd1NldHRpbmdzUGFuZWwiLCAib25TdWJtaXQiLCAiX3RoaXMxMiIsICJXaWtpcGx1c19TZXR0aW5ncyIsICJzZXR0aW5ncyIsICJzYXZlZEJhbm5lciIsICJoaWRlU2V0dGluZ3NQYW5lbCIsICJiaW5kUHJlbG9hZEV2ZW50cyIsICJvblByZWxvYWQiLCAiU2V0dGluZ3MiLCAic2V0dGluZ3NfZGVmYXVsdCIsICJpbml0X3NldHRpbmdzIiwgImdldFNldHRpbmciLCAib2JqZWN0IiwgInciLCAiY3VzdG9tU2V0dGluZ0Z1bmN0aW9uIiwgIkZ1bmN0aW9uIiwgIl9pNCIsICJfT2JqZWN0JGtleXMzIiwgImtleTIiLCAiaW5pdF93aWtpcGx1cyIsICJtb2R1bGVzX2V4cG9ydHMiLCAiaW5pdF9tb2R1bGVzIiwgIlBhZ2VzIiwgImlzQ3VycmVudFBhZ2VFbXB0eSIsICJnZXRQYWdlIiwgIl9yZWY3IiwgInJldmlzaW9uSWQyIiwgIm5ld1BhZ2UiLCAiX3giLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgIl9XaWtpcGx1c1BhZ2VzIiwgImN1cnJlbnRQYWdlIiwgImhhbmRsZVF1aWNrRWRpdEJ1dHRvbkNsaWNrZWQiLCAiX3JlZjgiLCAiaXNPdGhlclBhZ2UiLCAicGFnZSIsICJjdXN0b21TdW1tYXJ5IiwgInNlY3Rpb25Db250ZW50IiwgImlzRWRpdEhpc3RvcnlSZXZpc2lvbiIsICJlc2NUb0V4aXQiLCAiY3VzdG9tRWRpdFRhZ3MiLCAiZGVmYXVsdEVkaXRUYWdzIiwgImVkaXRUYWdzIiwgImNsZWFyVGltZW91dCIsICJzaG91bGRTaG93Q3JlYXRlUGFnZVRpcCIsICJfcmVmOSIsICJzdW1tYXJ5MiIsICJlZGl0UGF5bG9hZCIsICJ0YWdzIiwgImpvaW4iLCAibWlub3IiLCAibm90bWlub3IiLCAiX3gyIiwgImhhbmRsZVNpbXBsZVJlZGlyZWN0QnV0dG9uQ2xpY2tlZCIsICJfcmVmMTAiLCAiX3JlZjExIiwgImN1cnJlbnRQYWdlTmFtZTIiLCAiY29udGVudDIiLCAidXRpbCIsICJ3aWtpVXJsZW5jb2RlIiwgIl94MyIsICJoYW5kbGVTZXR0aW5nc0J1dHRvbkNsaWNrZWQiLCAiX3JlZjEyIiwgImhhbmRsZVByZWxvYWQiLCAiX3JlZjEzIiwgIl94NCIsICJyZXNpemVfZXhwb3J0cyIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJpbml0X3Jlc2l6ZSIsICJyZXF1aXJlIiwgImdldEJvZHkiLCAidGhlbiIsICIkYm9keSIsICJ3aW5kb3dXaWR0aCIsICIkd2lraXBsdXNJbnRlcmJveCIsICJXaWtpcGx1cyIsICJ3Z0FjdGlvbiIsICJ3Z0lzQXJ0aWNsZSIsICJfcmVmMTQiLCAiaXNWZUVuYWJsZSIsICJvcHRpb25zIl0KfQo=
