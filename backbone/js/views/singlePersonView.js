// Namespace for app
var app = app || {};

// View for single person view
app.singlePersonView = Backbone.View.extend({
	tagName: "article",
	className: "listItem",

	template: _.template( $("#person").html() ),

	render: function() {
		var personTemplate = this.template(this.model.toJSON());
		this.$el.html(personTemplate);
		return this;
	},

	events: {
		'mouseover': 'addBgColor',
		'mouseout': 'removeBgColor'
	},

	addBgColor: function() {
		this.$el.addClass("bgColorImage");
	},

	removeBgColor: function() {
		this.$el.removeClass("bgColorImage");
	}
});