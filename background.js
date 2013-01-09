var callback = function (request) {
	return {'redirectUrl': 'http://twitter.com'};
};

var filter = {
	urls: ['*://*.twitter.com/search/%7BsearchTerms%7D?source=desktop-search'],
	types: ['main_frame']
};

var opt_extraInfoSpec = ['blocking'];

chrome.webRequest.onBeforeRequest.addListener(callback, filter, opt_extraInfoSpec);
