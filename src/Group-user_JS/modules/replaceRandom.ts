import {userIsInGroup} from 'ext.gadget.Util';

const replaceRandom = ($body: JQuery<HTMLBodyElement>) => {
	const {wgWikiID} = mw.config.get();
	if (wgWikiID !== 'furrywiki') {
		return;
	}

	if (!userIsInGroup(['steward', 'confirmed', 'autoconfirmed'])) {
		return;
	}

	const $randomPageLink = $body.find('#n-randompage a');
	$randomPageLink.attr('href', '/wiki/Special:RandomPage');
};

export {replaceRandom};
