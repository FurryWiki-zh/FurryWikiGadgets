import * as OPTIONS from '../../options.json';
import {getLastActiveMarker} from './getLastActiveMarker';
import {getTimestamp} from './getTimestamp';

const appendMarkerToUserLinks = async ({userName, $elements}: {userName: string; $elements: JQuery[]}) => {
	// Replace Set with uniqueArray, avoiding core-js polyfilling

	const timestamp = await getTimestamp(userName);

	if (!timestamp) {
		return;
	}

	for (const $element of $elements) {
		$(getLastActiveMarker(timestamp, true)).insertAfter($element);
	}
};

const appendMarkerToUserPage = async (userName: string) => {
	const timestamp = await getTimestamp(userName);

	if (!timestamp) {
		return;
	}

	const mountPoint = document.querySelector<HTMLElement>(OPTIONS.mountPointSelector);
	if (!mountPoint) {
		return;
	}

	mountPoint.prepend(getLastActiveMarker(timestamp, false));
};

export {appendMarkerToUserLinks, appendMarkerToUserPage};
