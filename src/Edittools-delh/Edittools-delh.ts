import {edittoolsDelh} from './modules/core';

const {wgPageName} = mw.config.get();

if (/^FurryWiki(?:[_ ]talk)?:存废讨论\//i.test(wgPageName)) {
	edittoolsDelh();
}
