/**
 * SPDX-License-Identifier: GPL-3.0
 * _addText: '{{Gadget Header|license=GPL-3.0}}'
 *
 * @base {@link https://github.com/MoegirlPediaInterfaceAdmins/MoegirlPediaInterfaceCodes/blob/master/src/gadgets/ShowAvatar/MediaWiki%3AGadget-ShowAvatar.css}
 * @source {@link https://github.com/FurryWiki-zh/FurryWikiGadgets/tree/master/src/ShowAvatar}
 * @license GPL-3.0 {@link https://furrywiki.org.cn/wiki/H:GPLV3}
 */

/**
 * Copyright (C)  MoegirlPedia Interface Admins
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

// dist/ShowAvatar/ShowAvatar.js
//! src/ShowAvatar/ShowAvatar.ts
var {
  wgServer,
  wgPageName,
  wgNamespaceNumber,
  wgUserName
} = mw.config.get();
if (wgUserName) {
  const userAvatarSrc = "".concat(wgServer, "/extensions/Avatar/avatar.php?user=").concat(encodeURIComponent(wgUserName));
  document.querySelectorAll(".citizen-userMenu .mw-ui-icon-wikimedia-userAvatar").forEach((span) => {
    const img = document.createElement("img");
    img.src = userAvatarSrc;
    img.alt = "".concat(wgUserName, "的头像");
    img.className = "citizen-userAvatar-image";
    span.replaceWith(img);
  });
}
if (wgNamespaceNumber === 2 && !wgPageName.includes("/")) {
  const $body = $("body");
  const header = $body.find("#citizen-page-header .citizen-page-header-inner .citizen-page-heading .firstHeading-container");
  const avatarUrl = new URL("/extensions/Avatar/avatar.php", wgServer);
  avatarUrl.searchParams.set("user", wgPageName.replace(/^user:/i, ""));
  const hrefUrl = new URL(avatarUrl.toString());
  hrefUrl.pathname = "/wiki/Special:Viewavatar";
  const srcUrl = new URL(avatarUrl.toString());
  header.prepend($("<a/>").attr({
    href: hrefUrl,
    title: "查看头像"
  }).prepend($("<img/>").attr({
    src: srcUrl,
    id: "user-rootpage-avatar"
  }).css({
    width: "2.2em",
    height: "2.2em"
  })));
}

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1Nob3dBdmF0YXIvU2hvd0F2YXRhci50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0ICcuL1Nob3dBdmF0YXIubGVzcyc7XG5cbmNvbnN0IHt3Z1NlcnZlciwgd2dQYWdlTmFtZSwgd2dOYW1lc3BhY2VOdW1iZXIsIHdnVXNlck5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXG4vLyAtLS0tIENpdGl6ZW4g55So5oi36I+c5Y2V5aS05YOP77yI5YWo5bGA77yM5bey55m75b2V55So5oi377yJLS0tLVxuaWYgKHdnVXNlck5hbWUpIHtcblx0Y29uc3QgdXNlckF2YXRhclNyYyA9IGAke3dnU2VydmVyfS9leHRlbnNpb25zL0F2YXRhci9hdmF0YXIucGhwP3VzZXI9JHtlbmNvZGVVUklDb21wb25lbnQod2dVc2VyTmFtZSl9YDtcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNpdGl6ZW4tdXNlck1lbnUgLm13LXVpLWljb24td2lraW1lZGlhLXVzZXJBdmF0YXInKS5mb3JFYWNoKChzcGFuKSA9PiB7XG5cdFx0Y29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cdFx0aW1nLnNyYyA9IHVzZXJBdmF0YXJTcmM7XG5cdFx0aW1nLmFsdCA9IGAke3dnVXNlck5hbWV955qE5aS05YOPYDtcblx0XHRpbWcuY2xhc3NOYW1lID0gJ2NpdGl6ZW4tdXNlckF2YXRhci1pbWFnZSc7XG5cdFx0c3Bhbi5yZXBsYWNlV2l0aChpbWcpO1xuXHR9KTtcbn1cblxuLy8gLS0tLSDnlKjmiLfpobXmoIfpopjml4HlpLTlg4/vvIjku4XpmZDnlKjmiLflkb3lkI3nqbrpl7TjgIHpnZ7lrZDpobXpnaLvvIktLS0tXG5pZiAod2dOYW1lc3BhY2VOdW1iZXIgPT09IDIgJiYgIXdnUGFnZU5hbWUuaW5jbHVkZXMoJy8nKSkge1xuXHRjb25zdCAkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4gPSAkKCdib2R5Jyk7XG5cdGNvbnN0IGhlYWRlciA9ICRib2R5LmZpbmQoXG5cdFx0JyNjaXRpemVuLXBhZ2UtaGVhZGVyIC5jaXRpemVuLXBhZ2UtaGVhZGVyLWlubmVyIC5jaXRpemVuLXBhZ2UtaGVhZGluZyAuZmlyc3RIZWFkaW5nLWNvbnRhaW5lcidcblx0KTtcblxuXHRjb25zdCBhdmF0YXJVcmwgPSBuZXcgVVJMKCcvZXh0ZW5zaW9ucy9BdmF0YXIvYXZhdGFyLnBocCcsIHdnU2VydmVyKTtcblx0YXZhdGFyVXJsLnNlYXJjaFBhcmFtcy5zZXQoJ3VzZXInLCB3Z1BhZ2VOYW1lLnJlcGxhY2UoL151c2VyOi9pLCAnJykpO1xuXG5cdGNvbnN0IGhyZWZVcmwgPSBuZXcgVVJMKGF2YXRhclVybC50b1N0cmluZygpKTtcblx0aHJlZlVybC5wYXRobmFtZSA9ICcvd2lraS9TcGVjaWFsOlZpZXdhdmF0YXInO1xuXHRjb25zdCBzcmNVcmwgPSBuZXcgVVJMKGF2YXRhclVybC50b1N0cmluZygpKTtcblx0aGVhZGVyLnByZXBlbmQoXG5cdFx0JCgnPGEvPicpXG5cdFx0XHQuYXR0cih7XG5cdFx0XHRcdGhyZWY6IGhyZWZVcmwsXG5cdFx0XHRcdHRpdGxlOiAn5p+l55yL5aS05YOPJyxcblx0XHRcdH0pXG5cdFx0XHQucHJlcGVuZChcblx0XHRcdFx0JCgnPGltZy8+Jylcblx0XHRcdFx0XHQuYXR0cih7XG5cdFx0XHRcdFx0XHRzcmM6IHNyY1VybCxcblx0XHRcdFx0XHRcdGlkOiAndXNlci1yb290cGFnZS1hdmF0YXInLFxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0LmNzcyh7XG5cdFx0XHRcdFx0XHR3aWR0aDogJzIuMmVtJyxcblx0XHRcdFx0XHRcdGhlaWdodDogJzIuMmVtJyxcblx0XHRcdFx0XHR9KVxuXHRcdFx0KVxuXHQpO1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNO0VBQUNBO0VBQVVDO0VBQVlDO0VBQW1CQztBQUFVLElBQUlDLEdBQUdDLE9BQU9DLElBQUk7QUFHNUUsSUFBSUgsWUFBWTtBQUNmLFFBQU1JLGdCQUFBLEdBQUFDLE9BQW1CUixVQUFRLHFDQUFBLEVBQUFRLE9BQXNDQyxtQkFBbUJOLFVBQVUsQ0FBQztBQUNyR08sV0FBU0MsaUJBQWlCLG9EQUFvRCxFQUFFQyxRQUFTQyxVQUFTO0FBQ2pHLFVBQU1DLE1BQU1KLFNBQVNLLGNBQWMsS0FBSztBQUN4Q0QsUUFBSUUsTUFBTVQ7QUFDVk8sUUFBSUcsTUFBQSxHQUFBVCxPQUFTTCxZQUFVLEtBQUE7QUFDdkJXLFFBQUlJLFlBQVk7QUFDaEJMLFNBQUtNLFlBQVlMLEdBQUc7RUFDckIsQ0FBQztBQUNGO0FBR0EsSUFBSVosc0JBQXNCLEtBQUssQ0FBQ0QsV0FBV21CLFNBQVMsR0FBRyxHQUFHO0FBQ3pELFFBQU1DLFFBQWlDQyxFQUFFLE1BQU07QUFDL0MsUUFBTUMsU0FBU0YsTUFBTUcsS0FDcEIsK0ZBQ0Q7QUFFQSxRQUFNQyxZQUFZLElBQUlDLElBQUksaUNBQWlDMUIsUUFBUTtBQUNuRXlCLFlBQVVFLGFBQWFDLElBQUksUUFBUTNCLFdBQVc0QixRQUFRLFdBQVcsRUFBRSxDQUFDO0FBRXBFLFFBQU1DLFVBQVUsSUFBSUosSUFBSUQsVUFBVU0sU0FBUyxDQUFDO0FBQzVDRCxVQUFRRSxXQUFXO0FBQ25CLFFBQU1DLFNBQVMsSUFBSVAsSUFBSUQsVUFBVU0sU0FBUyxDQUFDO0FBQzNDUixTQUFPVyxRQUNOWixFQUFFLE1BQU0sRUFDTmEsS0FBSztJQUNMQyxNQUFNTjtJQUNOTyxPQUFPO0VBQ1IsQ0FBQyxFQUNBSCxRQUNBWixFQUFFLFFBQVEsRUFDUmEsS0FBSztJQUNMbkIsS0FBS2lCO0lBQ0xLLElBQUk7RUFDTCxDQUFDLEVBQ0FDLElBQUk7SUFDSkMsT0FBTztJQUNQQyxRQUFRO0VBQ1QsQ0FBQyxDQUNILENBQ0Y7QUFDRDsiLAogICJuYW1lcyI6IFsid2dTZXJ2ZXIiLCAid2dQYWdlTmFtZSIsICJ3Z05hbWVzcGFjZU51bWJlciIsICJ3Z1VzZXJOYW1lIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAidXNlckF2YXRhclNyYyIsICJjb25jYXQiLCAiZW5jb2RlVVJJQ29tcG9uZW50IiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3JBbGwiLCAiZm9yRWFjaCIsICJzcGFuIiwgImltZyIsICJjcmVhdGVFbGVtZW50IiwgInNyYyIsICJhbHQiLCAiY2xhc3NOYW1lIiwgInJlcGxhY2VXaXRoIiwgImluY2x1ZGVzIiwgIiRib2R5IiwgIiQiLCAiaGVhZGVyIiwgImZpbmQiLCAiYXZhdGFyVXJsIiwgIlVSTCIsICJzZWFyY2hQYXJhbXMiLCAic2V0IiwgInJlcGxhY2UiLCAiaHJlZlVybCIsICJ0b1N0cmluZyIsICJwYXRobmFtZSIsICJzcmNVcmwiLCAicHJlcGVuZCIsICJhdHRyIiwgImhyZWYiLCAidGl0bGUiLCAiaWQiLCAiY3NzIiwgIndpZHRoIiwgImhlaWdodCJdCn0K
