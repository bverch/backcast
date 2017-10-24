var VideoListView = Backbone.View.extend({

  initialize: function() {
    //your code here
  },
  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    console.log('we are inside render function in videolistview');
    // console.log(this);
    // this.renderListEntry(this.collection(0));
    return this;
  },
  renderListEntry: function(entry) {
    var videoListEntryView = new VideoListEntryView({model: video});
    this.$el.append(videoListEntryView.render());
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});