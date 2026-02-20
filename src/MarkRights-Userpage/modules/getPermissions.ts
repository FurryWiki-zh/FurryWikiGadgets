import type {UserRights} from '~/MarkRights/modules/types';
import {appendIcon} from './appendIcon';
import {getLocalUserGroups} from 'ext.gadget.MarkRights';
import {getMessage} from './i18n';
import {uniqueArray} from 'ext.gadget.Util';

const getPermissions = async (wgRelevantUserName: string): Promise<void> => {
	try {
		const localGroupsMap = await getLocalUserGroups([wgRelevantUserName]);
		const localGroups = localGroupsMap[wgRelevantUserName] ?? [];

		const groups = uniqueArray([...localGroups]).filter((element) => {
			// Do not show implicit groups. Bots Already shown in GeoLocationViewer
			return !['*', 'user', 'autoconfirmed', 'bot'].includes(element);
		});

		for (const group of groups) {
			appendIcon({indicatorText: getMessage(group as UserRights), spanClass: group as UserRights});
		}
	} catch {}
};

export {getPermissions};
