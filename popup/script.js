
var popup = {
	init: function() {
		this.cacheDom();
		this.bindEvents();
	},
	cacheDom: function() {	
		this.$body = $('body');
		this.$popup = $('.popup');
		this.$popupbg = $('.popup-bg');
		this.$popupwrap = $('.popup-wrap');
		this.$popupclose = this.$popupwrap.find('.close');;
	},
	bindEvents: function(){
		this.$popup.on('click', this.showPopup.bind(this));
		this.$popupbg.on('click', this.hidePopup.bind(this));
		this.$popupclose.on('click', this.hidePopup.bind(this));
	},
	showPopup: function(){
		this.$popupbg.show();
		this.$popupwrap.show();
	},
	hidePopup: function() {
		this.$popupbg.hide();
		this.$popupwrap.hide();
	}
};

popup.init();
 