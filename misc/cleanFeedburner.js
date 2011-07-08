function cleanFeedburner() {
	var url = window.location.toString();
	if(url.search(/utm_source/i) > -1) {
		var newUrl = url.substr(0, url.search(/utm_source/i)-1);
		window.location = newUrl;
	}

	return false;
}
cleanFeedburner();

