function qrCodePopup(url) {
	var qrUrl = 'http://chart.apis.google.com/chart?cht=qr&chs=250x250&chl='+encodeURI(url);
	var qrPopup = window.open(qrUrl, "qrWindow", "width=300, height=300");
	qrPopup.moveTo(600,300);
}

qrCodePopup(window.location);

