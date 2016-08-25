var shopify = window.shopify || {};

window.shopify.module = (function(){
	var a = 'aaa';
	return {
		getA: function(){
			return a;
		}
	}
})();