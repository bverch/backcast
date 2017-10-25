var Videos = Backbone.Collection.extend({

  model: Video,
  initialize: function() {
    this.url = 'https://www.googleapis.com/youtube/v3/search';
  },

  search: function(query) {
    this.fetch({
      data: {
        'key': YOUTUBE_API_KEY,
        'videoEmbeddable': 'true',
        'maxResults': '5',
        'type': 'video',
        'q': query,
        'part': 'snippet'
      }
    });
  },
  
  parse: function(response, options) {
    return response.items;
  }
  
});
