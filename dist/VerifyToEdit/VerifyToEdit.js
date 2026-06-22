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
    $caViewsource.attr("id", "ca-edit").find("a").attr("aria-label", getMessage("DialogMessage")).html(editIcon + getMessage("Edit")).on("click", (event) => {
      event.preventDefault();
      openDialog();
    });
  }
  if (["edit", "submit"].includes(wgAction)) {
    openDialog();
  }
};
//! src/VerifyToEdit/VerifyToEdit.ts
void (0, import_ext_gadget2.getBody)().then(function loginToEdit($body) {
  const {
    wgUserName
  } = mw.config.get();
  if (!wgUserName) {
    return;
  }
  if ((0, import_ext_gadget2.userIsInGroup)(["bot", "responsibleoperator"])) {
    return;
  }
  initDialog($body);
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1ZlcmlmeVRvRWRpdC9WZXJpZnlUb0VkaXQudHMiLCAic3JjL1ZlcmlmeVRvRWRpdC9tb2R1bGVzL2kxOG4udHMiLCAic3JjL1ZlcmlmeVRvRWRpdC9tb2R1bGVzL3V0aWwvZ2VuZXJhdGVNZXNzYWdlRGlhbG9nUHJvcGVydHkudHMiLCAic3JjL1ZlcmlmeVRvRWRpdC9tb2R1bGVzL2luaXRXaW5kb3dNYW5hZ2VyLnRzIiwgInNyYy9WZXJpZnlUb0VkaXQvbW9kdWxlcy9pbml0RGlhbG9nLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQge2dldEJvZHksIHVzZXJJc0luR3JvdXB9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge2luaXREaWFsb2d9IGZyb20gJy4vbW9kdWxlcy9pbml0RGlhbG9nJztcblxudm9pZCBnZXRCb2R5KCkudGhlbihmdW5jdGlvbiBsb2dpblRvRWRpdCgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkIHtcblx0Y29uc3Qge3dnVXNlck5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGlmICghd2dVc2VyTmFtZSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGlmICh1c2VySXNJbkdyb3VwKFsnYm90JywgJ3Jlc3BvbnNpYmxlb3BlcmF0b3InXSkpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpbml0RGlhbG9nKCRib2R5KTtcbn0pO1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRDYW5jZWw6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUmVtaW5kIG1lIGxhdGVyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+aaguS4jeehruiupCcsXG5cdFx0XHQnemgtaGFudCc6ICfmmqvkuI3norroqo0nLFxuXHRcdH0pLFxuXHRcdEVkaXQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRWRpdCcsXG5cdFx0XHQnemgtaGFucyc6ICfnvJbovpEnLFxuXHRcdFx0J3poLWhhbnQnOiAn57eo6LyvJyxcblx0XHR9KSxcblx0XHRIZWxwOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0xlYXJuIG1vcmUnLFxuXHRcdFx0J3poLWhhbnMnOiAn5LqG6Kej6K+m5oOFJyxcblx0XHRcdCd6aC1oYW50JzogJ+S6huino+ips+aDhScsXG5cdFx0fSksXG5cdFx0VmVyaWZ5OiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0NvbmZpcm0geW91ciBlbWFpbCBhZGRyZXNzJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ehruiupOeUteWtkOmCrueusScsXG5cdFx0XHQnemgtaGFudCc6ICfnorroqo3pm7vlrZDpg7XnrrEnLFxuXHRcdH0pLFxuXHRcdERpYWxvZ1RpdGxlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0NvbmZpcm0geW91ciBlbWFpbCBhZGRyZXNzJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WujOaIkOeUteWtkOmCrueuseehruiupCcsXG5cdFx0XHQnemgtaGFudCc6ICflrozmiJDpm7vlrZDpg7XnrrHnorroqo0nLFxuXHRcdH0pLFxuXHRcdERpYWxvZ01lc3NhZ2U6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnWW91IGhhdmUgbG9nZ2VkIGluLCBidXQgeW91ciBlbWFpbCBhZGRyZXNzIGhhcyBub3QgYmVlbiBjb25maXJtZWQgeWV0LiBUbyBoZWxwIHJlZHVjZSB2YW5kYWxpc20sIHlvdSBtdXN0IGNvbmZpcm0geW91ciBlbWFpbCBhZGRyZXNzIGJlZm9yZSBlZGl0aW5nLicsXG5cdFx0XHQnemgtaGFucyc6XG5cdFx0XHRcdCfmgqjlt7LnmbvlvZXnpo/nkZ7nmb7np5HvvIzkvYbmmoLmnKrnoa7orqTnlLXlrZDpgq7nrrHjgILln7rkuo7lh4/lsJHnoLTlnY/nmoTnm67nmoTvvIzlnKjlvIDlp4vnvJbovpHliY3vvIzmgqjlv4XpobvlrozmiJDnlLXlrZDpgq7nrrHnoa7orqTjgIInLFxuXHRcdFx0J3poLWhhbnQnOlxuXHRcdFx0XHQn5oKo5bey55m76YyE56aP55Ge55m+56eR77yM5L2G5pqr5pyq56K66KqN6Zu75a2Q6YO1566x44CC5Z+65pa85rib5bCR56C05aOe55qE55uu55qE77yM5Zyo6ZaL5aeL57eo6Lyv5YmN77yM5oKo5b+F6aCI5a6M5oiQ6Zu75a2Q6YO1566x56K66KqN44CCJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcblxuY29uc3QgZ2VuZXJhdGVNZXNzYWdlRGlhbG9nUHJvcGVydHkgPSAoKTogT08udWkuV2luZG93TWFuYWdlci5XaW5kb3dPcGVuaW5nRGF0YSA9PiB7XG5cdGNvbnN0ICR0aXRsZTogSlF1ZXJ5ID0gJCgnPGI+JykuYWRkQ2xhc3MoJ29vLXVpLXdpbmRvdy1oZWFkJykudGV4dChnZXRNZXNzYWdlKCdEaWFsb2dUaXRsZScpKTtcblx0Y29uc3QgJG1lc3NhZ2U6IEpRdWVyeSA9ICQoJzxzcGFuPicpLmFkZENsYXNzKCdvby11aS13aW5kb3ctZm9vdCcpLnRleHQoZ2V0TWVzc2FnZSgnRGlhbG9nTWVzc2FnZScpKTtcblxuXHRjb25zdCBtZXNzYWdlRGlhbG9nUHJvcGVydHk6IE9PLnVpLldpbmRvd01hbmFnZXIuV2luZG93T3BlbmluZ0RhdGEgPSB7XG5cdFx0dGl0bGU6ICR0aXRsZSxcblx0XHRtZXNzYWdlOiAkbWVzc2FnZSxcblx0XHRhY3Rpb25zOiBbXG5cdFx0XHR7XG5cdFx0XHRcdGFjdGlvbjogJ2hlbHAnLFxuXHRcdFx0XHRmbGFnczogJ3Byb2dyZXNzaXZlJyxcblx0XHRcdFx0bGFiZWw6ICQoJzxiPicpLnRleHQoZ2V0TWVzc2FnZSgnSGVscCcpKSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGFjdGlvbjogJ3ZlcmlmeScsXG5cdFx0XHRcdGZsYWdzOiBbJ3ByaW1hcnknLCAncHJvZ3Jlc3NpdmUnXSxcblx0XHRcdFx0bGFiZWw6ICQoJzxiPicpLnRleHQoZ2V0TWVzc2FnZSgnVmVyaWZ5JykpLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0YWN0aW9uOiAnY2FuY2VsJyxcblx0XHRcdFx0ZmxhZ3M6IFsnc2FmZScsICdjbG9zZSddLFxuXHRcdFx0XHRsYWJlbDogJCgnPGI+JykudGV4dChnZXRNZXNzYWdlKCdDYW5jZWwnKSksXG5cdFx0XHR9LFxuXHRcdF0sXG5cdH07XG5cblx0cmV0dXJuIG1lc3NhZ2VEaWFsb2dQcm9wZXJ0eTtcbn07XG5cbmV4cG9ydCB7Z2VuZXJhdGVNZXNzYWdlRGlhbG9nUHJvcGVydHl9O1xuIiwgImNvbnN0IGluaXRXaW5kb3dNYW5hZ2VyID0gKCk6IE9PLnVpLldpbmRvd01hbmFnZXIgPT4ge1xuXHRjb25zdCB3aW5kb3dNYW5hZ2VyOiBPTy51aS5XaW5kb3dNYW5hZ2VyID0gbmV3IE9PLnVpLldpbmRvd01hbmFnZXIoKTtcblxuXHRyZXR1cm4gd2luZG93TWFuYWdlcjtcbn07XG5cbmV4cG9ydCB7aW5pdFdpbmRvd01hbmFnZXJ9O1xuIiwgImltcG9ydCB7Z2VuZXJhdGVNZXNzYWdlRGlhbG9nUHJvcGVydHl9IGZyb20gJy4vdXRpbC9nZW5lcmF0ZU1lc3NhZ2VEaWFsb2dQcm9wZXJ0eSc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5pbXBvcnQge2luaXRXaW5kb3dNYW5hZ2VyfSBmcm9tICcuL2luaXRXaW5kb3dNYW5hZ2VyJztcblxuY29uc3Qge3NraW4sIHdnQWN0aW9ufSA9IG13LmNvbmZpZy5nZXQoKTtcbmNvbnN0IGlzQ2l0aXplbjogYm9vbGVhbiA9IHNraW4gPT09ICdjaXRpemVuJztcbmNvbnN0IGhlbHBVUkw6IHN0cmluZyA9IG13LnV0aWwuZ2V0VXJsKCdQcm9qZWN0OueZvuenkeeroOeoiycpO1xuY29uc3QgdmVyaWZ5VVJMOiBzdHJpbmcgPSBtdy51dGlsLmdldFVybCgnU3BlY2lhbDpDb25maXJtRW1haWwnKTtcblxubGV0IG1lc3NhZ2VEaWFsb2c6IE9PLnVpLk1lc3NhZ2VEaWFsb2c7XG5cbmNvbnN0IGluaXREaWFsb2cgPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdGNvbnN0IHdpbmRvd01hbmFnZXI6IE9PLnVpLldpbmRvd01hbmFnZXIgPSBpbml0V2luZG93TWFuYWdlcigpO1xuXHR3aW5kb3dNYW5hZ2VyLiRlbGVtZW50LmFwcGVuZFRvKCRib2R5KTtcblxuXHRjb25zdCBtZXNzYWdlRGlhbG9nUHJvcGVydHk6IE9PLnVpLldpbmRvd01hbmFnZXIuV2luZG93T3BlbmluZ0RhdGEgPSBnZW5lcmF0ZU1lc3NhZ2VEaWFsb2dQcm9wZXJ0eSgpO1xuXG5cdGNvbnN0IG9wZW5EaWFsb2cgPSAoKTogdm9pZCA9PiB7XG5cdFx0aWYgKG1lc3NhZ2VEaWFsb2cpIHtcblx0XHRcdGlmIChtZXNzYWdlRGlhbG9nLmlzT3BlbmVkKCkpIHtcblx0XHRcdFx0bWVzc2FnZURpYWxvZy5jbG9zZSgpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bWVzc2FnZURpYWxvZy5vcGVuKG1lc3NhZ2VEaWFsb2dQcm9wZXJ0eSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0bWVzc2FnZURpYWxvZyA9IG5ldyBPTy51aS5NZXNzYWdlRGlhbG9nKCk7XG5cdFx0bWVzc2FnZURpYWxvZy5nZXRBY3Rpb25Qcm9jZXNzID0gKGFjdGlvbjogc3RyaW5nKTogT08udWkuUHJvY2VzcyA9PiB7XG5cdFx0XHRpZiAoYWN0aW9uID09PSAnaGVscCcpIHtcblx0XHRcdFx0bG9jYXRpb24uaHJlZiA9IGhlbHBVUkw7XG5cdFx0XHR9IGVsc2UgaWYgKGFjdGlvbiA9PT0gJ3ZlcmlmeScpIHtcblx0XHRcdFx0bG9jYXRpb24uaHJlZiA9IHZlcmlmeVVSTDtcblx0XHRcdH1cblx0XHRcdHJldHVybiBuZXcgT08udWkuUHJvY2VzcygoKTogdm9pZCA9PiB7XG5cdFx0XHRcdHZvaWQgd2luZG93TWFuYWdlci5jbG9zZVdpbmRvdyhtZXNzYWdlRGlhbG9nKTtcblx0XHRcdH0pO1xuXHRcdH07XG5cblx0XHR3aW5kb3dNYW5hZ2VyLmFkZFdpbmRvd3MoW21lc3NhZ2VEaWFsb2ddKTtcblx0XHR2b2lkIHdpbmRvd01hbmFnZXIub3BlbldpbmRvdyhtZXNzYWdlRGlhbG9nLCBtZXNzYWdlRGlhbG9nUHJvcGVydHkpO1xuXHR9O1xuXG5cdGNvbnN0ICRjYVZpZXdzb3VyY2U6IEpRdWVyeSA9ICRib2R5LmZpbmQoJyNjYS12aWV3c291cmNlJyk7XG5cdGlmICgkY2FWaWV3c291cmNlLmxlbmd0aCkge1xuXHRcdGNvbnN0IGVkaXRJY29uOiBzdHJpbmcgPSBpc0NpdGl6ZW4gPyAnPHNwYW4gY2xhc3M9XCJjaXRpemVuLXVpLWljb24gbXctdWktaWNvbi13aWtpbWVkaWEtZWRpdFwiPjwvc3Bhbj4nIDogJyc7XG5cdFx0JGNhVmlld3NvdXJjZVxuXHRcdFx0LmF0dHIoJ2lkJywgJ2NhLWVkaXQnKVxuXHRcdFx0LmZpbmQoJ2EnKVxuXHRcdFx0LmF0dHIoJ2FyaWEtbGFiZWwnLCBnZXRNZXNzYWdlKCdEaWFsb2dNZXNzYWdlJykpXG5cdFx0XHQuaHRtbChlZGl0SWNvbiArIGdldE1lc3NhZ2UoJ0VkaXQnKSlcblx0XHRcdC5vbignY2xpY2snLCAoZXZlbnQ6IEpRdWVyeS5DbGlja0V2ZW50KTogdm9pZCA9PiB7XG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdG9wZW5EaWFsb2coKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0aWYgKFsnZWRpdCcsICdzdWJtaXQnXS5pbmNsdWRlcyh3Z0FjdGlvbikpIHtcblx0XHRvcGVuRGlhbG9nKCk7XG5cdH1cbn07XG5cbmV4cG9ydCB7aW5pdERpYWxvZ307XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxxQkFBcUNDLFFBQUEsaUJBQUE7O0FDQXJDLElBQUFDLG9CQUF1QkQsUUFBQSxpQkFBQTtBQUV2QixJQUFNRSxrQkFBa0JBLE1BQU07QUFDN0IsU0FBTztJQUNOQyxTQUFBLEdBQVFGLGtCQUFBRyxVQUFTO01BQ2hCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RDLE9BQUEsR0FBTUwsa0JBQUFHLFVBQVM7TUFDZEMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNERSxPQUFBLEdBQU1OLGtCQUFBRyxVQUFTO01BQ2RDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREcsU0FBQSxHQUFRUCxrQkFBQUcsVUFBUztNQUNoQkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNESSxjQUFBLEdBQWFSLGtCQUFBRyxVQUFTO01BQ3JCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RLLGdCQUFBLEdBQWVULGtCQUFBRyxVQUFTO01BQ3ZCQyxJQUFJO01BQ0osV0FDQztNQUNELFdBQ0M7SUFDRixDQUFDO0VBQ0Y7QUFDRDtBQUVBLElBQU1NLGVBQWVULGdCQUFnQjtBQUVyQyxJQUFNVSxhQUFnREMsU0FBUTtBQUM3RCxTQUFPRixhQUFhRSxHQUFHLEtBQUtBO0FBQzdCOztBQ3pDQSxJQUFNQyxnQ0FBZ0NBLE1BQTZDO0FBQ2xGLFFBQU1DLFNBQWlCQyxFQUFFLEtBQUssRUFBRUMsU0FBUyxtQkFBbUIsRUFBRUMsS0FBS04sV0FBVyxhQUFhLENBQUM7QUFDNUYsUUFBTU8sV0FBbUJILEVBQUUsUUFBUSxFQUFFQyxTQUFTLG1CQUFtQixFQUFFQyxLQUFLTixXQUFXLGVBQWUsQ0FBQztBQUVuRyxRQUFNUSx3QkFBK0Q7SUFDcEVDLE9BQU9OO0lBQ1BPLFNBQVNIO0lBQ1RJLFNBQVMsQ0FDUjtNQUNDQyxRQUFRO01BQ1JDLE9BQU87TUFDUEMsT0FBT1YsRUFBRSxLQUFLLEVBQUVFLEtBQUtOLFdBQVcsTUFBTSxDQUFDO0lBQ3hDLEdBQ0E7TUFDQ1ksUUFBUTtNQUNSQyxPQUFPLENBQUMsV0FBVyxhQUFhO01BQ2hDQyxPQUFPVixFQUFFLEtBQUssRUFBRUUsS0FBS04sV0FBVyxRQUFRLENBQUM7SUFDMUMsR0FDQTtNQUNDWSxRQUFRO01BQ1JDLE9BQU8sQ0FBQyxRQUFRLE9BQU87TUFDdkJDLE9BQU9WLEVBQUUsS0FBSyxFQUFFRSxLQUFLTixXQUFXLFFBQVEsQ0FBQztJQUMxQyxDQUFBO0VBRUY7QUFFQSxTQUFPUTtBQUNSOztBQzdCQSxJQUFNTyxvQkFBb0JBLE1BQTJCO0FBQ3BELFFBQU1DLGdCQUFxQyxJQUFJQyxHQUFHQyxHQUFHQyxjQUFjO0FBRW5FLFNBQU9IO0FBQ1I7O0FDQUEsSUFBTTtFQUFDSTtFQUFNQztBQUFRLElBQUlDLEdBQUdDLE9BQU9DLElBQUk7QUFDdkMsSUFBTUMsWUFBcUJMLFNBQVM7QUFDcEMsSUFBTU0sVUFBa0JKLEdBQUdLLEtBQUtDLE9BQU8sY0FBYztBQUNyRCxJQUFNQyxZQUFvQlAsR0FBR0ssS0FBS0MsT0FBTyxzQkFBc0I7QUFFL0QsSUFBSUU7QUFFSixJQUFNQyxhQUFjQyxXQUF5QztBQUM1RCxRQUFNaEIsZ0JBQXFDRCxrQkFBa0I7QUFDN0RDLGdCQUFjaUIsU0FBU0MsU0FBU0YsS0FBSztBQUVyQyxRQUFNeEIsd0JBQStETiw4QkFBOEI7QUFFbkcsUUFBTWlDLGFBQWFBLE1BQVk7QUFDOUIsUUFBSUwsZUFBZTtBQUNsQixVQUFJQSxjQUFjTSxTQUFTLEdBQUc7QUFDN0JOLHNCQUFjTyxNQUFNO01BQ3JCLE9BQU87QUFDTlAsc0JBQWNRLEtBQUs5QixxQkFBcUI7TUFDekM7QUFDQTtJQUNEO0FBRUFzQixvQkFBZ0IsSUFBSWIsR0FBR0MsR0FBR3FCLGNBQWM7QUFDeENULGtCQUFjVSxtQkFBb0I1QixZQUFrQztBQUNuRSxVQUFJQSxXQUFXLFFBQVE7QUFDdEI2QixpQkFBU0MsT0FBT2hCO01BQ2pCLFdBQVdkLFdBQVcsVUFBVTtBQUMvQjZCLGlCQUFTQyxPQUFPYjtNQUNqQjtBQUNBLGFBQU8sSUFBSVosR0FBR0MsR0FBR3lCLFFBQVEsTUFBWTtBQUNwQyxhQUFLM0IsY0FBYzRCLFlBQVlkLGFBQWE7TUFDN0MsQ0FBQztJQUNGO0FBRUFkLGtCQUFjNkIsV0FBVyxDQUFDZixhQUFhLENBQUM7QUFDeEMsU0FBS2QsY0FBYzhCLFdBQVdoQixlQUFldEIscUJBQXFCO0VBQ25FO0FBRUEsUUFBTXVDLGdCQUF3QmYsTUFBTWdCLEtBQUssZ0JBQWdCO0FBQ3pELE1BQUlELGNBQWNFLFFBQVE7QUFDekIsVUFBTUMsV0FBbUJ6QixZQUFZLG9FQUFvRTtBQUN6R3NCLGtCQUNFSSxLQUFLLE1BQU0sU0FBUyxFQUNwQkgsS0FBSyxHQUFHLEVBQ1JHLEtBQUssY0FBY25ELFdBQVcsZUFBZSxDQUFDLEVBQzlDb0QsS0FBS0YsV0FBV2xELFdBQVcsTUFBTSxDQUFDLEVBQ2xDcUQsR0FBRyxTQUFVQyxXQUFtQztBQUNoREEsWUFBTUMsZUFBZTtBQUNyQnBCLGlCQUFXO0lBQ1osQ0FBQztFQUNIO0FBRUEsTUFBSSxDQUFDLFFBQVEsUUFBUSxFQUFFcUIsU0FBU25DLFFBQVEsR0FBRztBQUMxQ2MsZUFBVztFQUNaO0FBQ0Q7O0FKekRBLE1BQUEsR0FBS2hELG1CQUFBc0UsU0FBUSxFQUFFQyxLQUFLLFNBQVNDLFlBQVkzQixPQUFzQztBQUM5RSxRQUFNO0lBQUM0QjtFQUFVLElBQUl0QyxHQUFHQyxPQUFPQyxJQUFJO0FBRW5DLE1BQUksQ0FBQ29DLFlBQVk7QUFDaEI7RUFDRDtBQUVBLE9BQUEsR0FBSXpFLG1CQUFBMEUsZUFBYyxDQUFDLE9BQU8scUJBQXFCLENBQUMsR0FBRztBQUNsRDtFQUNEO0FBRUE5QixhQUFXQyxLQUFLO0FBQ2pCLENBQUM7IiwKICAibmFtZXMiOiBbImltcG9ydF9leHRfZ2FkZ2V0MiIsICJyZXF1aXJlIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImdldEkxOG5NZXNzYWdlcyIsICJDYW5jZWwiLCAibG9jYWxpemUiLCAiZW4iLCAiRWRpdCIsICJIZWxwIiwgIlZlcmlmeSIsICJEaWFsb2dUaXRsZSIsICJEaWFsb2dNZXNzYWdlIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJnZW5lcmF0ZU1lc3NhZ2VEaWFsb2dQcm9wZXJ0eSIsICIkdGl0bGUiLCAiJCIsICJhZGRDbGFzcyIsICJ0ZXh0IiwgIiRtZXNzYWdlIiwgIm1lc3NhZ2VEaWFsb2dQcm9wZXJ0eSIsICJ0aXRsZSIsICJtZXNzYWdlIiwgImFjdGlvbnMiLCAiYWN0aW9uIiwgImZsYWdzIiwgImxhYmVsIiwgImluaXRXaW5kb3dNYW5hZ2VyIiwgIndpbmRvd01hbmFnZXIiLCAiT08iLCAidWkiLCAiV2luZG93TWFuYWdlciIsICJza2luIiwgIndnQWN0aW9uIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiaXNDaXRpemVuIiwgImhlbHBVUkwiLCAidXRpbCIsICJnZXRVcmwiLCAidmVyaWZ5VVJMIiwgIm1lc3NhZ2VEaWFsb2ciLCAiaW5pdERpYWxvZyIsICIkYm9keSIsICIkZWxlbWVudCIsICJhcHBlbmRUbyIsICJvcGVuRGlhbG9nIiwgImlzT3BlbmVkIiwgImNsb3NlIiwgIm9wZW4iLCAiTWVzc2FnZURpYWxvZyIsICJnZXRBY3Rpb25Qcm9jZXNzIiwgImxvY2F0aW9uIiwgImhyZWYiLCAiUHJvY2VzcyIsICJjbG9zZVdpbmRvdyIsICJhZGRXaW5kb3dzIiwgIm9wZW5XaW5kb3ciLCAiJGNhVmlld3NvdXJjZSIsICJmaW5kIiwgImxlbmd0aCIsICJlZGl0SWNvbiIsICJhdHRyIiwgImh0bWwiLCAib24iLCAiZXZlbnQiLCAicHJldmVudERlZmF1bHQiLCAiaW5jbHVkZXMiLCAiZ2V0Qm9keSIsICJ0aGVuIiwgImxvZ2luVG9FZGl0IiwgIndnVXNlck5hbWUiLCAidXNlcklzSW5Hcm91cCJdCn0K
