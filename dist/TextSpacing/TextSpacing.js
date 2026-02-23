/**
 * SPDX-License-Identifier: BSD-3-Clause
 * _addText: '{{Gadget Header|license=BSD}}'
 *
 * @base {@link https://github.com/diskdance/gadget-text-spacing}
 * @source {@link https://github.com/FurryWiki-zh/FurryWikiGadgets/tree/master/src/TextSpacing}
 * @license BSD-3-Clause {@link https://github.com/diskdance/gadget-text-spacing/blob/main/LICENSE}
 */

/**
 * BSD 3-Clause License
 *
 * Copyright 2023 diskdance
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in
 *    the documentation and/or other materials provided with the
 *    distribution.
 *
 * 3. The name of the author may not be used to
 *    endorse or promote products derived from this software without
 *    specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE AUTHOR “AS IS” AND ANY EXPRESS OR
 * IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY DIRECT,
 * INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
 * HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT,
 * STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING
 * IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
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

// node_modules/.pnpm/@mrhenry+core-web@1.2.4/node_modules/@mrhenry/core-web/modules/IntersectionObserver.js
var require_IntersectionObserver = __commonJS({
  "node_modules/.pnpm/@mrhenry+core-web@1.2.4/node_modules/@mrhenry/core-web/modules/IntersectionObserver.js"() {
    (function(undefined) {
      if (!("IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype)) {
        (function(window2, document2) {
          "use strict";
          var supportedNatively = "IntersectionObserver" in window2 && "IntersectionObserverEntry" in window2 && "intersectionRatio" in window2.IntersectionObserverEntry.prototype;
          if (supportedNatively) {
            return;
          }
          var registry = [];
          function IntersectionObserverEntry(entry) {
            this.time = entry.time;
            this.target = entry.target;
            this.rootBounds = entry.rootBounds;
            this.boundingClientRect = entry.boundingClientRect;
            this.intersectionRect = entry.intersectionRect || getEmptyRect();
            try {
              this.isIntersecting = !!entry.intersectionRect;
            } catch (err) {
            }
            var targetRect = this.boundingClientRect;
            var targetArea = targetRect.width * targetRect.height;
            var intersectionRect = this.intersectionRect;
            var intersectionArea = intersectionRect.width * intersectionRect.height;
            if (targetArea) {
              this.intersectionRatio = Number((intersectionArea / targetArea).toFixed(4));
            } else {
              this.intersectionRatio = this.isIntersecting ? 1 : 0;
            }
          }
          IntersectionObserverEntry.prototype.intersectionRatio = 0;
          function IntersectionObserver2(callback, opt_options) {
            var options = opt_options || {};
            if (typeof callback != "function") {
              throw new Error("callback must be a function");
            }
            if (options.root && options.root.nodeType != 1) {
              throw new Error("root must be an Element");
            }
            this._checkForIntersections = throttle(
              this._checkForIntersections.bind(this),
              this.THROTTLE_TIMEOUT
            );
            this._callback = callback;
            this._observationTargets = [];
            this._queuedEntries = [];
            this._rootMarginValues = this._parseRootMargin(options.rootMargin);
            this.thresholds = this._initThresholds(options.threshold);
            this.root = options.root || null;
            this.rootMargin = this._rootMarginValues.map(function(margin) {
              return margin.value + margin.unit;
            }).join(" ");
          }
          IntersectionObserver2.prototype.THROTTLE_TIMEOUT = 100;
          IntersectionObserver2.prototype.POLL_INTERVAL = null;
          IntersectionObserver2.prototype.USE_MUTATION_OBSERVER = true;
          IntersectionObserver2.prototype.observe = function(target) {
            var isTargetAlreadyObserved = this._observationTargets.some(function(item) {
              return item.element == target;
            });
            if (isTargetAlreadyObserved) {
              return;
            }
            if (!(target && target.nodeType == 1)) {
              throw new Error("target must be an Element");
            }
            this._registerInstance();
            this._observationTargets.push({ element: target, entry: null });
            this._monitorIntersections();
            this._checkForIntersections();
          };
          IntersectionObserver2.prototype.unobserve = function(target) {
            this._observationTargets = this._observationTargets.filter(function(item) {
              return item.element != target;
            });
            if (!this._observationTargets.length) {
              this._unmonitorIntersections();
              this._unregisterInstance();
            }
          };
          IntersectionObserver2.prototype.disconnect = function() {
            this._observationTargets = [];
            this._unmonitorIntersections();
            this._unregisterInstance();
          };
          IntersectionObserver2.prototype.takeRecords = function() {
            var records = this._queuedEntries.slice();
            this._queuedEntries = [];
            return records;
          };
          IntersectionObserver2.prototype._initThresholds = function(opt_threshold) {
            var threshold = opt_threshold || [0];
            if (!Array.isArray(threshold)) threshold = [threshold];
            return threshold.sort().filter(function(t, i, a) {
              if (typeof t != "number" || isNaN(t) || t < 0 || t > 1) {
                throw new Error("threshold must be a number between 0 and 1 inclusively");
              }
              return t !== a[i - 1];
            });
          };
          IntersectionObserver2.prototype._parseRootMargin = function(opt_rootMargin) {
            var marginString = opt_rootMargin || "0px";
            var margins = marginString.split(/\s+/).map(function(margin) {
              var parts = /^(-?\d*\.?\d+)(px|%)$/.exec(margin);
              if (!parts) {
                throw new Error("rootMargin must be specified in pixels or percent");
              }
              return { value: parseFloat(parts[1]), unit: parts[2] };
            });
            margins[1] = margins[1] || margins[0];
            margins[2] = margins[2] || margins[0];
            margins[3] = margins[3] || margins[1];
            return margins;
          };
          IntersectionObserver2.prototype._monitorIntersections = function() {
            if (!this._monitoringIntersections) {
              this._monitoringIntersections = true;
              if (this.POLL_INTERVAL) {
                this._monitoringInterval = setInterval(
                  this._checkForIntersections,
                  this.POLL_INTERVAL
                );
              } else {
                addEvent(window2, "resize", this._checkForIntersections, true);
                addEvent(document2, "scroll", this._checkForIntersections, true);
                if (this.USE_MUTATION_OBSERVER && "MutationObserver" in window2) {
                  this._domObserver = new MutationObserver(this._checkForIntersections);
                  this._domObserver.observe(document2, {
                    attributes: true,
                    childList: true,
                    characterData: true,
                    subtree: true
                  });
                }
              }
            }
          };
          IntersectionObserver2.prototype._unmonitorIntersections = function() {
            if (this._monitoringIntersections) {
              this._monitoringIntersections = false;
              clearInterval(this._monitoringInterval);
              this._monitoringInterval = null;
              removeEvent(window2, "resize", this._checkForIntersections, true);
              removeEvent(document2, "scroll", this._checkForIntersections, true);
              if (this._domObserver) {
                this._domObserver.disconnect();
                this._domObserver = null;
              }
            }
          };
          IntersectionObserver2.prototype._checkForIntersections = function() {
            var rootIsInDom = this._rootIsInDom();
            var rootRect = rootIsInDom ? this._getRootRect() : getEmptyRect();
            this._observationTargets.forEach(function(item) {
              var target = item.element;
              var targetRect = getBoundingClientRect(target);
              var rootContainsTarget = this._rootContainsTarget(target);
              var oldEntry = item.entry;
              var intersectionRect = rootIsInDom && rootContainsTarget && this._computeTargetAndRootIntersection(target, rootRect);
              var newEntry = item.entry = new IntersectionObserverEntry({
                time: now(),
                target,
                boundingClientRect: targetRect,
                rootBounds: rootRect,
                intersectionRect
              });
              if (!oldEntry) {
                this._queuedEntries.push(newEntry);
              } else if (rootIsInDom && rootContainsTarget) {
                if (this._hasCrossedThreshold(oldEntry, newEntry)) {
                  this._queuedEntries.push(newEntry);
                }
              } else {
                if (oldEntry && oldEntry.isIntersecting) {
                  this._queuedEntries.push(newEntry);
                }
              }
            }, this);
            if (this._queuedEntries.length) {
              this._callback(this.takeRecords(), this);
            }
          };
          IntersectionObserver2.prototype._computeTargetAndRootIntersection = function(target, rootRect) {
            if (window2.getComputedStyle(target).display == "none") return;
            var targetRect = getBoundingClientRect(target);
            var intersectionRect = targetRect;
            var parent = getParentNode(target);
            var atRoot = false;
            while (!atRoot) {
              var parentRect = null;
              var parentComputedStyle = parent.nodeType == 1 ? window2.getComputedStyle(parent) : {};
              if (parentComputedStyle.display == "none") return;
              if (parent == this.root || parent == document2) {
                atRoot = true;
                parentRect = rootRect;
              } else {
                if (parent != document2.body && parent != document2.documentElement && parentComputedStyle.overflow != "visible") {
                  parentRect = getBoundingClientRect(parent);
                }
              }
              if (parentRect) {
                intersectionRect = computeRectIntersection(parentRect, intersectionRect);
                if (!intersectionRect) break;
              }
              parent = getParentNode(parent);
            }
            return intersectionRect;
          };
          IntersectionObserver2.prototype._getRootRect = function() {
            var rootRect;
            if (this.root) {
              rootRect = getBoundingClientRect(this.root);
            } else {
              var html = document2.documentElement;
              var body = document2.body;
              rootRect = {
                x: 0,
                y: 0,
                top: 0,
                left: 0,
                right: html.clientWidth || body.clientWidth,
                width: html.clientWidth || body.clientWidth,
                bottom: html.clientHeight || body.clientHeight,
                height: html.clientHeight || body.clientHeight
              };
            }
            return this._expandRectByRootMargin(rootRect);
          };
          IntersectionObserver2.prototype._expandRectByRootMargin = function(rect) {
            var margins = this._rootMarginValues.map(function(margin, i) {
              return margin.unit == "px" ? margin.value : margin.value * (i % 2 ? rect.width : rect.height) / 100;
            });
            var newRect = {
              top: rect.top - margins[0],
              right: rect.right + margins[1],
              bottom: rect.bottom + margins[2],
              left: rect.left - margins[3]
            };
            newRect.width = newRect.right - newRect.left;
            newRect.height = newRect.bottom - newRect.top;
            newRect.x = newRect.left;
            newRect.y = newRect.top;
            return newRect;
          };
          IntersectionObserver2.prototype._hasCrossedThreshold = function(oldEntry, newEntry) {
            var oldRatio = oldEntry && oldEntry.isIntersecting ? oldEntry.intersectionRatio || 0 : -1;
            var newRatio = newEntry.isIntersecting ? newEntry.intersectionRatio || 0 : -1;
            if (oldRatio === newRatio) return;
            for (var i = 0; i < this.thresholds.length; i++) {
              var threshold = this.thresholds[i];
              if (threshold == oldRatio || threshold == newRatio || threshold < oldRatio !== threshold < newRatio) {
                return true;
              }
            }
          };
          IntersectionObserver2.prototype._rootIsInDom = function() {
            return !this.root || containsDeep(document2, this.root);
          };
          IntersectionObserver2.prototype._rootContainsTarget = function(target) {
            return containsDeep(this.root || document2, target);
          };
          IntersectionObserver2.prototype._registerInstance = function() {
            if (registry.indexOf(this) < 0) {
              registry.push(this);
            }
          };
          IntersectionObserver2.prototype._unregisterInstance = function() {
            var index = registry.indexOf(this);
            if (index != -1) registry.splice(index, 1);
          };
          function now() {
            return window2.performance && performance.now && performance.now();
          }
          function throttle(fn, timeout) {
            var timer = null;
            return function() {
              if (!timer) {
                timer = setTimeout(function() {
                  fn();
                  timer = null;
                }, timeout);
              }
            };
          }
          function addEvent(node, event, fn, opt_useCapture) {
            if (typeof node.addEventListener == "function") {
              node.addEventListener(event, fn, opt_useCapture || false);
            } else if (typeof node.attachEvent == "function") {
              node.attachEvent("on" + event, fn);
            }
          }
          function removeEvent(node, event, fn, opt_useCapture) {
            if (typeof node.removeEventListener == "function") {
              node.removeEventListener(event, fn, opt_useCapture || false);
            } else if (typeof node.detatchEvent == "function") {
              node.detatchEvent("on" + event, fn);
            }
          }
          function computeRectIntersection(rect1, rect2) {
            var top = Math.max(rect1.top, rect2.top);
            var bottom = Math.min(rect1.bottom, rect2.bottom);
            var left = Math.max(rect1.left, rect2.left);
            var right = Math.min(rect1.right, rect2.right);
            var width = right - left;
            var height = bottom - top;
            return width >= 0 && height >= 0 && {
              x: left,
              y: top,
              top,
              bottom,
              left,
              right,
              width,
              height
            };
          }
          function getBoundingClientRect(el) {
            var rect;
            try {
              rect = el.getBoundingClientRect();
            } catch (err) {
            }
            if (!rect) return getEmptyRect();
            if (!(rect.width && rect.height && rect.x && rect.y)) {
              rect = {
                x: rect.left,
                y: rect.top,
                top: rect.top,
                right: rect.right,
                bottom: rect.bottom,
                left: rect.left,
                width: rect.right - rect.left,
                height: rect.bottom - rect.top
              };
            }
            return rect;
          }
          function getEmptyRect() {
            return {
              x: 0,
              y: 0,
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              width: 0,
              height: 0
            };
          }
          function containsDeep(parent, child) {
            var node = child;
            while (node) {
              if (node == parent) return true;
              node = getParentNode(node);
            }
            return false;
          }
          function getParentNode(node) {
            var parent = node.parentNode;
            if (parent && parent.nodeType == 11 && parent.host) {
              return parent.host;
            }
            if (parent && parent.assignedSlot) {
              return parent.assignedSlot.parentNode;
            }
            return parent;
          }
          window2.IntersectionObserver = IntersectionObserver2;
          window2.IntersectionObserverEntry = IntersectionObserverEntry;
        })(window, document);
      }
    }).call("object" === typeof window && window || "object" === typeof self && self || "object" === typeof global && global || {});
  }
});

// dist/TextSpacing/TextSpacing.js
require_IntersectionObserver();
var _templateObject;
var _templateObject2;
var _templateObject3;
function _taggedTemplateLiteral(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
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
//! src/TextSpacing/modules/util.ts
var import_ext_gadget = require("ext.gadget.Util");
var isInlineHTMLElement = (node) => {
  return node instanceof HTMLElement && window.getComputedStyle(node).display.includes("inline");
};
var isTextNode = (node) => {
  return node.nodeType === Node.TEXT_NODE;
};
var isVisible = (element) => {
  const style = window.getComputedStyle(element);
  return style.display !== "none" && !["hidden", "collapse"].includes(style.visibility) && Number.parseFloat(style.opacity) > 0;
};
var getNodeText = (node) => {
  return node instanceof HTMLElement ? node.innerText : node.data;
};
var splitAtIndexes = (str, indexes) => {
  const result = [];
  const normalizedIndexes = [
    // Remove duplications and sort in ascending order
    ...(0, import_ext_gadget.uniqueArray)(
      // Replace Set with uniqueArray, avoiding core-js polyfilling
      indexes.sort((a, b) => {
        return a - b;
      }).filter((i) => {
        return i >= 0 && i <= str.length;
      })
    ),
    str.length
  ];
  for (let i = 0; i < normalizedIndexes.length; i++) {
    const slice = str.slice(normalizedIndexes[i - 1], normalizedIndexes[i]);
    result[result.length] = slice;
  }
  return result;
};
//! src/TextSpacing/modules/queue.ts
var pendingActions = /* @__PURE__ */ new WeakMap();
var onIntersection = (entries) => {
  var _iterator = _createForOfIteratorHelper(entries), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      const entry = _step.value;
      if (!entry.isIntersecting) {
        continue;
      }
      const element = entry.target;
      observer.unobserve(element);
      const callbacks = pendingActions.get(element);
      if (!callbacks) {
        continue;
      }
      while (true) {
        const callback = callbacks.shift();
        if (!callback) {
          break;
        }
        callback(element);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
};
var observer = new IntersectionObserver(onIntersection);
var queueDomMutation = (element, callback) => {
  if (!pendingActions.has(element)) {
    pendingActions.set(element, []);
  }
  if (pendingActions.get(element) !== void 0) {
    pendingActions.get(element)[pendingActions.get(element).length] = callback;
  }
  observer.observe(element);
};
//! src/TextSpacing/modules/spacing.ts
var REGEX_RANGE_CHINESE = String.raw(_templateObject || (_templateObject = _taggedTemplateLiteral(["(?:[⺀-⺙⺛-⻳⼀-⿕々〇〡-〩〸-〻㐀-䶿一-鿿豈-舘並-龎]|\uD81B[\uDFE2\uDFE3\uDFF0\uDFF1]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])"], ["(?:[\\u2E80-\\u2E99\\u2E9B-\\u2EF3\\u2F00-\\u2FD5\\u3005\\u3007\\u3021-\\u3029\\u3038-\\u303B\\u3400-\\u4DBF\\u4E00-\\u9FFF\\uF900-\\uFA6D\\uFA70-\\uFAD9]|\\uD81B[\\uDFE2\\uDFE3\\uDFF0\\uDFF1]|[\\uD840-\\uD868\\uD86A-\\uD86C\\uD86F-\\uD872\\uD874-\\uD879\\uD880-\\uD883][\\uDC00-\\uDFFF]|\\uD869[\\uDC00-\\uDEDF\\uDF00-\\uDFFF]|\\uD86D[\\uDC00-\\uDF38\\uDF40-\\uDFFF]|\\uD86E[\\uDC00-\\uDC1D\\uDC20-\\uDFFF]|\\uD873[\\uDC00-\\uDEA1\\uDEB0-\\uDFFF]|\\uD87A[\\uDC00-\\uDFE0]|\\uD87E[\\uDC00-\\uDE1D]|\\uD884[\\uDC00-\\uDF4A])"])));
var REGEX_RANGE_OTHER_LEFT = String.raw(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["[A-Za-z0-9@~%+=|±)}#$¥€£₤]"], ["[A-Za-z0-9@~%+=|±\\)}#$¥€£₤]"])));
var REGEX_RANGE_OTHER_RIGHT = String.raw(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["[A-Za-z0-9@~%+=|±({#$¥€£₤]"], ["[A-Za-z0-9@~%+=|±\\({#$¥€£₤]"])));
var REGEX_STR_INTER_SCRIPT = "(?:(".concat(REGEX_RANGE_CHINESE, ")(?=").concat(REGEX_RANGE_OTHER_RIGHT, ")|(").concat(REGEX_RANGE_OTHER_LEFT, ")(?=").concat(REGEX_RANGE_CHINESE, "))");
var SPACE = " ";
var WRAPPER_CLASS = "gadget-text_spacing";
var SELECTOR_ALLOWED = ["a", "abbr", "article", "aside", "b", "bdi", "big", "blockquote", "button", "caption", "center", "cite", "data", "dd", "del", "details", "dfn", "div", "dt", "em", "figcaption", "footer", "h1", "h2", "h3", "h4", "h5", "header", "i", "ins", "label", "legend", "li", "main", "mark", "option", "p", "q", "ruby", "s", "section", "small", "span", "strike", "strong", "sub", "summary", "sup", "td", "th", "time", "u"];
var SELECTOR_BLOCKED = [
  "code",
  "kbd",
  "pre",
  "rp",
  "rt",
  "samp",
  "textarea",
  "var",
  // Elements with this class are excluded
  ".gadget-nospace",
  // Editable elements
  '[contenteditable="true"]',
  // ACE editor content
  ".ace_editor",
  // Visual Editor (and 2017 Wikitext Editor) content & diff
  ".ve-ui-surface",
  ".ve-init-mw-diffPage-diff",
  // Diff
  ".diff-context",
  ".diff-addedline",
  ".diff-deletedline",
  // Diff (inline mode)
  ".mw-diff-inline-added",
  ".mw-diff-inline-deleted",
  ".mw-diff-inline-moved",
  ".mw-diff-inline-changed",
  ".mw-diff-inline-context"
];
var SELECTOR = SELECTOR_ALLOWED.map((allowed) => {
  return "".concat(allowed, ":not(").concat(SELECTOR_BLOCKED.flatMap((blocked) => {
    return blocked[0].match(/[a-z]/i) ? "".concat(blocked, " *") : [blocked, "".concat(blocked, " *")];
  }).join(","), ")");
}).join(",");
var getLeafElements = (parent) => {
  const candidates = parent.querySelectorAll(SELECTOR);
  const result = [];
  if (parent.matches(SELECTOR)) {
    result[result.length] = parent;
  }
  var _iterator2 = _createForOfIteratorHelper(candidates), _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
      const candidate = _step2.value;
      var _iterator3 = _createForOfIteratorHelper(candidate.childNodes), _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
          const childNode = _step3.value;
          if (isTextNode(childNode)) {
            result[result.length] = candidate;
            break;
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  return result;
};
var getNextVisibleSibling = (node) => {
  let currentNode = node;
  while (true) {
    const candidate = currentNode.nextSibling;
    if (!candidate) {
      const parent = currentNode.parentElement;
      if (!parent) {
        return null;
      }
      currentNode = parent;
      continue;
    }
    if (!(candidate instanceof HTMLElement || candidate instanceof Text)) {
      currentNode = candidate;
      continue;
    }
    if (candidate instanceof HTMLElement) {
      if (!isVisible(candidate)) {
        currentNode = candidate;
        continue;
      }
      if (!isInlineHTMLElement(candidate)) {
        return null;
      }
    }
    if (candidate instanceof Text && !candidate.data.trim()) {
      currentNode = candidate;
      continue;
    }
    return candidate;
  }
};
var createSpacingWrapper = (str) => {
  const span = document.createElement("span");
  span.className = WRAPPER_CLASS;
  span.textContent = str.slice(-1);
  return [str.slice(0, -1), span];
};
var adjustSpacing = (element) => {
  const childNodes = [...element.childNodes];
  const textSpacingPosMap = /* @__PURE__ */ new Map();
  for (var _i = 0, _childNodes = childNodes; _i < _childNodes.length; _i++) {
    const child = _childNodes[_i];
    if (!(child instanceof Text)) {
      continue;
    }
    const nextSibling = getNextVisibleSibling(child);
    let testString = getNodeText(child);
    if (nextSibling) {
      var _getNodeText$;
      testString += (_getNodeText$ = getNodeText(nextSibling)[0]) !== null && _getNodeText$ !== void 0 ? _getNodeText$ : "";
    }
    const indexes = [];
    const regexTextNodeData = new RegExp(REGEX_STR_INTER_SCRIPT, "g");
    while (true) {
      const match = regexTextNodeData.exec(testString);
      if (!match) {
        break;
      }
      indexes[indexes.length] = match.index + 1;
    }
    if (!indexes.length) {
      continue;
    }
    textSpacingPosMap.set(child, indexes);
  }
  queueDomMutation(element, () => {
    var _iterator4 = _createForOfIteratorHelper(textSpacingPosMap), _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
        const [node, indexes] = _step4.value;
        const text = node.data;
        const fragments = splitAtIndexes(text, indexes);
        const replacement = fragments.slice(0, -1).flatMap((fragment) => {
          return createSpacingWrapper(fragment);
        });
        replacement[replacement.length] = fragments.at(-1);
        requestAnimationFrame(() => {
          node.replaceWith(...replacement);
        });
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
  });
};
var addSpaceToString = (str) => {
  const regex = new RegExp(REGEX_STR_INTER_SCRIPT, "g");
  return str.replace(regex, "$1$2".concat(SPACE));
};
//! src/TextSpacing/modules/supportsTextAutospace.ts
var supportsTextAutospace = () => {
  if (typeof CSS !== "undefined" && typeof CSS.supports === "function") {
    if (CSS.supports("text-autospace", "normal")) {
      return true;
    }
    return false;
  }
  return false;
};
//! src/TextSpacing/TextSpacing.ts
var run = (element) => {
  const leaves = getLeafElements(element);
  var _iterator5 = _createForOfIteratorHelper(leaves), _step5;
  try {
    for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
      const leaf = _step5.value;
      adjustSpacing(leaf);
    }
  } catch (err) {
    _iterator5.e(err);
  } finally {
    _iterator5.f();
  }
};
var mutationObserver = new MutationObserver((records) => {
  var _iterator6 = _createForOfIteratorHelper(records), _step6;
  try {
    for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
      const record = _step6.value;
      if (record.type !== "childList") {
        continue;
      }
      const addedNodes = [...record.addedNodes];
      if (addedNodes.some((node) => {
        return node instanceof HTMLElement && node.classList.contains(WRAPPER_CLASS);
      })) {
        continue;
      }
      for (var _i2 = 0, _addedNodes = addedNodes; _i2 < _addedNodes.length; _i2++) {
        const node = _addedNodes[_i2];
        if (node instanceof HTMLElement) {
          run(node);
        } else if (node instanceof Text) {
          const {
            parentElement
          } = node;
          if (parentElement) {
            run(parentElement);
          }
        }
      }
    }
  } catch (err) {
    _iterator6.e(err);
  } finally {
    _iterator6.f();
  }
});
var main = () => {
  document.title = addSpaceToString(document.title);
  const output = document.querySelector(".mw-parser-output");
  if (!output) {
    return;
  }
  mutationObserver.observe(output, {
    subtree: true,
    childList: true
  });
  run(output);
};
if (supportsTextAutospace()) {
  console.info("[TextSpacing] text-autospace is supported natively; no need to run the script.");
} else {
  $(main);
}

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL0BtcmhlbnJ5K2NvcmUtd2ViQDEuMi40L25vZGVfbW9kdWxlcy9AbXJoZW5yeS9jb3JlLXdlYi9tb2R1bGVzL0ludGVyc2VjdGlvbk9ic2VydmVyLmpzIiwgInNyYy9UZXh0U3BhY2luZy9tb2R1bGVzL3V0aWwudHMiLCAic3JjL1RleHRTcGFjaW5nL21vZHVsZXMvcXVldWUudHMiLCAic3JjL1RleHRTcGFjaW5nL21vZHVsZXMvc3BhY2luZy50cyIsICJzcmMvVGV4dFNwYWNpbmcvbW9kdWxlcy9zdXBwb3J0c1RleHRBdXRvc3BhY2UudHMiLCAic3JjL1RleHRTcGFjaW5nL1RleHRTcGFjaW5nLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIoZnVuY3Rpb24odW5kZWZpbmVkKSB7XG5pZiAoIShcIkludGVyc2VjdGlvbk9ic2VydmVyXCJpbiB3aW5kb3cmJlwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeVwiaW4gd2luZG93JiZcImludGVyc2VjdGlvblJhdGlvXCJpbiB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeS5wcm90b3R5cGVcbikpIHtcbi8vIEludGVyc2VjdGlvbk9ic2VydmVyXG4vKipcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIFczQyBTT0ZUV0FSRSBBTkQgRE9DVU1FTlQgTk9USUNFIEFORCBMSUNFTlNFLlxuICpcbiAqICBodHRwczovL3d3dy53My5vcmcvQ29uc29ydGl1bS9MZWdhbC8yMDE1L2NvcHlyaWdodC1zb2Z0d2FyZS1hbmQtZG9jdW1lbnRcbiAqXG4gKi9cblxuKGZ1bmN0aW9uKHdpbmRvdywgZG9jdW1lbnQpIHtcbid1c2Ugc3RyaWN0JztcblxudmFyIHN1cHBvcnRlZE5hdGl2ZWx5ID0gJ0ludGVyc2VjdGlvbk9ic2VydmVyJyBpbiB3aW5kb3cgJiZcbidJbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5JyBpbiB3aW5kb3cgJiZcbidpbnRlcnNlY3Rpb25SYXRpbycgaW4gd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyRW50cnkucHJvdG90eXBlO1xuXG5pZiAoc3VwcG9ydGVkTmF0aXZlbHkpIHtcblx0cmV0dXJuO1xufVxuLyoqXG4gKiBBbiBJbnRlcnNlY3Rpb25PYnNlcnZlciByZWdpc3RyeS4gVGhpcyByZWdpc3RyeSBleGlzdHMgdG8gaG9sZCBhIHN0cm9uZ1xuICogcmVmZXJlbmNlIHRvIEludGVyc2VjdGlvbk9ic2VydmVyIGluc3RhbmNlcyBjdXJyZW50bHkgb2JzZXJ2aW5nIGEgdGFyZ2V0XG4gKiBlbGVtZW50LiBXaXRob3V0IHRoaXMgcmVnaXN0cnksIGluc3RhbmNlcyB3aXRob3V0IGFub3RoZXIgcmVmZXJlbmNlIG1heSBiZVxuICogZ2FyYmFnZSBjb2xsZWN0ZWQuXG4gKi9cbnZhciByZWdpc3RyeSA9IFtdO1xuXG5cbi8qKlxuICogQ3JlYXRlcyB0aGUgZ2xvYmFsIEludGVyc2VjdGlvbk9ic2VydmVyRW50cnkgY29uc3RydWN0b3IuXG4gKiBodHRwczovL3czYy5naXRodWIuaW8vSW50ZXJzZWN0aW9uT2JzZXJ2ZXIvI2ludGVyc2VjdGlvbi1vYnNlcnZlci1lbnRyeVxuICogQHBhcmFtIHtPYmplY3R9IGVudHJ5IEEgZGljdGlvbmFyeSBvZiBpbnN0YW5jZSBwcm9wZXJ0aWVzLlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIEludGVyc2VjdGlvbk9ic2VydmVyRW50cnkoZW50cnkpIHtcblx0dGhpcy50aW1lID0gZW50cnkudGltZTtcblx0dGhpcy50YXJnZXQgPSBlbnRyeS50YXJnZXQ7XG5cdHRoaXMucm9vdEJvdW5kcyA9IGVudHJ5LnJvb3RCb3VuZHM7XG5cdHRoaXMuYm91bmRpbmdDbGllbnRSZWN0ID0gZW50cnkuYm91bmRpbmdDbGllbnRSZWN0O1xuXHR0aGlzLmludGVyc2VjdGlvblJlY3QgPSBlbnRyeS5pbnRlcnNlY3Rpb25SZWN0IHx8IGdldEVtcHR5UmVjdCgpO1xuXHR0cnkge1xuXHRcdHRoaXMuaXNJbnRlcnNlY3RpbmcgPSAhIWVudHJ5LmludGVyc2VjdGlvblJlY3Q7XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdC8vIFRoaXMgbWVhbnMgd2UgYXJlIHVzaW5nIHRoZSBJbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5IHBvbHlmaWxsIHdoaWNoIGhhcyBvbmx5IGRlZmluZWQgYSBnZXR0ZXJcblx0fVxuXG5cdC8vIENhbGN1bGF0ZXMgdGhlIGludGVyc2VjdGlvbiByYXRpby5cblx0dmFyIHRhcmdldFJlY3QgPSB0aGlzLmJvdW5kaW5nQ2xpZW50UmVjdDtcblx0dmFyIHRhcmdldEFyZWEgPSB0YXJnZXRSZWN0LndpZHRoICogdGFyZ2V0UmVjdC5oZWlnaHQ7XG5cdHZhciBpbnRlcnNlY3Rpb25SZWN0ID0gdGhpcy5pbnRlcnNlY3Rpb25SZWN0O1xuXHR2YXIgaW50ZXJzZWN0aW9uQXJlYSA9IGludGVyc2VjdGlvblJlY3Qud2lkdGggKiBpbnRlcnNlY3Rpb25SZWN0LmhlaWdodDtcblxuXHQvLyBTZXRzIGludGVyc2VjdGlvbiByYXRpby5cblx0aWYgKHRhcmdldEFyZWEpIHtcblx0XHQvLyBSb3VuZCB0aGUgaW50ZXJzZWN0aW9uIHJhdGlvIHRvIGF2b2lkIGZsb2F0aW5nIHBvaW50IG1hdGggaXNzdWVzOlxuXHRcdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS93M2MvSW50ZXJzZWN0aW9uT2JzZXJ2ZXIvaXNzdWVzLzMyNFxuXHRcdHRoaXMuaW50ZXJzZWN0aW9uUmF0aW8gPSBOdW1iZXIoKGludGVyc2VjdGlvbkFyZWEgLyB0YXJnZXRBcmVhKS50b0ZpeGVkKDQpKTtcblx0fSBlbHNlIHtcblx0XHQvLyBJZiBhcmVhIGlzIHplcm8gYW5kIGlzIGludGVyc2VjdGluZywgc2V0cyB0byAxLCBvdGhlcndpc2UgdG8gMFxuXHRcdHRoaXMuaW50ZXJzZWN0aW9uUmF0aW8gPSB0aGlzLmlzSW50ZXJzZWN0aW5nID8gMSA6IDA7XG5cdH1cbn1cblxuSW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeS5wcm90b3R5cGUuaW50ZXJzZWN0aW9uUmF0aW8gPSAwO1xuXG4vKipcbiAqIENyZWF0ZXMgdGhlIGdsb2JhbCBJbnRlcnNlY3Rpb25PYnNlcnZlciBjb25zdHJ1Y3Rvci5cbiAqIGh0dHBzOi8vdzNjLmdpdGh1Yi5pby9JbnRlcnNlY3Rpb25PYnNlcnZlci8jaW50ZXJzZWN0aW9uLW9ic2VydmVyLWludGVyZmFjZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgVGhlIGZ1bmN0aW9uIHRvIGJlIGludm9rZWQgYWZ0ZXIgaW50ZXJzZWN0aW9uXG4gKiAgICAgY2hhbmdlcyBoYXZlIHF1ZXVlZC4gVGhlIGZ1bmN0aW9uIGlzIG5vdCBpbnZva2VkIGlmIHRoZSBxdWV1ZSBoYXNcbiAqICAgICBiZWVuIGVtcHRpZWQgYnkgY2FsbGluZyB0aGUgYHRha2VSZWNvcmRzYCBtZXRob2QuXG4gKiBAcGFyYW0ge09iamVjdD19IG9wdF9vcHRpb25zIE9wdGlvbmFsIGNvbmZpZ3VyYXRpb24gb3B0aW9ucy5cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBJbnRlcnNlY3Rpb25PYnNlcnZlcihjYWxsYmFjaywgb3B0X29wdGlvbnMpIHtcblxuXHR2YXIgb3B0aW9ucyA9IG9wdF9vcHRpb25zIHx8IHt9O1xuXG5cdGlmICh0eXBlb2YgY2FsbGJhY2sgIT0gJ2Z1bmN0aW9uJykge1xuXHRcdHRocm93IG5ldyBFcnJvcignY2FsbGJhY2sgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG5cdH1cblxuXHRpZiAob3B0aW9ucy5yb290ICYmIG9wdGlvbnMucm9vdC5ub2RlVHlwZSAhPSAxKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdyb290IG11c3QgYmUgYW4gRWxlbWVudCcpO1xuXHR9XG5cblx0Ly8gQmluZHMgYW5kIHRocm90dGxlcyBgdGhpcy5fY2hlY2tGb3JJbnRlcnNlY3Rpb25zYC5cblx0dGhpcy5fY2hlY2tGb3JJbnRlcnNlY3Rpb25zID0gdGhyb3R0bGUoXG5cdFx0XHR0aGlzLl9jaGVja0ZvckludGVyc2VjdGlvbnMuYmluZCh0aGlzKSwgdGhpcy5USFJPVFRMRV9USU1FT1VUKTtcblxuXHQvLyBQcml2YXRlIHByb3BlcnRpZXMuXG5cdHRoaXMuX2NhbGxiYWNrID0gY2FsbGJhY2s7XG5cdHRoaXMuX29ic2VydmF0aW9uVGFyZ2V0cyA9IFtdO1xuXHR0aGlzLl9xdWV1ZWRFbnRyaWVzID0gW107XG5cdHRoaXMuX3Jvb3RNYXJnaW5WYWx1ZXMgPSB0aGlzLl9wYXJzZVJvb3RNYXJnaW4ob3B0aW9ucy5yb290TWFyZ2luKTtcblxuXHQvLyBQdWJsaWMgcHJvcGVydGllcy5cblx0dGhpcy50aHJlc2hvbGRzID0gdGhpcy5faW5pdFRocmVzaG9sZHMob3B0aW9ucy50aHJlc2hvbGQpO1xuXHR0aGlzLnJvb3QgPSBvcHRpb25zLnJvb3QgfHwgbnVsbDtcblx0dGhpcy5yb290TWFyZ2luID0gdGhpcy5fcm9vdE1hcmdpblZhbHVlcy5tYXAoZnVuY3Rpb24obWFyZ2luKSB7XG5cdFx0cmV0dXJuIG1hcmdpbi52YWx1ZSArIG1hcmdpbi51bml0O1xuXHR9KS5qb2luKCcgJyk7XG59XG5cblxuLyoqXG4gKiBUaGUgbWluaW11bSBpbnRlcnZhbCB3aXRoaW4gd2hpY2ggdGhlIGRvY3VtZW50IHdpbGwgYmUgY2hlY2tlZCBmb3JcbiAqIGludGVyc2VjdGlvbiBjaGFuZ2VzLlxuICovXG5JbnRlcnNlY3Rpb25PYnNlcnZlci5wcm90b3R5cGUuVEhST1RUTEVfVElNRU9VVCA9IDEwMDtcblxuXG4vKipcbiAqIFRoZSBmcmVxdWVuY3kgaW4gd2hpY2ggdGhlIHBvbHlmaWxsIHBvbGxzIGZvciBpbnRlcnNlY3Rpb24gY2hhbmdlcy5cbiAqIHRoaXMgY2FuIGJlIHVwZGF0ZWQgb24gYSBwZXIgaW5zdGFuY2UgYmFzaXMgYW5kIG11c3QgYmUgc2V0IHByaW9yIHRvXG4gKiBjYWxsaW5nIGBvYnNlcnZlYCBvbiB0aGUgZmlyc3QgdGFyZ2V0LlxuICovXG5JbnRlcnNlY3Rpb25PYnNlcnZlci5wcm90b3R5cGUuUE9MTF9JTlRFUlZBTCA9IG51bGw7XG5cbi8qKlxuICogVXNlIGEgbXV0YXRpb24gb2JzZXJ2ZXIgb24gdGhlIHJvb3QgZWxlbWVudFxuICogdG8gZGV0ZWN0IGludGVyc2VjdGlvbiBjaGFuZ2VzLlxuICovXG5JbnRlcnNlY3Rpb25PYnNlcnZlci5wcm90b3R5cGUuVVNFX01VVEFUSU9OX09CU0VSVkVSID0gdHJ1ZTtcblxuXG4vKipcbiAqIFN0YXJ0cyBvYnNlcnZpbmcgYSB0YXJnZXQgZWxlbWVudCBmb3IgaW50ZXJzZWN0aW9uIGNoYW5nZXMgYmFzZWQgb25cbiAqIHRoZSB0aHJlc2hvbGRzIHZhbHVlcy5cbiAqIEBwYXJhbSB7RWxlbWVudH0gdGFyZ2V0IFRoZSBET00gZWxlbWVudCB0byBvYnNlcnZlLlxuICovXG5JbnRlcnNlY3Rpb25PYnNlcnZlci5wcm90b3R5cGUub2JzZXJ2ZSA9IGZ1bmN0aW9uKHRhcmdldCkge1xuXHR2YXIgaXNUYXJnZXRBbHJlYWR5T2JzZXJ2ZWQgPSB0aGlzLl9vYnNlcnZhdGlvblRhcmdldHMuc29tZShmdW5jdGlvbihpdGVtKSB7XG5cdFx0cmV0dXJuIGl0ZW0uZWxlbWVudCA9PSB0YXJnZXQ7XG5cdH0pO1xuXG5cdGlmIChpc1RhcmdldEFscmVhZHlPYnNlcnZlZCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGlmICghKHRhcmdldCAmJiB0YXJnZXQubm9kZVR5cGUgPT0gMSkpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ3RhcmdldCBtdXN0IGJlIGFuIEVsZW1lbnQnKTtcblx0fVxuXG5cdHRoaXMuX3JlZ2lzdGVySW5zdGFuY2UoKTtcblx0dGhpcy5fb2JzZXJ2YXRpb25UYXJnZXRzLnB1c2goe2VsZW1lbnQ6IHRhcmdldCwgZW50cnk6IG51bGx9KTtcblx0dGhpcy5fbW9uaXRvckludGVyc2VjdGlvbnMoKTtcblx0dGhpcy5fY2hlY2tGb3JJbnRlcnNlY3Rpb25zKCk7XG59O1xuXG5cbi8qKlxuICogU3RvcHMgb2JzZXJ2aW5nIGEgdGFyZ2V0IGVsZW1lbnQgZm9yIGludGVyc2VjdGlvbiBjaGFuZ2VzLlxuICogQHBhcmFtIHtFbGVtZW50fSB0YXJnZXQgVGhlIERPTSBlbGVtZW50IHRvIG9ic2VydmUuXG4gKi9cbkludGVyc2VjdGlvbk9ic2VydmVyLnByb3RvdHlwZS51bm9ic2VydmUgPSBmdW5jdGlvbih0YXJnZXQpIHtcblx0dGhpcy5fb2JzZXJ2YXRpb25UYXJnZXRzID1cblx0XHRcdHRoaXMuX29ic2VydmF0aW9uVGFyZ2V0cy5maWx0ZXIoZnVuY3Rpb24oaXRlbSkge1xuXG5cdFx0cmV0dXJuIGl0ZW0uZWxlbWVudCAhPSB0YXJnZXQ7XG5cdH0pO1xuXHRpZiAoIXRoaXMuX29ic2VydmF0aW9uVGFyZ2V0cy5sZW5ndGgpIHtcblx0XHR0aGlzLl91bm1vbml0b3JJbnRlcnNlY3Rpb25zKCk7XG5cdFx0dGhpcy5fdW5yZWdpc3Rlckluc3RhbmNlKCk7XG5cdH1cbn07XG5cblxuLyoqXG4gKiBTdG9wcyBvYnNlcnZpbmcgYWxsIHRhcmdldCBlbGVtZW50cyBmb3IgaW50ZXJzZWN0aW9uIGNoYW5nZXMuXG4gKi9cbkludGVyc2VjdGlvbk9ic2VydmVyLnByb3RvdHlwZS5kaXNjb25uZWN0ID0gZnVuY3Rpb24oKSB7XG5cdHRoaXMuX29ic2VydmF0aW9uVGFyZ2V0cyA9IFtdO1xuXHR0aGlzLl91bm1vbml0b3JJbnRlcnNlY3Rpb25zKCk7XG5cdHRoaXMuX3VucmVnaXN0ZXJJbnN0YW5jZSgpO1xufTtcblxuXG4vKipcbiAqIFJldHVybnMgYW55IHF1ZXVlIGVudHJpZXMgdGhhdCBoYXZlIG5vdCB5ZXQgYmVlbiByZXBvcnRlZCB0byB0aGVcbiAqIGNhbGxiYWNrIGFuZCBjbGVhcnMgdGhlIHF1ZXVlLiBUaGlzIGNhbiBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggdGhlXG4gKiBjYWxsYmFjayB0byBvYnRhaW4gdGhlIGFic29sdXRlIG1vc3QgdXAtdG8tZGF0ZSBpbnRlcnNlY3Rpb24gaW5mb3JtYXRpb24uXG4gKiBAcmV0dXJuIHtBcnJheX0gVGhlIGN1cnJlbnRseSBxdWV1ZWQgZW50cmllcy5cbiAqL1xuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIucHJvdG90eXBlLnRha2VSZWNvcmRzID0gZnVuY3Rpb24oKSB7XG5cdHZhciByZWNvcmRzID0gdGhpcy5fcXVldWVkRW50cmllcy5zbGljZSgpO1xuXHR0aGlzLl9xdWV1ZWRFbnRyaWVzID0gW107XG5cdHJldHVybiByZWNvcmRzO1xufTtcblxuXG4vKipcbiAqIEFjY2VwdHMgdGhlIHRocmVzaG9sZCB2YWx1ZSBmcm9tIHRoZSB1c2VyIGNvbmZpZ3VyYXRpb24gb2JqZWN0IGFuZFxuICogcmV0dXJucyBhIHNvcnRlZCBhcnJheSBvZiB1bmlxdWUgdGhyZXNob2xkIHZhbHVlcy4gSWYgYSB2YWx1ZSBpcyBub3RcbiAqIGJldHdlZW4gMCBhbmQgMSBhbmQgZXJyb3IgaXMgdGhyb3duLlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl8bnVtYmVyPX0gb3B0X3RocmVzaG9sZCBBbiBvcHRpb25hbCB0aHJlc2hvbGQgdmFsdWUgb3JcbiAqICAgICBhIGxpc3Qgb2YgdGhyZXNob2xkIHZhbHVlcywgZGVmYXVsdGluZyB0byBbMF0uXG4gKiBAcmV0dXJuIHtBcnJheX0gQSBzb3J0ZWQgbGlzdCBvZiB1bmlxdWUgYW5kIHZhbGlkIHRocmVzaG9sZCB2YWx1ZXMuXG4gKi9cbkludGVyc2VjdGlvbk9ic2VydmVyLnByb3RvdHlwZS5faW5pdFRocmVzaG9sZHMgPSBmdW5jdGlvbihvcHRfdGhyZXNob2xkKSB7XG5cdHZhciB0aHJlc2hvbGQgPSBvcHRfdGhyZXNob2xkIHx8IFswXTtcblx0aWYgKCFBcnJheS5pc0FycmF5KHRocmVzaG9sZCkpIHRocmVzaG9sZCA9IFt0aHJlc2hvbGRdO1xuXG5cdHJldHVybiB0aHJlc2hvbGQuc29ydCgpLmZpbHRlcihmdW5jdGlvbih0LCBpLCBhKSB7XG5cdFx0aWYgKHR5cGVvZiB0ICE9ICdudW1iZXInIHx8IGlzTmFOKHQpIHx8IHQgPCAwIHx8IHQgPiAxKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ3RocmVzaG9sZCBtdXN0IGJlIGEgbnVtYmVyIGJldHdlZW4gMCBhbmQgMSBpbmNsdXNpdmVseScpO1xuXHRcdH1cblx0XHRyZXR1cm4gdCAhPT0gYVtpIC0gMV07XG5cdH0pO1xufTtcblxuXG4vKipcbiAqIEFjY2VwdHMgdGhlIHJvb3RNYXJnaW4gdmFsdWUgZnJvbSB0aGUgdXNlciBjb25maWd1cmF0aW9uIG9iamVjdFxuICogYW5kIHJldHVybnMgYW4gYXJyYXkgb2YgdGhlIGZvdXIgbWFyZ2luIHZhbHVlcyBhcyBhbiBvYmplY3QgY29udGFpbmluZ1xuICogdGhlIHZhbHVlIGFuZCB1bml0IHByb3BlcnRpZXMuIElmIGFueSBvZiB0aGUgdmFsdWVzIGFyZSBub3QgcHJvcGVybHlcbiAqIGZvcm1hdHRlZCBvciB1c2UgYSB1bml0IG90aGVyIHRoYW4gcHggb3IgJSwgYW5kIGVycm9yIGlzIHRocm93bi5cbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZz19IG9wdF9yb290TWFyZ2luIEFuIG9wdGlvbmFsIHJvb3RNYXJnaW4gdmFsdWUsXG4gKiAgICAgZGVmYXVsdGluZyB0byAnMHB4Jy5cbiAqIEByZXR1cm4ge0FycmF5PE9iamVjdD59IEFuIGFycmF5IG9mIG1hcmdpbiBvYmplY3RzIHdpdGggdGhlIGtleXNcbiAqICAgICB2YWx1ZSBhbmQgdW5pdC5cbiAqL1xuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIucHJvdG90eXBlLl9wYXJzZVJvb3RNYXJnaW4gPSBmdW5jdGlvbihvcHRfcm9vdE1hcmdpbikge1xuXHR2YXIgbWFyZ2luU3RyaW5nID0gb3B0X3Jvb3RNYXJnaW4gfHwgJzBweCc7XG5cdHZhciBtYXJnaW5zID0gbWFyZ2luU3RyaW5nLnNwbGl0KC9cXHMrLykubWFwKGZ1bmN0aW9uKG1hcmdpbikge1xuXHRcdHZhciBwYXJ0cyA9IC9eKC0/XFxkKlxcLj9cXGQrKShweHwlKSQvLmV4ZWMobWFyZ2luKTtcblx0XHRpZiAoIXBhcnRzKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ3Jvb3RNYXJnaW4gbXVzdCBiZSBzcGVjaWZpZWQgaW4gcGl4ZWxzIG9yIHBlcmNlbnQnKTtcblx0XHR9XG5cdFx0cmV0dXJuIHt2YWx1ZTogcGFyc2VGbG9hdChwYXJ0c1sxXSksIHVuaXQ6IHBhcnRzWzJdfTtcblx0fSk7XG5cblx0Ly8gSGFuZGxlcyBzaG9ydGhhbmQuXG5cdG1hcmdpbnNbMV0gPSBtYXJnaW5zWzFdIHx8IG1hcmdpbnNbMF07XG5cdG1hcmdpbnNbMl0gPSBtYXJnaW5zWzJdIHx8IG1hcmdpbnNbMF07XG5cdG1hcmdpbnNbM10gPSBtYXJnaW5zWzNdIHx8IG1hcmdpbnNbMV07XG5cblx0cmV0dXJuIG1hcmdpbnM7XG59O1xuXG5cbi8qKlxuICogU3RhcnRzIHBvbGxpbmcgZm9yIGludGVyc2VjdGlvbiBjaGFuZ2VzIGlmIHRoZSBwb2xsaW5nIGlzIG5vdCBhbHJlYWR5XG4gKiBoYXBwZW5pbmcsIGFuZCBpZiB0aGUgcGFnZSdzIHZpc2liaWxpdHkgc3RhdGUgaXMgdmlzaWJsZS5cbiAqIEBwcml2YXRlXG4gKi9cbkludGVyc2VjdGlvbk9ic2VydmVyLnByb3RvdHlwZS5fbW9uaXRvckludGVyc2VjdGlvbnMgPSBmdW5jdGlvbigpIHtcblx0aWYgKCF0aGlzLl9tb25pdG9yaW5nSW50ZXJzZWN0aW9ucykge1xuXHRcdHRoaXMuX21vbml0b3JpbmdJbnRlcnNlY3Rpb25zID0gdHJ1ZTtcblxuXHRcdC8vIElmIGEgcG9sbCBpbnRlcnZhbCBpcyBzZXQsIHVzZSBwb2xsaW5nIGluc3RlYWQgb2YgbGlzdGVuaW5nIHRvXG5cdFx0Ly8gcmVzaXplIGFuZCBzY3JvbGwgZXZlbnRzIG9yIERPTSBtdXRhdGlvbnMuXG5cdFx0aWYgKHRoaXMuUE9MTF9JTlRFUlZBTCkge1xuXHRcdFx0dGhpcy5fbW9uaXRvcmluZ0ludGVydmFsID0gc2V0SW50ZXJ2YWwoXG5cdFx0XHRcdFx0dGhpcy5fY2hlY2tGb3JJbnRlcnNlY3Rpb25zLCB0aGlzLlBPTExfSU5URVJWQUwpO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdGFkZEV2ZW50KHdpbmRvdywgJ3Jlc2l6ZScsIHRoaXMuX2NoZWNrRm9ySW50ZXJzZWN0aW9ucywgdHJ1ZSk7XG5cdFx0XHRhZGRFdmVudChkb2N1bWVudCwgJ3Njcm9sbCcsIHRoaXMuX2NoZWNrRm9ySW50ZXJzZWN0aW9ucywgdHJ1ZSk7XG5cblx0XHRcdGlmICh0aGlzLlVTRV9NVVRBVElPTl9PQlNFUlZFUiAmJiAnTXV0YXRpb25PYnNlcnZlcicgaW4gd2luZG93KSB7XG5cdFx0XHRcdHRoaXMuX2RvbU9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIodGhpcy5fY2hlY2tGb3JJbnRlcnNlY3Rpb25zKTtcblx0XHRcdFx0dGhpcy5fZG9tT2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudCwge1xuXHRcdFx0XHRcdGF0dHJpYnV0ZXM6IHRydWUsXG5cdFx0XHRcdFx0Y2hpbGRMaXN0OiB0cnVlLFxuXHRcdFx0XHRcdGNoYXJhY3RlckRhdGE6IHRydWUsXG5cdFx0XHRcdFx0c3VidHJlZTogdHJ1ZVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn07XG5cblxuLyoqXG4gKiBTdG9wcyBwb2xsaW5nIGZvciBpbnRlcnNlY3Rpb24gY2hhbmdlcy5cbiAqIEBwcml2YXRlXG4gKi9cbkludGVyc2VjdGlvbk9ic2VydmVyLnByb3RvdHlwZS5fdW5tb25pdG9ySW50ZXJzZWN0aW9ucyA9IGZ1bmN0aW9uKCkge1xuXHRpZiAodGhpcy5fbW9uaXRvcmluZ0ludGVyc2VjdGlvbnMpIHtcblx0XHR0aGlzLl9tb25pdG9yaW5nSW50ZXJzZWN0aW9ucyA9IGZhbHNlO1xuXG5cdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLl9tb25pdG9yaW5nSW50ZXJ2YWwpO1xuXHRcdHRoaXMuX21vbml0b3JpbmdJbnRlcnZhbCA9IG51bGw7XG5cblx0XHRyZW1vdmVFdmVudCh3aW5kb3csICdyZXNpemUnLCB0aGlzLl9jaGVja0ZvckludGVyc2VjdGlvbnMsIHRydWUpO1xuXHRcdHJlbW92ZUV2ZW50KGRvY3VtZW50LCAnc2Nyb2xsJywgdGhpcy5fY2hlY2tGb3JJbnRlcnNlY3Rpb25zLCB0cnVlKTtcblxuXHRcdGlmICh0aGlzLl9kb21PYnNlcnZlcikge1xuXHRcdFx0dGhpcy5fZG9tT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuXHRcdFx0dGhpcy5fZG9tT2JzZXJ2ZXIgPSBudWxsO1xuXHRcdH1cblx0fVxufTtcblxuXG4vKipcbiAqIFNjYW5zIGVhY2ggb2JzZXJ2YXRpb24gdGFyZ2V0IGZvciBpbnRlcnNlY3Rpb24gY2hhbmdlcyBhbmQgYWRkcyB0aGVtXG4gKiB0byB0aGUgaW50ZXJuYWwgZW50cmllcyBxdWV1ZS4gSWYgbmV3IGVudHJpZXMgYXJlIGZvdW5kLCBpdFxuICogc2NoZWR1bGVzIHRoZSBjYWxsYmFjayB0byBiZSBpbnZva2VkLlxuICogQHByaXZhdGVcbiAqL1xuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIucHJvdG90eXBlLl9jaGVja0ZvckludGVyc2VjdGlvbnMgPSBmdW5jdGlvbigpIHtcblx0dmFyIHJvb3RJc0luRG9tID0gdGhpcy5fcm9vdElzSW5Eb20oKTtcblx0dmFyIHJvb3RSZWN0ID0gcm9vdElzSW5Eb20gPyB0aGlzLl9nZXRSb290UmVjdCgpIDogZ2V0RW1wdHlSZWN0KCk7XG5cblx0dGhpcy5fb2JzZXJ2YXRpb25UYXJnZXRzLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xuXHRcdHZhciB0YXJnZXQgPSBpdGVtLmVsZW1lbnQ7XG5cdFx0dmFyIHRhcmdldFJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3QodGFyZ2V0KTtcblx0XHR2YXIgcm9vdENvbnRhaW5zVGFyZ2V0ID0gdGhpcy5fcm9vdENvbnRhaW5zVGFyZ2V0KHRhcmdldCk7XG5cdFx0dmFyIG9sZEVudHJ5ID0gaXRlbS5lbnRyeTtcblx0XHR2YXIgaW50ZXJzZWN0aW9uUmVjdCA9IHJvb3RJc0luRG9tICYmIHJvb3RDb250YWluc1RhcmdldCAmJlxuXHRcdFx0XHR0aGlzLl9jb21wdXRlVGFyZ2V0QW5kUm9vdEludGVyc2VjdGlvbih0YXJnZXQsIHJvb3RSZWN0KTtcblxuXHRcdHZhciBuZXdFbnRyeSA9IGl0ZW0uZW50cnkgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeSh7XG5cdFx0XHR0aW1lOiBub3coKSxcblx0XHRcdHRhcmdldDogdGFyZ2V0LFxuXHRcdFx0Ym91bmRpbmdDbGllbnRSZWN0OiB0YXJnZXRSZWN0LFxuXHRcdFx0cm9vdEJvdW5kczogcm9vdFJlY3QsXG5cdFx0XHRpbnRlcnNlY3Rpb25SZWN0OiBpbnRlcnNlY3Rpb25SZWN0XG5cdFx0fSk7XG5cblx0XHRpZiAoIW9sZEVudHJ5KSB7XG5cdFx0XHR0aGlzLl9xdWV1ZWRFbnRyaWVzLnB1c2gobmV3RW50cnkpO1xuXHRcdH0gZWxzZSBpZiAocm9vdElzSW5Eb20gJiYgcm9vdENvbnRhaW5zVGFyZ2V0KSB7XG5cdFx0XHQvLyBJZiB0aGUgbmV3IGVudHJ5IGludGVyc2VjdGlvbiByYXRpbyBoYXMgY3Jvc3NlZCBhbnkgb2YgdGhlXG5cdFx0XHQvLyB0aHJlc2hvbGRzLCBhZGQgYSBuZXcgZW50cnkuXG5cdFx0XHRpZiAodGhpcy5faGFzQ3Jvc3NlZFRocmVzaG9sZChvbGRFbnRyeSwgbmV3RW50cnkpKSB7XG5cdFx0XHRcdHRoaXMuX3F1ZXVlZEVudHJpZXMucHVzaChuZXdFbnRyeSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIElmIHRoZSByb290IGlzIG5vdCBpbiB0aGUgRE9NIG9yIHRhcmdldCBpcyBub3QgY29udGFpbmVkIHdpdGhpblxuXHRcdFx0Ly8gcm9vdCBidXQgdGhlIHByZXZpb3VzIGVudHJ5IGZvciB0aGlzIHRhcmdldCBoYWQgYW4gaW50ZXJzZWN0aW9uLFxuXHRcdFx0Ly8gYWRkIGEgbmV3IHJlY29yZCBpbmRpY2F0aW5nIHJlbW92YWwuXG5cdFx0XHRpZiAob2xkRW50cnkgJiYgb2xkRW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcblx0XHRcdFx0dGhpcy5fcXVldWVkRW50cmllcy5wdXNoKG5ld0VudHJ5KTtcblx0XHRcdH1cblx0XHR9XG5cdH0sIHRoaXMpO1xuXG5cdGlmICh0aGlzLl9xdWV1ZWRFbnRyaWVzLmxlbmd0aCkge1xuXHRcdHRoaXMuX2NhbGxiYWNrKHRoaXMudGFrZVJlY29yZHMoKSwgdGhpcyk7XG5cdH1cbn07XG5cblxuLyoqXG4gKiBBY2NlcHRzIGEgdGFyZ2V0IGFuZCByb290IHJlY3QgY29tcHV0ZXMgdGhlIGludGVyc2VjdGlvbiBiZXR3ZWVuIHRoZW5cbiAqIGZvbGxvd2luZyB0aGUgYWxnb3JpdGhtIGluIHRoZSBzcGVjLlxuICogVE9ETyhwaGlsaXB3YWx0b24pOiBhdCB0aGlzIHRpbWUgY2xpcC1wYXRoIGlzIG5vdCBjb25zaWRlcmVkLlxuICogaHR0cHM6Ly93M2MuZ2l0aHViLmlvL0ludGVyc2VjdGlvbk9ic2VydmVyLyNjYWxjdWxhdGUtaW50ZXJzZWN0aW9uLXJlY3QtYWxnb1xuICogQHBhcmFtIHtFbGVtZW50fSB0YXJnZXQgVGhlIHRhcmdldCBET00gZWxlbWVudFxuICogQHBhcmFtIHtPYmplY3R9IHJvb3RSZWN0IFRoZSBib3VuZGluZyByZWN0IG9mIHRoZSByb290IGFmdGVyIGJlaW5nXG4gKiAgICAgZXhwYW5kZWQgYnkgdGhlIHJvb3RNYXJnaW4gdmFsdWUuXG4gKiBAcmV0dXJuIHs/T2JqZWN0fSBUaGUgZmluYWwgaW50ZXJzZWN0aW9uIHJlY3Qgb2JqZWN0IG9yIHVuZGVmaW5lZCBpZiBub1xuICogICAgIGludGVyc2VjdGlvbiBpcyBmb3VuZC5cbiAqIEBwcml2YXRlXG4gKi9cbkludGVyc2VjdGlvbk9ic2VydmVyLnByb3RvdHlwZS5fY29tcHV0ZVRhcmdldEFuZFJvb3RJbnRlcnNlY3Rpb24gPVxuXHRcdGZ1bmN0aW9uKHRhcmdldCwgcm9vdFJlY3QpIHtcblxuXHQvLyBJZiB0aGUgZWxlbWVudCBpc24ndCBkaXNwbGF5ZWQsIGFuIGludGVyc2VjdGlvbiBjYW4ndCBoYXBwZW4uXG5cdGlmICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0YXJnZXQpLmRpc3BsYXkgPT0gJ25vbmUnKSByZXR1cm47XG5cblx0dmFyIHRhcmdldFJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3QodGFyZ2V0KTtcblx0dmFyIGludGVyc2VjdGlvblJlY3QgPSB0YXJnZXRSZWN0O1xuXHR2YXIgcGFyZW50ID0gZ2V0UGFyZW50Tm9kZSh0YXJnZXQpO1xuXHR2YXIgYXRSb290ID0gZmFsc2U7XG5cblx0d2hpbGUgKCFhdFJvb3QpIHtcblx0XHR2YXIgcGFyZW50UmVjdCA9IG51bGw7XG5cdFx0dmFyIHBhcmVudENvbXB1dGVkU3R5bGUgPSBwYXJlbnQubm9kZVR5cGUgPT0gMSA/XG5cdFx0XHRcdHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHBhcmVudCkgOiB7fTtcblxuXHRcdC8vIElmIHRoZSBwYXJlbnQgaXNuJ3QgZGlzcGxheWVkLCBhbiBpbnRlcnNlY3Rpb24gY2FuJ3QgaGFwcGVuLlxuXHRcdGlmIChwYXJlbnRDb21wdXRlZFN0eWxlLmRpc3BsYXkgPT0gJ25vbmUnKSByZXR1cm47XG5cblx0XHRpZiAocGFyZW50ID09IHRoaXMucm9vdCB8fCBwYXJlbnQgPT0gZG9jdW1lbnQpIHtcblx0XHRcdGF0Um9vdCA9IHRydWU7XG5cdFx0XHRwYXJlbnRSZWN0ID0gcm9vdFJlY3Q7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIElmIHRoZSBlbGVtZW50IGhhcyBhIG5vbi12aXNpYmxlIG92ZXJmbG93LCBhbmQgaXQncyBub3QgdGhlIDxib2R5PlxuXHRcdFx0Ly8gb3IgPGh0bWw+IGVsZW1lbnQsIHVwZGF0ZSB0aGUgaW50ZXJzZWN0aW9uIHJlY3QuXG5cdFx0XHQvLyBOb3RlOiA8Ym9keT4gYW5kIDxodG1sPiBjYW5ub3QgYmUgY2xpcHBlZCB0byBhIHJlY3QgdGhhdCdzIG5vdCBhbHNvXG5cdFx0XHQvLyB0aGUgZG9jdW1lbnQgcmVjdCwgc28gbm8gbmVlZCB0byBjb21wdXRlIGEgbmV3IGludGVyc2VjdGlvbi5cblx0XHRcdGlmIChwYXJlbnQgIT0gZG9jdW1lbnQuYm9keSAmJlxuXHRcdFx0XHRcdHBhcmVudCAhPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiZcblx0XHRcdFx0XHRwYXJlbnRDb21wdXRlZFN0eWxlLm92ZXJmbG93ICE9ICd2aXNpYmxlJykge1xuXHRcdFx0XHRwYXJlbnRSZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KHBhcmVudCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gSWYgZWl0aGVyIG9mIHRoZSBhYm92ZSBjb25kaXRpb25hbHMgc2V0IGEgbmV3IHBhcmVudFJlY3QsXG5cdFx0Ly8gY2FsY3VsYXRlIG5ldyBpbnRlcnNlY3Rpb24gZGF0YS5cblx0XHRpZiAocGFyZW50UmVjdCkge1xuXHRcdFx0aW50ZXJzZWN0aW9uUmVjdCA9IGNvbXB1dGVSZWN0SW50ZXJzZWN0aW9uKHBhcmVudFJlY3QsIGludGVyc2VjdGlvblJlY3QpO1xuXG5cdFx0XHRpZiAoIWludGVyc2VjdGlvblJlY3QpIGJyZWFrO1xuXHRcdH1cblx0XHRwYXJlbnQgPSBnZXRQYXJlbnROb2RlKHBhcmVudCk7XG5cdH1cblx0cmV0dXJuIGludGVyc2VjdGlvblJlY3Q7XG59O1xuXG5cbi8qKlxuICogUmV0dXJucyB0aGUgcm9vdCByZWN0IGFmdGVyIGJlaW5nIGV4cGFuZGVkIGJ5IHRoZSByb290TWFyZ2luIHZhbHVlLlxuICogQHJldHVybiB7T2JqZWN0fSBUaGUgZXhwYW5kZWQgcm9vdCByZWN0LlxuICogQHByaXZhdGVcbiAqL1xuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIucHJvdG90eXBlLl9nZXRSb290UmVjdCA9IGZ1bmN0aW9uKCkge1xuXHR2YXIgcm9vdFJlY3Q7XG5cdGlmICh0aGlzLnJvb3QpIHtcblx0XHRyb290UmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdCh0aGlzLnJvb3QpO1xuXHR9IGVsc2Uge1xuXHRcdC8vIFVzZSA8aHRtbD4vPGJvZHk+IGluc3RlYWQgb2Ygd2luZG93IHNpbmNlIHNjcm9sbCBiYXJzIGFmZmVjdCBzaXplLlxuXHRcdHZhciBodG1sID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXHRcdHZhciBib2R5ID0gZG9jdW1lbnQuYm9keTtcblx0XHRyb290UmVjdCA9IHtcblx0XHRcdHg6IDAsXG5cdFx0XHR5OiAwLFxuXHRcdFx0dG9wOiAwLFxuXHRcdFx0bGVmdDogMCxcblx0XHRcdHJpZ2h0OiBodG1sLmNsaWVudFdpZHRoIHx8IGJvZHkuY2xpZW50V2lkdGgsXG5cdFx0XHR3aWR0aDogaHRtbC5jbGllbnRXaWR0aCB8fCBib2R5LmNsaWVudFdpZHRoLFxuXHRcdFx0Ym90dG9tOiBodG1sLmNsaWVudEhlaWdodCB8fCBib2R5LmNsaWVudEhlaWdodCxcblx0XHRcdGhlaWdodDogaHRtbC5jbGllbnRIZWlnaHQgfHwgYm9keS5jbGllbnRIZWlnaHRcblx0XHR9O1xuXHR9XG5cdHJldHVybiB0aGlzLl9leHBhbmRSZWN0QnlSb290TWFyZ2luKHJvb3RSZWN0KTtcbn07XG5cblxuLyoqXG4gKiBBY2NlcHRzIGEgcmVjdCBhbmQgZXhwYW5kcyBpdCBieSB0aGUgcm9vdE1hcmdpbiB2YWx1ZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSByZWN0IFRoZSByZWN0IG9iamVjdCB0byBleHBhbmQuXG4gKiBAcmV0dXJuIHtPYmplY3R9IFRoZSBleHBhbmRlZCByZWN0LlxuICogQHByaXZhdGVcbiAqL1xuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIucHJvdG90eXBlLl9leHBhbmRSZWN0QnlSb290TWFyZ2luID0gZnVuY3Rpb24ocmVjdCkge1xuXHR2YXIgbWFyZ2lucyA9IHRoaXMuX3Jvb3RNYXJnaW5WYWx1ZXMubWFwKGZ1bmN0aW9uKG1hcmdpbiwgaSkge1xuXHRcdHJldHVybiBtYXJnaW4udW5pdCA9PSAncHgnID8gbWFyZ2luLnZhbHVlIDpcblx0XHRcdFx0bWFyZ2luLnZhbHVlICogKGkgJSAyID8gcmVjdC53aWR0aCA6IHJlY3QuaGVpZ2h0KSAvIDEwMDtcblx0fSk7XG5cdHZhciBuZXdSZWN0ID0ge1xuXHRcdHRvcDogcmVjdC50b3AgLSBtYXJnaW5zWzBdLFxuXHRcdHJpZ2h0OiByZWN0LnJpZ2h0ICsgbWFyZ2luc1sxXSxcblx0XHRib3R0b206IHJlY3QuYm90dG9tICsgbWFyZ2luc1syXSxcblx0XHRsZWZ0OiByZWN0LmxlZnQgLSBtYXJnaW5zWzNdXG5cdH07XG5cdG5ld1JlY3Qud2lkdGggPSBuZXdSZWN0LnJpZ2h0IC0gbmV3UmVjdC5sZWZ0O1xuXHRuZXdSZWN0LmhlaWdodCA9IG5ld1JlY3QuYm90dG9tIC0gbmV3UmVjdC50b3A7XG5cdG5ld1JlY3QueCA9IG5ld1JlY3QubGVmdDtcblx0bmV3UmVjdC55ID0gbmV3UmVjdC50b3A7XG5cblx0cmV0dXJuIG5ld1JlY3Q7XG59O1xuXG5cbi8qKlxuICogQWNjZXB0cyBhbiBvbGQgYW5kIG5ldyBlbnRyeSBhbmQgcmV0dXJucyB0cnVlIGlmIGF0IGxlYXN0IG9uZSBvZiB0aGVcbiAqIHRocmVzaG9sZCB2YWx1ZXMgaGFzIGJlZW4gY3Jvc3NlZC5cbiAqIEBwYXJhbSB7P0ludGVyc2VjdGlvbk9ic2VydmVyRW50cnl9IG9sZEVudHJ5IFRoZSBwcmV2aW91cyBlbnRyeSBmb3IgYVxuICogICAgcGFydGljdWxhciB0YXJnZXQgZWxlbWVudCBvciBudWxsIGlmIG5vIHByZXZpb3VzIGVudHJ5IGV4aXN0cy5cbiAqIEBwYXJhbSB7SW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeX0gbmV3RW50cnkgVGhlIGN1cnJlbnQgZW50cnkgZm9yIGFcbiAqICAgIHBhcnRpY3VsYXIgdGFyZ2V0IGVsZW1lbnQuXG4gKiBAcmV0dXJuIHtib29sZWFufSBSZXR1cm5zIHRydWUgaWYgYSBhbnkgdGhyZXNob2xkIGhhcyBiZWVuIGNyb3NzZWQuXG4gKiBAcHJpdmF0ZVxuICovXG5JbnRlcnNlY3Rpb25PYnNlcnZlci5wcm90b3R5cGUuX2hhc0Nyb3NzZWRUaHJlc2hvbGQgPVxuXHRcdGZ1bmN0aW9uKG9sZEVudHJ5LCBuZXdFbnRyeSkge1xuXG5cdC8vIFRvIG1ha2UgY29tcGFyaW5nIGVhc2llciwgYW4gZW50cnkgdGhhdCBoYXMgYSByYXRpbyBvZiAwXG5cdC8vIGJ1dCBkb2VzIG5vdCBhY3R1YWxseSBpbnRlcnNlY3QgaXMgZ2l2ZW4gYSB2YWx1ZSBvZiAtMVxuXHR2YXIgb2xkUmF0aW8gPSBvbGRFbnRyeSAmJiBvbGRFbnRyeS5pc0ludGVyc2VjdGluZyA/XG5cdFx0XHRvbGRFbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyB8fCAwIDogLTE7XG5cdHZhciBuZXdSYXRpbyA9IG5ld0VudHJ5LmlzSW50ZXJzZWN0aW5nID9cblx0XHRcdG5ld0VudHJ5LmludGVyc2VjdGlvblJhdGlvIHx8IDAgOiAtMTtcblxuXHQvLyBJZ25vcmUgdW5jaGFuZ2VkIHJhdGlvc1xuXHRpZiAob2xkUmF0aW8gPT09IG5ld1JhdGlvKSByZXR1cm47XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnRocmVzaG9sZHMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgdGhyZXNob2xkID0gdGhpcy50aHJlc2hvbGRzW2ldO1xuXG5cdFx0Ly8gUmV0dXJuIHRydWUgaWYgYW4gZW50cnkgbWF0Y2hlcyBhIHRocmVzaG9sZCBvciBpZiB0aGUgbmV3IHJhdGlvXG5cdFx0Ly8gYW5kIHRoZSBvbGQgcmF0aW8gYXJlIG9uIHRoZSBvcHBvc2l0ZSBzaWRlcyBvZiBhIHRocmVzaG9sZC5cblx0XHRpZiAodGhyZXNob2xkID09IG9sZFJhdGlvIHx8IHRocmVzaG9sZCA9PSBuZXdSYXRpbyB8fFxuXHRcdFx0XHR0aHJlc2hvbGQgPCBvbGRSYXRpbyAhPT0gdGhyZXNob2xkIDwgbmV3UmF0aW8pIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0fVxufTtcblxuXG4vKipcbiAqIFJldHVybnMgd2hldGhlciBvciBub3QgdGhlIHJvb3QgZWxlbWVudCBpcyBhbiBlbGVtZW50IGFuZCBpcyBpbiB0aGUgRE9NLlxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgcm9vdCBlbGVtZW50IGlzIGFuIGVsZW1lbnQgYW5kIGlzIGluIHRoZSBET00uXG4gKiBAcHJpdmF0ZVxuICovXG5JbnRlcnNlY3Rpb25PYnNlcnZlci5wcm90b3R5cGUuX3Jvb3RJc0luRG9tID0gZnVuY3Rpb24oKSB7XG5cdHJldHVybiAhdGhpcy5yb290IHx8IGNvbnRhaW5zRGVlcChkb2N1bWVudCwgdGhpcy5yb290KTtcbn07XG5cblxuLyoqXG4gKiBSZXR1cm5zIHdoZXRoZXIgb3Igbm90IHRoZSB0YXJnZXQgZWxlbWVudCBpcyBhIGNoaWxkIG9mIHJvb3QuXG4gKiBAcGFyYW0ge0VsZW1lbnR9IHRhcmdldCBUaGUgdGFyZ2V0IGVsZW1lbnQgdG8gY2hlY2suXG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIHRoZSB0YXJnZXQgZWxlbWVudCBpcyBhIGNoaWxkIG9mIHJvb3QuXG4gKiBAcHJpdmF0ZVxuICovXG5JbnRlcnNlY3Rpb25PYnNlcnZlci5wcm90b3R5cGUuX3Jvb3RDb250YWluc1RhcmdldCA9IGZ1bmN0aW9uKHRhcmdldCkge1xuXHRyZXR1cm4gY29udGFpbnNEZWVwKHRoaXMucm9vdCB8fCBkb2N1bWVudCwgdGFyZ2V0KTtcbn07XG5cblxuLyoqXG4gKiBBZGRzIHRoZSBpbnN0YW5jZSB0byB0aGUgZ2xvYmFsIEludGVyc2VjdGlvbk9ic2VydmVyIHJlZ2lzdHJ5IGlmIGl0IGlzbid0XG4gKiBhbHJlYWR5IHByZXNlbnQuXG4gKiBAcHJpdmF0ZVxuICovXG5JbnRlcnNlY3Rpb25PYnNlcnZlci5wcm90b3R5cGUuX3JlZ2lzdGVySW5zdGFuY2UgPSBmdW5jdGlvbigpIHtcblx0aWYgKHJlZ2lzdHJ5LmluZGV4T2YodGhpcykgPCAwKSB7XG5cdFx0cmVnaXN0cnkucHVzaCh0aGlzKTtcblx0fVxufTtcblxuXG4vKipcbiAqIFJlbW92ZXMgdGhlIGluc3RhbmNlIGZyb20gdGhlIGdsb2JhbCBJbnRlcnNlY3Rpb25PYnNlcnZlciByZWdpc3RyeS5cbiAqIEBwcml2YXRlXG4gKi9cbkludGVyc2VjdGlvbk9ic2VydmVyLnByb3RvdHlwZS5fdW5yZWdpc3Rlckluc3RhbmNlID0gZnVuY3Rpb24oKSB7XG5cdHZhciBpbmRleCA9IHJlZ2lzdHJ5LmluZGV4T2YodGhpcyk7XG5cdGlmIChpbmRleCAhPSAtMSkgcmVnaXN0cnkuc3BsaWNlKGluZGV4LCAxKTtcbn07XG5cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHBlcmZvcm1hbmNlLm5vdygpIG1ldGhvZCBvciBudWxsIGluIGJyb3dzZXJzXG4gKiB0aGF0IGRvbid0IHN1cHBvcnQgdGhlIEFQSS5cbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIGVsYXBzZWQgdGltZSBzaW5jZSB0aGUgcGFnZSB3YXMgcmVxdWVzdGVkLlxuICovXG5mdW5jdGlvbiBub3coKSB7XG5cdHJldHVybiB3aW5kb3cucGVyZm9ybWFuY2UgJiYgcGVyZm9ybWFuY2Uubm93ICYmIHBlcmZvcm1hbmNlLm5vdygpO1xufVxuXG5cbi8qKlxuICogVGhyb3R0bGVzIGEgZnVuY3Rpb24gYW5kIGRlbGF5cyBpdHMgZXhlY3V0aW9uLCBzbyBpdCdzIG9ubHkgY2FsbGVkIGF0IG1vc3RcbiAqIG9uY2Ugd2l0aGluIGEgZ2l2ZW4gdGltZSBwZXJpb2QuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gdGhyb3R0bGUuXG4gKiBAcGFyYW0ge251bWJlcn0gdGltZW91dCBUaGUgYW1vdW50IG9mIHRpbWUgdGhhdCBtdXN0IHBhc3MgYmVmb3JlIHRoZVxuICogICAgIGZ1bmN0aW9uIGNhbiBiZSBjYWxsZWQgYWdhaW4uXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gVGhlIHRocm90dGxlZCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gdGhyb3R0bGUoZm4sIHRpbWVvdXQpIHtcblx0dmFyIHRpbWVyID0gbnVsbDtcblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAoIXRpbWVyKSB7XG5cdFx0XHR0aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGZuKCk7XG5cdFx0XHRcdHRpbWVyID0gbnVsbDtcblx0XHRcdH0sIHRpbWVvdXQpO1xuXHRcdH1cblx0fTtcbn1cblxuXG4vKipcbiAqIEFkZHMgYW4gZXZlbnQgaGFuZGxlciB0byBhIERPTSBub2RlIGVuc3VyaW5nIGNyb3NzLWJyb3dzZXIgY29tcGF0aWJpbGl0eS5cbiAqIEBwYXJhbSB7Tm9kZX0gbm9kZSBUaGUgRE9NIG5vZGUgdG8gYWRkIHRoZSBldmVudCBoYW5kbGVyIHRvLlxuICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50IFRoZSBldmVudCBuYW1lLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGV2ZW50IGhhbmRsZXIgdG8gYWRkLlxuICogQHBhcmFtIHtib29sZWFufSBvcHRfdXNlQ2FwdHVyZSBPcHRpb25hbGx5IGFkZHMgdGhlIGV2ZW4gdG8gdGhlIGNhcHR1cmVcbiAqICAgICBwaGFzZS4gTm90ZTogdGhpcyBvbmx5IHdvcmtzIGluIG1vZGVybiBicm93c2Vycy5cbiAqL1xuZnVuY3Rpb24gYWRkRXZlbnQobm9kZSwgZXZlbnQsIGZuLCBvcHRfdXNlQ2FwdHVyZSkge1xuXHRpZiAodHlwZW9mIG5vZGUuYWRkRXZlbnRMaXN0ZW5lciA9PSAnZnVuY3Rpb24nKSB7XG5cdFx0bm9kZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBmbiwgb3B0X3VzZUNhcHR1cmUgfHwgZmFsc2UpO1xuXHR9XG5cdGVsc2UgaWYgKHR5cGVvZiBub2RlLmF0dGFjaEV2ZW50ID09ICdmdW5jdGlvbicpIHtcblx0XHRub2RlLmF0dGFjaEV2ZW50KCdvbicgKyBldmVudCwgZm4pO1xuXHR9XG59XG5cblxuLyoqXG4gKiBSZW1vdmVzIGEgcHJldmlvdXNseSBhZGRlZCBldmVudCBoYW5kbGVyIGZyb20gYSBET00gbm9kZS5cbiAqIEBwYXJhbSB7Tm9kZX0gbm9kZSBUaGUgRE9NIG5vZGUgdG8gcmVtb3ZlIHRoZSBldmVudCBoYW5kbGVyIGZyb20uXG4gKiBAcGFyYW0ge3N0cmluZ30gZXZlbnQgVGhlIGV2ZW50IG5hbWUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZXZlbnQgaGFuZGxlciB0byByZW1vdmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IG9wdF91c2VDYXB0dXJlIElmIHRoZSBldmVudCBoYW5kbGVyIHdhcyBhZGRlZCB3aXRoIHRoaXNcbiAqICAgICBmbGFnIHNldCB0byB0cnVlLCBpdCBzaG91bGQgYmUgc2V0IHRvIHRydWUgaGVyZSBpbiBvcmRlciB0byByZW1vdmUgaXQuXG4gKi9cbmZ1bmN0aW9uIHJlbW92ZUV2ZW50KG5vZGUsIGV2ZW50LCBmbiwgb3B0X3VzZUNhcHR1cmUpIHtcblx0aWYgKHR5cGVvZiBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIgPT0gJ2Z1bmN0aW9uJykge1xuXHRcdG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgZm4sIG9wdF91c2VDYXB0dXJlIHx8IGZhbHNlKTtcblx0fVxuXHRlbHNlIGlmICh0eXBlb2Ygbm9kZS5kZXRhdGNoRXZlbnQgPT0gJ2Z1bmN0aW9uJykge1xuXHRcdG5vZGUuZGV0YXRjaEV2ZW50KCdvbicgKyBldmVudCwgZm4pO1xuXHR9XG59XG5cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBpbnRlcnNlY3Rpb24gYmV0d2VlbiB0d28gcmVjdCBvYmplY3RzLlxuICogQHBhcmFtIHtPYmplY3R9IHJlY3QxIFRoZSBmaXJzdCByZWN0LlxuICogQHBhcmFtIHtPYmplY3R9IHJlY3QyIFRoZSBzZWNvbmQgcmVjdC5cbiAqIEByZXR1cm4gez9PYmplY3R9IFRoZSBpbnRlcnNlY3Rpb24gcmVjdCBvciB1bmRlZmluZWQgaWYgbm8gaW50ZXJzZWN0aW9uXG4gKiAgICAgaXMgZm91bmQuXG4gKi9cbmZ1bmN0aW9uIGNvbXB1dGVSZWN0SW50ZXJzZWN0aW9uKHJlY3QxLCByZWN0Mikge1xuXHR2YXIgdG9wID0gTWF0aC5tYXgocmVjdDEudG9wLCByZWN0Mi50b3ApO1xuXHR2YXIgYm90dG9tID0gTWF0aC5taW4ocmVjdDEuYm90dG9tLCByZWN0Mi5ib3R0b20pO1xuXHR2YXIgbGVmdCA9IE1hdGgubWF4KHJlY3QxLmxlZnQsIHJlY3QyLmxlZnQpO1xuXHR2YXIgcmlnaHQgPSBNYXRoLm1pbihyZWN0MS5yaWdodCwgcmVjdDIucmlnaHQpO1xuXHR2YXIgd2lkdGggPSByaWdodCAtIGxlZnQ7XG5cdHZhciBoZWlnaHQgPSBib3R0b20gLSB0b3A7XG5cblx0cmV0dXJuICh3aWR0aCA+PSAwICYmIGhlaWdodCA+PSAwKSAmJiB7XG5cdFx0eDogbGVmdCxcblx0XHR5OiB0b3AsXG5cdFx0dG9wOiB0b3AsXG5cdFx0Ym90dG9tOiBib3R0b20sXG5cdFx0bGVmdDogbGVmdCxcblx0XHRyaWdodDogcmlnaHQsXG5cdFx0d2lkdGg6IHdpZHRoLFxuXHRcdGhlaWdodDogaGVpZ2h0XG5cdH07XG59XG5cblxuLyoqXG4gKiBTaGltcyB0aGUgbmF0aXZlIGdldEJvdW5kaW5nQ2xpZW50UmVjdCBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG9sZGVyIElFLlxuICogQHBhcmFtIHtFbGVtZW50fSBlbCBUaGUgZWxlbWVudCB3aG9zZSBib3VuZGluZyByZWN0IHRvIGdldC5cbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIChwb3NzaWJseSBzaGltbWVkKSByZWN0IG9mIHRoZSBlbGVtZW50LlxuICovXG5mdW5jdGlvbiBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZWwpIHtcblx0dmFyIHJlY3Q7XG5cblx0dHJ5IHtcblx0XHRyZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdC8vIElnbm9yZSBXaW5kb3dzIDcgSUUxMSBcIlVuc3BlY2lmaWVkIGVycm9yXCJcblx0XHQvLyBodHRwczovL2dpdGh1Yi5jb20vdzNjL0ludGVyc2VjdGlvbk9ic2VydmVyL3B1bGwvMjA1XG5cdH1cblxuXHRpZiAoIXJlY3QpIHJldHVybiBnZXRFbXB0eVJlY3QoKTtcblxuXHQvLyBPbGRlciBJRVxuXHRpZiAoIShyZWN0LndpZHRoICYmIHJlY3QuaGVpZ2h0ICYmIHJlY3QueCAmJiByZWN0LnkpKSB7XG5cdFx0cmVjdCA9IHtcblx0XHRcdHg6IHJlY3QubGVmdCxcblx0XHRcdHk6IHJlY3QudG9wLFxuXHRcdFx0dG9wOiByZWN0LnRvcCxcblx0XHRcdHJpZ2h0OiByZWN0LnJpZ2h0LFxuXHRcdFx0Ym90dG9tOiByZWN0LmJvdHRvbSxcblx0XHRcdGxlZnQ6IHJlY3QubGVmdCxcblx0XHRcdHdpZHRoOiByZWN0LnJpZ2h0IC0gcmVjdC5sZWZ0LFxuXHRcdFx0aGVpZ2h0OiByZWN0LmJvdHRvbSAtIHJlY3QudG9wXG5cdFx0fTtcblx0fVxuXHRyZXR1cm4gcmVjdDtcbn1cblxuXG4vKipcbiAqIFJldHVybnMgYW4gZW1wdHkgcmVjdCBvYmplY3QuIEFuIGVtcHR5IHJlY3QgaXMgcmV0dXJuZWQgd2hlbiBhbiBlbGVtZW50XG4gKiBpcyBub3QgaW4gdGhlIERPTS5cbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIGVtcHR5IHJlY3QuXG4gKi9cbmZ1bmN0aW9uIGdldEVtcHR5UmVjdCgpIHtcblx0cmV0dXJuIHtcblx0XHR4OiAwLFxuXHRcdHk6IDAsXG5cdFx0dG9wOiAwLFxuXHRcdGJvdHRvbTogMCxcblx0XHRsZWZ0OiAwLFxuXHRcdHJpZ2h0OiAwLFxuXHRcdHdpZHRoOiAwLFxuXHRcdGhlaWdodDogMFxuXHR9O1xufVxuXG4vKipcbiAqIENoZWNrcyB0byBzZWUgaWYgYSBwYXJlbnQgZWxlbWVudCBjb250YWlucyBhIGNoaWxkIGVsZW1lbnQgKGluY2x1ZGluZyBpbnNpZGVcbiAqIHNoYWRvdyBET00pLlxuICogQHBhcmFtIHtOb2RlfSBwYXJlbnQgVGhlIHBhcmVudCBlbGVtZW50LlxuICogQHBhcmFtIHtOb2RlfSBjaGlsZCBUaGUgY2hpbGQgZWxlbWVudC5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgdGhlIHBhcmVudCBub2RlIGNvbnRhaW5zIHRoZSBjaGlsZCBub2RlLlxuICovXG5mdW5jdGlvbiBjb250YWluc0RlZXAocGFyZW50LCBjaGlsZCkge1xuXHR2YXIgbm9kZSA9IGNoaWxkO1xuXHR3aGlsZSAobm9kZSkge1xuXHRcdGlmIChub2RlID09IHBhcmVudCkgcmV0dXJuIHRydWU7XG5cblx0XHRub2RlID0gZ2V0UGFyZW50Tm9kZShub2RlKTtcblx0fVxuXHRyZXR1cm4gZmFsc2U7XG59XG5cblxuLyoqXG4gKiBHZXRzIHRoZSBwYXJlbnQgbm9kZSBvZiBhbiBlbGVtZW50IG9yIGl0cyBob3N0IGVsZW1lbnQgaWYgdGhlIHBhcmVudCBub2RlXG4gKiBpcyBhIHNoYWRvdyByb290LlxuICogQHBhcmFtIHtOb2RlfSBub2RlIFRoZSBub2RlIHdob3NlIHBhcmVudCB0byBnZXQuXG4gKiBAcmV0dXJuIHtOb2RlfG51bGx9IFRoZSBwYXJlbnQgbm9kZSBvciBudWxsIGlmIG5vIHBhcmVudCBleGlzdHMuXG4gKi9cbmZ1bmN0aW9uIGdldFBhcmVudE5vZGUobm9kZSkge1xuXHR2YXIgcGFyZW50ID0gbm9kZS5wYXJlbnROb2RlO1xuXG5cdGlmIChwYXJlbnQgJiYgcGFyZW50Lm5vZGVUeXBlID09IDExICYmIHBhcmVudC5ob3N0KSB7XG5cdFx0Ly8gSWYgdGhlIHBhcmVudCBpcyBhIHNoYWRvdyByb290LCByZXR1cm4gdGhlIGhvc3QgZWxlbWVudC5cblx0XHRyZXR1cm4gcGFyZW50Lmhvc3Q7XG5cdH1cblxuXHRpZiAocGFyZW50ICYmIHBhcmVudC5hc3NpZ25lZFNsb3QpIHtcblx0XHQvLyBJZiB0aGUgcGFyZW50IGlzIGRpc3RyaWJ1dGVkIGluIGEgPHNsb3Q+LCByZXR1cm4gdGhlIHBhcmVudCBvZiBhIHNsb3QuXG5cdFx0cmV0dXJuIHBhcmVudC5hc3NpZ25lZFNsb3QucGFyZW50Tm9kZTtcblx0fVxuXG5cdHJldHVybiBwYXJlbnQ7XG59XG5cblxuLy8gRXhwb3NlcyB0aGUgY29uc3RydWN0b3JzIGdsb2JhbGx5Llxud2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyID0gSW50ZXJzZWN0aW9uT2JzZXJ2ZXI7XG53aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeSA9IEludGVyc2VjdGlvbk9ic2VydmVyRW50cnk7XG5cbn0od2luZG93LCBkb2N1bWVudCkpO1xufX0pLmNhbGwoJ29iamVjdCcgPT09IHR5cGVvZiB3aW5kb3cgJiYgd2luZG93IHx8ICdvYmplY3QnID09PSB0eXBlb2Ygc2VsZiAmJiBzZWxmIHx8ICdvYmplY3QnID09PSB0eXBlb2YgZ2xvYmFsICYmIGdsb2JhbCB8fCB7fSk7XG4iLCAiaW1wb3J0IHt1bmlxdWVBcnJheX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgaXNJbmxpbmVIVE1MRWxlbWVudCA9IChub2RlOiBOb2RlKTogbm9kZSBpcyBIVE1MRWxlbWVudCA9PiB7XG5cdHJldHVybiBub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgJiYgd2luZG93LmdldENvbXB1dGVkU3R5bGUobm9kZSkuZGlzcGxheS5pbmNsdWRlcygnaW5saW5lJyk7XG59O1xuXG5jb25zdCBpc1RleHROb2RlID0gKG5vZGU6IE5vZGUpOiBub2RlIGlzIFRleHQgPT4ge1xuXHRyZXR1cm4gbm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREU7XG59O1xuXG5jb25zdCBpc1Zpc2libGUgPSAoZWxlbWVudDogRWxlbWVudCk6IGJvb2xlYW4gPT4ge1xuXHRjb25zdCBzdHlsZTogQ1NTU3R5bGVEZWNsYXJhdGlvbiA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xuXG5cdHJldHVybiAoXG5cdFx0c3R5bGUuZGlzcGxheSAhPT0gJ25vbmUnICYmXG5cdFx0IVsnaGlkZGVuJywgJ2NvbGxhcHNlJ10uaW5jbHVkZXMoc3R5bGUudmlzaWJpbGl0eSkgJiZcblx0XHROdW1iZXIucGFyc2VGbG9hdChzdHlsZS5vcGFjaXR5KSA+IDBcblx0KTtcbn07XG5cbmNvbnN0IGdldE5vZGVUZXh0ID0gKG5vZGU6IEhUTUxFbGVtZW50IHwgVGV4dCk6IHN0cmluZyA9PiB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB1bmljb3JuL3ByZWZlci1kb20tbm9kZS10ZXh0LWNvbnRlbnRcblx0cmV0dXJuIG5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCA/IG5vZGUuaW5uZXJUZXh0IDogbm9kZS5kYXRhO1xufTtcblxuLyoqXG4gKiBTcGxpdCBhIHN0cmluZyBiZWZvcmUgYW4gYXJyYXkgb2YgaW5kZXhlcy5cbiAqXG4gKiBGb3IgZXhhbXBsZSxcbiAqIGBgYFxuICogc3BsaXRBdEluZGV4ZXMoJzEyMzQ1Njc4OScsIFszLCA1LCA3XSk7XG4gKiBgYGBcbiAqIHJlc3VsdHMgaW5cbiAqIGBgYFxuICogWycxMjMnLCAnNDUnLCAnNjcnLCAnODknXVxuICogYGBgXG4gKlxuICogTm90ZSB0aGF0IGVtcHR5IHN0cmluZyBhcmUgaW5jbHVkZWQ6XG4gKiBgYGBcbiAqIHNwbGl0QXRJbmRleGVzKCcxMjM0NTY3ODknLCBbMCwgOV0pO1xuICogYGBgXG4gKiByZXN1bHRzIGluXG4gKiBgYGBcbiAqIFsnJywgJzEyMzQ1Njc4OScsICcnXVxuICogYGBgXG4gKlxuICogSW5kZXhlcyB0aGF0IGFyZSBuZWdhdGl2ZSBvciBncmVhdGVyIHRoYW4gdGhlIGxlbmd0aCBvZiB0aGUgc3RyaW5nIGFyZSBpZ25vcmVkLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgc3RyaW5nIHRvIHNwbGl0XG4gKiBAcGFyYW0ge251bWJlcltdfSBpbmRleGVzIGluZGV4ZXNcbiAqIEByZXR1cm4ge3N0cmluZ1tdfSBzcGxpdHRlZCBzdHJpbmcgZnJhZ21lbnRzXG4gKi9cbmNvbnN0IHNwbGl0QXRJbmRleGVzID0gKHN0cjogc3RyaW5nLCBpbmRleGVzOiBudW1iZXJbXSk6IHN0cmluZ1tdID0+IHtcblx0Y29uc3QgcmVzdWx0OiBzdHJpbmdbXSA9IFtdO1xuXG5cdGNvbnN0IG5vcm1hbGl6ZWRJbmRleGVzOiBudW1iZXJbXSA9IFtcblx0XHQvLyBSZW1vdmUgZHVwbGljYXRpb25zIGFuZCBzb3J0IGluIGFzY2VuZGluZyBvcmRlclxuXHRcdC4uLnVuaXF1ZUFycmF5KFxuXHRcdFx0Ly8gUmVwbGFjZSBTZXQgd2l0aCB1bmlxdWVBcnJheSwgYXZvaWRpbmcgY29yZS1qcyBwb2x5ZmlsbGluZ1xuXHRcdFx0aW5kZXhlc1xuXHRcdFx0XHQuc29ydCgoYTogbnVtYmVyLCBiOiBudW1iZXIpOiBudW1iZXIgPT4ge1xuXHRcdFx0XHRcdHJldHVybiBhIC0gYjtcblx0XHRcdFx0fSlcblx0XHRcdFx0LmZpbHRlcigoaTogbnVtYmVyKTogYm9vbGVhbiA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIGkgPj0gMCAmJiBpIDw9IHN0ci5sZW5ndGg7XG5cdFx0XHRcdH0pXG5cdFx0KSxcblx0XHRzdHIubGVuZ3RoLFxuXHRdO1xuXG5cdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBub3JtYWxpemVkSW5kZXhlcy5sZW5ndGg7IGkrKykge1xuXHRcdGNvbnN0IHNsaWNlOiBzdHJpbmcgPSBzdHIuc2xpY2Uobm9ybWFsaXplZEluZGV4ZXNbaSAtIDFdLCBub3JtYWxpemVkSW5kZXhlc1tpXSk7XG5cdFx0cmVzdWx0W3Jlc3VsdC5sZW5ndGhdID0gc2xpY2U7IC8vIFJlcGxhY2UgQXJyYXkjcHVzaCB0byBhdm9pZCBjb3JlLWpzIHBvbHlmaWxsaW5nXG5cdH1cblxuXHRyZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0IHtpc0lubGluZUhUTUxFbGVtZW50LCBpc1RleHROb2RlLCBpc1Zpc2libGUsIGdldE5vZGVUZXh0LCBzcGxpdEF0SW5kZXhlc307XG4iLCAidHlwZSBEb21NdXRhdGlvbkZ1bmMgPSAoZWxlbWVudDogRWxlbWVudCkgPT4gdm9pZDtcblxuY29uc3QgcGVuZGluZ0FjdGlvbnM6IFdlYWtNYXA8RWxlbWVudCwgRG9tTXV0YXRpb25GdW5jW10+ID0gbmV3IFdlYWtNYXA8RWxlbWVudCwgRG9tTXV0YXRpb25GdW5jW10+KCk7XG5cbmNvbnN0IG9uSW50ZXJzZWN0aW9uID0gKGVudHJpZXM6IEludGVyc2VjdGlvbk9ic2VydmVyRW50cnlbXSk6IHZvaWQgPT4ge1xuXHRmb3IgKGNvbnN0IGVudHJ5IG9mIGVudHJpZXMpIHtcblx0XHRpZiAoIWVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjb25zdCBlbGVtZW50OiBFbGVtZW50ID0gZW50cnkudGFyZ2V0O1xuXHRcdG9ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KTtcblxuXHRcdGNvbnN0IGNhbGxiYWNrczogRG9tTXV0YXRpb25GdW5jW10gfCB1bmRlZmluZWQgPSBwZW5kaW5nQWN0aW9ucy5nZXQoZWxlbWVudCk7XG5cdFx0aWYgKCFjYWxsYmFja3MpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdHdoaWxlICh0cnVlKSB7XG5cdFx0XHRjb25zdCBjYWxsYmFjazogRG9tTXV0YXRpb25GdW5jIHwgdW5kZWZpbmVkID0gY2FsbGJhY2tzLnNoaWZ0KCk7IC8vIEZJRk9cblx0XHRcdGlmICghY2FsbGJhY2spIHtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHRjYWxsYmFjayhlbGVtZW50KTtcblx0XHR9XG5cdH1cbn07XG5cbi8vIE9wdGltaXphdGlvbjogbGF6aWx5IGV4ZWN1dGUgcGVuZGluZyBhY3Rpb25zIG9uY2UgYW4gZWxlbWVudCBpcyB2aXNpYmxlXG5jb25zdCBvYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIob25JbnRlcnNlY3Rpb24pO1xuXG5jb25zdCBxdWV1ZURvbU11dGF0aW9uID0gKGVsZW1lbnQ6IEVsZW1lbnQsIGNhbGxiYWNrOiBEb21NdXRhdGlvbkZ1bmMpOiB2b2lkID0+IHtcblx0aWYgKCFwZW5kaW5nQWN0aW9ucy5oYXMoZWxlbWVudCkpIHtcblx0XHRwZW5kaW5nQWN0aW9ucy5zZXQoZWxlbWVudCwgW10pO1xuXHR9XG5cblx0aWYgKHBlbmRpbmdBY3Rpb25zLmdldChlbGVtZW50KSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0KHBlbmRpbmdBY3Rpb25zLmdldChlbGVtZW50KSBhcyBEb21NdXRhdGlvbkZ1bmNbXSlbKHBlbmRpbmdBY3Rpb25zLmdldChlbGVtZW50KSBhcyBEb21NdXRhdGlvbkZ1bmNbXSkubGVuZ3RoXSA9XG5cdFx0XHRjYWxsYmFjaztcblx0fVxuXHRvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpO1xufTtcblxuZXhwb3J0IHtxdWV1ZURvbU11dGF0aW9ufTtcbiIsICJpbXBvcnQge2dldE5vZGVUZXh0LCBpc0lubGluZUhUTUxFbGVtZW50LCBpc1RleHROb2RlLCBpc1Zpc2libGUsIHNwbGl0QXRJbmRleGVzfSBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IHtxdWV1ZURvbU11dGF0aW9ufSBmcm9tICcuL3F1ZXVlJztcblxuY29uc3QgUkVHRVhfUkFOR0VfQ0hJTkVTRTogc3RyaW5nID0gU3RyaW5nLnJhd2AoPzpbXFx1MkU4MC1cXHUyRTk5XFx1MkU5Qi1cXHUyRUYzXFx1MkYwMC1cXHUyRkQ1XFx1MzAwNVxcdTMwMDdcXHUzMDIxLVxcdTMwMjlcXHUzMDM4LVxcdTMwM0JcXHUzNDAwLVxcdTREQkZcXHU0RTAwLVxcdTlGRkZcXHVGOTAwLVxcdUZBNkRcXHVGQTcwLVxcdUZBRDldfFxcdUQ4MUJbXFx1REZFMlxcdURGRTNcXHVERkYwXFx1REZGMV18W1xcdUQ4NDAtXFx1RDg2OFxcdUQ4NkEtXFx1RDg2Q1xcdUQ4NkYtXFx1RDg3MlxcdUQ4NzQtXFx1RDg3OVxcdUQ4ODAtXFx1RDg4M11bXFx1REMwMC1cXHVERkZGXXxcXHVEODY5W1xcdURDMDAtXFx1REVERlxcdURGMDAtXFx1REZGRl18XFx1RDg2RFtcXHVEQzAwLVxcdURGMzhcXHVERjQwLVxcdURGRkZdfFxcdUQ4NkVbXFx1REMwMC1cXHVEQzFEXFx1REMyMC1cXHVERkZGXXxcXHVEODczW1xcdURDMDAtXFx1REVBMVxcdURFQjAtXFx1REZGRl18XFx1RDg3QVtcXHVEQzAwLVxcdURGRTBdfFxcdUQ4N0VbXFx1REMwMC1cXHVERTFEXXxcXHVEODg0W1xcdURDMDAtXFx1REY0QV0pYDtcbmNvbnN0IFJFR0VYX1JBTkdFX09USEVSX0xFRlQ6IHN0cmluZyA9IFN0cmluZy5yYXdgW0EtWmEtejAtOUB+JSs9fMKxXFwpfSMkwqXigqzCo+KCpF1gO1xuY29uc3QgUkVHRVhfUkFOR0VfT1RIRVJfUklHSFQ6IHN0cmluZyA9IFN0cmluZy5yYXdgW0EtWmEtejAtOUB+JSs9fMKxXFwoeyMkwqXigqzCo+KCpF1gO1xuY29uc3QgUkVHRVhfU1RSX0lOVEVSX1NDUklQVDogc3RyaW5nID0gYCg/Oigke1JFR0VYX1JBTkdFX0NISU5FU0V9KSg/PSR7UkVHRVhfUkFOR0VfT1RIRVJfUklHSFR9KXwoJHtSRUdFWF9SQU5HRV9PVEhFUl9MRUZUfSkoPz0ke1JFR0VYX1JBTkdFX0NISU5FU0V9KSlgO1xuXG5jb25zdCBTUEFDRTogc3RyaW5nID0gJ1xcdTIwMEEnO1xuXG5jb25zdCBXUkFQUEVSX0NMQVNTOiBzdHJpbmcgPSAnZ2FkZ2V0LXRleHRfc3BhY2luZyc7XG5cbmNvbnN0IFNFTEVDVE9SX0FMTE9XRUQ6IHN0cmluZ1tdID0gW1xuXHQnYScsXG5cdCdhYmJyJyxcblx0J2FydGljbGUnLFxuXHQnYXNpZGUnLFxuXHQnYicsXG5cdCdiZGknLFxuXHQnYmlnJyxcblx0J2Jsb2NrcXVvdGUnLFxuXHQnYnV0dG9uJyxcblx0J2NhcHRpb24nLFxuXHQnY2VudGVyJyxcblx0J2NpdGUnLFxuXHQnZGF0YScsXG5cdCdkZCcsXG5cdCdkZWwnLFxuXHQnZGV0YWlscycsXG5cdCdkZm4nLFxuXHQnZGl2Jyxcblx0J2R0Jyxcblx0J2VtJyxcblx0J2ZpZ2NhcHRpb24nLFxuXHQnZm9vdGVyJyxcblx0J2gxJyxcblx0J2gyJyxcblx0J2gzJyxcblx0J2g0Jyxcblx0J2g1Jyxcblx0J2hlYWRlcicsXG5cdCdpJyxcblx0J2lucycsXG5cdCdsYWJlbCcsXG5cdCdsZWdlbmQnLFxuXHQnbGknLFxuXHQnbWFpbicsXG5cdCdtYXJrJyxcblx0J29wdGlvbicsXG5cdCdwJyxcblx0J3EnLFxuXHQncnVieScsXG5cdCdzJyxcblx0J3NlY3Rpb24nLFxuXHQnc21hbGwnLFxuXHQnc3BhbicsXG5cdCdzdHJpa2UnLFxuXHQnc3Ryb25nJyxcblx0J3N1YicsXG5cdCdzdW1tYXJ5Jyxcblx0J3N1cCcsXG5cdCd0ZCcsXG5cdCd0aCcsXG5cdCd0aW1lJyxcblx0J3UnLFxuXTtcbmNvbnN0IFNFTEVDVE9SX0JMT0NLRUQ6IHN0cmluZ1tdID0gW1xuXHQnY29kZScsXG5cdCdrYmQnLFxuXHQncHJlJyxcblx0J3JwJyxcblx0J3J0Jyxcblx0J3NhbXAnLFxuXHQndGV4dGFyZWEnLFxuXHQndmFyJyxcblx0Ly8gRWxlbWVudHMgd2l0aCB0aGlzIGNsYXNzIGFyZSBleGNsdWRlZFxuXHQnLmdhZGdldC1ub3NwYWNlJyxcblx0Ly8gRWRpdGFibGUgZWxlbWVudHNcblx0J1tjb250ZW50ZWRpdGFibGU9XCJ0cnVlXCJdJyxcblx0Ly8gQUNFIGVkaXRvciBjb250ZW50XG5cdCcuYWNlX2VkaXRvcicsXG5cdC8vIFZpc3VhbCBFZGl0b3IgKGFuZCAyMDE3IFdpa2l0ZXh0IEVkaXRvcikgY29udGVudCAmIGRpZmZcblx0Jy52ZS11aS1zdXJmYWNlJyxcblx0Jy52ZS1pbml0LW13LWRpZmZQYWdlLWRpZmYnLFxuXHQvLyBEaWZmXG5cdCcuZGlmZi1jb250ZXh0Jyxcblx0Jy5kaWZmLWFkZGVkbGluZScsXG5cdCcuZGlmZi1kZWxldGVkbGluZScsXG5cdC8vIERpZmYgKGlubGluZSBtb2RlKVxuXHQnLm13LWRpZmYtaW5saW5lLWFkZGVkJyxcblx0Jy5tdy1kaWZmLWlubGluZS1kZWxldGVkJyxcblx0Jy5tdy1kaWZmLWlubGluZS1tb3ZlZCcsXG5cdCcubXctZGlmZi1pbmxpbmUtY2hhbmdlZCcsXG5cdCcubXctZGlmZi1pbmxpbmUtY29udGV4dCcsXG5dO1xuXG4vLyBGSVhNRTogVXNlIDppcygpIGluIHRoZSBmdXR1cmUgb25jZSBpdCBoYXMgYmV0dGVyIGJyb3dzZXIgY29tcGF0aWJpbGl0eVxuY29uc3QgU0VMRUNUT1I6IHN0cmluZyA9IFNFTEVDVE9SX0FMTE9XRUQubWFwKChhbGxvd2VkOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRyZXR1cm4gYCR7YWxsb3dlZH06bm90KCR7U0VMRUNUT1JfQkxPQ0tFRC5mbGF0TWFwKChibG9ja2VkOiBzdHJpbmcpOiBzdHJpbmcgfCBzdHJpbmdbXSA9PiB7XG5cdFx0Ly8gTm90IGluY2x1ZGUgaXRzZWxmIGlmIGl0IGlzIGEgdGFnIHNlbGVjdG9yXG5cdFx0cmV0dXJuIChibG9ja2VkWzBdIGFzIHN0cmluZykubWF0Y2goL1thLXpdL2kpID8gYCR7YmxvY2tlZH0gKmAgOiBbYmxvY2tlZCwgYCR7YmxvY2tlZH0gKmBdO1xuXHR9KS5qb2luKCcsJyl9KWA7XG59KS5qb2luKCcsJyk7XG5cbmNvbnN0IGdldExlYWZFbGVtZW50cyA9IChwYXJlbnQ6IEhUTUxFbGVtZW50KTogSFRNTEVsZW1lbnRbXSA9PiB7XG5cdGNvbnN0IGNhbmRpZGF0ZXM6IE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+ID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU0VMRUNUT1IpO1xuXHRjb25zdCByZXN1bHQ6IEhUTUxFbGVtZW50W10gPSBbXTtcblxuXHRpZiAocGFyZW50Lm1hdGNoZXMoU0VMRUNUT1IpKSB7XG5cdFx0cmVzdWx0W3Jlc3VsdC5sZW5ndGhdID0gcGFyZW50OyAvLyBSZXBsYWNlIEFycmF5I3B1c2ggdG8gYXZvaWQgY29yZS1qcyBwb2x5ZmlsbGluZ1xuXHR9XG5cblx0Zm9yIChjb25zdCBjYW5kaWRhdGUgb2YgY2FuZGlkYXRlcykge1xuXHRcdGZvciAoY29uc3QgY2hpbGROb2RlIG9mIGNhbmRpZGF0ZS5jaGlsZE5vZGVzKSB7XG5cdFx0XHRpZiAoaXNUZXh0Tm9kZShjaGlsZE5vZGUpKSB7XG5cdFx0XHRcdHJlc3VsdFtyZXN1bHQubGVuZ3RoXSA9IGNhbmRpZGF0ZTsgLy8gUmVwbGFjZSBBcnJheSNwdXNoIHRvIGF2b2lkIGNvcmUtanMgcG9seWZpbGxpbmdcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHJlc3VsdDtcbn07XG5cbmNvbnN0IGdldE5leHRWaXNpYmxlU2libGluZyA9IChub2RlOiBOb2RlKTogSFRNTEVsZW1lbnQgfCBUZXh0IHwgbnVsbCA9PiB7XG5cdGxldCBjdXJyZW50Tm9kZTogTm9kZSA9IG5vZGU7XG5cblx0Ly8gVXNlIGxvb3BzIHJhdGhlciB0aGFuIHJlY3Vyc2lvbiBmb3IgYmV0dGVyIHBlcmZvcm1hbmNlXG5cdHdoaWxlICh0cnVlKSB7XG5cdFx0Y29uc3QgY2FuZGlkYXRlOiBDaGlsZE5vZGUgfCBudWxsID0gY3VycmVudE5vZGUubmV4dFNpYmxpbmc7XG5cblx0XHRpZiAoIWNhbmRpZGF0ZSkge1xuXHRcdFx0Y29uc3QgcGFyZW50OiBIVE1MRWxlbWVudCB8IG51bGwgPSBjdXJyZW50Tm9kZS5wYXJlbnRFbGVtZW50O1xuXHRcdFx0aWYgKCFwYXJlbnQpIHtcblx0XHRcdFx0Ly8gUGFyZW50IGlzIERvY3VtZW50LCBzbyBubyB2aXNpYmxlIHNpYmxpbmdcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9XG5cdFx0XHQvLyBCdWJibGUgdXAgdG8gaXRzIHBhcmVudCBhbmQgZ2V0IGl0cyBzaWJsaW5nXG5cdFx0XHRjdXJyZW50Tm9kZSA9IHBhcmVudDtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGlmICghKGNhbmRpZGF0ZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IHx8IGNhbmRpZGF0ZSBpbnN0YW5jZW9mIFRleHQpKSB7XG5cdFx0XHQvLyBDb21tZW50cywgU1ZHcywgZXRjLjogZ2V0IGl0cyBzaWJsaW5nIGFzIHJlc3VsdFxuXHRcdFx0Y3VycmVudE5vZGUgPSBjYW5kaWRhdGU7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRpZiAoY2FuZGlkYXRlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcblx0XHRcdGlmICghaXNWaXNpYmxlKGNhbmRpZGF0ZSkpIHtcblx0XHRcdFx0Ly8gSW52aXNpYmxlOiByZWN1cnNpdmVseSBnZXQgdGhpcyBlbGVtZW50J3MgbmV4dCBzaWJsaW5nXG5cdFx0XHRcdGN1cnJlbnROb2RlID0gY2FuZGlkYXRlO1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCFpc0lubGluZUhUTUxFbGVtZW50KGNhbmRpZGF0ZSkpIHtcblx0XHRcdFx0Ly8gTmV4dCBzaWJsaW5nIGlzIG5vdCBpbmxpbmUgKGF0IG5leHQgbGluZSksIHNvIG5vIHNpYmxpbmdzXG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChjYW5kaWRhdGUgaW5zdGFuY2VvZiBUZXh0ICYmICFjYW5kaWRhdGUuZGF0YS50cmltKCkpIHtcblx0XHRcdC8vIFNraXAgZW1wdHkgVGV4dCBub2RlcyAoZS5nLiBsaW5lIGJyZWFrcylcblx0XHRcdGN1cnJlbnROb2RlID0gY2FuZGlkYXRlO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNhbmRpZGF0ZTtcblx0fVxufTtcblxuY29uc3QgY3JlYXRlU3BhY2luZ1dyYXBwZXIgPSAoc3RyOiBzdHJpbmcpOiBbc3RyaW5nLCBIVE1MU3BhbkVsZW1lbnRdID0+IHtcblx0Y29uc3Qgc3BhbjogSFRNTFNwYW5FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWVkaWF3aWtpL2NsYXNzLWRvY1xuXHRzcGFuLmNsYXNzTmFtZSA9IFdSQVBQRVJfQ0xBU1M7XG5cdHNwYW4udGV4dENvbnRlbnQgPSBzdHIuc2xpY2UoLTEpO1xuXG5cdHJldHVybiBbc3RyLnNsaWNlKDAsIC0xKSwgc3Bhbl07XG59O1xuXG5jb25zdCBhZGp1c3RTcGFjaW5nID0gKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogdm9pZCA9PiB7XG5cdC8vIEZyZWV6ZSBOb2RlTGlzdCBpbiBhZHZhbmNlXG5cdGNvbnN0IGNoaWxkTm9kZXM6IENoaWxkTm9kZVtdID0gWy4uLmVsZW1lbnQuY2hpbGROb2Rlc107XG5cdGNvbnN0IHRleHRTcGFjaW5nUG9zTWFwOiBNYXA8VGV4dCwgbnVtYmVyW10+ID0gbmV3IE1hcDxUZXh0LCBudW1iZXJbXT4oKTtcblxuXHRmb3IgKGNvbnN0IGNoaWxkIG9mIGNoaWxkTm9kZXMpIHtcblx0XHRpZiAoIShjaGlsZCBpbnN0YW5jZW9mIFRleHQpKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjb25zdCBuZXh0U2libGluZzogSFRNTEVsZW1lbnQgfCBUZXh0IHwgbnVsbCA9IGdldE5leHRWaXNpYmxlU2libGluZyhjaGlsZCk7XG5cblx0XHRsZXQgdGVzdFN0cmluZzogc3RyaW5nID0gZ2V0Tm9kZVRleHQoY2hpbGQpO1xuXHRcdGlmIChuZXh0U2libGluZykge1xuXHRcdFx0Ly8gQXBwZW5kIGZpcnN0IGNoYXJhY3RlciB0byBkZXRlY3Qgc2NyaXB0IGludGVyc2VjdGlvblxuXHRcdFx0dGVzdFN0cmluZyArPSBnZXROb2RlVGV4dChuZXh0U2libGluZylbMF0gPz8gJyc7XG5cdFx0fVxuXG5cdFx0Y29uc3QgaW5kZXhlczogbnVtYmVyW10gPSBbXTtcblx0XHQvLyBHbG9iYWwgcmVnZXhwcyBhcmUgc3RhdGVmdWwgc28gZG8gaW5pdGlhbGl6YXRpb24gaW4gZWFjaCBsb29wXG5cdFx0Y29uc3QgcmVnZXhUZXh0Tm9kZURhdGE6IFJlZ0V4cCA9IG5ldyBSZWdFeHAoUkVHRVhfU1RSX0lOVEVSX1NDUklQVCwgJ2cnKTtcblxuXHRcdHdoaWxlICh0cnVlKSB7XG5cdFx0XHRjb25zdCBtYXRjaDogUmVnRXhwRXhlY0FycmF5IHwgbnVsbCA9IHJlZ2V4VGV4dE5vZGVEYXRhLmV4ZWModGVzdFN0cmluZyk7XG5cdFx0XHRpZiAoIW1hdGNoKSB7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0aW5kZXhlc1tpbmRleGVzLmxlbmd0aF0gPSBtYXRjaC5pbmRleCArIDE7IC8vIFJlcGxhY2UgQXJyYXkjcHVzaCB0byBhdm9pZCBjb3JlLWpzIHBvbHlmaWxsaW5nXG5cdFx0fVxuXG5cdFx0aWYgKCFpbmRleGVzLmxlbmd0aCkge1xuXHRcdFx0Ly8gT3B0aW1pemF0aW9uOiBza2lwIGZ1cnRoZXIgc3RlcHNcblx0XHRcdC8vIEFsc28gcHJldmVudCB1bm5lY2Vzc2FyeSBtdXRhdGlvbiwgd2hpY2ggd2lsbCBiZSBkZXRlY3RlZCBieSBNdXRhdGlvbk9ic2VydmVyLFxuXHRcdFx0Ly8gcmVzdWx0aW5nIGluIGluZmluaXRlIGxvb3BzXG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHR0ZXh0U3BhY2luZ1Bvc01hcC5zZXQoY2hpbGQsIGluZGV4ZXMpO1xuXHR9XG5cblx0Ly8gU2NoZWR1bGUgRE9NIG11dGF0aW9uIHRvIHByZXZlbnQgZm9yY2VkIHJlZmxvd3Ncblx0cXVldWVEb21NdXRhdGlvbihlbGVtZW50LCAoKTogdm9pZCA9PiB7XG5cdFx0Zm9yIChjb25zdCBbbm9kZSwgaW5kZXhlc10gb2YgdGV4dFNwYWNpbmdQb3NNYXApIHtcblx0XHRcdGNvbnN0IHRleHQ6IHN0cmluZyA9IG5vZGUuZGF0YTtcblx0XHRcdGNvbnN0IGZyYWdtZW50czogc3RyaW5nW10gPSBzcGxpdEF0SW5kZXhlcyh0ZXh0LCBpbmRleGVzKTtcblxuXHRcdFx0Y29uc3QgcmVwbGFjZW1lbnQ6IChzdHJpbmcgfCBIVE1MU3BhbkVsZW1lbnQpW10gPSBmcmFnbWVudHNcblx0XHRcdFx0LnNsaWNlKDAsIC0xKVxuXHRcdFx0XHQuZmxhdE1hcCgoZnJhZ21lbnQ6IHN0cmluZyk6IFtzdHJpbmcsIEhUTUxTcGFuRWxlbWVudF0gPT4ge1xuXHRcdFx0XHRcdHJldHVybiBjcmVhdGVTcGFjaW5nV3JhcHBlcihmcmFnbWVudCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0cmVwbGFjZW1lbnRbcmVwbGFjZW1lbnQubGVuZ3RoXSA9IGZyYWdtZW50cy5hdCgtMSkgYXMgc3RyaW5nOyAvLyBSZXBsYWNlIEFycmF5I3B1c2ggdG8gYXZvaWQgY29yZS1qcyBwb2x5ZmlsbGluZ1xuXG5cdFx0XHQvLyBPcHRpbWl6YXRpb246IHByZXZlbnQgZm9yY2VkIHJlZmxvd3Ncblx0XHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG5cdFx0XHRcdG5vZGUucmVwbGFjZVdpdGgoLi4ucmVwbGFjZW1lbnQpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9KTtcbn07XG5cbmNvbnN0IGFkZFNwYWNlVG9TdHJpbmcgPSAoc3RyOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRjb25zdCByZWdleDogUmVnRXhwID0gbmV3IFJlZ0V4cChSRUdFWF9TVFJfSU5URVJfU0NSSVBULCAnZycpO1xuXG5cdHJldHVybiBzdHIucmVwbGFjZShyZWdleCwgYCQxJDIke1NQQUNFfWApO1xufTtcblxuZXhwb3J0IHtnZXRMZWFmRWxlbWVudHMsIGFkanVzdFNwYWNpbmcsIGFkZFNwYWNlVG9TdHJpbmcsIFdSQVBQRVJfQ0xBU1N9O1xuIiwgImNvbnN0IHN1cHBvcnRzVGV4dEF1dG9zcGFjZSA9ICgpOiBib29sZWFuID0+IHtcblx0aWYgKHR5cGVvZiBDU1MgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBDU1Muc3VwcG9ydHMgPT09ICdmdW5jdGlvbicpIHtcblx0XHRpZiAoQ1NTLnN1cHBvcnRzKCd0ZXh0LWF1dG9zcGFjZScsICdub3JtYWwnKSkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXHRyZXR1cm4gZmFsc2U7XG59O1xuXG5leHBvcnQge3N1cHBvcnRzVGV4dEF1dG9zcGFjZX07XG4iLCAiaW1wb3J0ICcuL1RleHRTcGFjaW5nLmxlc3MnO1xuaW1wb3J0IHtXUkFQUEVSX0NMQVNTLCBhZGRTcGFjZVRvU3RyaW5nLCBhZGp1c3RTcGFjaW5nLCBnZXRMZWFmRWxlbWVudHN9IGZyb20gJy4vbW9kdWxlcy9zcGFjaW5nJztcbmltcG9ydCB7c3VwcG9ydHNUZXh0QXV0b3NwYWNlfSBmcm9tICcuL21vZHVsZXMvc3VwcG9ydHNUZXh0QXV0b3NwYWNlJztcblxuY29uc3QgcnVuID0gKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogdm9pZCA9PiB7XG5cdGNvbnN0IGxlYXZlczogSFRNTEVsZW1lbnRbXSA9IGdldExlYWZFbGVtZW50cyhlbGVtZW50KTtcblx0Zm9yIChjb25zdCBsZWFmIG9mIGxlYXZlcykge1xuXHRcdGFkanVzdFNwYWNpbmcobGVhZik7XG5cdH1cbn07XG5cbmNvbnN0IG11dGF0aW9uT2JzZXJ2ZXI6IE11dGF0aW9uT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigocmVjb3JkczogTXV0YXRpb25SZWNvcmRbXSk6IHZvaWQgPT4ge1xuXHRmb3IgKGNvbnN0IHJlY29yZCBvZiByZWNvcmRzKSB7XG5cdFx0aWYgKHJlY29yZC50eXBlICE9PSAnY2hpbGRMaXN0Jykge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Y29uc3QgYWRkZWROb2RlczogTm9kZVtdID0gWy4uLnJlY29yZC5hZGRlZE5vZGVzXTtcblxuXHRcdC8vIEV4Y2x1ZGUgbXV0YXRpb25zIGNhdXNlZCBieSBhZGp1c3RTcGFjaW5nKCkgdG8gcHJldmVudCBpbmZpbml0ZSBsb29wc1xuXHRcdC8vIFR5cGljYWxseSB0aGV5IHdpbGwgY29udGFpbiBub2RlcyB3aXRoIGNsYXNzIFdSQVBQRVJfQ0xBU1Ncblx0XHRpZiAoXG5cdFx0XHRhZGRlZE5vZGVzLnNvbWUoKG5vZGU6IE5vZGUpOiBib29sZWFuID0+IHtcblx0XHRcdFx0cmV0dXJuIG5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCAmJiBub2RlLmNsYXNzTGlzdC5jb250YWlucyhXUkFQUEVSX0NMQVNTKTtcblx0XHRcdH0pXG5cdFx0KSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRmb3IgKGNvbnN0IG5vZGUgb2YgYWRkZWROb2Rlcykge1xuXHRcdFx0aWYgKG5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuXHRcdFx0XHRydW4obm9kZSk7XG5cdFx0XHR9IGVsc2UgaWYgKG5vZGUgaW5zdGFuY2VvZiBUZXh0KSB7XG5cdFx0XHRcdGNvbnN0IHtwYXJlbnRFbGVtZW50fSA9IG5vZGU7XG5cdFx0XHRcdGlmIChwYXJlbnRFbGVtZW50KSB7XG5cdFx0XHRcdFx0cnVuKHBhcmVudEVsZW1lbnQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59KTtcblxuY29uc3QgbWFpbiA9ICgpOiB2b2lkID0+IHtcblx0ZG9jdW1lbnQudGl0bGUgPSBhZGRTcGFjZVRvU3RyaW5nKGRvY3VtZW50LnRpdGxlKTtcblx0Y29uc3Qgb3V0cHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oJy5tdy1wYXJzZXItb3V0cHV0Jyk7XG5cdGlmICghb3V0cHV0KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdC8vIFdhdGNoIGZvciBhZGRlZCBub2Rlc1xuXHRtdXRhdGlvbk9ic2VydmVyLm9ic2VydmUob3V0cHV0LCB7XG5cdFx0c3VidHJlZTogdHJ1ZSxcblx0XHRjaGlsZExpc3Q6IHRydWUsXG5cdH0pO1xuXHRydW4ob3V0cHV0KTtcbn07XG5cbmlmIChzdXBwb3J0c1RleHRBdXRvc3BhY2UoKSkge1xuXHRjb25zb2xlLmluZm8oJ1tUZXh0U3BhY2luZ10gdGV4dC1hdXRvc3BhY2UgaXMgc3VwcG9ydGVkIG5hdGl2ZWx5OyBubyBuZWVkIHRvIHJ1biB0aGUgc2NyaXB0LicpO1xufSBlbHNlIHtcblx0JChtYWluKTtcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUEsS0FBQyxTQUFTLFdBQVc7QUFDckIsVUFBSSxFQUFFLDBCQUF5QixVQUFRLCtCQUE4QixVQUFRLHVCQUFzQixPQUFPLDBCQUEwQixZQUNq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RSxVQUFVO0FBSWhELFVBQ0NBLFdBQVdDLEtBQU1uSixVQUF3QjtBQUN4QyxlQUFPQSxnQkFBZ0JDLGVBQWVELEtBQUtvSixVQUFVQyxTQUFTNUUsYUFBYTtNQUM1RSxDQUFDLEdBQ0E7QUFDRDtNQUNEO0FBRUEsZUFBQTZFLE1BQUEsR0FBQUMsY0FBbUJMLFlBQUFJLE1BQUFDLFlBQUF4SCxRQUFBdUgsT0FBWTtBQUEvQixjQUFXdEosT0FBQXVKLFlBQUFELEdBQUE7QUFDVixZQUFJdEosZ0JBQWdCQyxhQUFhO0FBQ2hDcUksY0FBSXRJLElBQUk7UUFDVCxXQUFXQSxnQkFBZ0JtRyxNQUFNO0FBQ2hDLGdCQUFNO1lBQUNEO1VBQWEsSUFBSWxHO0FBQ3hCLGNBQUlrRyxlQUFlO0FBQ2xCb0MsZ0JBQUlwQyxhQUFhO1VBQ2xCO1FBQ0Q7TUFDRDtJQUNEO0VBQUEsU0FBQTdDLEtBQUE7QUFBQXlGLGVBQUF4RixFQUFBRCxHQUFBO0VBQUEsVUFBQTtBQUFBeUYsZUFBQXZGLEVBQUE7RUFBQTtBQUNELENBQUM7QUFFRCxJQUFNaUcsT0FBT0EsTUFBWTtBQUN4QmpELFdBQVNrRCxRQUFRekIsaUJBQWlCekIsU0FBU2tELEtBQUs7QUFDaEQsUUFBTUMsU0FBU25ELFNBQVNvRCxjQUEyQixtQkFBbUI7QUFDdEUsTUFBSSxDQUFDRCxRQUFRO0FBQ1o7RUFDRDtBQUVBZixtQkFBaUIvRSxRQUFROEYsUUFBUTtJQUNoQ0UsU0FBUztJQUNUQyxXQUFXO0VBQ1osQ0FBQztBQUNEdkIsTUFBSW9CLE1BQU07QUFDWDtBQUVBLElBQUl2QixzQkFBc0IsR0FBRztBQUM1QjJCLFVBQVFDLEtBQUssZ0ZBQWdGO0FBQzlGLE9BQU87QUFDTkMsSUFBRVIsSUFBSTtBQUNQOyIsCiAgIm5hbWVzIjogWyJ3aW5kb3ciLCAiZG9jdW1lbnQiLCAiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJpc0lubGluZUhUTUxFbGVtZW50IiwgIm5vZGUiLCAiSFRNTEVsZW1lbnQiLCAid2luZG93IiwgImdldENvbXB1dGVkU3R5bGUiLCAiZGlzcGxheSIsICJpbmNsdWRlcyIsICJpc1RleHROb2RlIiwgIm5vZGVUeXBlIiwgIk5vZGUiLCAiVEVYVF9OT0RFIiwgImlzVmlzaWJsZSIsICJlbGVtZW50IiwgInN0eWxlIiwgInZpc2liaWxpdHkiLCAiTnVtYmVyIiwgInBhcnNlRmxvYXQiLCAib3BhY2l0eSIsICJnZXROb2RlVGV4dCIsICJpbm5lclRleHQiLCAiZGF0YSIsICJzcGxpdEF0SW5kZXhlcyIsICJzdHIiLCAiaW5kZXhlcyIsICJyZXN1bHQiLCAibm9ybWFsaXplZEluZGV4ZXMiLCAidW5pcXVlQXJyYXkiLCAic29ydCIsICJhIiwgImIiLCAiZmlsdGVyIiwgImkiLCAibGVuZ3RoIiwgInNsaWNlIiwgInBlbmRpbmdBY3Rpb25zIiwgIldlYWtNYXAiLCAib25JbnRlcnNlY3Rpb24iLCAiZW50cmllcyIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAiZW50cnkiLCAidmFsdWUiLCAiaXNJbnRlcnNlY3RpbmciLCAidGFyZ2V0IiwgIm9ic2VydmVyIiwgInVub2JzZXJ2ZSIsICJjYWxsYmFja3MiLCAiZ2V0IiwgImNhbGxiYWNrIiwgInNoaWZ0IiwgImVyciIsICJlIiwgImYiLCAiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCAicXVldWVEb21NdXRhdGlvbiIsICJoYXMiLCAic2V0IiwgIm9ic2VydmUiLCAiUkVHRVhfUkFOR0VfQ0hJTkVTRSIsICJTdHJpbmciLCAicmF3IiwgIl90ZW1wbGF0ZU9iamVjdCIsICJfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsIiwgIlJFR0VYX1JBTkdFX09USEVSX0xFRlQiLCAiX3RlbXBsYXRlT2JqZWN0MiIsICJSRUdFWF9SQU5HRV9PVEhFUl9SSUdIVCIsICJfdGVtcGxhdGVPYmplY3QzIiwgIlJFR0VYX1NUUl9JTlRFUl9TQ1JJUFQiLCAiY29uY2F0IiwgIlNQQUNFIiwgIldSQVBQRVJfQ0xBU1MiLCAiU0VMRUNUT1JfQUxMT1dFRCIsICJTRUxFQ1RPUl9CTE9DS0VEIiwgIlNFTEVDVE9SIiwgIm1hcCIsICJhbGxvd2VkIiwgImZsYXRNYXAiLCAiYmxvY2tlZCIsICJtYXRjaCIsICJqb2luIiwgImdldExlYWZFbGVtZW50cyIsICJwYXJlbnQiLCAiY2FuZGlkYXRlcyIsICJxdWVyeVNlbGVjdG9yQWxsIiwgIm1hdGNoZXMiLCAiX2l0ZXJhdG9yMiIsICJfc3RlcDIiLCAiY2FuZGlkYXRlIiwgIl9pdGVyYXRvcjMiLCAiY2hpbGROb2RlcyIsICJfc3RlcDMiLCAiY2hpbGROb2RlIiwgImdldE5leHRWaXNpYmxlU2libGluZyIsICJjdXJyZW50Tm9kZSIsICJuZXh0U2libGluZyIsICJwYXJlbnRFbGVtZW50IiwgIlRleHQiLCAidHJpbSIsICJjcmVhdGVTcGFjaW5nV3JhcHBlciIsICJzcGFuIiwgImRvY3VtZW50IiwgImNyZWF0ZUVsZW1lbnQiLCAiY2xhc3NOYW1lIiwgInRleHRDb250ZW50IiwgImFkanVzdFNwYWNpbmciLCAidGV4dFNwYWNpbmdQb3NNYXAiLCAiTWFwIiwgIl9pIiwgIl9jaGlsZE5vZGVzIiwgImNoaWxkIiwgInRlc3RTdHJpbmciLCAiX2dldE5vZGVUZXh0JCIsICJyZWdleFRleHROb2RlRGF0YSIsICJSZWdFeHAiLCAiZXhlYyIsICJpbmRleCIsICJfaXRlcmF0b3I0IiwgIl9zdGVwNCIsICJ0ZXh0IiwgImZyYWdtZW50cyIsICJyZXBsYWNlbWVudCIsICJmcmFnbWVudCIsICJhdCIsICJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCAicmVwbGFjZVdpdGgiLCAiYWRkU3BhY2VUb1N0cmluZyIsICJyZWdleCIsICJyZXBsYWNlIiwgInN1cHBvcnRzVGV4dEF1dG9zcGFjZSIsICJDU1MiLCAic3VwcG9ydHMiLCAicnVuIiwgImxlYXZlcyIsICJfaXRlcmF0b3I1IiwgIl9zdGVwNSIsICJsZWFmIiwgIm11dGF0aW9uT2JzZXJ2ZXIiLCAiTXV0YXRpb25PYnNlcnZlciIsICJyZWNvcmRzIiwgIl9pdGVyYXRvcjYiLCAiX3N0ZXA2IiwgInJlY29yZCIsICJ0eXBlIiwgImFkZGVkTm9kZXMiLCAic29tZSIsICJjbGFzc0xpc3QiLCAiY29udGFpbnMiLCAiX2kyIiwgIl9hZGRlZE5vZGVzIiwgIm1haW4iLCAidGl0bGUiLCAib3V0cHV0IiwgInF1ZXJ5U2VsZWN0b3IiLCAic3VidHJlZSIsICJjaGlsZExpc3QiLCAiY29uc29sZSIsICJpbmZvIiwgIiQiXQp9Cg==
