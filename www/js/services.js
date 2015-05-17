angular.module('starter.services', [])

.factory('Timelines', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var timelines = [
    //{ id: 0, name: 'Scruff McGruff' },
  ];

  return {
    all: function() {
      return timelines;
    },
    get: function(timelineId) {
      // Simple index lookup
      return timelines[timelineId];
    }
  }
});
