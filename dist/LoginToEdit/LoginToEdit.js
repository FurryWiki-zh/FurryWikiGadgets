/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/LoginToEdit}
 * @source {@link https://github.com/FurryWiki-zh/FurryWikiGadgets/tree/master/src/LoginToEdit}
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

// dist/LoginToEdit/LoginToEdit.js
//! src/LoginToEdit/LoginToEdit.ts
var import_ext_gadget2 = require("ext.gadget.Util");
//! src/AjaxLogin/options.json
var loginElementSelector = 'a:has(.ajaxlogin-mount-point),#pt-login a,#pt-login>a,.vector-user-menu-login>a,#user-tools>a[href*="Special"],#p-personal a[href*="UserLogin"]';
var configKey = "gadget-AjaxLogin__Initialized";
//! src/LoginToEdit/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    Cancel: (0, import_ext_gadget.localize)({
      en: "Cancel",
      ja: "キャンセル",
      "zh-hans": "暂不登录账号",
      "zh-hant": "暫不登入賬號"
    }),
    Edit: (0, import_ext_gadget.localize)({
      en: "Edit",
      ja: "編集",
      "zh-hans": "编辑",
      "zh-hant": "編輯"
    }),
    Login: (0, import_ext_gadget.localize)({
      en: "Login",
      ja: "ログイン",
      "zh-hans": "登录已有账号",
      "zh-hant": "登入已有賬號"
    }),
    Register: (0, import_ext_gadget.localize)({
      en: "Register",
      ja: "アカウントを作成",
      "zh-hans": "注册新的账号",
      "zh-hant": "註冊新的賬號"
    }),
    DialogTitle: (0, import_ext_gadget.localize)({
      en: "Welcome to FurryWiki!",
      ja: "福瑞百科へようこそ！",
      "zh-hans": "欢迎来到福瑞百科！",
      "zh-hant": "歡迎來到福瑞百科！"
    }),
    DialogMessage: (0, import_ext_gadget.localize)({
      en: "You have not yet logged in FurryWiki. Register and log in to your account to contribute.",
      ja: "あなたはまだ福瑞百科にログインしていません。アカウントを作成し、ログインして福瑞百科を改善することができます。",
      "zh-hans": "您尚未登录福瑞百科。您可以注册并登录账号，帮助完善福瑞百科。",
      "zh-hant": "您尚未登錄福瑞百科。您可以注冊並登錄賬號，幫助完善福瑞百科。"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/LoginToEdit/modules/util/generateMessageDialogProperty.ts
var generateMessageDialogProperty = () => {
  const $title = $("<b>").addClass("oo-ui-window-head").text(getMessage("DialogTitle"));
  const $message = $("<span>").addClass("oo-ui-window-foot").text(getMessage("DialogMessage"));
  const messageDialogProperty = {
    title: $title,
    message: $message,
    actions: [{
      action: "login",
      flags: ["primary", "progressive"],
      label: $("<b>").text(getMessage("Login"))
    }, {
      action: "register",
      flags: "progressive",
      label: $("<b>").text(getMessage("Register"))
    }, {
      action: "cancel",
      flags: ["safe", "close"],
      label: $("<b>").text(getMessage("Cancel"))
    }]
  };
  return messageDialogProperty;
};
//! src/LoginToEdit/modules/initWindowManager.ts
var initWindowManager = () => {
  const windowManager = new OO.ui.WindowManager();
  return windowManager;
};
//! src/LoginToEdit/modules/initDialog.ts
var {
  skin,
  wgAction,
  wgPageName
} = mw.config.get();
var isCitizen = skin === "citizen";
var loginURL = mw.util.getUrl("Special:UserLogin", {
  returnto: wgPageName
});
var registerURL = mw.util.getUrl("Special:CreateAccount", {
  returnto: wgPageName
});
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
      if (action === "login") {
        const $element = $(loginElementSelector);
        if ($element.length && mw.config.get(configKey) === true) {
          $element.trigger("click");
        } else {
          location.href = loginURL;
        }
      } else if (action === "register") {
        location.href = registerURL;
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
      $caViewsource.find("a").addClass("citizen-cdx-button--size-large cdx-button cdx-button--fake-button cdx-button--fake-button--enabled cdx-button--weight-primary cdx-button--action-progressive");
    }
  }
  if (["edit", "submit"].includes(wgAction)) {
    openDialog();
  }
};
//! src/LoginToEdit/LoginToEdit.ts
void (0, import_ext_gadget2.getBody)().then(function loginToEdit($body) {
  const {
    wgUserName
  } = mw.config.get();
  if (wgUserName) {
    return;
  }
  initDialog($body);
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0xvZ2luVG9FZGl0L0xvZ2luVG9FZGl0LnRzIiwgInNyYy9BamF4TG9naW4vb3B0aW9ucy5qc29uIiwgInNyYy9Mb2dpblRvRWRpdC9tb2R1bGVzL2kxOG4udHMiLCAic3JjL0xvZ2luVG9FZGl0L21vZHVsZXMvdXRpbC9nZW5lcmF0ZU1lc3NhZ2VEaWFsb2dQcm9wZXJ0eS50cyIsICJzcmMvTG9naW5Ub0VkaXQvbW9kdWxlcy9pbml0V2luZG93TWFuYWdlci50cyIsICJzcmMvTG9naW5Ub0VkaXQvbW9kdWxlcy9pbml0RGlhbG9nLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge2luaXREaWFsb2d9IGZyb20gJy4vbW9kdWxlcy9pbml0RGlhbG9nJztcblxudm9pZCBnZXRCb2R5KCkudGhlbihmdW5jdGlvbiBsb2dpblRvRWRpdCgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkIHtcblx0Y29uc3Qge3dnVXNlck5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGlmICh3Z1VzZXJOYW1lKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aW5pdERpYWxvZygkYm9keSk7XG59KTtcbiIsICJ7XG5cdFwibG9naW5FbGVtZW50U2VsZWN0b3JcIjogXCJhOmhhcyguYWpheGxvZ2luLW1vdW50LXBvaW50KSwjcHQtbG9naW4gYSwjcHQtbG9naW4+YSwudmVjdG9yLXVzZXItbWVudS1sb2dpbj5hLCN1c2VyLXRvb2xzPmFbaHJlZio9XFxcIlNwZWNpYWxcXFwiXSwjcC1wZXJzb25hbCBhW2hyZWYqPVxcXCJVc2VyTG9naW5cXFwiXVwiLFxuXHRcImNvbmZpZ0tleVwiOiBcImdhZGdldC1BamF4TG9naW5fX0luaXRpYWxpemVkXCIsXG5cdFwidmVyc2lvblwiOiBcIjQuMFwiXG59XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdENhbmNlbDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdDYW5jZWwnLFxuXHRcdFx0amE6ICfjgq3jg6Pjg7Pjgrvjg6snLFxuXHRcdFx0J3poLWhhbnMnOiAn5pqC5LiN55m75b2V6LSm5Y+3Jyxcblx0XHRcdCd6aC1oYW50JzogJ+aaq+S4jeeZu+WFpeizrOiZnycsXG5cdFx0fSksXG5cdFx0RWRpdDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdFZGl0Jyxcblx0XHRcdGphOiAn57eo6ZuGJyxcblx0XHRcdCd6aC1oYW5zJzogJ+e8lui+kScsXG5cdFx0XHQnemgtaGFudCc6ICfnt6jovK8nLFxuXHRcdH0pLFxuXHRcdExvZ2luOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0xvZ2luJyxcblx0XHRcdGphOiAn44Ot44Kw44Kk44OzJyxcblx0XHRcdCd6aC1oYW5zJzogJ+eZu+W9leW3suaciei0puWPtycsXG5cdFx0XHQnemgtaGFudCc6ICfnmbvlhaXlt7LmnInos6zomZ8nLFxuXHRcdH0pLFxuXHRcdFJlZ2lzdGVyOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1JlZ2lzdGVyJyxcblx0XHRcdGphOiAn44Ki44Kr44Km44Oz44OI44KS5L2c5oiQJyxcblx0XHRcdCd6aC1oYW5zJzogJ+azqOWGjOaWsOeahOi0puWPtycsXG5cdFx0XHQnemgtaGFudCc6ICfoqLvlhormlrDnmoTos6zomZ8nLFxuXHRcdH0pLFxuXHRcdERpYWxvZ1RpdGxlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1dlbGNvbWUgdG8gRnVycnlXaWtpIScsXG5cdFx0XHRqYTogJ+emj+eRnueZvuenkeOBuOOCiOOBhuOBk+OBne+8gScsXG5cdFx0XHQnemgtaGFucyc6ICfmrKLov47mnaXliLDnpo/nkZ7nmb7np5HvvIEnLFxuXHRcdFx0J3poLWhhbnQnOiAn5q2h6L+O5L6G5Yiw56aP55Ge55m+56eR77yBJyxcblx0XHR9KSxcblx0XHREaWFsb2dNZXNzYWdlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1lvdSBoYXZlIG5vdCB5ZXQgbG9nZ2VkIGluIEZ1cnJ5V2lraS4gUmVnaXN0ZXIgYW5kIGxvZyBpbiB0byB5b3VyIGFjY291bnQgdG8gY29udHJpYnV0ZS4nLFxuXHRcdFx0amE6ICfjgYLjgarjgZ/jga/jgb7jgaDnpo/nkZ7nmb7np5Hjgavjg63jgrDjgqTjg7PjgZfjgabjgYTjgb7jgZvjgpPjgILjgqLjgqvjgqbjg7Pjg4jjgpLkvZzmiJDjgZfjgIHjg63jgrDjgqTjg7PjgZfjgabnpo/nkZ7nmb7np5HjgpLmlLnlloTjgZnjgovjgZPjgajjgYzjgafjgY3jgb7jgZnjgIInLFxuXHRcdFx0J3poLWhhbnMnOiAn5oKo5bCa5pyq55m75b2V56aP55Ge55m+56eR44CC5oKo5Y+v5Lul5rOo5YaM5bm255m75b2V6LSm5Y+377yM5biu5Yqp5a6M5ZaE56aP55Ge55m+56eR44CCJyxcblx0XHRcdCd6aC1oYW50JzogJ+aCqOWwmuacqueZu+mMhOemj+eRnueZvuenkeOAguaCqOWPr+S7peazqOWGiuS4pueZu+mMhOizrOiZn++8jOW5q+WKqeWujOWWhOemj+eRnueZvuenkeOAgicsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5cbmNvbnN0IGdlbmVyYXRlTWVzc2FnZURpYWxvZ1Byb3BlcnR5ID0gKCk6IE9PLnVpLldpbmRvd01hbmFnZXIuV2luZG93T3BlbmluZ0RhdGEgPT4ge1xuXHRjb25zdCAkdGl0bGU6IEpRdWVyeSA9ICQoJzxiPicpLmFkZENsYXNzKCdvby11aS13aW5kb3ctaGVhZCcpLnRleHQoZ2V0TWVzc2FnZSgnRGlhbG9nVGl0bGUnKSk7XG5cdGNvbnN0ICRtZXNzYWdlOiBKUXVlcnkgPSAkKCc8c3Bhbj4nKS5hZGRDbGFzcygnb28tdWktd2luZG93LWZvb3QnKS50ZXh0KGdldE1lc3NhZ2UoJ0RpYWxvZ01lc3NhZ2UnKSk7XG5cblx0Y29uc3QgbWVzc2FnZURpYWxvZ1Byb3BlcnR5OiBPTy51aS5XaW5kb3dNYW5hZ2VyLldpbmRvd09wZW5pbmdEYXRhID0ge1xuXHRcdHRpdGxlOiAkdGl0bGUsXG5cdFx0bWVzc2FnZTogJG1lc3NhZ2UsXG5cdFx0YWN0aW9uczogW1xuXHRcdFx0e1xuXHRcdFx0XHRhY3Rpb246ICdsb2dpbicsXG5cdFx0XHRcdGZsYWdzOiBbJ3ByaW1hcnknLCAncHJvZ3Jlc3NpdmUnXSxcblx0XHRcdFx0bGFiZWw6ICQoJzxiPicpLnRleHQoZ2V0TWVzc2FnZSgnTG9naW4nKSksXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRhY3Rpb246ICdyZWdpc3RlcicsXG5cdFx0XHRcdGZsYWdzOiAncHJvZ3Jlc3NpdmUnLFxuXHRcdFx0XHRsYWJlbDogJCgnPGI+JykudGV4dChnZXRNZXNzYWdlKCdSZWdpc3RlcicpKSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGFjdGlvbjogJ2NhbmNlbCcsXG5cdFx0XHRcdGZsYWdzOiBbJ3NhZmUnLCAnY2xvc2UnXSxcblx0XHRcdFx0bGFiZWw6ICQoJzxiPicpLnRleHQoZ2V0TWVzc2FnZSgnQ2FuY2VsJykpLFxuXHRcdFx0fSxcblx0XHRdLFxuXHR9O1xuXG5cdHJldHVybiBtZXNzYWdlRGlhbG9nUHJvcGVydHk7XG59O1xuXG5leHBvcnQge2dlbmVyYXRlTWVzc2FnZURpYWxvZ1Byb3BlcnR5fTtcbiIsICJjb25zdCBpbml0V2luZG93TWFuYWdlciA9ICgpOiBPTy51aS5XaW5kb3dNYW5hZ2VyID0+IHtcblx0Y29uc3Qgd2luZG93TWFuYWdlcjogT08udWkuV2luZG93TWFuYWdlciA9IG5ldyBPTy51aS5XaW5kb3dNYW5hZ2VyKCk7XG5cblx0cmV0dXJuIHdpbmRvd01hbmFnZXI7XG59O1xuXG5leHBvcnQge2luaXRXaW5kb3dNYW5hZ2VyfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJ34vQWpheExvZ2luL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2dlbmVyYXRlTWVzc2FnZURpYWxvZ1Byb3BlcnR5fSBmcm9tICcuL3V0aWwvZ2VuZXJhdGVNZXNzYWdlRGlhbG9nUHJvcGVydHknO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuaW1wb3J0IHtpbml0V2luZG93TWFuYWdlcn0gZnJvbSAnLi9pbml0V2luZG93TWFuYWdlcic7XG5cbmNvbnN0IHtza2luLCB3Z0FjdGlvbiwgd2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5jb25zdCBpc0NpdGl6ZW46IGJvb2xlYW4gPSBza2luID09PSAnY2l0aXplbic7XG5jb25zdCBsb2dpblVSTDogc3RyaW5nID0gbXcudXRpbC5nZXRVcmwoJ1NwZWNpYWw6VXNlckxvZ2luJywge1xuXHRyZXR1cm50bzogd2dQYWdlTmFtZSxcbn0pO1xuY29uc3QgcmVnaXN0ZXJVUkw6IHN0cmluZyA9IG13LnV0aWwuZ2V0VXJsKCdTcGVjaWFsOkNyZWF0ZUFjY291bnQnLCB7XG5cdHJldHVybnRvOiB3Z1BhZ2VOYW1lLFxufSk7XG5cbmxldCBtZXNzYWdlRGlhbG9nOiBPTy51aS5NZXNzYWdlRGlhbG9nO1xuXG5jb25zdCBpbml0RGlhbG9nID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRjb25zdCB3aW5kb3dNYW5hZ2VyOiBPTy51aS5XaW5kb3dNYW5hZ2VyID0gaW5pdFdpbmRvd01hbmFnZXIoKTtcblx0d2luZG93TWFuYWdlci4kZWxlbWVudC5hcHBlbmRUbygkYm9keSk7XG5cblx0Y29uc3QgbWVzc2FnZURpYWxvZ1Byb3BlcnR5OiBPTy51aS5XaW5kb3dNYW5hZ2VyLldpbmRvd09wZW5pbmdEYXRhID0gZ2VuZXJhdGVNZXNzYWdlRGlhbG9nUHJvcGVydHkoKTtcblxuXHRjb25zdCBvcGVuRGlhbG9nID0gKCk6IHZvaWQgPT4ge1xuXHRcdGlmIChtZXNzYWdlRGlhbG9nKSB7XG5cdFx0XHRpZiAobWVzc2FnZURpYWxvZy5pc09wZW5lZCgpKSB7XG5cdFx0XHRcdG1lc3NhZ2VEaWFsb2cuY2xvc2UoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG1lc3NhZ2VEaWFsb2cub3BlbihtZXNzYWdlRGlhbG9nUHJvcGVydHkpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdG1lc3NhZ2VEaWFsb2cgPSBuZXcgT08udWkuTWVzc2FnZURpYWxvZygpO1xuXHRcdG1lc3NhZ2VEaWFsb2cuZ2V0QWN0aW9uUHJvY2VzcyA9IChhY3Rpb246IHN0cmluZyk6IE9PLnVpLlByb2Nlc3MgPT4ge1xuXHRcdFx0aWYgKGFjdGlvbiA9PT0gJ2xvZ2luJykge1xuXHRcdFx0XHRjb25zdCAkZWxlbWVudDogSlF1ZXJ5PEhUTUxBbmNob3JFbGVtZW50PiA9ICQoT1BUSU9OUy5sb2dpbkVsZW1lbnRTZWxlY3Rvcik7XG5cdFx0XHRcdGlmICgkZWxlbWVudC5sZW5ndGggJiYgbXcuY29uZmlnLmdldChPUFRJT05TLmNvbmZpZ0tleSkgPT09IHRydWUpIHtcblx0XHRcdFx0XHQkZWxlbWVudC50cmlnZ2VyKCdjbGljaycpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGxvY2F0aW9uLmhyZWYgPSBsb2dpblVSTDtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmIChhY3Rpb24gPT09ICdyZWdpc3RlcicpIHtcblx0XHRcdFx0bG9jYXRpb24uaHJlZiA9IHJlZ2lzdGVyVVJMO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG5ldyBPTy51aS5Qcm9jZXNzKCgpOiB2b2lkID0+IHtcblx0XHRcdFx0dm9pZCB3aW5kb3dNYW5hZ2VyLmNsb3NlV2luZG93KG1lc3NhZ2VEaWFsb2cpO1xuXHRcdFx0fSk7XG5cdFx0fTtcblxuXHRcdHdpbmRvd01hbmFnZXIuYWRkV2luZG93cyhbbWVzc2FnZURpYWxvZ10pO1xuXHRcdHZvaWQgd2luZG93TWFuYWdlci5vcGVuV2luZG93KG1lc3NhZ2VEaWFsb2csIG1lc3NhZ2VEaWFsb2dQcm9wZXJ0eSk7XG5cdH07XG5cblx0Y29uc3QgJGNhVmlld3NvdXJjZTogSlF1ZXJ5ID0gJGJvZHkuZmluZCgnI2NhLXZpZXdzb3VyY2UnKTtcblx0aWYgKCRjYVZpZXdzb3VyY2UubGVuZ3RoKSB7XG5cdFx0Y29uc3QgZWRpdEljb246IHN0cmluZyA9IGlzQ2l0aXplbiA/ICc8c3BhbiBjbGFzcz1cImNpdGl6ZW4tdWktaWNvbiBtdy11aS1pY29uLXdpa2ltZWRpYS1lZGl0XCI+PC9zcGFuPicgOiAnJztcblx0XHQkY2FWaWV3c291cmNlXG5cdFx0XHQuYXR0cignaWQnLCAnY2EtZWRpdCcpXG5cdFx0XHQuZmluZCgnYScpXG5cdFx0XHQuYXR0cignYXJpYS1sYWJlbCcsIGdldE1lc3NhZ2UoJ0RpYWxvZ01lc3NhZ2UnKSlcblx0XHRcdC5odG1sKGVkaXRJY29uICsgKGlzQ2l0aXplbiA/IGA8c3Bhbj4ke2dldE1lc3NhZ2UoJ0VkaXQnKX08L3NwYW4+YCA6IGdldE1lc3NhZ2UoJ0VkaXQnKSkpXG5cdFx0XHQub24oJ2NsaWNrJywgKGV2ZW50OiBKUXVlcnkuQ2xpY2tFdmVudCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRvcGVuRGlhbG9nKCk7XG5cdFx0XHR9KTtcblxuXHRcdGlmIChpc0NpdGl6ZW4pIHtcblx0XHRcdCRjYVZpZXdzb3VyY2Vcblx0XHRcdFx0LmZpbmQoJ2EnKVxuXHRcdFx0XHQuYWRkQ2xhc3MoXG5cdFx0XHRcdFx0J2NpdGl6ZW4tY2R4LWJ1dHRvbi0tc2l6ZS1sYXJnZSBjZHgtYnV0dG9uIGNkeC1idXR0b24tLWZha2UtYnV0dG9uIGNkeC1idXR0b24tLWZha2UtYnV0dG9uLS1lbmFibGVkIGNkeC1idXR0b24tLXdlaWdodC1wcmltYXJ5IGNkeC1idXR0b24tLWFjdGlvbi1wcm9ncmVzc2l2ZSdcblx0XHRcdFx0KTtcblx0XHR9XG5cdH1cblxuXHRpZiAoWydlZGl0JywgJ3N1Ym1pdCddLmluY2x1ZGVzKHdnQWN0aW9uKSkge1xuXHRcdG9wZW5EaWFsb2coKTtcblx0fVxufTtcblxuZXhwb3J0IHtpbml0RGlhbG9nfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHFCQUFzQkMsUUFBQSxpQkFBQTs7QUNDckIsSUFBQUMsdUJBQXdCO0FBQ3hCLElBQUFDLFlBQWE7O0FDRmQsSUFBQUMsb0JBQXVCSCxRQUFBLGlCQUFBO0FBRXZCLElBQU1JLGtCQUFrQkEsTUFBTTtBQUM3QixTQUFPO0lBQ05DLFNBQUEsR0FBUUYsa0JBQUFHLFVBQVM7TUFDaEJDLElBQUk7TUFDSkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNEQyxPQUFBLEdBQU1OLGtCQUFBRyxVQUFTO01BQ2RDLElBQUk7TUFDSkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNERSxRQUFBLEdBQU9QLGtCQUFBRyxVQUFTO01BQ2ZDLElBQUk7TUFDSkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNERyxXQUFBLEdBQVVSLGtCQUFBRyxVQUFTO01BQ2xCQyxJQUFJO01BQ0pDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREksY0FBQSxHQUFhVCxrQkFBQUcsVUFBUztNQUNyQkMsSUFBSTtNQUNKQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RLLGdCQUFBLEdBQWVWLGtCQUFBRyxVQUFTO01BQ3ZCQyxJQUFJO01BQ0pDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7RUFDRjtBQUNEO0FBRUEsSUFB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LGVBQWUsQ0FBQyxFQUM5Q3VELEtBQUtGLFlBQVkzQixZQUFBLFNBQUE4QixPQUFxQnhELFdBQVcsTUFBTSxHQUFDLFNBQUEsSUFBWUEsV0FBVyxNQUFNLEVBQUUsRUFDdkZ5RCxHQUFHLFNBQVVDLFdBQW1DO0FBQ2hEQSxZQUFNQyxlQUFlO0FBQ3JCdEIsaUJBQVc7SUFDWixDQUFDO0FBRUYsUUFBSVgsV0FBVztBQUNkeUIsb0JBQ0VDLEtBQUssR0FBRyxFQUNSL0MsU0FDQSw4SkFDRDtJQUNGO0VBQ0Q7QUFFQSxNQUFJLENBQUMsUUFBUSxRQUFRLEVBQUV1RCxTQUFTdkMsUUFBUSxHQUFHO0FBQzFDZ0IsZUFBVztFQUNaO0FBQ0Q7O0FMM0VBLE1BQUEsR0FBS3JELG1CQUFBNkUsU0FBUSxFQUFFQyxLQUFLLFNBQVNDLFlBQVk3QixPQUFzQztBQUM5RSxRQUFNO0lBQUM4QjtFQUFVLElBQUl6QyxHQUFHQyxPQUFPQyxJQUFJO0FBRW5DLE1BQUl1QyxZQUFZO0FBQ2Y7RUFDRDtBQUVBL0IsYUFBV0MsS0FBSztBQUNqQixDQUFDOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfZXh0X2dhZGdldDIiLCAicmVxdWlyZSIsICJsb2dpbkVsZW1lbnRTZWxlY3RvciIsICJjb25maWdLZXkiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIkNhbmNlbCIsICJsb2NhbGl6ZSIsICJlbiIsICJqYSIsICJFZGl0IiwgIkxvZ2luIiwgIlJlZ2lzdGVyIiwgIkRpYWxvZ1RpdGxlIiwgIkRpYWxvZ01lc3NhZ2UiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImdlbmVyYXRlTWVzc2FnZURpYWxvZ1Byb3BlcnR5IiwgIiR0aXRsZSIsICIkIiwgImFkZENsYXNzIiwgInRleHQiLCAiJG1lc3NhZ2UiLCAibWVzc2FnZURpYWxvZ1Byb3BlcnR5IiwgInRpdGxlIiwgIm1lc3NhZ2UiLCAiYWN0aW9ucyIsICJhY3Rpb24iLCAiZmxhZ3MiLCAibGFiZWwiLCAiaW5pdFdpbmRvd01hbmFnZXIiLCAid2luZG93TWFuYWdlciIsICJPTyIsICJ1aSIsICJXaW5kb3dNYW5hZ2VyIiwgInNraW4iLCAid2dBY3Rpb24iLCAid2dQYWdlTmFtZSIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgImlzQ2l0aXplbiIsICJsb2dpblVSTCIsICJ1dGlsIiwgImdldFVybCIsICJyZXR1cm50byIsICJyZWdpc3RlclVSTCIsICJtZXNzYWdlRGlhbG9nIiwgImluaXREaWFsb2ciLCAiJGJvZHkiLCAiJGVsZW1lbnQiLCAiYXBwZW5kVG8iLCAib3BlbkRpYWxvZyIsICJpc09wZW5lZCIsICJjbG9zZSIsICJvcGVuIiwgIk1lc3NhZ2VEaWFsb2ciLCAiZ2V0QWN0aW9uUHJvY2VzcyIsICJsZW5ndGgiLCAidHJpZ2dlciIsICJsb2NhdGlvbiIsICJocmVmIiwgIlByb2Nlc3MiLCAiY2xvc2VXaW5kb3ciLCAiYWRkV2luZG93cyIsICJvcGVuV2luZG93IiwgIiRjYVZpZXdzb3VyY2UiLCAiZmluZCIsICJlZGl0SWNvbiIsICJhdHRyIiwgImh0bWwiLCAiY29uY2F0IiwgIm9uIiwgImV2ZW50IiwgInByZXZlbnREZWZhdWx0IiwgImluY2x1ZGVzIiwgImdldEJvZHkiLCAidGhlbiIsICJsb2dpblRvRWRpdCIsICJ3Z1VzZXJOYW1lIl0KfQo=
