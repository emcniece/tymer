angular.module('starter.services', [])

.factory('Timelines', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var timelines = [
    { id: 0, name: 'warmup 1', interval: 60 },
    { id: 1, name: 'warmup 2', interval: 300 },
    { id: 2, name: 'warmup 3', interval: 1800 },
    { id: 3, name: 'warmup 4', interval: 2700 },
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
