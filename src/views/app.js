var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    this.render();
    $('body').append(this);
  },


  render: function() {
    this.$el.html(this.template());

    var videoListView = new VideoListView({
      el: this.$('.video-list'),
      collection: this.collection, 
      data: window.exampleVideoData
    }).render();
   
    this.$el.find('.list').append(videoListView.template());
   
  },

  template: templateURL('src/templates/app.html')

});
