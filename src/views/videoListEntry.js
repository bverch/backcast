var VideoListEntryView = Backbone.View.extend({

  initialize: function() {

  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    // console.log(this);
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
