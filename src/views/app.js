var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.collection.search('lasers');
    this.render();
    
  },


  render: function() {
    this.$el.html(this.template());

    var videoListView = new VideoListView({
      el: '.list',
      collection: this.collection
    }).render();
    
    var searchView = new SearchView({
      el: '.search',
      collection: this.collection
    }).render();
    
    var videoPlayerView = new VideoPlayerView({
      el: '.player',
      collection: this.collection,
      model: this.collection.at(0)
    }).render();
   
  },

  template: templateURL('src/templates/app.html')

});
