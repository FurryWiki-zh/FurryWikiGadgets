import './ShowAvatar.less';

const {wgServer, wgPageName, wgNamespaceNumber, wgUserName} = mw.config.get();

// ---- Citizen 用户菜单头像（全局，已登录用户）----
if (wgUserName) {
	const userAvatarSrc = `${wgServer}/extensions/Avatar/avatar.php?user=${encodeURIComponent(wgUserName)}`;
	document.querySelectorAll('.mw-ui-icon-userAvatar, .mw-ui-icon-wikimedia-userAvatar').forEach((span) => {
		const img = document.createElement('img');
		img.src = userAvatarSrc;
		img.alt = `${wgUserName}的头像`;
		img.className = 'citizen-userAvatar-image';
		span.replaceWith(img);
	});
}

// ---- 用户页标题旁头像（仅限用户命名空间、非子页面）----
if (wgNamespaceNumber === 2 && !wgPageName.includes('/')) {
	const $body: JQuery<HTMLBodyElement> = $('body');
	const header = $body.find(
		'#citizen-page-header .citizen-page-header-inner .citizen-page-heading .firstHeading-container'
	);

	const avatarUrl = new URL('/extensions/Avatar/avatar.php', wgServer);
	avatarUrl.searchParams.set('user', wgPageName.replace(/^user:/i, ''));

	const hrefUrl = new URL(avatarUrl.toString());
	hrefUrl.pathname = '/wiki/Special:Viewavatar';
	const srcUrl = new URL(avatarUrl.toString());
	header.prepend(
		$('<a/>')
			.attr({
				href: hrefUrl,
				title: '查看头像',
			})
			.prepend(
				$('<img/>')
					.attr({
						src: srcUrl,
						id: 'user-rootpage-avatar',
					})
					.css({
						width: '2.2em',
						height: '2.2em',
					})
			)
	);
}
