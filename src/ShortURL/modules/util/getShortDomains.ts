const getShortDomains = (): string[] => {
	const {wgWikiID} = mw.config.get();
	let domains: string[] = [];

	switch (wgWikiID) {
		case 'furrywiki':
			domains = ['furbk.wiki'];
			break;
	}

	return domains;
};

export {getShortDomains};
