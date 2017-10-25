var SearchView = Backbone.View.extend({


  events: {
    'click button': 'handleClick',
    'keyup': 'keyAction'
  },
  
  keyAction: function(e) {
    if (e.keyCode === 13) {
      this.handleClick();
    }
  },

  handleClick: function() {
    var query = $('input').val();
    this.collection.search(query);
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')

});
