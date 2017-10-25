var VideoListView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('sync', this.render, this);
  },


  render: function() {
    this.$el.children().detach();
    this.collection.forEach(this.renderListEntry, this);
  },
  renderListEntry: function(video) {
    var listEntryView = new VideoListEntryView({model: video});
    this.$el.append(listEntryView.render());
  },

  template: templateURL('src/templates/videoList.html')

});

