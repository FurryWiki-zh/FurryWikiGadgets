import {getBody, userIsInGroup} from 'ext.gadget.Util';
import {initDialog} from './modules/initDialog';

void getBody().then(function loginToEdit($body: JQuery<HTMLBodyElement>): void {
	const {wgUserEmailConfirmed, wgUserName} = mw.config.get();

	if (!wgUserName) {
		return;
	}

	// 邮箱已确认的用户直接放行，无需弹窗
	if (wgUserEmailConfirmed) {
		return;
	}

	if (userIsInGroup(['bot', 'responsibleoperator'])) {
		return;
	}

	initDialog($body);
});
