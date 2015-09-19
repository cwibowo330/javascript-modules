
var imgrotator = {
	init: function() {
		this.cacheDom();
		setInterval(this.rotateImages.bind(this), 3000);
	},
	cacheDom: function() {	
		this.$el = $('.img-rotator');
		this.$current = this.$el.find('div.current');
		this.$prev = this.$el.find('div.previous');
		this.$next = this.$current.next();
		this.$length = this.$next.length;
		this.$first = this.$el.find('div:first-child');
		this.$last = this.$el.find('div:last-child');
	},
	rotateImages: function(){
		//checks if its the last div
		if ((this.$current.hasClass("last")) == true)
			this.$next = this.$first;

			//fades to next div
			this.$current.removeClass('current').addClass('previous');
			this.$next.css({opacity: 0.0}).addClass('current')
			.animate({ opacity: 1.0 }, 1000, function(){
				console.log('got this far');
			});
			this.$current.removeClass('current').next();
	}
};

imgrotator.init();
 