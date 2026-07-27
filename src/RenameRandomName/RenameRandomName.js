/**
 * SPDX-License-Identifier: CC-BY-4.0
 * _addText: '{{Gadget Header|license=CC-BY-4.0}}'
 *
 * @source {@link https://github.com/FurryWiki-zh/FurryWikiGadgets/tree/master/src/RenameRandomName}
 * @license CC-BY-4.0 {@link https://furrywiki.org.cn/wiki/H:CC-BY-4.0}
 */
(function () {
	'use strict';

	if (mw.config.get('wgCanonicalSpecialPageName') !== 'Renameuser') return;

	$(() => {
		var $input = $('#renameuser input[name="newusername"]');
		if (!$input.length) return;

		var $indicator = $input.closest('.oo-ui-textInputWidget').find('.oo-ui-indicatorElement-indicator');
		if (!$indicator.length) return;

		$indicator
			.removeClass('oo-ui-indicator-required')
			.addClass('oo-ui-icon-die')
			.attr('title', '生成随机匿名用户名')
			.css({
				cursor: 'pointer',
				'pointer-events': 'auto',
			});

		$indicator.on('click', (e) => {
			e.stopPropagation();
			var suffix = Math.random().toString(36).substring(2, 12);
			$input.val(`用户已注销-${suffix}`).trigger('input change');
		});
	});
})();
