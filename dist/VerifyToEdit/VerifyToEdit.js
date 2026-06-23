/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/VerifyToEdit}
 * @source {@link https://github.com/FurryWiki-zh/FurryWikiGadgets/tree/master/src/VerifyToEdit}
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

// dist/VerifyToEdit/VerifyToEdit.js
//! src/VerifyToEdit/VerifyToEdit.ts
var import_ext_gadget2 = require("ext.gadget.Util");
//! src/VerifyToEdit/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    Cancel: (0, import_ext_gadget.localize)({
      en: "Remind me later",
      "zh-hans": "暂不确认",
      "zh-hant": "暫不確認"
    }),
    Edit: (0, import_ext_gadget.localize)({
      en: "Edit",
      "zh-hans": "编辑",
      "zh-hant": "編輯"
    }),
    Help: (0, import_ext_gadget.localize)({
      en: "Learn more",
      "zh-hans": "了解详情",
      "zh-hant": "了解詳情"
    }),
    Verify: (0, import_ext_gadget.localize)({
      en: "Confirm your email address",
      "zh-hans": "确认电子邮箱",
      "zh-hant": "確認電子郵箱"
    }),
    DialogTitle: (0, import_ext_gadget.localize)({
      en: "Confirm your email address",
      "zh-hans": "完成电子邮箱确认",
      "zh-hant": "完成電子郵箱確認"
    }),
    DialogMessage: (0, import_ext_gadget.localize)({
      en: "You have logged in, but your email address has not been confirmed yet. To help reduce vandalism, you must confirm your email address before editing.",
      "zh-hans": "您已登录福瑞百科，但暂未确认电子邮箱。基于减少破坏的目的，在开始编辑前，您必须完成电子邮箱确认。",
      "zh-hant": "您已登錄福瑞百科，但暫未確認電子郵箱。基於減少破壞的目的，在開始編輯前，您必須完成電子郵箱確認。"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/VerifyToEdit/modules/util/generateMessageDialogProperty.ts
var generateMessageDialogProperty = () => {
  const $title = $("<b>").addClass("oo-ui-window-head").text(getMessage("DialogTitle"));
  const $message = $("<span>").addClass("oo-ui-window-foot").text(getMessage("DialogMessage"));
  const messageDialogProperty = {
    title: $title,
    message: $message,
    actions: [{
      action: "help",
      flags: "progressive",
      label: $("<b>").text(getMessage("Help"))
    }, {
      action: "verify",
      flags: ["primary", "progressive"],
      label: $("<b>").text(getMessage("Verify"))
    }, {
      action: "cancel",
      flags: ["safe", "close"],
      label: $("<b>").text(getMessage("Cancel"))
    }]
  };
  return messageDialogProperty;
};
//! src/VerifyToEdit/modules/initWindowManager.ts
var initWindowManager = () => {
  const windowManager = new OO.ui.WindowManager();
  return windowManager;
};
//! src/VerifyToEdit/modules/initDialog.ts
var {
  skin,
  wgAction
} = mw.config.get();
var isCitizen = skin === "citizen";
var helpURL = mw.util.getUrl("Project:百科章程");
var verifyURL = mw.util.getUrl("Special:ConfirmEmail");
var messageDialog;
var initDialog = ($body) => {
  const windowManager = initWindowManager();
  windowManager.$element.appendTo($body);
  const messageDialogProperty = generateMessageDialogProperty();
  const openDialog = () => {
    if (messageDialog) {
      if (messageDialog.isOpened()) {
        messageDialog.close();
      } else {
        messageDialog.open(messageDialogProperty);
      }
      return;
    }
    messageDialog = new OO.ui.MessageDialog();
    messageDialog.getActionProcess = (action) => {
      if (action === "help") {
        location.href = helpURL;
      } else if (action === "verify") {
        location.href = verifyURL;
      }
      return new OO.ui.Process(() => {
        void windowManager.closeWindow(messageDialog);
      });
    };
    windowManager.addWindows([messageDialog]);
    void windowManager.openWindow(messageDialog, messageDialogProperty);
  };
  const $caViewsource = $body.find("#ca-viewsource");
  if ($caViewsource.length) {
    const editIcon = isCitizen ? '<span class="citizen-ui-icon mw-ui-icon-wikimedia-edit"></span>' : "";
    $caViewsource.attr("id", "ca-edit").find("a").attr("aria-label", getMessage("DialogMessage")).html(editIcon + (isCitizen ? "<span>".concat(getMessage("Edit"), "</span>") : getMessage("Edit"))).on("click", (event) => {
      event.preventDefault();
      openDialog();
    });
    if (isCitizen) {
      $caViewsource.find("a").removeClass("cdx-button--weight-quiet").addClass("cdx-button--weight-primary cdx-button--action-progressive");
    }
  }
  if (["edit", "submit"].includes(wgAction) && !mw.config.get("wgUserEmailConfirmed")) {
    openDialog();
  }
};
//! src/VerifyToEdit/VerifyToEdit.ts
void (0, import_ext_gadget2.getBody)().then(function loginToEdit($body) {
  const {
    wgUserEmailConfirmed,
    wgUserName
  } = mw.config.get();
  if (!wgUserName) {
    return;
  }
  if (wgUserEmailConfirmed) {
    return;
  }
  if ((0, import_ext_gadget2.userIsInGroup)(["bot", "responsibleoperator"])) {
    return;
  }
  initDialog($body);
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1ZlcmlmeVRvRWRpdC9WZXJpZnlUb0VkaXQudHMiLCAic3JjL1ZlcmlmeVRvRWRpdC9tb2R1bGVzL2kxOG4udHMiLCAic3JjL1ZlcmlmeVRvRWRpdC9tb2R1bGVzL3V0aWwvZ2VuZXJhdGVNZXNzYWdlRGlhbG9nUHJvcGVydHkudHMiLCAic3JjL1ZlcmlmeVRvRWRpdC9tb2R1bGVzL2luaXRXaW5kb3dNYW5hZ2VyLnRzIiwgInNyYy9WZXJpZnlUb0VkaXQvbW9kdWxlcy9pbml0RGlhbG9nLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQge2dldEJvZHksIHVzZXJJc0luR3JvdXB9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge2luaXREaWFsb2d9IGZyb20gJy4vbW9kdWxlcy9pbml0RGlhbG9nJztcblxudm9pZCBnZXRCb2R5KCkudGhlbihmdW5jdGlvbiBsb2dpblRvRWRpdCgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkIHtcblx0Y29uc3Qge3dnVXNlckVtYWlsQ29uZmlybWVkLCB3Z1VzZXJOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRpZiAoIXdnVXNlck5hbWUpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyDpgq7nrrHlt7Lnoa7orqTnmoTnlKjmiLfnm7TmjqXmlL7ooYzvvIzml6DpnIDlvLnnqpdcblx0aWYgKHdnVXNlckVtYWlsQ29uZmlybWVkKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKHVzZXJJc0luR3JvdXAoWydib3QnLCAncmVzcG9uc2libGVvcGVyYXRvciddKSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGluaXREaWFsb2coJGJvZHkpO1xufSk7XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdENhbmNlbDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdSZW1pbmQgbWUgbGF0ZXInLFxuXHRcdFx0J3poLWhhbnMnOiAn5pqC5LiN56Gu6K6kJyxcblx0XHRcdCd6aC1oYW50JzogJ+aaq+S4jeeiuuiqjScsXG5cdFx0fSksXG5cdFx0RWRpdDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdFZGl0Jyxcblx0XHRcdCd6aC1oYW5zJzogJ+e8lui+kScsXG5cdFx0XHQnemgtaGFudCc6ICfnt6jovK8nLFxuXHRcdH0pLFxuXHRcdEhlbHA6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTGVhcm4gbW9yZScsXG5cdFx0XHQnemgtaGFucyc6ICfkuobop6Por6bmg4UnLFxuXHRcdFx0J3poLWhhbnQnOiAn5LqG6Kej6Kmz5oOFJyxcblx0XHR9KSxcblx0XHRWZXJpZnk6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ29uZmlybSB5b3VyIGVtYWlsIGFkZHJlc3MnLFxuXHRcdFx0J3poLWhhbnMnOiAn56Gu6K6k55S15a2Q6YKu566xJyxcblx0XHRcdCd6aC1oYW50JzogJ+eiuuiqjembu+WtkOmDteeusScsXG5cdFx0fSksXG5cdFx0RGlhbG9nVGl0bGU6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ29uZmlybSB5b3VyIGVtYWlsIGFkZHJlc3MnLFxuXHRcdFx0J3poLWhhbnMnOiAn5a6M5oiQ55S15a2Q6YKu566x56Gu6K6kJyxcblx0XHRcdCd6aC1oYW50JzogJ+WujOaIkOmbu+WtkOmDteeuseeiuuiqjScsXG5cdFx0fSksXG5cdFx0RGlhbG9nTWVzc2FnZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdZb3UgaGF2ZSBsb2dnZWQgaW4sIGJ1dCB5b3VyIGVtYWlsIGFkZHJlc3MgaGFzIG5vdCBiZWVuIGNvbmZpcm1lZCB5ZXQuIFRvIGhlbHAgcmVkdWNlIHZhbmRhbGlzbSwgeW91IG11c3QgY29uZmlybSB5b3VyIGVtYWlsIGFkZHJlc3MgYmVmb3JlIGVkaXRpbmcuJyxcblx0XHRcdCd6aC1oYW5zJzpcblx0XHRcdFx0J+aCqOW3sueZu+W9leemj+eRnueZvuenke+8jOS9huaaguacquehruiupOeUteWtkOmCrueuseOAguWfuuS6juWHj+WwkeegtOWdj+eahOebrueahO+8jOWcqOW8gOWni+e8lui+keWJje+8jOaCqOW/hemhu+WujOaIkOeUteWtkOmCrueuseehruiupOOAgicsXG5cdFx0XHQnemgtaGFudCc6XG5cdFx0XHRcdCfmgqjlt7LnmbvpjITnpo/nkZ7nmb7np5HvvIzkvYbmmqvmnKrnorroqo3pm7vlrZDpg7XnrrHjgILln7rmlrzmuJvlsJHnoLTlo57nmoTnm67nmoTvvIzlnKjplovlp4vnt6jovK/liY3vvIzmgqjlv4XpoIjlrozmiJDpm7vlrZDpg7XnrrHnorroqo3jgIInLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuXG5jb25zdCBnZW5lcmF0ZU1lc3NhZ2VEaWFsb2dQcm9wZXJ0eSA9ICgpOiBPTy51aS5XaW5kb3dNYW5hZ2VyLldpbmRvd09wZW5pbmdEYXRhID0+IHtcblx0Y29uc3QgJHRpdGxlOiBKUXVlcnkgPSAkKCc8Yj4nKS5hZGRDbGFzcygnb28tdWktd2luZG93LWhlYWQnKS50ZXh0KGdldE1lc3NhZ2UoJ0RpYWxvZ1RpdGxlJykpO1xuXHRjb25zdCAkbWVzc2FnZTogSlF1ZXJ5ID0gJCgnPHNwYW4+JykuYWRkQ2xhc3MoJ29vLXVpLXdpbmRvdy1mb290JykudGV4dChnZXRNZXNzYWdlKCdEaWFsb2dNZXNzYWdlJykpO1xuXG5cdGNvbnN0IG1lc3NhZ2VEaWFsb2dQcm9wZXJ0eTogT08udWkuV2luZG93TWFuYWdlci5XaW5kb3dPcGVuaW5nRGF0YSA9IHtcblx0XHR0aXRsZTogJHRpdGxlLFxuXHRcdG1lc3NhZ2U6ICRtZXNzYWdlLFxuXHRcdGFjdGlvbnM6IFtcblx0XHRcdHtcblx0XHRcdFx0YWN0aW9uOiAnaGVscCcsXG5cdFx0XHRcdGZsYWdzOiAncHJvZ3Jlc3NpdmUnLFxuXHRcdFx0XHRsYWJlbDogJCgnPGI+JykudGV4dChnZXRNZXNzYWdlKCdIZWxwJykpLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0YWN0aW9uOiAndmVyaWZ5Jyxcblx0XHRcdFx0ZmxhZ3M6IFsncHJpbWFyeScsICdwcm9ncmVzc2l2ZSddLFxuXHRcdFx0XHRsYWJlbDogJCgnPGI+JykudGV4dChnZXRNZXNzYWdlKCdWZXJpZnknKSksXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRhY3Rpb246ICdjYW5jZWwnLFxuXHRcdFx0XHRmbGFnczogWydzYWZlJywgJ2Nsb3NlJ10sXG5cdFx0XHRcdGxhYmVsOiAkKCc8Yj4nKS50ZXh0KGdldE1lc3NhZ2UoJ0NhbmNlbCcpKSxcblx0XHRcdH0sXG5cdFx0XSxcblx0fTtcblxuXHRyZXR1cm4gbWVzc2FnZURpYWxvZ1Byb3BlcnR5O1xufTtcblxuZXhwb3J0IHtnZW5lcmF0ZU1lc3NhZ2VEaWFsb2dQcm9wZXJ0eX07XG4iLCAiY29uc3QgaW5pdFdpbmRvd01hbmFnZXIgPSAoKTogT08udWkuV2luZG93TWFuYWdlciA9PiB7XG5cdGNvbnN0IHdpbmRvd01hbmFnZXI6IE9PLnVpLldpbmRvd01hbmFnZXIgPSBuZXcgT08udWkuV2luZG93TWFuYWdlcigpO1xuXG5cdHJldHVybiB3aW5kb3dNYW5hZ2VyO1xufTtcblxuZXhwb3J0IHtpbml0V2luZG93TWFuYWdlcn07XG4iLCAiaW1wb3J0IHtnZW5lcmF0ZU1lc3NhZ2VEaWFsb2dQcm9wZXJ0eX0gZnJvbSAnLi91dGlsL2dlbmVyYXRlTWVzc2FnZURpYWxvZ1Byb3BlcnR5JztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcbmltcG9ydCB7aW5pdFdpbmRvd01hbmFnZXJ9IGZyb20gJy4vaW5pdFdpbmRvd01hbmFnZXInO1xuXG5jb25zdCB7c2tpbiwgd2dBY3Rpb259ID0gbXcuY29uZmlnLmdldCgpO1xuY29uc3QgaXNDaXRpemVuOiBib29sZWFuID0gc2tpbiA9PT0gJ2NpdGl6ZW4nO1xuY29uc3QgaGVscFVSTDogc3RyaW5nID0gbXcudXRpbC5nZXRVcmwoJ1Byb2plY3Q655m+56eR56ug56iLJyk7XG5jb25zdCB2ZXJpZnlVUkw6IHN0cmluZyA9IG13LnV0aWwuZ2V0VXJsKCdTcGVjaWFsOkNvbmZpcm1FbWFpbCcpO1xuXG5sZXQgbWVzc2FnZURpYWxvZzogT08udWkuTWVzc2FnZURpYWxvZztcblxuY29uc3QgaW5pdERpYWxvZyA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0Y29uc3Qgd2luZG93TWFuYWdlcjogT08udWkuV2luZG93TWFuYWdlciA9IGluaXRXaW5kb3dNYW5hZ2VyKCk7XG5cdHdpbmRvd01hbmFnZXIuJGVsZW1lbnQuYXBwZW5kVG8oJGJvZHkpO1xuXG5cdGNvbnN0IG1lc3NhZ2VEaWFsb2dQcm9wZXJ0eTogT08udWkuV2luZG93TWFuYWdlci5XaW5kb3dPcGVuaW5nRGF0YSA9IGdlbmVyYXRlTWVzc2FnZURpYWxvZ1Byb3BlcnR5KCk7XG5cblx0Y29uc3Qgb3BlbkRpYWxvZyA9ICgpOiB2b2lkID0+IHtcblx0XHRpZiAobWVzc2FnZURpYWxvZykge1xuXHRcdFx0aWYgKG1lc3NhZ2VEaWFsb2cuaXNPcGVuZWQoKSkge1xuXHRcdFx0XHRtZXNzYWdlRGlhbG9nLmNsb3NlKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRtZXNzYWdlRGlhbG9nLm9wZW4obWVzc2FnZURpYWxvZ1Byb3BlcnR5KTtcblx0XHRcdH1cblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRtZXNzYWdlRGlhbG9nID0gbmV3IE9PLnVpLk1lc3NhZ2VEaWFsb2coKTtcblx0XHRtZXNzYWdlRGlhbG9nLmdldEFjdGlvblByb2Nlc3MgPSAoYWN0aW9uOiBzdHJpbmcpOiBPTy51aS5Qcm9jZXNzID0+IHtcblx0XHRcdGlmIChhY3Rpb24gPT09ICdoZWxwJykge1xuXHRcdFx0XHRsb2NhdGlvbi5ocmVmID0gaGVscFVSTDtcblx0XHRcdH0gZWxzZSBpZiAoYWN0aW9uID09PSAndmVyaWZ5Jykge1xuXHRcdFx0XHRsb2NhdGlvbi5ocmVmID0gdmVyaWZ5VVJMO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG5ldyBPTy51aS5Qcm9jZXNzKCgpOiB2b2lkID0+IHtcblx0XHRcdFx0dm9pZCB3aW5kb3dNYW5hZ2VyLmNsb3NlV2luZG93KG1lc3NhZ2VEaWFsb2cpO1xuXHRcdFx0fSk7XG5cdFx0fTtcblxuXHRcdHdpbmRvd01hbmFnZXIuYWRkV2luZG93cyhbbWVzc2FnZURpYWxvZ10pO1xuXHRcdHZvaWQgd2luZG93TWFuYWdlci5vcGVuV2luZG93KG1lc3NhZ2VEaWFsb2csIG1lc3NhZ2VEaWFsb2dQcm9wZXJ0eSk7XG5cdH07XG5cblx0Y29uc3QgJGNhVmlld3NvdXJjZTogSlF1ZXJ5ID0gJGJvZHkuZmluZCgnI2NhLXZpZXdzb3VyY2UnKTtcblx0aWYgKCRjYVZpZXdzb3VyY2UubGVuZ3RoKSB7XG5cdFx0Y29uc3QgZWRpdEljb246IHN0cmluZyA9IGlzQ2l0aXplbiA/ICc8c3BhbiBjbGFzcz1cImNpdGl6ZW4tdWktaWNvbiBtdy11aS1pY29uLXdpa2ltZWRpYS1lZGl0XCI+PC9zcGFuPicgOiAnJztcblx0XHQkY2FWaWV3c291cmNlXG5cdFx0XHQuYXR0cignaWQnLCAnY2EtZWRpdCcpXG5cdFx0XHQuZmluZCgnYScpXG5cdFx0XHQuYXR0cignYXJpYS1sYWJlbCcsIGdldE1lc3NhZ2UoJ0RpYWxvZ01lc3NhZ2UnKSlcblx0XHRcdC5odG1sKGVkaXRJY29uICsgKGlzQ2l0aXplbiA/IGA8c3Bhbj4ke2dldE1lc3NhZ2UoJ0VkaXQnKX08L3NwYW4+YCA6IGdldE1lc3NhZ2UoJ0VkaXQnKSkpXG5cdFx0XHQub24oJ2NsaWNrJywgKGV2ZW50OiBKUXVlcnkuQ2xpY2tFdmVudCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRvcGVuRGlhbG9nKCk7XG5cdFx0XHR9KTtcblxuXHRcdGlmIChpc0NpdGl6ZW4pIHtcblx0XHRcdCRjYVZpZXdzb3VyY2Vcblx0XHRcdFx0LmZpbmQoJ2EnKVxuXHRcdFx0XHQucmVtb3ZlQ2xhc3MoJ2NkeC1idXR0b24tLXdlaWdodC1xdWlldCcpXG5cdFx0XHRcdC5hZGRDbGFzcygnY2R4LWJ1dHRvbi0td2VpZ2h0LXByaW1hcnkgY2R4LWJ1dHRvbi0tYWN0aW9uLXByb2dyZXNzaXZlJyk7XG5cdFx0fVxuXHR9XG5cblx0aWYgKFsnZWRpdCcsICdzdWJtaXQnXS5pbmNsdWRlcyh3Z0FjdGlvbikgJiYgIW13LmNvbmZpZy5nZXQoJ3dnVXNlckVtYWlsQ29uZmlybWVkJykpIHtcblx0XHRvcGVuRGlhbG9nKCk7XG5cdH1cbn07XG5cbmV4cG9ydCB7aW5pdERpYWxvZ307XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxxQkFBcUNDLFFBQUEsaUJBQUE7O0FDQXJDLElBQUFDLG9CQUF1QkQsUUFBQSxpQkFBQTtBQUV2QixJQUFNRSxrQkFBa0JBLE1BQU07QUFDN0IsU0FBTztJQUNOQyxTQUFBLEdBQVFGLGtCQUFBRyxVQUFTO01BQ2hCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RDLE9BQUEsR0FBTUwsa0JBQUFHLFVBQVM7TUFDZEMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNERSxPQUFBLEdBQU1OLGtCQUFBRyxVQUFTO01BQ2RDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREcsU0FBQSxHQUFRUCxrQkFBQUcsVUFBUztNQUNoQkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1os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WUFBWXpCLFlBQUEsU0FBQTRCLE9BQXFCckQsV0FBVyxNQUFNLEdBQUMsU0FBQSxJQUFZQSxXQUFXLE1BQU0sRUFBRSxFQUN2RnNELEdBQUcsU0FBVUMsV0FBbUM7QUFDaERBLFlBQU1DLGVBQWU7QUFDckJyQixpQkFBVztJQUNaLENBQUM7QUFFRixRQUFJVixXQUFXO0FBQ2RzQixvQkFDRUMsS0FBSyxHQUFHLEVBQ1JTLFlBQVksMEJBQTBCLEVBQ3RDcEQsU0FBUywyREFBMkQ7SUFDdkU7RUFDRDtBQUVBLE1BQUksQ0FBQyxRQUFRLFFBQVEsRUFBRXFELFNBQVNyQyxRQUFRLEtBQUssQ0FBQ0MsR0FBR0MsT0FBT0MsSUFBSSxzQkFBc0IsR0FBRztBQUNwRlcsZUFBVztFQUNaO0FBQ0Q7O0FKaEVBLE1BQUEsR0FBS2hELG1CQUFBd0UsU0FBUSxFQUFFQyxLQUFLLFNBQVNDLFlBQVk3QixPQUFzQztBQUM5RSxRQUFNO0lBQUM4QjtJQUFzQkM7RUFBVSxJQUFJekMsR0FBR0MsT0FBT0MsSUFBSTtBQUV6RCxNQUFJLENBQUN1QyxZQUFZO0FBQ2hCO0VBQ0Q7QUFHQSxNQUFJRCxzQkFBc0I7QUFDekI7RUFDRDtBQUVBLE9BQUEsR0FBSTNFLG1CQUFBNkUsZUFBYyxDQUFDLE9BQU8scUJBQXFCLENBQUMsR0FBRztBQUNsRDtFQUNEO0FBRUFqQyxhQUFXQyxLQUFLO0FBQ2pCLENBQUM7IiwKICAibmFtZXMiOiBbImltcG9ydF9leHRfZ2FkZ2V0MiIsICJyZXF1aXJlIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImdldEkxOG5NZXNzYWdlcyIsICJDYW5jZWwiLCAibG9jYWxpemUiLCAiZW4iLCAiRWRpdCIsICJIZWxwIiwgIlZlcmlmeSIsICJEaWFsb2dUaXRsZSIsICJEaWFsb2dNZXNzYWdlIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJnZW5lcmF0ZU1lc3NhZ2VEaWFsb2dQcm9wZXJ0eSIsICIkdGl0bGUiLCAiJCIsICJhZGRDbGFzcyIsICJ0ZXh0IiwgIiRtZXNzYWdlIiwgIm1lc3NhZ2VEaWFsb2dQcm9wZXJ0eSIsICJ0aXRsZSIsICJtZXNzYWdlIiwgImFjdGlvbnMiLCAiYWN0aW9uIiwgImZsYWdzIiwgImxhYmVsIiwgImluaXRXaW5kb3dNYW5hZ2VyIiwgIndpbmRvd01hbmFnZXIiLCAiT08iLCAidWkiLCAiV2luZG93TWFuYWdlciIsICJza2luIiwgIndnQWN0aW9uIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiaXNDaXRpemVuIiwgImhlbHBVUkwiLCAidXRpbCIsICJnZXRVcmwiLCAidmVyaWZ5VVJMIiwgIm1lc3NhZ2VEaWFsb2ciLCAiaW5pdERpYWxvZyIsICIkYm9keSIsICIkZWxlbWVudCIsICJhcHBlbmRUbyIsICJvcGVuRGlhbG9nIiwgImlzT3BlbmVkIiwgImNsb3NlIiwgIm9wZW4iLCAiTWVzc2FnZURpYWxvZyIsICJnZXRBY3Rpb25Qcm9jZXNzIiwgImxvY2F0aW9uIiwgImhyZWYiLCAiUHJvY2VzcyIsICJjbG9zZVdpbmRvdyIsICJhZGRXaW5kb3dzIiwgIm9wZW5XaW5kb3ciLCAiJGNhVmlld3NvdXJjZSIsICJmaW5kIiwgImxlbmd0aCIsICJlZGl0SWNvbiIsICJhdHRyIiwgImh0bWwiLCAiY29uY2F0IiwgIm9uIiwgImV2ZW50IiwgInByZXZlbnREZWZhdWx0IiwgInJlbW92ZUNsYXNzIiwgImluY2x1ZGVzIiwgImdldEJvZHkiLCAidGhlbiIsICJsb2dpblRvRWRpdCIsICJ3Z1VzZXJFbWFpbENvbmZpcm1lZCIsICJ3Z1VzZXJOYW1lIiwgInVzZXJJc0luR3JvdXAiXQp9Cg==
