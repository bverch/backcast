var VideoPlayerView = Backbone.View.extend({

  
  initialize: function() {
    //listen for if any of the models select property is triggered
    // this.model.on('change: model', this.render, this);
    this.collection.on('select', function(e) {
      this.model = e;
      this.render();
    }, this);
    
    this.collection.on('sync', function() {
      this.collection.at(0).select();
    }, this);
    
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
