/**
 * SPDX-License-Identifier: CC-BY-4.0
 * _addText: '{{Gadget Header|license=CC-BY-4.0}}'
 *
 * @base {@link https://github.com/FurryWiki-zh/FurryWikiGadgets/tree/master/src/RenameRandomName}
 * @source {@link https://github.com/FurryWiki-zh/FurryWikiGadgets/tree/master/src/RenameRandomName}
 * @license CC-BY-4.0 {@link https://furrywiki.org.cn/wiki/H:CC-BY-4.0}
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

// dist/RenameRandomName/RenameRandomName.js
//! src/RenameRandomName/RenameRandomName.js
/**
 * SPDX-License-Identifier: CC-BY-4.0
 * _addText: '{{Gadget Header|license=CC-BY-4.0}}'
 *
 * @source {@link https://github.com/FurryWiki-zh/FurryWikiGadgets/tree/master/src/RenameRandomName}
 * @license CC-BY-4.0 {@link https://furrywiki.org.cn/wiki/H:CC-BY-4.0}
 */
(function() {
  "use strict";
  if (mw.config.get("wgCanonicalSpecialPageName") !== "Renameuser") return;
  $(() => {
    var $input = $('#renameuser input[name="newusername"]');
    if (!$input.length) return;
    var $indicator = $input.closest(".oo-ui-textInputWidget").find(".oo-ui-indicatorElement-indicator");
    if (!$indicator.length) return;
    $indicator.removeClass("oo-ui-indicator-required").addClass("oo-ui-icon-die").attr("title", "生成随机匿名用户名").css({
      cursor: "pointer",
      "pointer-events": "auto"
    });
    $indicator.on("click", (e) => {
      e.stopPropagation();
      var suffix = Math.random().toString(36).substring(2, 12);
      $input.val("用户已注销-".concat(suffix)).trigger("input change");
    });
  });
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1JlbmFtZVJhbmRvbU5hbWUvUmVuYW1lUmFuZG9tTmFtZS5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLyoqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQ0MtQlktNC4wXG4gKiBfYWRkVGV4dDogJ3t7R2FkZ2V0IEhlYWRlcnxsaWNlbnNlPUNDLUJZLTQuMH19J1xuICpcbiAqIEBzb3VyY2Uge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9GdXJyeVdpa2ktemgvRnVycnlXaWtpR2FkZ2V0cy90cmVlL21hc3Rlci9zcmMvUmVuYW1lUmFuZG9tTmFtZX1cbiAqIEBsaWNlbnNlIENDLUJZLTQuMCB7QGxpbmsgaHR0cHM6Ly9mdXJyeXdpa2kub3JnLmNuL3dpa2kvSDpDQy1CWS00LjB9XG4gKi9cbihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHRpZiAobXcuY29uZmlnLmdldCgnd2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUnKSAhPT0gJ1JlbmFtZXVzZXInKSByZXR1cm47XG5cblx0JCgoKSA9PiB7XG5cdFx0dmFyICRpbnB1dCA9ICQoJyNyZW5hbWV1c2VyIGlucHV0W25hbWU9XCJuZXd1c2VybmFtZVwiXScpO1xuXHRcdGlmICghJGlucHV0Lmxlbmd0aCkgcmV0dXJuO1xuXG5cdFx0dmFyICRpbmRpY2F0b3IgPSAkaW5wdXQuY2xvc2VzdCgnLm9vLXVpLXRleHRJbnB1dFdpZGdldCcpLmZpbmQoJy5vby11aS1pbmRpY2F0b3JFbGVtZW50LWluZGljYXRvcicpO1xuXHRcdGlmICghJGluZGljYXRvci5sZW5ndGgpIHJldHVybjtcblxuXHRcdCRpbmRpY2F0b3Jcblx0XHRcdC5yZW1vdmVDbGFzcygnb28tdWktaW5kaWNhdG9yLXJlcXVpcmVkJylcblx0XHRcdC5hZGRDbGFzcygnb28tdWktaWNvbi1kaWUnKVxuXHRcdFx0LmF0dHIoJ3RpdGxlJywgJ+eUn+aIkOmaj+acuuWMv+WQjeeUqOaIt+WQjScpXG5cdFx0XHQuY3NzKHtcblx0XHRcdFx0Y3Vyc29yOiAncG9pbnRlcicsXG5cdFx0XHRcdCdwb2ludGVyLWV2ZW50cyc6ICdhdXRvJyxcblx0XHRcdH0pO1xuXG5cdFx0JGluZGljYXRvci5vbignY2xpY2snLCAoZSkgPT4ge1xuXHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdHZhciBzdWZmaXggPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoMiwgMTIpO1xuXHRcdFx0JGlucHV0LnZhbChg55So5oi35bey5rOo6ZSALSR7c3VmZml4fWApLnRyaWdnZXIoJ2lucHV0IGNoYW5nZScpO1xuXHRcdH0pO1xuXHR9KTtcbn0pKCk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7OztDQU9DLFdBQVk7QUFDWjtBQUVBLE1BQUlBLEdBQUdDLE9BQU9DLElBQUksNEJBQTRCLE1BQU0sYUFBYztBQUVsRUMsSUFBRSxNQUFNO0FBQ1AsUUFBSUMsU0FBU0QsRUFBRSx1Q0FBdUM7QUFDdEQsUUFBSSxDQUFDQyxPQUFPQyxPQUFRO0FBRXBCLFFBQUlDLGFBQWFGLE9BQU9HLFFBQVEsd0JBQXdCLEVBQUVDLEtBQUssbUNBQW1DO0FBQ2xHLFFBQUksQ0FBQ0YsV0FBV0QsT0FBUTtBQUV4QkMsZUFDRUcsWUFBWSwwQkFBMEIsRUFDdENDLFNBQVMsZ0JBQWdCLEVBQ3pCQyxLQUFLLFNBQVMsV0FBVyxFQUN6QkMsSUFBSTtNQUNKQyxRQUFRO01BQ1Isa0JBQWtCO0lBQ25CLENBQUM7QUFFRlAsZUFBV1EsR0FBRyxTQUFVQyxPQUFNO0FBQzdCQSxRQUFFQyxnQkFBZ0I7QUFDbEIsVUFBSUMsU0FBU0MsS0FBS0MsT0FBTyxFQUFFQyxTQUFTLEVBQUUsRUFBRUMsVUFBVSxHQUFHLEVBQUU7QUFDdkRqQixhQUFPa0IsSUFBQSxTQUFBQyxPQUFhTixNQUFNLENBQUUsRUFBRU8sUUFBUSxjQUFjO0lBQ3JELENBQUM7RUFDRixDQUFDO0FBQ0YsR0FBRzsiLAogICJuYW1lcyI6IFsibXciLCAiY29uZmlnIiwgImdldCIsICIkIiwgIiRpbnB1dCIsICJsZW5ndGgiLCAiJGluZGljYXRvciIsICJjbG9zZXN0IiwgImZpbmQiLCAicmVtb3ZlQ2xhc3MiLCAiYWRkQ2xhc3MiLCAiYXR0ciIsICJjc3MiLCAiY3Vyc29yIiwgIm9uIiwgImUiLCAic3RvcFByb3BhZ2F0aW9uIiwgInN1ZmZpeCIsICJNYXRoIiwgInJhbmRvbSIsICJ0b1N0cmluZyIsICJzdWJzdHJpbmciLCAidmFsIiwgImNvbmNhdCIsICJ0cmlnZ2VyIl0KfQo=
