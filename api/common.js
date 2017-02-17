export default {
	initStyleHack: function(){
		var dpr = window.devicePixelRatio || 1;
		var docEl = document.documentElement;
		var metaEl = document.querySelector('meta[name="viewport"]');
		var scale = 1 / dpr;
		var rem = docEl.clientWidth * dpr / 10;

		//设置viewport
		/*metaEl.setAttribute('content', 'width=' + dpr * docEl.clientWidth + 
			', initial-scale=' + scale +', maximum-scale=' + scale + 
		', minimum-scale=' + scale + ', user-scalable=no');*/
		
		//设置data-pdr,留作css hack
		docEl.setAttribute('data-dpr', dpr);

		//设置rem
		docEl.style.fontSize = parseInt(rem) + 'px';
	},
	getBroswerType: function(){
		var ua = window.navigator.userAgent.toLowerCase();
		return {
			isIOS: /iphone|ipad|ipod/i.test(ua) && window.MSStream,
			isAndroid: /android/i.test(ua) && !window.MSStream,
			isBustedAndroid: /android 2\.[12]/i.test(ua),
			isChromium: /chromium/i.test(ua)
		}
	},
	isFullScreenMode: function(){
		return document.fullscreenElement || document.mozFullScreen || document.webkitIsFullScreen;
	}
};
